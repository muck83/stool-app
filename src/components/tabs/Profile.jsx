// Profile.jsx — personal profile page + Big Five personality breakdown
import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { loadB5, B5_TRAIT_LABELS, B5_TRAIT_CONTEXT, B5_STORAGE_KEY, B5_QUESTIONS, scoreB5 } from '../../data/bigFiveQuiz.js'
import BigFiveQuiz from '../BigFiveQuiz.jsx'

// ── Trait descriptions in plain language ──────────────────────────────────────
const TRAIT_DETAIL = {
  O: {
    name: 'Openness to Experience',
    high: 'You score high in Openness — you\'re intellectually curious, drawn to novel ideas, and comfortable with ambiguity. In a school context, this means you\'re likely to value professional autonomy and creative freedom, and may be more sensitive when those are constrained.',
    low:  'You score low in Openness — you prefer familiar structures and clear expectations. In a school context, this means you tend to thrive where systems are consistent and predictable, and may find constant change or poorly defined processes draining.',
    mid:  'Your Openness score is in the middle range — you balance comfort with structure and curiosity about new approaches without being strongly pulled in either direction.',
  },
  C: {
    name: 'Conscientiousness',
    high: 'You score high in Conscientiousness — you\'re organised, reliable, and follow through on commitments. In a school context, you\'ll notice administrative chaos more acutely than most, and are likely to be more critical of schools where management doesn\'t deliver on what it promises.',
    low:  'You score low in Conscientiousness — you\'re flexible and adaptive, less bothered by shifting plans or loose structures. In a school context, this means you\'re probably more forgiving of administrative disorder and less likely to flag it unless it\'s severe.',
    mid:  'Your Conscientiousness score is in the middle range — you can work in both structured and flexible environments without strong pull toward either.',
  },
  E: {
    name: 'Extraversion',
    high: 'You score high in Extraversion — you\'re energised by people, collaboration, and social interaction. In a school context, colleague culture and staff cohesion matter a lot to you. A fragmented or isolated staffroom hits differently when you\'re wired for connection.',
    low:  'You score low in Extraversion — you prefer independent work and find heavy social demands tiring. In a school context, you probably weight autonomy and quiet working conditions more than a highly social colleague culture.',
    mid:  'Your Extraversion score is in the middle range — you can work well in both collaborative and independent environments.',
  },
  A: {
    name: 'Agreeableness',
    high: 'You score high in Agreeableness — you\'re cooperative, warm, and prioritise interpersonal harmony. In a school context, you may soften criticism of difficult colleagues or leadership, and are more likely to tolerate conflict before naming it.',
    low:  'You score low in Agreeableness — you\'re direct, and you\'ll name problems clearly. In a school context, this means your assessments of leadership culture and management transparency are likely to be more frank than average. Readers who are also low in Agreeableness will find your reviews especially calibrating.',
    mid:  'Your Agreeableness score is in the middle range — you balance honesty with tact, and neither soften nor sharpen criticism strongly.',
  },
  N: {
    name: 'Neuroticism',
    high: 'You score high in Neuroticism — you\'re emotionally sensitive and experience stress more intensely. In a school context, this means you\'re a sharper instrument for detecting early warning signs in workload, exit safety, and management instability. Your concerns are real; they may just register earlier and stronger than for some colleagues.',
    low:  'You score low in Neuroticism — you\'re emotionally stable and calm under pressure. In a school context, you tend to absorb workplace friction without flagging it strongly. You may actually understate problems that a more sensitive colleague would report accurately.',
    mid:  'Your Neuroticism score is in the middle range — you experience some stress at work but manage it without strong amplification or suppression.',
  },
}

// ── Trait bar component ───────────────────────────────────────────────────────
function TraitBar({ trait, score }) {
  if (score == null) return null
  const pct = ((score - 2) / 8) * 100  // 2–10 range → 0–100%
  const isHigh = score >= 8
  const isLow  = score <= 4
  const color  = isHigh ? 'var(--teal)' : isLow ? '#BA7517' : 'var(--ink-3)'
  const label  = isHigh ? 'High' : isLow ? 'Low' : 'Mid'
  const detail = TRAIT_DETAIL[trait]

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '.35rem' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>
          {detail.name}
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color, marginLeft: '1rem', flexShrink: 0 }}>
          {label} · {score}/10
        </div>
      </div>
      {/* Bar */}
      <div style={{ height: 7, background: 'var(--border)', borderRadius: 99, overflow: 'hidden', marginBottom: '.6rem' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 99, transition: 'width .5s ease' }} />
      </div>
      {/* Interpretation */}
      <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>
        {isHigh ? detail.high : isLow ? detail.low : detail.mid}
      </div>
      {/* Review calibration note */}
      {(isHigh || isLow) && B5_TRAIT_CONTEXT[trait] && (
        <div style={{ marginTop: '.5rem', padding: '.5rem .75rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6 }}>
          <strong>How this shows in your reviews:</strong>{' '}
          {B5_TRAIT_CONTEXT[trait][isHigh ? 'high' : 'low']}
        </div>
      )}
    </div>
  )
}

// ── Leg score pill ────────────────────────────────────────────────────────────
function LegPill({ label, score, color, bg, textColor }) {
  return (
    <div style={{ border: `1px solid ${color}33`, borderTop: `3px solid ${color}`, borderRadius: '0 0 8px 8px', padding: '.75rem 1rem', background: bg, minWidth: 100 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: textColor, marginBottom: '.2rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: textColor }}>{score ?? '—'}<span style={{ fontSize: 12, fontWeight: 400 }}>/10</span></div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Profile() {
  const { profile, editProfile, setActiveTab } = useProfile()
  const [b5, setB5] = useState(loadB5)
  const [retaking, setRetaking] = useState(false)

  const handleRetake = () => {
    try { localStorage.removeItem(B5_STORAGE_KEY) } catch {}
    setB5(null)
    setRetaking(true)
  }

  const handleB5Complete = (scores) => {
    setB5(scores)
    setRetaking(false)
  }

  const traits = ['O', 'C', 'E', 'A', 'N']

  return (
    <div className="tp active">

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.75rem', marginBottom: '2rem', maxWidth: 720 }}>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--ink)', lineHeight: 1.2 }}>
            {profile.name || 'Your profile'}
          </div>
          {(profile.cc || profile.school) && (
            <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: '.3rem' }}>
              {[profile.school, profile.cc].filter(Boolean).join(' · ')}
            </div>
          )}
          {profile.dc && (
            <div style={{ fontSize: 13, color: 'var(--teal-dark)', marginTop: '.2rem' }}>
              Considering: {[profile.dcity, profile.dc].filter(Boolean).join(', ')}
            </div>
          )}
        </div>
        <button className="btn btn-ghost" style={{ fontSize: 12 }} onClick={editProfile}>
          Edit profile
        </button>
      </div>

      {/* Three-legged stool scores */}
      {(profile.sch != null || profile.plc != null || profile.pkg != null) && (
        <div style={{ maxWidth: 720, marginBottom: '2.5rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', marginBottom: '.75rem' }}>
            Your stool
          </div>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            <LegPill label="School"  score={profile.sch} color="#BA7517" bg="#FAEEDA" textColor="#633806" />
            <LegPill label="Place"   score={profile.plc} color="#534AB7" bg="#EEEDFE" textColor="#26215C" />
            <LegPill label="Package" score={profile.pkg} color="#1D9E75" bg="#E1F5EE" textColor="#085041" />
          </div>
          <div style={{ marginTop: '.75rem' }}>
            <button
              className="btn btn-ghost"
              style={{ fontSize: 12 }}
              onClick={() => setActiveTab('diagnostic')}
            >
              Run the check-up →
            </button>
          </div>
        </div>
      )}

      {/* Big Five section */}
      <div style={{ maxWidth: 720 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: 'var(--ink)' }}>Personality</div>
            <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: '.2rem' }}>
              Big Five (TIPI) · scored 2–10 per trait
            </div>
          </div>
          {b5 && !retaking && (
            <button
              className="btn btn-ghost"
              style={{ fontSize: 12 }}
              onClick={handleRetake}
            >
              Retake
            </button>
          )}
        </div>

        {retaking || !b5 ? (
          <BigFiveQuiz
            onComplete={handleB5Complete}
            onSkip={b5 ? () => setRetaking(false) : null}
          />
        ) : (
          <>
            {/* What the profile means up top */}
            <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '1rem 1.25rem', marginBottom: '1.75rem', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}>
              These scores describe how you tend to perceive and react to your environment. They don't change how your school reviews are weighted — every review counts equally. What they do is give other teachers the context to calibrate: a reader with a similar profile can find your reviews directly, and a reader with a very different profile can factor in the lens before deciding what it means for them.
            </div>
            {/* Trait bars */}
            {traits.map(t => (
              <TraitBar key={t} trait={t} score={b5[t]} />
            ))}
            {/* Summary of notable traits */}
            {(() => {
              const notable = traits.filter(t => b5[t] >= 8 || b5[t] <= 4)
              if (notable.length === 0) return (
                <div style={{ fontSize: 13, color: 'var(--ink-3)', fontStyle: 'italic', marginTop: '.5rem' }}>
                  Your scores are all in the middle range — no particularly strong pulls in any direction. Your reviews will read as broadly calibrated rather than filtered through a strong disposition.
                </div>
              )
              return null
            })()}
          </>
        )}

        {!b5 && !retaking && (
          <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>
            You haven't taken the personality inventory yet. It takes about two minutes and helps other teachers calibrate your school reviews.
            <div style={{ marginTop: '.75rem' }}>
              <button className="btn btn-primary" style={{ fontSize: 12 }} onClick={() => setRetaking(true)}>
                Take the inventory
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

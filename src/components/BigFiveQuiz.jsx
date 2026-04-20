import { useState } from 'react'
import { B5_QUESTIONS, scoreB5, B5_STORAGE_KEY } from '../data/bigFiveQuiz.js'

export default function BigFiveQuiz({ onComplete, onSkip }) {
  const [responses, setResponses] = useState({})
  const answered = Object.keys(responses).length
  const complete  = answered === B5_QUESTIONS.length

  const set = (id, val) => setResponses(r => ({ ...r, [id]: val }))

  const submit = () => {
    const scores = scoreB5(responses)
    try { localStorage.setItem(B5_STORAGE_KEY, JSON.stringify(scores)) } catch {}
    onComplete(scores)
  }

  return (
    <div className="card" style={{ padding: '1.5rem 1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '.5rem' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--ink)' }}>
          Before you review — a quick personality snapshot
        </div>
        {onSkip && (
          <button
            onClick={onSkip}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--ink-4)', padding: '2px 0', marginLeft: '1rem', flexShrink: 0 }}
          >
            Skip for now
          </button>
        )}
      </div>

      {/* Why we ask */}
      <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '1rem 1.1rem', marginBottom: '1.25rem' }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', marginBottom: '.5rem' }}>Why we ask this</div>
        <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0, marginBottom: '.65rem' }}>
          Most people assume that someone's background — where they're from, what they're used to — explains how they experience a school. Research suggests personality is actually a better predictor. A 2024 multilevel study of 7,489 people across 40 nations found that only 3–11% of Big Five personality variance is explained by national origin. The rest is individual. Two teachers from the same country, at the same school, can have fundamentally different personalities — and fundamentally different experiences of the same place.
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0, marginBottom: '.65rem' }}>
          What this means for school reviews: a teacher high in Conscientiousness flags disorganized administration more sharply. A teacher low in Agreeableness names leadership problems more directly. Someone high in Neuroticism amplifies stress signals that a calmer colleague absorbs. None of these are distorted observations — they're accurate perceptions filtered through a particular lens. A reader who knows the lens can use the review more precisely.
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>
          Your score doesn't change how your review is weighted. Every review counts equally. What it does is give readers the context to calibrate — a teacher with a similar profile can find your review specifically, and a teacher with a different profile can factor in the lens before deciding what it means for them.
        </p>
      </div>

      {/* Privacy + instrument note */}
      <div style={{ fontSize: 11.5, color: 'var(--ink-4)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
        Based on the TIPI (Ten Item Personality Inventory), derived from the same validated Big Five framework used in cross-cultural personality research. Source: Stackhouse, Rickley, Liu & Taras (2024), <em>Personality and Individual Differences</em>, Vol. 230. Your answers are saved to this device only — not stored on our servers, not attached to an account, not used to filter or rank your review. Done once; you won't see this screen again.
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: 'var(--ink-4)', marginBottom: '1rem', padding: '0 2px' }}>
        <span>1 · Strongly disagree</span>
        <span>5 · Strongly agree</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
        {B5_QUESTIONS.map((q, i) => (
          <div key={q.id}>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.45, marginBottom: '.55rem' }}>
              <span style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--ink-4)', marginRight: 6 }}>{i + 1}.</span>
              {q.text}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1, 2, 3, 4, 5].map(val => {
                const sel = responses[q.id] === val
                return (
                  <button
                    key={val}
                    onClick={() => set(q.id, val)}
                    style={{
                      flex: 1,
                      padding: '9px 2px',
                      border: sel ? '2px solid #A35E08' : '1.5px solid var(--border-2)',
                      borderRadius: 8,
                      background: sel ? '#F5E5C6' : 'white',
                      cursor: 'pointer',
                      transition: 'all .12s',
                      fontSize: 14,
                      fontWeight: sel ? 700 : 400,
                      color: sel ? '#A35E08' : 'var(--ink-3)',
                    }}
                  >
                    {val}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 12, color: 'var(--ink-4)' }}>
          {answered < B5_QUESTIONS.length
            ? `${B5_QUESTIONS.length - answered} left`
            : '✓ All answered — ready to continue'}
        </div>
        <button
          className="btn btn-amber"
          style={{ maxWidth: 200, opacity: complete ? 1 : 0.45, pointerEvents: complete ? 'auto' : 'none' }}
          onClick={submit}
        >
          Save &amp; continue →
        </button>
      </div>
    </div>
  )
}

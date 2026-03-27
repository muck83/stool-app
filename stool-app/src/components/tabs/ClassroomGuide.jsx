import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { FAQ_DATA } from '../../data/faqData.js'
import { HOF, DLBLS, DABBR, DCOLS } from '../../data/hofstede.js'

const CATS = [
  { id: 'all', label: 'All behaviors' },
  { id: 'participation', label: 'Participation' },
  { id: 'communication', label: 'Communication' },
  { id: 'learning', label: 'Learning styles' },
  { id: 'parents', label: 'Parents' },
  { id: 'relationships', label: 'Relationships' },
]

function scoreDesc(score, dimI) {
  if (dimI < 0 || score == null) return ''
  const meanings = [
    ['very equal','low authority distance','moderate authority','high authority distance','very hierarchical'],
    ['very group-oriented','group-oriented','mixed','individually-oriented','very individually-oriented'],
    ['very cooperative','cooperative','balanced','competitive','very competitive'],
    ['comfortable with uncertainty','mostly comfortable','moderate structure needed','prefers certainty','very strong need for certainty'],
    ['short-term focus','moderate','balanced','long-term focus','strong long-term focus'],
    ['emotionally restrained','fairly restrained','balanced','socially warm','very socially warm'],
  ]
  const m = meanings[dimI] || []
  const mi = score < 20 ? 0 : score < 40 ? 1 : score < 60 ? 2 : score < 80 ? 3 : 4
  return m[mi] || ''
}

function CountryColumn({ country, h, role, accentCol, f }) {
  if (!h) return null
  const di = DABBR.indexOf(f.dest_key)
  const score = di >= 0 ? h[di] : null
  const contextText = role === 'current' && f.current_context ? f.current_context(country, h)
    : score != null ? (h[di] > 65 ? f.dest_high : f.dest_low) : ''
  return (
    <div style={{ flex: 1, minWidth: 180, borderTop: `3px solid ${accentCol}`, borderRadius: '0 0 var(--r) var(--r)', border: '1px solid var(--border)', borderTopWidth: 3, padding: '1rem', background: 'white' }}>
      <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 3 }}>
        {role === 'home' ? 'Your home country' : role === 'current' ? 'Where you are now' : 'Potential destination'}
      </div>
      <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', marginBottom: '.5rem' }}>{country}</div>
      {score != null && (
        <div style={{ marginBottom: '.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>{DLBLS[di] || ''}</span>
            <span style={{ fontSize: 13, fontWeight: 500, color: accentCol }}>{score}</span>
          </div>
          <div style={{ height: 6, background: 'var(--surface-2)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: `${score}%`, height: 6, background: accentCol, borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: 10, color: 'var(--ink-4)', marginTop: 3, fontStyle: 'italic' }}>{scoreDesc(score, di)}</div>
        </div>
      )}
      {DABBR.map((a, i) => (
        <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4 }}>
          <span style={{ fontSize: 10, color: 'var(--ink-4)', width: 28, flexShrink: 0 }}>{a}</span>
          <div style={{ flex: 1, height: 4, background: 'var(--surface-2)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: `${h[i]}%`, height: 4, background: DCOLS[i], borderRadius: 2 }} />
          </div>
          <span style={{ fontSize: 10, color: 'var(--ink-3)', width: 22, textAlign: 'right' }}>{h[i]}</span>
        </div>
      ))}
      <div style={{ marginTop: '.875rem', borderTop: '1px solid var(--border)', paddingTop: '.75rem', fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6 }}>{contextText}</div>
    </div>
  )
}

function FAQItem({ f, hCur, hDest, hHome, cc, dc }) {
  const [open, setOpen] = useState(false)
  const di = DABBR.indexOf(f.dest_key)
  const curScore = hCur && di >= 0 ? hCur[di] : null
  const destScore = hDest && di >= 0 ? hDest[di] : null

  const cols = []
  if (hHome && cc) cols.push({ country: cc === 'home' ? cc : f._home, h: hHome, role: 'home', accentCol: '#888780' })
  // reuse profile cc/dc
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <div style={{ flex: 1 }}>
          <div className="faq-q-text">{f.behavior}</div>
          <div style={{ marginTop: 5, display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="pill pa" style={{ fontSize: 10 }}>{f.category}</span>
            {curScore != null && <span style={{ fontSize: 11, background: 'var(--teal-light)', color: 'var(--teal-dark)', padding: '2px 8px', borderRadius: 12, fontWeight: 500 }}>{cc}: {scoreDesc(curScore, di)}</span>}
            {destScore != null && <span style={{ fontSize: 11, background: 'var(--purple-bg)', color: 'var(--purple-dark)', padding: '2px 8px', borderRadius: 12, fontWeight: 500 }}>{dc}: {scoreDesc(destScore, di)}</span>}
          </div>
        </div>
        <div className="faq-chevron">›</div>
      </button>
      {open && (
        <div className="faq-body">
          {hCur && f.current_context && (
            <div style={{ marginBottom: '1rem', padding: '.875rem 1rem', background: 'var(--teal-light)', borderLeft: '3px solid var(--teal)', borderRadius: '0 var(--r) var(--r) 0', fontSize: 13.5, color: 'var(--teal-dark)', lineHeight: 1.7 }}>
              <strong>In {cc}:</strong> {f.current_context(cc, hCur)}
            </div>
          )}
          <div className="faq-section"><div className="faq-sec-label">Why this happens</div><div className="faq-sec-text">{f.why}</div></div>
          <div className="faq-section" style={{ marginTop: '1rem' }}><div className="faq-sec-label">How to respond effectively</div><div className="faq-sec-text">{f.respond}</div></div>
          <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.875rem' }}>Country comparison — {DLBLS[di] || f.dest_key}</div>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              {hHome && <CountryColumn country={profile?.home || 'Home'} h={hHome} role="home" accentCol="#888780" f={f} />}
              {hCur  && <CountryColumn country={cc}  h={hCur}  role="current"     accentCol="#1D9E75" f={f} />}
              {hDest && <CountryColumn country={dc}  h={hDest} role="destination" accentCol="#534AB7" f={f} />}
            </div>
          </div>
          <div style={{ fontSize: 10.5, color: 'var(--ink-4)', marginTop: '1rem', fontStyle: 'italic' }}>Research basis: {f.research}</div>
        </div>
      )}
    </div>
  )
}

// Need profile in FAQItem — pass it down
function FAQItemWithProfile({ f, profile }) {
  const hCur  = HOF[profile.cc]
  const hDest = HOF[profile.dc]
  const hHome = HOF[profile.home]
  return <FAQItem f={f} hCur={hCur} hDest={hDest} hHome={hHome} cc={profile.cc} dc={profile.dc} profile={profile} />
}

export default function ClassroomGuide() {
  const { profile } = useProfile()
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? FAQ_DATA : FAQ_DATA.filter(f => f.category === filter)

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Classroom guide</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1rem', maxWidth: 640, lineHeight: 1.6 }}>
        Common things teachers see in international classrooms — why they happen where you are right now, how to respond, and how the same behavior would look different at your destination.
      </div>
      <div className="faq-filter-row">
        {CATS.map(c => (
          <div key={c.id} className={`faq-filter${filter === c.id ? ' active' : ''}`} onClick={() => setFilter(c.id)}>{c.label}</div>
        ))}
      </div>
      {filtered.map(f => <FAQItemWithProfile key={f.id} f={f} profile={profile} />)}
    </div>
  )
}

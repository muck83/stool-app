import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { FAQ_DATA } from '../../data/faqData.js'
import { HOF, DLBLS, DABBR, DCOLS } from '../../data/hofstede.js'

const CATS = [
  { id: 'all',           label: 'All behaviors' },
  { id: 'participation', label: 'Participation' },
  { id: 'communication', label: 'Communication' },
  { id: 'learning',      label: 'Learning styles' },
  { id: 'parents',       label: 'Parents' },
  { id: 'relationships', label: 'Relationships' },
]

// Generate destination-specific context from score + behavior data
function destContext(dc, hDest, f) {
  if (!hDest || !dc) return null
  const di = DABBR.indexOf(f.dest_key)
  if (di < 0) return null
  const score = hDest[di]
  const text = score > 65 ? f.dest_high : f.dest_low
  if (!text) return null
  return text
}

// Extract a plain-English one-liner from full context text
// Strips "In [country]," / "In more X destinations," prefixes then takes first sentence
function shortPreview(text, countryToStrip) {
  if (!text) return ''
  let s = text
  // Strip "In [Country], " or "In [Country]'s " — we re-add the country ourselves
  if (countryToStrip) {
    s = s.replace(new RegExp(`^In\\s+${countryToStrip}[,']\\s*`, 'i'), '')
         .replace(new RegExp(`^${countryToStrip}\\s+(is|has|leans|treats|views|tends)\\s+`, 'i'), '')
  }
  // Strip generic destination intros
  s = s.replace(/^In more\s+[\w-]+-oriented\s+(?:destinations?|contexts?)[,]\s*/i, '')
       .replace(/^Moving to (?:a|an)\s+[\w-]+\s+destination\s+(?:\w+\s+){0,3}/i, '')
       .replace(/^Destinations?\s+more\s+comfortable\s+with\s+\w+\s+/i, '')
  // Take first full sentence if < 100 chars
  const dotIdx = s.indexOf('. ')
  if (dotIdx > 0 && dotIdx < 100) return s.slice(0, dotIdx)
  // Else truncate at word boundary
  if (s.length <= 85) return s.replace(/[.]$/, '')
  return s.slice(0, 85).replace(/\s+\S*$/, '').replace(/[,.]$/, '') + '…'
}

// Render one country panel in the expanded view
function CountryPanel({ country, text, score, di, color, label, sublabel, bg }) {
  return (
    <div style={{ borderTop: `3px solid ${color}`, borderRadius: '0 0 var(--r) var(--r)', border: '1px solid var(--border)', borderTopWidth: 3, padding: '1rem', background: bg || 'white' }}>
      <div style={{ marginBottom: 6 }}>
        <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color, lineHeight: 1 }}>{label}</div>
        <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 2, fontWeight: 500 }}>{sublabel} · <strong style={{ color: 'var(--ink-3)' }}>{country}</strong></div>
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.72 }}>{text}</div>
      {score != null && (
        <div style={{ marginTop: '.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ flex: 1, height: 4, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{ width: `${score}%`, height: '100%', background: color, borderRadius: 3 }} />
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color, flexShrink: 0 }}>
            {DLBLS[di]} {score}
          </span>
        </div>
      )}
    </div>
  )
}

function FAQItem({ f, profile }) {
  const [open, setOpen] = useState(false)
  const hCur  = HOF[profile.cc]
  const hDest = HOF[profile.dc]
  const hHome = HOF[profile.home]
  const cc   = profile.cc
  const dc   = profile.dc
  const home = profile.home

  const di = DABBR.indexOf(f.dest_key)
  const homeScore = hHome && di >= 0 ? hHome[di] : null
  const curScore  = hCur  && di >= 0 ? hCur[di]  : null
  const destScore = hDest && di >= 0 ? hDest[di] : null

  const homeText = hHome && f.current_context && home ? f.current_context(home, hHome) : null
  const curText  = hCur  && f.current_context && cc   ? f.current_context(cc,   hCur)  : null
  const destText = destContext(dc, hDest, f)

  // How many panels do we have?
  const panels = [
    homeText && home ? { country: home, text: homeText, score: homeScore, color: '#6B6A67', label: 'Where you\'re from', sublabel: 'What you know', bg: '#F7F6F3' } : null,
    curText  && cc   ? { country: cc,   text: curText,  score: curScore,  color: '#1D9E75', label: 'Where you are now', sublabel: 'What you\'re adjusting to', bg: 'white' } : null,
    destText && dc   ? { country: dc,   text: destText, score: destScore, color: '#534AB7', label: 'Where you\'re going', sublabel: 'What to expect next', bg: 'white' } : null,
  ].filter(Boolean)

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <div style={{ flex: 1 }}>
          <div className="faq-q-text">{f.behavior}</div>

          {/* Category pill */}
          <div style={{ marginTop: 5 }}>
            <span className="pill pa" style={{ fontSize: 10 }}>{f.category}</span>
          </div>

          {/* Plain-English country previews */}
          {panels.length > 0 && (
            <div style={{ marginTop: 7, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {panels.map(p => (
                <div key={p.country} style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 600, color: p.color }}>In {p.country}:</span>{' '}
                  {shortPreview(p.text, p.country)}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="faq-chevron" style={{ alignSelf: 'flex-start', marginTop: 2 }}>›</div>
      </button>

      {open && (
        <div className="faq-body">

          {/* ── Three-stage country journey panels */}
          {panels.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: panels.length === 3 ? '1fr 1fr 1fr' : panels.length === 2 ? '1fr 1fr' : '1fr',
              gap: '.625rem',
              marginBottom: '1.25rem'
            }}>
              {panels.map(p => (
                <CountryPanel key={p.country} {...p} di={di} />
              ))}
            </div>
          ) : (
            <div style={{ marginBottom: '1rem', fontSize: 13, color: 'var(--ink-4)', fontStyle: 'italic' }}>
              Add your home country, current country, and destination in your profile to see the full three-stage comparison.
            </div>
          )}

          {/* ── Why + How to respond */}
          <div className="faq-section">
            <div className="faq-sec-label">Why this happens</div>
            <div className="faq-sec-text">{f.why}</div>
          </div>
          <div className="faq-section" style={{ marginTop: '1rem' }}>
            <div className="faq-sec-label">How to respond effectively</div>
            <div className="faq-sec-text">{f.respond}</div>
          </div>

          <div style={{ fontSize: 10.5, color: 'var(--ink-4)', marginTop: '1rem', fontStyle: 'italic' }}>
            Research basis: {f.research}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ClassroomGuide() {
  const { profile } = useProfile()
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? FAQ_DATA : FAQ_DATA.filter(f => f.category === filter)

  const cc = profile.cc
  const dc = profile.dc

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Classroom guide</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: cc && dc ? '.5rem' : '1rem', maxWidth: 640, lineHeight: 1.6 }}>
        Common things teachers see in international classrooms — what it looks like where you are, and how it changes where you're headed.
      </div>

      {/* Country context banner */}
      {(cc || dc) && (
        <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {cc && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#E1F5EE', border: '1px solid #1D9E7550', borderRadius: 20, padding: '4px 12px' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1D9E75', flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: '#1D6650' }}>Now: {cc}</span>
            </div>
          )}
          {dc && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#EEEAFF', border: '1px solid #534AB750', borderRadius: 20, padding: '4px 12px' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#534AB7', flexShrink: 0 }} />
              <span style={{ fontSize: 12, fontWeight: 500, color: '#3B31A0' }}>Destination: {dc}</span>
            </div>
          )}
          {(!cc || !dc) && (
            <span style={{ fontSize: 12, color: 'var(--ink-4)', alignSelf: 'center' }}>
              {!cc && !dc ? 'Add your current country and destination in your profile for country-specific insights.' : !dc ? 'Add a destination in your profile to see the full comparison.' : 'Add your current country in your profile to complete the comparison.'}
            </span>
          )}
        </div>
      )}

      <div className="faq-filter-row">
        {CATS.map(c => (
          <div key={c.id} className={`faq-filter${filter === c.id ? ' active' : ''}`} onClick={() => setFilter(c.id)}>
            {c.label}
          </div>
        ))}
      </div>

      {filtered.map(f => <FAQItem key={f.id} f={f} profile={profile} />)}
    </div>
  )
}

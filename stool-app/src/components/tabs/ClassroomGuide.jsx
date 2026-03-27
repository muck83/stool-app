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

function FAQItem({ f, profile }) {
  const [open, setOpen] = useState(false)
  const hCur  = HOF[profile.cc]
  const hDest = HOF[profile.dc]
  const hHome = HOF[profile.home]
  const cc = profile.cc
  const dc = profile.dc

  const di = DABBR.indexOf(f.dest_key)
  const curScore  = hCur  && di >= 0 ? hCur[di]  : null
  const destScore = hDest && di >= 0 ? hDest[di] : null

  const curText  = hCur  && f.current_context ? f.current_context(cc,  hCur)  : null
  const destText = destContext(dc, hDest, f)

  const hasBoth = curText && destText && cc && dc

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)}>
        <div style={{ flex: 1 }}>
          <div className="faq-q-text">{f.behavior}</div>

          {/* Category pill */}
          <div style={{ marginTop: 5 }}>
            <span className="pill pa" style={{ fontSize: 10 }}>{f.category}</span>
          </div>

          {/* Plain-English country previews — "In India: students likely..." */}
          {(curText || destText) && (
            <div style={{ marginTop: 7, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {cc && curText && (
                <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 600, color: '#1D6650' }}>In {cc}:</span>{' '}
                  {shortPreview(curText, cc)}
                </div>
              )}
              {dc && destText && (
                <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 600, color: '#3B31A0' }}>In {dc}:</span>{' '}
                  {shortPreview(destText, dc)}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="faq-chevron" style={{ alignSelf: 'flex-start', marginTop: 2 }}>›</div>
      </button>

      {open && (
        <div className="faq-body">

          {/* ── Country contrast panels — the core "Place A vs Place B" section */}
          {hasBoth ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '1.25rem' }}>
              <div style={{ borderTop: '3px solid #1D9E75', borderRadius: '0 0 var(--r) var(--r)', border: '1px solid var(--border)', borderTopWidth: 3, padding: '1rem', background: 'white' }}>
                <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: '#1D9E75', marginBottom: 4 }}>In {cc}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7 }}>{curText}</div>
                {curScore != null && (
                  <div style={{ marginTop: '.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 5, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${curScore}%`, height: '100%', background: '#1D9E75', borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', flexShrink: 0 }}>
                      {DLBLS[di]} {curScore}
                    </span>
                  </div>
                )}
              </div>
              <div style={{ borderTop: '3px solid #534AB7', borderRadius: '0 0 var(--r) var(--r)', border: '1px solid var(--border)', borderTopWidth: 3, padding: '1rem', background: 'white' }}>
                <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: '#534AB7', marginBottom: 4 }}>In {dc}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7 }}>{destText}</div>
                {destScore != null && (
                  <div style={{ marginTop: '.75rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 5, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${destScore}%`, height: '100%', background: '#534AB7', borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 600, color: '#534AB7', flexShrink: 0 }}>
                      {DLBLS[di]} {destScore}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ) : curText ? (
            /* Only current country set */
            <div style={{ marginBottom: '1.25rem', padding: '.875rem 1rem', background: '#E1F5EE', borderLeft: '3px solid #1D9E75', borderRadius: '0 var(--r) var(--r) 0', fontSize: 13.5, color: '#1D6650', lineHeight: 1.7 }}>
              <strong>In {cc}:</strong> {curText}
            </div>
          ) : !cc ? (
            <div style={{ marginBottom: '1rem', fontSize: 13, color: 'var(--ink-4)', fontStyle: 'italic' }}>
              Add your current country in your profile to see how this applies where you are.
            </div>
          ) : null}

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

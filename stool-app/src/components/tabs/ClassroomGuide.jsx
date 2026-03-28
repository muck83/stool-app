import { useState, useMemo } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { FAQ_DATA } from '../../data/faqData.js'
import { HOF, DLBLS } from '../../data/hofstede.js'
import { COUNTRIES } from '../../data/countries.js'

// Hofstede indices: 0=PDI, 1=IDV, 2=MAS, 3=UAI, 4=LTO, 5=IVR
const DIM_INDEX = { PDI: 0, IDV: 1, MAS: 2, UAI: 3, LTO: 4, IVR: 5 }

const CATEGORY_CONFIG = {
  participation: {
    label: 'Participation',
    emoji: '🗣️',
    subtitle: 'Who speaks, who stays silent, and why',
    getSummary: (country, h) => {
      if (!h) return null
      const idv = h[1], pdi = h[0]
      if (idv < 35) return `Students are often careful about speaking in front of the group. Silence usually means they are protecting face and waiting for a safer opening, not that they have nothing to say.`
      if (idv < 55) return `Participation is usually mixed. Some students speak easily, while others wait for social cover, a clearer invitation, or a smaller setting.`
      return `Students are generally more comfortable speaking up, sharing opinions, and challenging ideas.${pdi < 45 ? ' They may also question your decisions quite directly.' : ' They still read the room, but personal voice is expected.'}`
    },
  },
  communication: {
    label: 'Communication',
    emoji: '💬',
    subtitle: '"Yes" may not mean yes — and other translation gaps',
    getSummary: (country, h) => {
      if (!h) return null
      const pdi = h[0], idv = h[1]
      if (pdi > 65 && idv < 40) return `People often protect the relationship first and say things gently. "Yes" may mean "I hear you" or "I respect you," not necessarily "I fully understand and agree."`
      if (idv < 55 || pdi > 55) return `People often avoid direct disagreement, especially with teachers. Confusion may show up as silence, delay, or partial follow-through rather than a clear "I don't get it."`
      return `Communication is usually more direct. Students are more likely to tell you when something is unclear, unfair, or not working for them.`
    },
  },
  learning: {
    label: 'Learning styles',
    emoji: '📚',
    subtitle: 'How students engage with tasks, structure, and uncertainty',
    getSummary: (country, h) => {
      if (!h) return null
      const uai = h[3], lto = h[4]
      if (uai > 70) return `Students usually want a clear path, clear criteria, and a correct answer to aim at. Open-ended tasks can feel stressful unless you show them how to begin.`
      if (uai > 45) return `Students usually do best when open tasks come with structure. Rubrics, examples, and a visible path into the task make a big difference.${lto > 60 ? ' They also respond well when you show where the work is leading.' : ''}`
      return `Students are generally more comfortable exploring before everything is fully defined. They may enjoy freedom, but still need help tightening quality and precision.`
    },
  },
  parents: {
    label: 'Parent relationships',
    emoji: '👨‍👩‍👧',
    subtitle: 'Why parents engage the way they do',
    getSummary: (country, h) => {
      if (!h) return null
      const lto = h[4], mas = h[2], pdi = h[0]
      if (lto > 65 && mas > 50) return `Many families treat education as a high-stakes long game. Parents can seem intense because they see school as deeply tied to their child's future.`
      if (lto > 60) return `Parents usually think ahead and want steady evidence that their child is progressing.${pdi > 60 ? ' They may still defer to your expertise, but they expect regular updates.' : ' They may also feel comfortable questioning your approach directly.'}`
      if (mas < 40) return `Many parents put a lot of weight on wellbeing, balance, and fit. They still care about learning, but they may advocate just as strongly for happiness as for results.`
      return `Parent involvement is usually steady but not all-consuming. Families care, but the pressure around school outcomes is often less intense.`
    },
  },
  relationships: {
    label: 'Relationships',
    emoji: '🤝',
    subtitle: 'Teacher-student warmth, trust, and where the lines are',
    getSummary: (country, h) => {
      if (!h) return null
      const ivr = h[5], idv = h[1], pdi = h[0]
      if (ivr > 60 && pdi < 50) return `Students usually expect warmth to feel visible and real. A teacher who seems approachable, human, and genuinely interested in them often earns trust faster.`
      if (idv < 35) return `Trust often grows through the group more than through one-on-one closeness. Students may not seek personal connection quickly, but they notice fairness and loyalty to the whole class.`
      if (pdi > 70) return `Relationships often stay warm but formal. Students may show respect through distance, quietness, and deference rather than through relaxed conversation.`
      return `Students usually want a teacher who is warm, fair, and approachable without trying to act like a friend. Consistency tends to matter more than charm.`
    },
  },
}

// ── Explore: behavior descriptions mapped to Hofstede thresholds ──────────
const EXPLORE_BEHAVIORS = [
  { id: 'e1', label: 'Students rarely speak unless called on', dim: 'IDV', dir: 'low', threshold: 45, cat: 'participation' },
  { id: 'e2', label: 'Students openly debate and challenge the teacher', dim: 'PDI', dir: 'low', threshold: 40, cat: 'participation' },
  { id: 'e3', label: '"Yes" often doesn\'t mean real agreement', dim: 'IDV', dir: 'low', threshold: 40, cat: 'communication' },
  { id: 'e4', label: 'Students give very direct, sometimes blunt feedback', dim: 'IDV', dir: 'high', threshold: 70, cat: 'communication' },
  { id: 'e5', label: 'Students want step-by-step instructions and clear answers', dim: 'UAI', dir: 'high', threshold: 65, cat: 'learning' },
  { id: 'e6', label: 'Students thrive on open-ended, exploratory tasks', dim: 'UAI', dir: 'low', threshold: 40, cat: 'learning' },
  { id: 'e7', label: 'Parents are intensely focused on grades and outcomes', dim: 'LTO', dir: 'high', threshold: 60, cat: 'parents' },
  { id: 'e8', label: 'Parents prioritize wellbeing over academic results', dim: 'MAS', dir: 'low', threshold: 35, cat: 'parents' },
  { id: 'e9', label: 'Students show respect through formality and distance', dim: 'PDI', dir: 'high', threshold: 65, cat: 'relationships' },
  { id: 'e10', label: 'Students expect warmth and personal connection quickly', dim: 'IVR', dir: 'high', threshold: 55, cat: 'relationships' },
]

function BehaviorCard({ f, viewCountry, viewH }) {
  const [open, setOpen] = useState(false)
  const context = viewH && f.current_context ? f.current_context(viewCountry, viewH) : null

  return (
    <div style={{
      background: 'white',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r)',
      overflow: 'hidden',
      marginBottom: '.5rem',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '.85rem 1rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 10,
        }}
      >
        <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.4, fontWeight: open ? 500 : 400 }}>{f.behavior}</div>
        <div style={{
          fontSize: 11, color: 'var(--ink-4)', flexShrink: 0,
          transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .2s',
        }}>▶</div>
      </button>
      {open && (
        <div style={{ padding: '0 1rem 1rem', borderTop: '1px solid var(--border)' }}>
          {/* Country-specific context */}
          {context && (
            <div style={{
              background: '#EEEDFE', borderRadius: 'var(--r)', padding: '.65rem .85rem',
              marginTop: '.75rem', marginBottom: '.5rem',
              borderLeft: '3px solid #534AB7',
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: '#3C3489', marginBottom: '.2rem' }}>
                In {viewCountry}
              </div>
              <div style={{ fontSize: 12.5, color: '#26215C', lineHeight: 1.6 }}>{context}</div>
            </div>
          )}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem',
            marginTop: context ? '.5rem' : '.75rem', marginBottom: '.5rem',
          }}>
            <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.75rem .85rem' }}>
              <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.3rem' }}>Why this happens</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{f.why}</div>
            </div>
            <div style={{ background: '#E1F5EE', borderRadius: 'var(--r)', padding: '.75rem .85rem' }}>
              <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--teal-dark)', marginBottom: '.3rem' }}>What to try</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{f.respond}</div>
            </div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--ink-4)', fontStyle: 'italic', marginTop: '.25rem' }}>{f.research}</div>
        </div>
      )}
    </div>
  )
}

// ── Explore panel ─────────────────────────────────────────────────────────
function ExplorePanel() {
  const [selected, setSelected] = useState([])

  const toggle = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])

  const matches = useMemo(() => {
    if (selected.length === 0) return []
    const chosen = EXPLORE_BEHAVIORS.filter(b => selected.includes(b.id))

    // Score each country
    const scores = Object.entries(HOF).map(([country, h]) => {
      let score = 0
      let matched = 0
      chosen.forEach(b => {
        const idx = DIM_INDEX[b.dim]
        if (idx == null) return
        const val = h[idx]
        const fits = b.dir === 'high' ? val >= b.threshold : val <= b.threshold
        if (fits) { score += 2; matched++ }
        else {
          // Partial credit for close
          const dist = b.dir === 'high' ? b.threshold - val : val - b.threshold
          if (dist < 15) { score += 1; matched += 0.5 }
        }
      })
      return { country, score, matched, total: chosen.length }
    })

    return scores
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
  }, [selected])

  const catGroups = {}
  EXPLORE_BEHAVIORS.forEach(b => {
    if (!catGroups[b.cat]) catGroups[b.cat] = []
    catGroups[b.cat].push(b)
  })

  return (
    <div>
      <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '1rem' }}>
        Select the student behaviors you're experiencing or looking for. We'll show you which countries tend to match that classroom culture.
      </div>

      {Object.entries(CATEGORY_CONFIG).map(([catId, config]) => {
        const behaviors = catGroups[catId]
        if (!behaviors) return null
        return (
          <div key={catId} style={{ marginBottom: '.75rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.4rem' }}>
              {config.emoji} {config.label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '.25rem' }}>
              {behaviors.map(b => {
                const sel = selected.includes(b.id)
                return (
                  <button
                    key={b.id}
                    onClick={() => toggle(b.id)}
                    style={{
                      padding: '.4rem .75rem',
                      fontSize: 12.5,
                      border: sel ? '1.5px solid var(--teal)' : '1px solid var(--border)',
                      borderRadius: 999,
                      background: sel ? '#E1F5EE' : 'white',
                      color: sel ? 'var(--teal-dark)' : 'var(--ink-2)',
                      fontWeight: sel ? 600 : 400,
                      cursor: 'pointer',
                      transition: 'all .15s',
                    }}
                  >
                    {sel && '✓ '}{b.label}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}

      {selected.length > 0 && matches.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.5rem' }}>
            Countries that match ({matches.length})
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
            {matches.map(({ country, matched, total }) => {
              const pct = Math.round((matched / total) * 100)
              const col = pct >= 80 ? '#1D9E75' : pct >= 50 ? '#BA7517' : '#D85A30'
              return (
                <div key={country} style={{
                  display: 'flex', alignItems: 'center', gap: '.75rem',
                  padding: '.6rem .85rem',
                  background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)',
                }}>
                  <div style={{ flex: 1, fontSize: 13.5, fontWeight: 500, color: 'var(--ink)' }}>{country}</div>
                  <div style={{
                    fontSize: 11, fontWeight: 600, color: col,
                    background: `${col}15`, padding: '3px 10px', borderRadius: 999,
                  }}>
                    {pct}% match
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.5rem', lineHeight: 1.5 }}>
            Based on Hofstede cultural dimensions. Individual schools vary — use this as a starting point for exploration.
          </div>
        </div>
      )}

      {selected.length > 0 && matches.length === 0 && (
        <div style={{ marginTop: '1rem', padding: '.75rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', fontSize: 13, color: 'var(--ink-3)' }}>
          No strong country matches for this combination. Try selecting fewer behaviors.
        </div>
      )}
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────

export default function ClassroomGuide() {
  const { profile } = useProfile()
  const [filter, setFilter] = useState('')
  const [openCat, setOpenCat] = useState(null)
  const [viewCountry, setViewCountry] = useState(profile.cc || '')
  const [mode, setMode] = useState('guide') // 'guide' | 'explore'

  const hView = HOF[viewCountry]
  const countryList = useMemo(() => Object.keys(HOF).sort(), [])

  const categorizedBehaviors = Object.keys(CATEGORY_CONFIG).reduce((acc, catId) => {
    acc[catId] = FAQ_DATA.filter((f) => f.category === catId)
    return acc
  }, {})

  // Filter behaviors across all categories
  const filterLower = filter.toLowerCase().trim()
  const hasFilter = filterLower.length >= 2
  const filteredBehaviors = hasFilter
    ? FAQ_DATA.filter(f =>
        f.behavior.toLowerCase().includes(filterLower) ||
        f.why.toLowerCase().includes(filterLower) ||
        f.respond.toLowerCase().includes(filterLower)
      )
    : []

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Classroom guide</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '.75rem', maxWidth: 640, lineHeight: 1.6 }}>
        Practical advice for the classroom moments that catch international teachers off guard. Grounded in cultural research.
      </div>

      {/* Mode toggle */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem' }}>
        <button
          onClick={() => setMode('guide')}
          style={{
            padding: '.45rem 1rem', fontSize: 13, fontWeight: mode === 'guide' ? 600 : 400,
            border: mode === 'guide' ? '1.5px solid var(--teal)' : '1px solid var(--border)',
            borderRadius: 'var(--r)',
            background: mode === 'guide' ? '#E1F5EE' : 'white',
            color: mode === 'guide' ? 'var(--teal-dark)' : 'var(--ink-3)',
            cursor: 'pointer',
          }}
        >
          Country guide
        </button>
        <button
          onClick={() => setMode('explore')}
          style={{
            padding: '.45rem 1rem', fontSize: 13, fontWeight: mode === 'explore' ? 600 : 400,
            border: mode === 'explore' ? '1.5px solid #534AB7' : '1px solid var(--border)',
            borderRadius: 'var(--r)',
            background: mode === 'explore' ? '#EEEDFE' : 'white',
            color: mode === 'explore' ? '#3C3489' : 'var(--ink-3)',
            cursor: 'pointer',
          }}
        >
          Explore by behavior
        </button>
      </div>

      {/* ── EXPLORE MODE ─────────────────────────────────────────────── */}
      {mode === 'explore' && <ExplorePanel />}

      {/* ── GUIDE MODE ───────────────────────────────────────────────── */}
      {mode === 'guide' && (
        <>
          {/* Country selector */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '.5rem',
            marginBottom: '1.25rem',
            padding: '.6rem .85rem',
            background: '#E1F5EE', border: '1px solid rgba(29,158,117,.2)',
            borderRadius: 'var(--r)',
          }}>
            <span style={{ fontSize: 14 }}>📍</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--teal-dark)', whiteSpace: 'nowrap' }}>Showing for</span>
            <select
              value={viewCountry}
              onChange={e => setViewCountry(e.target.value)}
              style={{
                flex: 1, padding: '5px 8px', fontSize: 13, fontWeight: 600,
                border: '1px solid rgba(29,158,117,.3)', borderRadius: 'var(--r)',
                background: 'white', color: 'var(--teal-dark)',
                cursor: 'pointer',
              }}
            >
              <option value="">Select a country</option>
              {countryList.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {!viewCountry && (
            <div style={{ padding: '1.25rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', fontSize: 13, color: 'var(--ink-3)', textAlign: 'center', marginBottom: '1rem' }}>
              Select a country above to see classroom insights tailored to that culture.
            </div>
          )}

          {/* Search bar */}
          {viewCountry && (
            <div style={{ marginBottom: '1.25rem' }}>
              <input
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder={`Search classroom moments in ${viewCountry}...`}
                style={{
                  width: '100%', padding: '10px 14px',
                  border: '1px solid var(--border-2)', borderRadius: 'var(--r)',
                  fontSize: 14,
                }}
              />
            </div>
          )}

          {/* Search results */}
          {hasFilter && (
            <div style={{ marginBottom: '1.5rem' }}>
              {filteredBehaviors.length === 0 ? (
                <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', fontSize: 13, color: 'var(--ink-3)' }}>
                  No classroom moments match "{filter}". Try a different term.
                </div>
              ) : (
                <>
                  <div style={{ fontSize: 11, color: 'var(--ink-4)', marginBottom: '.5rem' }}>
                    {filteredBehaviors.length} result{filteredBehaviors.length !== 1 ? 's' : ''} for {viewCountry}
                  </div>
                  {filteredBehaviors.map(f => <BehaviorCard key={f.id} f={f} viewCountry={viewCountry} viewH={hView} />)}
                </>
              )}
            </div>
          )}

          {/* Category cards — shown when not searching */}
          {!hasFilter && viewCountry && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              {Object.entries(CATEGORY_CONFIG).map(([catId, config]) => {
                const behaviors = categorizedBehaviors[catId] || []
                const summary = hView ? config.getSummary(viewCountry, hView) : null
                const isOpen = openCat === catId

                return (
                  <div key={catId} style={{
                    background: 'white',
                    border: `1px solid ${isOpen ? 'var(--teal)' : 'var(--border)'}`,
                    borderRadius: 'var(--rl)',
                    overflow: 'hidden',
                    transition: 'border-color .2s',
                  }}>
                    {/* Category header — always visible */}
                    <button
                      onClick={() => setOpenCat(isOpen ? null : catId)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                        padding: '1rem 1.25rem', background: 'none', border: 'none',
                        cursor: 'pointer', textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: 24, lineHeight: 1, flexShrink: 0 }}>{config.emoji}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--serif)' }}>{config.label}</div>
                          <span style={{ fontSize: 11, color: 'var(--ink-4)', background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 10 }}>
                            {behaviors.length}
                          </span>
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{config.subtitle}</div>
                      </div>
                      <div style={{
                        fontSize: 14, color: 'var(--ink-4)',
                        transform: isOpen ? 'rotate(90deg)' : 'none',
                        transition: 'transform .2s', flexShrink: 0,
                      }}>▶</div>
                    </button>

                    {/* Country summary — visible when collapsed */}
                    {summary && !isOpen && (
                      <div style={{
                        padding: '0 1.25rem .85rem',
                        fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55,
                        borderTop: '1px solid var(--border)',
                        paddingTop: '.65rem',
                      }}>
                        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{viewCountry}: </span>
                        {summary}
                      </div>
                    )}

                    {/* Expanded: behaviors list */}
                    {isOpen && (
                      <div style={{ borderTop: '1px solid var(--border)' }}>
                        {/* Summary for selected country */}
                        {summary && (
                          <div style={{
                            padding: '.85rem 1.25rem',
                            background: 'var(--surface-2)',
                            borderBottom: '1px solid var(--border)',
                          }}>
                            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--teal-dark)', marginBottom: '.3rem' }}>
                              In {viewCountry}
                            </div>
                            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>{summary}</div>
                          </div>
                        )}

                        {/* Behavior cards */}
                        <div style={{ padding: '.75rem 1rem' }}>
                          <div style={{ fontSize: 11, color: 'var(--ink-4)', marginBottom: '.5rem' }}>
                            {behaviors.length} classroom moment{behaviors.length !== 1 ? 's' : ''} in {viewCountry} — tap one for the why and what to try
                          </div>
                          {behaviors.map(f => <BehaviorCard key={f.id} f={f} viewCountry={viewCountry} viewH={hView} />)}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* Footer */}
          <div style={{ fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.55, maxWidth: 560, marginTop: '1.25rem' }}>
            These are broad cultural patterns, not predictions about individual students or families. Use them to observe, ask better questions, and test your interpretation before making assumptions.
          </div>
        </>
      )}
    </div>
  )
}

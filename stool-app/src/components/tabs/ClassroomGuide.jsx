import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { FAQ_DATA } from '../../data/faqData.js'
import { HOF } from '../../data/hofstede.js'

const CATEGORY_CONFIG = {
  participation: {
    label: 'Participation',
    emoji: '🗣️',
    subtitle: 'Who speaks, who stays silent, and why',
    getSummary: (country, h) => {
      if (!h) return null
      const idv = h[1], pdi = h[0]
      if (idv < 35) return `In ${country}, students are often careful about speaking in front of the group. Silence usually means they are protecting face and waiting for a safer opening, not that they have nothing to say.`
      if (idv < 55) return `In ${country}, participation is usually mixed. Some students speak easily, while others wait for social cover, a clearer invitation, or a smaller setting.`
      return `In ${country}, students are generally more comfortable speaking up, sharing opinions, and challenging ideas.${pdi < 45 ? ' They may also question your decisions quite directly.' : ' They still read the room, but personal voice is expected.'}`
    },
  },
  communication: {
    label: 'Communication',
    emoji: '💬',
    subtitle: '"Yes" may not mean yes — and other translation gaps',
    getSummary: (country, h) => {
      if (!h) return null
      const pdi = h[0], idv = h[1]
      if (pdi > 65 && idv < 40) return `In ${country}, people often protect the relationship first and say things gently. "Yes" may mean "I hear you" or "I respect you," not necessarily "I fully understand and agree."`
      if (idv < 55 || pdi > 55) return `In ${country}, people often avoid direct disagreement, especially with teachers. Confusion may show up as silence, delay, or partial follow-through rather than a clear "I don't get it."`
      return `In ${country}, communication is usually more direct. Students are more likely to tell you when something is unclear, unfair, or not working for them.`
    },
  },
  learning: {
    label: 'Learning styles',
    emoji: '📚',
    subtitle: 'How students engage with tasks, structure, and uncertainty',
    getSummary: (country, h) => {
      if (!h) return null
      const uai = h[3], lto = h[4]
      if (uai > 70) return `In ${country}, students usually want a clear path, clear criteria, and a correct answer to aim at. Open-ended tasks can feel stressful unless you show them how to begin.`
      if (uai > 45) return `In ${country}, students usually do best when open tasks come with structure. Rubrics, examples, and a visible path into the task make a big difference.${lto > 60 ? ' They also respond well when you show where the work is leading.' : ''}`
      return `In ${country}, students are generally more comfortable exploring before everything is fully defined. They may enjoy freedom, but still need help tightening quality and precision.`
    },
  },
  parents: {
    label: 'Parent relationships',
    emoji: '👨‍👩‍👧',
    subtitle: 'Why parents engage the way they do',
    getSummary: (country, h) => {
      if (!h) return null
      const lto = h[4], mas = h[2], pdi = h[0]
      if (lto > 65 && mas > 50) return `In ${country}, many families treat education as a high-stakes long game. Parents can seem intense because they see school as deeply tied to their child's future.`
      if (lto > 60) return `In ${country}, parents usually think ahead and want steady evidence that their child is progressing.${pdi > 60 ? ' They may still defer to your expertise, but they expect regular updates.' : ' They may also feel comfortable questioning your approach directly.'}`
      if (mas < 40) return `In ${country}, many parents put a lot of weight on wellbeing, balance, and fit. They still care about learning, but they may advocate just as strongly for happiness as for results.`
      return `In ${country}, parent involvement is usually steady but not all-consuming. Families care, but the pressure around school outcomes is often less intense.`
    },
  },
  relationships: {
    label: 'Relationships',
    emoji: '🤝',
    subtitle: 'Teacher-student warmth, trust, and where the lines are',
    getSummary: (country, h) => {
      if (!h) return null
      const ivr = h[5], idv = h[1], pdi = h[0]
      if (ivr > 60 && pdi < 50) return `In ${country}, students usually expect warmth to feel visible and real. A teacher who seems approachable, human, and genuinely interested in them often earns trust faster.`
      if (idv < 35) return `In ${country}, trust often grows through the group more than through one-on-one closeness. Students may not seek personal connection quickly, but they notice fairness and loyalty to the whole class.`
      if (pdi > 70) return `In ${country}, relationships often stay warm but formal. Students may show respect through distance, quietness, and deference rather than through relaxed conversation.`
      return `In ${country}, students usually want a teacher who is warm, fair, and approachable without trying to act like a friend. Consistency tends to matter more than charm.`
    },
  },
}

function BehaviorCard({ f, isFirst }) {
  const [open, setOpen] = useState(false)

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
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem',
            marginTop: '.75rem', marginBottom: '.5rem',
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

export default function ClassroomGuide() {
  const { profile } = useProfile()
  const [filter, setFilter] = useState('')
  const [openCat, setOpenCat] = useState(null)

  const hCur = HOF[profile.cc]
  const currentCountry = profile.cc

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
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: currentCountry ? '.65rem' : '1.25rem', maxWidth: 640, lineHeight: 1.6 }}>
        Practical advice for the classroom moments that catch international teachers off guard. Everything here is grounded in cultural research{currentCountry ? ` for ${currentCountry}` : ''}.
      </div>
      {currentCountry && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#E1F5EE', border: '1px solid rgba(29,158,117,.2)',
          borderRadius: 'var(--r)', padding: '.45rem .85rem',
          marginBottom: '1.25rem',
        }}>
          <span style={{ fontSize: 14 }}>📍</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal-dark)' }}>
            Showing insights for {currentCountry}
          </span>
        </div>
      )}

      {/* Search bar */}
      <div style={{ marginBottom: '1.25rem' }}>
        <input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          placeholder="Search classroom moments, e.g. 'silent' or 'parents'..."
          style={{
            width: '100%', padding: '10px 14px',
            border: '1px solid var(--border-2)', borderRadius: 'var(--r)',
            fontSize: 14,
          }}
        />
      </div>

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
                {filteredBehaviors.length} result{filteredBehaviors.length !== 1 ? 's' : ''}
              </div>
              {filteredBehaviors.map(f => <BehaviorCard key={f.id} f={f} />)}
            </>
          )}
        </div>
      )}

      {/* Category cards — shown when not searching */}
      {!hasFilter && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {Object.entries(CATEGORY_CONFIG).map(([catId, config]) => {
            const behaviors = categorizedBehaviors[catId] || []
            const summary = hCur ? config.getSummary(currentCountry, hCur) : null
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

                {/* Current-country summary — visible when you have a cc */}
                {summary && !isOpen && (
                  <div style={{
                    padding: '0 1.25rem .85rem',
                    fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55,
                    borderTop: '1px solid var(--border)',
                    paddingTop: '.65rem',
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{currentCountry}: </span>
                    {summary}
                  </div>
                )}

                {/* Expanded: behaviors list */}
                {isOpen && (
                  <div style={{ borderTop: '1px solid var(--border)' }}>
                    {/* Summary for current country */}
                    {summary && (
                      <div style={{
                        padding: '.85rem 1.25rem',
                        background: 'var(--surface-2)',
                        borderBottom: '1px solid var(--border)',
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--teal-dark)', marginBottom: '.3rem' }}>
                          In {currentCountry} right now
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6 }}>{summary}</div>
                      </div>
                    )}

                    {/* Behavior cards */}
                    <div style={{ padding: '.75rem 1rem' }}>
                      <div style={{ fontSize: 11, color: 'var(--ink-4)', marginBottom: '.5rem' }}>
                        {behaviors.length} classroom moment{behaviors.length !== 1 ? 's' : ''} — tap one for the why and what to try
                      </div>
                      {behaviors.map(f => <BehaviorCard key={f.id} f={f} />)}
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
    </div>
  )
}

import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { FAQ_DATA } from '../../data/faqData.js'
import { HOF } from '../../data/hofstede.js'

const CATEGORY_CONFIG = {
  participation: {
    label: 'Participation',
    icon: 'P',
    subtitle: 'Who speaks, who stays silent, and why',
    getSummary: (country, h) => {
      if (!h) return null
      const idv = h[1]
      const pdi = h[0]

      if (idv < 35) {
        return `In ${country}, students are often careful about speaking in front of the group. Silence usually means they are protecting face and waiting for a safer opening, not that they have nothing to say.`
      }
      if (idv < 55) {
        return `In ${country}, participation is usually mixed. Some students speak easily, while others wait for social cover, a clearer invitation, or a smaller setting.`
      }
      return `In ${country}, students are generally more comfortable speaking up, sharing opinions, and challenging ideas.${pdi < 45 ? ' They may also question your decisions quite directly.' : ' They still read the room, but personal voice is expected.'}`
    },
  },
  communication: {
    label: 'Communication',
    icon: 'C',
    subtitle: '"Yes" may not mean yes - and other translation gaps',
    getSummary: (country, h) => {
      if (!h) return null
      const pdi = h[0]
      const idv = h[1]

      if (pdi > 65 && idv < 40) {
        return `In ${country}, people often protect the relationship first and say things gently. "Yes" may mean "I hear you" or "I respect you," not necessarily "I fully understand and agree."`
      }
      if (idv < 55 || pdi > 55) {
        return `In ${country}, people often avoid direct disagreement, especially with teachers. Confusion may show up as silence, delay, or partial follow-through rather than a clear "I don't get it."`
      }
      return `In ${country}, communication is usually more direct. Students are more likely to tell you when something is unclear, unfair, or not working for them.`
    },
  },
  learning: {
    label: 'Learning styles',
    icon: 'L',
    subtitle: 'How students engage with tasks, structure, and uncertainty',
    getSummary: (country, h) => {
      if (!h) return null
      const uai = h[3]
      const lto = h[4]

      if (uai > 70) {
        return `In ${country}, students usually want a clear path, clear criteria, and a correct answer to aim at. Open-ended tasks can feel stressful unless you show them how to begin.`
      }
      if (uai > 45) {
        return `In ${country}, students usually do best when open tasks come with structure. Rubrics, examples, and a visible path into the task make a big difference.${lto > 60 ? ' They also respond well when you show where the work is leading.' : ''}`
      }
      return `In ${country}, students are generally more comfortable exploring before everything is fully defined. They may enjoy freedom, but still need help tightening quality and precision.`
    },
  },
  parents: {
    label: 'Parent relationships',
    icon: 'Pa',
    subtitle: 'Why parents engage the way they do',
    getSummary: (country, h) => {
      if (!h) return null
      const lto = h[4]
      const mas = h[2]
      const pdi = h[0]

      if (lto > 65 && mas > 50) {
        return `In ${country}, many families treat education as a high-stakes long game. Parents can seem intense because they see school as deeply tied to their child's future.`
      }
      if (lto > 60) {
        return `In ${country}, parents usually think ahead and want steady evidence that their child is progressing.${pdi > 60 ? ' They may still defer to your expertise, but they expect regular updates.' : ' They may also feel comfortable questioning your approach directly.'}`
      }
      if (mas < 40) {
        return `In ${country}, many parents put a lot of weight on wellbeing, balance, and fit. They still care about learning, but they may advocate just as strongly for happiness as for results.`
      }
      return `In ${country}, parent involvement is usually steady but not all-consuming. Families care, but the pressure around school outcomes is often less intense.`
    },
  },
  relationships: {
    label: 'Relationships',
    icon: 'R',
    subtitle: 'Teacher-student warmth, trust, and where the lines are',
    getSummary: (country, h) => {
      if (!h) return null
      const ivr = h[5]
      const idv = h[1]
      const pdi = h[0]

      if (ivr > 60 && pdi < 50) {
        return `In ${country}, students usually expect warmth to feel visible and real. A teacher who seems approachable, human, and genuinely interested in them often earns trust faster.`
      }
      if (idv < 35) {
        return `In ${country}, trust often grows through the group more than through one-on-one closeness. Students may not seek personal connection quickly, but they notice fairness and loyalty to the whole class.`
      }
      if (pdi > 70) {
        return `In ${country}, relationships often stay warm but formal. Students may show respect through distance, quietness, and deference rather than through relaxed conversation.`
      }
      return `In ${country}, students usually want a teacher who is warm, fair, and approachable without trying to act like a friend. Consistency tends to matter more than charm.`
    },
  },
}

function homeConfig(yrs) {
  const value = yrs || ''

  if (value === '15+ years' || value.includes('15+')) {
    return {
      label: 'Your cultural roots',
      note: 'After 15+ years abroad, home may explain where your instincts started, but it may not describe how you teach now.',
    }
  }

  if (/8.*15/.test(value)) {
    return {
      label: 'Where you started',
      note: 'With 8-15 years abroad, this is more of a starting point than a full picture. Your frame has probably shifted.',
    }
  }

  if (/4.*7/.test(value)) {
    return { label: 'Your original culture', note: null }
  }

  return { label: 'Country you grew up in', note: null }
}

function JourneyPanel({ label, sublabel, country, hof, color, bg, getSummary, note }) {
  if (!country || !hof) {
    return (
      <div style={{ flex: 1, minWidth: 200, border: `1px solid ${color}40`, borderTop: `3px solid ${color}`, borderRadius: '0 0 8px 8px', padding: '1rem', background: 'white' }}>
        <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color, marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', fontStyle: 'italic' }}>Add your {sublabel} in your profile to see this part of the journey.</div>
      </div>
    )
  }

  const text = getSummary(country, hof)

  return (
    <div style={{ flex: 1, minWidth: 200, border: `1px solid ${color}40`, borderTop: `3px solid ${color}`, borderRadius: '0 0 8px 8px', padding: '1rem', background: bg }}>
      <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', marginBottom: '.6rem' }}>{country}</div>
      {note && (
        <div style={{ fontSize: 11.5, color, background: `${color}15`, borderRadius: 5, padding: '5px 8px', marginBottom: '.625rem', lineHeight: 1.5, fontStyle: 'italic' }}>
          {note}
        </div>
      )}
      <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{text}</div>
    </div>
  )
}

function BehaviorItem({ f }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderTop: '1px solid var(--border)', background: open ? '#FAFAF9' : 'white' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.75rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12 }}
      >
        <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.4, fontWeight: open ? 500 : 400 }}>{f.behavior}</div>
        <div style={{ fontSize: 16, color: 'var(--ink-4)', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}>{'>'}</div>
      </button>
      {open && (
        <div style={{ padding: '0 1.25rem 1rem 1.25rem', borderTop: '1px dashed var(--border)' }}>
          <div style={{ marginBottom: '.875rem', marginTop: '.75rem' }}>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.3rem' }}>Possible interpretation</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{f.why}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.3rem' }}>What to try before concluding too much</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{f.respond}</div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.75rem', fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: '.5rem' }}>{f.research}</div>
        </div>
      )}
    </div>
  )
}

function CategorySection({ config, behaviors, profile }) {
  const [open, setOpen] = useState(false)
  const hHome = HOF[profile.home]
  const hCur = HOF[profile.cc]
  const hDest = HOF[profile.dc]
  const hc = homeConfig(profile.yrs)

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', marginBottom: '.75rem', background: 'white' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '1rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontSize: 22, flexShrink: 0 }}>{config.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--serif)' }}>{config.label}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{config.subtitle}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: 'var(--ink-4)', background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap' }}>
            {behaviors.length} behavior{behaviors.length !== 1 ? 's' : ''}
          </span>
          <div style={{ fontSize: 18, color: 'var(--ink-4)', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .2s' }}>{'>'}</div>
        </div>
      </button>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface-2)' }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.75rem' }}>
              How this can feel across the three places in your profile
            </div>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              <JourneyPanel
                label={hc.label}
                sublabel="country you grew up in"
                country={profile.home}
                hof={hHome}
                color="#888780"
                bg="white"
                getSummary={config.getSummary}
                note={hc.note}
              />
              <JourneyPanel
                label="Where you are now"
                sublabel="current country"
                country={profile.cc}
                hof={hCur}
                color="#1D9E75"
                bg="#F0FAF6"
                getSummary={config.getSummary}
              />
              <JourneyPanel
                label="Where you may be going"
                sublabel="destination country"
                country={profile.dc}
                hof={hDest}
                color="#534AB7"
                bg="#F3F2FC"
                getSummary={config.getSummary}
              />
            </div>
          </div>

          {behaviors.length > 0 && (
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', padding: '.75rem 1.25rem .25rem', background: 'white' }}>
                {behaviors.length} classroom moment{behaviors.length !== 1 ? 's' : ''} - open one for a possible explanation and a practical next move
              </div>
              {behaviors.map((f) => <BehaviorItem key={f.id} f={f} />)}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function ClassroomGuide() {
  const { profile } = useProfile()
  const hc = homeConfig(profile.yrs)

  const categorizedBehaviors = Object.keys(CATEGORY_CONFIG).reduce((acc, catId) => {
    acc[catId] = FAQ_DATA.filter((f) => f.category === catId)
    return acc
  }, {})

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Classroom guide</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.5rem', maxWidth: 640, lineHeight: 1.6 }}>
        Five parts of classroom life, shown in plain language across the three places in your profile: the country you grew up in, where you are now, and where you may be heading next. Open a category to see the bigger pattern, then drill into specific classroom moments for practical advice.
      </div>

      <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.65rem' }}>
          The guide is currently using these places
        </div>
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
          <span style={{ fontSize: 12, color: 'var(--ink-3)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 999, padding: '5px 10px' }}>
            {hc.label}: {profile.home || 'Not added yet'}
          </span>
          <span style={{ fontSize: 12, color: 'var(--ink-3)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 999, padding: '5px 10px' }}>
            Where you are now: {profile.cc || 'Not added yet'}
          </span>
          <span style={{ fontSize: 12, color: 'var(--ink-3)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 999, padding: '5px 10px' }}>
            Where you may be going: {profile.dc || 'Not added yet'}
          </span>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.65 }}>
          These are broad cultural patterns, not predictions about individual students or families. Use them as prompts to observe, ask better questions, and test your interpretation before making assumptions.
        </div>
      </div>

      {Object.entries(CATEGORY_CONFIG).map(([catId, config]) => (
        <CategorySection
          key={catId}
          config={config}
          behaviors={categorizedBehaviors[catId] || []}
          profile={profile}
        />
      ))}
    </div>
  )
}




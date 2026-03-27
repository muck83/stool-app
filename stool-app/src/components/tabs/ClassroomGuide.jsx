import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { FAQ_DATA } from '../../data/faqData.js'
import { HOF } from '../../data/hofstede.js'

// ── Category config with journey narratives ──────────────────────────────────

const CATEGORY_CONFIG = {
  participation: {
    label: 'Participation',
    icon: '🙋',
    subtitle: 'Who speaks, who stays silent, and why',
    getSummary: (country, h) => {
      if (!h) return null
      const idv = h[1], pdi = h[0]
      if (idv < 35) return `In ${country}, students are strongly group-oriented (IDV ${idv}/100). Speaking out publicly carries real social risk — a wrong answer can reflect on the whole group, not just the individual. Silence is sophisticated social caution, not disengagement. Even confident students will wait for permission to speak.`
      if (idv < 55) return `In ${country}, participation is mixed (IDV ${idv}/100). Some students speak freely; others navigate quiet group-loyalty norms. Watch for patterns and design structures that give both types a pathway.`
      return `In ${country}, individual participation is culturally expected (IDV ${idv}/100). Students are likely to speak up, advocate for themselves, and push back.${pdi < 45 ? ' Authority distance is low — expect students to question your decisions directly.' : ' Some deference to authority remains, but individual voice is genuinely valued.'}`
    }
  },
  communication: {
    label: 'Communication',
    icon: '💬',
    subtitle: '"Yes" may not mean yes — and other translation gaps',
    getSummary: (country, h) => {
      if (!h) return null
      const pdi = h[0], idv = h[1]
      if (pdi > 65 && idv < 40) return `In ${country}, communication is strongly indirect and relationship-first (PDI ${pdi}, IDV ${idv}/100). "Yes" typically means "I respect you" rather than "I understood and will do this." Disagreement rarely surfaces directly — it appears as avoidance, silence, or partial compliance. Structured comprehension checks are essential.`
      if (idv < 55 || pdi > 55) return `In ${country}, communication leans indirect in authority relationships (PDI ${pdi}, IDV ${idv}/100). Saying no or admitting confusion can feel socially uncomfortable. Students and parents tend to smooth over uncertainty rather than name it — multiple check-in points prevent problems from compounding silently.`
      return `In ${country}, communication is relatively direct (PDI ${pdi}, IDV ${idv}/100). Students will generally tell you when they don't understand. Expect clear requests and — in lower-PDI contexts — a willingness to openly disagree with your decisions.`
    }
  },
  learning: {
    label: 'Learning styles',
    icon: '📚',
    subtitle: 'How students engage with tasks, structure, and uncertainty',
    getSummary: (country, h) => {
      if (!h) return null
      const uai = h[3], lto = h[4]
      if (uai > 70) return `In ${country}, students have a strong preference for certainty and correct answers (UAI ${uai}/100). Education here is typically built around mastering right answers, not exploring open questions. Ambiguity can feel like a teacher failing to provide what education is supposed to deliver. Scaffold everything and name uncertainty explicitly as a learning stage.`
      if (uai > 45) return `In ${country}, students prefer structured tasks over purely open ones (UAI ${uai}/100). Open-ended inquiry is workable with strong scaffolding — rubrics, worked examples, and gradual progression.${lto > 60 ? ` Long-term orientation (LTO ${lto}) means students respond well to clear trajectories and future payoff.` : ''}`
      return `In ${country}, students are generally comfortable with ambiguity and open exploration (UAI ${uai}/100). The challenge here may be the opposite: building rigour and precision within open inquiry. Students may enjoy creative freedom but need explicit instruction on quality criteria.`
    }
  },
  parents: {
    label: 'Parent relationships',
    icon: '👨‍👩‍👧',
    subtitle: 'Why parents engage the way they do',
    getSummary: (country, h) => {
      if (!h) return null
      const lto = h[4], mas = h[2], pdi = h[0]
      if (lto > 65 && mas > 50) return `In ${country}, education is a serious long-term family investment — often the primary strategy for generational social mobility (LTO ${lto}, MAS ${mas}/100). Parents are not hovering; they are managing a multi-generational bet. Academic results carry existential weight. Their intensity is rational. Communicate proactively with data, not impressions.`
      if (lto > 60) return `In ${country}, families think in generational timescales about education (LTO ${lto}/100). Parent involvement is high and future-oriented.${pdi > 60 ? ` Authority distance means parents will generally respect your expertise — but expect detailed, regular reporting.` : ` Lower authority distance means parents may actively question your methods and decisions.`}`
      if (mas < 40) return `In ${country}, parents focus more on wellbeing and work-life balance than achievement metrics (MAS ${mas}/100). They advocate for their child's happiness and personal preferences. Academic pressure is lower, but individual advocacy — sometimes quite assertive — is the norm.`
      return `In ${country}, parent involvement is moderate. Parents value education but cultural pressure around academic outcomes is lower than in East Asian or South Asian contexts. Internationally mobile families often have higher engagement than local norms suggest.`
    }
  },
  relationships: {
    label: 'Relationships',
    icon: '🤝',
    subtitle: 'Teacher–student warmth, trust, and where the lines are',
    getSummary: (country, h) => {
      if (!h) return null
      const ivr = h[5], idv = h[1], pdi = h[0]
      if (ivr > 60 && pdi < 50) return `In ${country}, warmth and social connection are professional norms (IND ${ivr}/100). Students expect genuine personal relationships with teachers — formality feels cold rather than professional.${idv > 65 ? ' Individual students will seek you out directly. Invest in one-on-one connection.' : ' Warmth flows through the group — building class community matters as much as individual bonds.'}`
      if (idv < 35) return `In ${country}, warmth is channelled through group loyalty rather than individual friendship (IDV ${idv}/100). Students may not seek you out personally, but will show strong collective loyalty once trust is established. Being seen as fair to the whole group matters more than individual rapport.`
      if (pdi > 70) return `In ${country}, the teacher-student relationship is shaped by high authority distance (PDI ${pdi}/100). Students show respect through deference, not directness. Warmth exists but within a formal structure — crossing the formality line too early can undermine authority rather than build trust.`
      return `In ${country}, teacher-student relationships are professionally warm with moderate formality (PDI ${pdi}, IND ${ivr}/100). Students appreciate approachability but distinguish between teacher and friend. Consistent, fair, and engaged presence builds trust more reliably than attempts at personal closeness.`
    }
  }
}

// ── yrs-aware home panel config ───────────────────────────────────────────────

function homeConfig(yrs) {
  if (yrs === '15+ years') return {
    label: 'Your cultural roots',
    note: 'After 15+ years abroad, your home country may no longer feel like your active frame of reference. What follows describes the culture that shaped you — your real baseline is the international circuit itself.'
  }
  if (yrs === '8–15 years') return {
    label: 'Where you started',
    note: 'With 8–15 years abroad, your home culture is a useful starting point but your frame has shifted. These patterns shaped your instincts — they may not match how you see the world now.'
  }
  if (yrs === '4–7 years') return { label: 'Your original culture', note: null }
  return { label: 'Your home country', note: null }
}

// ── Journey panel (one of three stages) ─────────────────────────────────────

function JourneyPanel({ label, sublabel, country, hof, color, bg, getSummary, note }) {
  if (!country || !hof) {
    return (
      <div style={{ flex: 1, minWidth: 200, border: `1px solid ${color}40`, borderTop: `3px solid ${color}`, borderRadius: '0 0 8px 8px', padding: '1rem', background: 'white' }}>
        <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color, marginBottom: 6 }}>{label}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', fontStyle: 'italic' }}>Set your {sublabel} in your profile to see this stage.</div>
      </div>
    )
  }
  const text = getSummary(country, hof)
  return (
    <div style={{ flex: 1, minWidth: 200, border: `1px solid ${color}40`, borderTop: `3px solid ${color}`, borderRadius: '0 0 8px 8px', padding: '1rem', background: bg }}>
      <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color, marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', marginBottom: '.6rem' }}>{country}</div>
      {note && (
        <div style={{ fontSize: 11.5, color, background: `${color}15`, borderRadius: 5, padding: '5px 8px', marginBottom: '.625rem', lineHeight: 1.5, fontStyle: 'italic' }}>{note}</div>
      )}
      <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{text}</div>
    </div>
  )
}

// ── Single behavior item (drill-down) ────────────────────────────────────────

function BehaviorItem({ f }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid var(--border)', background: open ? '#FAFAF9' : 'white' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.75rem 1.25rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12 }}
      >
        <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.4, fontWeight: open ? 500 : 400 }}>{f.behavior}</div>
        <div style={{ fontSize: 16, color: 'var(--ink-4)', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .2s', flexShrink: 0 }}>›</div>
      </button>
      {open && (
        <div style={{ padding: '0 1.25rem 1rem 1.25rem', borderTop: '1px dashed var(--border)' }}>
          <div style={{ marginBottom: '.875rem', marginTop: '.75rem' }}>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.3rem' }}>Why this happens</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{f.why}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.3rem' }}>How to respond effectively</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{f.respond}</div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.75rem', fontStyle: 'italic', borderTop: '1px solid var(--border)', paddingTop: '.5rem' }}>{f.research}</div>
        </div>
      )}
    </div>
  )
}

// ── Category section ─────────────────────────────────────────────────────────

function CategorySection({ config, behaviors, profile }) {
  const [open, setOpen] = useState(false)
  const hHome = HOF[profile.home]
  const hCur  = HOF[profile.cc]
  const hDest = HOF[profile.dc]
  const hc    = homeConfig(profile.yrs)

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden', marginBottom: '.75rem', background: 'white' }}>
      {/* Category header */}
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
          <div style={{ fontSize: 18, color: 'var(--ink-4)', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .2s' }}>›</div>
        </div>
      </button>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {/* Three-stage journey */}
          <div style={{ padding: '1rem 1.25rem', background: 'var(--surface-2)' }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.75rem' }}>
              How {config.label.toLowerCase()} shifts across your three countries
            </div>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              <JourneyPanel
                label={hc.label}
                sublabel="home country"
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
                label="Your next destination"
                sublabel="destination country"
                country={profile.dc}
                hof={hDest}
                color="#534AB7"
                bg="#F3F2FC"
                getSummary={config.getSummary}
              />
            </div>
          </div>

          {/* Individual behaviors */}
          {behaviors.length > 0 && (
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', padding: '.75rem 1.25rem .25rem', background: 'white' }}>
                {behaviors.length} specific behavior{behaviors.length !== 1 ? 's' : ''} — tap to see why it happens and how to respond
              </div>
              {behaviors.map(f => <BehaviorItem key={f.id} f={f} />)}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function ClassroomGuide() {
  const { profile } = useProfile()

  const categorizedBehaviors = Object.keys(CATEGORY_CONFIG).reduce((acc, catId) => {
    acc[catId] = FAQ_DATA.filter(f => f.category === catId)
    return acc
  }, {})

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Classroom guide</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.5rem', maxWidth: 640, lineHeight: 1.6 }}>
        Five categories of classroom dynamics — what they look like in your home country, where you are now, and where you're headed next. Open a category to see the full picture, then drill into specific behaviors for practical advice.
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

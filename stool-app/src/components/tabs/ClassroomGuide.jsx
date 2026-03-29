import { useState, useMemo } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { FAQ_DATA } from '../../data/faqData.js'
import { HOF, DLBLS } from '../../data/hofstede.js'
import { COUNTRIES } from '../../data/countries.js'

// Hofstede indices: 0=PDI, 1=IDV, 2=MAS, 3=UAI, 4=LTO, 5=IVR
const DIM_INDEX = { PDI: 0, IDV: 1, MAS: 2, UAI: 3, LTO: 4, IVR: 5 }

// ── Research facts — rotating daily ──────────────────────────────────────
const RESEARCH_FACTS = [
  {
    emoji: '⏱️',
    headline: 'Most teachers wait less than one second after asking a question.',
    detail: 'Extending that pause to just 3–5 seconds more than doubles the number of students who respond — and the answers get longer and more accurate. Students from East Asian school systems often need more processing time, not less knowledge.',
    cite: 'Rowe (1974)',
    col: '#534AB7', bg: '#EEEDFE',
  },
  {
    emoji: '🧠',
    headline: 'Students who memorise and repeat content consistently outperform on tests of deep, critical thinking.',
    detail: 'Memorisation is often the first stage of real understanding, not a shortcut around it. Students using precise, repetitive methods are building mastery — not avoiding thinking. The research finds no trade-off between memorisation and higher-order skill.',
    cite: 'Watkins & Biggs (2001)',
    col: '#1D9E75', bg: '#E1F5EE',
  },
  {
    emoji: '✏️',
    headline: 'Written feedback with no grade outperforms a grade alone on every learning outcome measured.',
    detail: 'When students receive a score, most stop reading the written comments entirely. Remove the grade and the feedback suddenly does its job. In cultures where visible failure carries high social cost, this also protects student dignity.',
    cite: 'Black & Wiliam (1998), Inside the Black Box',
    col: '#BA7517', bg: '#FAEEDA',
  },
  {
    emoji: '🗣️',
    headline: 'Students need 5–7 years to develop the language fluency required to debate and reason aloud in a second language.',
    detail: 'Conversational English can be fluent within two years. Academic language — the kind needed to argue a point, challenge an idea, or explain abstract reasoning out loud — takes much longer. Silence in class discussion is not a sign of what a student knows.',
    cite: 'Cummins (1981)',
    col: '#185FA5', bg: '#E6F1FB',
  },
  {
    emoji: '😶',
    headline: 'One public correction can buy a student\'s silence for the rest of the year.',
    detail: 'In classrooms where reputation and group standing matter, being corrected in front of peers is not just embarrassing — it is a social cost that students actively work to avoid repeating. The teacher\'s intent rarely changes the student\'s response.',
    cite: 'Cortazzi & Jin (1996)',
    col: '#8B3A3A', bg: '#FEF0F0',
  },
  {
    emoji: '🌍',
    headline: 'The school system a student came from predicts classroom behaviour better than their nationality.',
    detail: 'A Korean student educated entirely in international schools behaves very differently from a Korean student schooled in the Korean state system — even though both hold the same passport. School culture travels with students; national culture is background context.',
    cite: 'Baskerville (2003)',
    col: '#185FA5', bg: '#E6F1FB',
  },
  {
    emoji: '👁️',
    headline: 'In many cultures, avoiding eye contact with a teacher is a sign of respect — not disrespect.',
    detail: 'In parts of East Asia, West Africa, and Latin America, sustained eye contact with an authority figure can feel confrontational or rude. A student looking down is not hiding something; they are performing deference in the way their upbringing taught them.',
    cite: 'Cross-cultural communication research',
    col: '#534AB7', bg: '#EEEDFE',
  },
  {
    emoji: '📐',
    headline: 'Students from high-structure school systems are not afraid of open tasks — they are trying to do them correctly.',
    detail: 'When a student asks "what format do you want?" repeatedly, they are not being rigid. They have been trained that there is a right way to do school work, and they are genuinely trying to find it. A clear starting framework unlocks creativity; ambiguity just creates anxiety.',
    cite: 'Hofstede (2001); Marton & Säljö (1976)',
    col: '#BA7517', bg: '#FAEEDA',
  },
  {
    emoji: '🤐',
    headline: 'Quiet students are not less engaged — they may be processing in a language that is not their first.',
    detail: 'Real-time verbal participation requires not just knowledge but rapid language access. Students who are highly engaged intellectually may still be forming ideas in their home language and translating. Their silence is the translation happening, not absence of thought.',
    cite: 'Krashen (1982); Cummins (1981)',
    col: '#1D9E75', bg: '#E1F5EE',
  },
  {
    emoji: '🏆',
    headline: 'Finland starts formal schooling at age 7 — and consistently ranks among the highest in the world for literacy and problem-solving.',
    detail: 'Finnish children spend their early years in play-based learning with no formal reading or maths instruction. Despite starting later than almost every other country, they consistently rank near the top on international assessments. Earlier is not always better.',
    cite: 'Finnish National Agency for Education; PISA results',
    col: '#534AB7', bg: '#EEEDFE',
  },
  {
    emoji: '📣',
    headline: 'In many school systems, asking a teacher a question implies they explained it badly — so students stay silent.',
    detail: 'This is not passivity. A student who does not understand but says nothing may be protecting the teacher\'s reputation (and their own relationship with the teacher) rather than signalling indifference. Private clarification is far safer than public questioning.',
    cite: 'Cortazzi & Jin (1996); Hofstede & Bond (1988)',
    col: '#8B3A3A', bg: '#FEF0F0',
  },
  {
    emoji: '🔁',
    headline: 'Repeating a question louder or more slowly rarely helps a student who did not understand the first time.',
    detail: 'Most comprehension gaps in international classrooms are conceptual or linguistic, not acoustic. Re-framing, giving an example, or providing wait time is far more effective than repetition. The louder version just adds social pressure to an already confusing moment.',
    cite: 'Second language acquisition research',
    col: '#185FA5', bg: '#E6F1FB',
  },
  {
    emoji: '🎯',
    headline: 'Group work produces better learning outcomes — but only when roles are clear and individual accountability is built in.',
    detail: 'In highly collectivist school cultures, group work can default to one person doing everything while others defer. Clear individual deliverables within the group task preserve the collaborative benefits while removing the social dynamic that causes free-riding.',
    cite: 'Johnson & Johnson (1994); cross-cultural group work research',
    col: '#1D9E75', bg: '#E1F5EE',
  },
  {
    emoji: '💬',
    headline: '"Yes" very often means "I hear you" — not "I understand and will do it."',
    detail: 'In Korean, Japanese, Chinese, and many other languages, the word that translates as "yes" functions as an acknowledgement signal, not a commitment. Teachers who interpret it as agreement often discover later that the student had no idea what was being asked of them.',
    cite: 'Hall (1976); cross-cultural communication research',
    col: '#BA7517', bg: '#FAEEDA',
  },
  {
    emoji: '📊',
    headline: 'The countries that dominate international test rankings also have the highest rates of student test anxiety.',
    detail: 'High academic performance and high student wellbeing often point in opposite directions across systems. Understanding this trade-off matters when you are asking students from those systems to relax, experiment, or accept failure as part of learning.',
    cite: 'PISA wellbeing data; Twenge & Campbell (2019)',
    col: '#534AB7', bg: '#EEEDFE',
  },
  {
    emoji: '🧍',
    headline: 'Standing at the front and waiting in silence is one of the most effective classroom management tools across cultures.',
    detail: 'Research consistently shows that calm, silent teacher presence reduces low-level disruption faster than verbal instruction. In high power-distance classrooms — where teacher authority is assumed — this effect is especially pronounced.',
    cite: 'Lemov (2010), Teach Like a Champion; classroom management meta-analyses',
    col: '#8B3A3A', bg: '#FEF0F0',
  },
  {
    emoji: '🌱',
    headline: 'Students who believe their intelligence can grow — rather than being fixed at birth — learn more and recover from failure faster.',
    detail: 'Growth mindset research has been replicated across dozens of countries and school systems. The effect is consistent regardless of nationality or cultural background, which makes it one of the few universal levers international teachers have.',
    cite: 'Dweck (2006); Yeager & Walton (2011)',
    col: '#1D9E75', bg: '#E1F5EE',
  },
  {
    emoji: '🏫',
    headline: 'In Japan, students clean their own classrooms, serve school lunch, and run morning meetings — with no adult leading.',
    detail: 'These daily rituals are intentional. Japanese schools treat collective responsibility as a taught skill, not a personality trait. Students who arrive in your classroom already holding these expectations may find a teacher-managed classroom confusing or even infantilising.',
    cite: 'Japanese Ministry of Education; character education research',
    col: '#185FA5', bg: '#E6F1FB',
  },
  {
    emoji: '🔔',
    headline: 'The most effective way to reduce whole-class silence is to reduce the audience — not increase the pressure.',
    detail: 'Students who will not speak in front of thirty peers will often speak freely in a pair or trio. Reducing the social cost of being wrong is a faster route to participation than asking more directly or calling on individuals without warning.',
    cite: 'Webb (1989); participation research across school cultures',
    col: '#BA7517', bg: '#FAEEDA',
  },
  {
    emoji: '🧭',
    headline: 'The teacher\'s relationship with the student predicts learning outcomes more strongly than any specific teaching method.',
    detail: 'Across meta-analyses spanning thousands of studies, teacher-student relationship quality is one of the strongest single predictors of academic achievement — stronger than class size, technology, or curriculum. This holds across every country studied.',
    cite: 'Hattie (2009), Visible Learning',
    col: '#534AB7', bg: '#EEEDFE',
  },
]

function ResearchFact() {
  const dailySeed = Math.floor(Date.now() / 86400000) % RESEARCH_FACTS.length
  const [idx, setIdx] = useState(dailySeed)
  const f = RESEARCH_FACTS[idx]
  const next = () => setIdx(i => (i + 1) % RESEARCH_FACTS.length)

  return (
    <div style={{ marginBottom: '1rem', borderLeft: `4px solid ${f.col}`, background: f.bg, borderRadius: '0 var(--r) var(--r) 0', padding: '.85rem 1.05rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem', marginBottom: '.35rem' }}>
        <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: f.col }}>
          {f.emoji}&nbsp; What the research actually shows · {idx + 1} of {RESEARCH_FACTS.length}
        </div>
        <button onClick={next} style={{ fontSize: 11.5, fontWeight: 600, color: f.col, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, whiteSpace: 'nowrap' }}>
          Next →
        </button>
      </div>
      <div style={{ fontSize: 13.5, fontWeight: 600, color: f.col, lineHeight: 1.45, marginBottom: '.4rem' }}>{f.headline}</div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '.3rem' }}>{f.detail}</div>
      <div style={{ fontSize: 10.5, color: 'var(--ink-4)', fontStyle: 'italic' }}>{f.cite}</div>
    </div>
  )
}

// ── Culture check quiz questions ──────────────────────────────────────────
const QUIZ_QUESTIONS = [
  {
    q: 'In Japan, students clean their own classrooms every day — there are no janitors.',
    answer: true,
    pctCorrect: 42,
    explanation: 'True. Daily cleaning time is a standard part of the Japanese school day. Students sweep, mop, and tidy as a group — it\'s considered part of character education, not a chore to outsource.',
    cite: 'Standard practice across Japanese public schools',
  },
  {
    q: 'When a student nods and says "yes" while you explain something, it usually means they understood.',
    answer: false,
    pctCorrect: 31,
    explanation: 'Not in many classrooms. In Korean, Chinese, Japanese, and other East Asian contexts, nodding and saying "yes" typically means "I hear you" or "I respect you" — not "I understand and will do it." The only way to check is to ask them to show you.',
    cite: 'Cultural communication research; Hall (1976)',
  },
  {
    q: 'Finland — one of the top-ranked education systems globally — doesn\'t begin formal schooling until age 7.',
    answer: true,
    pctCorrect: 54,
    explanation: 'True. Finnish children spend their early years in play-based learning before any formal reading or maths instruction. Despite starting later than almost every other country, Finland consistently ranks near the top for literacy and problem-solving.',
    cite: 'Finnish National Agency for Education',
  },
  {
    q: 'Students who rely heavily on memorisation tend to score worse on tests of deep, critical thinking.',
    answer: false,
    pctCorrect: 27,
    explanation: 'The research says the opposite. Students from East Asian school systems — where memorisation is common — consistently score among the highest globally on both knowledge recall and higher-order thinking. Memorisation is often a path to deep understanding, not a shortcut around it.',
    cite: 'Watkins & Biggs (2001); international assessment results',
  },
  {
    q: 'Giving written feedback with no grade produces better learning outcomes than giving a grade alone.',
    answer: true,
    pctCorrect: 33,
    explanation: 'True — and the research gap is significant. Students who receive only written comments (no score) engage more with the feedback and improve more on the next task. When a grade is added, many students stop reading the comments entirely.',
    cite: 'Black & Wiliam (1998), Inside the Black Box',
  },
  {
    q: 'Waiting just 3 extra seconds after asking a question can more than double the quality of student responses.',
    answer: true,
    pctCorrect: 47,
    explanation: 'True. Most teachers wait less than 1 second before re-asking or answering their own question. Extending this pause to 3–5 seconds significantly increases how many students respond, how long their answers are, and how accurate they are.',
    cite: 'Rowe (1974)',
  },
  {
    q: 'Students from the same country will generally behave the same way in your classroom.',
    answer: false,
    pctCorrect: 38,
    explanation: 'Not really. The school system a student came from matters far more than their nationality. Two students from Korea — one who attended Korean public school, one who was always in international schools — can have completely different classroom habits and expectations.',
    cite: 'School culture transfer research; Baskerville (2003)',
  },
  {
    q: 'In Germany, children are typically placed into different types of secondary school based on teacher recommendations around age 10.',
    answer: true,
    pctCorrect: 45,
    explanation: 'True. Germany\'s education system has historically separated students into different school tracks — some leading to university, others to vocational training — based largely on teacher assessments at around age 10. That early decision shapes their whole educational path.',
    cite: 'OECD Education at a Glance',
  },
  {
    q: 'A student who avoids eye contact with you is probably being disrespectful.',
    answer: false,
    pctCorrect: 29,
    explanation: 'In many cultures, avoiding eye contact with a teacher is a sign of respect, not disrespect. In parts of East Asia, West Africa, and Latin America, sustained eye contact with an authority figure can actually feel confrontational or rude.',
    cite: 'Cross-cultural communication research',
  },
  {
    q: 'Students who are quiet in class discussions are less engaged with the material than students who speak up.',
    answer: false,
    pctCorrect: 36,
    explanation: 'Not necessarily. Quiet students may be deeply engaged but processing differently — especially those learning in a second language, those from school systems where students don\'t usually speak unless called on, or those managing the social risk of speaking in front of peers.',
    cite: 'Cummins (1981); participation and second language research',
  },
]

function CultureQuiz() {
  const dailySeed = Math.floor(Date.now() / 86400000) % QUIZ_QUESTIONS.length
  const [idx, setIdx] = useState(dailySeed)
  const [chosen, setChosen] = useState(null) // null | true | false

  const q = QUIZ_QUESTIONS[idx]
  const correct = chosen !== null && chosen === q.answer
  const next = () => { setIdx(i => (i + 1) % QUIZ_QUESTIONS.length); setChosen(null) }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
      borderRadius: 'var(--rl)', padding: '1rem 1.25rem', height: '100%', boxSizing: 'border-box',
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', color: '#7EC8B0', marginBottom: '.5rem' }}>
        Culture check · {idx + 1} of {QUIZ_QUESTIONS.length}
      </div>

      <div style={{ fontSize: 14, fontWeight: 600, color: '#FFFFFF', lineHeight: 1.5, marginBottom: '.85rem' }}>
        {q.q}
      </div>

      {/* Buttons — hidden after answer */}
      {chosen === null && (
        <div style={{ display: 'flex', gap: '.5rem' }}>
          {[{ label: 'True', val: true }, { label: 'False', val: false }].map(({ label, val }) => (
            <button
              key={label}
              onClick={() => setChosen(val)}
              style={{
                flex: 1, padding: '.55rem 0', fontSize: 13, fontWeight: 600,
                background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.25)',
                borderRadius: 'var(--r)', color: 'white', cursor: 'pointer',
                transition: 'background .15s',
              }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,.2)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,.1)'}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Reveal */}
      {chosen !== null && (
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.4rem',
            fontSize: 13, fontWeight: 700,
            color: correct ? '#7EC8B0' : '#F08080',
            marginBottom: '.5rem',
          }}>
            {correct ? '✓ Correct' : `✗ The answer is ${q.answer ? 'True' : 'False'}`}
            <span style={{
              fontSize: 11, fontWeight: 600,
              background: 'rgba(255,255,255,.12)', color: 'rgba(255,255,255,.7)',
              padding: '2px 9px', borderRadius: 999, marginLeft: 4,
            }}>
              {q.pctCorrect}% of people get this right
            </span>
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.85)', lineHeight: 1.6, marginBottom: '.35rem' }}>
            {q.explanation}
          </div>
          <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.4)', fontStyle: 'italic', marginBottom: '.65rem' }}>
            {q.cite}
          </div>
          <button
            onClick={next}
            style={{
              fontSize: 12, fontWeight: 600, color: '#7EC8B0',
              background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
            }}
          >
            Next question →
          </button>
        </div>
      )}
    </div>
  )
}

const CATEGORY_CONFIG = {
  participation: {
    label: 'Participation',
    emoji: '🗣️',
    subtitle: 'Who speaks, who stays silent, and why',
    getSummary: (country, h) => {
      if (!h) return null
      const idv = h[1], pdi = h[0]
      if (idv < 35) return `Students are often careful about speaking in front of the group. Silence is frequently an active face-protection strategy — in Chinese contexts this is Mianzi (social standing), in Korean contexts Kibun (relational harmony). Students are waiting for a safer opening, not that they have nothing to say. Students who came from school systems where teachers speak and students listen will also need time to build the habit of public participation.`
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
      if (uai > 70) return `Students from high-uncertainty-avoidance cultures — especially those from East Asian school systems — often use structured, precise approaches as a deliberate learning strategy, not a limitation. What looks like a preference for memorisation is often memorisation-for-understanding: building mastery through precision before experimenting. Open tasks feel risky because students are genuinely trying to do the work correctly. Give them a clear starting point and they often exceed expectations.`
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
  feedback: {
    label: 'Giving feedback',
    emoji: '✏️',
    subtitle: 'Why correction lands differently — and how to deliver it well',
    getSummary: (country, h) => {
      if (!h) return null
      const pdi = h[0], idv = h[1]
      if (pdi > 65 && idv < 40) return `In ${country}, direct negative feedback — especially in public — can cause significant face loss. Students may shut down or disengage after being corrected in front of peers. Written, private, and reframed feedback lands much better here.`
      if (pdi > 55) return `In ${country}, students tend to receive correction more comfortably when it comes privately or is framed with care. One-on-one or written feedback is usually safer than open group correction.`
      return `In ${country}, direct feedback is more culturally normal. Students are generally equipped to receive candid assessment, though specificity and tone always matter.`
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
  { id: 'e11', label: 'Public correction or criticism causes visible withdrawal', dim: 'PDI', dir: 'high', threshold: 65, cat: 'feedback' },
  { id: 'e12', label: 'Students echo or closely repeat your phrasing rather than paraphrasing', dim: 'IDV', dir: 'low', threshold: 40, cat: 'feedback' },
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
        Practical advice for the classroom moments that catch international teachers off guard.
      </div>

      {/* Caveat box + Culture quiz — side by side */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'stretch', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <div style={{
          flex: '1 1 300px',
          background: '#FFF8E6', border: '1px solid #EDD89A', borderRadius: 'var(--r)',
          padding: '.75rem 1rem',
        }}>
          <div style={{ fontSize: 12.5, color: '#6B5B1F', lineHeight: 1.6 }}>
            <strong>What this is and isn't.</strong> The single biggest predictor of classroom behavior is often not nationality — it is{' '}
            <em>the school system a student came from</em>. A student who spent their formative years in a Korean public school brings
            those habits into your class, regardless of their passport. These patterns use{' '}
            <a href="https://www.hofstede-insights.com" target="_blank" rel="noopener" style={{ color: '#6B5B1F' }}>Hofstede's cultural dimensions</a>{' '}
            as a starting point — national-level data about how societies tend to handle power, uncertainty, and group identity — but treat
            them as background context, not a profile of any individual. Students are shaped by their previous school, their family,
            their own personality, and their experience in your classroom. Use this to ask better questions, not to make assumptions.
          </div>
        </div>

        {/* Culture check quiz */}
        <div style={{ flex: '1 1 300px' }}>
          <CultureQuiz />
        </div>
      </div>

      {/* Research fact of the day — single rotating card */}
      <ResearchFact />

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

          {/* Footer / source */}
          <div style={{ fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.55, maxWidth: 560, marginTop: '1.25rem' }}>
            <strong>Source:</strong> Cultural dimension scores from Hofstede Insights (6-D model). Classroom interpretations by stool, informed by
            published research including Watkins & Biggs on CHC learners and the Asian Learner Paradox, Marton et al. on
            memorisation-for-understanding, Meyer's Culture Map (Evaluating dimension), face dynamics research (Mianzi, Kibun, Haji),
            and Baskerville/McSweeney on the limits of national culture averages. These are broad tendencies, not profiles.
            The best predictor of classroom behavior is often the school system a student came from, not their nationality.
            Use this to ask better questions, not to make assumptions.
          </div>
        </>
      )}
    </div>
  )
}

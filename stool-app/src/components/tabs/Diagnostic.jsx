import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { insertDiagnosticSubmission } from '../../lib/supabase.js'

const SCHOOL_Q_IDS = ['q2', 'q5', 'q6', 'q8']
const CULTURAL_Q_IDS = ['q1', 'q4', 'q7']
const STRUCTURAL_Q_IDS = ['q2', 'q5', 'q6']
const DIAG_SCORE_MAP = [2, 4, 7, 9]
const QUESTION_TONES = {
  q1: { bg: 'var(--blue-bg)', border: 'var(--blue)', text: 'var(--blue-dark)', pill: 'Culture' },
  q2: { bg: 'var(--amber-bg)', border: 'var(--amber)', text: 'var(--amber-dark)', pill: 'School' },
  q3: { bg: 'var(--purple-bg)', border: 'var(--purple)', text: 'var(--purple-dark)', pill: 'Place' },
  q4: { bg: 'var(--blue-bg)', border: 'var(--blue)', text: 'var(--blue-dark)', pill: 'Culture' },
  q5: { bg: 'var(--amber-bg)', border: 'var(--amber)', text: 'var(--amber-dark)', pill: 'School' },
  q6: { bg: 'var(--amber-bg)', border: 'var(--amber)', text: 'var(--amber-dark)', pill: 'School' },
  q7: { bg: 'var(--blue-bg)', border: 'var(--blue)', text: 'var(--blue-dark)', pill: 'Culture' },
  q8: { bg: 'var(--green-bg)', border: 'var(--green)', text: 'var(--green-dark)', pill: 'Outlook' },
}

function computeSchoolLegScore(answers) {
  const vals = SCHOOL_Q_IDS.map((id) => answers[id]).filter((v) => v !== undefined)
  if (!vals.length) return null
  return Math.round(vals.reduce((sum, v) => sum + DIAG_SCORE_MAP[v], 0) / vals.length)
}

function classifyAnswer(a) {
  if (a <= 1) return 2
  if (a === 2) return 1
  return 0
}

function buildDiagnosticResult(answers) {
  const answeredIds = Object.keys(answers)
  const total = answeredIds.length
  if (total < 5) return null

  const scores = { cultural: 0, structural: 0, place: 0, overall: 0 }

  answeredIds.forEach((id) => {
    const value = answers[id]
    if (CULTURAL_Q_IDS.includes(id)) scores.cultural += classifyAnswer(value)
    if (STRUCTURAL_Q_IDS.includes(id)) scores.structural += classifyAnswer(value)
    if (id === 'q3') scores.place += classifyAnswer(value)
    if (id === 'q8') {
      if (value <= 1) scores.overall += 3
      else if (value === 2) scores.overall += 2
      else if (value === 3) scores.overall += 1
    }
  })

  const cultR = scores.cultural / total
  const strucR = scores.structural / total
  const placeR = scores.place / total

  if (cultR > 1.2 && strucR < 0.8) {
    return {
      kind: 'cultural',
      title: 'Mostly cultural friction',
      body: "What you're describing sounds more like normal adaptation discomfort than a broken institution.",
      urgency: 'That is genuinely good news. Cultural friction often peaks around 3-6 months and tends to ease by 12 months.',
      actions: [
        'Build real relationships with local colleagues, not only expat circles.',
        'Learn a little of the local language. The respect signal often matters more than fluency.',
        'Read about the host culture so daily patterns feel less mysterious.',
      ],
      scores,
    }
  }

  if (strucR > 1.2 && cultR < 0.8) {
    return {
      kind: 'structural',
      title: 'Mostly school or package friction',
      body: 'Your answers point more toward leadership, workload, or school systems than toward culture shock.',
      urgency: 'Cultural adjustment improves with time. Structural problems usually need advocacy, a change in conditions, or a move.',
      actions: [
        'Name the core issue clearly: workload, leadership opacity, pay, or something else.',
        'Ask whether the issue is actually improving or whether you are just getting used to it.',
        'Use the next move to screen the school leg more carefully, not just the country.',
      ],
      scores,
    }
  }

  if (placeR > 1.2) {
    return {
      kind: 'place',
      title: 'Mostly place friction',
      body: 'The biggest strain looks like the city or lifestyle around the job rather than the school itself.',
      urgency: 'Place discomfort is real. It is also the part of the stool most open to active management.',
      actions: [
        'Build a social calendar on purpose instead of waiting for belonging to happen.',
        'Try local routines and neighborhoods, not only expat defaults.',
        'Use My Move to see whether another destination may fit your life better.',
      ],
      scores,
    }
  }

  return {
    kind: 'mixed',
    title: 'Mixed picture',
    body: 'More than one leg is creating friction, which makes it easy to blame the wrong thing.',
    urgency: 'The biggest risk here is confusing a school problem for a country problem, or vice versa.',
    actions: [
      'Rate package, school, and place separately and decide which leg is actually failing.',
      'Ask whether a better school in the same country would solve a large part of the problem.',
    ],
    scores,
  }
}

const DIAG_QS = [
  {
    id: 'q1',
    text: "When a student or colleague doesn't respond to your feedback or question the way you expect, how do you feel?",
    dim: 'Group culture / authority',
    opts: [
      "Confused - it doesn't make logical sense",
      'Frustrated - it feels disrespectful',
      "Mildly annoyed but I'm adapting",
      'Curious - I try to understand the cultural reason',
    ],
  },
  {
    id: 'q2',
    text: 'In staff meetings, how much do you feel your professional voice is heard by leadership?',
    dim: 'Authority distance',
    opts: [
      'Almost never - decisions feel top-down',
      "Sometimes - when I've built personal relationships",
      'Usually - the culture is reasonably open',
      'Yes - the leadership is genuinely collaborative',
    ],
  },
  {
    id: 'q3',
    text: 'How would you describe your social life and sense of belonging in your current city?',
    dim: 'Place',
    opts: [
      'Isolated - I have few meaningful connections',
      'I have colleagues but not real community',
      'I have a social life but it feels shallow',
      'I feel genuinely connected and at home here',
    ],
  },
  {
    id: 'q4',
    text: 'When students are silent in class or give monosyllabic responses, how do you interpret this?',
    dim: 'Group culture / certainty',
    opts: [
      'As disengagement or disrespect',
      "As a cultural norm I don't understand",
      'As expected given the culture - I adapt my approach',
      'As an opportunity to use different pedagogical strategies',
    ],
  },
  {
    id: 'q5',
    text: 'How does your workload compare to what you expected or experienced before this post?',
    dim: 'Workload / school',
    opts: [
      "Much heavier - it's unsustainable",
      'Heavier than expected but manageable',
      'About what I expected',
      'Reasonable - the culture supports work-life balance',
    ],
  },
  {
    id: 'q6',
    text: 'How transparent is your school about decisions that affect your work?',
    dim: 'School',
    opts: [
      'Opaque - I often find out last',
      'Selective - I get information informally, not officially',
      'Mostly transparent',
      "Very transparent - I'm included in decisions",
    ],
  },
  {
    id: 'q7',
    text: 'How often do cultural differences create genuine friction in your day-to-day classroom experience?',
    dim: 'Cultural fit',
    opts: [
      "Daily - it's exhausting",
      'Several times a week',
      "Occasionally - I'm mostly adapted",
      "Rarely - I've found my footing here",
    ],
  },
  {
    id: 'q8',
    text: 'When you imagine staying in your current post for another two years, how do you feel?',
    dim: 'Overall',
    opts: [
      'Dread - I need to leave',
      'Uncertain - it depends on things changing',
      'Cautiously okay - I can make it work',
      "Good - I'm settled and growing here",
    ],
  },
]

export function Diagnostic() {
  const { profile, updateProfile } = useProfile()
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [scoreApplied, setScoreApplied] = useState(false)
  const [saveState, setSaveState] = useState('idle')
  const [lastSavedSignature, setLastSavedSignature] = useState('')

  const answeredCount = Object.keys(answers).length

  const select = (qid, oi) => {
    setAnswers((a) => ({ ...a, [qid]: oi }))
    setScoreApplied(false)
    if (saveState !== 'idle') setSaveState('idle')
  }

  const run = async () => {
    const analysis = buildDiagnosticResult(answers)
    if (!analysis) {
      alert('Please answer at least 5 questions for a meaningful analysis.')
      return
    }

    setResult(analysis)
    const schoolScore = computeSchoolLegScore(answers)
    const signature = JSON.stringify(answers)
    if (signature === lastSavedSignature) {
      setSaveState('saved')
      return
    }

    setSaveState('saving')
    const saveResult = await insertDiagnosticSubmission({
      profile,
      answers,
      result: analysis,
      schoolLegScore: schoolScore,
    })

    if (saveResult?.data) {
      setLastSavedSignature(signature)
      setSaveState('saved')
    } else if (saveResult?.error === 'not-configured') {
      setSaveState('offline')
    } else {
      setSaveState('error')
    }
  }

  const diagScore = computeSchoolLegScore(answers)
  const currentScore = profile.sch || 5
  const delta = diagScore == null ? 0 : diagScore - currentScore
  const deltaArrow = delta > 1 ? 'up' : delta < -1 ? 'down' : 'across'
  const deltaColor = delta > 1 ? '#1D9E75' : delta < -1 ? '#D85A30' : '#534AB7'
  const progressPct = Math.max(8, (answeredCount / 8) * 100)

  return (
    <div className="tp active">
      <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.15rem 1.2rem', marginBottom: '1rem', boxShadow: '0 2px 18px rgba(0,0,0,.04)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '.75rem', flexWrap: 'wrap', marginBottom: '.8rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.25rem' }}>Diagnostic</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', maxWidth: 700, lineHeight: 1.6 }}>
              This diagnostic helps you tell the difference between structural problems and cultural friction. Eight honest questions, about two minutes.
            </div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal-dark)', background: 'var(--teal-light)', border: '1px solid rgba(29,158,117,.22)', borderRadius: 999, padding: '5px 10px', whiteSpace: 'nowrap' }}>
            {answeredCount}/8 answered
          </div>
        </div>
        <div style={{ height: 8, background: 'var(--surface-2)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg, var(--teal) 0%, var(--blue) 55%, var(--purple) 100%)', borderRadius: 999, transition: 'width .25s ease' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '.75rem' }}>
        {DIAG_QS.map((q, qi) => (
          <div key={q.id} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', boxShadow: '0 1px 12px rgba(0,0,0,.03)' }}>
            <div style={{ background: QUESTION_TONES[q.id].bg, borderBottom: '1px solid var(--border)', padding: '.75rem .95rem .7rem', borderTop: `3px solid ${QUESTION_TONES[q.id].border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: '.45rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.45rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: QUESTION_TONES[q.id].text, textTransform: 'uppercase', letterSpacing: '.08em' }}>
                    {QUESTION_TONES[q.id].pill}
                  </span>
                  <span style={{ fontSize: 10.5, color: 'var(--ink-4)' }}>•</span>
                  <div style={{ fontSize: 10.5, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{q.dim}</div>
                </div>
                <div style={{ fontSize: 10.5, color: QUESTION_TONES[q.id].text, whiteSpace: 'nowrap', fontWeight: 600 }}>Q{qi + 1}</div>
              </div>
              <div style={{ fontSize: 13.4, fontWeigh
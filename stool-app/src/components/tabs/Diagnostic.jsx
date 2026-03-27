import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { insertDiagnosticSubmission } from '../../lib/supabase.js'

const SCHOOL_Q_IDS = ['q2', 'q5', 'q6', 'q8']
const CULTURAL_Q_IDS = ['q1', 'q4', 'q7']
const STRUCTURAL_Q_IDS = ['q2', 'q5', 'q6']
const DIAG_SCORE_MAP = [2, 4, 7, 9]

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

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Diagnostic</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', maxWidth: 640, lineHeight: 1.6 }}>
          This diagnostic helps you tell the difference between structural problems and cultural friction. Eight honest questions, about two minutes.
        </div>
        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-3)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 999, padding: '4px 10px', whiteSpace: 'nowrap' }}>
          {answeredCount}/8 answered
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '.75rem' }}>
        {DIAG_QS.map((q, qi) => (
          <div key={q.id} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: '.45rem' }}>
              <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{q.dim}</div>
              <div style={{ fontSize: 10.5, color: 'var(--ink-4)', whiteSpace: 'nowrap' }}>Q{qi + 1}</div>
            </div>
            <div style={{ fontSize: 13.25, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.65rem', lineHeight: 1.45 }}>{q.text}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {q.opts.map((o, oi) => (
                <button
                  key={oi}
                  className={`diag-opt${answers[q.id] === oi ? ' sel' : ''}`}
                  style={{ fontSize: 12, padding: '.65rem .8rem', marginBottom: 0 }}
                  onClick={() => select(q.id, oi)}
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary" style={{ marginTop: '1rem', maxWidth: 240 }} onClick={run}>
        Analyse my responses -&gt;
      </button>

      {result && (
        <div style={{ marginTop: '1.5rem', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem' }}>Your diagnosis</div>
            {saveState === 'saving' && <div style={{ fontSize: 11.5, color: 'var(--ink-4)' }}>Saving privately for admin review...</div>}
            {saveState === 'saved' && <div style={{ fontSize: 11.5, color: '#1D9E75' }}>Saved privately for admin review.</div>}
            {saveState === 'offline' && <div style={{ fontSize: 11.5, color: 'var(--ink-4)' }}>Supabase is not configured, so this result stays local only.</div>}
            {saveState === 'error' && <div style={{ fontSize: 11.5, color: '#D85A30' }}>This result could not be saved to the admin dashboard.</div>}
          </div>

          <div style={{ fontSize: 11, fontWeight: 600, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.35rem' }}>
            {result.title}
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1rem' }}>{result.body}</div>
          <div className="ibox" style={{ marginBottom: '1rem' }}>{result.urgency}</div>

          <div className="csec">Recommended actions</div>
          {result.actions.map((a, i) => (
            <div key={i} className="ibox" style={{ marginBottom: '.5rem' }}>{a}</div>
          ))}

          {diagScore != null && (
            <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.5rem' }}>
                School leg score from this diagnostic
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                  Current profile score: <strong style={{ color: '#BA7517', fontSize: '1.2rem', fontWeight: 300 }}>{currentScore}</strong>
                </div>
                <div style={{ fontSize: 13, color: deltaColor, textTransform: 'uppercase', letterSpacing: '.06em' }}>{deltaArrow}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                  Diagnostic score: <strong style={{ color: '#BA7517', fontSize: '1.2rem', fontWeight: 300 }}>{diagScore}</strong>
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '.75rem', lineHeight: 1.5 }}>
                Based on your answers to the leadership, workload, transparency, and outlook questions.
                {Math.abs(delta) > 1 && (
                  <span style={{ color: deltaColor, fontWeight: 500 }}>
                    {delta > 0 ? ' Your gut-feel score may be underestimating your current school.' : ' Your gut-feel score may be more optimistic than your answers suggest.'}
                  </span>
                )}
              </div>
              {!scoreApplied ? (
                <button
                  onClick={() => {
                    updateProfile({ sch: diagScore })
                    setScoreApplied(true)
                  }}
                  style={{ fontSize: 12.5, fontWeight: 500, color: 'white', background: '#BA7517', border: 'none', borderRadius: 'var(--r)', padding: '7px 16px', cursor: 'pointer' }}
                >
                  Update my School score to {diagScore} -&gt;
                </button>
              ) : (
                <div style={{ fontSize: 12.5, color: 'var(--teal-dark)', background: '#E1F5EE', borderRadius: 'var(--r)', padding: '7px 14px', display: 'inline-block', fontWeight: 500 }}>
                  School score updated to {diagScore}. It now flows through My Move and Overview.
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Diagnostic

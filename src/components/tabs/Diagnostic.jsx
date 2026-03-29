import { useState, useEffect } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { insertDiagnosticSubmission } from '../../lib/supabase.js'

const DIAG_ANSWERS_KEY = 'stool_diagnostic_answers_v1'

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

// Question labels for specific callouts in results
const Q_LABELS = {
  q1: 'how you interpret unexpected student reactions',
  q2: 'whether your voice is heard by leadership',
  q3: 'your sense of belonging in your city',
  q4: 'how you read student silence',
  q5: 'workload compared to expectations',
  q6: 'school transparency',
  q7: 'how often cultural friction hits daily',
  q8: 'your outlook on staying another two years',
}

function buildDiagnosticResult(answers) {
  const answeredIds = Object.keys(answers)
  const total = answeredIds.length
  if (total < 5) return null

  // Each dimension's max depends on how many questions were answered
  const scores = { cultural: 0, structural: 0, place: 0 }
  const answeredCultural = CULTURAL_Q_IDS.filter(id => answeredIds.includes(id))
  const answeredStructural = STRUCTURAL_Q_IDS.filter(id => answeredIds.includes(id))

  answeredIds.forEach((id) => {
    const value = answers[id]
    if (CULTURAL_Q_IDS.includes(id)) scores.cultural += classifyAnswer(value)
    if (STRUCTURAL_Q_IDS.includes(id)) scores.structural += classifyAnswer(value)
    if (id === 'q3') scores.place += classifyAnswer(value)
  })

  // Normalise to 0–1 within each dimension's actual max
  const cultMax = answeredCultural.length * 2
  const strucMax = answeredStructural.length * 2
  const cultN = cultMax > 0 ? scores.cultural / cultMax : 0   // 0 = no friction, 1 = max friction
  const strucN = strucMax > 0 ? scores.structural / strucMax : 0
  const placeN = answers.q3 !== undefined ? scores.place / 2 : 0

  // Find which specific questions scored worst (answer 0 or 1 = friction)
  const frictionQs = answeredIds
    .filter(id => id !== 'q8' && answers[id] <= 1)
    .map(id => Q_LABELS[id])
    .filter(Boolean)

  // Dominant leg: cultural wins if clearly above structural AND structural not also high
  const culturalDominant = cultN >= 0.5 && cultN > strucN + 0.2
  const structuralDominant = strucN >= 0.5 && strucN > cultN + 0.2
  const placeDominant = placeN >= 0.5 && !culturalDominant && !structuralDominant && strucN < 0.4

  const frictionNote = frictionQs.length > 0
    ? ` Your answers on ${frictionQs.slice(0, 2).join(' and ')} were the clearest signals.`
    : ''

  if (culturalDominant) {
    return {
      kind: 'cultural',
      title: 'Mostly cultural friction',
      body: `What you're describing sounds more like normal adaptation discomfort than a broken institution.${frictionNote}`,
      urgency: 'That is genuinely good news. Cultural friction often peaks around 3–6 months and tends to ease by 12 months. School and place are not the main source — the adjustment itself is.',
      actions: [
        'Head to the Classroom Guide — it explains why students behave the way they do and gives you practical responses.',
        'Check the Culture tab for the specific patterns that are catching you off guard.',
        'Build real relationships with local colleagues, not only expat circles. Language matters less than intent.',
      ],
      links: [
        { label: 'Classroom Guide →', tab: 'faq' },
        { label: 'Culture tab →', tab: 'cultural' },
      ],
      scores,
    }
  }

  if (structuralDominant) {
    return {
      kind: 'structural',
      title: 'Mostly school friction',
      body: `Your answers point more toward leadership, workload, or school systems than toward culture shock.${frictionNote}`,
      urgency: 'Cultural adjustment improves with time. Structural problems usually need advocacy, a change in conditions, or a move. Adapting harder to a poorly run school is not a strategy.',
      actions: [
        'Name the core issue clearly: workload, leadership opacity, pay, or communication. Vague discomfort is harder to act on.',
        'Ask whether things are actually improving or whether you are just getting used to them.',
        'Use My Move to screen the school leg more carefully on your next search — not just the country.',
        'Check My School to rate this placement honestly before you forget the detail.',
      ],
      links: [
        { label: 'My Move →', tab: 'prediction' },
        { label: 'My School →', tab: 'schools' },
      ],
      scores,
    }
  }

  if (placeDominant) {
    return {
      kind: 'place',
      title: 'Mostly place friction',
      body: `The biggest strain looks like the city or lifestyle around the job rather than the school itself.${frictionNote}`,
      urgency: 'Place discomfort is real. It is also the part of the stool most open to active management — you can change a lot about how you inhabit a place without changing the job.',
      actions: [
        'Build a social calendar on purpose instead of waiting for belonging to happen naturally.',
        'Try local routines and neighborhoods rather than defaulting to expat spaces.',
        'Use My Move to see whether another destination would fit your life better — sometimes the school is fine but the city is wrong.',
      ],
      links: [
        { label: 'My Move →', tab: 'prediction' },
      ],
      scores,
    }
  }

  return {
    kind: 'mixed',
    title: 'More than one leg is wobbly',
    body: `Multiple things are creating friction, which makes it easy to blame the wrong one.${frictionNote}`,
    urgency: 'The biggest risk with a mixed picture is confusing a school problem for a country problem, or vice versa. Leaving for the right reason matters.',
    actions: [
      'Rate school, place, and cultural fit separately and decide honestly which leg is actually failing.',
      'Ask: would a better school in the same country solve most of the problem? If yes, the country is not the issue.',
      'Use My Move to compare destinations side by side — sometimes the clarity comes from seeing the alternative.',
      'If cultural friction is part of it, the Classroom Guide explains the patterns that catch people off guard most.',
    ],
    links: [
      { label: 'My Move →', tab: 'prediction' },
      { label: 'Classroom Guide →', tab: 'faq' },
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
    text: 'How often do cultural differences create genuine friction in your day-to-day work?',
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
  const { profile, updateProfile, setActiveTab, profileEmail } = useProfile()

  // Restore answers from localStorage on mount
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem(DIAG_ANSWERS_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch { return {} }
  })
  const [result, setResult] = useState(null)
  const [scoreApplied, setScoreApplied] = useState(false)
  const [saveState, setSaveState] = useState('idle')
  const [lastSavedSignature, setLastSavedSignature] = useState('')

  // Persist answers to localStorage whenever they change
  useEffect(() => {
    try { localStorage.setItem(DIAG_ANSWERS_KEY, JSON.stringify(answers)) } catch {}
  }, [answers])

  const answeredCount = Object.keys(answers).length

  const select = (qid, oi) => {
    setAnswers((a) => ({ ...a, [qid]: oi }))
    setScoreApplied(false)
    if (saveState !== 'idle') setSaveState('idle')
  }

  const clearAnswers = () => {
    setAnswers({})
    setResult(null)
    setScoreApplied(false)
    setSaveState('idle')
    try { localStorage.removeItem(DIAG_ANSWERS_KEY) } catch {}
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
      email: profileEmail,
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
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.25rem' }}>Stool check-up</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', maxWidth: 700, lineHeight: 1.6 }}>
              Which leg of your stool is wobbling? Eight honest questions to separate school problems from place problems from cultural friction. Two minutes.
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal-dark)', background: 'var(--teal-light)', border: '1px solid rgba(29,158,117,.22)', borderRadius: 999, padding: '5px 10px', whiteSpace: 'nowrap' }}>
              {answeredCount}/8 answered
            </div>
            {answeredCount > 0 && (
              <button
                onClick={clearAnswers}
                style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-4)', background: 'transparent', border: '1px solid var(--border)', borderRadius: 999, padding: '5px 10px', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                Start over
              </button>
            )}
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
              <div style={{ fontSize: 13.4, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.45 }}>{q.text}</div>
            </div>
            <div style={{ padding: '.85rem .95rem .95rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {q.opts.map((o, oi) => (
                <button
                  key={oi}
                  style={{
                    fontSize: 12,
                    padding: '.7rem .8rem',
                    marginBottom: 0,
                    width: '100%',
                    textAlign: 'left',
                    borderRadius: 'var(--r)',
                    border: `1px solid ${answers[q.id] === oi ? QUESTION_TONES[q.id].border : 'var(--border)'}`,
                    background: answers[q.id] === oi ? QUESTION_TONES[q.id].bg : 'white',
                    color: answers[q.id] === oi ? QUESTION_TONES[q.id].text : 'var(--ink-2)',
                    fontWeight: answers[q.id] === oi ? 500 : 400,
                    lineHeight: 1.45,
                    cursor: 'pointer',
                    transition: 'all .18s ease',
                    boxShadow: answers[q.id] === oi ? `inset 0 0 0 1px ${QUESTION_TONES[q.id].border}22` : 'none',
                  }}
                  onClick={() => select(q.id, oi)}
                >
                  {o}
                </button>
              ))}
            </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary" style={{ marginTop: '1rem', maxWidth: 240, boxShadow: '0 8px 18px rgba(29,158,117,.16)' }} onClick={run}>
        Which leg is it? →
      </button>

      {result && (
        <div style={{ marginTop: '1.5rem', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem', boxShadow: '0 2px 20px rgba(0,0,0,.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.75rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem' }}>Your diagnosis</div>
            {saveState === 'saving' && <div style={{ fontSize: 11.5, color: 'var(--ink-4)' }}>Saving privately for admin review...</div>}
            {saveState === 'saved' && <div style={{ fontSize: 11.5, color: '#1D9E75' }}>Saved privately for admin review.</div>}
            {saveState === 'offline' && <div style={{ fontSize: 11.5, color: 'var(--ink-4)' }}>Supabase is not configured, so this result stays local only.</div>}
            {saveState === 'error' && <div style={{ fontSize: 11.5, color: '#D85A30' }}>This result could not be saved to the admin dashboard.</div>}
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem', fontSize: 11, fontWeight: 600, color: 'var(--amber-dark)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.55rem', background: 'var(--amber-bg)', border: '1px solid rgba(186,117,23,.18)', borderRadius: 999, padding: '5px 10px' }}>
            {result.title}
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1rem' }}>{result.body}</div>
          <div className="ibox" style={{ marginBottom: '1rem' }}>{result.urgency}</div>

          <div className="csec">Recommended actions</div>
          {result.actions.map((a, i) => (
            <div key={i} className="ibox" style={{ marginBottom: '.5rem' }}>{a}</div>
          ))}

          {result.links && result.links.length > 0 && (
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.85rem' }}>
              {result.links.map(({ label, tab }) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontSize: 12.5, fontWeight: 600,
                    color: 'var(--teal-dark)', background: '#E1F5EE',
                    border: '1.5px solid rgba(29,158,117,.3)', borderRadius: 'var(--r)',
                    padding: '6px 14px', cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          {diagScore != null && (
            <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--amber-dark)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.5rem' }}>
                School leg score from this diagnostic
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                  Current profile score: <strong style={{ color: 'var(--amber)', fontSize: '1.2rem', fontWeight: 300 }}>{currentScore}</strong>
                </div>
                <div style={{ fontSize: 13, color: deltaColor, textTransform: 'uppercase', letterSpacing: '.06em' }}>{deltaArrow}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                  Diagnostic score: <strong style={{ color: 'var(--amber)', fontSize: '1.2rem', fontWeight: 300 }}>{diagScore}</strong>
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
                  style={{ fontSize: 12.5, fontWeight: 500, color: 'white', background: 'var(--amber)', border: 'none', borderRadius: 'var(--r)', padding: '7px 16px', cursor: 'pointer', boxShadow: '0 8px 18px rgba(186,117,23,.16)' }}
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

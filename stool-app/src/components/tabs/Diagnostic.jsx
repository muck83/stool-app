// Diagnostic.jsx
import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF } from '../../data/hofstede.js'

// School-leg score from diagnostic answers (school-relevant questions only)
const SCHOOL_Q_IDS  = ['q2', 'q5', 'q6', 'q8']
const DIAG_SCORE_MAP = [2, 4, 7, 9]  // answer index 0=worst → 3=best

function computeSchoolLegScore(answers) {
  const vals = SCHOOL_Q_IDS.map(id => answers[id]).filter(v => v !== undefined)
  if (!vals.length) return null
  return Math.round(vals.reduce((sum, v) => sum + DIAG_SCORE_MAP[v], 0) / vals.length)
}

const DIAG_QS = [
  { id:'q1', text:"When a student or colleague doesn't respond to your feedback or question the way you expect, how do you feel?", dim:'Group culture / authority', opts:["Confused — it doesn't make logical sense","Frustrated — it feels disrespectful","Mildly annoyed but I'm adapting","Curious — I try to understand the cultural reason"] },
  { id:'q2', text:"In staff meetings, how much do you feel your professional voice is heard by leadership?", dim:'Authority distance', opts:["Almost never — decisions feel top-down","Sometimes — when I've built personal relationships","Usually — the culture is reasonably open","Yes — the leadership is genuinely collaborative"] },
  { id:'q3', text:"How would you describe your social life and sense of belonging in your current city?", dim:'Place', opts:["Isolated — I have few meaningful connections","I have colleagues but not real community","I have a social life but it feels shallow","I feel genuinely connected and at home here"] },
  { id:'q4', text:"When students are silent in class or give monosyllabic responses, how do you interpret this?", dim:'Group culture / certainty', opts:["As disengagement or disrespect","As a cultural norm I don't understand","As expected given the culture — I adapt my approach","As an opportunity to use different pedagogical strategies"] },
  { id:'q5', text:"How does your workload compare to what you expected or experienced before this post?", dim:'Workload / school', opts:["Much heavier — it's unsustainable","Heavier than expected but manageable","About what I expected","Reasonable — the culture supports work-life balance"] },
  { id:'q6', text:"How transparent is your school about decisions that affect your work?", dim:'School', opts:["Opaque — I often find out last","Selective — I get information informally, not officially","Mostly transparent","Very transparent — I'm included in decisions"] },
  { id:'q7', text:"How often do cultural differences create genuine friction in your day-to-day classroom experience?", dim:'Cultural fit', opts:["Daily — it's exhausting","Several times a week","Occasionally — I'm mostly adapted","Rarely — I've found my footing here"] },
  { id:'q8', text:"When you imagine staying in your current post for another two years, how do you feel?", dim:'Overall', opts:["Dread — I need to leave","Uncertain — it depends on things changing","Cautiously okay — I can make it work","Good — I'm settled and growing here"] },
]

export function Diagnostic() {
  const { profile, updateProfile } = useProfile()
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [scoreApplied, setScoreApplied] = useState(false)

  const select = (qid, oi) => { setAnswers(a => ({ ...a, [qid]: oi })); setScoreApplied(false) }

  const run = () => {
    if (Object.keys(answers).length < 5) { alert('Please answer at least 5 questions for a meaningful analysis.'); return }
    const scores = { cultural: 0, structural: 0, place: 0, overall: 0 }
    let total = 0
    DIAG_QS.forEach(q => {
      const a = answers[q.id]
      if (a === undefined) return
      total++
      if (['Group culture / authority','Group culture / certainty','Cultural fit'].some(d => q.dim.includes(d.split(' ')[0]))) {
        if (a <= 1) scores.cultural += 2; else if (a === 2) scores.cultural += 1
      }
      if (q.dim.includes('school') || q.dim.includes('School') || q.dim.includes('Workload')) {
        if (a <= 1) scores.structural += 2; else if (a === 2) scores.structural += 1
      }
      if (q.dim === 'Place') { if (a <= 1) scores.place += 2; else if (a === 2) scores.place += 1 }
      if (q.dim === 'Overall') { if (a <= 1) scores.overall += 3; else if (a === 2) scores.overall += 2; else if (a === 3) scores.overall += 1 }
    })
    const cultR = scores.cultural / total, strucR = scores.structural / total, placeR = scores.place / total
    let diag, urgency, actions
    if (cultR > 1.2 && strucR < 0.8) {
      diag = 'Your friction appears primarily <strong>cultural</strong> — not structural. The patterns you\'re describing align closely with normal cultural adaptation discomfort rather than a broken institution.'
      urgency = 'This is genuinely good news. Cultural friction typically peaks at 3–6 months and decreases significantly by 12 months.'
      actions = ['Focus on building genuine relationships with local colleagues — not expat networks exclusively.','Learn 20–30 words in the local language. The investment signals respect and opens doors disproportionate to the linguistic value.','Read one book on your host culture\'s history or social structure.']
    } else if (strucR > 1.2 && cultR < 0.8) {
      diag = 'Your friction appears primarily <strong>structural</strong> — the package, school culture, or leadership quality. This matters because structural problems typically do not resolve with more time.'
      urgency = 'Cultural adaptation improves with time. Structural problems require institutional change, advocacy, or a move.'
      actions = ['Name the specific structural issues precisely: underpayment? Leadership opacity? Workload?','Evaluate whether any structural issues are on a trajectory of improvement.','If the school is the problem, prioritise the school leg in your next application more carefully.']
    } else if (placeR > 1.2) {
      diag = 'Your primary challenge appears to be the <strong>place</strong> — the city, location, or lifestyle rather than the school or the package.'
      urgency = 'Place discomfort is real and should not be minimised. However, it is also the leg most amenable to active management.'
      actions = ['Invest deliberately in local discovery — not just expat venues.','Build a social calendar intentionally: one new experience per week for 3 months.','If you have a destination in mind, the My Move tab will show you whether the place leg is likely to improve there.']
    } else {
      diag = 'Your responses suggest a <strong>mixed picture</strong> — multiple factors contributing to your dissatisfaction.'
      urgency = 'The risk with mixed dissatisfaction is conflating causes: attributing cultural problems to the school, structural problems to the place.'
      actions = ['Use the three-legged stool framework explicitly: rate each leg 1–10 and identify which is genuinely the problem.','Separate "this country" from "this school" — would a better school in the same country fix things?']
    }
    setResult({ diag, urgency, actions })
  }

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Diagnostic</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.5rem', maxWidth: 640, lineHeight: 1.6 }}>
        This diagnostic helps you tell the difference between structural problems (things that won't improve with time) and cultural friction (normal adaptation discomfort that does get better). Eight honest questions — it takes about two minutes.
      </div>
      {DIAG_QS.map(q => (
        <div key={q.id} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '1.25rem', marginBottom: '.75rem' }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.4rem' }}>{q.dim}</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.75rem', lineHeight: 1.5 }}>{q.text}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {q.opts.map((o, oi) => (
              <button key={oi} className={`diag-opt${answers[q.id] === oi ? ' sel' : ''}`} style={{ fontSize: 12.5 }} onClick={() => select(q.id, oi)}>{o}</button>
            ))}
          </div>
        </div>
      ))}
      <button className="btn btn-primary" style={{ marginTop: '1rem', maxWidth: 240 }} onClick={run}>Analyse my responses →</button>
      {result && (
        <div style={{ marginTop: '1.5rem', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', marginBottom: '.5rem' }}>Your diagnosis</div>
          <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: result.diag }} />
          <div className="ibox" style={{ marginBottom: '1rem' }}>{result.urgency}</div>
          <div className="csec">Recommended actions</div>
          {result.actions.map((a, i) => <div key={i} className="ibox" style={{ marginBottom: '.5rem' }}>{a}</div>)}

          {/* ── School leg score update ─────────────────────────────── */}
          {(() => {
            const diagScore = computeSchoolLegScore(answers)
            if (!diagScore) return null
            const current = profile.sch || 5
            const delta   = diagScore - current
            const arrow   = delta > 1 ? '↑' : delta < -1 ? '↓' : '→'
            const col     = delta > 1 ? '#1D9E75' : delta < -1 ? '#D85A30' : '#534AB7'
            return (
              <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.5rem' }}>
                  School leg score from this diagnostic
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                    Current profile score: <strong style={{ color: '#BA7517', fontSize: '1.2rem', fontWeight: 300 }}>{current}</strong>
                  </div>
                  <div style={{ fontSize: '1.3rem', color: col }}>{arrow}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                    Diagnostic score: <strong style={{ color: '#BA7517', fontSize: '1.2rem', fontWeight: 300 }}>{diagScore}</strong>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '.75rem', lineHeight: 1.5 }}>
                  Based on your answers to the leadership, workload, transparency, and outlook questions.
                  {Math.abs(delta) > 1 && <span style={{ color: col, fontWeight: 500 }}> {delta > 0 ? ` Your gut-feel score may be underestimating your current school.` : ` Your gut-feel score may be more optimistic than your answers suggest.`}</span>}
                </div>
                {!scoreApplied ? (
                  <button
                    onClick={() => { updateProfile({ sch: diagScore }); setScoreApplied(true) }}
                    style={{ fontSize: 12.5, fontWeight: 500, color: 'white', background: '#BA7517', border: 'none', borderRadius: 'var(--r)', padding: '7px 16px', cursor: 'pointer' }}
                  >
                    Update my School score to {diagScore} →
                  </button>
                ) : (
                  <div style={{ fontSize: 12.5, color: 'var(--teal-dark)', background: '#E1F5EE', borderRadius: 'var(--r)', padding: '7px 14px', display: 'inline-block', fontWeight: 500 }}>
                    ✓ School score updated to {diagScore} — reflected in My Move and Overview
                  </div>
                )}
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}

export default Diagnostic

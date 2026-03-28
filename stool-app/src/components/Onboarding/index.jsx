import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { COUNTRIES } from '../../data/countries.js'
import { CURRICULUM_OPTS, HOUSING_OPTS, FLIGHTS_OPTS, TAX_OPTS } from '../../data/options.js'
import { CTRY_DATA } from '../../data/geo.js'
import { HOF } from '../../data/hofstede.js'

const COUNTRY_OPTS = COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)

function StoolSVG({ width = 110, height = 116 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 80 84" style={{ display: 'block', margin: '0 auto' }}>
      <ellipse id="spl-shadow" className="spl-a" style={{ '--dd': '1380ms', '--sd': '400ms' }}
        cx="40" cy="81" rx="24" ry="2.5" fill="#1a1917" opacity="0.07" />
      <line id="spl-l1" className="spl-a" style={{ '--dd': '480ms', '--sd': '550ms' }}
        x1="19" y1="22" x2="7" y2="74" stroke="#BA7517" strokeWidth="7" strokeLinecap="round" />
      <line id="spl-l2" className="spl-a" style={{ '--dd': '900ms', '--sd': '550ms' }}
        x1="40" y1="24" x2="40" y2="76" stroke="#534AB7" strokeWidth="7" strokeLinecap="round" />
      <line id="spl-l3" className="spl-a" style={{ '--dd': '1280ms', '--sd': '550ms' }}
        x1="61" y1="22" x2="73" y2="74" stroke="#1D9E75" strokeWidth="7" strokeLinecap="round" />
      <circle id="spl-f1" className="spl-a" style={{ '--dd': '480ms', '--sd': '550ms' }}
        cx="7" cy="74" r="5" fill="#BA7517" />
      <circle id="spl-f2" className="spl-a" style={{ '--dd': '900ms', '--sd': '550ms' }}
        cx="40" cy="76" r="5" fill="#534AB7" />
      <circle id="spl-f3" className="spl-a" style={{ '--dd': '1280ms', '--sd': '550ms' }}
        cx="73" cy="74" r="5" fill="#1D9E75" />
      <rect id="spl-seat" className="spl-a" style={{ '--dd': '80ms', '--sd': '500ms' }}
        x="7" y="13" width="66" height="17" rx="6" fill="#1a1917" />
      <rect id="spl-sheen" className="spl-a" style={{ '--dd': '80ms', '--sd': '500ms' }}
        x="11" y="14" width="58" height="3" rx="2" fill="#fff" opacity="0.07" />
    </svg>
  )
}

function Splash({ onNext, onSkip, onLoadFromCloud }) {
  const [showReturn, setShowReturn] = useState(false)
  const [returnEmail, setReturnEmail] = useState('')
  const [returnState, setReturnState] = useState('idle') // 'idle' | 'loading' | 'error' | 'not-found'

  const handleLoad = async () => {
    if (!returnEmail.trim()) return
    setReturnState('loading')
    const result = await onLoadFromCloud(returnEmail.trim())
    if (result.ok) return // ProfileContext navigates away automatically
    setReturnState(result.error === 'not-found' ? 'not-found' : 'error')
    setTimeout(() => setReturnState('idle'), 4000)
  }

  return (
    <div style={{ textAlign: 'center', padding: '.5rem 0 1rem' }}>
      <StoolSVG width={90} height={96} />
      <div className="spl-a" style={{ '--dd': '1620ms', '--sd': '600ms', fontSize: 22, fontWeight: 700, color: 'var(--ink)', letterSpacing: '.04em', marginTop: '.75rem' }}>
        stool
      </div>
      <div className="spl-a" style={{ '--dd': '1900ms', '--sd': '500ms', fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.5, marginTop: '.35rem', marginBottom: '1.5rem' }}>
        The honest intelligence platform for international educators
      </div>
      <div className="spl-a" style={{ '--dd': '2100ms', '--sd': '600ms', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.625rem', marginBottom: '1.5rem' }}>
        {[
          { color: '#BA7517', bg: '#FAEEDA', textColor: '#633806', subColor: '#854F0B', label: 'School', desc: 'Leadership / culture / mission / your daily professional life' },
          { color: '#534AB7', bg: '#EEEDFE', textColor: '#26215C', subColor: '#3C3489', label: 'Place', desc: 'City / safety / family / everything outside school hours' },
          { color: '#1D9E75', bg: '#E1F5EE', textColor: '#085041', subColor: '#0F6E56', label: 'Package', desc: 'Salary / housing / flights / tax - the financial picture' },
        ].map(leg => (
          <div key={leg.label} style={{ borderTop: `3px solid ${leg.color}`, borderRadius: '0 0 8px 8px', border: `1px solid ${leg.color}33`, borderTopWidth: 3, padding: '1rem .75rem', background: leg.bg }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: leg.textColor, marginBottom: '.3rem' }}>{leg.label}</div>
            <div style={{ fontSize: 12, color: leg.subColor, lineHeight: 1.5 }}>{leg.desc}</div>
          </div>
        ))}
      </div>
      <div className="spl-a" style={{ '--dd': '2700ms', '--sd': '600ms', marginBottom: '1.25rem' }}>
        <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.875rem 1rem', marginBottom: '.625rem', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, textAlign: 'left' }}>
          <strong>You need at least 2 of 3 to be solid.</strong> One weak leg is survivable. Two weak legs is a posting you should leave. Most teachers discover this <em>after</em> they sign.
        </div>
        <div style={{ background: '#FAEEDA', borderRadius: 'var(--r)', padding: '.875rem 1rem', fontSize: 13, color: '#633806', lineHeight: 1.65, textAlign: 'left', borderLeft: '3px solid #BA7517' }}>
          <strong>The catch:</strong> recruiters lead with the package. Almost every teacher who regrets a move over-weighted the package and underestimated the school. This platform is built to correct that.
        </div>
      </div>

      {/* Returning user panel */}
      {showReturn && (
        <div className="spl-au" style={{ '--dd': '0ms', '--sd': '200ms', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '1rem', marginBottom: '1rem', textAlign: 'left' }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: '.5rem' }}>Load your saved profile</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '.625rem', lineHeight: 1.5 }}>Enter the email you used when you saved your profile.</div>
          <div style={{ display: 'flex', gap: '.5rem' }}>
            <input
              type="email"
              value={returnEmail}
              onChange={e => setReturnEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLoad()}
              placeholder="your@email.com"
              style={{ flex: 1, fontSize: 13, padding: '7px 10px', border: '1px solid var(--border)', borderRadius: 'var(--r)', outline: 'none' }}
              autoFocus
            />
            <button
              onClick={handleLoad}
              disabled={returnState === 'loading' || !returnEmail.trim()}
              style={{ fontSize: 13, fontWeight: 500, padding: '7px 14px', background: 'var(--teal)', color: 'white', border: 'none', borderRadius: 'var(--r)', cursor: returnState === 'loading' ? 'wait' : 'pointer', whiteSpace: 'nowrap', opacity: !returnEmail.trim() ? 0.5 : 1 }}
            >
              {returnState === 'loading' ? 'Loading...' : 'Load ->'}
            </button>
          </div>
          {returnState === 'not-found' && (
            <div style={{ marginTop: '.5rem', fontSize: 12, color: '#D85A30' }}>No profile found for that email. Try building one now.</div>
          )}
          {returnState === 'error' && (
            <div style={{ marginTop: '.5rem', fontSize: 12, color: '#D85A30' }}>Something went wrong. Check your connection and try again.</div>
          )}
          <button onClick={() => setShowReturn(false)} style={{ marginTop: '.625rem', fontSize: 11, color: 'var(--ink-4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            {'<-'} Cancel
          </button>
        </div>
      )}

      <button className="spl-au btn btn-primary" style={{ '--dd': '3200ms', '--sd': '500ms', width: '100%', fontSize: 15, padding: 14, marginTop: '.5rem' }} onClick={onNext}>
        Build my profile {'->'}
      </button>

      <div className="spl-au" style={{ '--dd': '3500ms', '--sd': '500ms', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '.875rem' }}>
        {!showReturn && (
          <button onClick={() => setShowReturn(true)} style={{ fontSize: 12, color: 'var(--teal-dark)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textDecorationColor: 'var(--teal)40', padding: 0 }}>
            Returning? Load my profile
          </button>
        )}
        <button onClick={onSkip} style={{ fontSize: 12, color: 'var(--ink-4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          Browse first {'->'}
        </button>
      </div>
    </div>
  )
}

// -- Personalised weight engine ------------------------------------------------

function computePersonalisedWeights(form) {
  let pkg = 0, plc = 0, sch = 0
  if (form.priority === 'financial')  pkg += 0.5
  if (form.priority === 'adventure')  plc += 0.5
  if (form.priority === 'growth')     sch += 0.5
  if (form.priority === 'balance')    sch -= 0.25
  if (form.friction === 'leadership') sch -= 0.5
  if (form.friction === 'workload')   sch -= 0.25
  return { pkg, plc, sch }
}

// -- Personalised match notes --------------------------------------------------

function generateMatchNotes(form, preds) {
  if (!form.dc) return []
  const dest  = CTRY_DATA[form.dc]
  const hDest = HOF[form.dc]
  const notes = []

  if (form.life === 'children' && dest) {
    notes.push(dest.expat < 60
      ? { leg: 'place', type: 'warn', text: `Expat family networks in ${form.dc} are limited (expat score: ${dest.expat}). Dependent schooling and childcare need direct investigation before signing.` }
      : { leg: 'place', type: 'good', text: `${form.dc} has a strong expat community - generally positive for families, though dependent schooling should still be verified school by school.` })
  }
  if (form.life === 'partner_career')
    notes.push({ leg: 'place', type: 'flag', text: `Partner work rights at ${form.dc} are not yet in our data - this is a known gap. Verify visa and employment rules directly before committing.` })

  if (form.priority === 'balance' && hDest)
    notes.push(hDest[2] > 65
      ? { leg: 'school', type: 'warn', text: `${form.dc} has a high masculinity score (${hDest[2]}) - competitive, results-driven workplaces are the norm. Workload may exceed expectations.` }
      : { leg: 'school', type: 'good', text: `Cultural data for ${form.dc} suggests a more balanced work culture (MAS ${hDest[2]}), which aligns with your priority.` })

  if (form.priority === 'financial' && dest && form.savings === '20k+' && dest.medSal < 5500)
    notes.push({ leg: 'package', type: 'warn', text: `Median teacher salary at ${form.dc} is ~$${dest.medSal.toLocaleString()}/mo. Hitting a $20k+ annual savings target will require careful household planning.` })

  if (form.friction === 'leadership' && hDest)
    notes.push(hDest[0] > 70
      ? { leg: 'school', type: 'warn', text: `${form.dc} has high power distance (PDI ${hDest[0]}) - top-down, hierarchical leadership is the cultural norm. Given your history with leadership problems, investigate carefully.` }
      : { leg: 'school', type: 'good', text: `${form.dc}'s relatively low power distance (PDI ${hDest[0]}) suggests more collaborative leadership cultures - a good signal given what you're protecting against.` })

  if (form.friction === 'workload' && hDest && hDest[2] > 65)
    notes.push({ leg: 'school', type: 'warn', text: `High masculinity score at ${form.dc} (MAS ${hDest[2]}) suggests demanding work environments are common. Given your workload history, investigate before signing.` })

  if (form.friction === 'isolation' && dest && dest.expat < 55)
    notes.push({ leg: 'place', type: 'warn', text: `Expat social scene at ${form.dc} is limited (${dest.expat}/100). Given isolation was a past problem, investigate social life before committing.` })

  if (form.exit === 'no' && preds.schPred != null && preds.schPred < 5)
    notes.push({ leg: 'school', type: 'warn', text: `You've said you can't afford to walk away mid-contract - but our school prediction for ${form.dc} is below 5. Exit terms and notice period policies need careful review.` })

  return notes
}

// -- Prediction engine (shared with My Move tab) -------------------------------

function computePredictions(form) {
  const dest  = CTRY_DATA[form.dc]
  const hDest = HOF[form.dc]
  const hHome = HOF[form.home]
  const yrs   = form.yrs
  const yrsBuffer = yrs === '15+ years' ? 1 : yrs === '8-15 years' ? 0.5 : yrs === '4-7 years' ? 0.25 : 0
  const adj   = computePersonalisedWeights(form)

  let pkgPred = null, plcPred = null, schPred = null

  if (dest) {
    const salScore = dest.medSal < 3000 ? 4 : dest.medSal < 4500 ? 5 : dest.medSal < 6000 ? 6 : dest.medSal < 8000 ? 7 : 8
    const savingsPenalty = (form.savings === '20k+' && dest.medSal < 5000) ? -1
                         : (form.savings === '10-20k' && dest.medSal < 3500) ? -0.5 : 0
    pkgPred = Math.min(10, Math.max(1, Math.round(
      salScore
      + (dest.housingRate > 70 ? 1.5 : dest.housingRate > 50 ? 0.8 : 0)
      + (dest.taxFree ? 1.5 : 0)
      + (dest.flightRate > 75 ? 0.5 : 0)
      + savingsPenalty + adj.pkg
    )))
    const idvGap      = hHome && hDest ? Math.abs(hHome[1] - hDest[1]) : 0
    const expatPenalty = (form.life === 'children' && dest.expat < 60) ? -1.5
                       : (form.life === 'partner_career' && dest.expat < 55) ? -0.75 : 0
    plcPred = Math.min(10, Math.max(1, Math.round(
      ((dest.ql / 20) + (dest.safety / 25) + (dest.expat / 25)) / 3 * 10
      + (idvGap > 50 ? -1 : idvGap > 30 ? -0.5 : 0)
      + expatPenalty + adj.plc
    )))
  }
  if (dest && hDest) {
    const pdiS         = hDest[0] > 80 ? 3 : hDest[0] > 60 ? 4 : hDest[0] > 40 ? 5 : 6
    const masS         = hDest[2] > 80 ? 3 : hDest[2] > 60 ? 4 : hDest[2] > 40 ? 5 : 6
    const uaiS         = hDest[3] > 80 ? 4 : hDest[3] > 60 ? 5 : hDest[3] > 40 ? 5 : 6
    const frictionAdj  = (form.friction === 'leadership' && hDest[0] > 70) ? -1
                       : (form.friction === 'workload'   && hDest[2] > 65) ? -0.5 : 0
    schPred = Math.min(9, Math.max(1, Math.round(
      (pdiS + masS + uaiS) / 3 + yrsBuffer + frictionAdj + adj.sch
    )))
  }

  return { pkgPred, plcPred, schPred }
}

// -- Comparison leg: slider (current) + predicted score side by side -----------

function ComparisonLeg({ label, color, bg, curVal, onChange, pred, dc, description, predNote }) {
  const hasPred = pred != null && dc
  const delta   = hasPred ? pred - curVal : null
  const arrow   = delta == null ? null : delta > 1 ? '^' : delta < -1 ? 'v' : '='
  const arrowCol = delta == null ? 'var(--ink-4)' : delta > 1 ? '#1D9E75' : delta < -1 ? '#D85A30' : '#534AB7'

  return (
    <div style={{ border: `1px solid ${color}33`, borderTop: `3px solid ${color}`, borderRadius: '0 0 10px 10px', padding: '1rem 1.25rem', background: bg, marginBottom: '.75rem' }}>
      <div style={{ fontSize: 11, fontWeight: 600, color, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.625rem' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Slider - current posting */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Your current rating</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 300, color }}>{curVal}</span>
          </div>
          <input type="range" min={1} max={10} step={1} value={curVal}
            onChange={e => onChange(Number(e.target.value))}
            style={{ width: '100%', accentColor: color }} />
          <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 3, lineHeight: 1.4 }}>{description}</div>
        </div>

        {/* Arrow + predicted score */}
        {hasPred && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 72 }}>
            <div style={{ fontSize: 26, color: arrowCol, lineHeight: 1 }}>{arrow}</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 300, color, lineHeight: 1.1 }}>{pred}</div>
            <div style={{ fontSize: 10, color: 'var(--ink-4)', textAlign: 'center', marginTop: 2 }}>predicted<br />at {dc}</div>
          </div>
        )}
      </div>

      {/* Gap callout */}
      {hasPred && delta != null && Math.abs(delta) > 1 && (
        <div style={{ marginTop: '.625rem', fontSize: 12, color: delta > 0 ? '#085041' : '#7A2A20', background: delta > 0 ? '#E1F5EE' : '#FAECE7', borderRadius: 6, padding: '5px 10px', lineHeight: 1.45 }}>
          {predNote || (delta > 0
            ? `Conditions at ${dc} suggest an improvement here.`
            : `This leg may be weaker at ${dc} - investigate before committing.`)}
        </div>
      )}
    </div>
  )
}

// -- Mini school diagnostic (5 targeted questions - auto-scores the slider) ---

const SCHOOL_DIAG_QS = [
  { id: 'sd1', text: "In staff meetings, how much do you feel your professional voice is heard by leadership?",
    opts: ["Almost never - decisions feel top-down", "Sometimes - when I've built relationships", "Usually - the culture is reasonably open", "Yes - leadership is genuinely collaborative"] },
  { id: 'sd2', text: "How does your workload compare to what you expected before this post?",
    opts: ["Much heavier - it's unsustainable", "Heavier than expected but manageable", "About what I expected", "Reasonable - the culture supports balance"] },
  { id: 'sd3', text: "How transparent is your school about decisions that affect your work?",
    opts: ["Opaque - I often find out last", "Selective - I get information informally", "Mostly transparent", "Very transparent - I'm included in decisions"] },
  { id: 'sd4', text: "How often do cultural differences create genuine friction in your classroom?",
    opts: ["Daily - it's exhausting", "Several times a week", "Occasionally - I'm mostly adapted", "Rarely - I've found my footing here"] },
  { id: 'sd5', text: "When you imagine staying in your current post for another two years, how do you feel?",
    opts: ["Dread - I need to leave", "Uncertain - things would need to change", "Cautiously okay - I can make it work", "Good - I'm settled and growing here"] },
]

// Maps answer index (0=worst, 3=best) to a 1-10 school score
const SCORE_MAP = [2, 4, 7, 9]

function computeSchoolDiagScore(answers) {
  const vals = Object.values(answers).filter(v => v !== undefined)
  if (!vals.length) return null
  return Math.round(vals.reduce((sum, v) => sum + SCORE_MAP[v], 0) / vals.length)
}

function diagInterpretation(answers) {
  const structuralQs = ['sd1', 'sd2', 'sd3'] // leadership, workload, transparency
  const adaptQs      = ['sd4', 'sd5']         // cultural friction, future feeling
  const structBad = structuralQs.filter(id => answers[id] !== undefined && answers[id] <= 1).length
  const adaptBad  = adaptQs.filter(id => answers[id] !== undefined && answers[id] <= 1).length
  if (structBad >= 2) return { label: 'Structural friction', color: '#D85A30', note: 'Leadership and workload are the main signals - these won\'t improve with time.' }
  if (adaptBad >= 2)  return { label: 'Adaptation friction', color: '#534AB7', note: 'This looks more like cultural adjustment - it typically improves with time.' }
  return { label: 'Mixed picture', color: '#BA7517', note: 'Multiple factors at play - use the Diagnostic tab for a fuller analysis.' }
}

function MiniSchoolDiagnostic({ onScore, currentScore }) {
  const [open,    setOpen]    = useState(false)
  const [answers, setAnswers] = useState({})
  const [applied, setApplied] = useState(false)

  const answered = Object.keys(answers).length
  const liveScore = answered >= 3 ? computeSchoolDiagScore(answers) : null
  const interp    = answered === 5 ? diagInterpretation(answers) : null

  const apply = () => {
    const score = computeSchoolDiagScore(answers)
    if (score != null) { onScore(score); setApplied(true) }
  }

  const reset = () => { setAnswers({}); setApplied(false) }

  if (!open) {
    return (
      <div style={{ marginTop: '-.25rem', marginBottom: '.875rem', textAlign: 'center' }}>
        <button
          onClick={() => setOpen(true)}
          style={{ fontSize: 11.5, color: 'var(--teal-dark)', background: '#E1F5EE', border: '1px solid var(--teal)40', borderRadius: 20, padding: '5px 14px', cursor: 'pointer', fontWeight: 500 }}
        >
          Not sure? Answer 5 questions for a real score {'->'}
        </button>
      </div>
    )
  }

  return (
    <div style={{ background: 'white', border: '1px solid #BA751733', borderRadius: 'var(--r)', padding: '1rem 1.125rem', marginTop: '-.25rem', marginBottom: '.875rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
        <div>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em' }}>School diagnostic</span>
          <span style={{ fontSize: 11, color: 'var(--ink-4)', marginLeft: '.5rem' }}>{answered}/5 answered</span>
        </div>
        {liveScore != null && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
            <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>score so far:</span>
            <span style={{ fontSize: '1.4rem', fontWeight: 300, color: '#BA7517', lineHeight: 1 }}>{liveScore}</span>
          </div>
        )}
      </div>

      {SCHOOL_DIAG_QS.map((q, qi) => (
        <div key={q.id} style={{ marginBottom: '.75rem' }}>
          <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.4rem', lineHeight: 1.45 }}>
            <span style={{ color: 'var(--ink-4)', marginRight: '.3rem' }}>{qi + 1}.</span>{q.text}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
            {q.opts.map((o, oi) => (
              <button
                key={oi}
                onClick={() => { setAnswers(a => ({ ...a, [q.id]: oi })); setApplied(false) }}
                style={{
                  fontSize: 11.5, textAlign: 'left', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', lineHeight: 1.4,
                  background: answers[q.id] === oi ? '#FAEEDA' : 'var(--surface-2)',
                  border: answers[q.id] === oi ? '1.5px solid #BA7517' : '1px solid var(--border)',
                  color: answers[q.id] === oi ? '#633806' : 'var(--ink-2)',
                  fontWeight: answers[q.id] === oi ? 500 : 400,
                }}
              >{o}</button>
            ))}
          </div>
        </div>
      ))}

      {interp && (
        <div style={{ fontSize: 12, padding: '8px 12px', borderRadius: 6, background: '#FDF6EC', border: `1px solid ${interp.color}33`, color: interp.color, marginBottom: '.75rem', lineHeight: 1.5 }}>
          <strong>{interp.label}.</strong> {interp.note}
        </div>
      )}

      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {answered >= 3 && !applied && (
          <button onClick={apply} style={{ fontSize: 12.5, fontWeight: 500, color: 'white', background: '#BA7517', border: 'none', borderRadius: 'var(--r)', padding: '7px 14px', cursor: 'pointer' }}>
            Use this score ({liveScore}) {'->'}
          </button>
        )}
        {applied && (
          <span style={{ fontSize: 12, color: 'var(--teal-dark)', background: '#E1F5EE', borderRadius: 'var(--r)', padding: '6px 12px', fontWeight: 500 }}>
            School slider updated to {currentScore}
          </span>
        )}
        <button onClick={() => { reset(); setOpen(false) }} style={{ fontSize: 12, color: 'var(--ink-4)', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}>
          {applied ? 'Close' : 'Skip diagnostic'}
        </button>
      </div>
    </div>
  )
}

// -- Steps config -------------------------------------------------------------

const STEPS = [
  { title: "Where are you from?", sub: "Your home culture is the baseline - understanding what you're adapting from shapes everything else on this platform." },
  { title: "Your current situation", sub: "Where are you right now? This anchors your cultural, financial, and professional baseline." },
  { title: "A bit more about you", sub: "Five quick questions. These personalise your predictions and power the matching engine." },
  { title: "Considering a move?", sub: "Tell us where you're thinking of going and we'll predict your three-legged stool score at your destination." },
  { title: "How does your current stool feel?", sub: "Rate your current posting honestly - we'll show you what we predict at your destination side by side, in real time." },
  { title: "Save your profile?", sub: "Enter your email and we'll save your profile so you can load it from any device. No password needed - your email is your key." },
]

export default function Onboarding() {
  const { launchDashboard, skipOnboarding, loadFromCloud, saveToCloud } = useProfile()
  const [step, setStep] = useState(0)
  const [saveEmail, setSaveEmail] = useState('')
  const [saveState, setSaveState] = useState('idle')
  const [form, setForm] = useState({
    name: '', home: '', yrs: '', curr: '',
    cc: '', city: '', school: '', sal: '', hous: '', flt: '', tax: '',
    dc: '', dcity: '',
    sch: 5, plc: 5, pkg: 5,
    life: '', savings: '', priority: '', friction: '', exit: '',
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const finalProfile = { ...form, sal: parseFloat(form.sal) || 0 }

  const advance = () => {
    if (step === 0) { setStep(1); return }
    if (step < 6) { setStep(step + 1); return }
  }

  const handleSkipSave = () => {
    launchDashboard(finalProfile)
  }

  const handleSaveAndContinue = async () => {
    if (!saveEmail.trim() || saveState === 'saving') return
    setSaveState('saving')
    let launched = false
    const fallback = setTimeout(() => {
      launched = true
      launchDashboard(finalProfile)
    }, 1500)

    try {
      const result = await saveToCloud(saveEmail.trim(), finalProfile)
      if (result?.ok && !launched) {
          clearTimeout(fallback)
          launched = true
          setSaveState('saved')
          launchDashboard(finalProfile)
      } else if (!result?.ok) {
        setSaveState('error')
      }
    } catch {
      setSaveState('error')
    }
  }

  const dots = Array.from({ length: 7 }, (_, i) => (
    <div key={i} className={`ob-dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
  ))

  const preds = step === 5 ? computePredictions(form) : {}
  const isVeteran = form.yrs === '15+ years' || form.yrs === '8-15 years'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '3rem 1.5rem 4rem', background: 'var(--surface)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
        {step > 0 && <StoolSVG width={72} height={76} />}
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--teal-dark)', letterSpacing: '-.02em', lineHeight: 1, marginBottom: '.35rem', marginTop: step > 0 ? '.6rem' : 0 }}>stool</div>
        <div style={{ fontSize: 11, color: 'var(--ink-4)', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '.35rem' }}>school / place / package</div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>The honest intelligence platform for international educators</div>
      </div>

      <div className="ob-card fu">
        <div className="ob-dots">{dots}</div>

        {step === 0 && <Splash onNext={() => setStep(1)} onSkip={skipOnboarding} onLoadFromCloud={loadFromCloud} />}

        {step > 0 && (
          <>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>{STEPS[step - 1].title}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.75rem', lineHeight: 1.55 }}>{STEPS[step - 1].sub}</div>

            {step === 1 && (
              <>
                <div className="frow">
                  <div className="fg">
                    <label>First name (optional)</label>
                    <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Mark" />
                  </div>
                  <div className="fg">
                    <label>Home country</label>
                    <select value={form.home} onChange={e => set('home', e.target.value)}>
                      <option value="">Select</option>{COUNTRY_OPTS}
                    </select>
                  </div>
                </div>
                <div className="frow">
                  <div className="fg">
                    <label>Years teaching internationally</label>
                    <select value={form.yrs} onChange={e => set('yrs', e.target.value)}>
                      <option value="">Select</option>
                      {['Just starting','1-3 years','4-7 years','8-15 years','15+ years'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="fg">
                    <label>Primary curriculum</label>
                    <select value={form.curr} onChange={e => set('curr', e.target.value)}>
                      <option value="">Select</option>
                      {CURRICULUM_OPTS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                {form.yrs === '15+ years' && (
                  <div style={{ background: '#EEEDFE', border: '1px solid #534AB733', borderLeft: '3px solid #534AB7', borderRadius: '0 var(--r) var(--r) 0', padding: '.75rem 1rem', fontSize: 12.5, color: '#26215C', lineHeight: 1.6, marginTop: '.25rem' }}>
                    <strong>15+ years abroad.</strong> Your home country is a cultural starting point, not your current frame of reference. The platform treats your accumulated international experience as your real baseline - your teaching environment scores and classroom guide will reflect this.
                  </div>
                )}
                {form.yrs === '8-15 years' && (
                  <div style={{ background: '#F3F2FC', border: '1px solid #534AB720', borderLeft: '3px solid #534AB7', borderRadius: '0 var(--r) var(--r) 0', padding: '.75rem 1rem', fontSize: 12.5, color: '#3C3489', lineHeight: 1.6, marginTop: '.25rem' }}>
                    <strong>8-15 years abroad.</strong> Your home country is still a useful cultural baseline, but your experience has shifted your adaptability. The platform adjusts your teaching environment score to reflect this.
                  </div>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <div className="frow">
                  <div className="fg">
                    <label>Current country</label>
                    <select value={form.cc} onChange={e => set('cc', e.target.value)}>
                      <option value="">Select</option>{COUNTRY_OPTS}
                    </select>
                  </div>
                  <div className="fg">
                    <label>Current city</label>
                    <input value={form.city} onChange={e => set('city', e.target.value)} placeholder="e.g. Bangkok" />
                  </div>
                </div>
                <div className="frow">
                  <div className="fg" style={{ gridColumn: '1 / -1' }}>
                    <label>Current school name <span style={{ fontWeight: 400, color: 'var(--ink-4)' }}>(optional)</span></label>
                    <input value={form.school} onChange={e => set('school', e.target.value)} placeholder="e.g. Bangkok Patana School" />
                  </div>
                </div>
                <div className="frow">
                  <div className="fg">
                    <label>Monthly salary (USD equiv.)</label>
                    <input type="number" value={form.sal} onChange={e => set('sal', e.target.value)} placeholder="e.g. 4500" min={0} />
                  </div>
                  <div className="fg">
                    <label>Housing</label>
                    <select value={form.hous} onChange={e => set('hous', e.target.value)}>
                      <option value="">Select</option>
                      {HOUSING_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="frow">
                  <div className="fg">
                    <label>Flights allowance</label>
                    <select value={form.flt} onChange={e => set('flt', e.target.value)}>
                      <option value="">Select</option>
                      {FLIGHTS_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                  <div className="fg">
                    <label>Tax status</label>
                    <select value={form.tax} onChange={e => set('tax', e.target.value)}>
                      <option value="">Select</option>
                      {TAX_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                {/* Q1: Life situation */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.5rem', lineHeight: 1.45 }}>Who's making this move with you?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[
                      { val: 'single',         label: 'Just me - solo move' },
                      { val: 'partner',        label: 'Partner, no career constraints' },
                      { val: 'partner_career', label: 'Partner with career needs' },
                      { val: 'children',       label: 'We have children' },
                    ].map(o => (
                      <button key={o.val} onClick={() => set('life', o.val)} style={{
                        fontSize: 12.5, textAlign: 'left', padding: '8px 11px', borderRadius: 6, cursor: 'pointer', lineHeight: 1.4,
                        background: form.life === o.val ? '#EEEDFE' : 'var(--surface-2)',
                        border: form.life === o.val ? '1.5px solid #534AB7' : '1px solid var(--border)',
                        color: form.life === o.val ? '#26215C' : 'var(--ink-2)',
                        fontWeight: form.life === o.val ? 500 : 400,
                      }}>{o.label}</button>
                    ))}
                  </div>
                </div>

                {/* Q2: Savings target */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.25rem', lineHeight: 1.45 }}>What's your real savings target per year?</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: '.5rem' }}>After rent, tax, flights, and life - what do you actually need to put away?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[
                      { val: '<5k',    label: 'Under $5k' },
                      { val: '5-10k',  label: '$5-10k' },
                      { val: '10-20k', label: '$10-20k' },
                      { val: '20k+',   label: '$20k+' },
                    ].map(o => (
                      <button key={o.val} onClick={() => set('savings', o.val)} style={{
                        fontSize: 12.5, textAlign: 'left', padding: '8px 11px', borderRadius: 6, cursor: 'pointer',
                        background: form.savings === o.val ? '#E1F5EE' : 'var(--surface-2)',
                        border: form.savings === o.val ? '1.5px solid #1D9E75' : '1px solid var(--border)',
                        color: form.savings === o.val ? '#085041' : 'var(--ink-2)',
                        fontWeight: form.savings === o.val ? 500 : 400,
                      }}>{o.label}</button>
                    ))}
                  </div>
                </div>

                {/* Q3: What matters most */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.5rem', lineHeight: 1.45 }}>What matters most to you right now?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[
                      { val: 'balance',   label: 'Work-life balance' },
                      { val: 'growth',    label: 'Career growth' },
                      { val: 'adventure', label: 'Adventure & lifestyle' },
                      { val: 'financial', label: 'Financial security' },
                    ].map(o => (
                      <button key={o.val} onClick={() => set('priority', o.val)} style={{
                        fontSize: 12.5, textAlign: 'left', padding: '8px 11px', borderRadius: 6, cursor: 'pointer',
                        background: form.priority === o.val ? '#EEEDFE' : 'var(--surface-2)',
                        border: form.priority === o.val ? '1.5px solid #534AB7' : '1px solid var(--border)',
                        color: form.priority === o.val ? '#26215C' : 'var(--ink-2)',
                        fontWeight: form.priority === o.val ? 500 : 400,
                      }}>{o.label}</button>
                    ))}
                  </div>
                </div>

                {/* Q4: Biggest risk concern */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.25rem', lineHeight: 1.45 }}>What's your biggest risk concern?</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: '.5rem' }}>What would make this posting a mistake?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[
                      { val: 'leadership', label: 'Bad leadership & culture' },
                      { val: 'workload',   label: 'Workload & burnout' },
                      { val: 'isolation',  label: 'Isolation & no social life' },
                      { val: 'financial',  label: 'Financial reality vs. promise' },
                    ].map(o => (
                      <button key={o.val} onClick={() => set('friction', o.val)} style={{
                        fontSize: 12.5, textAlign: 'left', padding: '8px 11px', borderRadius: 6, cursor: 'pointer', lineHeight: 1.4,
                        background: form.friction === o.val ? '#FAECE7' : 'var(--surface-2)',
                        border: form.friction === o.val ? '1.5px solid #D85A30' : '1px solid var(--border)',
                        color: form.friction === o.val ? '#7A2A20' : 'var(--ink-2)',
                        fontWeight: form.friction === o.val ? 500 : 400,
                      }}>{o.label}</button>
                    ))}
                  </div>
                </div>

                {/* Q5: Exit flexibility */}
                <div style={{ marginBottom: '.5rem' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.5rem', lineHeight: 1.45 }}>If this posting turned bad, could you walk away mid-contract?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 6 }}>
                    {[
                      { val: 'easy', label: 'Yes - I could leave if I needed to' },
                      { val: 'hard', label: 'It would be hard but possible' },
                      { val: 'no',   label: 'No - I need this posting to work out' },
                    ].map(o => (
                      <button key={o.val} onClick={() => set('exit', o.val)} style={{
                        fontSize: 12.5, textAlign: 'left', padding: '8px 11px', borderRadius: 6, cursor: 'pointer',
                        background: form.exit === o.val ? '#EEEDFE' : 'var(--surface-2)',
                        border: form.exit === o.val ? '1.5px solid #534AB7' : '1px solid var(--border)',
                        color: form.exit === o.val ? '#26215C' : 'var(--ink-2)',
                        fontWeight: form.exit === o.val ? 500 : 400,
                      }}>{o.label}</button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="frow">
                  <div className="fg">
                    <label>Destination country</label>
                    <select value={form.dc} onChange={e => set('dc', e.target.value)}>
                      <option value="">No destination yet</option>{COUNTRY_OPTS}
                    </select>
                  </div>
                  <div className="fg">
                    <label>Destination city</label>
                    <input value={form.dcity} onChange={e => set('dcity', e.target.value)} placeholder="e.g. Dubai" />
                  </div>
                </div>
                <div className="ibox">The <strong>three-legged stool</strong>: school + place + package. You need at least 2 of 3. Our destination prediction uses real salary records, cultural research data, and quality-of-life indices to forecast whether your stool improves at your destination.</div>
              </>
            )}

            {step === 5 && (
              <>
                {form.dc && (
                  <div style={{ fontSize: 12, background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.625rem .875rem', marginBottom: '1rem', color: 'var(--ink-3)', lineHeight: 1.5 }}>
                    Right side shows our prediction for <strong>{form.dcity ? `${form.dcity}, ` : ''}{form.dc}</strong>. Drag each slider to rate your <em>current</em> posting - the comparison updates live.
                  </div>
                )}
                <ComparisonLeg
                  label="School"
                  color="#BA7517" bg="#FAEEDA"
                  curVal={form.sch} onChange={v => set('sch', v)}
                  pred={preds.schPred} dc={form.dc}
                  description="Leadership, colleague culture, workload, professional development, mission"
                  predNote={isVeteran && preds.schPred && preds.schPred - form.sch > 0
                    ? `Your experience adapting internationally reduces the adjustment cost here - that's reflected in the prediction.`
                    : null}
                />
                <MiniSchoolDiagnostic
                  onScore={score => set('sch', score)}
                  currentScore={form.sch}
                />
                <ComparisonLeg
                  label="Place"
                  color="#534AB7" bg="#EEEDFE"
                  curVal={form.plc} onChange={v => set('plc', v)}
                  pred={preds.plcPred} dc={form.dc}
                  description="City quality, safety, family life, lifestyle, adventure"
                />
                <ComparisonLeg
                  label="Package"
                  color="#1D9E75" bg="#E1F5EE"
                  curVal={form.pkg} onChange={v => set('pkg', v)}
                  pred={preds.pkgPred} dc={form.dc}
                  description="Salary, housing, flights, tax, savings potential"
                />

                {/* Personalised match notes */}
                {form.dc && (() => {
                  const notes = generateMatchNotes(form, preds)
                  if (!notes || notes.length === 0) return null
                  const legColor = { school: '#BA7517', place: '#534AB7', package: '#1D9E75' }
                  const legLabel = { school: 'School signal', place: 'Place signal', package: 'Package signal' }
                  return (
                    <div style={{ marginTop: '.75rem', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '1rem 1.125rem' }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.5rem' }}>Personalised signals for you</div>
                      {notes.map((n, i) => (
                        <div key={i} style={{
                          fontSize: 12, padding: '9px 12px', borderRadius: 8, marginBottom: 8, lineHeight: 1.55,
                          background: n.type === 'warn' ? '#FAECE7' : n.type === 'good' ? '#E1F5EE' : '#FDF6EC',
                          color: n.type === 'warn' ? '#7A2A20' : n.type === 'good' ? '#085041' : '#633806',
                          borderLeft: `3px solid ${n.type === 'warn' ? '#D85A30' : n.type === 'good' ? '#1D9E75' : '#BA7517'}`,
                        }}>
                          <div style={{ marginBottom: 4 }}>
                            <span style={{
                              display: 'inline-block',
                              fontSize: 10,
                              fontWeight: 600,
                              letterSpacing: '.06em',
                              textTransform: 'uppercase',
                              color: legColor[n.leg],
                              background: `${legColor[n.leg]}15`,
                              borderRadius: 999,
                              padding: '3px 8px',
                            }}>
                              {legLabel[n.leg]}
                            </span>
                          </div>
                          <div>{n.text}</div>
                        </div>
                      ))}
                    </div>
                  )
                })()}
              </>
            )}

            {step === 6 && (
              <>
                <div style={{ maxWidth: 440 }}>
                  <input
                    type="email"
                    value={saveEmail}
                    onChange={e => { setSaveEmail(e.target.value); if (saveState === 'error') setSaveState('idle') }}
                    onKeyDown={e => e.key === 'Enter' && saveEmail.trim() && handleSaveAndContinue()}
                    placeholder="your@email.com"
                    autoFocus
                    style={{ width: '100%', fontSize: 14, padding: '10px 12px', border: '1px solid var(--border)', borderRadius: 'var(--r)', outline: 'none', boxSizing: 'border-box', marginBottom: '.875rem' }}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleSaveAndContinue}
                    disabled={!saveEmail.trim() || saveState === 'saving'}
                    style={{ width: '100%' }}
                  >
                    {saveState === 'saving' ? 'Saving...' : 'Save and continue'}{' ->'}
                  </button>
                  <button
                    onClick={handleSkipSave}
                    style={{ marginTop: '.75rem', fontSize: 12, color: 'var(--ink-4)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    Skip for now{' ->'}
                  </button>
                  {saveState === 'error' && (
                    <div style={{ marginTop: '.75rem', fontSize: 12, color: '#D85A30', lineHeight: 1.5 }}>
                      We could not confirm the save right away, so your dashboard will still open. You can save again from the profile bar.
                    </div>
                  )}
                </div>
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.75rem', gap: 12 }}>
              {step > 1
                ? <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>{"<-"} Back</button>
                : <span />}
              {step < 6 ? (
                <button className="btn btn-primary" onClick={advance}>
                  Continue{' ->'}
                </button>
              ) : (
                <span />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}



import { useState, useMemo } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { COUNTRIES } from '../../data/countries.js'
import { CURRICULUM_OPTS, HOUSING_OPTS, FLIGHTS_OPTS, TAX_OPTS } from '../../data/options.js'
import { CTRY_DATA } from '../../data/geo.js'
import { HOF } from '../../data/hofstede.js'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import SchoolAutocomplete from '../SchoolAutocomplete.jsx'

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

      {/* Purpose — answer "what is this?" immediately */}
      <div className="spl-a" style={{ '--dd': '1900ms', '--sd': '500ms', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6, marginTop: '.5rem', marginBottom: '.35rem', maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
        Helping international teachers see the honest picture — before they sign.
      </div>
      <div className="spl-a" style={{ '--dd': '2050ms', '--sd': '400ms', fontSize: 11.5, color: 'var(--ink-4)', lineHeight: 1.5, marginBottom: '1.5rem', maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
        Whether you're weighing an offer or wondering if it's time to leave, this tool helps you think it through.
      </div>

      {/* Three legs */}
      <div className="spl-a" style={{ '--dd': '2300ms', '--sd': '600ms', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.625rem', marginBottom: '1rem' }}>
        {[
          { color: '#BA7517', bg: '#FAEEDA', textColor: '#633806', subColor: '#854F0B', label: 'School', desc: 'Leadership, culture, workload, your daily professional life' },
          { color: '#534AB7', bg: '#EEEDFE', textColor: '#26215C', subColor: '#3C3489', label: 'Place', desc: 'City, safety, family life, everything outside school hours' },
          { color: '#1D9E75', bg: '#E1F5EE', textColor: '#085041', subColor: '#0F6E56', label: 'Package', desc: 'Salary, housing, flights, tax — the financial picture' },
        ].map(leg => (
          <div key={leg.label} style={{ borderTop: `3px solid ${leg.color}`, borderRadius: '0 0 8px 8px', border: `1px solid ${leg.color}33`, borderTopWidth: 3, padding: '1rem .75rem', background: leg.bg }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: leg.textColor, marginBottom: '.3rem' }}>{leg.label}</div>
            <div style={{ fontSize: 11.5, color: leg.subColor, lineHeight: 1.5 }}>{leg.desc}</div>
          </div>
        ))}
      </div>

      {/* The rule + the catch */}
      <div className="spl-a" style={{ '--dd': '2700ms', '--sd': '600ms', marginBottom: '1rem' }}>
        <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, textAlign: 'left', padding: '0 .125rem', marginBottom: '.75rem' }}>
          <strong>You need at least 2 of 3 to be solid.</strong> One weak leg is survivable. Two weak legs is a posting you should leave. Most teachers discover this <em>after</em> they sign.
        </div>
        <div style={{ background: '#FAEEDA', borderRadius: 'var(--r)', padding: '.875rem 1rem', fontSize: 13, color: '#633806', lineHeight: 1.65, textAlign: 'left', borderLeft: '3px solid #BA7517' }}>
          <strong>The catch:</strong> recruiters lead with the package. Almost every teacher who regrets a move over-weighted the package and underestimated the school. This platform is built to correct that.
        </div>
      </div>

      {/* What you get */}
      <div className="spl-a" style={{ '--dd': '3000ms', '--sd': '500ms', background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.875rem 1rem', marginBottom: '1.25rem', textAlign: 'left' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', marginBottom: '.5rem' }}>What's inside</div>
        {[
          'A diagnosis of your current posting — school, place, and package scored honestly',
          'Real salary data from 600+ international educators to benchmark your offer',
          'A country-level forecast showing how your stool might look at a new school',
          'Cultural context for your classroom — what may feel different and why',
        ].map((item, i) => (
          <div key={i} style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55, paddingLeft: '.75rem', borderLeft: '2px solid var(--border)', marginBottom: i < 3 ? '.5rem' : 0 }}>
            {item}
          </div>
        ))}
      </div>

      {/* Built-by line */}
      <div className="spl-a" style={{ '--dd': '3200ms', '--sd': '400ms', fontSize: 11, color: 'var(--ink-4)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
        Built by a teacher, grounded in research, free to use.
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

      <button className="spl-au btn btn-primary" style={{ '--dd': '3400ms', '--sd': '500ms', width: '100%', fontSize: 15, padding: 14 }} onClick={onNext}>
        Build my profile {'->'}
      </button>

      <div className="spl-au" style={{ '--dd': '3700ms', '--sd': '500ms', display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '.875rem' }}>
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

// -- School Diagnostic Questions -----------------------------------------------

const SCHOOL_DIAG_QS = [
  { id: 'sd1', text: "In staff meetings, how much do you feel your professional voice is heard by leadership?",
    opts: ["Almost never - decisions feel top-down", "Sometimes - when I've built relationships", "Usually - the culture is reasonably open", "Yes - leadership is genuinely collaborative"] },
  { id: 'sd2', text: "How does your workload compare to what you expected before this post?",
    opts: ["Much heavier - it's unsustainable", "Heavier than expected but manageable", "About what I expected", "Reasonable - the culture supports balance"] },
  { id: 'sd3', text: "How transparent is your school about decisions that affect your work?",
    opts: ["Opaque - I often find out last", "Selective - I get information informally", "Mostly transparent", "Very transparent - I'm included in decisions"] },
  { id: 'sd4', text: "How often do cultural differences create genuine friction in your day-to-day work?",
    opts: ["Daily - it's exhausting", "Several times a week", "Occasionally - I'm mostly adapted", "Rarely - I've found my footing here"] },
  { id: 'sd5', text: "When you imagine staying in your current post for another two years, how do you feel?",
    opts: ["Dread - I need to leave", "Uncertain - things would need to change", "Cautiously okay - I can make it work", "Good - I'm settled and growing here"] },
]

// -- Place Diagnostic Questions ------------------------------------------------

const PLACE_DIAG_QS = [
  { id: 'pd1', text: "How safe do you feel in your daily life outside school?",
    opts: ["Unsafe — I restrict my movements regularly", "Cautious — there are areas and times I avoid", "Mostly safe — occasional concerns but manageable", "Very safe — I move freely without worry"] },
  { id: 'pd2', text: "How easy is it to build a social life and find community here?",
    opts: ["Very hard — I feel isolated most of the time", "Difficult — I have a small circle but it took effort", "Manageable — there's an expat scene and some local connections", "Easy — I have a strong social network here"] },
  { id: 'pd3', text: "How well does this city work for your life outside school?",
    opts: ["Poorly — daily logistics are a constant frustration", "It's okay — some things work, others are hard", "Well — I've figured out how to live comfortably", "Great — I genuinely enjoy living here"] },
  { id: 'pd4', text: "If you have a partner or family, how is this place working for them overall?",
    opts: ["Badly — it's a source of real tension", "Mixed — it works for some but not others", "They're mostly settled", "N/A or they're happy here"] },
]

// -- Package Diagnostic Questions -----------------------------------------------

const PKG_DIAG_QS = [
  { id: 'pk1', text: "What's your monthly salary in USD equivalent?",
    type: 'number', placeholder: 'e.g. 4500', field: 'sal' },
  { id: 'pk2', text: "What's your housing situation?",
    type: 'select', field: 'hous', options: HOUSING_OPTS },
  { id: 'pk3', text: "Are flights home provided?",
    type: 'select', field: 'flt', options: FLIGHTS_OPTS },
  { id: 'pk4', text: "What's the tax situation?",
    type: 'select', field: 'tax', options: TAX_OPTS },
  { id: 'pk5', text: "At the end of the year, are you actually saving what you hoped?",
    opts: ["No — I'm barely breaking even or going backwards", "Less than I hoped — lifestyle costs eat into it", "Close to target — I'm managing it", "Yes — I'm hitting or exceeding my savings goal"] },
]

// Maps answer index (0=worst, 3=best) to a 1-10 score
const SCORE_MAP = [2, 4, 7, 9]

function computeSchoolDiagScore(answers) {
  const vals = Object.values(answers).filter(v => v !== undefined)
  if (!vals.length) return null
  return Math.round(vals.reduce((sum, v) => sum + SCORE_MAP[v], 0) / vals.length)
}

function computePlaceDiagScore(answers) {
  const vals = Object.values(answers).filter(v => v !== undefined)
  if (!vals.length) return null
  // pd4 "N/A" (option index 3) should count as neutral (score 7, not 9)
  const adjusted = Object.entries(answers).map(([id, v]) => {
    if (id === 'pd4' && v === 3) return 7 // N/A treated as neutral
    return SCORE_MAP[v]
  })
  return Math.round(adjusted.reduce((s, v) => s + v, 0) / adjusted.length)
}

function computePackageDiagScore(answers, form) {
  // pk5 (savings reality) gives the base score
  const savingsScore = answers.pk5 !== undefined ? [2, 4, 7, 9][answers.pk5] : 5
  // Boost if housing provided, flights provided, or tax-free
  let bonus = 0
  if (form.hous === 'Provided') bonus += 1
  if (form.flt === 'Yes') bonus += 0.5
  if (form.tax === 'Tax-free') bonus += 1
  return Math.min(10, Math.max(1, Math.round(savingsScore + bonus * 0.5)))
}

function diagInterpretation(answers) {
  const structuralQs = ['sd1', 'sd2', 'sd3'] // leadership, workload, transparency
  const adaptQs      = ['sd4', 'sd5']         // cultural friction, future feeling
  const structBad = structuralQs.filter(id => answers[id] !== undefined && answers[id] <= 1).length
  const adaptBad  = adaptQs.filter(id => answers[id] !== undefined && answers[id] <= 1).length
  if (structBad >= 2) return { label: 'Structural friction', color: '#D85A30', note: 'Leadership and workload are the main signal - these won\'t improve with time.' }
  if (adaptBad >= 2)  return { label: 'Adaptation friction', color: '#534AB7', note: 'This looks more like cultural adjustment - it typically improves with time.' }
  return { label: 'Mixed picture', color: '#BA7517', note: 'Multiple factors at play - use the Diagnostic tab for a fuller analysis.' }
}

// -- Steps config for new flow -------------------------------------------------

const STEPS = [
  { title: "Where are you?", sub: "Your home culture and current posting — the starting point for everything." },
  { title: "How does your current stool feel?", sub: "Answer a few honest questions about each leg. We'll calculate your scores." },
  { title: "What matters to you?", sub: "Five quick questions that personalise your predictions, plus an optional destination." },
  { title: "Save your profile?", sub: "Enter your email so you can come back. No password, no spam — just your data." },
]

export default function Onboarding() {
  const { profile, launchDashboard, skipOnboarding, loadFromCloud, saveToCloud } = useProfile()
  // If there's an existing profile (user clicked "Edit Profile"), pre-fill the form
  const hasExisting = !!(profile && profile.cc)
  const [step, setStep] = useState(hasExisting ? 1 : 0)
  const [saveEmail, setSaveEmail] = useState('')
  const [saveState, setSaveState] = useState('idle')

  const [form, setForm] = useState(() => {
    if (hasExisting) {
      return {
        home: profile.home || '', yrs: profile.yrs || '',
        cc: profile.cc || '', city: profile.city || '', school: profile.school || '',
        sal: profile.sal ? String(profile.sal) : '', hous: profile.hous || '', flt: profile.flt || '', tax: profile.tax || '',
        dc: profile.dc || '', dcity: profile.dcity || '',
        sch: profile.sch ?? 5, plc: profile.plc ?? 5, pkg: profile.pkg ?? 5,
        life: profile.life || '', savings: profile.savings || '', priority: profile.priority || '', friction: profile.friction || '', exit: profile.exit || '',
      }
    }
    return {
      home: '', yrs: '',
      cc: '', city: '', school: '',
      sal: '', hous: '', flt: '', tax: '',
      dc: '', dcity: '',
      sch: 5, plc: 5, pkg: 5,
      life: '', savings: '', priority: '', friction: '', exit: '',
    }
  })

  const [schoolAnswers, setSchoolAnswers] = useState({})
  const [placeAnswers, setPlaceAnswers] = useState({})
  const [pkgAnswers, setPkgAnswers] = useState({})

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  /* Diagnostic scores — computed live so finalProfile always reflects answers */
  const schoolScore = computeSchoolDiagScore(schoolAnswers)
  const placeScore  = computePlaceDiagScore(placeAnswers)
  const pkgScore    = computePackageDiagScore(pkgAnswers, form)

  const finalProfile = {
    ...form,
    sal: parseFloat(form.sal) || 0,
    sch: schoolScore ?? form.sch,
    plc: placeScore  ?? form.plc,
    pkg: pkgScore    ?? form.pkg,
  }

  const advance = () => {
    if (step === 0) { setStep(1); return }
    if (step < 4) { setStep(step + 1); return }
  }

  const handleSkipSave = () => {
    launchDashboard(finalProfile)
  }

  const handleSaveAndContinue = async () => {
    if (!saveEmail.trim() || saveState === 'saving') return
    setSaveState('saving')

    try {
      const result = await saveToCloud(saveEmail.trim(), finalProfile)
      if (result?.ok) {
        setSaveState('saved')
        launchDashboard(finalProfile)
      } else {
        // Save failed — still launch so the user isn't stuck, but warn
        console.warn('Cloud save failed, launching with local only:', result?.error)
        setSaveState('error')
        // Launch anyway after a brief pause so user sees the error
        setTimeout(() => launchDashboard(finalProfile), 1200)
      }
    } catch (e) {
      console.error('Cloud save exception:', e)
      setSaveState('error')
      setTimeout(() => launchDashboard(finalProfile), 1200)
    }
  }

  const dots = Array.from({ length: 5 }, (_, i) => (
    <div key={i} className={`ob-dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
  ))

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '3rem 1.5rem 4rem', background: 'var(--surface)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
        {step > 0 && <StoolSVG width={56} height={60} />}
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
                    <label>Home country</label>
                    <select value={form.home} onChange={e => set('home', e.target.value)}>
                      <option value="">Select</option>{COUNTRY_OPTS}
                    </select>
                  </div>
                  <div className="fg">
                    <label>Years teaching internationally</label>
                    <select value={form.yrs} onChange={e => set('yrs', e.target.value)}>
                      <option value="">Select</option>
                      {['Just starting','1-3 years','4-7 years','8-15 years','15+ years'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
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
                    <SchoolAutocomplete
                      value={form.school}
                      onChange={v => set('school', v)}
                      onSelect={rec => {
                        if (rec.city) set('city', rec.city)
                        if (rec.country && !form.cc) set('cc', rec.country)
                      }}
                      schools={SALARY_DB_SEED}
                      country={form.cc}
                      placeholder="e.g. Bangkok Patana School"
                    />
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
                {/* School Diagnostic */}
                <div style={{ border: '1px solid #BA751733', borderTop: '3px solid #BA7517', borderRadius: '0 0 10px 10px', padding: '1rem 1.125rem', marginBottom: '.75rem', background: '#FAEEDA' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em' }}>School</div>
                    {schoolScore != null && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                        <span style={{ fontSize: 11, color: '#854F0B' }}>score:</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 300, color: '#BA7517', lineHeight: 1 }}>{schoolScore}</span>
                        <span style={{ fontSize: 11, color: '#854F0B' }}>/10</span>
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
                            onClick={() => { setSchoolAnswers(a => ({ ...a, [q.id]: oi })) }}
                            style={{
                              fontSize: 11.5, textAlign: 'left', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', lineHeight: 1.4,
                              background: schoolAnswers[q.id] === oi ? '#FAEEDA' : 'var(--surface-2)',
                              border: schoolAnswers[q.id] === oi ? '1.5px solid #BA7517' : '1px solid var(--border)',
                              color: schoolAnswers[q.id] === oi ? '#633806' : 'var(--ink-2)',
                              fontWeight: schoolAnswers[q.id] === oi ? 500 : 400,
                            }}
                          >{o}</button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Place Diagnostic */}
                <div style={{ border: '1px solid #534AB733', borderTop: '3px solid #534AB7', borderRadius: '0 0 10px 10px', padding: '1rem 1.125rem', marginBottom: '.75rem', background: '#EEEDFE' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#534AB7', textTransform: 'uppercase', letterSpacing: '.07em' }}>Place</div>
                    {placeScore != null && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                        <span style={{ fontSize: 11, color: '#3C3489' }}>score:</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 300, color: '#534AB7', lineHeight: 1 }}>{placeScore}</span>
                        <span style={{ fontSize: 11, color: '#3C3489' }}>/10</span>
                      </div>
                    )}
                  </div>
                  {PLACE_DIAG_QS.map((q, qi) => (
                    <div key={q.id} style={{ marginBottom: '.75rem' }}>
                      <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.4rem', lineHeight: 1.45 }}>
                        <span style={{ color: 'var(--ink-4)', marginRight: '.3rem' }}>{qi + 1}.</span>{q.text}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
                        {q.opts.map((o, oi) => (
                          <button
                            key={oi}
                            onClick={() => { setPlaceAnswers(a => ({ ...a, [q.id]: oi })) }}
                            style={{
                              fontSize: 11.5, textAlign: 'left', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', lineHeight: 1.4,
                              background: placeAnswers[q.id] === oi ? '#EEEDFE' : 'var(--surface-2)',
                              border: placeAnswers[q.id] === oi ? '1.5px solid #534AB7' : '1px solid var(--border)',
                              color: placeAnswers[q.id] === oi ? '#26215C' : 'var(--ink-2)',
                              fontWeight: placeAnswers[q.id] === oi ? 500 : 400,
                            }}
                          >{o}</button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Package Diagnostic */}
                <div style={{ border: '1px solid #1D9E7533', borderTop: '3px solid #1D9E75', borderRadius: '0 0 10px 10px', padding: '1rem 1.125rem', marginBottom: '.75rem', background: '#E1F5EE' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '.07em' }}>Package</div>
                    {pkgScore != null && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                        <span style={{ fontSize: 11, color: '#0F6E56' }}>score:</span>
                        <span style={{ fontSize: '1.4rem', fontWeight: 300, color: '#1D9E75', lineHeight: 1 }}>{pkgScore}</span>
                        <span style={{ fontSize: 11, color: '#0F6E56' }}>/10</span>
                      </div>
                    )}
                  </div>

                  {/* pk1: Number input */}
                  <div style={{ marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.4rem' }}>1. What's your monthly salary in USD equivalent?</div>
                    <input
                      type="number"
                      value={form.sal}
                      onChange={e => { set('sal', e.target.value); setPkgAnswers(a => ({ ...a, pk1: parseFloat(e.target.value) })) }}
                      placeholder="e.g. 4500"
                      min={0}
                      style={{ width: '100%', fontSize: 13, padding: '7px 10px', border: '1px solid var(--border)', borderRadius: 'var(--r)', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  {/* pk2: Housing select */}
                  <div style={{ marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.4rem' }}>2. What's your housing situation?</div>
                    <select
                      value={form.hous}
                      onChange={e => { set('hous', e.target.value); setPkgAnswers(a => ({ ...a, pk2: e.target.value })) }}
                      style={{ width: '100%', fontSize: 13, padding: '7px 10px', border: '1px solid var(--border)', borderRadius: 'var(--r)', outline: 'none', boxSizing: 'border-box' }}
                    >
                      <option value="">Select</option>
                      {HOUSING_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>

                  {/* pk3: Flights select */}
                  <div style={{ marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.4rem' }}>3. Are flights home provided?</div>
                    <select
                      value={form.flt}
                      onChange={e => { set('flt', e.target.value); setPkgAnswers(a => ({ ...a, pk3: e.target.value })) }}
                      style={{ width: '100%', fontSize: 13, padding: '7px 10px', border: '1px solid var(--border)', borderRadius: 'var(--r)', outline: 'none', boxSizing: 'border-box' }}
                    >
                      <option value="">Select</option>
                      {FLIGHTS_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>

                  {/* pk4: Tax select */}
                  <div style={{ marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.4rem' }}>4. What's the tax situation?</div>
                    <select
                      value={form.tax}
                      onChange={e => { set('tax', e.target.value); setPkgAnswers(a => ({ ...a, pk4: e.target.value })) }}
                      style={{ width: '100%', fontSize: 13, padding: '7px 10px', border: '1px solid var(--border)', borderRadius: 'var(--r)', outline: 'none', boxSizing: 'border-box' }}
                    >
                      <option value="">Select</option>
                      {TAX_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>

                  {/* pk5: MCQ options */}
                  <div style={{ marginBottom: '.75rem' }}>
                    <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.4rem', lineHeight: 1.45 }}>5. At the end of the year, are you actually saving what you hoped?</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
                      {['No — I\'m barely breaking even or going backwards', 'Less than I hoped — lifestyle costs eat into it', 'Close to target — I\'m managing it', 'Yes — I\'m hitting or exceeding my savings goal'].map((o, oi) => (
                        <button
                          key={oi}
                          onClick={() => { setPkgAnswers(a => ({ ...a, pk5: oi })) }}
                          style={{
                            fontSize: 11.5, textAlign: 'left', padding: '6px 10px', borderRadius: 6, cursor: 'pointer', lineHeight: 1.4,
                            background: pkgAnswers.pk5 === oi ? '#E1F5EE' : 'var(--surface-2)',
                            border: pkgAnswers.pk5 === oi ? '1.5px solid #1D9E75' : '1px solid var(--border)',
                            color: pkgAnswers.pk5 === oi ? '#085041' : 'var(--ink-2)',
                            fontWeight: pkgAnswers.pk5 === oi ? 500 : 400,
                          }}
                        >{o}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stool Summary */}
                <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '1rem', marginTop: '.5rem' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', marginBottom: '.625rem' }}>Your current stool</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.5rem', textAlign: 'center' }}>
                    {[
                      { label: 'School', score: schoolScore, color: '#BA7517' },
                      { label: 'Place', score: placeScore, color: '#534AB7' },
                      { label: 'Package', score: pkgScore, color: '#1D9E75' },
                    ].map(leg => (
                      <div key={leg.label}>
                        <div style={{ fontSize: '1.75rem', fontWeight: 300, color: leg.color, lineHeight: 1 }}>{leg.score ?? '—'}</div>
                        <div style={{ fontSize: 11, color: leg.color, fontWeight: 500, marginTop: 2 }}>{leg.label}</div>
                      </div>
                    ))}
                  </div>
                  {schoolScore && placeScore && pkgScore && (() => {
                    const solid = [schoolScore, placeScore, pkgScore].filter(s => s >= 6).length
                    return (
                      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: '.75rem', lineHeight: 1.55, textAlign: 'center' }}>
                        {solid >= 3 ? 'All three legs are solid — your stool is stable.' :
                         solid === 2 ? 'Two solid legs — your stool is sustainable, but watch the weak leg.' :
                         solid === 1 ? 'Only one solid leg — this posting has significant risk.' :
                         'No solid legs — this is a posting you should seriously reconsider.'}
                      </div>
                    )
                  })()}
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
                <div style={{ marginBottom: '1.5rem' }}>
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

                {/* Destination section */}
                <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', marginBottom: '.25rem', lineHeight: 1.45 }}>Considering a move?</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: '1rem' }}>Optional — skip this if you're just evaluating where you are now.</div>
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
                </div>
              </>
            )}

            {step === 4 && (
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
              {step < 4 ? (
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

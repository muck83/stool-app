import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DCOLS } from '../../data/hofstede.js'
import { CTRY_DATA, REGION_MAP } from '../../data/geo.js'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'

const DIM_PLAIN_GUIDE = {
  'Power Distance': {
    title: 'Hierarchy',
    intro: 'how formal school relationships may feel',
    high: 'Schools may feel more top-down. Leadership decisions are less likely to be questioned openly.',
    low: 'Schools may feel more informal. Staff and students are more likely to speak up directly.',
  },
  'Individualism': {
    title: 'Group vs self',
    intro: 'how much people prioritise the group or the individual',
    high: 'People may protect harmony more, think about the group first, and avoid standing out.',
    low: 'People may value independence more, speak more directly, and act more individually.',
  },
  'Masculinity': {
    title: 'Competition',
    intro: 'how competitive or collaborative daily life may feel',
    high: 'Results, assertiveness, and visible success may matter more.',
    low: 'Cooperation, balance, and steady relationships may matter more.',
  },
  'Uncertainty Avoidance': {
    title: 'Need for structure',
    intro: 'how much people want clarity, rules, and predictability',
    high: 'People may want clearer rules, firmer plans, and less ambiguity.',
    low: 'People may be more comfortable improvising and figuring things out as they go.',
  },
  'Long-term Orientation': {
    title: 'Future focus',
    intro: 'how much people focus on long-term payoff versus the present',
    high: 'People may think more about long-term goals, delayed payoff, and steady progress.',
    low: 'People may care more about immediate expectations, tradition, and what works now.',
  },
  Indulgence: {
    title: 'Social freedom',
    intro: 'how relaxed or restrained everyday life may feel',
    high: 'Daily life may feel more open, expressive, and leisure-friendly.',
    low: 'Daily life may feel more restrained, rule-bound, or socially controlled.',
  },
}

const MONEY = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const LIFE_LABELS = {
  single: 'Solo move',
  partner: 'Partner, flexible',
  partner_career: 'Partner with career needs',
  children: 'Moving with children',
}

const PRIORITY_LABELS = {
  balance: 'Work-life balance',
  growth: 'Career growth',
  adventure: 'Adventure and lifestyle',
  financial: 'Financial security',
}

const FRICTION_LABELS = {
  leadership: 'Bad leadership and culture',
  workload: 'Workload and burnout',
  isolation: 'Isolation and social life',
  financial: 'Financial reality vs promise',
}

const EXIT_LABELS = {
  easy: 'Could leave if needed',
  hard: 'Hard but possible to leave',
  no: 'Need this posting to work',
}

function gapLevel(gap) {
  if (gap > 30) return 'big'
  if (gap > 15) return 'noticeable'
  return 'small'
}

function gapLabel(gap) {
  if (gap > 30) return 'Very different'
  if (gap > 15) return 'Some adjustment'
  return 'Mostly familiar'
}

function gapColor(gap) {
  if (gap > 30) return 'var(--coral)'
  if (gap > 15) return 'var(--amber)'
  return 'var(--teal)'
}

function compareDirection(cur, dest, key) {
  if (Math.abs(dest - cur) < 8) return null

  const guide = DIM_PLAIN_GUIDE[key]
  if (!guide) return null
  return dest > cur ? guide.high : guide.low
}

function legMeta(diff) {
  if (diff > 1) {
    return {
      label: 'Stronger on paper',
      toneBg: '#DCF0E6',
      toneText: 'var(--teal-dark)',
      summary: 'The country-level picture looks better than what you rated in your current post.',
    }
  }
  if (diff < -1) {
    return {
      label: 'Needs more checking',
      toneBg: '#F5DFD3',
      toneText: 'var(--coral-dark)',
      summary: 'This forecast comes in below your current score, so this leg needs closer checking before you sign.',
    }
  }
  return {
    label: 'About the same',
    toneBg: '#E6F1FB',
    toneText: 'var(--blue-dark)',
    summary: 'This looks broadly similar to what you have now at country level.',
  }
}

function diffSummary(diff) {
  if (diff > 1) return `About ${Math.abs(diff)} point${Math.abs(diff) === 1 ? '' : 's'} higher than your current score.`
  if (diff < -1) return `About ${Math.abs(diff)} point${Math.abs(diff) === 1 ? '' : 's'} lower than your current score.`
  return 'Roughly in the same range as your current score.'
}

function schoolReasons(hDest, yrsBuffer, yrsValue, countryName) {
  if (!hDest) return []

  const reasons = [
    `${countryName} scores ${hDest[0] > 60 ? 'high' : hDest[0] > 40 ? 'moderate' : 'low'} on hierarchy (${hDest[0]}) and ${hDest[3] > 60 ? 'high' : hDest[3] > 40 ? 'moderate' : 'low'} on structure (${hDest[3]}), which shapes how top-down and rule-bound school systems may feel.`,
    `Its competition score (${hDest[2]}) helps estimate whether the professional culture may feel more pressured or more collaborative.`,
    'This forecast is about the general school environment in the country, not one specific campus.',
  ]

  if (yrsBuffer > 0) {
    reasons.splice(
      2,
      0,
      `Because you have ${yrsValue} abroad, we soften the culture-adjustment penalty slightly for the school forecast.`
    )
  }

  return reasons
}

function placeReasons(dest, homeGap) {
  if (!dest) return []

  const reasons = [
    `Quality of life (${dest.ql}/100), safety (${dest.safety}/100), and expat fit (${dest.expat}/100) shape this place forecast.`,
    `The cost-of-living index (${dest.col}) helps separate a good salary from an actually comfortable day-to-day life.`,
  ]

  if (homeGap > 30) {
    reasons.push('Your home-country baseline is quite different here, so settling in outside school may take more active adjustment at first.')
  }

  return reasons
}

function packageReasons(dest) {
  if (!dest) return []

  return [
    `Median teacher salary is about ${MONEY.format(dest.medSal)} per month at country level.`,
    `Around ${dest.housingRate}% of schools are estimated to offer housing and ${dest.flightRate}% to offer flights.`,
    dest.taxFree ? 'Tax treatment is likely to be favorable compared with many markets.' : 'Tax treatment looks more standard, so net savings need checking.',
  ]
}

function computeAllPredictions(profile, weights) {
  const hHome = HOF[profile.home]
  const yrs = profile.yrs || ''
  const yrsBuffer = yrs === '15+ years' ? 1 : /8.*15/.test(yrs) ? 0.5 : /4.*7/.test(yrs) ? 0.25 : 0

  return Object.entries(CTRY_DATA).map(([country, dest]) => {
    const hDest = HOF[country]

    // Package prediction — includes savings target feasibility
    const salScore = dest.medSal < 3000 ? 4 : dest.medSal < 4500 ? 5 : dest.medSal < 6000 ? 6 : dest.medSal < 8000 ? 7 : 8
    const savingsPenalty = (profile.savings === '20k+' && dest.medSal < 5000) ? -1
                         : (profile.savings === '10-20k' && dest.medSal < 3500) ? -0.5 : 0
    const pkgPred = Math.min(10, Math.max(1, Math.round(
      salScore
      + (dest.housingRate > 70 ? 1.5 : dest.housingRate > 50 ? 0.8 : 0)
      + (dest.taxFree ? 1.5 : 0)
      + (dest.flightRate > 75 ? 0.5 : 0)
      + savingsPenalty
    )))

    // Place prediction
    const idvGap = hHome && hDest ? Math.abs(hHome[1] - hDest[1]) : 0
    const expatPenalty = (profile.life === 'children' && dest.expat < 60) ? -1.5
                       : (profile.life === 'partner_career' && dest.expat < 55) ? -0.75 : 0
    const plcPred = Math.min(10, Math.max(1, Math.round(
      ((dest.ql / 20) + (dest.safety / 25) + (dest.expat / 25)) / 3 * 10
      + (idvGap > 50 ? -1 : idvGap > 30 ? -0.5 : 0)
      + expatPenalty
    )))

    // School prediction
    let schPred = 5
    if (hDest) {
      const pdiS = hDest[0] > 80 ? 3 : hDest[0] > 60 ? 4 : hDest[0] > 40 ? 5 : 6
      const masS = hDest[2] > 80 ? 3 : hDest[2] > 60 ? 4 : hDest[2] > 40 ? 5 : 6
      const uaiS = hDest[3] > 80 ? 4 : hDest[3] > 60 ? 5 : hDest[3] > 40 ? 5 : 6
      const frictionAdj = (profile.friction === 'leadership' && hDest[0] > 70) ? -1
                        : (profile.friction === 'workload' && hDest[2] > 65) ? -0.5 : 0
      schPred = Math.min(9, Math.max(1, Math.round(
        (pdiS + masS + uaiS) / 3 + yrsBuffer + frictionAdj
      )))
    }

    // Priority-based adjustments — nudge the leg the teacher cares most about
    const priSch = profile.priority === 'growth' ? 0.5 : profile.priority === 'balance' ? -0.25 : 0
    const priPlc = profile.priority === 'adventure' ? 0.5 : 0
    const priPkg = profile.priority === 'financial' ? 0.5 : 0

    const adjSch = Math.min(10, Math.max(1, Math.round(schPred + priSch)))
    const adjPlc = Math.min(10, Math.max(1, Math.round(plcPred + priPlc)))
    const adjPkg = Math.min(10, Math.max(1, Math.round(pkgPred + priPkg)))

    // Exit constraint flag — warn when school looks risky and teacher can't easily leave
    const exitWarning = (profile.exit === 'no' && adjSch < 5)
      ? 'School leg looks weak and you flagged limited exit flexibility — check contract terms carefully.'
      : ''

    // Weighted composite score
    const totalWeight = weights.school + weights.place + weights.package
    const composite = totalWeight > 0
      ? (adjSch * weights.school + adjPlc * weights.place + adjPkg * weights.package) / totalWeight
      : (adjSch + adjPlc + adjPkg) / 3

    // Best feature for the insight line
    const bestLeg = adjPkg >= adjPlc && adjPkg >= adjSch ? 'package'
                  : adjPlc >= adjSch ? 'place' : 'school'
    const worstLeg = adjPkg <= adjPlc && adjPkg <= adjSch ? 'package'
                   : adjPlc <= adjSch ? 'place' : 'school'

    let insight = exitWarning || ''
    if (!insight) {
      if (bestLeg === 'package' && adjPkg >= 7) insight = dest.taxFree ? 'Strong package — tax-free market' : `Good salary market (~${MONEY.format(dest.medSal)}/mo)`
      else if (bestLeg === 'place' && adjPlc >= 7) insight = `High quality of life (${dest.ql}/100) and safety (${dest.safety}/100)`
      else if (bestLeg === 'school' && adjSch >= 6) insight = 'Culturally comfortable school environment predicted'
      else if (worstLeg === 'package' && adjPkg <= 4) insight = 'Weaker package — verify savings potential'
      else if (worstLeg === 'place' && adjPlc <= 4) insight = 'Place leg needs investigation — safety or isolation risk'
      else if (worstLeg === 'school' && adjSch <= 4) insight = 'High cultural adjustment predicted for schools'
      else insight = `Balanced profile — ${[adjSch, adjPlc, adjPkg].filter(s => s >= 6).length} of 3 legs solid`
    }

    return {
      country,
      region: dest.region,
      schPred: adjSch,
      plcPred: adjPlc,
      pkgPred: adjPkg,
      composite: Math.round(composite * 10) / 10,
      insight,
      dest,
      hDest,
    }
  }).sort((a, b) => b.composite - a.composite)
}

export default function MyMove() {
  const { profile, editProfile, updateProfile } = useProfile()
  const { cc, dc, dcity, pkg: curPkg, plc: curPlc, sch: curSch } = profile

  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weights, setWeights] = useState({ school: 1, place: 1, package: 1 })
  const [regionFilter, setRegionFilter] = useState('All')
  const [search, setSearch] = useState('')

  // Compute predictions for all countries
  const allPredictions = computeAllPredictions(profile, weights)

  // Filter by region
  const filteredPredictions = regionFilter === 'All'
    ? allPredictions
    : allPredictions.filter(p => p.region === regionFilter)

  // DETAIL MODE: Show full forecast for selected country
  if (selectedCountry) {
    const dest = CTRY_DATA[selectedCountry]
    const hDest = HOF[selectedCountry]
    const hHome = HOF[profile.home]
    const hCur = HOF[cc]

    let pkgPred = 5
    if (dest) {
      const salScore = dest.medSal < 3000 ? 4 : dest.medSal < 4500 ? 5 : dest.medSal < 6000 ? 6 : dest.medSal < 8000 ? 7 : 8
      pkgPred = Math.min(10, Math.round(salScore + (dest.housingRate > 70 ? 1.5 : dest.housingRate > 50 ? 0.8 : 0) + (dest.taxFree ? 1.5 : 0) + (dest.flightRate > 75 ? 0.5 : 0)))
    }

    let plcPred = 5
    const homeIndividualismGap = hHome && hDest ? Math.abs(hHome[1] - hDest[1]) : 0
    if (dest) {
      plcPred = Math.min(10, Math.max(1, Math.round(((dest.ql / 20) + (dest.safety / 25) + (dest.expat / 25)) / 3 * 10 + (homeIndividualismGap > 50 ? -1 : homeIndividualismGap > 30 ? -0.5 : 0))))
    }

    const yrsValue = profile.yrs || ''
    const yrsBuffer = yrsValue === '15+ years'
      ? 1
      : /8.*15/.test(yrsValue)
        ? 0.5
        : /4.*7/.test(yrsValue)
          ? 0.25
          : 0

    let schPred = 5
    if (dest && hDest) {
      const pdiS = hDest[0] > 80 ? 3 : hDest[0] > 60 ? 4 : hDest[0] > 40 ? 5 : 6
      const masS = hDest[2] > 80 ? 3 : hDest[2] > 60 ? 4 : hDest[2] > 40 ? 5 : 6
      const uaiS = hDest[3] > 80 ? 4 : hDest[3] > 60 ? 5 : hDest[3] > 40 ? 5 : 6
      schPred = Math.min(9, Math.round((pdiS + masS + uaiS) / 3 + yrsBuffer))
    }

    const legs = [
      {
        l: 'School',
        cur: curSch,
        pred: schPred,
        col: '#A35E08',
        reasons: schoolReasons(hDest, yrsBuffer, yrsValue, selectedCountry),
      },
      {
        l: 'Place',
        cur: curPlc,
        pred: plcPred,
        col: '#3F3A8F',
        reasons: placeReasons(dest, homeIndividualismGap),
      },
      {
        l: 'Package',
        cur: curPkg,
        pred: pkgPred,
        col: '#0E8A5F',
        reasons: packageReasons(dest),
      },
    ]

    const baselineFacts = [
      profile.home ? { label: 'Home baseline', value: profile.home } : null,
      cc || profile.city ? { label: 'Current post', value: [profile.school, profile.city, cc].filter(Boolean).join(', ') } : null,
      profile.curr ? { label: 'Curriculum', value: profile.curr } : null,
      profile.yrs ? { label: 'Years abroad', value: profile.yrs } : null,
      selectedCountry ? { label: 'Destination', value: selectedCountry } : null,
      profile.sal ? { label: 'Current salary', value: `${MONEY.format(profile.sal)} / month` } : null,
      profile.hous ? { label: 'Housing', value: profile.hous } : null,
      profile.flt ? { label: 'Flights', value: profile.flt } : null,
      profile.tax ? { label: 'Tax', value: profile.tax } : null,
    ].filter(Boolean)

    const personalFacts = [
      profile.life ? { label: 'Life setup', value: LIFE_LABELS[profile.life] || profile.life } : null,
      profile.savings ? { label: 'Savings target', value: profile.savings } : null,
      profile.priority ? { label: 'Main priority', value: PRIORITY_LABELS[profile.priority] || profile.priority } : null,
      profile.friction ? { label: 'Biggest concern', value: FRICTION_LABELS[profile.friction] || profile.friction } : null,
      profile.exit ? { label: 'Exit flexibility', value: EXIT_LABELS[profile.exit] || profile.exit } : null,
    ].filter(Boolean)

    return (
      <div className="tp active">
        <button
          onClick={() => setSelectedCountry(null)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--ink-3)',
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 500,
            marginBottom: '1rem',
            padding: 0,
          }}
        >
          &lt;- Back to explorer
        </button>

        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Forecast my move</div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '.85rem', lineHeight: 1.6, maxWidth: 760 }}>
          This is a country-level forecast for {selectedCountry}. It combines {SALARY_DB_SEED.length.toLocaleString()} salary records, cost and quality-of-life data, and cross-cultural research so you can see where the move looks strong and where to ask harder questions.
        </div>

        {yrsBuffer > 0 && (
          <div style={{ background: '#E5E3F5', border: '1px solid #3F3A8F33', borderLeft: '3px solid #3F3A8F', borderRadius: '0 var(--r) var(--r) 0', padding: '.625rem 1rem', fontSize: 12.5, color: '#2A2576', lineHeight: 1.55, marginBottom: '1rem' }}>
            <strong>{profile.yrs} abroad.</strong> Experience buffer of {yrsBuffer === 1 ? '1 point' : `${yrsBuffer} points`} applied to the school forecast.
          </div>
        )}

        {/* ── Score cards first ─────────────────────────────────────────── */}
        <div className="g3" style={{ marginBottom: '1.5rem' }}>
          {legs.map((leg) => {
            const diff = leg.pred - leg.cur
            const meta = legMeta(diff)

            return (
              <div key={leg.l} style={{ background: 'white', border: `1px solid ${leg.col}33`, borderRadius: 'var(--rl)', padding: '1.35rem', display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.35rem' }}>{leg.l}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>{meta.summary}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink)', lineHeight: 1.5, marginTop: '.35rem', fontWeight: 500 }}>{diffSummary(diff)}</div>
                  </div>
                  <span style={{ background: meta.toneBg, color: meta.toneText, borderRadius: 999, padding: '5px 10px', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {meta.label}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '.75rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.8rem .9rem' }}>
                    <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 4 }}>Your current score</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 500, lineHeight: 1, color: 'var(--ink)' }}>{leg.cur}</div>
                  </div>

                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.04em' }}>
                    to
                  </div>

                  <div style={{ background: `${leg.col}12`, borderRadius: 'var(--r)', padding: '.8rem .9rem' }}>
                    <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 4 }}>Forecast at {selectedCountry}</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 600, lineHeight: 1, color: leg.col }}>{leg.pred}</div>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.4rem' }}>Why we think this</div>
                  <div style={{ display: 'grid', gap: '.45rem' }}>
                    {leg.reasons.map((reason) => (
                      <div key={reason} style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55, paddingLeft: '.85rem', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, top: '.45rem', width: 6, height: 6, borderRadius: 999, background: leg.col }} />
                        {reason}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="ibox info" style={{ marginBottom: '1rem' }}>
          Use this as a starting point, not a promise. One school, neighborhood, or contract can still differ a lot from the country-level picture.
        </div>

        {(baselineFacts.length > 0 || personalFacts.length > 0) && (
          <details style={{ marginBottom: '1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.75rem 1rem' }}>
            <summary style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', cursor: 'pointer', fontWeight: 500 }}>
              What this forecast is using from your profile
            </summary>
            <div style={{ marginTop: '.65rem', display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              {[...baselineFacts, ...personalFacts].map((fact) => (
                <span key={fact.label} className="pbi" style={{ background: 'white' }}>
                  <span className="pbil">{fact.label}:</span>
                  <span>{fact.value}</span>
                </span>
              ))}
            </div>
          </details>
        )}

        {hCur && hDest && (
          <div className="card">
            <div className="ct">What may feel different if you move</div>
            <div className="cs">
              Here, adjustment means difference, not danger. This section compares {cc} with {selectedCountry} and highlights where daily work or life may feel less familiar at first.
            </div>

            {DLBLS.map((d, i) => {
              const gap = Math.abs(hCur[i] - hDest[i])
              const guide = DIM_PLAIN_GUIDE[d]
              const directionText = compareDirection(hCur[i], hDest[i], d)
              const level = gapLevel(gap)
              const curPos = hCur[i]
              const destPos = hDest[i]

              return (
                <div key={d} style={{ marginBottom: '1.25rem', padding: '1rem 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: '.5rem' }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: DCOLS[i] }}>{guide?.title || d}</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>{guide?.intro}</div>
                    </div>
                    <span
                      style={{
                        color: gapColor(gap),
                        background: level === 'big' ? '#F5DFD3' : level === 'noticeable' ? '#F5E5C6' : '#DCF0E6',
                        padding: '3px 10px',
                        borderRadius: 999,
                        whiteSpace: 'nowrap',
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {gapLabel(gap)}
                    </span>
                  </div>

                  {/* Two-dot comparison track */}
                  <div style={{ position: 'relative', height: 32, margin: '8px 0' }}>
                    {/* Track line */}
                    <div style={{ position: 'absolute', top: 14, left: 0, right: 0, height: 4, background: 'var(--surface-2)', borderRadius: 2 }} />
                    {/* Span between dots */}
                    {gap > 5 && (
                      <div style={{
                        position: 'absolute',
                        top: 14,
                        left: `${Math.min(curPos, destPos)}%`,
                        width: `${gap}%`,
                        height: 4,
                        background: gapColor(gap),
                        opacity: 0.3,
                        borderRadius: 2,
                      }} />
                    )}
                    {/* Current country dot */}
                    <div style={{
                      position: 'absolute',
                      left: `${curPos}%`,
                      top: 6,
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                      <div style={{
                        width: 20,
                        height: 20,
                        borderRadius: 999,
                        background: 'var(--ink-3)',
                        border: '3px solid white',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                      }} />
                    </div>
                    {/* Destination country dot */}
                    <div style={{
                      position: 'absolute',
                      left: `${destPos}%`,
                      top: 6,
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}>
                      <div style={{
                        width: 20,
                        height: 20,
                        borderRadius: 999,
                        background: DCOLS[i],
                        border: '3px solid white',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                      }} />
                    </div>
                  </div>

                  {/* Legend */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-4)', marginBottom: 6 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--ink-3)', display: 'inline-block' }} />
                      {cc || 'Current'}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: DCOLS[i], display: 'inline-block' }} />
                      {selectedCountry}
                    </span>
                  </div>

                  <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.6, marginTop: 4 }}>
                    {directionText || 'This part of life may feel fairly familiar, with less day-to-day adjustment needed.'}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <button
          onClick={() => updateProfile({ dc: selectedCountry })}
          style={{
            marginTop: '1.5rem',
            padding: '.75rem 1.25rem',
            fontSize: 13,
            fontWeight: 600,
            background: 'var(--teal)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--r)',
            cursor: 'pointer',
          }}
        >
          Set as my destination
        </button>
      </div>
    )
  }

  // ── Helper: delta chip ──────────────────────────────────────────────
  const DeltaChip = ({ pred, cur, label, col }) => {
    const diff = pred - cur
    const bg = diff > 0 ? '#DCF0E6' : diff < 0 ? '#F5DFD3' : '#F5F5F4'
    const tc = diff > 0 ? 'var(--teal-dark)' : diff < 0 ? 'var(--coral-dark, #A0431A)' : 'var(--ink-4)'
    const sign = diff > 0 ? '+' : ''
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, background: bg, color: tc, padding: '2px 8px', borderRadius: 999, fontSize: 10.5, fontWeight: 600, whiteSpace: 'nowrap' }}>
        <span style={{ width: 5, height: 5, borderRadius: 99, background: col, flexShrink: 0 }} />
        {label} {sign}{diff}
      </span>
    )
  }

  // ── Helper: mini bar ──────────────────────────────────────────────────
  const MiniBar = ({ value, col }) => (
    <div style={{ flex: 1, height: 6, background: 'var(--surface-2)', borderRadius: 3, overflow: 'hidden' }}>
      <div style={{ width: `${value * 10}%`, height: '100%', background: col, borderRadius: 3, transition: 'width .3s ease' }} />
    </div>
  )

  // ── Smart summary computation ─────────────────────────────────────────
  const curComposite = (curSch + curPlc + curPkg) / 3
  const upgrades = allPredictions.filter(p => p.composite > curComposite + 0.5).length
  const topRegion = allPredictions.length > 0 ? allPredictions.slice(0, 5).reduce((acc, p) => { acc[p.region] = (acc[p.region] || 0) + 1; return acc }, {}) : {}
  const bestRegion = Object.entries(topRegion).sort((a, b) => b[1] - a[1])[0]

  // Top 3 spotlight
  const top3 = filteredPredictions.slice(0, 3)

  // Search
  const searchLower = search.toLowerCase().trim()
  const displayList = searchLower.length >= 2
    ? filteredPredictions.filter(p => p.country.toLowerCase().includes(searchLower))
    : filteredPredictions

  // EXPLORER MODE
  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.25rem' }}>Find your fit</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '.85rem', lineHeight: 1.6, maxWidth: 720 }}>
        {Object.keys(CTRY_DATA).length} countries scored against your profile. Your current post averages <strong style={{ color: 'var(--ink)' }}>{curComposite.toFixed(1)}/10</strong>
        {upgrades > 0 && <> — <strong style={{ color: 'var(--teal-dark)' }}>{upgrades} countries</strong> forecast stronger overall</>}
        {bestRegion && <>, mostly in <strong style={{ color: 'var(--ink)' }}>{bestRegion[0]}</strong></>}.
      </div>

      {profile.dc && !selectedCountry && (
        <div style={{ background: '#E5E3F5', borderRadius: 'var(--r)', padding: '.625rem 1rem', marginBottom: '1rem', fontSize: 12, color: '#2A2576', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.5rem' }}>
          <span>You selected <strong>{profile.dc}</strong> as your destination.</span>
          <button onClick={() => setSelectedCountry(profile.dc)} style={{
            fontSize: 12, fontWeight: 500, color: '#3F3A8F', background: 'white', border: '1px solid #3F3A8F33',
            borderRadius: 'var(--r)', padding: '5px 12px', cursor: 'pointer',
          }}>View forecast &rarr;</button>
        </div>
      )}

      {/* ── Top 3 spotlight cards ─────────────────────────────────────── */}
      {!searchLower && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '.65rem', marginBottom: '1.25rem' }}>
          {top3.map((r, i) => {
            const avgPred = (r.schPred + r.plcPred + r.pkgPred) / 3
            const diff = avgPred - curComposite
            const diffSign = diff > 0 ? '+' : ''
            const borderCol = diff > 0.5 ? 'var(--teal)' : diff > -0.5 ? '#3F3A8F' : 'var(--amber, #A35E08)'
            return (
              <div key={r.country} onClick={() => setSelectedCountry(r.country)} style={{
                background: 'white', border: `1.5px solid ${borderCol}`, borderRadius: 'var(--rl)',
                padding: '1rem 1.1rem', cursor: 'pointer', position: 'relative', transition: 'transform .15s, box-shadow .15s',
              }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,.08)' }}
              onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {i === 0 && <div style={{ position: 'absolute', top: -9, left: 12, background: borderCol, color: 'white', fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '.08em' }}>Best match</div>}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.5rem' }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', fontFamily: 'var(--serif)' }}>{r.country}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{r.region}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 20, fontWeight: 600, color: borderCol, lineHeight: 1 }}>{avgPred.toFixed(1)}</div>
                    <div style={{ fontSize: 10, color: diff > 0 ? 'var(--teal-dark)' : 'var(--ink-4)', fontWeight: 600 }}>{diffSign}{diff.toFixed(1)} vs now</div>
                  </div>
                </div>
                {/* Mini bars */}
                <div style={{ display: 'grid', gap: 5 }}>
                  {[{ l: 'School', v: r.schPred, c: '#A35E08' }, { l: 'Place', v: r.plcPred, c: '#3F3A8F' }, { l: 'Package', v: r.pkgPred, c: '#0E8A5F' }].map(b => (
                    <div key={b.l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ fontSize: 10, color: b.c, fontWeight: 600, width: 50 }}>{b.l}</div>
                      <MiniBar value={b.v} col={b.c} />
                      <div style={{ fontSize: 11, fontWeight: 600, color: b.c, width: 18, textAlign: 'right' }}>{b.v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-3)', lineHeight: 1.45, marginTop: '.5rem' }}>{r.insight}</div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── Weight sliders (sticky) ──────────────────────────────────── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'var(--bg, white)', paddingTop: '.25rem', paddingBottom: '.5rem' }}>
        <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.75rem 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.5rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-2)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Adjust priorities</div>
            <button onClick={() => setWeights({ school: 1, place: 1, package: 1 })} style={{ fontSize: 10, color: 'var(--ink-4)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Reset</button>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { key: 'school', label: 'School', col: '#A35E08' },
              { key: 'place', label: 'Place', col: '#3F3A8F' },
              { key: 'package', label: 'Package', col: '#0E8A5F' },
            ].map(w => (
              <div key={w.key} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flex: '1 1 140px', minWidth: 0 }}>
                <div style={{ fontSize: 11, color: w.col, fontWeight: 600, minWidth: 52 }}>{w.label}</div>
                <input type="range" min="0" max="2" step="0.5" value={weights[w.key]}
                  onChange={(e) => setWeights({ ...weights, [w.key]: parseFloat(e.target.value) })}
                  style={{ flex: 1, minWidth: 60 }} />
                <div style={{ fontSize: 11, color: 'var(--ink-4)', minWidth: 28, textAlign: 'right', fontWeight: 500 }}>{weights[w.key].toFixed(1)}x</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Search + region filters ──────────────────────────────────── */}
      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.5rem', marginTop: '.5rem', flexWrap: 'wrap' }}>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search countries..."
          style={{ flex: '1 1 180px', padding: '7px 12px', fontSize: 13, border: '1px solid var(--border-2, var(--border))', borderRadius: 'var(--r)', boxSizing: 'border-box' }} />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
          {['All', ...Object.keys(REGION_MAP)].map(r => (
            <button key={r} onClick={() => setRegionFilter(r)} style={{
              fontSize: 10.5, padding: '4px 10px', borderRadius: 20, cursor: 'pointer',
              background: regionFilter === r ? 'var(--teal)' : 'white',
              color: regionFilter === r ? 'white' : 'var(--ink-3)',
              border: regionFilter === r ? '1px solid var(--teal)' : '1px solid var(--border)',
              fontWeight: regionFilter === r ? 600 : 400,
              transition: 'all .15s',
            }}>{r}</button>
          ))}
        </div>
      </div>

      <div style={{ fontSize: 11, color: 'var(--ink-4)', marginBottom: '.65rem' }}>
        {displayList.length} {displayList.length === 1 ? 'country' : 'countries'}{regionFilter !== 'All' ? ` in ${regionFilter}` : ''}{searchLower ? ` matching "${search}"` : ''}
      </div>

      {/* ── Country list ─────────────────────────────────────────────── */}
      <div>
        {displayList.map((result) => {
          const avgPred = (result.schPred + result.plcPred + result.pkgPred) / 3
          const diff = avgPred - curComposite
          const borderCol = diff > 0.5 ? 'var(--teal)' : diff > -0.5 ? 'var(--border)' : 'var(--coral, #BF4820)'
          return (
            <div key={result.country} onClick={() => setSelectedCountry(result.country)} style={{
              background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)',
              padding: '.75rem 1rem', marginBottom: '.45rem', cursor: 'pointer',
              borderLeft: `3px solid ${borderCol}`,
              transition: 'background .1s',
            }}
            onMouseOver={e => e.currentTarget.style.background = 'var(--surface-2, #f9f9f6)'}
            onMouseOut={e => e.currentTarget.style.background = 'white'}
            >
              {/* Row 1: name, region, overall delta */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '.5rem' }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{result.country}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{result.region}</div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: diff > 0.5 ? 'var(--teal-dark)' : diff > -0.5 ? 'var(--ink-3)' : 'var(--coral-dark, #A0431A)' }}>
                  {diff > 0 ? '+' : ''}{diff.toFixed(1)}
                </div>
              </div>

              {/* Row 2: mini bars + delta chips */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem', marginBottom: '.35rem' }}>
                <div style={{ display: 'flex', gap: 3, flex: 1, alignItems: 'center' }}>
                  {[{ v: result.schPred, c: '#A35E08' }, { v: result.plcPred, c: '#3F3A8F' }, { v: result.pkgPred, c: '#0E8A5F' }].map((b, i) => (
                    <MiniBar key={i} value={b.v} col={b.c} />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                  <DeltaChip pred={result.schPred} cur={curSch} label="S" col="#A35E08" />
                  <DeltaChip pred={result.plcPred} cur={curPlc} label="P" col="#3F3A8F" />
                  <DeltaChip pred={result.pkgPred} cur={curPkg} label="$" col="#0E8A5F" />
                </div>
              </div>

              {/* Row 3: insight */}
              <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.45 }}>{result.insight}</div>
            </div>
          )
        })}
      </div>

      {displayList.length === 0 && (
        <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--ink-3)', fontSize: 13 }}>
          No countries match your search. Try a different term or region.
        </div>
      )}
    </div>
  )
}

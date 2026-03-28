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
      toneBg: '#E1F5EE',
      toneText: 'var(--teal-dark)',
      summary: 'The country-level picture looks better than what you rated in your current post.',
    }
  }
  if (diff < -1) {
    return {
      label: 'Needs more checking',
      toneBg: '#FAECE7',
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

function schoolReasons(hDest, yrsBuffer, yrsValue) {
  if (!hDest) return []

  const reasons = [
    `Saudi Arabia scores high on hierarchy (${hDest[0]}) and structure (${hDest[3]}), which usually points to more top-down and rule-bound school systems.`,
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

    // Package prediction
    const salScore = dest.medSal < 3000 ? 4 : dest.medSal < 4500 ? 5 : dest.medSal < 6000 ? 6 : dest.medSal < 8000 ? 7 : 8
    const pkgPred = Math.min(10, Math.max(1, Math.round(
      salScore
      + (dest.housingRate > 70 ? 1.5 : dest.housingRate > 50 ? 0.8 : 0)
      + (dest.taxFree ? 1.5 : 0)
      + (dest.flightRate > 75 ? 0.5 : 0)
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

    // Weighted composite score
    const totalWeight = weights.school + weights.place + weights.package
    const composite = totalWeight > 0
      ? (schPred * weights.school + plcPred * weights.place + pkgPred * weights.package) / totalWeight
      : (schPred + plcPred + pkgPred) / 3

    // Best feature for the insight line
    const bestLeg = pkgPred >= plcPred && pkgPred >= schPred ? 'package'
                  : plcPred >= schPred ? 'place' : 'school'
    const worstLeg = pkgPred <= plcPred && pkgPred <= schPred ? 'package'
                   : plcPred <= schPred ? 'place' : 'school'

    let insight = ''
    if (bestLeg === 'package' && pkgPred >= 7) insight = dest.taxFree ? 'Strong package — tax-free market' : `Good salary market (~${MONEY.format(dest.medSal)}/mo)`
    else if (bestLeg === 'place' && plcPred >= 7) insight = `High quality of life (${dest.ql}/100) and safety (${dest.safety}/100)`
    else if (bestLeg === 'school' && schPred >= 6) insight = 'Culturally comfortable school environment predicted'
    else if (worstLeg === 'package' && pkgPred <= 4) insight = 'Weaker package — verify savings potential'
    else if (worstLeg === 'place' && plcPred <= 4) insight = 'Place leg needs investigation — safety or isolation risk'
    else if (worstLeg === 'school' && schPred <= 4) insight = 'High cultural adjustment predicted for schools'
    else insight = `Balanced profile — ${[schPred, plcPred, pkgPred].filter(s => s >= 6).length} of 3 legs solid`

    return {
      country,
      region: dest.region,
      schPred,
      plcPred,
      pkgPred,
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
        col: '#BA7517',
        reasons: schoolReasons(hDest, yrsBuffer, yrsValue),
      },
      {
        l: 'Place',
        cur: curPlc,
        pred: plcPred,
        col: '#534AB7',
        reasons: placeReasons(dest, homeIndividualismGap),
      },
      {
        l: 'Package',
        cur: curPkg,
        pred: pkgPred,
        col: '#1D9E75',
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

        <div className="card" style={{ marginBottom: '1rem', padding: '1rem 1.1rem' }}>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.45rem' }}>
            How to read this page
          </div>
          <div style={{ display: 'grid', gap: '.45rem', fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            <div>Left score: your own rating of your current post.</div>
            <div>Right score: our country-level forecast for {selectedCountry}.</div>
            <div>The adjustment section below compares {cc || 'your current country'} with {selectedCountry} and shows where daily life may feel different if you move.</div>
          </div>
        </div>

        {(baselineFacts.length > 0 || personalFacts.length > 0) && (
          <div className="card" style={{ marginBottom: '1rem', padding: '1rem 1.1rem' }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.45rem' }}>
              What this forecast is using from your profile
            </div>

            {baselineFacts.length > 0 && (
              <div style={{ marginBottom: personalFacts.length > 0 ? '.85rem' : 0 }}>
                <div style={{ fontSize: 11, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.4rem' }}>
                  Baseline
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.45rem' }}>
                  {baselineFacts.map((fact) => (
                    <span key={fact.label} className="pbi" style={{ background: 'var(--surface-2)' }}>
                      <span className="pbil">{fact.label}:</span>
                      <span>{fact.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {personalFacts.length > 0 && (
              <div>
                <div style={{ fontSize: 11, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.4rem' }}>
                  Personal filters
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.45rem' }}>
                  {personalFacts.map((fact) => (
                    <span key={fact.label} className="pbi" style={{ background: 'var(--surface-2)' }}>
                      <span className="pbil">{fact.label}:</span>
                      <span>{fact.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="ibox info" style={{ marginBottom: yrsBuffer > 0 ? '.75rem' : '1.25rem' }}>
          Use this as a starting point, not a promise. One school, neighborhood, or contract can still differ a lot from the country-level picture.
        </div>

        {yrsBuffer > 0 && (
          <div style={{ background: '#EEEDFE', border: '1px solid #534AB733', borderLeft: '3px solid #534AB7', borderRadius: '0 var(--r) var(--r) 0', padding: '.625rem 1rem', fontSize: 12.5, color: '#3C3489', lineHeight: 1.55, marginBottom: '1.25rem' }}>
            <strong>{profile.yrs} abroad.</strong> In the school forecast, we give a small experience buffer of {yrsBuffer === 1 ? '1 point' : `${yrsBuffer} points`} because long-term international teachers often handle culture shifts more easily.
          </div>
        )}

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

              return (
                <div key={d} className="hbar" style={{ marginBottom: '1rem' }}>
                  <div className="hbh" style={{ alignItems: 'center', gap: 10 }}>
                    <div>
                      <div className="hbn" style={{ color: DCOLS[i], fontSize: 13 }}>{guide?.title || d}</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>{guide?.intro}</div>
                    </div>
                    <span
                      className="hbsc"
                      style={{
                        color: gapColor(gap),
                        background: level === 'big' ? '#FAECE7' : level === 'noticeable' ? '#FAEEDA' : '#E1F5EE',
                        padding: '3px 10px',
                        borderRadius: 999,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {gapLabel(gap)}
                    </span>
                  </div>

                  <div className="hbt" style={{ marginTop: 8 }}>
                    <div
                      className="hbf"
                      style={{ width: `${Math.min(gap, 100)}%`, background: gapColor(gap) }}
                    />
                  </div>

                  <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.6, marginTop: 8 }}>
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

  // EXPLORER MODE: Show all countries with filters and rankings
  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Find your fit</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.6, maxWidth: 760 }}>
        We've run our prediction engine across {Object.keys(CTRY_DATA).length} countries using your profile. Adjust the weights below to explore what matters most to you.
      </div>

      {profile.dc && !selectedCountry && (
        <div style={{ background: '#EEEDFE', borderRadius: 'var(--r)', padding: '.625rem 1rem', marginBottom: '1rem', fontSize: 12, color: '#3C3489', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>You selected <strong>{profile.dc}</strong> as your destination.</span>
          <button onClick={() => setSelectedCountry(profile.dc)} style={{
            fontSize: 12, fontWeight: 500, color: '#534AB7', background: 'white', border: '1px solid #534AB733',
            borderRadius: 'var(--r)', padding: '5px 12px', cursor: 'pointer',
          }}>View forecast -></button>
        </div>
      )}

      <div style={{ background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '1rem', marginBottom: '1rem' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', marginBottom: '.75rem' }}>What matters most?</div>

        <div style={{ display: 'grid', gap: '.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div style={{ fontSize: 12, color: '#BA7517', fontWeight: 600, minWidth: 80 }}>School</div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.5"
              value={weights.school}
              onChange={(e) => setWeights({ ...weights, school: parseFloat(e.target.value) })}
              style={{ flex: 1 }}
            />
            <div style={{ fontSize: 12, color: 'var(--ink-4)', minWidth: 40, textAlign: 'right' }}>{weights.school.toFixed(1)}x</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div style={{ fontSize: 12, color: '#534AB7', fontWeight: 600, minWidth: 80 }}>Place</div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.5"
              value={weights.place}
              onChange={(e) => setWeights({ ...weights, place: parseFloat(e.target.value) })}
              style={{ flex: 1 }}
            />
            <div style={{ fontSize: 12, color: 'var(--ink-4)', minWidth: 40, textAlign: 'right' }}>{weights.place.toFixed(1)}x</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
            <div style={{ fontSize: 12, color: '#1D9E75', fontWeight: 600, minWidth: 80 }}>Package</div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.5"
              value={weights.package}
              onChange={(e) => setWeights({ ...weights, package: parseFloat(e.target.value) })}
              style={{ flex: 1 }}
            />
            <div style={{ fontSize: 12, color: 'var(--ink-4)', minWidth: 40, textAlign: 'right' }}>{weights.package.toFixed(1)}x</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1rem' }}>
        {['All', ...Object.keys(REGION_MAP)].map(r => (
          <button key={r} onClick={() => setRegionFilter(r)} style={{
            fontSize: 11, padding: '5px 12px', borderRadius: 20, cursor: 'pointer',
            background: regionFilter === r ? 'var(--teal)' : 'var(--surface-2)',
            color: regionFilter === r ? 'white' : 'var(--ink-3)',
            border: regionFilter === r ? '1px solid var(--teal)' : '1px solid var(--border)',
            fontWeight: regionFilter === r ? 600 : 400,
          }}>{r}</button>
        ))}
      </div>

      <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: '1rem' }}>
        {Object.keys(CTRY_DATA).length} countries{regionFilter !== 'All' && ` (showing ${filteredPredictions.length})`}
      </div>

      <div>
        {filteredPredictions.map((result) => {
          const solidLegs = [result.schPred, result.plcPred, result.pkgPred].filter(s => s >= 6).length
          return (
            <div key={result.country} onClick={() => setSelectedCountry(result.country)} style={{
              background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)',
              padding: '.875rem 1rem', marginBottom: '.5rem', cursor: 'pointer',
              borderLeft: `3px solid ${solidLegs >= 2 ? 'var(--teal)' : solidLegs === 1 ? 'var(--amber)' : 'var(--coral)'}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.35rem' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{result.country}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{result.region}</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '.35rem' }}>
                <div style={{ fontSize: 12 }}>
                  <span style={{ color: '#BA7517', fontWeight: 600 }}>{result.schPred}</span>
                  <span style={{ color: 'var(--ink-4)', marginLeft: 3 }}>School</span>
                </div>
                <div style={{ fontSize: 12 }}>
                  <span style={{ color: '#534AB7', fontWeight: 600 }}>{result.plcPred}</span>
                  <span style={{ color: 'var(--ink-4)', marginLeft: 3 }}>Place</span>
                </div>
                <div style={{ fontSize: 12 }}>
                  <span style={{ color: '#1D9E75', fontWeight: 600 }}>{result.pkgPred}</span>
                  <span style={{ color: 'var(--ink-4)', marginLeft: 3 }}>Package</span>
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.45 }}>{result.insight}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

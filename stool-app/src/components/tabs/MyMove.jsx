import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DCOLS } from '../../data/hofstede.js'
import { CTRY_DATA } from '../../data/geo.js'
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
    high: 'People are more likely to value independence, personal choice, and speaking for themselves.',
    low: 'People are more likely to protect harmony, think about the group, and avoid standing out.',
  },
  'Masculinity': {
    title: 'Competition',
    intro: 'how competitive or collaborative daily life may feel',
    high: 'Results, assertiveness, and visible success may matter more.',
    low: 'Cooperation, balance, and keeping relationships steady may matter more.',
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

function gapLevel(gap) {
  if (gap > 30) return 'big'
  if (gap > 15) return 'noticeable'
  return 'small'
}

function gapLabel(gap) {
  if (gap > 30) return 'Big adjustment'
  if (gap > 15) return 'Noticeable adjustment'
  return 'Smaller adjustment'
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
      label: 'Likely stronger',
      toneBg: '#E1F5EE',
      toneText: 'var(--teal-dark)',
      summary: 'On paper, this destination looks stronger than your current post.',
    }
  }
  if (diff < -1) {
    return {
      label: 'Likely tougher',
      toneBg: '#FAECE7',
      toneText: 'var(--coral-dark)',
      summary: 'This looks like a weaker leg than what you have now, so it needs careful checking.',
    }
  }
  return {
    label: 'Likely similar',
    toneBg: '#E6F1FB',
    toneText: 'var(--blue-dark)',
    summary: 'This looks broadly similar to your current post at country level.',
  }
}

function schoolReasons(hDest, yrsBuffer, yrsValue) {
  if (!hDest) return []

  const reasons = [
    `Hierarchy score ${hDest[0]} and structure score ${hDest[3]} help estimate how top-down and rule-bound schools may feel.`,
    `Competition score ${hDest[2]} helps estimate whether the professional culture may feel more pressured or more collaborative.`,
    'This is a country-level school forecast, not a verdict on one specific school.',
  ]

  if (yrsBuffer > 0) {
    reasons.splice(
      2,
      0,
      `${yrsValue} abroad adds an adaptation buffer because experienced international teachers often settle into new systems faster.`
    )
  }

  return reasons
}

function placeReasons(dest, homeGap) {
  if (!dest) return []

  const reasons = [
    `Quality of life ${dest.ql}/100, safety ${dest.safety}/100, and expat fit ${dest.expat}/100 shape this place forecast.`,
    `A cost-of-living index of ${dest.col} helps us separate a good salary from an actually comfortable life.`,
  ]

  if (homeGap > 30) {
    reasons.push('There is also a meaningful culture shift from your home baseline, which can make the first months feel heavier outside school.')
  }

  return reasons
}

function packageReasons(dest) {
  if (!dest) return []

  return [
    `Median teacher salary is about ${MONEY.format(dest.medSal)} per month at country level.`,
    `${dest.housingRate}% of schools are estimated to offer housing and ${dest.flightRate}% to offer flights.`,
    dest.taxFree ? 'Tax treatment is likely to be favorable compared with many markets.' : 'Tax treatment looks more standard, so net savings need checking.',
  ]
}

export default function MyMove() {
  const { profile, editProfile } = useProfile()
  const { cc, dc, dcity, pkg: curPkg, plc: curPlc, sch: curSch } = profile

  if (!dc) {
    return (
      <div className="tp active">
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Forecast my move</div>
        <div className="ibox info">
          No destination selected.{' '}
          <span onClick={editProfile} style={{ fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>
            Add a destination in your profile -&gt;
          </span>
        </div>
      </div>
    )
  }

  const dest = CTRY_DATA[dc]
  const hDest = HOF[dc]
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

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Forecast my move</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '.85rem', lineHeight: 1.6, maxWidth: 760 }}>
        This is a country-level forecast for {dcity ? `${dcity}, ` : ''}{dc}. It combines {SALARY_DB_SEED.length.toLocaleString()} salary records, cost and quality-of-life data, and cross-cultural research so you can see where the move looks strong and where to ask harder questions.
      </div>

      <div className="ibox info" style={{ marginBottom: yrsBuffer > 0 ? '.75rem' : '1.25rem' }}>
        Use this as a starting point, not a promise. One school, neighborhood, or contract can still differ a lot from the country-level picture.
      </div>

      {yrsBuffer > 0 && (
        <div style={{ background: '#EEEDFE', border: '1px solid #534AB733', borderLeft: '3px solid #534AB7', borderRadius: '0 var(--r) var(--r) 0', padding: '.625rem 1rem', fontSize: 12.5, color: '#3C3489', lineHeight: 1.55, marginBottom: '1.25rem' }}>
          <strong>{profile.yrs} abroad.</strong> Your school forecast is adjusted upward by {yrsBuffer === 1 ? '1 point' : `${yrsBuffer} points`} because teachers with more international experience usually adapt to new systems faster.
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
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 4 }}>Forecast at {dc}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 600, lineHeight: 1, color: leg.col }}>{leg.pred}</div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.4rem' }}>Why we think this</div>
                <div style={{ display: 'grid', gap: '.45rem' }}>
                  {leg.reasons.map((reason) => (
                    <div key={reason} style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.55, paddingLeft: '.85rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, color: leg.col }}>•</span>
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
          <div className="ct">Where the adjustment may show up first</div>
          <div className="cs">
            These are the areas of daily work and life that may feel most different when moving from {cc} to {dc}. They are prompts to notice, not assumptions to make about every person you meet.
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
    </div>
  )
}

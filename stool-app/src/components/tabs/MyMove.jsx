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

function gapLevel(gap) {
  if (gap > 30) return 'big'
  if (gap > 15) return 'noticeable'
  return 'small'
}

function gapLabel(gap) {
  if (gap > 30) return 'Big change'
  if (gap > 15) return 'Noticeable change'
  return 'Small change'
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

export default function MyMove() {
  const { profile, editProfile } = useProfile()
  const { cc, dc, dcity, pkg: curPkg, plc: curPlc, sch: curSch } = profile

  if (!dc) {
    return (
      <div className="tp active">
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Forecast my move</div>
        <div className="ibox info">No destination selected. <span onClick={editProfile} style={{ fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>Add a destination in your profile -&gt;</span></div>
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
  if (dest) {
    const idvGap = hHome && hDest ? Math.abs(hHome[1] - hDest[1]) : 0
    plcPred = Math.min(10, Math.max(1, Math.round(((dest.ql / 20) + (dest.safety / 25) + (dest.expat / 25)) / 3 * 10 + (idvGap > 50 ? -1 : idvGap > 30 ? -0.5 : 0))))
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
    { l: 'School', cur: curSch, pred: schPred, col: '#BA7517' },
    { l: 'Place', cur: curPlc, pred: plcPred, col: '#534AB7' },
    { l: 'Package', cur: curPkg, pred: pkgPred, col: '#1D9E75' },
  ]

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Forecast my move</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: yrsBuffer > 0 ? '.75rem' : '1.5rem', lineHeight: 1.5 }}>
        Predicted stool at {dcity ? `${dcity}, ` : ''}{dc} - based on {SALARY_DB_SEED.length.toLocaleString()} educator salary records, cultural research data, and quality-of-life indices.
      </div>

      {yrsBuffer > 0 && (
        <div style={{ background: '#EEEDFE', border: '1px solid #534AB733', borderLeft: '3px solid #534AB7', borderRadius: '0 var(--r) var(--r) 0', padding: '.625rem 1rem', fontSize: 12.5, color: '#3C3489', lineHeight: 1.55, marginBottom: '1.25rem' }}>
          <strong>{profile.yrs} abroad.</strong> Your school score is adjusted upward by {yrsBuffer === 1 ? '1 point' : `${yrsBuffer} points`} - experienced international teachers usually adapt to new cultural environments faster.
        </div>
      )}

      <div className="g3" style={{ marginBottom: '1.5rem' }}>
        {legs.map((leg) => {
          const d = leg.pred - leg.cur
          const cls = d > 1 ? '#E1F5EE' : d < -1 ? '#FAECE7' : '#E6F1FB'
          const arrow = d > 1 ? '^' : d < -1 ? 'v' : '='
          return (
            <div key={leg.l} style={{ background: cls, border: `1px solid ${leg.col}33`, borderRadius: 'var(--rl)', padding: '1.5rem' }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.5rem' }}>{leg.l}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '.75rem', marginBottom: '.5rem' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--ink-3)' }}>Now: <strong>{leg.cur}</strong></span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{changeLabel}</span>
                <span style={{ fontSize: '1.75rem', fontWeight: 500, color: leg.col }}>{leg.pred}</span>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.55, opacity: .9 }}>
                {d > 1 ? `Conditions in ${dc} suggest improvement.` : d < -1 ? 'This leg may be weaker - investigate before committing.' : 'Similar conditions predicted.'}
              </div>
            </div>
          )
        })}
      </div>

      {hCur && hDest && (
        <div className="card">
          <div className="ct">What may feel different</div>
          <div className="cs">
            Moving from {cc} to {dc}. These are the parts of daily work and life most likely to feel different at first.
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
                  {directionText || `This part of life may feel fairly familiar, with less day-to-day adjustment needed.`}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}



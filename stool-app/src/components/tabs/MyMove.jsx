// MyMove.jsx
import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DCOLS } from '../../data/hofstede.js'
import { CTRY_DATA } from '../../data/geo.js'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'

const DIM_DESCRIPTIONS = {
  'Power Distance':         'How much people accept unequal distribution of power. High = hierarchical workplaces where authority is rarely questioned. Low = flat structures where staff challenge leadership.',
  'Individualism':          'Whether people act as individuals or as part of a group. High = personal achievement and autonomy valued. Low = group loyalty, consensus, and collective harmony come first.',
  'Masculinity':            'Preference for competition vs cooperation. High = assertiveness, achievement, and results-orientation dominate. Low = collaboration, work-life balance, and caring for others are prioritised.',
  'Uncertainty Avoidance':  'Tolerance for ambiguity. High = strong need for rules, structure, and predictability. Low = comfortable with improvisation, flexibility, and not knowing what comes next.',
  'Long-term Orientation':  'Focus on the future vs the present. High = thrift, perseverance, and investing for the long run. Low = respect for tradition, short-term results, and fulfilling social obligations.',
  'Indulgence':             'How much people try to control impulses and desires. High = enjoy life, leisure, and having fun. Low = restraint, regulation of gratification, and strict social norms.',
}

export default function MyMove() {
  const { profile, setActiveTab, editProfile } = useProfile()
  const [hoveredDim, setHoveredDim] = useState(null)
  const { cc, dc, dcity, pkg: curPkg, plc: curPlc, sch: curSch } = profile

  if (!dc) return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Forecast my move</div>
      <div className="ibox info">No destination selected. <span onClick={editProfile} style={{ fontWeight: 500, cursor: 'pointer', textDecoration: 'underline' }}>Add a destination in your profile →</span></div>
    </div>
  )

  const dest = CTRY_DATA[dc]
  const curData = CTRY_DATA[cc]
  const hCur = HOF[cc], hDest = HOF[dc], hHome = HOF[profile.home]

  // Predict package
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
  let schPred = 5
  if (dest && hDest) {
    const pdiS = hDest[0] > 80 ? 3 : hDest[0] > 60 ? 4 : hDest[0] > 40 ? 5 : 6
    const masS = hDest[2] > 80 ? 3 : hDest[2] > 60 ? 4 : hDest[2] > 40 ? 5 : 6
    const uaiS = hDest[3] > 80 ? 4 : hDest[3] > 60 ? 5 : hDest[3] > 40 ? 5 : 6
    schPred = Math.min(9, Math.round((pdiS + masS + uaiS) / 3))
  }

  const legs = [
    { l: 'School', cur: curSch, pred: schPred, col: '#BA7517' },
    { l: 'Place', cur: curPlc, pred: plcPred, col: '#534AB7' },
    { l: 'Package', cur: curPkg, pred: pkgPred, col: '#1D9E75' },
  ]

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>Forecast my move</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        Predicted stool at {dcity ? dcity + ', ' : ''}{dc} — based on {SALARY_DB_SEED.length.toLocaleString()} educator salary records, cultural research data, and quality-of-life indices.
      </div>
      <div className="g3" style={{ marginBottom: '1.5rem' }}>
        {legs.map(leg => {
          const d = leg.pred - leg.cur
          const cls = d > 1 ? '#E1F5EE' : d < -1 ? '#FAECE7' : '#E6F1FB'
          const arrow = d > 1 ? '↑' : d < -1 ? '↓' : '→'
          return (
            <div key={leg.l} style={{ background: cls, border: `1px solid ${leg.col}33`, borderRadius: 'var(--rl)', padding: '1.5rem' }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink-2)', marginBottom: '.5rem' }}>{leg.l}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '.75rem', marginBottom: '.5rem' }}>
                <span style={{ fontSize: '1.2rem', color: 'var(--ink-3)' }}>Now: <strong>{leg.cur}</strong></span>
                <span style={{ fontSize: '1.75rem', fontWeight: 300 }}>{arrow}</span>
                <span style={{ fontSize: '1.75rem', fontWeight: 500, color: leg.col }}>{leg.pred}</span>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.55, opacity: .9 }}>
                {d > 1 ? `Conditions in ${dc} suggest improvement.` : d < -1 ? 'This leg may be weaker — investigate before committing.' : 'Similar conditions predicted.'}
              </div>
            </div>
          )
        })}
      </div>
      {hCur && hDest && (
        <div className="card">
          <div className="ct">Cultural adjustment risk</div>
          <div className="cs">Moving from {cc} → {dc}. Hover any dimension to see what it means.</div>
          {DLBLS.map((d, i) => {
            const gap = Math.abs(hCur[i] - hDest[i])
            const isHovered = hoveredDim === d
            return (
              <div
                key={d}
                className="hbar"
                style={{ cursor: 'default', position: 'relative' }}
                onMouseEnter={() => setHoveredDim(d)}
                onMouseLeave={() => setHoveredDim(null)}
              >
                <div className="hbh">
                  <span className="hbn" style={{ borderBottom: '1px dotted var(--ink-4)' }}>{d}</span>
                  <span className="hbsc" style={{ color: gap > 30 ? 'var(--coral)' : 'var(--teal)' }}>
                    {gap > 30 ? 'High' : gap > 15 ? 'Moderate' : 'Low'} — {gap}pt gap
                  </span>
                </div>
                <div className="hbt">
                  <div className="hbf" style={{ width: `${Math.min(gap, 100)}%`, background: gap > 30 ? 'var(--coral)' : gap > 15 ? 'var(--amber)' : 'var(--teal)' }} />
                </div>
                {isHovered && DIM_DESCRIPTIONS[d] && (
                  <div style={{
                    position: 'absolute', left: 0, top: '100%', zIndex: 10,
                    background: 'var(--ink)', color: 'white',
                    fontSize: 12, lineHeight: 1.55, padding: '8px 12px',
                    borderRadius: 'var(--r)', maxWidth: 340,
                    boxShadow: '0 4px 16px rgba(0,0,0,.18)',
                    pointerEvents: 'none',
                  }}>
                    <strong style={{ display: 'block', marginBottom: 3, color: DCOLS[i] }}>{d}</strong>
                    {DIM_DESCRIPTIONS[d]}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

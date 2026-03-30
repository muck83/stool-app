import { DLBLS, DABBR, DCOLS } from '../../data/hofstede.js'

/**
 * SVG radar chart for Hofstede 6D cultural dimensions.
 * Renders inline — no external charting library needed.
 *
 * @param {{ scores: number[], country: string, color?: string }} props
 */
export default function HofstedeRadar({ scores, country, color = 'var(--teal)' }) {
  if (!scores || scores.length < 6) return null

  const cx = 150, cy = 150, maxR = 110
  const n = 6
  const angles = Array.from({ length: n }, (_, i) => (Math.PI * 2 * i) / n - Math.PI / 2)

  function point(angle, value) {
    const r = (value / 100) * maxR
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)]
  }

  // Grid rings
  const rings = [20, 40, 60, 80, 100]
  const gridLines = rings.map(v => {
    const pts = angles.map(a => point(a, v).join(',')).join(' ')
    return <polygon key={v} points={pts} fill="none" stroke="var(--border)" strokeWidth=".5" />
  })

  // Axis lines
  const axes = angles.map((a, i) => {
    const [ex, ey] = point(a, 100)
    return <line key={i} x1={cx} y1={cy} x2={ex} y2={ey} stroke="var(--border)" strokeWidth=".5" />
  })

  // Data polygon
  const dataPts = angles.map((a, i) => point(a, scores[i]).join(',')).join(' ')

  // Labels
  const labelEls = angles.map((a, i) => {
    const [lx, ly] = point(a, 122)
    return (
      <text key={i} x={lx} y={ly}
        textAnchor="middle" dominantBaseline="middle"
        fontSize="10" fontFamily="var(--sans)" fontWeight="500"
        fill={DCOLS[i]}
      >
        {DABBR[i]}
      </text>
    )
  })

  // Score labels on vertices
  const scoreEls = angles.map((a, i) => {
    const [sx, sy] = point(a, scores[i] + (scores[i] > 85 ? -12 : 12))
    return (
      <text key={`s${i}`} x={sx} y={sy}
        textAnchor="middle" dominantBaseline="middle"
        fontSize="11" fontFamily="var(--sans)" fontWeight="600"
        fill="var(--ink-2)"
      >
        {scores[i]}
      </text>
    )
  })

  return (
    <div style={{ textAlign: 'center' }}>
      <svg viewBox="0 0 300 300" width="280" height="280">
        {gridLines}
        {axes}
        <polygon points={dataPts} fill={`${color}18`} stroke={color} strokeWidth="2" />
        {labelEls}
        {scoreEls}
      </svg>
      <div style={{ marginTop: '8px' }}>
        <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)', fontFamily: 'var(--serif)' }}>
          {country} — Hofstede 6D Profile
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
          {DLBLS.map((label, i) => (
            <span key={i} style={{
              fontSize: '11px', color: DCOLS[i], fontWeight: 500,
              background: `${DCOLS[i]}12`, padding: '2px 8px', borderRadius: '12px',
            }}>
              {DABBR[i]}: {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

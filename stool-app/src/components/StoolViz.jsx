// StoolViz — SVG stool illustration with variable-height legs
// Props:
//   legs: [{ label, score (1–10), color, sublabel? }]
//   title: string shown on the seat (school or city name)
//   size: number (default 280)

export default function StoolViz({ legs = [], title = '', size = 280 }) {
  const W = size
  const H = size
  const FLOOR_Y = H - 28
  const MAX_LEG_H = H * 0.60
  const MIN_LEG_H = 18
  const LEG_W = Math.min(46, Math.floor((W - 60) / legs.length) - 10)
  const n = legs.length
  const spacing = W / (n + 1)

  const legData = legs.map((leg, i) => {
    const pct = Math.max(0.08, Math.min(1, (leg.score || 0) / 10))
    const h = MIN_LEG_H + pct * (MAX_LEG_H - MIN_LEG_H)
    const cx = spacing * (i + 1)
    const x = cx - LEG_W / 2
    const top = FLOOR_Y - h
    return { ...leg, h, x, cx, top }
  })

  // Seat spans all legs with a little overhang
  const OVERHANG = 14
  const seatLeft  = legData[0].x - OVERHANG
  const seatRight = legData[n - 1].x + LEG_W + OVERHANG
  const seatW     = seatRight - seatLeft
  const SEAT_H    = 13
  // Seat Y = top of tallest leg minus gap
  const minTop    = Math.min(...legData.map(d => d.top))
  const seatY     = minTop - SEAT_H - 3

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: '100%', maxWidth: size, display: 'block' }}
      aria-label={`Stool for ${title}`}
    >
      {/* Floor shadow */}
      <ellipse cx={W / 2} cy={FLOOR_Y + 4} rx={seatW / 2 + 10} ry={5} fill="rgba(0,0,0,.06)" />

      {/* Legs */}
      {legData.map((leg) => (
        <g key={leg.label}>
          {/* Leg body */}
          <rect
            x={leg.x} y={leg.top}
            width={LEG_W} height={leg.h}
            rx={LEG_W / 2}
            fill={leg.color}
            opacity={0.88}
          />
          {/* Score bubble */}
          <circle cx={leg.cx} cy={leg.top - 13} r={12} fill={leg.color} />
          <text
            x={leg.cx} y={leg.top - 9}
            textAnchor="middle"
            fontSize={11} fontWeight="700"
            fill="white"
          >
            {leg.score ?? '?'}
          </text>
          {/* Label */}
          <text
            x={leg.cx} y={FLOOR_Y + 16}
            textAnchor="middle"
            fontSize={10} fontWeight="600"
            fill={leg.color}
            style={{ textTransform: 'uppercase', letterSpacing: '.04em' }}
          >
            {leg.label}
          </text>
          {/* Sublabel */}
          {leg.sublabel && (
            <text
              x={leg.cx} y={FLOOR_Y + 27}
              textAnchor="middle"
              fontSize={9}
              fill="#999"
            >
              {leg.sublabel}
            </text>
          )}
        </g>
      ))}

      {/* Seat */}
      <rect
        x={seatLeft} y={seatY}
        width={seatW} height={SEAT_H}
        rx={SEAT_H / 2}
        fill="var(--ink, #1a1917)"
      />

      {/* Title on seat */}
      {title && (
        <text
          x={seatLeft + seatW / 2} y={seatY + SEAT_H - 3}
          textAnchor="middle"
          fontSize={Math.min(10, Math.floor(seatW / title.length * 1.6))}
          fontWeight="500"
          fill="white"
          style={{ letterSpacing: '.02em' }}
        >
          {title.length > 22 ? title.slice(0, 21) + '…' : title}
        </text>
      )}

      {/* Floor line */}
      <line
        x1={20} y1={FLOOR_Y}
        x2={W - 20} y2={FLOOR_Y}
        stroke="var(--border-2, #ddd)"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  )
}

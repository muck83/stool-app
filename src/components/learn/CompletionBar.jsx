import { useEffect, useRef, useState } from 'react'

/**
 * Progress bar showing module completion percentage.
 * When `celebrate` is true (badge just unlocked), runs a confetti-burst
 * keyframe animation and shows the ✓ unlock label.
 */
export default function CompletionBar({
  completed = 0,
  total = 6,
  color = 'var(--teal)',
  celebrate = false,   // pass true the frame the badge threshold is crossed
}) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0
  const unlocked = pct >= 80
  const [showBurst, setShowBurst] = useState(false)
  const burstTimer = useRef(null)

  useEffect(() => {
    if (celebrate) {
      setShowBurst(true)
      burstTimer.current = setTimeout(() => setShowBurst(false), 2200)
    }
    return () => clearTimeout(burstTimer.current)
  }, [celebrate])

  return (
    <div style={{ marginBottom: '1rem', position: 'relative' }}>
      {/* Inject keyframes once via a style tag */}
      <style>{`
        @keyframes barBurst {
          0%   { transform: scaleX(1); filter: brightness(1); }
          30%  { transform: scaleX(1.03); filter: brightness(1.35); }
          60%  { transform: scaleX(.99); filter: brightness(1.1); }
          100% { transform: scaleX(1); filter: brightness(1); }
        }
        @keyframes labelPop {
          0%   { opacity: 0; transform: translateY(4px) scale(.9); }
          60%  { opacity: 1; transform: translateY(-2px) scale(1.04); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes sparkle {
          0%   { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-18px) scale(.5); }
        }
      `}</style>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: '6px',
      }}>
        <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>
          {completed} of {total} dimensions
        </span>
        <span style={{ fontSize: '13px', fontWeight: 500, color }}>
          {pct}%
        </span>
      </div>

      {/* Track */}
      <div style={{
        height: '6px', background: 'var(--surface-2)', borderRadius: '3px', overflow: 'hidden',
      }}>
        <div style={{
          height: '6px',
          borderRadius: '3px',
          background: color,
          width: `${pct}%`,
          transition: 'width .6s cubic-bezier(.4,0,.2,1)',
          animation: showBurst ? 'barBurst .6s ease-out forwards' : undefined,
          transformOrigin: 'left center',
        }} />
      </div>

      {/* Sparkle dots — 5 small circles that fly up on burst */}
      {showBurst && [0, 1, 2, 3, 4].map(i => (
        <span key={i} style={{
          position: 'absolute',
          left: `${10 + i * 18}%`,
          bottom: '4px',
          width: '5px', height: '5px',
          borderRadius: '50%',
          background: i % 2 === 0 ? color : 'var(--amber)',
          animation: `sparkle .8s ${i * 0.09}s ease-out forwards`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Unlock label */}
      {unlocked && (
        <div style={{
          fontSize: '12px',
          color: 'var(--teal-dark)',
          marginTop: '6px',
          fontWeight: 500,
          animation: celebrate ? 'labelPop .45s .1s ease-out both' : undefined,
        }}>
          ✓ Salary data unlocked
        </div>
      )}
    </div>
  )
}

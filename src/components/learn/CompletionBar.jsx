/**
 * Progress bar showing module completion percentage.
 * Renders the teal fill bar and text like "3 of 6 dimensions · 50%".
 */
export default function CompletionBar({ completed = 0, total = 6, color = 'var(--teal)' }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div style={{ marginBottom: '1rem' }}>
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
      <div style={{
        height: '6px', background: 'var(--surface-2)', borderRadius: '3px', overflow: 'hidden',
      }}>
        <div style={{
          height: '6px', borderRadius: '3px', background: color,
          width: `${pct}%`, transition: 'width .6s cubic-bezier(.4,0,.2,1)',
        }} />
      </div>
      {pct >= 80 && (
        <div style={{
          fontSize: '12px', color: 'var(--teal-dark)', marginTop: '6px', fontWeight: 500,
        }}>
          ✓ Salary data unlocked
        </div>
      )}
    </div>
  )
}

/**
 * Card shown to users who haven't completed enough of a module
 * to unlock salary data. Explains what they need to do.
 */
export default function SalaryGateCard({ country, percentage = 0, threshold = 80, moduleSlug }) {
  const remaining = threshold - percentage

  return (
    <div className="card" style={{
      borderLeft: '4px solid var(--amber)',
      background: 'var(--amber-bg)',
    }}>
      <h4 style={{
        fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--amber-dark)',
        margin: '0 0 8px 0',
      }}>
        Salary data for {country} is locked
      </h4>
      <p style={{ fontSize: '13px', color: 'var(--amber-dark)', lineHeight: 1.6, margin: '0 0 12px 0' }}>
        Complete {remaining}% more of the {country} module to unlock full salary rows.
        You'll see count and range data in the meantime.
      </p>
      <div style={{
        height: '6px', background: 'rgba(186,117,23,.15)', borderRadius: '3px',
        overflow: 'hidden', marginBottom: '8px',
      }}>
        <div style={{
          height: '6px', borderRadius: '3px', background: 'var(--amber)',
          width: `${percentage}%`, transition: 'width .6s cubic-bezier(.4,0,.2,1)',
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: 'var(--amber-dark)' }}>
          {percentage}% complete · {threshold}% needed
        </span>
        {moduleSlug && (
          <a
            href={`/learn/${moduleSlug}`}
            style={{
              fontSize: '12px', fontWeight: 500, color: 'var(--amber-dark)',
              textDecoration: 'none', borderBottom: '1px solid rgba(186,117,23,.4)',
            }}
          >
            Continue module →
          </a>
        )}
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'

const STATUS_LABELS = {
  fully_sourced: { text: 'Research-backed', bg: 'var(--teal-light)', color: 'var(--teal-dark)', icon: '◆' },
  partial:       { text: 'Partially sourced', bg: 'var(--amber-bg)', color: 'var(--amber-dark)', icon: '◇' },
  community:     { text: 'Community-sourced', bg: 'var(--purple-bg)', color: 'var(--purple-dark)', icon: '○' },
}

/**
 * Card for a single dimension within a module.
 * Shows dimension number, title, research status label, and summary.
 */
export default function DimensionCard({ dimension, slug, isCompleted = false, moduleColor = 'var(--teal)' }) {
  const label = STATUS_LABELS[dimension.research_status] || STATUS_LABELS.community
  const content = dimension.content || {}

  return (
    <Link
      to={`/learn/${slug}/${dimension.dimension_number}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card" style={{
        position: 'relative',
        borderLeft: `3px solid ${isCompleted ? moduleColor : 'var(--border)'}`,
        transition: 'box-shadow .18s, transform .18s',
        cursor: 'pointer',
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{
              width: '28px', height: '28px', borderRadius: '50%',
              background: isCompleted ? moduleColor : 'var(--surface-2)',
              color: isCompleted ? 'white' : 'var(--ink-3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '12px', fontWeight: 600, flexShrink: 0,
            }}>
              {isCompleted ? '✓' : `D${dimension.dimension_number}`}
            </span>
            <h4 style={{
              fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)', margin: 0,
            }}>
              {dimension.title}
            </h4>
          </div>
          <span style={{
            fontSize: '10px', fontWeight: 500, padding: '2px 8px',
            borderRadius: '20px', background: label.bg, color: label.color,
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            {label.icon} {label.text}
          </span>
        </div>

        {/* Summary */}
        {content.summary && (
          <p style={{
            fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.6,
            margin: 0,
          }}>
            {content.summary}
          </p>
        )}
      </div>
    </Link>
  )
}

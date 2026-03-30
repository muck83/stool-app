import { Link } from 'react-router-dom'

/**
 * SimulationCard — displays a single simulation on the module page.
 * Props: simulation, moduleSlug, moduleColor, completed, inProgress
 */
export default function SimulationCard({
  simulation,
  moduleSlug,
  moduleColor,
  completed,
  inProgress,
}) {
  const estimatedTime = simulation.estimated_minutes || 20
  const ctaText = completed ? 'Review debrief →' : inProgress ? 'Continue →' : 'Begin simulation →'
  const ctaAction = completed ? 'review' : inProgress ? 'continue' : 'begin'

  return (
    <Link to={`/learn/${moduleSlug}/sim/${simulation.id}`} style={{ textDecoration: 'none' }}>
      <div
        className="card"
        style={{
          borderLeft: `3px solid ${moduleColor}`,
          cursor: 'pointer',
          transition: 'box-shadow .18s, transform .15s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)'
          e.currentTarget.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none'
          e.currentTarget.style.transform = 'translateY(0)'
        }}
      >
        {/* Header: title + completion badge */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
          marginBottom: '12px',
        }}>
          <h3
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1rem',
              color: 'var(--ink)',
              margin: 0,
              flex: 1,
            }}
          >
            {simulation.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            {completed && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  background: '#10b98108',
                  color: '#059669',
                  whiteSpace: 'nowrap',
                }}
              >
                ✓ Complete
              </span>
            )}
            {inProgress && !completed && (
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  background: `${moduleColor}15`,
                  color: moduleColor,
                  whiteSpace: 'nowrap',
                }}
              >
                ● In progress
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        {simulation.description && (
          <p
            style={{
              fontSize: '13px',
              color: 'var(--ink-3)',
              lineHeight: 1.6,
              margin: '0 0 12px 0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {simulation.description}
          </p>
        )}

        {/* Meta: time + characters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '12px',
            color: 'var(--ink-4)',
            marginBottom: '12px',
            flexWrap: 'wrap',
          }}
        >
          <span>⏱ ~{estimatedTime} min</span>
          {simulation.characters && simulation.characters.length > 0 && (
            <span>{simulation.characters.map(c => c.name).join(', ')}</span>
          )}
        </div>

        {/* Dimension tags */}
        {simulation.dimension_tags && simulation.dimension_tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              gap: '6px',
              flexWrap: 'wrap',
              marginBottom: '12px',
            }}
          >
            {simulation.dimension_tags.map((dim, i) => (
              <span
                key={i}
                style={{
                  fontSize: '11px',
                  padding: '3px 8px',
                  background: `${moduleColor}15`,
                  color: moduleColor,
                  borderRadius: '12px',
                  fontWeight: 500,
                }}
              >
                D{dim}
              </span>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div
          style={{
            marginTop: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '9px 16px',
            background: moduleColor,
            color: 'white',
            borderRadius: 'var(--r)',
            fontSize: '12px',
            fontWeight: 600,
            transition: 'opacity .15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '.85'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
          }}
        >
          {ctaText}
        </div>
      </div>
    </Link>
  )
}

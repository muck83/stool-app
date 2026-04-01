import { Link } from 'react-router-dom'
import CompletionBar from './CompletionBar.jsx'

const EVIDENCE_LABELS = {
  fully_sourced: { text: 'Research-backed', bg: 'var(--teal-light)', color: 'var(--teal-dark)' },
  partial:       { text: 'Partially sourced', bg: 'var(--amber-bg)', color: 'var(--amber-dark)' },
  community:     { text: 'Community-sourced', bg: 'var(--purple-bg)', color: 'var(--purple-dark)' },
}

/**
 * Card for a country module shown on the /learn landing page.
 */
export default function ModuleCard({ mod, dimensions = [], completedCount = 0, badgeHeld = false }) {
  const bestStatus = dimensions.reduce((best, d) => {
    const rank = { fully_sourced: 3, partial: 2, community: 1 }
    return (rank[d.research_status] || 0) > (rank[best] || 0) ? d.research_status : best
  }, 'community')

  const label = EVIDENCE_LABELS[bestStatus] || EVIDENCE_LABELS.community

  return (
    <Link
      to={`/learn/${findSlug(mod.id)}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="card" style={{
        borderTop: `4px solid ${modColor(mod.id)}`,
        transition: 'box-shadow .18s, transform .18s',
        cursor: 'pointer',
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <h3 className="ct" style={{ margin: 0 }}>{mod.title}</h3>
          <span style={{
            fontSize: '11px', fontWeight: 500, padding: '3px 9px',
            borderRadius: '20px', background: label.bg, color: label.color,
          }}>
            {label.text}
          </span>
        </div>
        <p className="cs" style={{ marginBottom: '1rem' }}>{mod.tagline}</p>
        <CompletionBar completed={completedCount} total={dimensions.length} color={modColor(mod.id)} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--ink-4)' }}>
          <span>{dimensions.length} dimensions{mod.hofstede_data ? ' · 6D cultural profile' : ''}</span>
          {badgeHeld && (
            <span style={{
              padding: '1px 8px', borderRadius: '20px',
              background: `${modColor(mod.id)}15`, color: modColor(mod.id),
              fontWeight: 500, fontSize: '11px',
            }}>
              🔓 Unlocked
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

function findSlug(id) {
  const map = { 'ksa-001': 'saudi-arabia', 'china-001': 'china', 'korea-001': 'south-korea' }
  return map[id] || id
}

function modColor(id) {
  const map = { 'ksa-001': '#BA7517', 'china-001': '#D85A30', 'korea-001': '#534AB7' }
  return map[id] || 'var(--teal)'
}

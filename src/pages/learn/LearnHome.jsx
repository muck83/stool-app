import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModuleCard from '../../components/learn/ModuleCard.jsx'
import { fetchModules, fetchDimensions } from '../../lib/pd/queries.js'

/**
 * /learn — landing page showing all live PD modules.
 */
export default function LearnHome() {
  const [modules, setModules] = useState([])
  const [dimsByModule, setDimsByModule] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      const mods = await fetchModules()
      if (cancelled) return
      setModules(mods)

      // Fetch dimensions for each module in parallel
      const dimEntries = await Promise.all(
        mods.map(async m => [m.id, await fetchDimensions(m.id)])
      )
      if (cancelled) return
      setDimsByModule(Object.fromEntries(dimEntries))
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{
          fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none',
          display: 'inline-block', marginBottom: '12px',
        }}>
          ← Back to stool
        </Link>
        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--ink)',
          margin: '0 0 8px 0',
        }}>
          Learn
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: '600px' }}>
          Understand the cultural, institutional, and pedagogical context of the country
          you're moving to — before you sign. Each module is grounded in academic research
          and honest teacher experience.
        </p>
      </div>

      {/* Evidence label key */}
      <div style={{
        display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '1.5rem',
        padding: '12px 16px', background: 'var(--surface-2)', borderRadius: 'var(--r)',
        fontSize: '12px', color: 'var(--ink-3)',
      }}>
        <span>Evidence labels:</span>
        <span style={{ color: 'var(--teal-dark)' }}>◆ Research-backed</span>
        <span style={{ color: 'var(--amber-dark)' }}>◇ Partially sourced</span>
        <span style={{ color: 'var(--purple-dark)' }}>○ Community-sourced</span>
      </div>

      {/* Module cards */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--ink-4)' }}>
          Loading modules...
        </div>
      ) : modules.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>
            No modules available yet. The database migration may not have been run.
          </p>
          <p style={{ fontSize: '12px', color: 'var(--ink-4)', marginTop: '8px' }}>
            Run the SQL migration in Supabase, then refresh this page.
          </p>
        </div>
      ) : (
        <div className="g3" style={{ gap: '1.25rem' }}>
          {modules.map(mod => (
            <ModuleCard
              key={mod.id}
              mod={mod}
              dimensions={dimsByModule[mod.id] || []}
              completedCount={0}
            />
          ))}
        </div>
      )}

      {/* Footer note */}
      <div style={{
        marginTop: '2.5rem', padding: '16px 20px',
        background: 'var(--surface-2)', borderRadius: 'var(--r)',
        fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.6,
      }}>
        <strong style={{ color: 'var(--ink-2)' }}>About evidence labels:</strong> Every dimension
        is tagged with its sourcing quality. "Research-backed" means peer-reviewed, multiple sources.
        "Partially sourced" means some academic support, some inferred. "Community-sourced" means
        based on teacher reports and community posts. We show you what we know and how well we know it.
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModuleCard from '../../components/learn/ModuleCard.jsx'
import { fetchModules, fetchDimensions } from '../../lib/pd/queries.js'
import {
  completionCount,
  nextIncompleteDimension,
  isInProgress,
  hasBadge,
} from '../../lib/pd/progress.js'
import { MODULES } from '../../lib/slugMap.js'

/**
 * /learn — landing page showing all live PD modules.
 * Shows real localStorage progress and "continue where you left off" CTA.
 */
export default function LearnHome() {
  const [modules, setModules] = useState([])
  const [dimsByModule, setDimsByModule] = useState({})
  const [loading, setLoading] = useState(true)

  // Progress snapshots keyed by module id
  const [progressByModule, setProgressByModule] = useState({})

  useEffect(() => {
    let cancelled = false
    async function load() {
      const mods = await fetchModules()
      if (cancelled) return
      setModules(mods)

      // Fetch all dimensions in parallel
      const dimEntries = await Promise.all(
        mods.map(async m => [m.id, await fetchDimensions(m.id)])
      )
      if (cancelled) return
      const byMod = Object.fromEntries(dimEntries)
      setDimsByModule(byMod)

      // Build progress snapshot from localStorage
      const prog = {}
      for (const [id, dims] of Object.entries(byMod)) {
        const count = completionCount(id, dims)
        prog[id] = {
          completed: count,
          total: dims.length,
          nextDim: nextIncompleteDimension(id, dims),
          inProgress: count > 0 && count < dims.length,
          done: count === dims.length && dims.length > 0,
          badge: hasBadge(id),
        }
      }
      setProgressByModule(prog)
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [])

  // Find the module the user is actively working on (most recently started, not yet done)
  const resumeModule = !loading
    ? modules.find(m => progressByModule[m.id]?.inProgress)
    : null
  const resumeMeta = resumeModule
    ? MODULES.find(mm => mm.id === resumeModule.id)
    : null
  const resumeDim = resumeModule
    ? progressByModule[resumeModule.id]?.nextDim
    : null

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
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

      {/* "Continue where you left off" banner */}
      {resumeModule && resumeDim && resumeMeta && (
        <div style={{
          marginBottom: '1.5rem',
          padding: '14px 18px',
          background: `${resumeMeta.color}08`,
          border: `1px solid ${resumeMeta.color}30`,
          borderRadius: 'var(--rl)',
          display: 'flex', alignItems: 'center', gap: '12px',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: resumeMeta.color, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '2px' }}>
              Continue where you left off
            </div>
            <div style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
              {resumeModule.title} · D{resumeDim.dimension_number}: {resumeDim.title}
            </div>
          </div>
          <Link
            to={`/learn/${resumeMeta.slug}/${resumeDim.dimension_number}`}
            style={{
              padding: '8px 16px',
              background: resumeMeta.color, color: 'white',
              borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 600,
              textDecoration: 'none', flexShrink: 0,
              transition: 'opacity .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '.85' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            Resume →
          </Link>
        </div>
      )}

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
          {modules.map(mod => {
            const prog = progressByModule[mod.id] || { completed: 0, total: 0, badge: false }
            return (
              <ModuleCard
                key={mod.id}
                mod={mod}
                dimensions={dimsByModule[mod.id] || []}
                completedCount={prog.completed}
                badgeHeld={prog.badge}
              />
            )
          })}
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

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchModules, fetchDimensions, fetchScenarios } from '../../lib/pd/queries.js'
import DimensionCard from '../../components/learn/DimensionCard.jsx'
import CompletionBar from '../../components/learn/CompletionBar.jsx'
import HofstedeRadar from '../../components/learn/HofstedeRadar.jsx'

/**
 * /learn/:slug — module overview with Hofstede radar and dimension list.
 */
export default function ModulePage() {
  const { slug } = useParams()
  const modMeta = moduleBySlug(slug)

  const [mod, setMod] = useState(null)
  const [dimensions, setDimensions] = useState([])
  const [scenarioCount, setScenarioCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!modMeta) { setLoading(false); return }
      const [mods, dims, scenarios] = await Promise.all([
        fetchModules(),
        fetchDimensions(modMeta.id),
        fetchScenarios(modMeta.id),
      ])
      if (cancelled) return
      setMod(mods.find(m => m.id === modMeta.id) || null)
      setDimensions(dims)
      setScenarioCount(scenarios.length)
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [slug])

  if (!modMeta) {
    return (
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <Link to="/learn" style={{ fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none' }}>
          ← Back to modules
        </Link>
        <div className="card" style={{ marginTop: '1rem', textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>Module not found.</p>
        </div>
      </div>
    )
  }

  // Parse Hofstede scores from the module data
  const hofstedeScores = mod?.hofstede_data
    ? [mod.hofstede_data.PDI, mod.hofstede_data.IDV, mod.hofstede_data.MAS,
       mod.hofstede_data.UAI, mod.hofstede_data.LTO, mod.hofstede_data.IND]
    : null

  // Count research statuses
  const statusCounts = dimensions.reduce((acc, d) => {
    acc[d.research_status] = (acc[d.research_status] || 0) + 1
    return acc
  }, {})

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Breadcrumb */}
      <Link to="/learn" style={{
        fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none',
        display: 'inline-block', marginBottom: '12px',
      }}>
        ← Back to modules
      </Link>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--ink-4)' }}>
          Loading...
        </div>
      ) : !mod ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>
            Module data not found. The database migration may not have been run.
          </p>
        </div>
      ) : (
        <>
          {/* Module header */}
          <div style={{
            background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)',
            borderTop: `4px solid ${modMeta.color}`, padding: '2rem', marginBottom: '1.5rem',
          }}>
            <h1 style={{
              fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--ink)',
              margin: '0 0 4px 0',
            }}>
              {mod.title}
            </h1>
            <p style={{ fontSize: '15px', color: 'var(--ink-3)', margin: '0 0 1.25rem 0' }}>
              {mod.tagline}
            </p>

            <CompletionBar completed={0} total={dimensions.length} color={modMeta.color} />

            {/* Research backbone */}
            {mod.research_backbone && mod.research_backbone.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <div className="csec">Research backbone</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {mod.research_backbone.map((ref, i) => (
                    <span key={i} style={{ fontSize: '12px', color: 'var(--ink-3)' }}>
                      {ref.author} ({ref.year}) — <em>{ref.title}</em>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Status summary */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '1rem' }}>
              {statusCounts.fully_sourced > 0 && (
                <span className="pill pt">◆ {statusCounts.fully_sourced} research-backed</span>
              )}
              {statusCounts.partial > 0 && (
                <span className="pill pa">◇ {statusCounts.partial} partially sourced</span>
              )}
              {statusCounts.community > 0 && (
                <span className="pill pp">○ {statusCounts.community} community-sourced</span>
              )}
            </div>
          </div>

          {/* Two-column layout: radar + dimensions */}
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem', alignItems: 'start' }}>
            {/* Radar */}
            <div className="card" style={{ position: 'sticky', top: '70px' }}>
              {hofstedeScores && (
                <HofstedeRadar scores={hofstedeScores} country={mod.title} color={modMeta.color} />
              )}
            </div>

            {/* Dimension list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {dimensions.map(dim => (
                <DimensionCard
                  key={dim.id}
                  dimension={dim}
                  slug={slug}
                  isCompleted={false}
                  moduleColor={modMeta.color}
                />
              ))}

              {/* Scenarios link */}
              {scenarioCount > 0 && (
                <Link to={`/learn/${slug}/scenarios`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{
                    borderLeft: `3px solid ${modMeta.color}`,
                    cursor: 'pointer',
                    transition: 'box-shadow .18s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        width: '28px', height: '28px', borderRadius: '50%',
                        background: `${modMeta.color}15`, color: modMeta.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '14px', flexShrink: 0,
                      }}>
                        ?
                      </span>
                      <div>
                        <h4 style={{
                          fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)', margin: 0,
                        }}>
                          Practical scenarios
                        </h4>
                        <p style={{ fontSize: '12px', color: 'var(--ink-3)', margin: '2px 0 0 0' }}>
                          {scenarioCount} scenario{scenarioCount !== 1 ? 's' : ''} — common friction points with diagnosis and response
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchModules, fetchDimensions, fetchScenarios, fetchSimulations } from '../../lib/pd/queries.js'
import {
  completionCount,
  completionPercent,
  hasBadge,
  nextIncompleteDimension,
  isInProgress,
  simCompletionCount,
  isSimCompleted,
  checkAndMaybeAwardSimBadge,
  getSimProgress,
} from '../../lib/pd/progress.js'
import DimensionCard from '../../components/learn/DimensionCard.jsx'
import CompletionBar from '../../components/learn/CompletionBar.jsx'
import HofstedeRadar from '../../components/learn/HofstedeRadar.jsx'
import SimulationCard from '../../components/learn/SimulationCard.jsx'

/**
 * /learn/:slug — module overview with Hofstede radar and dimension list.
 * Shows real localStorage progress, sticky progress header, and "continue" CTA.
 */
export default function ModulePage() {
  const { slug } = useParams()
  const modMeta = moduleBySlug(slug)

  const [mod, setMod] = useState(null)
  const [dimensions, setDimensions] = useState([])
  const [simulations, setSimulations] = useState([])
  const [scenarioCount, setScenarioCount] = useState(0)
  const [loading, setLoading] = useState(true)

  // Progress derived from localStorage after data loads
  const [completedCount, setCompletedCount] = useState(0)
  const [nextDim, setNextDim] = useState(null)
  const [badgeHeld, setBadgeHeld] = useState(false)
  const [simCompletedCount, setSimCompletedCount] = useState(0)

  // Sticky progress bar — shown once user scrolls past the header card
  const [stickyVisible, setStickyVisible] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!modMeta) { setLoading(false); return }
      const [mods, dims, scenarios, sims] = await Promise.all([
        fetchModules(),
        fetchDimensions(modMeta.id),
        fetchScenarios(modMeta.id),
        fetchSimulations(modMeta.id),
      ])
      if (cancelled) return
      const found = mods.find(m => m.id === modMeta.id) || null
      setMod(found)
      setDimensions(dims)
      setSimulations(sims)
      setScenarioCount(scenarios.length)

      // Read progress from localStorage
      setCompletedCount(completionCount(modMeta.id, dims))
      setNextDim(nextIncompleteDimension(modMeta.id, dims))
      setBadgeHeld(hasBadge(modMeta.id))
      setSimCompletedCount(simCompletionCount(modMeta.id, sims))

      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [slug])

  // Sticky scroll listener
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const obs = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(header)
    return () => obs.disconnect()
  }, [loading])

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

  const pct = dimensions.length > 0 ? Math.round((completedCount / dimensions.length) * 100) : 0
  const allDone = completedCount === dimensions.length && dimensions.length > 0
  const started = isInProgress(modMeta.id, dimensions)

  // Parse Hofstede scores
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
    <>
      <style>{`
        @keyframes stickySlide {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* ── Sticky progress bar (appears on scroll) ── */}
      {stickyVisible && !loading && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: 'white', borderBottom: '1px solid var(--border)',
          padding: '10px 24px',
          display: 'flex', alignItems: 'center', gap: '16px',
          animation: 'stickySlide .2s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,.06)',
        }}>
          <span style={{ fontSize: '13px', color: 'var(--ink-3)', flexShrink: 0 }}>
            {modMeta.country}
          </span>
          <div style={{ flex: 1, maxWidth: '320px' }}>
            <div style={{ height: '4px', background: 'var(--surface-2)', borderRadius: '2px' }}>
              <div style={{
                height: '4px', borderRadius: '2px', background: modMeta.color,
                width: `${pct}%`, transition: 'width .6s ease',
              }} />
            </div>
          </div>
          <span style={{ fontSize: '12px', color: modMeta.color, fontWeight: 500, flexShrink: 0 }}>
            {pct}%
          </span>
          {nextDim && !allDone && (
            <a href={`/learn/${slug}/${nextDim.dimension_number}`} style={{
              fontSize: '12px', fontWeight: 600, color: 'white',
              background: modMeta.color, padding: '5px 12px',
              borderRadius: 'var(--r)', textDecoration: 'none', flexShrink: 0,
            }}>
              Continue →
            </a>
          )}
        </div>
      )}

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
            {/* Module header — observed for sticky trigger */}
            <div ref={headerRef} style={{
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

              <CompletionBar
                completed={completedCount}
                total={dimensions.length}
                color={modMeta.color}
              />

              {/* Continue / start CTA */}
              {allDone ? (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '8px 16px',
                  background: `${modMeta.color}10`, border: `1px solid ${modMeta.color}30`,
                  borderRadius: 'var(--r)', fontSize: '13px', color: modMeta.color, fontWeight: 500,
                }}>
                  <span>✓</span> Module complete
                  {badgeHeld && <span style={{ marginLeft: '4px' }}>· Salary data unlocked 🔓</span>}
                </div>
              ) : nextDim ? (
                <Link to={`/learn/${slug}/${nextDim.dimension_number}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '9px 18px',
                    background: modMeta.color, color: 'white',
                    borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 600,
                    cursor: 'pointer', transition: 'opacity .15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '.85' }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                  >
                    {started ? '→ Continue:' : '→ Start with:'}{' '}
                    D{nextDim.dimension_number}: {nextDim.title}
                  </div>
                </Link>
              ) : null}

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

              {/* Status summary pills */}
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

            {/* Simulations section (primary learning path) */}
            {simulations.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  fontSize: '12px', fontWeight: 600, color: 'var(--ink-4)',
                  textTransform: 'uppercase', letterSpacing: '.05em',
                  marginBottom: '12px',
                }}>
                  Simulations
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {simulations.map(sim => (
                    <SimulationCard
                      key={sim.id}
                      simulation={sim}
                      moduleSlug={slug}
                      moduleColor={modMeta.color}
                      completed={isSimCompleted(sim.id)}
                      inProgress={getSimProgress(sim.id) !== null && !isSimCompleted(sim.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Two-column layout: radar + dimensions */}
            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem', alignItems: 'start' }}>
              {/* Radar */}
              <div className="card" style={{ position: 'sticky', top: '70px' }}>
                {hofstedeScores && (
                  <HofstedeRadar scores={hofstedeScores} country={mod.title} color={modMeta.color} />
                )}
              </div>

              {/* Dimension list + scenarios */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Reference library header */}
                {dimensions.length > 0 && (
                  <div style={{
                    fontSize: '12px', fontWeight: 600, color: 'var(--ink-4)',
                    textTransform: 'uppercase', letterSpacing: '.05em',
                    marginBottom: '0px',
                  }}>
                    Reference Library
                  </div>
                )}

                {dimensions.map(dim => (
                  <DimensionCard
                    key={dim.id}
                    dimension={dim}
                    slug={slug}
                    isCompleted={completionCount(modMeta.id, [dim]) > 0}
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
    </>
  )
}

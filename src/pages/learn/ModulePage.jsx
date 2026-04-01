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
  isExamUnlocked,
  getModuleBadgeRecord,
} from '../../lib/pd/progress.js'
import DimensionCard from '../../components/learn/DimensionCard.jsx'
import CompletionBar from '../../components/learn/CompletionBar.jsx'
import SimulationCard from '../../components/learn/SimulationCard.jsx'
import { isVocabCompleted } from './VocabPage.jsx'
import { isCulturalVocabCompleted } from './CulturalVocabPage.jsx'
import { CULTURAL_VOCAB_BY_SLUG } from '../../../vocab/country-cultural-vocab.jsx'

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
  const [examUnlocked, setExamUnlocked] = useState(false)
  const [badgeRecord, setBadgeRecord] = useState(null)
  const [vocabDone, setVocabDone] = useState(false)
  const [culturalVocabDone, setCulturalVocabDone] = useState(false)

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
      setExamUnlocked(isExamUnlocked(modMeta.id, dims))
      setBadgeRecord(getModuleBadgeRecord(modMeta.id))
      setVocabDone(isVocabCompleted(modMeta.id))
      setCulturalVocabDone(isCulturalVocabCompleted(modMeta.id))

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

              {/* Exam status + badge */}
              <div style={{
                marginTop: '1rem', paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
              }}>
                {badgeRecord ? (
                  <>
                    {badgeRecord.badge === 'distinction' && (
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#8B5CF6', background: '#f5f3ff', border: '1px solid #d8b4fe', borderRadius: '20px', padding: '4px 12px' }}>
                        🏅 Distinction — {Math.round((badgeRecord.moduleScore || 0) * 100)}%
                      </span>
                    )}
                    {badgeRecord.badge === 'mastery' && (
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#D97706', background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '20px', padding: '4px 12px' }}>
                        ⭐ Mastery — {Math.round((badgeRecord.moduleScore || 0) * 100)}%
                      </span>
                    )}
                    {badgeRecord.badge === 'completed' && (
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#059669', background: '#f0fdf4', border: '1px solid #6ee7b7', borderRadius: '20px', padding: '4px 12px' }}>
                        ✓ Completed — {Math.round((badgeRecord.moduleScore || 0) * 100)}%
                      </span>
                    )}
                    <Link to={`/learn/${slug}/exam`} style={{ fontSize: '12px', color: modMeta.color, textDecoration: 'none', fontWeight: 500 }}>
                      View exam results →
                    </Link>
                  </>
                ) : examUnlocked ? (
                  <Link to={`/learn/${slug}/exam`} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '12px', fontWeight: 600, color: 'white',
                    background: modMeta.color, padding: '5px 14px',
                    borderRadius: '20px', textDecoration: 'none',
                  }}>
                    📋 Take Module Exam →
                  </Link>
                ) : (
                  <span style={{
                    fontSize: '12px', color: 'var(--ink-4)',
                    background: 'var(--surface-2)', border: '1px solid var(--border)',
                    borderRadius: '20px', padding: '4px 12px',
                  }}>
                    🔒 Exam unlocks after all dimensions
                  </span>
                )}
              </div>

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

            {/* Vocab Lab entry card */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                fontSize: '12px', fontWeight: 600, color: 'var(--ink-4)',
                textTransform: 'uppercase', letterSpacing: '.05em',
                marginBottom: '12px',
              }}>
                Vocabulary Lab
              </div>
              <Link to={`/learn/${slug}/vocab`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  borderLeft: `3px solid ${modMeta.color}`,
                  cursor: 'pointer',
                  transition: 'box-shadow .18s',
                  display: 'flex', alignItems: 'center', gap: '14px',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
                >
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: `${modMeta.color}15`, color: modMeta.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>
                    📖
                  </span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)', margin: '0 0 2px 0' }}>
                      Vocabulary Lab
                    </h4>
                    <p style={{ fontSize: '12px', color: 'var(--ink-3)', margin: 0 }}>
                      Key terms, scenario practice, and mastery check · 15 min
                    </p>
                  </div>
                  {vocabDone ? (
                    <span style={{
                      fontSize: '11px', fontWeight: 700, color: '#1a7a50',
                      background: '#f0fdf6', border: '1px solid #bbf0d6',
                      borderRadius: '20px', padding: '3px 10px', flexShrink: 0,
                    }}>
                      ✓ Done
                    </span>
                  ) : (
                    <span style={{
                      fontSize: '11px', fontWeight: 600, color: modMeta.color,
                      background: `${modMeta.color}10`, border: `1px solid ${modMeta.color}30`,
                      borderRadius: '20px', padding: '3px 10px', flexShrink: 0,
                    }}>
                      Start →
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Cultural Vocabulary entry card */}
            <div style={{ marginTop: 8 }}>
              <div style={{
                fontSize: '12px', fontWeight: 600, color: 'var(--ink-4)',
                textTransform: 'uppercase', letterSpacing: '.05em',
                marginBottom: '12px',
              }}>
                Cultural Vocabulary
              </div>
              <Link to={`/learn/${slug}/cultural-vocab`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  borderLeft: `3px solid ${modMeta.color}`,
                  display: 'flex', alignItems: 'center', gap: '14px',
                  padding: '14px 16px', cursor: 'pointer',
                }}>
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>
                    🌐
                  </span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)', margin: '0 0 4px 0' }}>
                      Five Cultural Terms
                    </h4>
                    {(() => {
                      const cv = CULTURAL_VOCAB_BY_SLUG[slug]
                      const hook = cv?.openingHook?.situation?.[0]
                      if (hook && !culturalVocabDone) {
                        const preview = hook.length > 110 ? hook.slice(0, 110).trimEnd() + '\u2026' : hook
                        return (
                          <p style={{ fontSize: '12px', color: 'var(--ink-3)', margin: 0, lineHeight: 1.5, fontStyle: 'italic' }}>
                            {preview}
                          </p>
                        )
                      }
                      return (
                        <p style={{ fontSize: '12px', color: 'var(--ink-3)', margin: 0 }}>
                          Insider concepts with no clean English equivalent · 10 min
                        </p>
                      )
                    })()}
                  </div>
                  {culturalVocabDone ? (
                    <span style={{
                      fontSize: '11px', fontWeight: 700, color: '#1a7a50',
                      background: '#f0fdf6', border: '1px solid #bbf0d6',
                      borderRadius: '20px', padding: '3px 10px', flexShrink: 0,
                    }}>
                      ✓ Done
                    </span>
                  ) : (
                    <span style={{
                      fontSize: '11px', fontWeight: 600, color: modMeta.color,
                      background: `${modMeta.color}10`, border: `1px solid ${modMeta.color}30`,
                      borderRadius: '20px', padding: '3px 10px', flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}>
                      Find out →
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Dimension list + scenarios — full width */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {dimensions.length > 0 && (
                <div style={{
                  fontSize: '12px', fontWeight: 600, color: 'var(--ink-4)',
                  textTransform: 'uppercase', letterSpacing: '.05em',
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
                        <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--ink)', margin: 0 }}>
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
          </>
        )}
      </div>
    </>
  )
}

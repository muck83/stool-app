import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useSearchParams } from 'react-router-dom'
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
 * /learn/:slug — module overview with tabbed navigation.
 * Tabs: Overview · Simulations · Dimensions · Vocab & More
 */

// ─── Tab navigation ───────────────────────────────────────────────────────────
function TabNav({ active, setActive, color, counts }) {
  const tabs = [
    { id: 'overview',    label: 'Overview' },
    { id: 'simulations', label: 'Simulations', count: counts?.sims },
    { id: 'dimensions',  label: 'Dimensions',  count: counts?.dims },
    { id: 'vocab',       label: 'Vocab & More' },
  ]
  return (
    <div style={{
      borderBottom: '1px solid var(--border)',
      marginBottom: '1.5rem',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
    }}>
      <div style={{ display: 'flex', gap: 0, minWidth: 'max-content' }}>
        {tabs.map(t => {
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                padding: '10px 16px',
                fontSize: 13, fontWeight: 600,
                border: 'none', cursor: 'pointer',
                background: 'transparent',
                color: isActive ? color : 'var(--ink-4)',
                borderBottom: isActive ? `2px solid ${color}` : '2px solid transparent',
                whiteSpace: 'nowrap',
                transition: 'color .15s',
                display: 'flex', alignItems: 'center', gap: 5,
              }}
            >
              {t.label}
              {t.count != null && (
                <span style={{
                  fontSize: 10.5, fontWeight: 700,
                  padding: '1px 6px', borderRadius: 10,
                  background: isActive ? `${color}18` : 'var(--surface-2)',
                  color: isActive ? color : 'var(--ink-4)',
                }}>
                  {t.count.done}/{t.count.total}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function ModulePage() {
  const { slug } = useParams()
  const modMeta = moduleBySlug(slug)

  const [mod, setMod] = useState(null)
  const [dimensions, setDimensions] = useState([])
  const [simulations, setSimulations] = useState([])
  const [scenarioCount, setScenarioCount] = useState(0)
  const [loading, setLoading] = useState(true)

  const [completedCount, setCompletedCount] = useState(0)
  const [nextDim, setNextDim] = useState(null)
  const [badgeHeld, setBadgeHeld] = useState(false)
  const [simCompletedCount, setSimCompletedCount] = useState(0)
  const [examUnlocked, setExamUnlocked] = useState(false)
  const [badgeRecord, setBadgeRecord] = useState(null)
  const [vocabDone, setVocabDone] = useState(false)
  const [culturalVocabDone, setCulturalVocabDone] = useState(false)

  const [searchParams] = useSearchParams()
  const VALID_TABS = ['overview', 'simulations', 'dimensions', 'vocab']
  const initialTab = VALID_TABS.includes(searchParams.get('tab')) ? searchParams.get('tab') : 'overview'
  const [activeTab, setActiveTab] = useState(initialTab)
  const [showResearch, setShowResearch] = useState(false)

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

  const statusCounts = dimensions.reduce((acc, d) => {
    acc[d.research_status] = (acc[d.research_status] || 0) + 1
    return acc
  }, {})

  // Count completed sims for tab badge
  const simsCompletedCount = simulations.filter(s => isSimCompleted(s.id)).length

  return (
    <>
      <style>{`
        @keyframes stickySlide {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/* ── Sticky progress bar ── */}
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
            {/* ── Module header ── */}
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

              {/* Exam status */}
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

                {/* Status pills */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginLeft: 'auto' }}>
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
            </div>

            {/* ── Tab navigation ── */}
            <TabNav
              active={activeTab}
              setActive={setActiveTab}
              color={modMeta.color}
              counts={{
                dims: { done: completedCount,      total: dimensions.length },
                sims: { done: simsCompletedCount,  total: simulations.length },
              }}
            />

            {/* ══════════════════════════════════════════
                TAB: OVERVIEW
            ══════════════════════════════════════════ */}
            {activeTab === 'overview' && (
              <div>
                {/* What's in this module */}
                <div style={{
                  background: 'white', border: '1px solid var(--border)',
                  borderRadius: 'var(--rl)', padding: '1.5rem', marginBottom: '1.25rem',
                }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '1rem' }}>
                    What's in this module
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* Dimensions summary */}
                    <button
                      onClick={() => setActiveTab('dimensions')}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '10px 14px',
                        background: `${modMeta.color}08`,
                        border: `1px solid ${modMeta.color}22`,
                        borderRadius: 'var(--r)', cursor: 'pointer',
                        textAlign: 'left', width: '100%',
                        transition: 'background .15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${modMeta.color}14` }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${modMeta.color}08` }}
                    >
                      <span style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: `${modMeta.color}18`, color: modMeta.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 15, fontWeight: 700, flexShrink: 0,
                      }}>
                        {dimensions.length}
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>
                          Dimensions
                        </div>
                        <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 1 }}>
                          {completedCount} of {dimensions.length} read · Reference library
                        </div>
                      </div>
                      <span style={{ fontSize: 12, color: modMeta.color, fontWeight: 600 }}>View →</span>
                    </button>

                    {/* Simulations summary */}
                    {simulations.length > 0 && (
                      <button
                        onClick={() => setActiveTab('simulations')}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '10px 14px',
                          background: `${modMeta.color}08`,
                          border: `1px solid ${modMeta.color}22`,
                          borderRadius: 'var(--r)', cursor: 'pointer',
                          textAlign: 'left', width: '100%',
                          transition: 'background .15s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${modMeta.color}14` }}
                        onMouseLeave={e => { e.currentTarget.style.background = `${modMeta.color}08` }}
                      >
                        <span style={{
                          width: 32, height: 32, borderRadius: '50%',
                          background: `${modMeta.color}18`, color: modMeta.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 15, fontWeight: 700, flexShrink: 0,
                        }}>
                          {simulations.length}
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>
                            Simulations
                          </div>
                          <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 1 }}>
                            {simsCompletedCount} of {simulations.length} completed · Interactive scenarios
                          </div>
                        </div>
                        <span style={{ fontSize: 12, color: modMeta.color, fontWeight: 600 }}>View →</span>
                      </button>
                    )}

                    {/* Vocab summary */}
                    <button
                      onClick={() => setActiveTab('vocab')}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '10px 14px',
                        background: `${modMeta.color}08`,
                        border: `1px solid ${modMeta.color}22`,
                        borderRadius: 'var(--r)', cursor: 'pointer',
                        textAlign: 'left', width: '100%',
                        transition: 'background .15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${modMeta.color}14` }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${modMeta.color}08` }}
                    >
                      <span style={{
                        width: 32, height: 32, borderRadius: '50%',
                        background: `${modMeta.color}18`, color: modMeta.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, flexShrink: 0,
                      }}>
                        📖
                      </span>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>
                          Vocabulary & Scenarios
                        </div>
                        <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 1 }}>
                          Key terms, cultural concepts, and practical friction-point scenarios
                        </div>
                      </div>
                      <span style={{ fontSize: 12, color: modMeta.color, fontWeight: 600 }}>View →</span>
                    </button>
                  </div>
                </div>

                {/* Research backbone — collapsed by default */}
                {mod.research_backbone && mod.research_backbone.length > 0 && (
                  <div style={{
                    background: 'white', border: '1px solid var(--border)',
                    borderRadius: 'var(--rl)', overflow: 'hidden',
                  }}>
                    <button
                      onClick={() => setShowResearch(r => !r)}
                      style={{
                        width: '100%', padding: '14px 18px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        background: 'transparent', border: 'none', cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                        Research backbone — {mod.research_backbone.length} sources
                      </span>
                      <span style={{ fontSize: 13, color: 'var(--ink-4)', transition: 'transform .2s', transform: showResearch ? 'rotate(180deg)' : 'none' }}>
                        ▾
                      </span>
                    </button>
                    {showResearch && (
                      <div style={{ padding: '0 18px 14px', display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid var(--border)' }}>
                        {mod.research_backbone.map((ref, i) => (
                          <span key={i} style={{ fontSize: '12px', color: 'var(--ink-3)', padding: '4px 0' }}>
                            {ref.author} ({ref.year}) — <em>{ref.title}</em>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ══════════════════════════════════════════
                TAB: SIMULATIONS
            ══════════════════════════════════════════ */}
            {activeTab === 'simulations' && (
              <div>
                {simulations.length > 0 ? (
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
                ) : (
                  <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>
                      No simulations available for this module yet.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ══════════════════════════════════════════
                TAB: DIMENSIONS
            ══════════════════════════════════════════ */}
            {activeTab === 'dimensions' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {dimensions.length > 0 ? (
                  dimensions.map(dim => (
                    <DimensionCard
                      key={dim.id}
                      dimension={dim}
                      slug={slug}
                      isCompleted={completionCount(modMeta.id, [dim]) > 0}
                      moduleColor={modMeta.color}
                    />
                  ))
                ) : (
                  <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>
                      No dimensions loaded.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ══════════════════════════════════════════
                TAB: VOCAB & MORE
            ══════════════════════════════════════════ */}
            {activeTab === 'vocab' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Vocabulary Lab */}
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

                {/* Cultural Vocabulary */}
                <Link to={`/learn/${slug}/cultural-vocab`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{
                    borderLeft: `3px solid ${modMeta.color}`,
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '14px 16px', cursor: 'pointer',
                    transition: 'box-shadow .18s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <span style={{ fontSize: '24px', flexShrink: 0 }}>🌐</span>
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

                {/* Practical scenarios */}
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
            )}
          </>
        )}
      </div>
    </>
  )
}

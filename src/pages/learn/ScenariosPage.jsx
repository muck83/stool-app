import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchScenarios } from '../../lib/pd/queries.js'

/**
 * /learn/:slug/scenarios — scenario bank for a module.
 * Each scenario shows setup → common misread → actual dynamic → response framework.
 */
export default function ScenariosPage() {
  const { slug } = useParams()
  const modMeta = moduleBySlug(slug)
  const [scenarios, setScenarios] = useState([])
  const [expandedId, setExpandedId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!modMeta) { setLoading(false); return }
      const data = await fetchScenarios(modMeta.id)
      if (cancelled) return
      setScenarios(data)
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [slug])

  if (loading) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem', color: 'var(--ink-4)', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  if (!modMeta) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <Link to="/learn" style={{ fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none' }}>← Back to modules</Link>
        <div className="card" style={{ marginTop: '1rem', textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>Module not found.</p>
        </div>
      </div>
    )
  }

  const SOURCE_LABELS = {
    academic: { text: 'Academic', bg: 'var(--teal-light)', color: 'var(--teal-dark)' },
    practitioner: { text: 'Practitioner', bg: 'var(--amber-bg)', color: 'var(--amber-dark)' },
    community_submitted: { text: 'Community', bg: 'var(--purple-bg)', color: 'var(--purple-dark)' },
  }

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Breadcrumb */}
      <Link to={`/learn/${slug}`} style={{
        fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none',
        display: 'inline-block', marginBottom: '16px',
      }}>
        ← {modMeta.country} module
      </Link>

      <h1 style={{
        fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--ink)',
        margin: '0 0 8px 0',
      }}>
        Practical Scenarios — {modMeta.country}
      </h1>
      <p style={{
        fontSize: '14px', color: 'var(--ink-3)', lineHeight: 1.6,
        marginBottom: '1.5rem', maxWidth: '600px',
      }}>
        Each scenario presents a common friction point, the misread most Western-trained
        teachers default to, what's actually happening, and a response framework.
      </p>

      {scenarios.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>No scenarios available yet.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {scenarios.map(sc => {
            const isOpen = expandedId === sc.id
            const srcLabel = SOURCE_LABELS[sc.source_type] || SOURCE_LABELS.community_submitted
            const framework = Array.isArray(sc.response_framework) ? sc.response_framework : []

            return (
              <div key={sc.id} className="card" style={{
                borderLeft: `3px solid ${modMeta.color}`,
                cursor: 'pointer',
              }}>
                {/* Title bar — click to expand */}
                <div
                  onClick={() => setExpandedId(isOpen ? null : sc.id)}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--ink)', margin: 0,
                  }}>
                    {sc.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <span style={{
                      fontSize: '10px', fontWeight: 500, padding: '2px 8px',
                      borderRadius: '20px', background: srcLabel.bg, color: srcLabel.color,
                    }}>
                      {srcLabel.text}
                    </span>
                    <span style={{
                      fontSize: '16px', color: 'var(--ink-4)',
                      transition: 'transform .2s',
                      transform: isOpen ? 'rotate(90deg)' : 'none',
                    }}>
                      ›
                    </span>
                  </div>
                </div>

                {/* Setup preview when collapsed */}
                {!isOpen && (
                  <p style={{
                    fontSize: '13px', color: 'var(--ink-3)', lineHeight: 1.5,
                    margin: '8px 0 0 0',
                    overflow: 'hidden', textOverflow: 'ellipsis',
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                  }}>
                    {sc.setup}
                  </p>
                )}

                {/* Expanded content */}
                {isOpen && (
                  <div style={{ marginTop: '16px' }}>
                    {/* Setup */}
                    <div style={{ marginBottom: '16px' }}>
                      <div className="csec" style={{ marginTop: 0 }}>What happens</div>
                      <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>
                        {sc.setup}
                      </p>
                    </div>

                    {/* Common misread */}
                    <div style={{
                      padding: '12px 16px', background: 'var(--coral-bg)',
                      borderLeft: '3px solid var(--coral)', borderRadius: '0 var(--r) var(--r) 0',
                      marginBottom: '16px',
                    }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--coral-dark)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '4px' }}>
                        Common misread
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--coral-dark)', lineHeight: 1.6, margin: 0 }}>
                        {sc.common_misread}
                      </p>
                    </div>

                    {/* Actual dynamic */}
                    <div style={{
                      padding: '12px 16px', background: 'var(--teal-light)',
                      borderLeft: '3px solid var(--teal)', borderRadius: '0 var(--r) var(--r) 0',
                      marginBottom: '16px',
                    }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--teal-dark)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '4px' }}>
                        What's actually happening
                      </div>
                      <p style={{ fontSize: '14px', color: 'var(--teal-dark)', lineHeight: 1.6, margin: 0 }}>
                        {sc.actual_dynamic}
                      </p>
                    </div>

                    {/* Response framework */}
                    {framework.length > 0 && (
                      <div>
                        <div className="csec">Response framework</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {framework.map((step, i) => (
                            <div key={i} style={{
                              display: 'flex', gap: '10px', alignItems: 'flex-start',
                              fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.6,
                            }}>
                              <span style={{
                                width: '22px', height: '22px', borderRadius: '50%',
                                background: `${modMeta.color}15`, color: modMeta.color,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '11px', fontWeight: 600, flexShrink: 0, marginTop: '2px',
                              }}>
                                {i + 1}
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Back link */}
      <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
        <Link to={`/learn/${slug}`} style={{
          fontSize: '13px', color: modMeta.color, textDecoration: 'none',
        }}>
          ← Back to {modMeta.country} module
        </Link>
      </div>
    </div>
  )
}

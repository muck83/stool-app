import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchDimensions } from '../../lib/pd/queries.js'

const STATUS_LABELS = {
  fully_sourced: { text: 'Research-backed', bg: 'var(--teal-light)', color: 'var(--teal-dark)' },
  partial:       { text: 'Partially sourced', bg: 'var(--amber-bg)', color: 'var(--amber-dark)' },
  community:     { text: 'Community-sourced', bg: 'var(--purple-bg)', color: 'var(--purple-dark)' },
}

/**
 * /learn/:slug/:dimension — detail view for a single dimension.
 * Renders content sections from the JSONB `content` field.
 */
export default function DimensionPage() {
  const { slug, dimension: dimNum } = useParams()
  const modMeta = moduleBySlug(slug)
  const [dim, setDim] = useState(null)
  const [allDims, setAllDims] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!modMeta) { setLoading(false); return }
      const dims = await fetchDimensions(modMeta.id)
      if (cancelled) return
      setAllDims(dims)
      setDim(dims.find(d => d.dimension_number === parseInt(dimNum, 10)) || null)
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [slug, dimNum])

  if (loading) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem', color: 'var(--ink-4)', textAlign: 'center' }}>
        Loading...
      </div>
    )
  }

  if (!modMeta || !dim) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <Link to={modMeta ? `/learn/${slug}` : '/learn'} style={{ fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none' }}>
          ← Back
        </Link>
        <div className="card" style={{ marginTop: '1rem', textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>Dimension not found.</p>
        </div>
      </div>
    )
  }

  const content = dim.content || {}
  const sections = content.sections || []
  const citations = content.citations || []
  const label = STATUS_LABELS[dim.research_status] || STATUS_LABELS.community

  // Nav: prev/next dimensions
  const currentIdx = allDims.findIndex(d => d.id === dim.id)
  const prev = currentIdx > 0 ? allDims[currentIdx - 1] : null
  const next = currentIdx < allDims.length - 1 ? allDims[currentIdx + 1] : null

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Breadcrumb */}
      <Link to={`/learn/${slug}`} style={{
        fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none',
        display: 'inline-block', marginBottom: '16px',
      }}>
        ← {modMeta.country} module
      </Link>

      {/* Header */}
      <div style={{
        background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)',
        borderTop: `4px solid ${modMeta.color}`, padding: '2rem', marginBottom: '1.5rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: `${modMeta.color}15`, color: modMeta.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '14px', fontWeight: 600, flexShrink: 0,
            }}>
              D{dim.dimension_number}
            </span>
            <h1 style={{
              fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--ink)', margin: 0,
            }}>
              {dim.title}
            </h1>
          </div>
          <span style={{
            fontSize: '11px', fontWeight: 500, padding: '3px 10px',
            borderRadius: '20px', background: label.bg, color: label.color,
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            {label.text}
          </span>
        </div>

        {content.summary && (
          <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>
            {content.summary}
          </p>
        )}
      </div>

      {/* Content sections */}
      {sections.map((section, si) => (
        <div key={si} className="card" style={{ marginBottom: '1rem' }}>
          <h3 style={{
            fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--ink)',
            margin: '0 0 12px 0',
          }}>
            {section.heading}
          </h3>
          {section.items && section.items.map((item, ii) => (
            <div key={ii} style={{
              fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7,
              padding: '6px 0 6px 16px',
              borderLeft: `2px solid ${modMeta.color}20`,
              marginBottom: '8px',
            }}>
              {item}
            </div>
          ))}
        </div>
      ))}

      {/* Citations */}
      {citations.length > 0 && (
        <div style={{
          marginTop: '1.5rem', padding: '16px 20px',
          background: 'var(--surface-2)', borderRadius: 'var(--r)',
        }}>
          <div className="csec" style={{ marginTop: 0 }}>Sources</div>
          {citations.map((c, i) => (
            <div key={i} style={{ fontSize: '12px', color: 'var(--ink-3)', marginBottom: '4px' }}>
              {c.author} ({c.year})
              {c.doi && (
                <a href={`https://doi.org/${c.doi}`} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--teal)', marginLeft: '6px', fontSize: '11px' }}>
                  DOI ↗
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Prev/Next navigation */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: '2rem',
        paddingTop: '1.5rem', borderTop: '1px solid var(--border)',
      }}>
        {prev ? (
          <Link to={`/learn/${slug}/${prev.dimension_number}`}
            style={{ fontSize: '13px', color: modMeta.color, textDecoration: 'none' }}>
            ← D{prev.dimension_number}: {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link to={`/learn/${slug}/${next.dimension_number}`}
            style={{ fontSize: '13px', color: modMeta.color, textDecoration: 'none' }}>
            D{next.dimension_number}: {next.title} →
          </Link>
        ) : (
          <Link to={`/learn/${slug}/scenarios`}
            style={{ fontSize: '13px', color: modMeta.color, textDecoration: 'none' }}>
            Practical scenarios →
          </Link>
        )}
      </div>
    </div>
  )
}

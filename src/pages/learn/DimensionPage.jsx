import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchDimensions, fetchQuizQuestions } from '../../lib/pd/queries.js'
import {
  isCompleted,
  markComplete,
  getQuizAnswer,
} from '../../lib/pd/progress.js'
import QuizCheckpoint from '../../components/learn/QuizCheckpoint.jsx'

const STATUS_LABELS = {
  fully_sourced: { text: 'Research-backed', bg: 'var(--teal-light)', color: 'var(--teal-dark)' },
  partial:       { text: 'Partially sourced', bg: 'var(--amber-bg)', color: 'var(--amber-dark)' },
  community:     { text: 'Community-sourced', bg: 'var(--purple-bg)', color: 'var(--purple-dark)' },
}

/** Rough reading-time estimate based on word count. */
function readingTime(sections = []) {
  const words = sections
    .flatMap(s => s.items || [])
    .join(' ')
    .split(/\s+/).length
  const mins = Math.max(1, Math.round(words / 200))
  return `${mins} min read`
}

/**
 * /learn/:slug/:dimension — detail view for a single dimension.
 * Renders content sections then a QuizCheckpoint.
 * Answering the checkpoint marks the dimension complete.
 */
export default function DimensionPage() {
  const { slug, dimension: dimNum } = useParams()
  const navigate = useNavigate()
  const modMeta = moduleBySlug(slug)

  const [dim, setDim]           = useState(null)
  const [allDims, setAllDims]   = useState([])
  const [question, setQuestion] = useState(null)   // checkpoint question for this dim
  const [loading, setLoading]   = useState(true)
  const [done, setDone]         = useState(false)
  const [justCompleted, setJustCompleted] = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!modMeta) { setLoading(false); return }
      const [dims, qs] = await Promise.all([
        fetchDimensions(modMeta.id),
        fetchQuizQuestions(modMeta.id, 'checkpoint'),
      ])
      if (cancelled) return
      const found = dims.find(d => d.dimension_number === parseInt(dimNum, 10)) || null
      setAllDims(dims)
      setDim(found)
      if (found) {
        setDone(isCompleted(modMeta.id, found.id))
        const q = qs.find(q => q.dimension_number === found.dimension_number) || null
        setQuestion(q)
      }
      setLoading(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    }
    load()
    return () => { cancelled = true }
  }, [slug, dimNum])

  // Keyboard navigation: ← prev, → next
  const handleKey = useCallback((e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
    const currentIdx = allDims.findIndex(d => d.id === dim?.id)
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      if (currentIdx < allDims.length - 1) {
        navigate(`/learn/${slug}/${allDims[currentIdx + 1].dimension_number}`)
      } else {
        navigate(`/learn/${slug}/exam`)
      }
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      if (currentIdx > 0) {
        navigate(`/learn/${slug}/${allDims[currentIdx - 1].dimension_number}`)
      }
    }
  }, [allDims, dim, navigate, slug])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  /**
   * Called by QuizCheckpoint after the teacher selects an answer.
   * Marks the dimension complete (checkpoint submission = completion).
   */
  function handleAnswered({ isCorrect }) {
    if (!dim || done) return
    markComplete(modMeta.id, dim.id)
    setDone(true)
    setJustCompleted(true)
    // Badge flash — subtle page background pulse
    document.body.classList.add('pd-badge-flash')
    setTimeout(() => document.body.classList.remove('pd-badge-flash'), 800)
    setTimeout(() => setJustCompleted(false), 2000)
  }

  // ── loading / error states ──────────────────────────────────────────────

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

  const content   = dim.content || {}
  const sections  = content.sections || []
  const citations = content.citations || []
  const label     = STATUS_LABELS[dim.research_status] || STATUS_LABELS.community

  // Nav: prev/next
  const currentIdx = allDims.findIndex(d => d.id === dim.id)
  const prev = currentIdx > 0 ? allDims[currentIdx - 1] : null
  const next = currentIdx < allDims.length - 1 ? allDims[currentIdx + 1] : null
  const isLastDimension = currentIdx === allDims.length - 1

  // Determine if quiz has already been answered (for restoring state on revisit)
  const existingAnswer = question ? getQuizAnswer(modMeta.id, question.id) : null

  return (
    <>
      <style>{`
        @keyframes pd-flash {
          0%   { background: white; }
          20%  { background: var(--teal-light); }
          100% { background: white; }
        }
        .pd-badge-flash { animation: pd-flash .7s ease-out; }
        @keyframes dimFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); }
          60%  { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
      `}</style>

      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(10px)',
        transition: 'opacity .35s ease, transform .35s ease',
      }}>

        {/* Breadcrumb */}
        <Link to={`/learn/${slug}`} style={{
          fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none',
          display: 'inline-block', marginBottom: '16px',
        }}>
          ← {modMeta.country} module
        </Link>

        {/* Header card */}
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px', flexShrink: 0 }}>
              <span style={{
                fontSize: '11px', fontWeight: 500, padding: '3px 10px',
                borderRadius: '20px', background: label.bg, color: label.color,
                whiteSpace: 'nowrap',
              }}>
                {label.text}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--ink-4)' }}>
                {readingTime(sections)}
              </span>
            </div>
          </div>

          {content.summary && (
            <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>
              {content.summary}
            </p>
          )}
        </div>

        {/* Content sections */}
        {sections.map((section, si) => (
          <div key={si} className="card" style={{
            marginBottom: '1rem',
            animation: visible ? `dimFadeUp .35s ${si * 0.06 + 0.15}s ease both` : undefined,
          }}>
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

        {/* ── Knowledge Check (QuizCheckpoint) ──────────────────────────── */}
        {question ? (
          <QuizCheckpoint
            moduleId={modMeta.id}
            question={question}
            color={modMeta.color}
            onAnswered={handleAnswered}
          />
        ) : (
          /* Fallback: no quiz question in DB — use old "Mark complete" */
          <div style={{
            marginTop: '2rem', padding: '1.25rem 1.5rem',
            background: done ? `${modMeta.color}08` : 'var(--surface-2)',
            border: `1px solid ${done ? modMeta.color + '30' : 'var(--border)'}`,
            borderRadius: 'var(--rl)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
          }}>
            {done ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '26px', height: '26px', borderRadius: '50%',
                  background: modMeta.color, color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px',
                  animation: justCompleted ? 'checkPop .4s ease' : undefined,
                }}>✓</span>
                <span style={{ fontSize: '14px', color: modMeta.color, fontWeight: 500 }}>
                  {justCompleted ? 'Marked as complete!' : 'Completed'}
                </span>
              </div>
            ) : (
              <span style={{ fontSize: '14px', color: 'var(--ink-3)' }}>
                Read this dimension? Mark it done to track your progress.
              </span>
            )}
            {!done && (
              <button
                onClick={() => {
                  markComplete(modMeta.id, dim.id)
                  setDone(true); setJustCompleted(true)
                  setTimeout(() => setJustCompleted(false), 1800)
                }}
                style={{
                  padding: '8px 18px', background: modMeta.color,
                  color: 'white', border: 'none', borderRadius: 'var(--r)',
                  fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                }}
              >
                Mark complete
              </button>
            )}
          </div>
        )}

        {/* ── Completion + next CTA (shown after checkpoint answered) ──── */}
        {done && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem 1.5rem',
            background: `${modMeta.color}08`,
            border: `1px solid ${modMeta.color}25`,
            borderRadius: 'var(--rl)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: modMeta.color, color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', flexShrink: 0,
                animation: justCompleted ? 'checkPop .4s ease' : undefined,
              }}>✓</span>
              <span style={{ fontSize: '13.5px', color: modMeta.color, fontWeight: 500 }}>
                {justCompleted ? 'Dimension complete!' : 'Completed'}
              </span>
            </div>
            <Link
              to={next
                ? `/learn/${slug}/${next.dimension_number}`
                : `/learn/${slug}/exam`
              }
              style={{
                padding: '7px 16px',
                background: modMeta.color, color: 'white',
                borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 600,
                textDecoration: 'none', flexShrink: 0,
              }}
            >
              {isLastDimension ? 'Go to Module Exam →' : `Next: D${next?.dimension_number} →`}
            </Link>
          </div>
        )}

        {/* ── Keyboard hint ──────────────────────────────────────────────── */}
        <p style={{
          fontSize: '11px', color: 'var(--ink-4)', textAlign: 'center', marginTop: '8px',
        }}>
          Use ← → arrow keys to navigate between dimensions
        </p>

        {/* ── Prev/Next nav ─────────────────────────────────────────────── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem',
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
            <Link to={`/learn/${slug}/exam`}
              style={{ fontSize: '13px', color: modMeta.color, textDecoration: 'none' }}>
              Module Exam →
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

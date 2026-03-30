import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchScenarios } from '../../lib/pd/queries.js'

/**
 * /learn/:slug/scenarios — scenario bank for a module.
 *
 * Progressive reveal mechanic:
 *   Step 0 — Setup only (read the situation)
 *   Step 1 — Common misread revealed
 *   Step 2 — What's actually happening
 *   Step 3 — Response framework
 *
 * Each step has a "Next →" button. Users can't skip ahead. They CAN
 * click "Reset" to replay. This forces engagement vs. passive scrolling.
 */

const SOURCE_LABELS = {
  academic:           { text: 'Academic',     bg: 'var(--teal-light)', color: 'var(--teal-dark)' },
  practitioner:       { text: 'Practitioner', bg: 'var(--amber-bg)',   color: 'var(--amber-dark)' },
  community_submitted:{ text: 'Community',    bg: 'var(--purple-bg)',  color: 'var(--purple-dark)' },
}

const STEPS = ['setup', 'misread', 'dynamic', 'framework']

const STEP_LABELS = {
  misread:   { label: 'Common misread',        bg: 'var(--coral-bg)',   border: 'var(--coral)',   text: 'var(--coral-dark)' },
  dynamic:   { label: "What's actually happening", bg: 'var(--teal-light)', border: 'var(--teal)', text: 'var(--teal-dark)' },
  framework: { label: 'Response framework',    bg: 'var(--surface-2)',  border: null,             text: 'var(--ink-2)' },
}

function ScenarioCard({ sc, modMeta }) {
  const [step, setStep] = useState(0)   // 0=setup, 1=misread, 2=dynamic, 3=framework
  const framework = Array.isArray(sc.response_framework) ? sc.response_framework : []
  const srcLabel = SOURCE_LABELS[sc.source_type] || SOURCE_LABELS.community_submitted

  const maxStep = framework.length > 0 ? 3 : 2
  const atEnd   = step >= maxStep

  function advance() {
    setStep(s => Math.min(s + 1, maxStep))
  }

  function reset() {
    setStep(0)
  }

  return (
    <div className="card" style={{
      borderLeft: `3px solid ${modMeta.color}`,
    }}>
      {/* Title row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '14px' }}>
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
          {step > 0 && (
            <button
              onClick={reset}
              title="Start over"
              style={{
                background: 'none', border: '1px solid var(--border)',
                borderRadius: '20px', padding: '2px 10px',
                fontSize: '11px', color: 'var(--ink-4)', cursor: 'pointer',
              }}
            >
              ↺ Reset
            </button>
          )}
        </div>
      </div>

      {/* Step progress indicator */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
        {STEPS.slice(0, maxStep + 1).map((s, i) => (
          <div key={s} style={{
            height: '3px',
            flex: 1,
            borderRadius: '2px',
            background: i <= step ? modMeta.color : 'var(--border)',
            transition: 'background .3s ease',
          }} />
        ))}
      </div>

      {/* ── Step 0: Setup ──────────────────────────────────────────── */}
      <div style={{
        opacity: 1,
        animation: step === 0 ? undefined : undefined,
      }}>
        <div className="csec" style={{ marginTop: 0 }}>The situation</div>
        <p style={{
          fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.7,
          margin: '0 0 16px 0',
        }}>
          {sc.setup}
        </p>
      </div>

      {/* ── Step 1: Misread ─────────────────────────────────────────── */}
      {step >= 1 && (
        <RevealBlock
          key={`${sc.id}-misread`}
          bg={STEP_LABELS.misread.bg}
          border={STEP_LABELS.misread.border}
          label={STEP_LABELS.misread.label}
          textColor={STEP_LABELS.misread.text}
        >
          {sc.common_misread}
        </RevealBlock>
      )}

      {/* ── Step 2: Actual dynamic ──────────────────────────────────── */}
      {step >= 2 && (
        <RevealBlock
          key={`${sc.id}-dynamic`}
          bg={STEP_LABELS.dynamic.bg}
          border={STEP_LABELS.dynamic.border}
          label={STEP_LABELS.dynamic.label}
          textColor={STEP_LABELS.dynamic.text}
        >
          {sc.actual_dynamic}
        </RevealBlock>
      )}

      {/* ── Step 3: Response framework ──────────────────────────────── */}
      {step >= 3 && framework.length > 0 && (
        <div style={{
          animation: 'revealStep .3s ease both',
          marginBottom: '12px',
        }}>
          <div className="csec">Response framework</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {framework.map((fstep, i) => (
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
                <span>{fstep}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── CTA: advance or done ─────────────────────────────────────── */}
      <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        {!atEnd ? (
          <button
            onClick={advance}
            style={{
              padding: '8px 20px',
              background: modMeta.color, color: 'white',
              border: 'none', borderRadius: 'var(--r)',
              fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              transition: 'opacity .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '.85' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >
            {step === 0 ? 'What's the misread? →' : step === 1 ? 'What's actually happening? →' : 'See response framework →'}
          </button>
        ) : (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '13px', color: 'var(--teal-dark)', fontWeight: 500,
          }}>
            <span style={{
              width: '20px', height: '20px', borderRadius: '50%',
              background: 'var(--teal-light)', color: 'var(--teal-dark)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 700,
            }}>
              ✓
            </span>
            Scenario complete
          </div>
        )}
        <span style={{ fontSize: '11px', color: 'var(--ink-4)' }}>
          Step {Math.min(step + 1, maxStep + 1)} of {maxStep + 1}
        </span>
      </div>
    </div>
  )
}

/** Animated reveal block for misread / actual dynamic */
function RevealBlock({ bg, border, label, textColor, children }) {
  return (
    <div style={{
      padding: '12px 16px',
      background: bg,
      borderLeft: border ? `3px solid ${border}` : undefined,
      borderRadius: '0 var(--r) var(--r) 0',
      marginBottom: '12px',
      animation: 'revealStep .3s ease both',
    }}>
      <div style={{
        fontSize: '11px', fontWeight: 600, color: textColor,
        textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '4px',
      }}>
        {label}
      </div>
      <p style={{ fontSize: '14px', color: textColor, lineHeight: 1.6, margin: 0 }}>
        {children}
      </p>
    </div>
  )
}

export default function ScenariosPage() {
  const { slug } = useParams()
  const modMeta = moduleBySlug(slug)
  const [scenarios, setScenarios] = useState([])
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

  return (
    <>
      <style>{`
        @keyframes revealStep {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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
          marginBottom: '6px', maxWidth: '600px',
        }}>
          Each scenario walks through a real friction point. Read the situation, then reveal
          each layer — misread first, then what's actually happening, then the response framework.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ink-4)', marginBottom: '1.5rem' }}>
          {scenarios.length} scenario{scenarios.length !== 1 ? 's' : ''}
        </p>

        {scenarios.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
            <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>No scenarios available yet.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {scenarios.map(sc => (
              <ScenarioCard key={sc.id} sc={sc} modMeta={modMeta} />
            ))}
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
    </>
  )
}

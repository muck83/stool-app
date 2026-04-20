import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CULTURAL_VOCAB_BY_SLUG } from '../../../vocab/country-cultural-vocab.jsx'
import { insertCulturalFeedback } from '../../lib/supabase.js'

// ---------------------------------------------------------------------------
// localStorage helpers
// ---------------------------------------------------------------------------
const STORAGE_KEY = (moduleId) => `pd_cultural_vocab_${moduleId}`

export function isCulturalVocabCompleted(moduleId) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY(moduleId))
    return raw ? JSON.parse(raw).completed === true : false
  } catch {
    return false
  }
}

function saveCulturalVocabComplete(moduleId) {
  try {
    localStorage.setItem(STORAGE_KEY(moduleId), JSON.stringify({
      completed: true,
      completedAt: new Date().toISOString(),
    }))
  } catch {
    // ignore storage errors
  }
}

// ---------------------------------------------------------------------------
// Slug -> module id map
// ---------------------------------------------------------------------------
const MODULE_ID_BY_SLUG = {
  'saudi-arabia': 'ksa-001',
  china:          'china-001',
  'south-korea':  'korea-001',
  india:          'india-001',
}

// ---------------------------------------------------------------------------
// HookSection — baffling opening situation shown before any terms
// ---------------------------------------------------------------------------
function HookSection({ hook }) {
  return (
    <div style={{
      background: '#1e1b4b',
      borderRadius: 12,
      padding: '28px 28px 24px',
      marginBottom: 32,
      color: '#e0e7ff',
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, color: '#a5b4fc',
        textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16,
      }}>
        Before you begin
      </div>

      {hook.situation.map((paragraph, i) => (
        <p key={i} style={{
          margin: '0 0 14px 0',
          fontSize: 15,
          lineHeight: 1.75,
          color: i === hook.situation.length - 1 ? '#c7d2fe' : '#e0e7ff',
          fontStyle: i === hook.situation.length - 1 ? 'italic' : 'normal',
        }}>
          {paragraph}
        </p>
      ))}

      <div style={{
        borderTop: '1px solid #3730a3',
        marginTop: 20,
        paddingTop: 16,
      }}>
        <p style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 600,
          color: '#a5b4fc',
          lineHeight: 1.6,
        }}>
          &#8203;&#x1F914; {hook.question}
        </p>
        <p style={{
          margin: '10px 0 0 0',
          fontSize: 13,
          color: '#818cf8',
          fontStyle: 'italic',
        }}>
          Work through the terms below. By the end, you should be able to explain exactly what happened.
        </p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ContextSelector — diaspora modifier picker, shown when contextModifiers exists
// ---------------------------------------------------------------------------
const CONTEXT_STORAGE_KEY = (moduleId) => `pd_context_${moduleId}`

function ContextSelector({ modifiers, moduleId }) {
  const [selected, setSelected] = useState(() => {
    try { return localStorage.getItem(CONTEXT_STORAGE_KEY(moduleId)) || null } catch { return null }
  })

  function choose(id) {
    setSelected(id)
    try { localStorage.setItem(CONTEXT_STORAGE_KEY(moduleId), id) } catch { /* ignore */ }
  }

  const activeOption = modifiers.options.find((o) => o.id === selected)

  return (
    <div style={{ marginBottom: 32 }}>
      {/* Header */}
      <div style={{
        background: '#faf5ff', border: '1px solid #ddd6fe',
        borderRadius: 12, padding: '20px 22px',
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>
          Your context
        </div>
        <p style={{ margin: '0 0 16px 0', fontSize: 14, color: '#4c1d95', lineHeight: 1.6 }}>
          {modifiers.helpText}
        </p>

        {/* Option buttons */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {modifiers.options.map((opt) => {
            const active = selected === opt.id
            return (
              <button
                key={opt.id}
                onClick={() => choose(opt.id)}
                style={{
                  background: active ? '#7c3aed' : '#fff',
                  color: active ? '#fff' : '#4c1d95',
                  border: `1.5px solid ${active ? '#7c3aed' : '#c4b5fd'}`,
                  borderRadius: 8,
                  padding: '8px 14px',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 2,
                  textAlign: 'left',
                  transition: 'all 0.15s',
                }}
              >
                <span>{opt.label}</span>
                {opt.description && (
                  <span style={{ fontSize: 11, fontWeight: 400, opacity: 0.8 }}>
                    {opt.description}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Active modifier content */}
      {activeOption && (
        <div style={{
          background: '#f5f3ff', border: '1px solid #c4b5fd',
          borderRadius: 12, padding: '20px 22px', marginTop: 10,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>
            Korean families in {activeOption.label}
          </div>
          {activeOption.content.map((para, i) => (
            <p key={i} style={{
              margin: i < activeOption.content.length - 1 ? '0 0 12px 0' : 0,
              fontSize: 14, color: '#3b0764', lineHeight: 1.7,
            }}>
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// CardScenario — with / without comparison embedded in card
// ---------------------------------------------------------------------------
function CardScenario({ scenario }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{
        fontSize: 12, fontWeight: 700, color: '#7c3aed',
        textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8,
      }}>
        In practice
      </div>
      <p style={{
        margin: '0 0 12px 0', fontSize: 14, color: '#334155',
        lineHeight: 1.6, fontStyle: 'italic',
        borderLeft: '3px solid #c4b5fd', paddingLeft: 12,
      }}>
        {scenario.situation}
      </p>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          style={{
            background: '#ede9fe', color: '#5b21b6', border: '1px solid #c4b5fd',
            borderRadius: 8, padding: '8px 16px', fontSize: 13, fontWeight: 600,
            cursor: 'pointer', width: '100%',
          }}
        >
          See how cultural knowledge changes this &#8595;
        </button>
      ) : (
        <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
          {/* With understanding */}
          <div style={{
            background: '#f0fdf4', border: '1px solid #bbf7d0',
            borderRadius: 8, padding: '12px 14px',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
              With cultural understanding
            </div>
            <p style={{ margin: 0, fontSize: 13, color: '#166534', lineHeight: 1.6 }}>
              {scenario.withUnderstanding}
            </p>
          </div>
          {/* Without understanding */}
          <div style={{
            background: '#fff7ed', border: '1px solid #fed7aa',
            borderRadius: 8, padding: '12px 14px',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#c2410c', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
              Without cultural understanding
            </div>
            <p style={{ margin: 0, fontSize: 13, color: '#9a3412', lineHeight: 1.6 }}>
              {scenario.withoutUnderstanding}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// CulturalCard — single expandable term card
// ---------------------------------------------------------------------------
function CulturalCard({ card, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: 10,
      marginBottom: 12,
      background: '#fff',
      overflow: 'hidden',
      boxShadow: open ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
      transition: 'box-shadow 0.2s',
    }}>
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', gap: 16,
          padding: '16px 20px', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{
          flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
          background: '#6366f1', color: '#fff', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14,
        }}>
          {index + 1}
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#1e293b' }}>
              {card.term}
            </span>
            {card.script && (
              <span style={{ fontSize: 16, color: '#7c3aed', fontWeight: 500 }}>
                {card.script}
              </span>
            )}
            {card.pronunciation && (
              <span style={{ fontSize: 13, color: '#64748b', fontStyle: 'italic' }}>
                /{card.pronunciation}/
              </span>
            )}
          </div>
          {card.literalTranslation && (
            <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>
              {card.literalTranslation}
            </div>
          )}
        </div>
        <span style={{
          fontSize: 18, color: '#94a3b8',
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s', flexShrink: 0,
        }}>
          &#8964;
        </span>
      </button>

      {/* Expanded body */}
      {open && (
        <div style={{ padding: '0 20px 20px 20px', borderTop: '1px solid #f1f5f9' }}>
          {/* Definition */}
          <div style={{
            background: '#f8fafc', borderRadius: 8,
            padding: '12px 16px', marginTop: 12, marginBottom: 16,
          }}>
            <p style={{ margin: 0, fontSize: 15, color: '#334155', lineHeight: 1.6 }}>
              {card.learnerFriendlyDefinition}
            </p>
          </div>

          {/* Why it matters */}
          {card.whyItMatters && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                Why it matters
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#475569', lineHeight: 1.6 }}>
                {card.whyItMatters}
              </p>
            </div>
          )}

          {/* School example */}
          {card.schoolExample && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                In school
              </div>
              <p style={{
                margin: 0, fontSize: 14, color: '#334155', lineHeight: 1.6,
                borderLeft: '3px solid #0ea5e9', paddingLeft: 12, fontStyle: 'italic',
              }}>
                {card.schoolExample}
              </p>
            </div>
          )}

          {/* Watch for */}
          {card.watchFor && (
            <div style={{
              background: '#fef9c3', borderRadius: 8,
              padding: '10px 14px', marginBottom: 4,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                Watch for
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#78350f', lineHeight: 1.5 }}>
                {card.watchFor}
              </p>
            </div>
          )}

          {/* Card scenario — reveal on demand */}
          {card.cardScenario && (
            <CardScenario scenario={card.cardScenario} />
          )}

          {/* Context tags */}
          {card.contexts && card.contexts.length > 0 && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 14 }}>
              {card.contexts.map((ctx) => (
                <span key={ctx} style={{
                  background: '#ede9fe', color: '#5b21b6', borderRadius: 20,
                  padding: '2px 10px', fontSize: 11, fontWeight: 600, textTransform: 'capitalize',
                }}>
                  {ctx}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ReviewScenario — richer cross-term scenario at bottom of page
// ---------------------------------------------------------------------------
function ReviewScenario({ scenario, index }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div style={{
      border: '1px solid #ddd6fe', borderRadius: 12,
      marginBottom: 16, background: '#faf5ff', overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid #ede9fe' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
            background: '#7c3aed', color: '#fff', display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13,
          }}>
            {index + 1}
          </span>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1e293b' }}>
            {scenario.title}
          </h4>
        </div>
        {/* Terms in play */}
        {scenario.termsInPlay && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {scenario.termsInPlay.map((t) => (
              <span key={t} style={{
                background: '#ede9fe', color: '#5b21b6', borderRadius: 20,
                padding: '2px 10px', fontSize: 11, fontWeight: 600,
                textTransform: 'capitalize', fontStyle: 'italic',
              }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Situation */}
      <div style={{ padding: '16px 20px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
          Situation
        </div>
        <p style={{ margin: '0 0 16px 0', fontSize: 14, color: '#334155', lineHeight: 1.7 }}>
          {scenario.situation}
        </p>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            style={{
              background: '#7c3aed', color: '#fff', border: 'none',
              borderRadius: 8, padding: '10px 20px', fontSize: 14, fontWeight: 600,
              cursor: 'pointer', width: '100%',
            }}
          >
            Reveal: how does cultural knowledge change this? &#8595;
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 12, flexDirection: 'column' }}>
            <div style={{
              background: '#f0fdf4', border: '1px solid #bbf7d0',
              borderRadius: 10, padding: '14px 16px',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
                With cultural literacy
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#166534', lineHeight: 1.7 }}>
                {scenario.withUnderstanding}
              </p>
            </div>
            <div style={{
              background: '#fff7ed', border: '1px solid #fed7aa',
              borderRadius: 10, padding: '14px 16px',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#c2410c', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
                Without cultural literacy
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#9a3412', lineHeight: 1.7 }}>
                {scenario.withoutUnderstanding}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// FeedbackForm — shown after mark-complete, submits to Supabase
// ---------------------------------------------------------------------------
const FB_STORAGE_KEY = (moduleId) => `pd_cultural_feedback_sent_${moduleId}`

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 28, padding: '0 2px', lineHeight: 1,
            color: n <= (hovered || value) ? '#f59e0b' : '#cbd5e1',
            transition: 'color 0.1s',
          }}
        >
          &#9733;
        </button>
      ))}
    </div>
  )
}

function FeedbackForm({ activity, moduleId, contextSelected }) {
  const alreadySent = (() => { try { return !!localStorage.getItem(FB_STORAGE_KEY(moduleId)) } catch { return false } })()

  const [rating, setRating] = useState(0)
  const [inaccuracies, setInaccuracies] = useState('')
  const [missing, setMissing] = useState('')
  const [useful, setUseful] = useState('')
  const [status, setStatus] = useState(alreadySent ? 'sent' : 'idle') // idle | submitting | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!rating) return
    setStatus('submitting')
    const result = await insertCulturalFeedback({
      activityId:      activity.id,
      moduleId,
      country:         activity.country,
      contextSelected,
      rating,
      inaccuracies,
      whatWasMissing:  missing,
      mostUseful:      useful,
    })
    if (result?.error) {
      setStatus('error')
    } else {
      try { localStorage.setItem(FB_STORAGE_KEY(moduleId), '1') } catch { /* ignore */ }
      setStatus('sent')
    }
  }

  if (status === 'sent') {
    return (
      <div style={{
        background: '#f0fdf4', border: '1px solid #bbf7d0',
        borderRadius: 12, padding: '20px 24px', textAlign: 'center', marginTop: 32,
      }}>
        <div style={{ fontSize: 24, marginBottom: 6 }}>&#128075;</div>
        <div style={{ fontWeight: 700, color: '#15803d', fontSize: 15, marginBottom: 4 }}>
          Thanks for the feedback
        </div>
        <p style={{ margin: 0, fontSize: 13, color: '#166534' }}>
          Your response has been recorded and will be used to improve this module.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: '#f8fafc', border: '1px solid #e2e8f0',
      borderRadius: 12, padding: '24px', marginTop: 32,
    }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 4 }}>
        Help improve this module
      </div>
      <p style={{ margin: '0 0 20px 0', fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>
        You're in an early test group. A few quick questions help us make this more accurate and useful.
      </p>

      {/* Star rating */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#334155', marginBottom: 8 }}>
          How well does this module reflect your students? <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <StarRating value={rating} onChange={setRating} />
        {rating > 0 && (
          <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>
            {['', 'Not at all accurate', 'Slightly accurate', 'Somewhat accurate', 'Mostly accurate', 'Very accurate'][rating]}
          </div>
        )}
      </div>

      {/* Inaccuracies */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#334155', marginBottom: 6 }}>
          Did anything feel inaccurate or off for your context? <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          value={inaccuracies}
          onChange={(e) => setInaccuracies(e.target.value)}
          placeholder="e.g. The wasta description didn't quite match what I see with UAE families..."
          rows={3}
          style={{
            width: '100%', boxSizing: 'border-box', padding: '10px 12px',
            borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 13,
            color: '#334155', resize: 'vertical', fontFamily: 'inherit',
            lineHeight: 1.5,
          }}
        />
      </div>

      {/* Missing */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#334155', marginBottom: 6 }}>
          What did we miss that would have been useful? <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          value={missing}
          onChange={(e) => setMissing(e.target.value)}
          placeholder="e.g. Nothing about how Korean families in Riyadh interact with the Korean church community..."
          rows={3}
          style={{
            width: '100%', boxSizing: 'border-box', padding: '10px 12px',
            borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 13,
            color: '#334155', resize: 'vertical', fontFamily: 'inherit',
            lineHeight: 1.5,
          }}
        />
      </div>

      {/* Most useful */}
      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#334155', marginBottom: 6 }}>
          What was most useful or surprising? <span style={{ color: '#94a3b8', fontWeight: 400 }}>(optional)</span>
        </label>
        <textarea
          value={useful}
          onChange={(e) => setUseful(e.target.value)}
          placeholder="e.g. The sabr card completely explained a situation I had last term..."
          rows={3}
          style={{
            width: '100%', boxSizing: 'border-box', padding: '10px 12px',
            borderRadius: 8, border: '1px solid #cbd5e1', fontSize: 13,
            color: '#334155', resize: 'vertical', fontFamily: 'inherit',
            lineHeight: 1.5,
          }}
        />
      </div>

      {status === 'error' && (
        <p style={{ color: '#ef4444', fontSize: 13, marginBottom: 12 }}>
          Something went wrong \u2014 please try again or note your feedback to share directly.
        </p>
      )}

      <button
        type="submit"
        disabled={!rating || status === 'submitting'}
        style={{
          background: rating ? '#6366f1' : '#e2e8f0',
          color: rating ? '#fff' : '#94a3b8',
          border: 'none', borderRadius: 8,
          padding: '11px 24px', fontSize: 14, fontWeight: 700,
          cursor: rating ? 'pointer' : 'default',
          transition: 'background 0.15s',
        }}
      >
        {status === 'submitting' ? 'Sending\u2026' : 'Submit feedback \u2192'}
      </button>
    </form>
  )
}

// ---------------------------------------------------------------------------
// CulturalVocabPage — main page component
// ---------------------------------------------------------------------------
export default function CulturalVocabPage() {
  const { slug } = useParams()
  const activity = CULTURAL_VOCAB_BY_SLUG[slug]
  const moduleId = MODULE_ID_BY_SLUG[slug]

  const [done, setDone] = useState(false)
  const [marked, setMarked] = useState(false)
  const [contextSelected, setContextSelected] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (moduleId) {
      setDone(isCulturalVocabCompleted(moduleId))
      try { setContextSelected(localStorage.getItem(`pd_context_${moduleId}`) || null) } catch { /* ignore */ }
    }
  }, [moduleId])

  function handleMarkComplete() {
    if (moduleId) saveCulturalVocabComplete(moduleId)
    setDone(true)
    setMarked(true)
  }

  if (!activity) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: '#64748b' }}>
        <p>No cultural vocabulary found for this module.</p>
        <Link to={`/learn/${slug}`} style={{ color: '#6366f1' }}>
          &#8592; Back to module
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 740, margin: '0 auto', padding: '32px 16px 80px' }}>
      {/* Back link */}
      <Link
        to={`/learn/${slug}`}
        style={{ color: '#6366f1', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 24 }}
      >
        &#8592; Back to module
      </Link>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span style={{ fontSize: 28 }}>&#127760;</span>
          <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#1e293b' }}>
            {activity.title}
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: 16, color: '#64748b', lineHeight: 1.6 }}>
          {activity.subtitle}
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 14, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: '#64748b' }}>&#128337; {activity.estimatedMinutes} min</span>
          <span style={{ fontSize: 13, color: '#64748b' }}>&#127891; {activity.difficulty}</span>
          <span style={{ fontSize: 13, color: '#64748b' }}>&#128218; {activity.cards.length} terms</span>
          {activity.reviewScenarios && (
            <span style={{ fontSize: 13, color: '#64748b' }}>&#128196; {activity.reviewScenarios.length} review scenarios</span>
          )}
          {done && (
            <span style={{ fontSize: 13, color: '#16a34a', fontWeight: 600 }}>&#10003; Completed</span>
          )}
        </div>
      </div>

      {/* Facilitator note */}
      {activity.facilitatorNote && (
        <div style={{
          background: '#f0fdf4', border: '1px solid #bbf7d0',
          borderRadius: 10, padding: '14px 18px', marginBottom: 28,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            How to use this activity
          </div>
          <p style={{ margin: 0, fontSize: 14, color: '#166534', lineHeight: 1.6 }}>
            {activity.facilitatorNote}
          </p>
        </div>
      )}

      {/* Opening hook */}
      {activity.openingHook && (
        <HookSection hook={activity.openingHook} />
      )}

      {/* Context selector — only rendered when contextModifiers exists */}
      {activity.contextModifiers && moduleId && (
        <ContextSelector modifiers={activity.contextModifiers} moduleId={moduleId} />
      )}

      {/* Section label: Terms */}
      <div style={{
        fontSize: 12, fontWeight: 700, color: '#64748b',
        textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12,
      }}>
        Part 1 — Learn the terms
      </div>

      {/* Cards */}
      <div style={{ marginBottom: 40 }}>
        {activity.cards.map((card, i) => (
          <CulturalCard key={card.id} card={card} index={i} />
        ))}
      </div>

      {/* Review scenarios section */}
      {activity.reviewScenarios && activity.reviewScenarios.length > 0 && (
        <div style={{ marginBottom: 40 }}>
          <div style={{
            fontSize: 12, fontWeight: 700, color: '#64748b',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4,
          }}>
            Part 2 — Apply and review
          </div>
          <p style={{ fontSize: 14, color: '#64748b', margin: '0 0 16px 0', lineHeight: 1.6 }}>
            Each scenario combines multiple terms. Read the situation, then reveal how cultural knowledge changes the outcome.
          </p>
          {activity.reviewScenarios.map((scenario, i) => (
            <ReviewScenario key={scenario.id} scenario={scenario} index={i} />
          ))}
        </div>
      )}

      {/* Mark complete */}
      <div style={{ textAlign: 'center' }}>
        {marked ? (
          <div style={{
            background: '#f0fdf4', border: '1px solid #bbf7d0',
            borderRadius: 10, padding: '16px 24px', display: 'inline-block',
          }}>
            <div style={{ fontSize: 22, marginBottom: 4 }}>&#9989;</div>
            <div style={{ fontWeight: 700, color: '#15803d', fontSize: 16 }}>Marked as read</div>
            <div style={{ color: '#166534', fontSize: 14, marginTop: 4 }}>
              These terms are now part of your cultural vocabulary.
            </div>
          </div>
        ) : (
          <button
            onClick={handleMarkComplete}
            style={{
              background: done ? '#e2e8f0' : '#6366f1',
              color: done ? '#64748b' : '#fff',
              border: 'none', borderRadius: 10,
              padding: '14px 32px', fontSize: 16, fontWeight: 700,
              cursor: done ? 'default' : 'pointer',
            }}
          >
            {done ? '\u2713 Already completed' : 'Mark as read \u2192'}
          </button>
        )}
      </div>

      {/* Feedback form — shown once activity is done */}
      {done && moduleId && (
        <FeedbackForm
          activity={activity}
          moduleId={moduleId}
          contextSelected={contextSelected}
        />
      )}

      {/* Return link */}
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Link to={`/learn/${slug}`} style={{ color: '#6366f1', fontSize: 14, textDecoration: 'none' }}>
          &#8592; Return to module
        </Link>
      </div>
    </div>
  )
}

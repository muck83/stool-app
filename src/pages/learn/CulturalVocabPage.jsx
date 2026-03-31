import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CULTURAL_VOCAB_BY_SLUG } from '../../../vocab/country-cultural-vocab.jsx'

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
// Slug → module id map (mirrors ModulePage logic)
// ---------------------------------------------------------------------------
const MODULE_ID_BY_SLUG = {
  'saudi-arabia': 'ksa-001',
  china:          'china-001',
  'south-korea':  'korea-001',
  india:          'india-001',
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
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '16px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Number badge */}
        <span style={{
          flexShrink: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: '#6366f1',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 14,
        }}>
          {index + 1}
        </span>

        {/* Term + script */}
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

        {/* Chevron */}
        <span style={{
          fontSize: 18,
          color: '#94a3b8',
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s',
          flexShrink: 0,
        }}>
          &#8964;
        </span>
      </button>

      {/* Expanded body */}
      {open && (
        <div style={{
          padding: '0 20px 20px 20px',
          borderTop: '1px solid #f1f5f9',
        }}>
          {/* Definition */}
          <div style={{
            background: '#f8fafc',
            borderRadius: 8,
            padding: '12px 16px',
            marginTop: 12,
            marginBottom: 16,
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
                margin: 0,
                fontSize: 14,
                color: '#334155',
                lineHeight: 1.6,
                borderLeft: '3px solid #0ea5e9',
                paddingLeft: 12,
                fontStyle: 'italic',
              }}>
                {card.schoolExample}
              </p>
            </div>
          )}

          {/* Watch for */}
          {card.watchFor && (
            <div style={{
              background: '#fef9c3',
              borderRadius: 8,
              padding: '10px 14px',
              marginBottom: 4,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                Watch for
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#78350f', lineHeight: 1.5 }}>
                {card.watchFor}
              </p>
            </div>
          )}

          {/* Context tags */}
          {card.contexts && card.contexts.length > 0 && (
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>
              {card.contexts.map((ctx) => (
                <span key={ctx} style={{
                  background: '#ede9fe',
                  color: '#5b21b6',
                  borderRadius: 20,
                  padding: '2px 10px',
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'capitalize',
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
// CulturalVocabPage — main page component
// ---------------------------------------------------------------------------
export default function CulturalVocabPage() {
  const { slug } = useParams()
  const activity = CULTURAL_VOCAB_BY_SLUG[slug]
  const moduleId = MODULE_ID_BY_SLUG[slug]

  const [done, setDone] = useState(false)
  const [marked, setMarked] = useState(false)

  useEffect(() => {
    if (moduleId) setDone(isCulturalVocabCompleted(moduleId))
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
          &larr; Back to module
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

        {/* Meta row */}
        <div style={{ display: 'flex', gap: 16, marginTop: 14, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 13, color: '#64748b', display: 'flex', alignItems: 'center', gap: 4 }}>
            &#128337; {activity.estimatedMinutes} min
          </span>
          <span style={{ fontSize: 13, color: '#64748b', display: 'flex', alignItems: 'center', gap: 4 }}>
            &#127891; {activity.difficulty}
          </span>
          <span style={{ fontSize: 13, color: '#64748b', display: 'flex', alignItems: 'center', gap: 4 }}>
            &#128218; {activity.cards.length} terms
          </span>
          {done && (
            <span style={{ fontSize: 13, color: '#16a34a', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
              &#10003; Completed
            </span>
          )}
        </div>
      </div>

      {/* Facilitator note */}
      {activity.facilitatorNote && (
        <div style={{
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: 10,
          padding: '14px 18px',
          marginBottom: 28,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            How to use this activity
          </div>
          <p style={{ margin: 0, fontSize: 14, color: '#166534', lineHeight: 1.6 }}>
            {activity.facilitatorNote}
          </p>
        </div>
      )}

      {/* Cards */}
      <div>
        {activity.cards.map((card, i) => (
          <CulturalCard key={card.id} card={card} index={i} />
        ))}
      </div>

      {/* Mark complete */}
      <div style={{ marginTop: 32, textAlign: 'center' }}>
        {marked ? (
          <div style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: 10,
            padding: '16px 24px',
            display: 'inline-block',
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
              border: 'none',
              borderRadius: 10,
              padding: '14px 32px',
              fontSize: 16,
              fontWeight: 700,
              cursor: done ? 'default' : 'pointer',
            }}
          >
            {done ? '&#10003; Already completed' : 'Mark as read \u2192'}
          </button>
        )}
      </div>

      {/* Back to module */}
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Link
          to={`/learn/${slug}`}
          style={{ color: '#6366f1', fontSize: 14, textDecoration: 'none' }}
        >
          &#8592; Return to module
        </Link>
      </div>
    </div>
  )
}

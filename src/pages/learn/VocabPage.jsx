/**
 * VocabPage.jsx — /learn/:slug/vocab
 *
 * Renders the country vocabulary learning activity for a module.
 * Four section types: vocab_cards, scenario_sort, best_response, checkpoint_quiz.
 * Completion (after checkpoint_quiz) is stored in localStorage.
 */

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import {
  indiaVocabLearningActivity,
  chinaVocabLearningActivity,
  koreaVocabLearningActivity,
  ksaVocabLearningActivity,
} from '../../../vocab/country-vocab-learning-activities.jsx'

const VOCAB_BY_SLUG = {
  india:            indiaVocabLearningActivity,
  china:            chinaVocabLearningActivity,
  'south-korea':    koreaVocabLearningActivity,
  'saudi-arabia':   ksaVocabLearningActivity,
}

// ── localStorage helpers ──────────────────────────────────────────────────

function getVocabProgress(moduleId) {
  try {
    const raw = localStorage.getItem(`pd_vocab_${moduleId}`)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

function saveVocabComplete(moduleId, score, total) {
  try {
    localStorage.setItem(`pd_vocab_${moduleId}`, JSON.stringify({
      completed: true, score, total, completedAt: new Date().toISOString(),
    }))
  } catch {}
}

export function isVocabCompleted(moduleId) {
  return getVocabProgress(moduleId)?.completed === true
}

// ── Section type: vocab_cards ─────────────────────────────────────────────

function VocabCard({ card, color }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: 'var(--r)',
      overflow: 'hidden',
      marginBottom: '8px',
      transition: 'box-shadow .15s',
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', textAlign: 'left', padding: '12px 16px',
          background: open ? `${color}08` : 'white',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '12px', transition: 'background .15s', fontFamily: 'inherit',
        }}
        onMouseEnter={e => { if (!open) e.currentTarget.style.background = 'var(--surface-2)' }}
        onMouseLeave={e => { if (!open) e.currentTarget.style.background = 'white' }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flex: 1, minWidth: 0 }}>
          <span style={{
            fontSize: '10px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '.05em', color: 'var(--ink-4)', flexShrink: 0,
          }}>
            {card.partOfSpeech}
          </span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
            {card.term}
          </span>
          {!open && (
            <span style={{ fontSize: '12.5px', color: 'var(--ink-4)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              — {card.learnerFriendlyDefinition}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, gap: 1 }}>
          <div style={{ fontSize: '9px', fontWeight: 700, color: open ? color : 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
            {open ? 'close' : 'explore'}
          </div>
          <div style={{ fontSize: '16px', color: open ? color : 'var(--ink-3)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>⌄</div>
        </div>
      </button>

      {open && (
        <div style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-2)', margin: '12px 0 6px', lineHeight: 1.65 }}>
            {card.learnerFriendlyDefinition}
          </p>
          {card.deeperMeaning && (
            <p style={{ fontSize: '13px', color: 'var(--ink-3)', margin: '0 0 14px', lineHeight: 1.6 }}>
              {card.deeperMeaning}
            </p>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
            <div style={{ padding: '10px 12px', background: '#fff8f6', border: '1px solid #ffd4cc', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#c9372c', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '4px' }}>
                Common misread
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>
                {card.commonMisread}
              </p>
            </div>
            <div style={{ padding: '10px 12px', background: '#f0fdf6', border: '1px solid #bbf0d6', borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#1a7a50', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '4px' }}>
                Better interpretation
              </div>
              <p style={{ fontSize: '12.5px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>
                {card.betterInterpretation}
              </p>
            </div>
          </div>
          {card.example && (
            <div style={{ padding: '10px 12px', background: `${color}08`, border: `1px solid ${color}25`, borderRadius: '6px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '4px' }}>
                Example
              </div>
              <p style={{ fontSize: '13px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.55, fontStyle: 'italic' }}>
                {card.example}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Section type: scenario_sort ───────────────────────────────────────────

function ScenarioSortSection({ section, color, onScoreUpdate }) {
  const [answers, setAnswers] = useState({})

  function handleSelect(item, optText) {
    if (answers[item.id] !== undefined) return
    const next = { ...answers, [item.id]: optText }
    setAnswers(next)
    const correct = section.items.filter(i => next[i.id] === i.correctAnswer).length
    onScoreUpdate?.(section.id, correct, section.items.length, Object.keys(next).length)
  }

  return (
    <div>
      {section.items.map((item, idx) => {
        const selected = answers[item.id]
        const submitted = selected !== undefined
        const isCorrect = selected === item.correctAnswer

        return (
          <div key={item.id} style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '14px 16px', background: 'var(--surface-2)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>
                Situation {idx + 1}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--ink)', margin: 0, lineHeight: 1.65, fontWeight: 500 }}>
                {item.prompt}
              </p>
            </div>
            <div style={{ padding: '12px 16px' }}>
              {item.options.map((opt, oi) => {
                let bg = 'white', borderColor = 'var(--border)', textColor = 'var(--ink-2)'
                if (submitted) {
                  if (opt === selected) {
                    bg = isCorrect ? '#e3fcef' : '#ffebe6'
                    borderColor = isCorrect ? '#22a06b' : '#c9372c'
                    textColor = 'var(--ink)'
                  } else if (opt === item.correctAnswer && !isCorrect) {
                    bg = '#f3fdf7'; borderColor = '#22a06b'; textColor = 'var(--ink-3)'
                  } else {
                    bg = 'var(--surface-2)'; textColor = 'var(--ink-4)'
                  }
                }
                return (
                  <button key={oi} onClick={() => handleSelect(item, opt)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '9px 13px',
                      marginBottom: '6px', borderRadius: '8px',
                      border: `1.5px solid ${borderColor}`,
                      background: bg, color: textColor,
                      fontSize: '13.5px', lineHeight: 1.5,
                      cursor: submitted ? 'default' : 'pointer',
                      fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '10px',
                      transition: 'border-color .15s',
                    }}
                    onMouseEnter={e => { if (!submitted) e.currentTarget.style.borderColor = color }}
                    onMouseLeave={e => { if (!submitted) e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    <span style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      border: '1.5px solid currentColor',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', fontWeight: 700, flexShrink: 0,
                    }}>
                      {String.fromCharCode(65 + oi)}
                    </span>
                    {opt}
                  </button>
                )
              })}
              {submitted && (
                <div style={{
                  marginTop: '8px', padding: '10px 13px', borderRadius: '6px',
                  background: isCorrect ? '#d3f9e2' : '#ffe8e4',
                  borderLeft: `3px solid ${isCorrect ? '#22a06b' : '#c9372c'}`,
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: isCorrect ? '#1a7a50' : '#9e2921', marginBottom: '3px' }}>
                    {isCorrect ? '✓ Correct' : '✗ Not quite'}
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                    {isCorrect ? item.feedback.correct : item.feedback.incorrect}
                  </p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Section type: best_response ───────────────────────────────────────────

function BestResponseSection({ section, color }) {
  const [answers, setAnswers] = useState({})

  function handleSelect(item, optId) {
    if (answers[item.id] !== undefined) return
    setAnswers(prev => ({ ...prev, [item.id]: optId }))
  }

  return (
    <div>
      {section.items.map((item, idx) => {
        const selected = answers[item.id]
        const submitted = selected !== undefined
        const selectedOpt = item.options.find(o => o.id === selected)

        return (
          <div key={item.id} style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '14px 16px', background: 'var(--surface-2)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>
                Dialogue {idx + 1}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--ink)', margin: 0, lineHeight: 1.65, fontStyle: 'italic' }}>
                {item.prompt}
              </p>
            </div>
            <div style={{ padding: '12px 16px' }}>
              {item.options.map(opt => {
                let bg = 'white', borderColor = 'var(--border)', textColor = 'var(--ink-2)'
                if (submitted && opt.id === selected) {
                  bg = opt.isCorrect ? '#e3fcef' : '#ffebe6'
                  borderColor = opt.isCorrect ? '#22a06b' : '#c9372c'
                  textColor = 'var(--ink)'
                } else if (submitted) {
                  bg = 'var(--surface-2)'; textColor = 'var(--ink-4)'
                }
                return (
                  <button key={opt.id} onClick={() => handleSelect(item, opt.id)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '9px 13px',
                      marginBottom: '6px', borderRadius: '8px',
                      border: `1.5px solid ${borderColor}`,
                      background: bg, color: textColor,
                      fontSize: '13.5px', lineHeight: 1.5,
                      cursor: submitted ? 'default' : 'pointer',
                      fontFamily: 'inherit', transition: 'border-color .15s',
                    }}
                    onMouseEnter={e => { if (!submitted) e.currentTarget.style.borderColor = color }}
                    onMouseLeave={e => { if (!submitted) e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    {opt.text}
                  </button>
                )
              })}
              {submitted && selectedOpt && (
                <div style={{
                  marginTop: '8px', padding: '10px 13px', borderRadius: '6px',
                  background: selectedOpt.isCorrect ? '#d3f9e2' : '#ffe8e4',
                  borderLeft: `3px solid ${selectedOpt.isCorrect ? '#22a06b' : '#c9372c'}`,
                }}>
                  <p style={{ fontSize: '12.5px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                    {selectedOpt.rationale}
                  </p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Section type: checkpoint_quiz ─────────────────────────────────────────

function CheckpointQuizSection({ section, color, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [fired, setFired] = useState(false)

  function handleSelect(q, optText) {
    if (answers[q.id] !== undefined) return
    const next = { ...answers, [q.id]: optText }
    setAnswers(next)
    if (!fired && Object.keys(next).length === section.questions.length) {
      setFired(true)
      const score = section.questions.filter(q => next[q.id] === q.correctAnswer).length
      onComplete?.(score, section.questions.length)
    }
  }

  return (
    <div>
      {section.questions.map((q, idx) => {
        const selected = answers[q.id]
        const submitted = selected !== undefined
        const isCorrect = selected === q.correctAnswer

        return (
          <div key={q.id} style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', marginBottom: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '14px 16px', background: 'var(--surface-2)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '6px' }}>
                Q{idx + 1}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--ink)', margin: 0, lineHeight: 1.65, fontWeight: 500 }}>
                {q.stem}
              </p>
            </div>
            <div style={{ padding: '12px 16px' }}>
              {q.options.map((opt, oi) => {
                let bg = 'white', borderColor = 'var(--border)', textColor = 'var(--ink-2)'
                if (submitted) {
                  if (opt === selected) {
                    bg = isCorrect ? '#e3fcef' : '#ffebe6'
                    borderColor = isCorrect ? '#22a06b' : '#c9372c'
                    textColor = 'var(--ink)'
                  } else if (opt === q.correctAnswer && !isCorrect) {
                    bg = '#f3fdf7'; borderColor = '#22a06b'; textColor = 'var(--ink-3)'
                  } else {
                    bg = 'var(--surface-2)'; textColor = 'var(--ink-4)'
                  }
                }
                return (
                  <button key={oi} onClick={() => handleSelect(q, opt)}
                    style={{
                      width: '100%', textAlign: 'left', padding: '9px 13px',
                      marginBottom: '6px', borderRadius: '8px',
                      border: `1.5px solid ${borderColor}`,
                      background: bg, color: textColor,
                      fontSize: '13.5px', lineHeight: 1.5,
                      cursor: submitted ? 'default' : 'pointer',
                      fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '10px',
                      transition: 'border-color .15s',
                    }}
                    onMouseEnter={e => { if (!submitted) e.currentTarget.style.borderColor = color }}
                    onMouseLeave={e => { if (!submitted) e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    <span style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      border: '1.5px solid currentColor',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '10px', fontWeight: 700, flexShrink: 0,
                    }}>
                      {String.fromCharCode(65 + oi)}
                    </span>
                    {opt}
                  </button>
                )
              })}
              {submitted && (
                <div style={{
                  marginTop: '8px', padding: '10px 13px', borderRadius: '6px',
                  background: isCorrect ? '#d3f9e2' : '#ffe8e4',
                  borderLeft: `3px solid ${isCorrect ? '#22a06b' : '#c9372c'}`,
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: isCorrect ? '#1a7a50' : '#9e2921', marginBottom: '3px' }}>
                    {isCorrect ? '✓ Correct' : '✗ Not quite'}
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.55 }}>
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Section header component ──────────────────────────────────────────────

const SECTION_META = {
  vocab_cards:      { label: 'Key Terms',            icon: '📖', hint: 'Expand each term. Guess the meaning before you open it.' },
  scenario_sort:    { label: 'Applied Interpretation', icon: '🔍', hint: 'Match each school situation to the right concept.' },
  best_response:    { label: 'Micro-Dialogue Practice', icon: '💬', hint: 'Choose the teacher response that applies the vocabulary most accurately.' },
  checkpoint_quiz:  { label: 'Mastery Check',         icon: '✦',  hint: 'Short scored quiz. Complete it to mark this activity done.' },
}

function SectionHeader({ section, color, scoreInfo }) {
  const meta = SECTION_META[section.type] || {}
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <span style={{
          width: '26px', height: '26px', borderRadius: '50%',
          background: `${color}15`, color,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '13px', flexShrink: 0,
        }}>
          {meta.icon}
        </span>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--ink)', margin: 0 }}>
          {section.title || meta.label}
        </h3>
        {scoreInfo && (
          <span style={{
            marginLeft: 'auto', fontSize: '12px', fontWeight: 600,
            color: scoreInfo.correct === scoreInfo.total ? '#1a7a50' : color,
            background: scoreInfo.correct === scoreInfo.total ? '#f0fdf6' : `${color}10`,
            border: `1px solid ${scoreInfo.correct === scoreInfo.total ? '#bbf0d6' : `${color}30`}`,
            borderRadius: '20px', padding: '2px 10px',
          }}>
            {scoreInfo.correct}/{scoreInfo.total}
          </span>
        )}
      </div>
      <p style={{ fontSize: '12.5px', color: 'var(--ink-4)', margin: '0 0 0 34px', lineHeight: 1.5 }}>
        {section.instructions || meta.hint}
      </p>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────

export default function VocabPage() {
  const { slug } = useParams()
  const modMeta = moduleBySlug(slug)
  const activity = modMeta ? VOCAB_BY_SLUG[slug] : null

  const [scores, setScores] = useState({})        // sectionId → { correct, total, answered }
  const [completed, setCompleted] = useState(false)
  const [finalScore, setFinalScore] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (modMeta) {
      const prog = getVocabProgress(modMeta.id)
      if (prog?.completed) {
        setCompleted(true)
        setFinalScore({ score: prog.score, total: prog.total })
      }
    }
  }, [slug])

  if (!modMeta || !activity) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <Link to="/learn" style={{ fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none' }}>
          ← Back to modules
        </Link>
        <div className="card" style={{ marginTop: '1rem', textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '14px', color: 'var(--ink-3)' }}>Vocabulary activity not found for this module.</p>
        </div>
      </div>
    )
  }

  const color = modMeta.color

  function handleScoreUpdate(sectionId, correct, total, answered) {
    setScores(prev => ({ ...prev, [sectionId]: { correct, total, answered } }))
  }

  function handleQuizComplete(score, total) {
    setCompleted(true)
    setFinalScore({ score, total })
    saveVocabComplete(modMeta.id, score, total)
  }

  // Total scored items: scenario_sort + checkpoint_quiz
  const sortSection = activity.sections.find(s => s.type === 'scenario_sort')
  const quizSection = activity.sections.find(s => s.type === 'checkpoint_quiz')
  const sortScore   = scores[sortSection?.id]
  const quizScore   = scores[quizSection?.id]

  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Breadcrumb */}
      <Link to={`/learn/${slug}`} style={{ fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none', display: 'inline-block', marginBottom: '12px' }}>
        ← Back to {modMeta.country} module
      </Link>

      {/* Header card */}
      <div style={{
        background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)',
        borderTop: `4px solid ${color}`, padding: '1.75rem', marginBottom: '1.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: `${color}15`, color,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '20px', flexShrink: 0,
          }}>
            📖
          </div>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--ink)', margin: '0 0 4px 0' }}>
              {activity.title}
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--ink-3)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
              {activity.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', color: 'var(--ink-4)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '20px', padding: '3px 10px' }}>
                ⏱ {activity.estimatedMinutes} min
              </span>
              {activity.sections.find(s => s.type === 'vocab_cards') && (
                <span style={{ fontSize: '12px', color: 'var(--ink-4)', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '20px', padding: '3px 10px' }}>
                  {activity.sections.find(s => s.type === 'vocab_cards').cards.length} terms
                </span>
              )}
              {completed && (
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#1a7a50', background: '#f0fdf6', border: '1px solid #bbf0d6', borderRadius: '20px', padding: '3px 10px' }}>
                  ✓ Completed{finalScore ? ` — ${finalScore.score}/${finalScore.total}` : ''}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Facilitator note */}
        {activity.facilitatorNote && (
          <div style={{ marginTop: '14px', padding: '10px 14px', background: `${color}08`, border: `1px solid ${color}20`, borderRadius: '6px' }}>
            <p style={{ fontSize: '12.5px', color: 'var(--ink-3)', margin: 0, lineHeight: 1.6, fontStyle: 'italic' }}>
              {activity.facilitatorNote}
            </p>
          </div>
        )}
      </div>

      {/* Sections */}
      {activity.sections.map(section => {
        const scoreInfo = (section.type === 'scenario_sort' || section.type === 'checkpoint_quiz')
          ? scores[section.id]
          : null

        return (
          <div key={section.id} style={{ marginBottom: '2rem' }}>
            <SectionHeader section={section} color={color} scoreInfo={scoreInfo} />

            {section.type === 'vocab_cards' && (
              <div>
                {section.cards.map(card => (
                  <VocabCard key={card.id} card={card} color={color} />
                ))}
              </div>
            )}

            {section.type === 'scenario_sort' && (
              <ScenarioSortSection
                section={section}
                color={color}
                onScoreUpdate={handleScoreUpdate}
              />
            )}

            {section.type === 'best_response' && (
              <BestResponseSection section={section} color={color} />
            )}

            {section.type === 'checkpoint_quiz' && (
              <CheckpointQuizSection
                section={section}
                color={color}
                onComplete={(score, total) => {
                  handleScoreUpdate(section.id, score, total, total)
                  handleQuizComplete(score, total)
                }}
              />
            )}
          </div>
        )
      })}

      {/* Completion banner */}
      {completed && (
        <div style={{
          padding: '1.5rem', borderRadius: 'var(--rl)',
          background: '#f0fdf6', border: '1px solid #bbf0d6',
          textAlign: 'center', marginBottom: '2rem',
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>✓</div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: '#1a7a50', margin: '0 0 6px 0' }}>
            Vocabulary Lab complete
          </h3>
          {finalScore && (
            <p style={{ fontSize: '14px', color: '#2d6a4f', margin: '0 0 14px 0' }}>
              Mastery check: {finalScore.score} of {finalScore.total} correct
            </p>
          )}
          <Link to={`/learn/${slug}`} style={{
            display: 'inline-block', padding: '8px 20px',
            background: '#22a06b', color: 'white',
            borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 600,
            textDecoration: 'none',
          }}>
            ← Back to module
          </Link>
        </div>
      )}

      {/* Research anchors */}
      {activity.researchAnchors && activity.researchAnchors.length > 0 && (
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '10px' }}>
            Research basis
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {activity.researchAnchors.map((anchor, i) => (
              <div key={i} style={{ fontSize: '11.5px', color: 'var(--ink-4)', lineHeight: 1.6 }}>
                {anchor.citation}
                {anchor.doi && (
                  <span style={{ color: 'var(--ink-4)', marginLeft: '4px' }}>
                    DOI: {anchor.doi}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

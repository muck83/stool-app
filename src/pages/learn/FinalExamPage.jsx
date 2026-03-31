/**
 * FinalExamPage.jsx — /learn/:slug/exam
 *
 * Phase 1 capstone exam:
 *  - Locked until all dimensions are complete
 *  - 3 questions, one at a time
 *  - Immediate per-option feedback after answering each
 *  - Best-score logic across retakes
 *  - Awards Distinction / Mastery / Completed badge on submit
 */

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { moduleBySlug } from '../../lib/slugMap.js'
import { fetchDimensions, fetchQuizQuestions } from '../../lib/pd/queries.js'
import {
  isExamUnlocked,
  isExamAttempted,
  getModuleScore,
  getModuleBadgeTier,
  saveModuleBadge,
  getModuleBadgeRecord,
  saveQuizAnswer,
  getQuizAnswer,
  getQuizScore,
  completedDimensionIds,
  getRevisitFlags,
} from '../../lib/pd/progress.js'

const BADGE_META = {
  distinction: { label: 'Distinction', emoji: '🏅', color: '#8B5CF6', bg: '#f5f3ff', border: '#d8b4fe' },
  mastery:     { label: 'Mastery',     emoji: '⭐', color: '#D97706', bg: '#fffbeb', border: '#fcd34d' },
  completed:   { label: 'Completed',   emoji: '✓',  color: '#059669', bg: '#f0fdf4', border: '#6ee7b7' },
}

export default function FinalExamPage() {
  const { slug } = useParams()
  const modMeta = moduleBySlug(slug)

  const [allDims, setAllDims]     = useState([])
  const [examQs, setExamQs]       = useState([])
  const [checkpointQs, setCheckpointQs] = useState([])
  const [loading, setLoading]     = useState(true)
  const [unlocked, setUnlocked]   = useState(false)

  // Exam flow state
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers]       = useState({}) // { [questionId]: { selectedId, isCorrect } }
  const [examDone, setExamDone]     = useState(false)
  const [visible, setVisible]       = useState(false)

  // Previous badge record (for retakes)
  const [prevRecord, setPrevRecord] = useState(null)
  const [newBadge, setNewBadge]     = useState(null) // badge awarded this attempt

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (!modMeta) { setLoading(false); return }
      const [dims, qs] = await Promise.all([
        fetchDimensions(modMeta.id),
        fetchQuizQuestions(modMeta.id),
      ])
      if (cancelled) return

      const exam       = qs.filter(q => q.quiz_type === 'final_exam').sort((a, b) => a.sort_order - b.sort_order)
      const checkpoint = qs.filter(q => q.quiz_type === 'checkpoint')

      setAllDims(dims)
      setExamQs(exam)
      setCheckpointQs(checkpoint)

      const unlock = isExamUnlocked(modMeta.id, dims)
      setUnlocked(unlock)

      // Load prior answers if already attempted
      if (unlock) {
        const prior = {}
        exam.forEach(q => {
          const a = getQuizAnswer(modMeta.id, q.id)
          if (a) prior[q.id] = { selectedId: a.selectedOptionId, isCorrect: a.isCorrect }
        })
        if (Object.keys(prior).length > 0) setAnswers(prior)
        if (isExamAttempted(modMeta.id, exam.map(q => q.id))) {
          setExamDone(true)
          setCurrentIdx(exam.length)
        }
      }

      setPrevRecord(getModuleBadgeRecord(modMeta.id))
      setLoading(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    }
    load()
    return () => { cancelled = true }
  }, [slug])

  function handleSelectAnswer(question, option) {
    if (answers[question.id]) return // already answered this question

    const isCorrect = option.isCorrect
    const updated = { ...answers, [question.id]: { selectedId: option.id, isCorrect } }
    setAnswers(updated)
    saveQuizAnswer(modMeta.id, question.id, option.id, isCorrect)
  }

  function handleNextQuestion() {
    setCurrentIdx(i => i + 1)
  }

  function handleSubmitExam() {
    const examIds       = examQs.map(q => q.id)
    const checkpointIds = checkpointQs.map(q => q.id)

    const score = getModuleScore(modMeta.id, checkpointIds, examIds)
    const tier  = getModuleBadgeTier(modMeta.id, checkpointIds, examIds, allDims)

    // Award badge if tier is better than existing or no prior badge
    const prev = prevRecord
    const tierRank = { distinction: 3, mastery: 2, completed: 1 }
    if (!prev || (tierRank[tier] || 0) > (tierRank[prev.badge] || 0)) {
      saveModuleBadge(modMeta.id, tier, score)
      setNewBadge(tier)
      setPrevRecord({ badge: tier, moduleScore: score })
    }

    setExamDone(true)
    setCurrentIdx(examQs.length)
  }

  function handleRetake() {
    setCurrentIdx(0)
    setAnswers({})
    setExamDone(false)
    setNewBadge(null)
    // Clear exam answers in localStorage (allow fresh attempt)
    // saveQuizAnswer uses best-score logic so it won't downgrade a correct answer
  }

  // ── loading / error ─────────────────────────────────────────────────────

  if (loading) {
    return (
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem', textAlign: 'center', color: 'var(--ink-4)' }}>
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

  const completedIds = completedDimensionIds(modMeta.id)
  const remaining = allDims.filter(d => !completedIds.has(d.id))

  const examIds       = examQs.map(q => q.id)
  const checkpointIds = checkpointQs.map(q => q.id)
  const currentScore  = getQuizScore(modMeta.id, examIds)
  const checkpointScore = getQuizScore(modMeta.id, checkpointIds)
  const moduleScore   = 0.65 * checkpointScore + 0.35 * currentScore

  const currentQuestion = examQs[currentIdx]
  const currentAnswer   = currentQuestion ? answers[currentQuestion.id] : null
  const currentOption   = currentQuestion
    ? currentQuestion.options?.find(o => o.id === currentAnswer?.selectedId)
    : null

  const badgeRecord = prevRecord
  const badgeMeta   = badgeRecord ? BADGE_META[badgeRecord.badge] : null

  return (
    <>
      <style>{`
        @keyframes examFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePop {
          0%   { transform: scale(.6); opacity: 0; }
          70%  { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div style={{
        maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(10px)',
        transition: 'opacity .35s ease, transform .35s ease',
      }}>

        {/* Breadcrumb */}
        <Link to={`/learn/${slug}`} style={{
          fontSize: '12px', color: 'var(--ink-4)', textDecoration: 'none',
          display: 'inline-block', marginBottom: '16px',
        }}>
          ← {modMeta.country} module
        </Link>

        {/* ── LOCKED STATE ──────────────────────────────────────────────── */}
        {!unlocked && (
          <div style={{
            background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)',
            borderTop: `4px solid ${modMeta.color}`, padding: '2.5rem', textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔒</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--ink)', margin: '0 0 8px 0' }}>
              Module Exam — Locked
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--ink-3)', margin: '0 0 1.5rem 0', lineHeight: 1.6 }}>
              Complete all {allDims.length} dimensions and their knowledge checks to unlock the capstone exam.
            </p>

            {remaining.length > 0 && (
              <div style={{
                background: 'var(--surface-2)', borderRadius: 'var(--r)',
                padding: '1rem 1.25rem', textAlign: 'left', maxWidth: '380px', margin: '0 auto',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '8px' }}>
                  Still to complete
                </div>
                {remaining.map(d => (
                  <Link key={d.id} to={`/learn/${slug}/${d.dimension_number}`}
                    style={{ display: 'block', fontSize: '13px', color: modMeta.color, textDecoration: 'none', marginBottom: '4px' }}>
                    D{d.dimension_number}: {d.title} →
                  </Link>
                ))}
              </div>
            )}

            <div style={{ marginTop: '1.5rem' }}>
              <span style={{
                fontSize: '12px', color: 'var(--ink-4)',
                background: 'var(--surface-2)', borderRadius: '20px',
                padding: '4px 12px', border: '1px solid var(--border)',
              }}>
                {completedIds.size} of {allDims.length} dimensions complete
              </span>
            </div>
          </div>
        )}

        {/* ── UNLOCKED: EXAM HEADER ─────────────────────────────────────── */}
        {unlocked && (
          <div style={{
            background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)',
            borderTop: `4px solid ${modMeta.color}`, padding: '2rem', marginBottom: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
              <div>
                <h1 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--ink)', margin: '0 0 4px 0' }}>
                  Module Exam
                </h1>
                <p style={{ fontSize: '13.5px', color: 'var(--ink-3)', margin: 0 }}>
                  {examQs.length} questions · Delayed retrieval and applied judgment
                </p>
              </div>
              {badgeRecord && badgeMeta && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '8px 14px',
                  background: badgeMeta.bg, border: `1px solid ${badgeMeta.border}`,
                  borderRadius: '20px', flexShrink: 0,
                }}>
                  <span style={{ fontSize: '16px' }}>{badgeMeta.emoji}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: badgeMeta.color }}>
                    {badgeMeta.label}
                  </span>
                </div>
              )}
            </div>

            {/* Score summary if already attempted */}
            {badgeRecord && (
              <div style={{
                marginTop: '1rem', paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
                display: 'flex', gap: '20px', flexWrap: 'wrap',
              }}>
                {[
                  { label: 'Checkpoint score', value: `${Math.round(checkpointScore * 100)}%` },
                  { label: 'Exam score',        value: `${Math.round(currentScore * 100)}%` },
                  { label: 'Module score',       value: `${Math.round(moduleScore * 100)}%` },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ fontSize: '10px', color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: modMeta.color, fontVariantNumeric: 'tabular-nums' }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── ACTIVE QUESTION ───────────────────────────────────────────── */}
        {unlocked && !examDone && currentQuestion && (
          <div style={{
            background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)',
            padding: '2rem',
            animation: 'examFadeUp .3s ease',
            key: currentQuestion.id,
          }}>
            {/* Progress indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              {examQs.map((_, i) => (
                <div key={i} style={{
                  height: '4px', flex: 1, borderRadius: '2px',
                  background: i < currentIdx ? modMeta.color : i === currentIdx ? `${modMeta.color}60` : 'var(--border)',
                  transition: 'background .3s ease',
                }} />
              ))}
              <span style={{ fontSize: '11px', color: 'var(--ink-4)', flexShrink: 0, marginLeft: '4px' }}>
                {currentIdx + 1} / {examQs.length}
              </span>
            </div>

            {/* Prompt */}
            <p style={{
              fontSize: '15px', color: 'var(--ink)', lineHeight: 1.65, margin: '0 0 1.25rem 0', fontWeight: 500,
            }}>
              {currentQuestion.prompt}
            </p>

            {/* Options */}
            <div>
              {(currentQuestion.options || []).map(option => {
                const answered = !!currentAnswer
                const isSelected = currentAnswer?.selectedId === option.id
                const isCorrect  = option.isCorrect

                let borderColor = 'var(--border)'
                let bg = 'white'
                let color = 'var(--ink-2)'
                let fontWeight = 400

                if (answered) {
                  if (isSelected) {
                    borderColor = isCorrect ? '#22a06b' : '#c9372c'
                    bg = isCorrect ? '#e3fcef' : '#ffebe6'
                    color = 'var(--ink)'
                    fontWeight = 500
                  } else if (isCorrect && !currentAnswer.isCorrect) {
                    borderColor = '#22a06b'
                    bg = '#f3fdf7'
                    color = 'var(--ink-3)'
                  } else {
                    bg = 'var(--surface-2)'
                    color = 'var(--ink-4)'
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(currentQuestion, option)}
                    disabled={answered}
                    style={{
                      width: '100%', textAlign: 'left', padding: '10px 14px',
                      borderRadius: '8px', border: `1.5px solid ${borderColor}`,
                      fontSize: '13.5px', lineHeight: 1.55, cursor: answered ? 'default' : 'pointer',
                      fontFamily: 'inherit', marginBottom: '8px', display: 'block',
                      background: bg, color, fontWeight,
                      transition: 'border-color .15s, background .15s',
                    }}
                    onMouseEnter={e => { if (!answered) e.currentTarget.style.borderColor = modMeta.color }}
                    onMouseLeave={e => { if (!answered) e.currentTarget.style.borderColor = 'var(--border)' }}
                  >
                    <span style={{
                      display: 'inline-block', width: '20px', height: '20px',
                      borderRadius: '50%', border: '1.5px solid currentColor',
                      marginRight: '10px', verticalAlign: 'middle',
                      textAlign: 'center', lineHeight: '17px', fontSize: '10px', fontWeight: 700,
                    }}>
                      {option.id.toUpperCase()}
                    </span>
                    {option.text}
                  </button>
                )
              })}
            </div>

            {/* Feedback after answering */}
            {currentAnswer && currentOption && (
              <div style={{
                marginTop: '12px', padding: '12px 14px', borderRadius: '8px',
                background: currentAnswer.isCorrect ? '#d3f9e2' : '#ffe8e4',
                borderLeft: `3px solid ${currentAnswer.isCorrect ? '#22a06b' : '#c9372c'}`,
              }}>
                <div style={{
                  fontSize: '12px', fontWeight: 700,
                  color: currentAnswer.isCorrect ? '#1a7a50' : '#9e2921',
                  marginBottom: '4px',
                }}>
                  {currentAnswer.isCorrect ? '✓ Correct' : '✗ Not quite'}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>
                  {currentOption.feedback}
                </p>
                {!currentAnswer.isCorrect && (() => {
                  const correctOpt = currentQuestion.options.find(o => o.isCorrect)
                  return correctOpt ? (
                    <p style={{ fontSize: '12px', color: 'var(--ink-3)', margin: '8px 0 0 0', lineHeight: 1.5, paddingTop: '8px', borderTop: '1px solid #f5c4bf' }}>
                      <strong>Stronger reading:</strong> {correctOpt.feedback}
                    </p>
                  ) : null
                })()}
              </div>
            )}

            {/* Next / Submit button */}
            {currentAnswer && (
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                {currentIdx < examQs.length - 1 ? (
                  <button
                    onClick={handleNextQuestion}
                    style={{
                      padding: '9px 20px', background: modMeta.color, color: 'white',
                      border: 'none', borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Next question →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitExam}
                    style={{
                      padding: '9px 20px', background: modMeta.color, color: 'white',
                      border: 'none', borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    Submit exam →
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── RESULTS ───────────────────────────────────────────────────── */}
        {unlocked && examDone && (
          <div style={{ animation: 'examFadeUp .4s ease' }}>
            {/* Badge award card */}
            {badgeRecord && BADGE_META[badgeRecord.badge] && (() => {
              const bm = BADGE_META[badgeRecord.badge]
              return (
                <div style={{
                  background: bm.bg, border: `1px solid ${bm.border}`,
                  borderRadius: 'var(--rl)', padding: '2rem', textAlign: 'center',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    fontSize: '3rem', marginBottom: '8px',
                    display: 'inline-block',
                    animation: newBadge ? 'badgePop .5s ease' : undefined,
                  }}>
                    {bm.emoji}
                  </div>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: bm.color, margin: '0 0 6px 0' }}>
                    {newBadge ? `${bm.label} Earned!` : bm.label}
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--ink-3)', margin: '0 0 1.5rem 0' }}>
                    {modMeta.country} module
                  </p>

                  {/* Score breakdown */}
                  <div style={{
                    display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap',
                    padding: '1rem', background: 'white', borderRadius: 'var(--r)',
                    border: `1px solid ${bm.border}`,
                  }}>
                    {[
                      { label: 'Checkpoint', value: Math.round(checkpointScore * 100) },
                      { label: 'Exam',       value: Math.round(currentScore * 100) },
                      { label: 'Overall',    value: Math.round(moduleScore * 100) },
                    ].map(item => (
                      <div key={item.label} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: 700, color: bm.color, fontVariantNumeric: 'tabular-nums' }}>
                          {item.value}%
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}

            {/* Reviewed questions */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '12px' }}>
                Question Review
              </div>
              {examQs.map((q, i) => {
                const ans = answers[q.id]
                const selOpt = ans ? q.options?.find(o => o.id === ans.selectedId) : null
                const correctOpt = q.options?.find(o => o.isCorrect)
                return (
                  <div key={q.id} style={{
                    background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)',
                    padding: '1rem 1.25rem', marginBottom: '10px',
                    borderLeft: `3px solid ${ans?.isCorrect ? '#22a06b' : '#c9372c'}`,
                  }}>
                    <div style={{ fontSize: '11px', color: 'var(--ink-4)', marginBottom: '4px' }}>
                      Q{i + 1} · {ans?.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--ink)', margin: '0 0 6px 0', fontWeight: 500 }}>
                      {q.prompt}
                    </p>
                    {selOpt && (
                      <p style={{ fontSize: '12px', color: 'var(--ink-3)', margin: 0 }}>
                        <strong>Your answer:</strong> {selOpt.text}
                      </p>
                    )}
                    {!ans?.isCorrect && correctOpt && (
                      <p style={{ fontSize: '12px', color: '#1a7a50', margin: '4px 0 0 0' }}>
                        <strong>Correct:</strong> {correctOpt.text}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

            {/* ── Before you retake: review recommendations ──────────── */}
            {(() => {
              const revisitFlags    = getRevisitFlags(modMeta.id)
              const flaggedQs       = checkpointQs.filter(q => revisitFlags.has(q.id))
              const wrongCheckpoints = checkpointQs.filter(q => {
                const a = getQuizAnswer(modMeta.id, q.id)
                return a && !a.isCorrect
              })
              const wrongExam = examQs.filter(q => {
                const a = answers[q.id] || getQuizAnswer(modMeta.id, q.id)
                return a && !a.isCorrect
              })

              // Merge into a unique set of dim numbers to review (checkpoint items)
              const reviewDimNums = new Set([
                ...flaggedQs.map(q => q.dimension_number),
                ...wrongCheckpoints.map(q => q.dimension_number),
              ])
              const reviewDims = allDims.filter(d => reviewDimNums.has(d.dimension_number))

              if (reviewDims.length === 0 && wrongExam.length === 0) return null

              return (
                <div style={{
                  marginBottom: '1.5rem',
                  padding: '1.25rem 1.5rem',
                  background: '#fffbf0',
                  border: '1px solid #fcd34d',
                  borderRadius: 'var(--rl)',
                }}>
                  <div style={{
                    fontSize: '11px', fontWeight: 700, color: '#92400e',
                    textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '10px',
                  }}>
                    📚 Before you retake — areas to review
                  </div>

                  {reviewDims.length > 0 && (
                    <div style={{ marginBottom: wrongExam.length > 0 ? '12px' : 0 }}>
                      <div style={{ fontSize: '12px', color: '#78350f', fontWeight: 600, marginBottom: '6px' }}>
                        Dimensions to revisit
                      </div>
                      {reviewDims.map(d => (
                        <Link
                          key={d.id}
                          to={`/learn/${slug}/${d.dimension_number}`}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            fontSize: '13px', color: modMeta.color, textDecoration: 'none',
                            marginBottom: '4px',
                          }}
                        >
                          <span style={{
                            width: '20px', height: '20px', borderRadius: '50%',
                            background: `${modMeta.color}15`, color: modMeta.color,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '10px', fontWeight: 700, flexShrink: 0,
                          }}>
                            {d.dimension_number}
                          </span>
                          {d.title} →
                          {revisitFlags.has(checkpointQs.find(q => q.dimension_number === d.dimension_number)?.id) && (
                            <span style={{
                              fontSize: '10px', color: '#D97706', background: '#fffbeb',
                              border: '1px solid #fcd34d', borderRadius: '4px', padding: '1px 6px',
                            }}>
                              low confidence
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}

                  {wrongExam.length > 0 && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#78350f', fontWeight: 600, marginBottom: '6px' }}>
                        Exam questions to review
                      </div>
                      {wrongExam.map((q, i) => {
                        const correctOpt = q.options?.find(o => o.isCorrect)
                        return (
                          <div key={q.id} style={{
                            fontSize: '12.5px', color: 'var(--ink-2)',
                            marginBottom: '8px', lineHeight: 1.5,
                          }}>
                            <span style={{ color: 'var(--ink-4)', marginRight: '4px' }}>Q{examQs.indexOf(q) + 1}.</span>
                            {q.prompt}
                            {correctOpt && (
                              <span style={{ display: 'block', fontSize: '12px', color: '#1a7a50', marginTop: '2px' }}>
                                ✓ {correctOpt.text}
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })()}

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={handleRetake}
                style={{
                  padding: '9px 18px', background: 'white', color: modMeta.color,
                  border: `1.5px solid ${modMeta.color}`, borderRadius: 'var(--r)',
                  fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                }}
              >
                Retake exam
              </button>
              <Link
                to={`/learn/${slug}`}
                style={{
                  padding: '9px 18px', background: modMeta.color, color: 'white',
                  borderRadius: 'var(--r)', fontSize: '13px', fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                ← Back to module
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

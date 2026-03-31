/**
 * QuizCheckpoint.jsx
 *
 * Single-question knowledge-check shown at the end of each dimension.
 *
 * Phase 2 UX flow:
 *   1. Confidence step — "How sure are you about this topic?" (1/2/3)
 *   2. Question step   — pick an answer; immediate inline feedback
 *
 * Confidence is stored alongside the answer. If confidence ≤ 2 AND the
 * teacher selects a wrong answer, a revisit flag is written to localStorage
 * (handled inside saveQuizAnswer in progress.js).
 *
 * If the question was already answered in a prior session, the confidence
 * step is skipped and the answered state is restored directly.
 */

import { useState } from 'react'
import { saveQuizAnswer, getQuizAnswer } from '../../lib/pd/progress.js'

const CONFIDENCE_OPTIONS = [
  { value: 1, label: 'Not sure',         hint: 'I haven\'t fully digested this yet', emoji: '🤔' },
  { value: 2, label: 'Somewhat sure',    hint: 'I have a sense of it',                emoji: '🙂' },
  { value: 3, label: 'Very confident',   hint: 'I could explain this to someone',     emoji: '💡' },
]

export default function QuizCheckpoint({ moduleId, question, color, onAnswered }) {
  const existing = question ? getQuizAnswer(moduleId, question.id) : null

  // If already answered: restore fully submitted state; skip confidence step
  const [confidence, setConfidence]   = useState(existing?.confidence || null)
  const [step, setStep]               = useState(existing ? 'done' : 'confidence')
  const [selectedId, setSelectedId]   = useState(existing?.selectedOptionId || null)
  const [submitted, setSubmitted]     = useState(!!existing)

  if (!question) return null

  const options        = question.options || []
  const selectedOption = options.find(o => o.id === selectedId)
  const isCorrect      = selectedOption?.isCorrect || false
  const correctOption  = options.find(o => o.isCorrect)

  function handleConfidencePick(val) {
    setConfidence(val)
    setStep('question')
  }

  function handleSelect(option) {
    if (submitted) return
    setSelectedId(option.id)
    setSubmitted(true)
    setStep('done')
    saveQuizAnswer(moduleId, question.id, option.id, option.isCorrect, confidence)
    // Clear revisit flag if teacher answered correctly with high confidence
    if (option.isCorrect && confidence >= 3) {
      import('../../lib/pd/progress.js').then(m => m.clearRevisitFlag(moduleId, question.id))
    }
    onAnswered?.({ questionId: question.id, isCorrect: option.isCorrect })
  }

  function optionStyle(option) {
    const base = {
      width: '100%',
      textAlign: 'left',
      padding: '10px 14px',
      borderRadius: '8px',
      border: '1.5px solid',
      fontSize: '13.5px',
      lineHeight: 1.55,
      cursor: submitted ? 'default' : 'pointer',
      transition: 'background .15s, border-color .15s',
      fontFamily: 'inherit',
      marginBottom: '8px',
      display: 'block',
    }

    if (!submitted) {
      return { ...base, borderColor: 'var(--border)', background: 'white', color: 'var(--ink-2)' }
    }

    if (option.id === selectedId) {
      return {
        ...base,
        borderColor: option.isCorrect ? '#22a06b' : '#c9372c',
        background: option.isCorrect ? '#e3fcef' : '#ffebe6',
        color: 'var(--ink)',
        fontWeight: 500,
      }
    }
    if (option.isCorrect && !isCorrect) {
      return { ...base, borderColor: '#22a06b', background: '#f3fdf7', color: 'var(--ink-2)' }
    }
    return { ...base, borderColor: 'var(--border)', background: 'var(--surface-2)', color: 'var(--ink-4)' }
  }

  // ── Section label shared by both steps ──────────────────────────────────
  const sectionLabel = (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '.07em', color, marginBottom: '12px',
    }}>
      <span style={{
        width: '18px', height: '18px', borderRadius: '50%',
        background: `${color}18`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px',
      }}>✦</span>
      Knowledge Check
    </div>
  )

  const containerStyle = {
    marginTop: '2rem',
    padding: '1.5rem',
    background: submitted
      ? (isCorrect ? '#f0fdf6' : '#fff8f6')
      : 'var(--surface-2)',
    border: `1px solid ${submitted ? (isCorrect ? '#bbf0d6' : '#ffd4cc') : 'var(--border)'}`,
    borderRadius: 'var(--rl)',
    transition: 'background .4s ease, border-color .4s ease',
  }

  // ── Step 1: Confidence picker ────────────────────────────────────────────
  if (step === 'confidence') {
    return (
      <div style={containerStyle}>
        {sectionLabel}
        <p style={{ fontSize: '14px', color: 'var(--ink-2)', margin: '0 0 14px 0', lineHeight: 1.6 }}>
          Before you answer — how well do you feel you understand this dimension?
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {CONFIDENCE_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => handleConfidencePick(opt.value)}
              style={{
                width: '100%', textAlign: 'left', padding: '10px 14px',
                borderRadius: '8px', border: '1.5px solid var(--border)',
                fontSize: '13.5px', lineHeight: 1.5, cursor: 'pointer',
                fontFamily: 'inherit', background: 'white', color: 'var(--ink-2)',
                display: 'flex', alignItems: 'center', gap: '10px',
                transition: 'border-color .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <span style={{ fontSize: '18px', flexShrink: 0 }}>{opt.emoji}</span>
              <div>
                <div style={{ fontWeight: 500, color: 'var(--ink)' }}>{opt.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--ink-4)' }}>{opt.hint}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── Step 2 & done: Question + feedback ──────────────────────────────────
  return (
    <div style={containerStyle}>
      {sectionLabel}

      {/* Confidence badge (shown during question + after) */}
      {confidence && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          fontSize: '11px', color: 'var(--ink-4)',
          background: 'white', border: '1px solid var(--border)',
          borderRadius: '20px', padding: '2px 10px',
          marginBottom: '14px',
        }}>
          {CONFIDENCE_OPTIONS.find(o => o.value === confidence)?.emoji}
          {' '}{CONFIDENCE_OPTIONS.find(o => o.value === confidence)?.label}
        </div>
      )}

      {/* Prompt */}
      <p style={{
        fontSize: '14.5px', color: 'var(--ink)', lineHeight: 1.65,
        margin: '0 0 16px 0', fontWeight: 500,
      }}>
        {question.prompt}
      </p>

      {/* Options */}
      <div>
        {options.map(option => (
          <button
            key={option.id}
            onClick={() => handleSelect(option)}
            style={optionStyle(option)}
            onMouseEnter={e => { if (!submitted) e.currentTarget.style.borderColor = color }}
            onMouseLeave={e => { if (!submitted) e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <span style={{
              display: 'inline-block', width: '20px', height: '20px',
              borderRadius: '50%', border: '1.5px solid currentColor',
              marginRight: '10px', verticalAlign: 'middle',
              textAlign: 'center', lineHeight: '17px', fontSize: '10px', fontWeight: 700, flexShrink: 0,
            }}>
              {option.id.toUpperCase()}
            </span>
            {option.text}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {submitted && selectedOption && (
        <div style={{
          marginTop: '12px', padding: '12px 14px', borderRadius: '8px',
          background: isCorrect ? '#d3f9e2' : '#ffe8e4',
          borderLeft: `3px solid ${isCorrect ? '#22a06b' : '#c9372c'}`,
        }}>
          <div style={{
            fontSize: '12px', fontWeight: 700,
            color: isCorrect ? '#1a7a50' : '#9e2921', marginBottom: '4px',
          }}>
            {isCorrect ? '✓ Correct' : '✗ Not quite'}
          </div>
          <p style={{ fontSize: '13px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.6 }}>
            {selectedOption.feedback}
          </p>
          {!isCorrect && correctOption && (
            <p style={{
              fontSize: '12px', color: 'var(--ink-3)', margin: '8px 0 0 0', lineHeight: 1.5,
              paddingTop: '8px', borderTop: '1px solid #f5c4bf',
            }}>
              <strong>Stronger reading:</strong> {correctOption.feedback}
            </p>
          )}
          {/* Research tags */}
          {selectedOption.research && selectedOption.research.length > 0 && (
            <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {(isCorrect ? selectedOption.research : (correctOption?.research || selectedOption.research)).map((ref, i) => (
                <span key={i} style={{
                  fontSize: '10px', color: 'var(--ink-4)',
                  background: 'white', borderRadius: '4px',
                  padding: '2px 7px', border: '1px solid var(--border)',
                }}>
                  {ref}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {!submitted && (
        <p style={{ fontSize: '11px', color: 'var(--ink-4)', margin: '10px 0 0 0' }}>
          Select the strongest interpretation.
        </p>
      )}
    </div>
  )
}

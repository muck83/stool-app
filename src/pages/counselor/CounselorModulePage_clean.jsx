import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MYP_SUBJECTS, getBand } from '../../data/mypCriteria.js'
import { counselorIb } from '../../../vocab/counselor/counselor-ib.jsx'

const MODULES = {
  'counselor-ib': counselorIb,
}

const LS_STAGE   = slug => `pd_counselor_stage_${slug}`
const LS_SECTION = slug => `pd_counselor_section_${slug}`
const LS_VISITED = slug => `pd_counselor_visited_${slug}`
const LS_DONE    = slug => `pd_counselor_done_${slug}`

// ─── Sections ────────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'start',     label: 'Friction Map'       },
  { id: 'cards',     label: 'Translation Cards'  },
  { id: 'scenarios', label: 'Real Situations'    },
  { id: 'tools',     label: 'Grade Tools'        },
  { id: 'bridges',   label: 'Parent Bridges'     },
  { id: 'next',      label: 'Next Steps'         },
]

const STAGE_RECOMMENDED = {
  intake:    'cards',
  'mid-year':'scenarios',
  'dp-entry':'cards',
  predicted: 'scenarios',
}

const STAGE_COLORS = {
  intake:    '#0E8A5F',
  'mid-year':'#185FA5',
  'dp-entry':'#A35E08',
  predicted: '#3F3A8F',
}

const FRICTION_COLORS = {
  high:   '#C0392B',
  medium: '#A35E08',
  low:    '#0E8A5F',
}

const COUNTRY_LABELS = { ksa: 'Saudi Arabia', cn: 'China', kr: 'Korea' }

// ─── Friction Map ─────────────────────────────────────────────────────────────
function FrictionMap({ data, activeStage, onCardClick }) {
  const countries = ['ksa', 'cn', 'kr']
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '2rem' }}>
      <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>Cultural Friction Map</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>
          At-a-glance overview of which friction patterns are highest-risk for each national context.
          {activeStage && <span style={{ color: 'var(--teal)', fontWeight: 600 }}> Filtered for: {SECTIONS.find(s => s.id === activeStage)?.label || activeStage}</span>}
        </div>
      </div>
      <div style={{ padding: '.75rem 1.2rem 1rem', overflowX: 'auto' }}>
        {/* Header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr repeat(3, 80px)', gap: 6, marginBottom: 6 }}>
          <div />
          {countries.map(c => (
            <div key={c} style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-3)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '.06em' }}>
              {COUNTRY_LABELS[c]}
            </div>
          ))}
        </div>
        {/* Data rows */}
        {data.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr repeat(3, 80px)', gap: 6, marginBottom: 5, alignItems: 'center' }}>
            <div style={{ fontSize: 12.5, color: 'var(--ink-2)', fontWeight: 500 }}>{row.dimension}</div>
            {countries.map(c => {
              const level = row[c]
              const col = FRICTION_COLORS[level] || '#7F8C8D'
              return (
                <div
                  key={c}
                  style={{
                    textAlign: 'center', padding: '4px 6px',
                    borderRadius: 6, fontSize: 10.5, fontWeight: 700,
                    background: `${col}18`, color: col,
                    border: `1px solid ${col}44`,
                  }}
                >
                  {level}
                </div>
              )
            })}
          </div>
        ))}
        {/* Legend */}
        <div style={{ display: 'flex', gap: 14, marginTop: '1rem', paddingTop: '.75rem', borderTop: '1px solid var(--border)' }}>
          {Object.entries(FRICTION_COLORS).map(([k, col]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: col }} />
              <span style={{ fontSize: 11, color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>{k}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Workflow Stage Selector ──────────────────────────────────────────────────
function WorkflowSelector({ stages, activeStage, setActiveStage }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.75rem' }}>
        Where are you in the workflow?
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {stages.map((stage, i) => {
          const col = STAGE_COLORS[stage.id]
          const active = activeStage === stage.id
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(active ? null : stage.id)}
              style={{
                textAlign: 'left', padding: '.75rem .875rem',
                borderRadius: 'var(--r)', cursor: 'pointer',
                border: active ? `2px solid ${col}` : '1px solid var(--border)',
                background: active ? `${col}10` : 'var(--surface-2)',
                transition: 'border .15s, background .15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, color: active ? 'white' : col,
                  background: active ? col : `${col}20`,
                  padding: '1px 7px', borderRadius: 10,
                }}>{i + 1}</span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: active ? col : 'var(--ink)' }}>
                  {stage.label}
                </span>
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--ink-4)', lineHeight: 1.5 }}>{stage.description}</div>
              {active && (
                <div style={{ marginTop: 6, fontSize: 11.5, fontWeight: 600, color: col }}>
                  → {stage.highlight}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Section Nav ─────────────────────────────────────────────────────────────
function SectionNav({ active, visited, onChange, recommended }) {
  const total = SECTIONS.length
  const visitedCount = SECTIONS.filter(s => visited.has(s.id)).length

  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.4rem' }}>
        <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.07em' }}>
          Guide sections
        </div>
        <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{visitedCount} of {total} visited</div>
      </div>
      {/* Progress bar */}
      <div style={{ height: 3, background: 'var(--surface-2)', borderRadius: 3, marginBottom: '.75rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <div style={{
          height: '100%', width: `${(visitedCount / total) * 100}%`,
          background: 'var(--teal)', borderRadius: 3, transition: 'width .4s ease',
        }} />
      </div>
      {/* Pills */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
        {SECTIONS.map(s => {
          const isActive = active === s.id
          const isVisited = visited.has(s.id)
          const isRec = recommended === s.id && !isVisited
          return (
            <button
              key={s.id}
              onClick={() => onChange(s.id)}
              style={{
                flexShrink: 0, whiteSpace: 'nowrap',
                padding: '5px 13px', fontSize: 12, fontWeight: 600,
                borderRadius: 20, cursor: 'pointer',
                background: isActive ? 'var(--teal)' : isRec ? 'var(--teal-faint, #DCF0E6)' : 'var(--surface-2)',
                color: isActive ? 'white' : isRec ? 'var(--teal)' : isVisited ? 'var(--ink-3)' : 'var(--ink-4)',
                border: isActive ? '1px solid var(--teal)' : isRec ? '1px solid var(--teal)' : '1px solid var(--border)',
                transition: 'all .15s',
              }}
            >
              {isVisited && !isActive ? '✓ ' : ''}{s.label}{isRec ? ' ★' : ''}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Opening Hook ─────────────────────────────────────────────────────────────
function HookSection({ hook }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div style={{
      background: 'var(--surface-2)', border: '1px solid var(--border)',
      borderLeft: '4px solid var(--teal)', borderRadius: '0 var(--r) var(--r) 0',
      padding: '1.25rem 1.4rem', marginBottom: '2rem',
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.75rem' }}>
        Opening situation
      </div>
      {hook.situation.map((p, i) => (
        <p key={i} style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 .75rem' }}>{p}</p>
      ))}
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          style={{
            marginTop: '.25rem', fontSize: 12.5, fontWeight: 600,
            color: 'var(--teal)', background: 'transparent',
            border: '1px solid var(--teal)', borderRadius: 20,
            padding: '5px 16px', cursor: 'pointer',
          }}
        >
          See the question →
        </button>
      ) : (
        <div>
          <div style={{
            marginTop: '1rem', padding: '.875rem 1rem',
            background: 'var(--teal-faint, #DCF0E6)',
            borderRadius: 'var(--r)', fontSize: 14,
            fontWeight: 600, color: 'var(--teal-dark)',
            lineHeight: 1.6,
          }}>
            {hook.question}
          </div>
          <div style={{
            marginTop: '.75rem', padding: '.875rem 1rem',
            background: 'var(--surface-2)', borderRadius: 'var(--r)',
            border: '1px solid var(--border)', fontSize: 13.5,
            color: 'var(--ink-2)', lineHeight: 1.7,
          }}>
            {hook.directAnswer}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Counselor Card ───────────────────────────────────────────────────────────
function CounselorCard({ card, index, activeStage, onShareBridge }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const colors = ['#0E8A5F', '#185FA5', '#A35E08', '#3F3A8F', '#C0392B', '#0E7490']
  const col = colors[index % colors.length]
  const isRelevant = activeStage && card.relevantAt && card.relevantAt.includes(activeStage)
  const stageCol = activeStage ? STAGE_COLORS[activeStage] : null

  const handleCopy = () => {
    navigator.clipboard.writeText(card.parentBridge.copyableText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{
      border: `1px solid ${isRelevant ? stageCol : col}44`,
      borderTop: `3px solid ${isRelevant ? stageCol : col}`,
      borderRadius: '0 0 var(--r) var(--r)',
      background: 'var(--surface)',
      marginBottom: '1.25rem', overflow: 'hidden',
      boxShadow: isRelevant ? `0 0 0 2px ${stageCol}22` : 'none',
      transition: 'box-shadow .2s',
    }}>
      {/* Header */}
      <div style={{ padding: '1rem 1.2rem .875rem', background: `${col}08` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.07em' }}>
                Card {index + 1}
              </span>
              {isRelevant && (
                <span style={{ fontSize: 10, fontWeight: 700, background: stageCol, color: 'white', padding: '1px 7px', borderRadius: 10 }}>
                  ★ Relevant now
                </span>
              )}
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>
              {card.concept}
            </div>
          </div>
        </div>

        {/* Friction level badges */}
        <div style={{ display: 'flex', gap: 6, marginTop: '.75rem', flexWrap: 'wrap' }}>
          {Object.entries(card.frictionLevel).map(([country, level]) => {
            const fc = FRICTION_COLORS[level] || '#7F8C8D'
            return (
              <span key={country} style={{
                fontSize: 10.5, fontWeight: 600, padding: '2px 9px',
                borderRadius: 10, background: `${fc}18`, color: fc,
                border: `1px solid ${fc}44`,
              }}>
                {COUNTRY_LABELS[country]}: {level}
              </span>
            )
          })}
        </div>

        {/* Friction pattern */}
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            The pattern
          </div>
          <div style={{
            fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7,
            padding: '.75rem 1rem', background: 'var(--surface-2)',
            borderRadius: 'var(--r)', borderLeft: '3px solid var(--border-strong, #ccc)',
          }}>
            {card.frictionPattern}
          </div>
        </div>
      </div>

      {/* Reveal toggle */}
      {!open ? (
        <div style={{ padding: '.875rem 1.2rem' }}>
          <button
            onClick={() => setOpen(true)}
            style={{
              fontSize: 12.5, fontWeight: 600, color: col,
              background: `${col}10`, border: `1px solid ${col}44`,
              borderRadius: 20, padding: '6px 18px', cursor: 'pointer',
            }}
          >
            Why it recurs + reframe →
          </button>
        </div>
      ) : (
        <div style={{ padding: '1rem 1.2rem 1.25rem', borderTop: `1px solid ${col}22` }}>

          {/* Why it recurs — per country */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8 }}>
              Why it recurs — by context
            </div>
            {Object.entries(card.whyItRecurs).map(([country, text]) => (
              <div key={country} style={{
                marginBottom: 8, padding: '.625rem .875rem',
                background: 'var(--surface-2)', borderRadius: 'var(--r)',
                borderLeft: `3px solid ${FRICTION_COLORS[card.frictionLevel[country]] || '#ccc'}`,
              }}>
                <div style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 3 }}>
                  {COUNTRY_LABELS[country]}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{text}</div>
              </div>
            ))}
          </div>

          {/* Counselor reframe */}
          <div style={{
            marginBottom: '1.25rem', padding: '.875rem 1rem',
            background: '#FFFBEB', border: '1px solid #F0C060', borderRadius: 'var(--r)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#92400E', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 5 }}>
              Reframe for the room
            </div>
            <div style={{ fontSize: 13.5, color: '#78350F', lineHeight: 1.75, fontStyle: 'italic' }}>
              "{card.counselorReframe}"
            </div>
          </div>

          {/* Parent Bridge */}
          <div style={{
            padding: '.875rem 1rem',
            background: '#DCF0E6', border: '1px solid #0E8A5F33', borderRadius: 'var(--r)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: 6, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#0E8A5F', textTransform: 'uppercase', letterSpacing: '.05em' }}>
                Parent Bridge — copy &amp; send
              </div>
              <button
                onClick={handleCopy}
                style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 12px',
                  borderRadius: 12, cursor: 'pointer',
                  background: copied ? '#0E8A5F' : 'white',
                  color: copied ? 'white' : '#0E8A5F',
                  border: '1px solid #0E8A5F44',
                  transition: 'background .15s, color .15s',
                  flexShrink: 0,
                }}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div style={{ fontSize: 13, color: '#1D4030', lineHeight: 1.7 }}>
              {card.parentBridge.copyableText}
            </div>
            {card.parentBridge.moduleLink && (
              <div style={{ marginTop: 8 }}>
                <Link
                  to={`/parent/${card.parentBridge.moduleLink.split('#')[0]}`}
                  style={{ fontSize: 12, color: '#0E8A5F', textDecoration: 'underline', fontWeight: 600 }}
                >
                  → Share with parent: {card.parentBridge.moduleLinkLabel}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Branching Scenario ───────────────────────────────────────────────────────
function BranchingScenario({ scenario, index }) {
  const [chosen, setChosen] = useState(null) // branch id or null
  const OUTCOME_COLORS = { best: '#0E8A5F', partial: '#A35E08', difficult: '#C0392B' }
  const OUTCOME_LABELS = { best: 'Most effective', partial: 'Works, with trade-offs', difficult: 'Problematic path' }

  return (
    <div style={{
      border: '1px solid var(--border)', borderRadius: 'var(--r)',
      background: 'var(--surface)', marginBottom: '1.5rem', overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '.875rem 1.2rem', background: 'var(--surface-2)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: '.75rem',
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: 'var(--teal)', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 700, flexShrink: 0,
        }}>{index + 1}</div>
        <div>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{scenario.title}</div>
          <div style={{ fontSize: 11, color: 'var(--teal)', marginTop: 2 }}>{scenario.contextNote}</div>
        </div>
      </div>

      <div style={{ padding: '1rem 1.2rem' }}>
        {/* Setup */}
        <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
          {scenario.setup}
        </div>

        {/* Branch prompt */}
        {!chosen && (
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>
              What do you do?
            </div>
            {scenario.branches.map(branch => (
              <button
                key={branch.id}
                onClick={() => setChosen(branch.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '.75rem .875rem', marginBottom: 8,
                  borderRadius: 'var(--r)', cursor: 'pointer',
                  border: '1px solid var(--border)',
                  background: 'var(--surface-2)',
                  fontSize: 13, color: 'var(--ink)', lineHeight: 1.55,
                  transition: 'border .15s, background .15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--teal)'
                  e.currentTarget.style.background = 'var(--teal-faint, #DCF0E6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--surface-2)'
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--teal)', marginRight: 6 }}>{branch.id}.</span>
                <span style={{ fontWeight: 600 }}>{branch.label}</span>
                <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>{branch.description}</div>
              </button>
            ))}
          </div>
        )}

        {/* Consequence reveal */}
        {chosen && (() => {
          const branch = scenario.branches.find(b => b.id === chosen)
          const col = OUTCOME_COLORS[branch.outcome]
          return (
            <div>
              {/* Chosen option reminder */}
              <div style={{
                padding: '.625rem .875rem', marginBottom: '1rem',
                background: 'var(--surface-2)', borderRadius: 'var(--r)',
                border: '1px solid var(--border)', fontSize: 12.5, color: 'var(--ink-3)',
              }}>
                You chose: <strong style={{ color: 'var(--ink)' }}>{branch.label}</strong>
              </div>

              {/* Consequence */}
              <div style={{
                padding: '.875rem 1rem', borderRadius: 'var(--r)',
                background: `${col}10`, border: `1px solid ${col}44`,
                marginBottom: '1rem',
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 5 }}>
                  {OUTCOME_LABELS[branch.outcome]} — what happens
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
                  {branch.consequence}
                </div>
              </div>

              {/* Teaching point */}
              <div style={{
                padding: '.75rem .875rem', background: '#FFFBEB',
                border: '1px solid #F0C060', borderRadius: 'var(--r)', marginBottom: '1rem',
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#92400E', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 4 }}>
                  Key insight
                </div>
                <div style={{ fontSize: 13, color: '#78350F', lineHeight: 1.7 }}>
                  {scenario.teachingPoint}
                </div>
              </div>

              {/* Try another / try all */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button
                  onClick={() => setChosen(null)}
                  style={{
                    fontSize: 12, fontWeight: 600, padding: '5px 14px',
                    borderRadius: 20, cursor: 'pointer',
                    color: 'var(--teal)', background: 'transparent',
                    border: '1px solid var(--teal)44',
                  }}
                >
                  Try another path →
                </button>
                {scenario.branches.filter(b => b.id !== chosen).map(b => {
                  const c = OUTCOME_COLORS[b.outcome]
                  return (
                    <button
                      key={b.id}
                      onClick={() => setChosen(b.id)}
                      style={{
                        fontSize: 12, fontWeight: 600, padding: '5px 14px',
                        borderRadius: 20, cursor: 'pointer',
                        color: c, background: `${c}10`,
                        border: `1px solid ${c}44`,
                      }}
                    >
                      See path {b.id}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })()}
      </div>
    </div>
  )
}

// ─── MYP Calculator (simplified, counselor-framed) ───────────────────────────
function MypCalculator({ data }) {
  const [criteria, setCriteria] = useState({ A: 0, B: 0, C: 0, D: 0 })
  const total = Object.values(criteria).reduce((s, v) => s + v, 0)
  const boundary = data.boundaries.find(b => total >= b.min && total <= b.max)
  const grade = boundary ? boundary.grade : null
  const descriptor = grade ? data.descriptors.find(d => d.grade === grade) : null
  const gradeColor = grade >= 6 ? '#0E8A5F' : grade >= 4 ? '#185FA5' : grade >= 2 ? '#A35E08' : '#C0392B'

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1.5rem' }}>
      <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>MYP Grade Calculator</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>
          {data.intro}
        </div>
      </div>
      <div style={{ padding: '1.1rem 1.2rem' }}>
        {['A', 'B', 'C', 'D'].map(l => (
          <div key={l} style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>Criterion {l}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--teal-dark)' }}>{criteria[l]} / 8</span>
            </div>
            <input type="range" min={0} max={8} value={criteria[l]}
              onChange={e => setCriteria(prev => ({ ...prev, [l]: parseInt(e.target.value) }))}
              style={{ width: '100%', accentColor: 'var(--teal)', cursor: 'pointer' }} />
          </div>
        ))}

        <div style={{
          display: 'flex', alignItems: 'center', gap: '1.25rem',
          padding: '1rem 1.1rem',
          background: `${gradeColor}10`, border: `1px solid ${gradeColor}44`,
          borderRadius: 'var(--r)',
        }}>
          <div style={{ textAlign: 'center', minWidth: 64 }}>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 2 }}>Total</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: gradeColor }}>{total}<span style={{ fontSize: 13, fontWeight: 400, color: 'var(--ink-4)' }}>/32</span></div>
          </div>
          <div style={{ width: 1, height: 40, background: 'var(--border)' }} />
          <div style={{ textAlign: 'center', minWidth: 56 }}>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 2 }}>Grade</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: gradeColor, lineHeight: 1 }}>{grade || '—'}</div>
            <div style={{ fontSize: 10, color: 'var(--ink-4)', marginTop: 2 }}>out of 7</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: gradeColor }}>{descriptor?.label || '—'}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 3, lineHeight: 1.5 }}>
              Boundaries: {boundary ? `${boundary.min}–${boundary.max}` : '—'} points
            </div>
          </div>
        </div>

        {data.watchOut && (
          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {data.watchOut.map((note, i) => (
              <div key={i} style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6, paddingLeft: 10, borderLeft: '2px solid var(--teal)' }}>
                {note}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── EE/ToK Matrix ────────────────────────────────────────────────────────────
function EeTokMatrix({ data }) {
  const [ee, setEe] = useState(null)
  const [tok, setTok] = useState(null)
  const grades = ['A', 'B', 'C', 'D', 'E']

  const selected = ee && tok ? data.eeTokMatrix.find(r => r.ee === ee && r.tok === tok) : null
  const points = selected ? selected.points : null
  const ptColor = points === null ? 'var(--ink-4)' : points === 3 ? '#0E8A5F' : points >= 1 ? '#185FA5' : points === 0 ? '#A35E08' : '#C0392B'

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1.5rem' }}>
      <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>EE + ToK Bonus Calculator</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>
          Select grades to see bonus points. This is the table to show any family that thinks the EE is optional.
        </div>
      </div>
      <div style={{ padding: '1.1rem 1.2rem' }}>
        {['ee', 'tok'].map(component => {
          const val = component === 'ee' ? ee : tok
          const set = component === 'ee' ? setEe : setTok
          const label = component === 'ee' ? 'Extended Essay' : 'Theory of Knowledge'
          return (
            <div key={component} style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-3)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.05em' }}>
                {label}
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {grades.map(g => (
                  <button key={g} onClick={() => set(val === g ? null : g)} style={{
                    flex: 1, padding: '7px 0', fontSize: 14, fontWeight: 700,
                    borderRadius: 6, cursor: 'pointer',
                    background: val === g ? (g === 'E' ? '#C0392B' : 'var(--teal)') : 'var(--surface-2)',
                    color: val === g ? 'white' : 'var(--ink-3)',
                    border: `1px solid ${val === g ? 'transparent' : 'var(--border)'}`,
                    transition: 'background .12s, color .12s',
                  }}>{g}</button>
                ))}
              </div>
            </div>
          )
        })}

        <div style={{
          padding: '.875rem 1rem', borderRadius: 'var(--r)',
          background: `${ptColor}10`, border: `1px solid ${ptColor}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: '.5rem',
        }}>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', fontWeight: 500 }}>
            EE+ToK bonus points
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, color: ptColor }}>
            {points === null ? '—' : points === -1 ? '⚠ Diploma at risk' : `+${points}`}
          </div>
        </div>

        {data.watchOut && (
          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {data.watchOut.map((note, i) => (
              <div key={i} style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6, paddingLeft: 10, borderLeft: '2px solid var(--teal)' }}>
                {note}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Parent Bridges (all in one place) ───────────────────────────────────────
function ParentBridgesSection({ cards }) {
  const [copied, setCopied] = useState(null)
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <div>
      <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        All six Parent Bridge scripts in one place — copy any of them directly into a follow-up email, PTM summary, or parent communication platform. Each one is written to be sent as-is or lightly adapted.
      </p>
      {cards.map((card, i) => {
        const colors = ['#0E8A5F', '#185FA5', '#A35E08', '#3F3A8F', '#C0392B', '#0E7490']
        const col = colors[i % colors.length]
        return (
          <div key={card.id} style={{
            border: `1px solid ${col}33`, borderLeft: `3px solid ${col}`,
            borderRadius: '0 var(--r) var(--r) 0',
            background: 'var(--surface)', marginBottom: '1.25rem', overflow: 'hidden',
          }}>
            <div style={{
              padding: '.75rem 1rem', background: `${col}08`,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem', flexWrap: 'wrap',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: col }}>{card.concept}</div>
              <button
                onClick={() => handleCopy(card.id, card.parentBridge.copyableText)}
                style={{
                  fontSize: 11, fontWeight: 700, padding: '3px 12px',
                  borderRadius: 12, cursor: 'pointer', flexShrink: 0,
                  background: copied === card.id ? col : 'white',
                  color: copied === card.id ? 'white' : col,
                  border: `1px solid ${col}55`,
                  transition: 'background .15s, color .15s',
                }}
              >
                {copied === card.id ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div style={{ padding: '.875rem 1rem', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}>
              {card.parentBridge.copyableText}
            </div>
            {card.parentBridge.moduleLink && (
              <div style={{ padding: '0 1rem .875rem' }}>
                <Link
                  to={`/parent/${card.parentBridge.moduleLink.split('#')[0]}`}
                  style={{ fontSize: 12, color: col, textDecoration: 'underline', fontWeight: 600 }}
                >
                  → Share parent guide: {card.parentBridge.moduleLinkLabel}
                </Link>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CounselorModulePage() {
  const { slug } = useParams()
  const activity = MODULES[slug]

  const [activeStage, setActiveStageState] = useState(() => localStorage.getItem(LS_STAGE(slug)) || null)
  const [activeSection, setActiveSectionState] = useState(() => localStorage.getItem(LS_SECTION(slug)) || 'start')
  const [visitedSections, setVisitedSections] = useState(() => {
    const stored = localStorage.getItem(LS_VISITED(slug))
    const s = stored ? new Set(stored.split(',')) : new Set()
    s.add('start')
    return s
  })

  const setActiveStage = (s) => {
    setActiveStageState(s)
    if (s) localStorage.setItem(LS_STAGE(slug), s)
    else localStorage.removeItem(LS_STAGE(slug))
  }

  const goToSection = useCallback((id) => {
    setActiveSectionState(id)
    localStorage.setItem(LS_SECTION(slug), id)
    setVisitedSections(prev => {
      const next = new Set(prev)
      next.add(id)
      localStorage.setItem(LS_VISITED(slug), [...next].join(','))
      return next
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (!activity) {
    return (
      <div style={{ maxWidth: 640, margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: '1rem' }}>🔍</div>
        <div style={{ fontSize: 16, color: 'var(--ink)' }}>Module not found.</div>
        <Link to="/learn" style={{ color: 'var(--teal)', fontSize: 13, marginTop: '1rem', display: 'inline-block' }}>← Back to learn</Link>
      </div>
    )
  }

  const currentIdx = SECTIONS.findIndex(s => s.id === activeSection)
  const nextSection = currentIdx < SECTIONS.length - 1 ? SECTIONS[currentIdx + 1] : null
  const recommended = activeStage ? STAGE_RECOMMENDED[activeStage] : null
  const ns = activity.nextSteps
  const nextStepsItems = (activeStage && ns[activeStage]) ? ns[activeStage] : ns.default

  const SectionFooter = () => nextSection ? (
    <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={() => goToSection(nextSection.id)} style={{
        fontSize: 12.5, fontWeight: 600, color: 'var(--teal)',
        background: 'transparent', border: '1px solid var(--teal)44',
        borderRadius: 20, padding: '7px 20px', cursor: 'pointer',
      }}>
        Next: {nextSection.label} →
      </button>
    </div>
  ) : null

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '1.5rem 1.25rem 4rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
          Counselor Guide · IB
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.25, margin: 0 }}>
          {activity.meta.title}
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 8, lineHeight: 1.6, marginBottom: 0 }}>
          {activity.meta.subtitle}
        </p>
      </div>

      {/* Stage chip when a workflow moment is selected */}
      {activeStage && activeSection !== 'start' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{
            background: STAGE_COLORS[activeStage] + '18',
            border: `1px solid ${STAGE_COLORS[activeStage]}55`,
            borderRadius: 20, padding: '3px 11px',
            fontSize: 11.5, fontWeight: 600, color: STAGE_COLORS[activeStage],
          }}>
            {activity.journeyStages.find(s => s.id === activeStage)?.label}
          </span>
          <button onClick={() => goToSection('start')} style={{
            fontSize: 11.5, color: 'var(--ink-4)', background: 'none',
            border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline',
          }}>
            change moment
          </button>
        </div>
      )}

      {/* Section nav */}
      <SectionNav
        active={activeSection}
        visited={visitedSections}
        onChange={goToSection}
        recommended={recommended}
      />

      {/* ── START / FRICTION MAP ──────────────────────────────────────────── */}
      {activeSection === 'start' && (
        <div>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            {activity.meta.intro}
          </p>
          <div style={{
            marginBottom: '1.5rem', padding: '.875rem 1rem',
            background: 'var(--surface-2)', borderRadius: 'var(--r)',
            border: '1px solid var(--border)', borderLeft: '3px solid var(--teal)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 5 }}>
              A note on who this is for
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>
              {activity.meta.counselorNote}
            </div>
          </div>

          <HookSection hook={activity.openingHook} />

          <FrictionMap data={activity.frictionMap} activeStage={activeStage} />

          <WorkflowSelector
            stages={activity.journeyStages}
            activeStage={activeStage}
            setActiveStage={setActiveStage}
          />

          {activeStage && recommended && (
            <div style={{
              marginBottom: '1.5rem', padding: '.875rem 1rem',
              background: STAGE_COLORS[activeStage] + '12',
              border: `1px solid ${STAGE_COLORS[activeStage]}33`,
              borderRadius: 'var(--r)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
            }}>
              <div style={{ fontSize: 13, color: STAGE_COLORS[activeStage], fontWeight: 500 }}>
                {activity.journeyStages.find(s => s.id === activeStage)?.highlight}
              </div>
              <button onClick={() => goToSection(recommended)} style={{
                fontSize: 12.5, fontWeight: 600, padding: '5px 16px',
                borderRadius: 20, cursor: 'pointer', flexShrink: 0,
                background: STAGE_COLORS[activeStage], color: 'white', border: 'none',
              }}>
                Go there →
              </button>
            </div>
          )}

          <SectionFooter />
        </div>
      )}

      {/* ── TRANSLATION CARDS ─────────────────────────────────────────────── */}
      {activeSection === 'cards' && (
        <div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            Six recurring friction patterns — each named, explained across all three national contexts, and equipped with a reframe for the room and a Parent Bridge you can copy and send.
          </p>
          {activity.cards
            .filter(card => !activeStage || card.relevantAt.includes(activeStage))
            .map((card, i) => (
              <CounselorCard key={card.id} card={card} index={i} activeStage={activeStage} />
            ))}
          {activeStage && activity.cards.filter(c => !c.relevantAt.includes(activeStage)).length > 0 && (
            <div style={{ padding: '.75rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', border: '1px solid var(--border)', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: 12, color: 'var(--ink-4)' }}>
                {activity.cards.filter(c => !c.relevantAt.includes(activeStage)).length} cards hidden for your current workflow moment.
              </span>
              <button onClick={() => setActiveStage(null)} style={{
                marginLeft: 8, fontSize: 12, color: 'var(--teal)', background: 'none',
                border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline',
              }}>Show all</button>
            </div>
          )}
          <SectionFooter />
        </div>
      )}

      {/* ── SCENARIOS ─────────────────────────────────────────────────────── */}
      {activeSection === 'scenarios' && (
        <div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            Three real situations. Choose how to respond — then see what happens before you see the explanation. Each scenario plays out across all branches so you can compare paths.
          </p>
          {activity.scenarios
            .filter(s => !activeStage || s.relevantAt.includes(activeStage))
            .map((scenario, i) => (
              <BranchingScenario key={scenario.id} scenario={scenario} index={i} />
            ))}
          <SectionFooter />
        </div>
      )}

      {/* ── GRADE TOOLS ───────────────────────────────────────────────────── */}
      {activeSection === 'tools' && (
        <div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '.75rem' }}>
            {activity.gradeSystem.counselorNote}
          </p>
          <MypCalculator data={activity.gradeSystem.myp} />
          <EeTokMatrix data={activity.gradeSystem.dp} />
          <SectionFooter />
        </div>
      )}

      {/* ── PARENT BRIDGES ────────────────────────────────────────────────── */}
      {activeSection === 'bridges' && (
        <div>
          <ParentBridgesSection cards={activity.cards} />
          <SectionFooter />
        </div>
      )}

      {/* ── NEXT STEPS ────────────────────────────────────────────────────── */}
      {activeSection === 'next' && (
        <div>
          {activeStage && (
            <div style={{
              marginBottom: '1.25rem', padding: '.75rem 1rem',
              background: STAGE_COLORS[activeStage] + '12',
              border: `1px solid ${STAGE_COLORS[activeStage]}33`,
              borderRadius: 'var(--r)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: STAGE_COLORS[activeStage], textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 3 }}>
                For: {activity.journeyStages.find(s => s.id === activeStage)?.label}
              </div>
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {nextStepsItems.map((item, i) => (
              <div key={i} style={{
                padding: '.875rem 1rem', background: 'var(--surface-2)',
                borderRadius: 'var(--r)', border: '1px solid var(--border)',
                borderLeft: '3px solid var(--teal)',
                fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75,
              }}>
                {item}
              </div>
            ))}
          </div>
          {/* Back to parent modules */}
          <div style={{
            marginTop: '2rem', padding: '1rem 1.1rem',
            background: 'var(--surface-2)', borderRadius: 'var(--r)',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8 }}>
              Share with parents
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { slug: 'ksa-ib',    label: 'Saudi Arabia guide' },
                { slug: 'china-ib',  label: 'China guide'        },
                { slug: 'korea-ib',  label: 'Korea guide'        },
              ].map(m => (
                <Link
                  key={m.slug}
                  to={`/parent/${m.slug}`}
                  style={{
                    fontSize: 12.5, fontWeight: 600, padding: '5px 14px',
                    borderRadius: 20, textDecoration: 'none',
                    background: 'var(--teal-faint, #DCF0E6)',
                    color: 'var(--teal)', border: '1px solid var(--teal)44',
                  }}
                >
                  {m.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

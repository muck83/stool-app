import { useState } from 'react'
import { Link } from 'react-router-dom'
import { woodstockParent as mod } from '../../../vocab/parent/woodstock-parent.jsx'

// ─── Brand tokens ────────────────────────────────────────────────────────────
const WS  = '#8B1A1A'   // Woodstock maroon
const WG  = '#5C7A3C'   // Himalayan green
const WSL = '#F9F2F2'   // maroon tint surface

// Stage → color map
const STAGE_COLORS = {
  new:      '#1D9E75',
  igcse:    '#185FA5',
  ap:       WS,
  boarding: WG,
}

// ─── Sections ────────────────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'start',    label: 'Start Here'         },
  { id: 'concepts', label: 'Core Concepts'      },
  { id: 'grades',   label: 'Grades Decoded'     },
  { id: 'diploma',  label: 'WSD'                },
  { id: 'pathways', label: 'University Pathways' },
  { id: 'next',     label: 'Next Steps'         },
]

// ─── Section nav ─────────────────────────────────────────────────────────────
function SectionNav({ active, setActive }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch',
    }}>
      <div style={{
        display: 'flex', gap: 0,
        maxWidth: 700, margin: '0 auto',
        padding: '0 1rem',
      }}>
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              padding: '10px 14px',
              fontSize: 12.5, fontWeight: 600,
              border: 'none', cursor: 'pointer',
              background: 'transparent',
              color: active === s.id ? WS : 'var(--ink-4)',
              borderBottom: active === s.id ? `2px solid ${WS}` : '2px solid transparent',
              whiteSpace: 'nowrap',
              transition: 'color .15s',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Journey stage selector ────────────────────────────────────────────────
function StageSelector({ active, onSelect }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 10 }}>
        Which stage is your family in?
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {mod.journeyStages.map(stage => {
          const col = STAGE_COLORS[stage.id]
          const isActive = active === stage.id
          return (
            <button
              key={stage.id}
              onClick={() => onSelect(isActive ? null : stage.id)}
              style={{
                textAlign: 'left',
                padding: '12px 14px',
                border: `1px solid ${isActive ? col : 'var(--border)'}`,
                borderLeft: `4px solid ${isActive ? col : 'var(--border)'}`,
                borderRadius: '0 var(--r) var(--r) 0',
                background: isActive ? `${col}0D` : 'var(--surface)',
                cursor: 'pointer',
                transition: 'border .15s, background .15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ fontSize: 20, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>{stage.icon}</span>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: isActive ? col : 'var(--ink)', marginBottom: 3 }}>
                    {stage.label}
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                    {stage.description}
                  </div>
                  {isActive && (
                    <div style={{
                      marginTop: 8, fontSize: 11.5, fontWeight: 600,
                      color: col,
                      background: `${col}15`,
                      padding: '4px 10px', borderRadius: 20, display: 'inline-block',
                    }}>
                      → {stage.highlight}
                    </div>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Opening hook ─────────────────────────────────────────────────────────────
function OpeningHook() {
  const [revealed, setRevealed] = useState(false)
  const h = mod.openingHook
  return (
    <div style={{
      background: 'var(--surface-2)',
      border: '1px solid var(--border)',
      borderLeft: `4px solid ${WS}`,
      borderRadius: '0 var(--r) var(--r) 0',
      padding: '1.25rem 1.4rem',
      marginBottom: '2rem',
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.75rem' }}>
        A familiar situation
      </div>
      {h.situation.map((p, i) => (
        <p key={i} style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 .75rem' }}>{p}</p>
      ))}
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          style={{
            marginTop: '.25rem', fontSize: 12.5, fontWeight: 600,
            color: WS, background: 'transparent',
            border: `1px solid ${WS}`, borderRadius: 20,
            padding: '5px 16px', cursor: 'pointer',
          }}
        >
          See the question →
        </button>
      ) : (
        <div>
          <div style={{
            marginTop: '1rem', padding: '.875rem 1rem',
            background: `${WS}10`,
            borderRadius: 'var(--r)', fontSize: 14,
            fontWeight: 600, color: WS,
            lineHeight: 1.6,
          }}>
            {h.question}
          </div>
          <div style={{
            marginTop: '.75rem', padding: '.875rem 1rem',
            background: 'var(--surface-2)', borderRadius: 'var(--r)',
            border: '1px solid var(--border)', fontSize: 13.5,
            color: 'var(--ink-2)', lineHeight: 1.7,
          }}>
            {h.directAnswer}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Concept card ─────────────────────────────────────────────────────────────
function ConceptCard({ card, index, activeStage }) {
  const [open, setOpen] = useState(false)
  const colors = [WS, '#185FA5', WG, '#BA7517', '#534AB7']
  const col = colors[index % colors.length]
  const isRelevant = activeStage && card.relevantAt && card.relevantAt.includes(activeStage)
  const stageCol = activeStage ? STAGE_COLORS[activeStage] : null

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
                Concept {index + 1}
              </span>
              {isRelevant && (
                <span style={{ fontSize: 10, fontWeight: 700, background: stageCol, color: 'white', padding: '1px 7px', borderRadius: 10 }}>
                  ★ Relevant now
                </span>
              )}
              <span style={{
                fontSize: 10.5, fontWeight: 500,
                background: `${col}18`, color: col,
                padding: '2px 8px', borderRadius: 10,
              }}>
                {card.component}
              </span>
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>
              {card.concept}
            </div>
          </div>
        </div>

        {/* Concern */}
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            A common concern
          </div>
          <div style={{
            fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7,
            padding: '.75rem 1rem', background: 'var(--surface-2)',
            borderRadius: 'var(--r)', borderLeft: '3px solid var(--border-strong, #ccc)',
          }}>
            {card.concern}
          </div>
        </div>
      </div>

      {/* Reveal */}
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
            What the school is doing →
          </button>
        </div>
      ) : (
        <div style={{ padding: '1rem 1.2rem 1.25rem', borderTop: `1px solid ${col}22` }}>
          {/* Bridge */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              What the school is doing
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
              {card.bridge}
            </div>
          </div>

          {/* Goal */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              How this connects to your goal
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
              {card.goal}
            </div>
          </div>

          {/* Woodstock note */}
          <div style={{
            fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6,
            padding: '.75rem 1rem', background: `${col}08`,
            borderRadius: 'var(--r)', borderLeft: `3px solid ${col}55`,
            marginBottom: card.whatToAsk ? '1rem' : 0,
          }}>
            <strong style={{ color: col }}>Woodstock: </strong>{card.woodstockNote}
          </div>

          {/* What to ask */}
          {card.whatToAsk && (
            <div style={{ padding: '.875rem 1rem', background: '#FFFBEB', border: '1px solid #F0C060', borderRadius: 'var(--r)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#92400E', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 4 }}>
                What to ask at your next meeting
              </div>
              <div style={{ fontSize: 11, color: '#A16207', marginBottom: 8, lineHeight: 1.5 }}>
                Woodstock teachers and counsellors welcome specific questions — asking directly is expected and helpful.
              </div>
              {card.whatToAsk.map((q, i) => (
                <div key={i} style={{
                  fontSize: 12.5, color: '#78350F', lineHeight: 1.65,
                  paddingLeft: 10, borderLeft: '2px solid #F0C060',
                  marginBottom: i < card.whatToAsk.length - 1 ? 8 : 0,
                }}>
                  {q}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── IGCSE Grade Explorer ─────────────────────────────────────────────────────
function IgcseExplorer() {
  const [selected, setSelected] = useState(null)
  const grades = mod.igcseGrades

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
        Cambridge IGCSE Grade Scale
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.6 }}>
        Tap a grade to see what it means and what it signals for university applications.
        A–C are the grades most universities require; A* and A are competitive.
      </div>

      {/* Grade buttons */}
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
        {grades.map(g => (
          <button
            key={g.grade}
            onClick={() => setSelected(selected === g.grade ? null : g.grade)}
            style={{
              width: 52, height: 52,
              fontSize: 16, fontWeight: 800,
              borderRadius: 8, border: 'none', cursor: 'pointer',
              background: selected === g.grade ? g.color : `${g.color}18`,
              color: selected === g.grade ? 'white' : g.color,
              transition: 'background .15s, color .15s',
            }}
          >
            {g.grade}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      {selected && (() => {
        const g = grades.find(x => x.grade === selected)
        if (!g) return null
        return (
          <div style={{
            padding: '1rem 1.2rem',
            background: `${g.color}0D`,
            border: `1px solid ${g.color}44`,
            borderLeft: `4px solid ${g.color}`,
            borderRadius: '0 var(--r) var(--r) 0',
          }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: g.color, marginBottom: 4 }}>{g.grade}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{g.label}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{g.note}</div>
          </div>
        )
      })()}

      {/* Key context note */}
      <div style={{
        marginTop: '1rem', padding: '.875rem 1rem',
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r)',
        fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.65,
      }}>
        <strong style={{ color: 'var(--ink-2)' }}>Do not convert to percentages.</strong> A B in IGCSE is not 70%. It is
        a Cambridge-standardised performance level. Ask your counsellor: "What does a B in this subject mean for the
        university programmes we are targeting?" — that is the right question.
      </div>
    </div>
  )
}

// ─── AP Score Explorer ────────────────────────────────────────────────────────
function ApExplorer() {
  const [selected, setSelected] = useState(null)
  const scores = mod.apScores

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
        AP Score Scale
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.6 }}>
        Tap a score to see what it means. Score 3 is the passing threshold; 4–5 are strong and typically earn college credit.
      </div>

      {/* Score buttons */}
      <div style={{ display: 'flex', gap: 10, marginBottom: '1rem' }}>
        {scores.map(s => (
          <button
            key={s.score}
            onClick={() => setSelected(selected === s.score ? null : s.score)}
            style={{
              flex: 1, height: 56,
              fontSize: 20, fontWeight: 800,
              borderRadius: 8, border: 'none', cursor: 'pointer',
              background: selected === s.score ? s.color : `${s.color}18`,
              color: selected === s.score ? 'white' : s.color,
              transition: 'background .15s, color .15s',
            }}
          >
            {s.score}
          </button>
        ))}
      </div>

      {/* Detail panel */}
      {selected !== null && (() => {
        const s = scores.find(x => x.score === selected)
        if (!s) return null
        return (
          <div style={{
            padding: '1rem 1.2rem',
            background: `${s.color}0D`,
            border: `1px solid ${s.color}44`,
            borderLeft: `4px solid ${s.color}`,
            borderRadius: '0 var(--r) var(--r) 0',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 26, fontWeight: 800, color: s.color }}>{s.score}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{s.label}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{s.note}</div>
            {s.score === 3 && (
              <div style={{
                marginTop: 8, fontSize: 12, color: '#1D4ED8',
                padding: '6px 10px', background: '#EFF6FF',
                borderRadius: 6, fontWeight: 500,
              }}>
                A 3 is the passing score — it is not a weak result. It means your child demonstrated college-level understanding.
              </div>
            )}
          </div>
        )
      })()}

      <div style={{
        marginTop: '1rem', padding: '.875rem 1rem',
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r)',
        fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.65,
      }}>
        <strong style={{ color: 'var(--ink-2)' }}>AP scores are not percentages.</strong> A score of 3 does not mean 60%.
        It means qualified — college-level capability demonstrated. Whether it earns credit depends on the specific
        university and programme. Ask your counsellor for your target universities' AP credit policies.
      </div>
    </div>
  )
}

// ─── Transition timeline ──────────────────────────────────────────────────────
function TransitionTimeline() {
  const rows = [
    { grade: 'Grade 6', current: 'Building foundational skills',    future: 'First cohort for IGCSE in Gr. 9–10' },
    { grade: 'Grade 7', current: 'Building foundational skills',    future: 'IGCSE pathway' },
    { grade: 'Grade 8', current: 'Building foundational skills',    future: 'First cohort for WSD + AP in Gr. 11–12' },
    { grade: 'Grade 9', current: 'MYP 5 / transitioning to IGCSE', future: 'IGCSE Year 1' },
    { grade: 'Grade 10', current: 'IB Diploma Year 1 / WSD start', future: 'IGCSE Year 2' },
    { grade: 'Grade 11', current: 'IB Diploma Year 2 / WSD',        future: 'AP Year 1 / WSD' },
  ]

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
        4-Year Transition Roll-Out
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.6 }}>
        The transition is gradual. No student changes pathway mid-study. Current IB students complete the IB.
      </div>
      <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '90px 1fr 1fr',
          background: 'var(--surface-2)', borderBottom: '1px solid var(--border)',
          padding: '7px 12px',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase' }}>Grade</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase' }}>Now (2025/26)</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: WS, textTransform: 'uppercase' }}>New Pathway</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '90px 1fr 1fr',
            padding: '9px 12px',
            borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none',
            background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)',
          }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink)' }}>{r.grade}</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5, paddingRight: 8 }}>{r.current}</div>
            <div style={{ fontSize: 12, color: WS, fontWeight: 600, lineHeight: 1.5 }}>{r.future}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 6, lineHeight: 1.6 }}>
        Source: Woodstock Board of Directors transition communication, 2025.
      </div>
    </div>
  )
}

// ─── WSD section ──────────────────────────────────────────────────────────────
function WsdSection() {
  const pillars = [
    { icon: '📚', label: 'IGCSE & AP',         desc: 'Internationally recognised academic qualifications form the academic core.' },
    { icon: '🏔️', label: 'Outdoor Education',  desc: 'The Himalayan setting is integral to the curriculum — expeditions, field study, and residential outdoor experiences.' },
    { icon: '🤝', label: 'Service',             desc: 'Documented community service and social impact projects, connecting the campus to the wider world.' },
    { icon: '🎨', label: 'Creativity',          desc: 'Arts, performance, and creative expression as legitimate parts of the diploma, not extracurricular extras.' },
    { icon: '🌐', label: 'Leadership',          desc: 'Leadership roles within the residential community, student government, and school initiatives.' },
    { icon: '🧭', label: 'Character',           desc: 'Reflection, ethics, and personal development — the qualities Woodstock has built for 170 years.' },
  ]

  return (
    <div>
      <div style={{
        padding: '1.25rem 1.4rem',
        background: `${WS}08`,
        border: `1px solid ${WS}33`,
        borderLeft: `4px solid ${WS}`,
        borderRadius: '0 var(--r) var(--r) 0',
        marginBottom: '1.5rem',
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
          What is the WSD?
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.75, margin: '0 0 .75rem' }}>
          The Woodstock School Diploma is not a replacement for IGCSE or AP — it wraps around them. Your child still
          sits Cambridge external examinations and earns official AP scores. The WSD documents everything else: the
          whole-person development that exam scores alone cannot capture.
        </p>
        <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.75, margin: 0 }}>
          For US university applications in particular, the WSD addresses the question that every admissions reader asks:
          who is this person beyond their grades? The Himalayan setting, residential community, and Woodstock's
          170-year culture create experiences that a standalone exam record cannot communicate.
        </p>
      </div>

      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>
        The six pillars of the Woodstock School Diploma
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem', marginBottom: '1.5rem' }}>
        {pillars.map((p, i) => (
          <div key={i} style={{
            padding: '1rem',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderTop: `3px solid ${i < 2 ? WS : i < 4 ? WG : '#BA7517'}`,
            borderRadius: '0 0 var(--r) var(--r)',
          }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{p.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{p.label}</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6 }}>{p.desc}</div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '.875rem 1.1rem',
        background: '#FFFBEB', border: '1px solid #F0C060',
        borderRadius: 'var(--r)',
        fontSize: 12.5, color: '#78350F', lineHeight: 1.65,
      }}>
        <strong>The WSD is still being designed.</strong> Woodstock will share more detail about requirements and
        university presentation as the programme develops. Ask the school's university counsellor for the most
        current information.
      </div>
    </div>
  )
}

// ─── University pathways ─────────────────────────────────────────────────────
function UniversityPathways() {
  return (
    <div>
      <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        Most Woodstock graduates apply to universities in the United States and United Kingdom. Both Cambridge IGCSE
        and AP are well understood by admissions offices in these countries. The WSD provides the extracurricular
        and character evidence that completes a strong application.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {mod.universityDestinations.map((d, i) => (
          <div key={i} style={{
            padding: '1.1rem 1.3rem',
            border: '1px solid var(--border)',
            borderLeft: `4px solid ${[WS, '#185FA5', WG, '#BA7517'][i]}`,
            borderRadius: '0 var(--r) var(--r) 0',
            background: 'var(--surface)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 22 }}>{d.flag}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{d.country}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: 8 }}>
              {d.relevance}
            </div>
            <div style={{
              fontSize: 11.5, color: 'var(--ink-3)',
              padding: '6px 10px', background: 'var(--surface-2)',
              borderRadius: 6, lineHeight: 1.5,
            }}>
              <strong>Key credentials: </strong>{d.credentials}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '1.5rem', padding: '.875rem 1rem',
        background: `${WS}08`, border: `1px solid ${WS}33`,
        borderRadius: 'var(--r)',
        fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7,
      }}>
        <strong style={{ color: WS }}>A note on JEE and NEET: </strong>
        These Indian entrance examinations require specific preparation that Woodstock's IGCSE and AP curriculum
        does not cover. If JEE or NEET is a realistic pathway for your family, that conversation with the school
        counsellor needs to happen now — not in Grade 11. Most Woodstock families targeting Indian universities
        focus on private institutions that accept international credentials directly.
      </div>
    </div>
  )
}

// ─── Next steps ───────────────────────────────────────────────────────────────
function NextSteps({ activeStage }) {
  const stageKey = activeStage || 'default'
  const steps = mod.nextSteps[stageKey] || mod.nextSteps.default
  const col = activeStage ? STAGE_COLORS[activeStage] : WS

  return (
    <div>
      {activeStage && (
        <div style={{
          padding: '8px 12px',
          background: `${col}10`,
          border: `1px solid ${col}33`,
          borderRadius: 'var(--r)',
          fontSize: 12.5, color: col, fontWeight: 600,
          marginBottom: '1.25rem',
        }}>
          Showing steps for: {mod.journeyStages.find(s => s.id === activeStage)?.label}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            display: 'flex', gap: '1rem', alignItems: 'flex-start',
            padding: '1rem 1.1rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderLeft: `4px solid ${col}`,
            borderRadius: '0 var(--r) var(--r) 0',
          }}>
            <div style={{
              flexShrink: 0,
              width: 24, height: 24, borderRadius: '50%',
              background: `${col}18`, color: col,
              fontSize: 12, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {i + 1}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7 }}>
              {step}
            </div>
          </div>
        ))}
      </div>

      {/* Glossary */}
      <div style={{ marginTop: '2.5rem' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: '1rem' }}>
          Quick glossary
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {mod.glossary.map((g, i) => (
            <div key={i} style={{
              padding: '10px 12px',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r)',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 3 }}>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: WS }}>{g.term}</span>
                <span style={{ fontSize: 11, color: 'var(--ink-4)' }}>{g.full}</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6 }}>{g.definition}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function WoodstockParentPage() {
  const [activeSection, setActiveSection] = useState('start')
  const [activeStage, setActiveStage]     = useState(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg, #F7F7F5)' }}>

      {/* Hero header */}
      <div style={{
        background: WS,
        padding: '1.75rem 1.25rem 1.5rem',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {/* Back link */}
          <Link to="/parent" style={{
            fontSize: 12, color: 'rgba(255,255,255,0.65)',
            textDecoration: 'none', display: 'inline-block',
            marginBottom: '1rem',
          }}>
            ← All parent guides
          </Link>

          {/* School identity */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.1rem' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 10,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, flexShrink: 0,
            }}>
              🌲
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 4 }}>
                Parent Guide · Mussoorie, India · Est. 1854
              </div>
              <h1 style={{
                fontFamily: 'var(--serif, Georgia, serif)',
                fontSize: '1.6rem', color: 'white',
                margin: '0 0 6px', lineHeight: 1.2,
              }}>
                Woodstock School
              </h1>
              <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
                Understanding IGCSE, AP, and the Woodstock School Diploma — a guide for Indian families
              </p>
            </div>
          </div>

          {/* Programme badges */}
          <div style={{ display: 'flex', gap: 6, marginTop: '1.1rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Cambridge IGCSE', desc: 'Grades 9–10' },
              { label: 'Advanced Placement', desc: 'Grades 11–12' },
              { label: 'Woodstock Diploma', desc: 'WSD' },
              { label: 'Boarding School', desc: 'Residential' },
            ].map(b => (
              <div key={b.label} style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.15)',
                borderRadius: 20,
                fontSize: 11.5, fontWeight: 600, color: 'white',
              }}>
                {b.label} <span style={{ opacity: .65 }}>· {b.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section nav */}
      <SectionNav active={activeSection} setActive={setActiveSection} />

      {/* Content */}
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1.25rem 4rem' }}>

        {/* ── START HERE ── */}
        {activeSection === 'start' && (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
                Start here
              </div>
              <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.4rem', color: 'var(--ink)', margin: '0 0 10px', lineHeight: 1.2 }}>
                A guide built for Indian families at Woodstock
              </h2>
              <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.7, maxWidth: 540, margin: 0 }}>
                Woodstock is in a period of change. IB is being phased out over four years. IGCSE, AP, and the
                Woodstock School Diploma are coming in. This guide helps you understand what that means for your
                child — and what to ask the school at every stage.
              </p>
            </div>

            {/* Transition highlight */}
            <div style={{
              padding: '.875rem 1.1rem',
              background: `${WS}0A`,
              border: `1px solid ${WS}33`,
              borderRadius: 'var(--r)',
              marginBottom: '1.75rem',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 5 }}>
                The transition in one sentence
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.7 }}>
                Over four years, Woodstock is replacing IB with <strong>Cambridge IGCSE</strong> (Grades 9–10),
                <strong> Advanced Placement</strong> (Grades 11–12), and the new <strong>Woodstock School
                Diploma</strong> — a school-designed framework that adds outdoor education, service, leadership,
                and character development on top of internationally recognised academic qualifications. No student
                will be required to change pathways mid-study.
              </div>
            </div>

            <StageSelector active={activeStage} onSelect={setActiveStage} />

            <div style={{ borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

            <OpeningHook />
          </div>
        )}

        {/* ── CORE CONCEPTS ── */}
        {activeSection === 'concepts' && (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
                Core concepts
              </div>
              <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', color: 'var(--ink)', margin: '0 0 8px' }}>
                Five things that explain why Woodstock looks the way it does
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, margin: '0 0 .75rem' }}>
                Each card starts with a concern you may recognise. Tap "What the school is doing" to see the
                reasoning behind it — and what to ask.
              </p>
              {!activeStage && (
                <button
                  onClick={() => setActiveSection('start')}
                  style={{
                    fontSize: 12, color: WS, background: `${WS}10`,
                    border: `1px solid ${WS}33`, borderRadius: 20,
                    padding: '4px 14px', cursor: 'pointer',
                  }}
                >
                  ← Select your stage to highlight relevant cards
                </button>
              )}
            </div>
            {mod.cards.map((card, i) => (
              <ConceptCard key={card.id} card={card} index={i} activeStage={activeStage} />
            ))}
          </div>
        )}

        {/* ── GRADES DECODED ── */}
        {activeSection === 'grades' && (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
                Grades decoded
              </div>
              <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', color: 'var(--ink)', margin: '0 0 8px' }}>
                What IGCSE letters and AP numbers actually mean
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>
                Neither system uses percentages. Both use internationally standardised scales that work differently
                from CBSE and ICSE. The tools below let you explore each grade level directly.
              </p>
            </div>

            <TransitionTimeline />
            <div style={{ borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />
            <IgcseExplorer />
            <div style={{ borderTop: '1px solid var(--border)', margin: '1.5rem 0' }} />
            <ApExplorer />
          </div>
        )}

        {/* ── WOODSTOCK DIPLOMA ── */}
        {activeSection === 'diploma' && (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
                Woodstock School Diploma
              </div>
              <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', color: 'var(--ink)', margin: '0 0 8px' }}>
                What the WSD is — and why it matters for university
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>
                The WSD is Woodstock's whole-person diploma, designed for a world where universities want to see
                more than exam scores.
              </p>
            </div>
            <WsdSection />
          </div>
        )}

        {/* ── UNIVERSITY PATHWAYS ── */}
        {activeSection === 'pathways' && (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
                University pathways
              </div>
              <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', color: 'var(--ink)', margin: '0 0 8px' }}>
                Where do Woodstock graduates go?
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>
                IGCSE and AP are well understood by universities in the countries most Woodstock families target.
                Here is how the credentials read in each context.
              </p>
            </div>
            <UniversityPathways />
          </div>
        )}

        {/* ── NEXT STEPS ── */}
        {activeSection === 'next' && (
          <div>
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: WS, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
                Next steps
              </div>
              <h2 style={{ fontFamily: 'var(--serif, Georgia, serif)', fontSize: '1.3rem', color: 'var(--ink)', margin: '0 0 8px' }}>
                Three things to do this term
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>
                {activeStage
                  ? `Specific next steps for your stage: ${mod.journeyStages.find(s => s.id === activeStage)?.label}.`
                  : 'Select your stage on the Start Here tab for personalised steps. These defaults apply to all families.'}
              </p>
            </div>
            <NextSteps activeStage={activeStage} />
          </div>
        )}

      </div>
    </div>
  )
}

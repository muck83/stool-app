import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MYP_SUBJECTS } from '../../data/mypCriteria.js'

import { ksaIbParent }     from '../../../vocab/parent/ksa-ib-parent.jsx'
import { chinaIbParent }   from '../../../vocab/parent/china-ib-parent.jsx'
import { koreaIbParent }   from '../../../vocab/parent/korea-ib-parent.jsx'
import { vietnamIbParent } from '../../../vocab/parent/vietnam-ib-parent.jsx'
import { indiaIbParent }   from '../../../vocab/parent/india-ib-parent.jsx'

// ─── Country metadata ────────────────────────────────────────────────────────

const COUNTRIES = [
  { id: 'saudi-arabia', label: 'Saudi Arabia', flag: '🇸🇦', color: '#006C35', mod: ksaIbParent },
  { id: 'china',        label: 'China',         flag: '🇨🇳', color: '#C0392B', mod: chinaIbParent },
  { id: 'korea',        label: 'Korea',          flag: '🇰🇷', color: '#0E8A5F', mod: koreaIbParent },
  { id: 'vietnam',      label: 'Vietnam',        flag: '🇻🇳', color: '#DA251D', mod: vietnamIbParent },
  { id: 'india',        label: 'India',          flag: '🇮🇳', color: '#E67E22', mod: indiaIbParent },
]

const PROGRAMMES = [
  { id: 'PYP', label: 'PYP', sublabel: 'Ages 3–11 · Primary Years' },
  { id: 'MYP', label: 'MYP', sublabel: 'Grades 6–10 · Middle Years' },
  { id: 'DP',  label: 'DP',  sublabel: 'Grades 11–12 · Diploma' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function cardMatchesProgramme(card, programme) {
  const comp = (card.ibComponent || '').toUpperCase()
  if (programme === 'PYP') return comp.includes('PYP')
  if (programme === 'MYP') return comp.includes('MYP') || comp.includes('ALL')
  if (programme === 'DP')  return comp.includes('DP')  || comp.includes('ALL')
  return true
}

function scoreCardByConcern(card, tokens) {
  if (!tokens.length) return 1 // no filter — include everything
  const haystack = [
    card.ibComponent || '',
    card.en?.concept || '',
    card.en?.concern || '',
  ].join(' ').toLowerCase()
  return tokens.filter(t => haystack.includes(t)).length
}

function generateQuestions({ countryId, programme, subjectIds, concern }) {
  const countryMeta = COUNTRIES.find(c => c.id === countryId)
  if (!countryMeta) return null

  const mod = countryMeta.mod
  const tokens = concern
    .toLowerCase()
    .split(/\s+/)
    .filter(t => t.length >= 4)

  // Pool all cards
  const allCards = [...(mod.cards || []), ...(mod.pypCards || [])]

  // Filter by programme, then score by concern keywords
  const filtered = allCards
    .filter(card => cardMatchesProgramme(card, programme))
    .map(card => ({ card, score: scoreCardByConcern(card, tokens) }))
    .filter(({ score }) => !tokens.length || score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ card }) => card)

  // Build topic groups
  const groups = filtered.reduce((acc, card) => {
    const qs = card.en?.whatToAsk || []
    if (!qs.length) return acc
    const topic = card.ibComponent
    if (!acc[topic]) acc[topic] = []
    acc[topic].push(...qs)
    return acc
  }, {})

  // Subject-specific criterion questions
  const subjectGroups = {}
  subjectIds.forEach(sid => {
    const subj = MYP_SUBJECTS.find(s => s.id === sid)
    if (!subj) return
    const qs = Object.entries(subj.criteria).map(([letter, crit]) =>
      `"My child scored [X] on Criterion ${letter} — ${crit.name}. What does the next achievement level look like in practice, and what would you suggest they work on first?"`
    )
    subjectGroups[`${subj.label} — Criterion Questions`] = qs
  })

  // Cultural note
  const culturalNote = mod.openingHook?.en?.whatToAskNote || null

  return { groups, subjectGroups, culturalNote, countryMeta, programme, total: filtered.length }
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function PTMPrepPage() {
  const [countryId,   setCountryId]   = useState('')
  const [programme,   setProgramme]   = useState('')
  const [subjectIds,  setSubjectIds]  = useState([])
  const [concern,     setConcern]     = useState('')
  const [result,      setResult]      = useState(null)
  const outputRef = useRef(null)

  const canGenerate = countryId && programme

  function handleGenerate() {
    const res = generateQuestions({ countryId, programme, subjectIds, concern })
    setResult(res)
    setTimeout(() => outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  function handlePrint() {
    window.print()
  }

  function toggleSubject(sid) {
    setSubjectIds(prev =>
      prev.includes(sid) ? prev.filter(s => s !== sid) : [...prev, sid]
    )
  }

  const showSubjects = programme === 'MYP' || programme === 'DP'
  const allGroupCount = result
    ? Object.keys(result.groups).length + Object.keys(result.subjectGroups).length
    : 0

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 1.25rem 5rem' }}>

      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { font-size: 12px; }
          .print-page { padding: 0 !important; }
        }
      `}</style>

      {/* Back link */}
      <Link to="/parent" className="no-print" style={{
        fontSize: 12, color: 'var(--ink-4)', textDecoration: 'none',
        display: 'inline-block', marginBottom: '1.5rem',
      }}>
        ← Parent guides
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }} className="no-print">
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
          PTM Prep Tool
        </div>
        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--ink)',
          margin: '0 0 10px 0', lineHeight: 1.2,
        }}>
          Prepare for your parent–teacher meeting
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
          Tell us your child's school context and any concerns. We'll generate
          a set of specific, culturally-aware questions to bring to the meeting.
        </p>
      </div>

      {/* ── FORM ─────────────────────────────────────────────────────────── */}
      <div className="no-print" style={{
        border: '1px solid var(--border)', borderRadius: 'var(--r)',
        overflow: 'hidden', marginBottom: '2rem',
      }}>
        <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>Meeting details</div>
        </div>

        <div style={{ padding: '1.25rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

          {/* Country */}
          <div>
            <div style={labelStyle}>Country context</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {COUNTRIES.map(c => (
                <button
                  key={c.id}
                  onClick={() => setCountryId(c.id)}
                  style={chipStyle(countryId === c.id, c.color)}
                >
                  {c.flag} {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Programme */}
          <div>
            <div style={labelStyle}>Programme / grade level</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {PROGRAMMES.map(p => (
                <button
                  key={p.id}
                  onClick={() => { setProgramme(p.id); setSubjectIds([]) }}
                  style={chipStyle(programme === p.id, 'var(--teal)')}
                >
                  <span style={{ fontWeight: 700 }}>{p.label}</span>
                  <span style={{ fontSize: 10, color: programme === p.id ? 'rgba(255,255,255,.8)' : 'var(--ink-4)', marginLeft: 5 }}>
                    {p.sublabel}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Subject selector (MYP / DP only) */}
          {showSubjects && (
            <div>
              <div style={labelStyle}>
                Subject(s) <span style={{ fontWeight: 400, color: 'var(--ink-4)' }}>— optional, adds criterion questions</span>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {MYP_SUBJECTS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => toggleSubject(s.id)}
                    style={chipStyle(subjectIds.includes(s.id), '#185FA5')}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Concern text */}
          <div>
            <div style={labelStyle}>
              Any specific concern? <span style={{ fontWeight: 400, color: 'var(--ink-4)' }}>— optional, helps focus the questions</span>
            </div>
            <textarea
              value={concern}
              onChange={e => setConcern(e.target.value)}
              placeholder={`e.g. "My child's criterion scores dropped this term" or "I don't understand the Extended Essay"`}
              rows={3}
              style={{
                width: '100%', padding: '8px 10px', fontSize: 13,
                border: '1px solid var(--border)', borderRadius: 6,
                background: 'var(--surface)', color: 'var(--ink)',
                lineHeight: 1.6, resize: 'vertical', boxSizing: 'border-box',
                fontFamily: 'inherit',
              }}
            />
          </div>

          {/* Generate button */}
          <div>
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              style={{
                fontSize: 14, fontWeight: 600, color: 'white',
                background: canGenerate ? 'var(--teal)' : 'var(--ink-5)',
                border: 'none', borderRadius: 24, padding: '10px 28px',
                cursor: canGenerate ? 'pointer' : 'not-allowed',
                letterSpacing: '.01em', transition: 'background .15s',
              }}
            >
              Generate questions →
            </button>
            {!canGenerate && (
              <span style={{ fontSize: 12, color: 'var(--ink-4)', marginLeft: 12 }}>
                Select country and programme to continue
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── OUTPUT ───────────────────────────────────────────────────────── */}
      {result && (
        <div ref={outputRef} className="print-page">

          {/* Print header (hidden on screen) */}
          <div style={{ display: 'none' }} className="print-header">
            <h2 style={{ fontFamily: 'serif', margin: '0 0 4px' }}>PTM Question Guide</h2>
            <p style={{ fontSize: 12, margin: '0 0 16px', color: '#666' }}>
              {result.countryMeta.flag} {result.countryMeta.label} · {result.programme} · Generated {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Output header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }} className="no-print">
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)' }}>
                {result.countryMeta.flag} {result.countryMeta.label} · {result.programme} · {allGroupCount} topic{allGroupCount !== 1 ? 's' : ''}
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>
                {Object.values(result.groups).flat().length + Object.values(result.subjectGroups).flat().length} questions generated
              </div>
            </div>
            <button
              onClick={handlePrint}
              style={{
                fontSize: 13, fontWeight: 600,
                color: 'var(--teal)', background: 'transparent',
                border: '1.5px solid var(--teal)',
                borderRadius: 20, padding: '7px 18px',
                cursor: 'pointer',
              }}
            >
              🖨 Print / Save PDF
            </button>
          </div>

          {/* Cultural framing note */}
          {result.culturalNote && (
            <div style={{
              padding: '1rem 1.2rem', marginBottom: '1.5rem',
              background: `${result.countryMeta.color}0D`,
              border: `1px solid ${result.countryMeta.color}33`,
              borderLeft: `4px solid ${result.countryMeta.color}`,
              borderRadius: 'var(--r)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: result.countryMeta.color, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6 }}>
                Before you go in
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                {result.culturalNote}
              </div>
            </div>
          )}

          {/* No results */}
          {allGroupCount === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--ink-4)', fontSize: 14 }}>
              No matching questions found. Try broadening your concern description or clearing it.
            </div>
          )}

          {/* Criterion question groups (subjects) */}
          {Object.entries(result.subjectGroups).map(([topic, qs]) => (
            <QuestionGroup key={topic} topic={topic} questions={qs} accent="#185FA5" isSubject />
          ))}

          {/* Topic question groups */}
          {Object.entries(result.groups).map(([topic, qs]) => (
            <QuestionGroup key={topic} topic={topic} questions={qs} accent={result.countryMeta.color} />
          ))}

          {/* Footer */}
          <div style={{ marginTop: '2rem', padding: '1rem 1.2rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }} className="no-print">
            <div style={{ fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.7 }}>
              These questions are drawn from culturally-adapted IB parent guides for {result.countryMeta.label}.
              Bring your child's most recent report and any specific criterion scores to the meeting.
              IB teachers are trained to answer criterion-specific questions precisely.
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function QuestionGroup({ topic, questions, accent, isSubject }) {
  const [open, setOpen] = useState(true)

  return (
    <div style={{ marginBottom: '1.1rem', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
      {/* Topic header */}
      <button
        onClick={() => setOpen(o => !o)}
        className="no-print"
        style={{
          width: '100%', textAlign: 'left',
          padding: '.75rem 1rem', background: 'var(--surface-2)',
          border: 'none', borderBottom: open ? '1px solid var(--border)' : 'none',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 3, height: 18, background: accent, borderRadius: 2, flexShrink: 0 }} />
          <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-2)' }}>
            {isSubject && <span style={{ fontSize: 10, color: accent, fontWeight: 700, marginRight: 6, textTransform: 'uppercase' }}>Subject</span>}
            {topic}
          </span>
        </div>
        <span style={{ fontSize: 12, color: 'var(--ink-4)' }}>
          {questions.length}q {open ? '▲' : '▼'}
        </span>
      </button>

      {/* Print-visible topic header */}
      <div style={{ padding: '.5rem 1rem', background: '#f9f9f9', borderBottom: '1px solid #eee', display: 'none' }} className="print-topic">
        <strong style={{ fontSize: 12 }}>{topic}</strong>
      </div>

      {open && (
        <div style={{ padding: '.75rem 1rem 1rem' }}>
          {questions.map((q, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              padding: '.6rem 0',
              borderBottom: i < questions.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
                background: `${accent}18`, color: accent,
                fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: 1,
              }}>
                {i + 1}
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.65 }}>{q}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const labelStyle = {
  fontSize: 11, fontWeight: 700, color: 'var(--ink-3)',
  textTransform: 'uppercase', letterSpacing: '.06em',
  marginBottom: 8,
}

function chipStyle(active, color) {
  const c = typeof color === 'string' && color.startsWith('var') ? '#185FA5' : color
  return {
    fontSize: 12.5, fontWeight: active ? 700 : 500,
    color: active ? 'white' : 'var(--ink-2)',
    background: active ? (color || 'var(--teal)') : 'var(--surface-2)',
    border: active ? `1.5px solid ${color || 'var(--teal)'}` : '1.5px solid var(--border)',
    borderRadius: 20, padding: '5px 13px',
    cursor: 'pointer', transition: 'all .12s',
    display: 'inline-flex', alignItems: 'center',
    lineHeight: 1.3,
  }
}

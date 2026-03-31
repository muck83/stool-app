import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { koreaIbParent } from '../../../vocab/parent/korea-ib-parent.jsx'

const MODULES = {
  'korea-ib': koreaIbParent,
}

const LS_LANG   = slug => `pd_parent_lang_${slug}`
const LS_DONE   = slug => `pd_parent_done_${slug}`

// ─── Language Toggle ────────────────────────────────────────────────────────
function LangToggle({ lang, setLang }) {
  const btn = (l, label) => (
    <button
      onClick={() => setLang(l)}
      style={{
        padding: '5px 16px', fontSize: 13, fontWeight: 600,
        borderRadius: 20, border: 'none', cursor: 'pointer',
        background: lang === l ? 'var(--teal)' : 'transparent',
        color: lang === l ? 'white' : 'var(--ink-3)',
        transition: 'background .15s, color .15s',
      }}
    >{label}</button>
  )
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 2,
      background: 'var(--surface-2)', borderRadius: 24,
      padding: 3, border: '1px solid var(--border)',
    }}>
      {btn('en', 'English')}
      {btn('ko', '한국어')}
    </div>
  )
}

// ─── Hook Section ────────────────────────────────────────────────────────────
function HookSection({ hook, lang }) {
  const [revealed, setRevealed] = useState(false)
  const h = hook[lang]
  return (
    <div style={{
      background: 'var(--surface-2)', border: '1px solid var(--border)',
      borderLeft: '4px solid var(--teal)', borderRadius: '0 var(--r) var(--r) 0',
      padding: '1.25rem 1.4rem', marginBottom: '2rem',
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.75rem' }}>
        {lang === 'en' ? 'Opening situation' : '도입 상황'}
      </div>
      {h.situation.map((p, i) => (
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
          {lang === 'en' ? 'See the question →' : '질문 보기 →'}
        </button>
      ) : (
        <div style={{
          marginTop: '1rem', padding: '.875rem 1rem',
          background: 'var(--teal-faint, #E1F5EE)',
          borderRadius: 'var(--r)', fontSize: 14,
          fontWeight: 600, color: 'var(--teal-dark)',
          lineHeight: 1.6,
        }}>
          {h.question}
        </div>
      )}
    </div>
  )
}

// ─── Concept Card ────────────────────────────────────────────────────────────
function ConceptCard({ card, lang, index }) {
  const [open, setOpen] = useState(false)
  const c = card[lang]
  const colors = ['#1D9E75', '#185FA5', '#BA7517', '#534AB7', '#C0392B']
  const col = colors[index % colors.length]

  return (
    <div style={{
      border: `1px solid ${col}22`, borderTop: `3px solid ${col}`,
      borderRadius: '0 0 var(--r) var(--r)',
      background: 'var(--surface)',
      marginBottom: '1.25rem', overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ padding: '1rem 1.2rem .875rem', background: `${col}08` }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 4 }}>
              {lang === 'en' ? `Concept ${index + 1}` : `개념 ${index + 1}`}
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.3 }}>
              {c.concept}
            </div>
            <div style={{
              marginTop: 6, display: 'inline-block',
              fontSize: 10.5, fontWeight: 500,
              background: `${col}18`, color: col,
              padding: '2px 8px', borderRadius: 10,
            }}>
              {card.ibComponent}
            </div>
          </div>
        </div>

        {/* What you might think */}
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            {lang === 'en' ? 'What you might think' : '이렇게 생각할 수 있습니다'}
          </div>
          <div style={{
            fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7,
            fontStyle: 'italic', padding: '.75rem 1rem',
            background: 'var(--surface-2)', borderRadius: 'var(--r)',
            borderLeft: '3px solid var(--border-strong, #ccc)',
          }}>
            {c.whatYouMightThink}
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
            {lang === 'en' ? 'What it actually means →' : '실제 의미 보기 →'}
          </button>
        </div>
      ) : (
        <div style={{ padding: '1rem 1.2rem 1.25rem', borderTop: `1px solid ${col}22` }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              {lang === 'en' ? 'What it actually means' : '실제 의미'}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
              {c.whatItActuallyMeans}
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              {lang === 'en' ? 'Why it matters for your child' : '자녀에게 중요한 이유'}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
              {c.whyItMatters}
            </div>
          </div>
          <div style={{
            fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6,
            padding: '.75rem 1rem', background: `${col}08`,
            borderRadius: 'var(--r)', borderLeft: `3px solid ${col}55`,
          }}>
            <strong style={{ color: col }}>IB: </strong>{c.ibConnection}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Review Scenario ─────────────────────────────────────────────────────────
function ReviewScenario({ scenario, lang, index }) {
  const [phase, setPhase] = useState('situation') // situation → choices → reveal
  const s = scenario[lang]

  return (
    <div style={{
      border: '1px solid var(--border)', borderRadius: 'var(--r)',
      background: 'var(--surface)', marginBottom: '1.25rem', overflow: 'hidden',
    }}>
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
          <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{s.title}</div>
          <div style={{ fontSize: 11, color: 'var(--teal)', marginTop: 2 }}>
            {s.termsInPlay.join(' · ')}
          </div>
        </div>
      </div>

      <div style={{ padding: '1rem 1.2rem' }}>
        <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75, marginBottom: '1rem' }}>
          {s.situation}
        </div>

        {phase === 'situation' && (
          <button
            onClick={() => setPhase('reveal')}
            style={{
              fontSize: 12.5, fontWeight: 600, color: 'var(--teal)',
              background: 'var(--teal-faint, #E1F5EE)',
              border: '1px solid var(--teal)44',
              borderRadius: 20, padding: '6px 18px', cursor: 'pointer',
            }}
          >
            {lang === 'en' ? 'See both responses →' : '두 가지 반응 보기 →'}
          </button>
        )}

        {phase === 'reveal' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '.5rem' }}>
            <div style={{
              padding: '.875rem 1rem', borderRadius: 'var(--r)',
              background: '#E1F5EE', border: '1px solid #1D9E7544',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
                {lang === 'en' ? 'With understanding' : '이해했을 때'}
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>{s.withUnderstanding}</div>
            </div>
            <div style={{
              padding: '.875rem 1rem', borderRadius: 'var(--r)',
              background: '#FEF3F2', border: '1px solid #C0392B44',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
                {lang === 'en' ? 'Without understanding' : '이해하지 못했을 때'}
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>{s.withoutUnderstanding}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ParentModulePage() {
  const { slug } = useParams()
  const activity = MODULES[slug]

  const [lang, setLang] = useState(() => {
    return localStorage.getItem(LS_LANG(slug)) || 'en'
  })
  const [done, setDone] = useState(() => {
    return localStorage.getItem(LS_DONE(slug)) === 'true'
  })

  useEffect(() => { window.scrollTo(0, 0) }, [])
  useEffect(() => { localStorage.setItem(LS_LANG(slug), lang) }, [lang, slug])

  if (!activity) {
    return (
      <div style={{ maxWidth: 640, margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: '1rem' }}>🔍</div>
        <div style={{ fontSize: 16, color: 'var(--ink)' }}>Module not found.</div>
        <Link to="/" style={{ color: 'var(--teal)', fontSize: 13, marginTop: '1rem', display: 'inline-block' }}>← Back home</Link>
      </div>
    )
  }

  const m = activity.meta[lang]

  const markDone = () => {
    localStorage.setItem(LS_DONE(slug), 'true')
    setDone(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '1.5rem 1.25rem 4rem' }}>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
            {lang === 'en' ? 'Parent Guide · IB' : '학부모 안내 · IB'}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.25, margin: 0 }}>
            {m.title}
          </h1>
          <p style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 8, lineHeight: 1.6 }}>
            {m.subtitle}
          </p>
        </div>
        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* Completion banner */}
      {done && (
        <div style={{
          marginBottom: '1.5rem', padding: '.875rem 1.1rem',
          background: '#E1F5EE', border: '1px solid #1D9E7544',
          borderRadius: 'var(--r)', fontSize: 13.5,
          color: 'var(--teal-dark)', fontWeight: 500,
        }}>
          {lang === 'en' ? '✓ You\'ve completed this guide.' : '✓ 이 안내서를 완료했습니다.'}
        </div>
      )}

      {/* Intro */}
      <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '2rem' }}>
        {m.intro}
      </p>

      {/* Hook */}
      <HookSection hook={activity.openingHook} lang={lang} />

      {/* Part 1 */}
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '1rem' }}>
        {lang === 'en' ? 'Part 1 — Five concepts to know' : '1부 — 알아야 할 다섯 가지 개념'}
      </div>

      {activity.cards.map((card, i) => (
        <ConceptCard key={card.id} card={card} lang={lang} index={i} />
      ))}

      {/* Part 2 */}
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', margin: '2rem 0 1rem' }}>
        {lang === 'en' ? 'Part 2 — Real situations' : '2부 — 실제 상황'}
      </div>
      <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
        {lang === 'en'
          ? 'Two scenarios that bring the concepts together. Read the situation, then reveal how the outcome changes with and without cultural understanding.'
          : '개념들을 종합하는 두 가지 시나리오입니다. 상황을 읽고, 이해 유무에 따라 결과가 어떻게 달라지는지 확인해 보세요.'}
      </p>

      {activity.reviewScenarios.map((s, i) => (
        <ReviewScenario key={s.id} scenario={s} lang={lang} index={i} />
      ))}

      {/* Mark complete */}
      {!done && (
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <button
            onClick={markDone}
            style={{
              fontSize: 14, fontWeight: 600, color: 'white',
              background: 'var(--teal)', border: 'none',
              borderRadius: 24, padding: '10px 32px',
              cursor: 'pointer', letterSpacing: '.01em',
            }}
          >
            {lang === 'en' ? '✓ Mark as complete' : '✓ 완료로 표시'}
          </button>
        </div>
      )}

      {/* Footer note */}
      <div style={{ marginTop: '2.5rem', padding: '1rem 1.1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.7 }}>
          {lang === 'en'
            ? 'This guide was written for Korean families navigating IB schools. If something feels inaccurate or is missing, your school can share feedback with the module author.'
            : '이 안내서는 IB 학교를 경험하는 한국 가정을 위해 작성되었습니다. 부정확하거나 누락된 내용이 있으면 학교를 통해 모듈 작성자에게 피드백을 전달할 수 있습니다.'}
        </div>
      </div>

    </div>
  )
}

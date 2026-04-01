import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { koreaIbParent } from '../../../vocab/parent/korea-ib-parent.jsx'
import { indiaIbParent } from '../../../vocab/parent/india-ib-parent.jsx'

const MODULES = {
  'korea-ib': koreaIbParent,
  'india-ib': indiaIbParent,
}

const LS_LANG     = slug => `pd_parent_lang_${slug}`
const LS_DONE     = slug => `pd_parent_done_${slug}`
const LS_STAGE    = slug => `pd_parent_stage_${slug}`
const LS_SECTION  = slug => `pd_parent_section_${slug}`
const LS_VISITED  = slug => `pd_parent_visited_${slug}`

// ─── Section definitions ──────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'start',     en: 'Start Here',       ko: '시작하기'  },
  { id: 'concepts',  en: 'Core Concepts',    ko: '핵심 개념' },
  { id: 'grades',    en: 'Grade System',     ko: '성적 체계' },
  { id: 'pyp',       en: 'PYP',              ko: 'PYP'       },
  { id: 'scenarios', en: 'Real Situations',  ko: '실제 상황' },
  { id: 'next',      en: 'Next Steps',       ko: '다음 단계' },
]

// First recommended section for each stage
const STAGE_RECOMMENDED = {
  new:      'concepts',
  settled:  'grades',
  'pyp-myp':'pyp',
  'myp-dp': 'grades',
}

// ─── Next Steps content (stage-aware, bilingual) ──────────────────────────────
const NEXT_STEPS = {
  en: {
    default: [
      'Ask your child\'s teacher: "Is this formative or summative work?" — that one question changes how you read every piece of feedback.',
      'Find the assessment criteria for one of your child\'s subjects on the school\'s learning platform. Read criteria A–D and notice what each one measures.',
      'Review the IB Learner Profile with your child — ask them which attribute they feel strongest in right now.',
    ],
    new: [
      'Ask your child tonight: "What question is your class exploring this week?" — if they can answer clearly, inquiry is working.',
      'Ask the school for the assessment criteria for one subject. Read what criteria A–D each measure — this is the vocabulary all their future feedback will use.',
      'Try the MYP Grade Calculator in the Grade System section with your child\'s most recent report scores to understand what the numbers actually mean.',
    ],
    settled: [
      'Find your child\'s most recent MYP report and enter the criterion scores into the Grade Calculator. Identify the lowest criterion and ask the subject teacher: "What would a stronger score on this criterion look like?"',
      'Ask your child: "Which criterion do you find hardest in [subject]?" — if they can name it, they understand the system.',
      'Review the DP Calculator even if DP is a year or two away — knowing the diploma structure now removes surprises later.',
    ],
    'pyp-myp': [
      'Ask your child\'s MYP form tutor: "How will my child be supported in understanding criterion-based assessment this year?" — most IB schools have a deliberate transition programme.',
      'Try the MYP Grade Calculator with your child present — let them move the sliders to connect their scores to what they mean.',
      'Read the PYP section to understand what foundations your child already has. PYP graduates arrive in MYP with more self-awareness than parents often realise.',
    ],
    'myp-dp': [
      'Open the DP Calculator and set your child\'s predicted grades — check whether any subject is at risk of failing a diploma condition.',
      'Ask your child: "Have you chosen your Extended Essay topic?" — the earlier this conversation starts, the better the outcome.',
      'Ask the CAS coordinator: "What kinds of activities tend to produce the strongest university application stories?" — not all CAS carries equal weight.',
    ],
  },
  ko: {
    default: [
      '선생님께 "이 과제는 형성평가인가요, 총괄평가인가요?"라고 물어보세요. 이 질문 하나가 모든 피드백을 읽는 방식을 바꿉니다.',
      '학교 학습 플랫폼에서 자녀의 한 과목 평가 준거를 찾아보세요. 준거 A~D를 읽고 각각 무엇을 측정하는지 파악하세요.',
      'IB 학습자 프로파일을 자녀와 함께 살펴보세요. 지금 어떤 속성에서 가장 강하다고 느끼는지 물어보세요.',
    ],
    new: [
      '오늘 밤 자녀에게 "이번 주 수업에서 어떤 질문을 탐구하고 있어?"라고 물어보세요. 명확하게 대답할 수 있다면 탐구 기반 학습이 작동하고 있는 것입니다.',
      '학교에 한 과목의 평가 준거를 요청하세요. 준거 A~D가 각각 무엇을 측정하는지 읽어보세요. 앞으로 받게 될 모든 피드백이 이 언어를 사용합니다.',
      '자녀의 가장 최근 성적표 점수로 성적 체계 섹션의 MYP 등급 계산기를 사용해보세요. 숫자가 실제로 무엇을 의미하는지 이해하는 데 도움이 됩니다.',
    ],
    settled: [
      '자녀의 가장 최근 MYP 성적표를 찾아 준거 점수를 성적 계산기에 입력하세요. 가장 낮은 준거를 파악하고 과목 교사에게 "이 준거에서 더 강한 점수가 어떤 모습인가요?"라고 물어보세요.',
      '자녀에게 "[과목]에서 어떤 준거가 가장 어려워?"라고 물어보세요. 이름을 댈 수 있다면 시스템을 이해하고 있는 것입니다.',
      'DP가 1~2년 후라도 지금 DP 계산기를 살펴보세요. 졸업장 구조를 미리 알면 나중에 놀라는 일이 없습니다.',
    ],
    'pyp-myp': [
      'MYP 담임 선생님께 "이번 학년에 준거 기반 평가를 이해하는 데 어떻게 지원해주실 건가요?"라고 물어보세요. 대부분의 IB 학교에는 의도적인 전환 프로그램이 있습니다.',
      '자녀와 함께 MYP 등급 계산기를 사용해보세요. 자녀가 직접 슬라이더를 움직여 자신의 점수가 무엇을 의미하는지 연결하게 하세요.',
      'PYP 섹션을 읽어서 자녀가 이미 쌓은 기초를 이해하세요. PYP 졸업생들은 학부모들이 종종 생각하는 것보다 더 많은 자기 인식을 가지고 MYP에 진입합니다.',
    ],
    'myp-dp': [
      'DP 등급 계산기를 열고 자녀의 예상 점수를 설정하세요. 졸업장 조건을 충족하지 못할 위험이 있는 과목이 있는지 확인하세요.',
      '자녀에게 "소논문 주제를 정했어?"라고 물어보세요. 이 대화가 일찍 시작될수록 결과가 좋습니다.',
      'CAS 코디네이터에게 "어떤 활동이 대학교 지원서에서 가장 강력한 이야기를 만들어내는 경향이 있나요?"라고 물어보세요.',
    ],
  },
}

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
        <div>
          <div style={{
            marginTop: '1rem', padding: '.875rem 1rem',
            background: 'var(--teal-faint, #E1F5EE)',
            borderRadius: 'var(--r)', fontSize: 14,
            fontWeight: 600, color: 'var(--teal-dark)',
            lineHeight: 1.6,
          }}>
            {h.question}
          </div>
          {h.directAnswer && (
            <div style={{
              marginTop: '.75rem', padding: '.875rem 1rem',
              background: 'var(--surface-2)', borderRadius: 'var(--r)',
              border: '1px solid var(--border)', fontSize: 13.5,
              color: 'var(--ink-2)', lineHeight: 1.7,
            }}>
              {h.directAnswer}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Concept Card ────────────────────────────────────────────────────────────
function ConceptCard({ card, lang, index, activeStage }) {
  const [open, setOpen] = useState(false)
  const c = card[lang]
  const colors = ['#1D9E75', '#185FA5', '#BA7517', '#534AB7', '#C0392B']
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.07em' }}>
                {lang === 'en' ? `Concept ${index + 1}` : `개념 ${index + 1}`}
              </span>
              {isRelevant && (
                <span style={{ fontSize: 10, fontWeight: 700, background: stageCol, color: 'white', padding: '1px 7px', borderRadius: 10 }}>
                  {lang === 'en' ? '★ Relevant now' : '★ 지금 중요'}
                </span>
              )}
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

        {/* Concern */}
        <div style={{ marginTop: '1rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            {lang === 'en' ? 'A common concern' : '자주 하는 걱정'}
          </div>
          <div style={{
            fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7,
            padding: '.75rem 1rem', background: 'var(--surface-2)',
            borderRadius: 'var(--r)', borderLeft: '3px solid var(--border-strong, #ccc)',
          }}>
            {c.concern}
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
            {lang === 'en' ? 'What the school is doing →' : '학교가 하는 일 보기 →'}
          </button>
        </div>
      ) : (
        <div style={{ padding: '1rem 1.2rem 1.25rem', borderTop: `1px solid ${col}22` }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              {lang === 'en' ? 'What the school is doing' : '학교가 하는 일'}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
              {c.bridge}
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              {lang === 'en' ? 'How this connects to your goal' : '목표와의 연결'}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
              {c.goal}
            </div>
          </div>
          <div style={{
            fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6,
            padding: '.75rem 1rem', background: `${col}08`,
            borderRadius: 'var(--r)', borderLeft: `3px solid ${col}55`,
            marginBottom: c.whatToAsk ? '1rem' : 0,
          }}>
            <strong style={{ color: col }}>IB: </strong>{c.ibConnection}
          </div>
          {c.whatToAsk && (
            <div style={{ padding: '.875rem 1rem', background: '#FFFBEB', border: '1px solid #F0C060', borderRadius: 'var(--r)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#92400E', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 4 }}>
                {lang === 'en' ? 'What to ask at your next meeting' : '다음 면담에서 물어볼 것'}
              </div>
              <div style={{ fontSize: 11, color: '#A16207', marginBottom: 8, lineHeight: 1.5 }}>
                {lang === 'en'
                  ? 'IB teachers expect and welcome these questions — asking directly is normal, not rude.'
                  : 'IB 교사들은 이런 질문을 기대하고 환영합니다. 직접적으로 묻는 것은 일반적인 일입니다.'}
              </div>
              {c.whatToAsk.map((q, i) => (
                <div key={i} style={{ fontSize: 12.5, color: '#78350F', lineHeight: 1.65, paddingLeft: 10, borderLeft: '2px solid #F0C060', marginBottom: i < c.whatToAsk.length - 1 ? 8 : 0 }}>
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
        <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75, marginBottom: s.situationNote ? '.75rem' : '1rem' }}>
          {s.situation}
        </div>
        {s.situationNote && (
          <div style={{
            fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.6,
            padding: '.6rem .875rem', marginBottom: '1rem',
            background: 'var(--surface-2)', borderRadius: 'var(--r)',
            border: '1px solid var(--border)', borderLeft: '3px solid var(--teal)',
          }}>
            {s.situationNote}
          </div>
        )}

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

// ─── Journey Timeline ─────────────────────────────────────────────────────────
const STAGE_COLORS = {
  new:      '#1D9E75',
  settled:  '#185FA5',
  'pyp-myp':'#BA7517',
  'myp-dp': '#534AB7',
}

function JourneyTimeline({ stages, activeStage, setActiveStage, lang }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.75rem' }}>
        {lang === 'en' ? 'Where are you in the journey?' : '지금 어느 단계에 계신가요?'}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
        {stages.map((stage, i) => {
          const s = stage[lang]
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
                  {s.label}
                </span>
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--ink-4)', lineHeight: 1.5 }}>{s.description}</div>
              {active && (
                <div style={{ marginTop: 6, fontSize: 11.5, fontWeight: 600, color: col }}>
                  → {s.highlight}
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
function SectionNav({ sections, active, visited, lang, onChange, recommended }) {
  const total = sections.length
  const visitedCount = sections.filter(s => visited.has(s.id)).length

  return (
    <div style={{ marginBottom: '1.75rem' }}>
      {/* Progress bar + label */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.4rem' }}>
        <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.07em' }}>
          {lang === 'en' ? 'Guide sections' : '안내서 섹션'}
        </div>
        <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>
          {lang === 'en' ? `${visitedCount} of ${total} visited` : `${total}개 중 ${visitedCount}개 방문`}
        </div>
      </div>
      <div style={{ height: 3, background: 'var(--surface-2)', borderRadius: 3, marginBottom: '.75rem', overflow: 'hidden', border: '1px solid var(--border)' }}>
        <div style={{
          height: '100%',
          width: `${(visitedCount / total) * 100}%`,
          background: 'var(--teal)',
          borderRadius: 3,
          transition: 'width .4s ease',
        }} />
      </div>
      {/* Section pills */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4 }}>
        {sections.map(s => {
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
                background: isActive
                  ? 'var(--teal)'
                  : isRec
                  ? 'var(--teal-faint, #E1F5EE)'
                  : 'var(--surface-2)',
                color: isActive ? 'white' : isRec ? 'var(--teal)' : isVisited ? 'var(--ink-3)' : 'var(--ink-4)',
                border: isActive
                  ? '1px solid var(--teal)'
                  : isRec
                  ? '1px solid var(--teal)'
                  : '1px solid var(--border)',
                transition: 'all .15s',
              }}
            >
              {isVisited && !isActive ? '✓ ' : ''}{s[lang]}{isRec ? ' ★' : ''}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── MYP Grade Calculator ────────────────────────────────────────────────────
function MypCalculator({ data, lang }) {
  const d = data[lang]
  const [criteria, setCriteria] = useState({ A: 0, B: 0, C: 0, D: 0 })

  const total = Object.values(criteria).reduce((s, v) => s + v, 0)
  const boundary = data.en.boundaries.find(b => total >= b.min && total <= b.max)
  const grade = boundary ? boundary.grade : null
  const descriptor = grade ? data.en.descriptors.find(d => d.grade === grade) : null
  const descriptorLabel = descriptor ? (lang === 'ko' ? descriptor.ko : descriptor.label) : '—'

  const gradeColor = grade >= 6 ? '#1D9E75' : grade >= 4 ? '#185FA5' : grade >= 2 ? '#BA7517' : '#C0392B'

  const CriterionSlider = ({ label, val, onChange }) => (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>
          {lang === 'en' ? `Criterion ${label}` : `준거 ${label}`}
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--teal-dark)', minWidth: 32, textAlign: 'right' }}>{val} / 8</span>
      </div>
      <input
        type="range" min={0} max={8} value={val}
        onChange={e => onChange(parseInt(e.target.value))}
        style={{ width: '100%', accentColor: 'var(--teal)', cursor: 'pointer' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ink-4)', marginTop: 2 }}>
        <span>0</span><span>4</span><span>8</span>
      </div>
    </div>
  )

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1.5rem' }}>
      <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>
          {lang === 'en' ? 'MYP Grade Calculator' : 'MYP 등급 계산기'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>
          {lang === 'en' ? 'Drag each slider to set the criterion score (0–8)' : '각 슬라이더를 드래그하여 준거 점수(0~8)를 설정하세요'}
        </div>
      </div>

      <div style={{ padding: '1.1rem 1.2rem' }}>
        {['A', 'B', 'C', 'D'].map(l => (
          <CriterionSlider key={l} label={l} val={criteria[l]}
            onChange={v => setCriteria(prev => ({ ...prev, [l]: v }))} />
        ))}

        <div style={{
          display: 'flex', alignItems: 'center', gap: '1.25rem',
          padding: '1rem 1.1rem', marginTop: '.5rem',
          background: `${gradeColor}10`, border: `1px solid ${gradeColor}44`,
          borderRadius: 'var(--r)',
        }}>
          <div style={{ textAlign: 'center', minWidth: 64 }}>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 2 }}>
              {lang === 'en' ? 'Total' : '총점'}
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: gradeColor }}>{total}<span style={{ fontSize: 13, fontWeight: 400, color: 'var(--ink-4)' }}>/32</span></div>
          </div>
          <div style={{ width: 1, height: 40, background: 'var(--border)' }} />
          <div style={{ textAlign: 'center', minWidth: 56 }}>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 2 }}>
              {lang === 'en' ? 'Grade' : '등급'}
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: gradeColor, lineHeight: 1 }}>{grade || '—'}</div>
            <div style={{ fontSize: 10, color: 'var(--ink-4)', marginTop: 2 }}>{lang === 'en' ? 'out of 7' : '7점 만점'}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: gradeColor }}>{descriptorLabel}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 3, lineHeight: 1.5 }}>
              {lang === 'en'
                ? `Boundaries: ${boundary ? boundary.min + '–' + boundary.max : '—'} points`
                : `경계: ${boundary ? boundary.min + '~' + boundary.max : '—'} 점`}
            </div>
          </div>
        </div>

        {/* All grade boundaries reference table */}
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            {lang === 'en' ? 'Grade boundary reference' : '등급 경계 참고표'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
            {data.en.boundaries.map(b => {
              const desc = data.en.descriptors.find(d => d.grade === b.grade)
              const isActive = b.grade === grade
              const c = b.grade >= 6 ? '#1D9E75' : b.grade >= 4 ? '#185FA5' : b.grade >= 2 ? '#BA7517' : '#C0392B'
              return (
                <div key={b.grade} style={{
                  padding: '6px 4px', borderRadius: 6, textAlign: 'center',
                  background: isActive ? `${c}20` : 'var(--surface-2)',
                  border: isActive ? `2px solid ${c}` : '1px solid var(--border)',
                  transition: 'background .15s, border .15s',
                }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: c }}>{b.grade}</div>
                  <div style={{ fontSize: 9, color: 'var(--ink-4)', marginTop: 1 }}>{b.min}–{b.max}</div>
                </div>
              )
            })}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginTop: 3 }}>
            {data.en.descriptors.map(desc => {
              const label = lang === 'ko' ? desc.ko : desc.label
              return (
                <div key={desc.grade} style={{ fontSize: 8.5, color: 'var(--ink-4)', textAlign: 'center', lineHeight: 1.3 }}>
                  {label}
                </div>
              )
            })}
          </div>
        </div>

        {/* Watch out notes */}
        <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {d.watchOut.map((note, i) => (
            <div key={i} style={{
              fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6,
              paddingLeft: 10, borderLeft: '2px solid var(--teal)',
            }}>{note}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── DP Grade Calculator ──────────────────────────────────────────────────────
const DP_SUBJECTS_EN = ['Subject 1 (HL)', 'Subject 2 (HL)', 'Subject 3 (HL)', 'Subject 4 (SL)', 'Subject 5 (SL)', 'Subject 6 (SL)']
const DP_SUBJECTS_KO = ['과목 1 (HL)', '과목 2 (HL)', '과목 3 (HL)', '과목 4 (SL)', '과목 5 (SL)', '과목 6 (SL)']
const DP_HL = [true, true, true, false, false, false]
const EE_TOK_GRADES = ['A', 'B', 'C', 'D', 'E']

function DpCalculator({ data, lang }) {
  const d = data[lang]
  const [subjects, setSubjects] = useState([6, 6, 6, 6, 6, 6])
  const [ee, setEe] = useState('B')
  const [tok, setTok] = useState('B')

  const matrix = data.en.coreBonus.matrix
  const coreEntry = matrix.find(m => m.ee === ee && m.tok === tok)
  const corePoints = coreEntry ? coreEntry.points : 0
  const subjectTotal = subjects.reduce((s, v) => s + v, 0)
  const total = subjectTotal + Math.max(0, corePoints)

  // Diploma conditions
  const hlFail = subjects.slice(0, 3).some(s => s < 3)
  const slFail = subjects.slice(3, 6).some(s => s < 2)
  const grade1Count = subjects.filter(s => s === 1).length
  const tooManyOnes = grade1Count >= 3
  const eeEFail = ee === 'E' && tok === 'E'
  const totalFail = total < 24
  const passes = !hlFail && !slFail && !tooManyOnes && !eeEFail && !totalFail && corePoints !== -1

  const totalColor = passes ? '#1D9E75' : '#C0392B'

  const subjectLabels = lang === 'ko' ? DP_SUBJECTS_KO : DP_SUBJECTS_EN

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1.5rem' }}>
      <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>
          {lang === 'en' ? 'DP Grade Calculator' : 'DP 등급 계산기'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>
          {lang === 'en' ? 'Set grades for 6 subjects and the EE/ToK core' : '6개 과목과 소논문/지식이론 핵심 등급을 설정하세요'}
        </div>
      </div>

      <div style={{ padding: '1.1rem 1.2rem' }}>
        {/* Subject grades */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem' }}>
          {subjects.map((val, i) => {
            const isHL = DP_HL[i]
            const minPass = isHL ? 3 : 2
            const failing = val < minPass
            return (
              <div key={i} style={{ marginBottom: '.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)' }}>{subjectLabels[i]}</span>
                  <span style={{
                    fontSize: 14, fontWeight: 700,
                    color: failing ? '#C0392B' : '#1D9E75',
                    minWidth: 24, textAlign: 'right',
                  }}>{val}</span>
                </div>
                <input
                  type="range" min={1} max={7} value={val}
                  onChange={e => {
                    const next = [...subjects]
                    next[i] = parseInt(e.target.value)
                    setSubjects(next)
                  }}
                  style={{ width: '100%', accentColor: failing ? '#C0392B' : 'var(--teal)', cursor: 'pointer' }}
                />
                {failing && (
                  <div style={{ fontSize: 10, color: '#C0392B', marginTop: 2 }}>
                    {lang === 'en' ? `Min ${minPass} required for ${isHL ? 'HL' : 'SL'}` : `${isHL ? 'HL' : 'SL'} 최소 ${minPass}점 필요`}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* EE + ToK */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem', marginTop: '.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          {[
            { key: 'ee', val: ee, set: setEe, label: lang === 'en' ? 'Extended Essay (EE)' : '소논문 (EE)' },
            { key: 'tok', val: tok, set: setTok, label: lang === 'en' ? 'Theory of Knowledge (ToK)' : '지식이론 (ToK)' },
          ].map(({ key, val, set, label }) => (
            <div key={key}>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 6 }}>{label}</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {EE_TOK_GRADES.map(g => (
                  <button key={g} onClick={() => set(g)} style={{
                    flex: 1, padding: '5px 0', fontSize: 13, fontWeight: 700,
                    borderRadius: 6, border: 'none', cursor: 'pointer',
                    background: val === g ? (g === 'E' ? '#C0392B' : 'var(--teal)') : 'var(--surface-2)',
                    color: val === g ? 'white' : 'var(--ink-3)',
                    transition: 'background .12s, color .12s',
                  }}>{g}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core bonus */}
        <div style={{
          marginTop: '1rem', padding: '.75rem 1rem',
          background: corePoints > 0 ? '#E1F5EE' : corePoints === -1 ? '#FEF3F2' : 'var(--surface-2)',
          borderRadius: 'var(--r)', border: `1px solid ${corePoints > 0 ? '#1D9E7544' : corePoints === -1 ? '#C0392B44' : 'var(--border)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ fontSize: 12.5, color: 'var(--ink-2)', fontWeight: 500 }}>
            {lang === 'en' ? 'EE + ToK bonus' : '소논문 + 지식이론 보너스'}
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: corePoints > 0 ? '#1D9E75' : corePoints === -1 ? '#C0392B' : 'var(--ink-4)' }}>
            {corePoints === -1 ? lang === 'en' ? '⚠ Diploma at risk' : '⚠ 졸업장 위험' : `+${corePoints} pts`}
          </div>
        </div>

        {/* Total */}
        <div style={{
          marginTop: '1rem', padding: '1rem 1.1rem',
          background: `${totalColor}10`, border: `1px solid ${totalColor}44`,
          borderRadius: 'var(--r)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
        }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 3 }}>
              {lang === 'en' ? 'Total points' : '총 점수'}
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: totalColor, lineHeight: 1 }}>
              {total}<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--ink-4)' }}>/45</span>
            </div>
          </div>
          <div style={{
            padding: '8px 16px', borderRadius: 20, fontWeight: 700, fontSize: 14,
            background: passes ? '#1D9E75' : '#C0392B', color: 'white',
          }}>
            {passes
              ? (lang === 'en' ? '✓ Diploma awarded' : '✓ 졸업장 수여')
              : (lang === 'en' ? '✗ Diploma not awarded' : '✗ 졸업장 미수여')}
          </div>
        </div>

        {/* Fail conditions */}
        {!passes && (
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: 5 }}>
            {totalFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'en' ? 'Total below 24 points' : '총점 24점 미만'}</div>}
            {hlFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'en' ? 'One or more HL subjects below grade 3' : 'HL 과목 중 3점 미만 있음'}</div>}
            {slFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'en' ? 'One or more SL subjects below grade 2' : 'SL 과목 중 2점 미만 있음'}</div>}
            {tooManyOnes && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'en' ? '3 or more grade 1s' : '1점 과목 3개 이상'}</div>}
            {eeEFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'en' ? 'Grade E on both EE and ToK' : '소논문과 지식이론 모두 E 등급'}</div>}
            {corePoints === -1 && !eeEFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'en' ? 'EE/ToK combination fails the diploma condition' : '소논문/지식이론 조합이 졸업장 조건 미충족'}</div>}
          </div>
        )}

        {/* University context */}
        <div style={{ marginTop: '1.25rem', padding: '.875rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            {lang === 'en' ? 'University context' : '대학교 입시 맥락'}
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.65 }}>
            {lang === 'en'
              ? `Top universities typically require 36–40+ points. With ${total} points, your child is ${total >= 40 ? 'in range for the most selective programs' : total >= 36 ? 'competitive for most international universities' : total >= 30 ? 'within range for many universities — with room to improve' : 'in the earlier stages of their IB preparation'}. Note: universities also consider predicted grades, HL subject choices, and personal statements.`
              : `상위 대학교들은 일반적으로 36~40점 이상을 요구합니다. ${total}점으로, 자녀는 ${total >= 40 ? '가장 까다로운 프로그램에 지원 가능한 수준입니다' : total >= 36 ? '대부분의 국제 대학교에 경쟁력 있는 수준입니다' : total >= 30 ? '많은 대학교에 지원 가능한 범위 내에 있습니다 — 발전 여지가 있습니다' : '아직 IB 준비의 초기 단계에 있습니다'}. 참고: 대학교들은 예상 점수, HL 과목 선택, 자기소개서도 함께 고려합니다.`}
          </div>
        </div>

        {/* Watch out notes */}
        <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {d.watchOut.map((note, i) => (
            <div key={i} style={{
              fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6,
              paddingLeft: 10, borderLeft: '2px solid var(--teal)',
            }}>{note}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Grading Section ──────────────────────────────────────────────────────────
function GradingSection({ gradingSystem, lang }) {
  const [tab, setTab] = useState('myp')
  const g = gradingSystem[tab]

  return (
    <div>
      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: 8, marginBottom: '1.25rem' }}>
        {['myp', 'dp'].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '6px 20px', fontSize: 13, fontWeight: 600,
            borderRadius: 20, cursor: 'pointer',
            background: tab === t ? 'var(--teal)' : 'var(--surface-2)',
            color: tab === t ? 'white' : 'var(--ink-3)',
            border: `1px solid ${tab === t ? 'var(--teal)' : 'var(--border)'}`,
            transition: 'background .15s, color .15s',
          }}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: '.75rem' }}>
        {g[lang].title}
      </div>
      <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1rem' }}>
        {g[lang].intro}
      </p>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        {tab === 'myp' ? g[lang].criteriaNote : g[lang].subjectStructure}
      </p>

      {tab === 'myp'
        ? <MypCalculator data={gradingSystem.myp} lang={lang} />
        : <DpCalculator data={gradingSystem.dp} lang={lang} />
      }
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ParentModulePage() {
  const { slug } = useParams()
  const activity = MODULES[slug]

  const [lang, setLang] = useState(() => localStorage.getItem(LS_LANG(slug)) || 'en')
  const [done, setDone] = useState(() => localStorage.getItem(LS_DONE(slug)) === 'true')
  const [activeStage, setActiveStageState] = useState(() => localStorage.getItem(LS_STAGE(slug)) || null)
  const [activeSection, setActiveSectionState] = useState(() => localStorage.getItem(LS_SECTION(slug)) || 'start')
  const [visitedSections, setVisitedSections] = useState(() => {
    const stored = localStorage.getItem(LS_VISITED(slug))
    const s = stored ? new Set(stored.split(',')) : new Set()
    s.add('start') // always mark start as visited on load
    return s
  })

  const setActiveStage = (s) => {
    setActiveStageState(s)
    if (s) localStorage.setItem(LS_STAGE(slug), s)
    else localStorage.removeItem(LS_STAGE(slug))
  }

  const goToSection = (id) => {
    setActiveSectionState(id)
    localStorage.setItem(LS_SECTION(slug), id)
    setVisitedSections(prev => {
      const next = new Set(prev)
      next.add(id)
      localStorage.setItem(LS_VISITED(slug), [...next].join(','))
      return next
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
  const visibleSections = SECTIONS.filter(s => s.id !== 'pyp' || !!activity.pypCards)
  const currentIdx = visibleSections.findIndex(s => s.id === activeSection)
  const nextSection = currentIdx < visibleSections.length - 1 ? visibleSections[currentIdx + 1] : null
  const recommended = activeStage ? STAGE_RECOMMENDED[activeStage] : null
  const ns = activity.nextSteps?.[lang] || activity.nextSteps?.en || NEXT_STEPS[lang]
  const nextStepsItems = (activeStage && ns[activeStage]) ? ns[activeStage] : ns.default

  const markDone = () => {
    localStorage.setItem(LS_DONE(slug), 'true')
    setDone(true)
  }

  // Footer nav shown at bottom of each section except the last
  const SectionFooter = () => nextSection ? (
    <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={() => goToSection(nextSection.id)} style={{
        fontSize: 12.5, fontWeight: 600, color: 'var(--teal)',
        background: 'transparent', border: '1px solid var(--teal)44',
        borderRadius: 20, padding: '7px 20px', cursor: 'pointer',
      }}>
        {lang === 'en' ? `Next: ${nextSection.en}` : `다음: ${nextSection.ko}`} →
      </button>
    </div>
  ) : null

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
        {(!activity.languages || activity.languages.length > 1) && (
          <LangToggle lang={lang} setLang={setLang} />
        )}
      </div>

      {/* Stage chip — visible when stage selected + not on start section */}
      {activeStage && activeSection !== 'start' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{
            background: STAGE_COLORS[activeStage] + '18',
            border: `1px solid ${STAGE_COLORS[activeStage]}55`,
            borderRadius: 20, padding: '3px 11px',
            fontSize: 11.5, fontWeight: 600, color: STAGE_COLORS[activeStage],
          }}>
            {activity.journeyStages.find(s => s.id === activeStage)?.[lang]?.label}
          </span>
          <button onClick={() => goToSection('start')} style={{
            fontSize: 11.5, color: 'var(--ink-4)', background: 'none',
            border: 'none', cursor: 'pointer', padding: 0, textDecoration: 'underline',
          }}>
            {lang === 'en' ? 'change stage' : '단계 변경'}
          </button>
        </div>
      )}

      {/* Section nav */}
      <SectionNav
        sections={visibleSections}
        active={activeSection}
        visited={visitedSections}
        lang={lang}
        onChange={goToSection}
        recommended={recommended}
      />

      {/* ── START HERE ──────────────────────────────────────────────────── */}
      {activeSection === 'start' && (
        <div>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            {m.intro}
          </p>

          {m.reassurance && (
            <div style={{
              marginBottom: '1.25rem', padding: '.875rem 1rem',
              background: '#E1F5EE', borderRadius: 'var(--r)',
              border: '1px solid #1D9E7533',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 5 }}>
                {lang === 'en' ? 'What stays the same' : '변하지 않는 것'}
              </div>
              <div style={{ fontSize: 13, color: '#1D4030', lineHeight: 1.65 }}>
                {m.reassurance}
              </div>
            </div>
          )}

          {(m.koreanUniversityNote || m.indianUniversityNote) && (
            <div style={{
              marginBottom: '1.75rem', padding: '.875rem 1rem',
              background: 'var(--surface-2)', borderRadius: 'var(--r)',
              border: '1px solid var(--border)', borderLeft: '3px solid var(--teal)',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 5 }}>
                {m.koreanUniversityNote
                  ? (lang === 'en' ? 'Korean university admission' : '한국 대학교 입시')
                  : 'Indian universities & pathways'}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>
                {m.koreanUniversityNote || m.indianUniversityNote}
              </div>
            </div>
          )}

          {activity.journeyStages && (
            <JourneyTimeline
              stages={activity.journeyStages}
              activeStage={activeStage}
              setActiveStage={setActiveStage}
              lang={lang}
            />
          )}

          {/* Stage-driven recommendation prompt */}
          {activeStage && recommended && (
            <div style={{
              marginBottom: '1.5rem', padding: '.875rem 1rem',
              background: STAGE_COLORS[activeStage] + '12',
              border: `1px solid ${STAGE_COLORS[activeStage]}33`,
              borderRadius: 'var(--r)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
            }}>
              <div style={{ fontSize: 13, color: STAGE_COLORS[activeStage], fontWeight: 500 }}>
                {activity.journeyStages.find(s => s.id === activeStage)?.[lang]?.highlight}
              </div>
              <button onClick={() => goToSection(recommended)} style={{
                fontSize: 12.5, fontWeight: 600, color: 'white', flexShrink: 0,
                background: STAGE_COLORS[activeStage], border: 'none',
                borderRadius: 20, padding: '5px 16px', cursor: 'pointer',
              }}>
                {lang === 'en'
                  ? `Go to ${SECTIONS.find(s => s.id === recommended)?.en} →`
                  : `${SECTIONS.find(s => s.id === recommended)?.ko}로 이동 →`}
              </button>
            </div>
          )}

          <HookSection hook={activity.openingHook} lang={lang} />
          <SectionFooter />
        </div>
      )}

      {/* ── CORE CONCEPTS ───────────────────────────────────────────────── */}
      {activeSection === 'concepts' && (
        <div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {lang === 'en'
              ? 'Five concepts that often challenge parents new to IB — and why the IB approach is designed the way it is. Each card shows a concern that makes complete sense, then reveals what the school is actually doing and how it connects to your goals.'
              : '학부모들이 자주 혼란스러워하는 다섯 가지 개념과 IB 방식이 그렇게 설계된 이유입니다. 각 카드는 완전히 이해되는 걱정을 보여주고, 학교가 실제로 하고 있는 일과 그것이 목표와 어떻게 연결되는지를 설명합니다.'}
          </p>
          {activeStage && (
            <div style={{
              marginBottom: '1.25rem', padding: '.625rem 1rem', borderRadius: 'var(--r)',
              background: STAGE_COLORS[activeStage] + '12',
              border: `1px solid ${STAGE_COLORS[activeStage]}33`,
              fontSize: 12, color: STAGE_COLORS[activeStage], fontWeight: 500,
            }}>
              {lang === 'en'
                ? 'Cards with a "★ Relevant now" badge are most important for your current stage.'
                : '"★ 지금 중요" 배지가 있는 카드가 현재 단계에서 가장 중요합니다.'}
            </div>
          )}
          {activity.cards.map((card, i) => (
            <ConceptCard key={card.id} card={card} lang={lang} index={i} activeStage={activeStage} />
          ))}
          <SectionFooter />
        </div>
      )}

      {/* ── GRADE SYSTEM ────────────────────────────────────────────────── */}
      {activeSection === 'grades' && activity.gradingSystem && (
        <div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {lang === 'en'
              ? 'IB grades are not percentages and they are not ranks. Use the calculators to understand exactly how MYP and DP scores are built — and what they actually mean for university applications.'
              : 'IB 성적은 백분율도 석차도 아닙니다. 계산기를 사용하여 MYP와 DP 점수가 어떻게 구성되는지, 그리고 대학교 입시에서 실제로 무엇을 의미하는지 정확히 이해해 보세요.'}
          </p>

          {/* Before you calculate callout */}
          <div style={{
            marginBottom: '1.5rem', padding: '1rem 1.1rem',
            background: 'var(--surface-2)', borderRadius: 'var(--r)',
            border: '1px solid var(--border)', borderLeft: '3px solid var(--teal)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 8 }}>
              {lang === 'en' ? 'The basics — before you use the calculators' : '계산기 사용 전 기본 내용'}
            </div>
            {lang === 'en' ? (
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                <strong>MYP (Years 7–11):</strong> Every subject is assessed on four criteria (A, B, C, D), each out of 8. They add up to a total out of 32, which converts to a final grade of 1–7. The criteria measure different skills in each subject — in Maths, Criterion A is "Knowing and Understanding"; Criterion D is "Applying Maths in Real Life." Your child's report shows each criterion separately, which tells you precisely where to focus.
                <br /><br />
                <strong>DP (Years 12–13):</strong> Six subjects are each graded 1–7. On top of that, the Extended Essay and Theory of Knowledge contribute up to 3 bonus points. Total out of 45. Most competitive universities require 36–40+.
              </div>
            ) : (
              <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                <strong>MYP (7~11학년):</strong> 모든 과목은 네 가지 준거(A, B, C, D)로 평가됩니다. 각 준거는 8점 만점이며 합산하면 32점 만점의 총점이 됩니다. 이것이 최종 1~7등급으로 변환됩니다. 준거는 과목마다 다른 기술을 측정합니다. 수학에서 준거 A는 "지식과 이해", 준거 D는 "실생활 맥락에서의 수학 적용"입니다. 자녀의 성적표에는 각 준거가 별도로 표시되어 어디에 집중해야 하는지 정확히 알 수 있습니다.
                <br /><br />
                <strong>DP (12~13학년):</strong> 여섯 과목이 각 1~7점으로 평가됩니다. 여기에 소논문과 지식이론이 최대 3점의 보너스 점수를 추가합니다. 45점 만점입니다. 대부분의 경쟁력 있는 대학교는 36~40점 이상을 요구합니다.
              </div>
            )}
          </div>

          <GradingSection gradingSystem={activity.gradingSystem} lang={lang} />
          <SectionFooter />
        </div>
      )}

      {/* ── PYP ─────────────────────────────────────────────────────────── */}
      {activeSection === 'pyp' && activity.pypCards && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>
              {lang === 'en' ? 'PYP and the Transition to MYP' : 'PYP와 MYP로의 전환'}
            </div>
            {activeStage === 'pyp-myp' && (
              <span style={{ fontSize: 10, fontWeight: 700, background: STAGE_COLORS['pyp-myp'], color: 'white', padding: '1px 8px', borderRadius: 10 }}>
                {lang === 'en' ? '★ Most relevant for your stage' : '★ 현재 단계에 가장 관련'}
              </span>
            )}
          </div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {lang === 'en'
              ? 'PYP (Primary Years Programme, ages 3–11) looks very different from what comes after. These five cards explain what is happening — and what your child is building toward MYP and beyond.'
              : 'PYP(초등 과정, 3~11세)는 이후에 오는 것과 매우 다르게 보입니다. 이 다섯 장의 카드는 무슨 일이 일어나고 있는지, 그리고 자녀가 MYP와 그 이후를 위해 무엇을 쌓고 있는지를 설명합니다.'}
          </p>
          {activity.pypCards.map((card, i) => (
            <ConceptCard key={card.id} card={card} lang={lang} index={i} activeStage={activeStage} />
          ))}
          <SectionFooter />
        </div>
      )}

      {/* ── REAL SITUATIONS ─────────────────────────────────────────────── */}
      {activeSection === 'scenarios' && (
        <div>
          <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            {lang === 'en'
              ? 'Two situations you may recognise. Read the scenario, then reveal how the same moment looks with and without this context.'
              : '익숙하게 느껴질 수 있는 두 가지 상황입니다. 시나리오를 읽고, 같은 순간이 이 맥락의 유무에 따라 어떻게 달라지는지 확인해 보세요.'}
          </p>
          {activity.reviewScenarios.map((s, i) => (
            <ReviewScenario key={s.id} scenario={s} lang={lang} index={i} />
          ))}
          <SectionFooter />
        </div>
      )}

      {/* ── NEXT STEPS ──────────────────────────────────────────────────── */}
      {activeSection === 'next' && (
        <div>
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

          {/* Stage-aware next steps */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: '.5rem' }}>
              {lang === 'en' ? 'Three things to do this week' : '이번 주에 할 세 가지'}
            </div>
            <p style={{ fontSize: 12.5, color: 'var(--ink-4)', marginBottom: '1rem', lineHeight: 1.6 }}>
              {lang === 'en'
                ? activeStage
                  ? `Personalised for your selected stage.`
                  : `Select your stage on Start Here for personalised suggestions.`
                : activeStage
                  ? `선택한 단계에 맞게 개인화된 제안입니다.`
                  : `시작하기 섹션에서 단계를 선택하면 맞춤 제안을 받을 수 있습니다.`}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {nextStepsItems.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '.875rem 1rem', borderRadius: 'var(--r)',
                  background: 'var(--surface-2)', border: '1px solid var(--border)',
                }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                    background: 'var(--teal)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, fontWeight: 700,
                  }}>{i + 1}</span>
                  <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.7 }}>{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mark complete */}
          {!done && (
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
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

          {/* Glossary */}
          {activity.glossary && activity.glossary.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: 'var(--ink-4)',
                textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '1rem',
              }}>
                {lang === 'en' ? 'IB Acronym Glossary' : 'IB 약어 용어집'}
              </div>
              <div style={{ display: 'grid', gap: '.75rem' }}>
                {activity.glossary.map(g => {
                  const entry = g[lang]
                  return (
                    <div key={g.term} style={{
                      display: 'grid', gridTemplateColumns: '56px 1fr',
                      gap: '0 1rem', alignItems: 'start',
                      padding: '.875rem 1rem', borderRadius: 'var(--r)',
                      background: 'var(--surface-2)', border: '1px solid var(--border)',
                    }}>
                      <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--teal)', paddingTop: 1 }}>{g.term}</div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)', marginBottom: 3 }}>{entry.full}</div>
                        <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.65 }}>{entry.definition}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Footer note */}
          <div style={{ padding: '1rem 1.1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.7 }}>
              {lang === 'en'
                ? 'This guide was written for international families navigating IB schools. If something feels inaccurate or is missing, your school can share feedback with the module author.'
                : '이 안내서는 IB 학교를 경험하는 국제 가정을 위해 작성되었습니다. 부정확하거나 누락된 내용이 있으면 학교를 통해 모듈 작성자에게 피드백을 전달할 수 있습니다.'}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

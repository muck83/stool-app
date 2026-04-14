import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MYP_SUBJECTS, getBand, getSubjectLabel } from '../../data/mypCriteria.js'
import { koreaIbParent }     from '../../../vocab/parent/korea-ib-parent.jsx'
import { indiaIbParent }     from '../../../vocab/parent/india-ib-parent.jsx'
import { chinaIbParent }     from '../../../vocab/parent/china-ib-parent.jsx'
import { ksaIbParent }       from '../../../vocab/parent/ksa-ib-parent.jsx'
import { vietnamIbParent }   from '../../../vocab/parent/vietnam-ib-parent.jsx'
import { japanIbParent }     from '../../../vocab/parent/japan-ib-parent.jsx'
import { indonesiaIbParent } from '../../../vocab/parent/indonesia-ib-parent.jsx'
import { uaeIbParent }       from '../../../vocab/parent/uae-ib-parent.jsx'

const MODULES = {
  'korea-ib':     koreaIbParent,
  'india-ib':     indiaIbParent,
  'china-ib':     chinaIbParent,
  'ksa-ib':       ksaIbParent,
  'vietnam-ib':   vietnamIbParent,
  'japan-ib':     japanIbParent,
  'indonesia-ib': indonesiaIbParent,
  'uae-ib':       uaeIbParent,
}

const LS_LANG     = slug => `pd_parent_lang_${slug}`
const LS_DONE     = slug => `pd_parent_done_${slug}`
const LS_STAGE    = slug => `pd_parent_stage_${slug}`
const LS_SECTION  = slug => `pd_parent_section_${slug}`
const LS_VISITED  = slug => `pd_parent_visited_${slug}`

// ─── Section definitions ──────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'start',     en: 'Start Here',       ko: '시작하기',  zh: '从这里开始', ar: 'ابدأ هنا',          vi: 'Bắt đầu ở đây'       },
  { id: 'concepts',  en: 'Core Concepts',    ko: '핵심 개념', zh: '核心概念',   ar: 'المفاهيم الأساسية', vi: 'Khái niệm cốt lõi'   },
  { id: 'grades',    en: 'Grade System',     ko: '성적 체계', zh: '成绩体系',   ar: 'نظام الدرجات'       },
  { id: 'pyp',       en: 'PYP',              ko: 'PYP',       zh: 'PYP',        ar: 'PYP',               vi: 'PYP'                  },
  { id: 'scenarios', en: 'Real Situations',  ko: '실제 상황', zh: '真实情境',   ar: 'مواقف حقيقية',      vi: 'Tình huống thực tế'  },
  { id: 'next',      en: 'Next Steps',       ko: '다음 단계', zh: '下一步',     ar: 'الخطوات التالية',   vi: 'Bước tiếp theo'      },
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
const LANG_LABELS = { en: 'English', ko: '한국어', zh: '中文', ar: 'العربية', vi: 'Tiếng Việt', ja: '日本語', id: 'Indonesia' }

function LangToggle({ lang, setLang, languages }) {
  const langs = languages && languages.length > 1 ? languages : ['en', 'ko']
  const btn = (l) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      style={{
        padding: '5px 16px', fontSize: 13, fontWeight: 600,
        borderRadius: 20, border: 'none', cursor: 'pointer',
        background: lang === l ? 'var(--teal)' : 'transparent',
        color: lang === l ? 'white' : 'var(--ink-3)',
        transition: 'background .15s, color .15s',
      }}
    >{LANG_LABELS[l] || l}</button>
  )
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 2,
      background: 'var(--surface-2)', borderRadius: 24,
      padding: 3, border: '1px solid var(--border)',
    }}>
      {langs.map(l => btn(l))}
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
        {lang === 'vi' ? 'Tình huống mở đầu' : lang === 'ar' ? 'الموقف الافتتاحي' : lang === 'zh' ? '开场情境' : lang === 'ko' ? '도입 상황' : 'Opening situation'}
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
          {lang === 'vi' ? 'Xem câu hỏi →' : lang === 'ar' ? '← اطّلع على السؤال' : lang === 'zh' ? '查看问题 →' : lang === 'ko' ? '질문 보기 →' : 'See the question →'}
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
function ConceptCard({ card, lang, index, activeStage, whatToAskNote }) {
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
                {lang === 'vi' ? `Khái niệm ${index + 1}` : lang === 'ar' ? `المفهوم ${index + 1}` : lang === 'zh' ? `概念 ${index + 1}` : lang === 'ko' ? `개념 ${index + 1}` : `Concept ${index + 1}`}
              </span>
              {isRelevant && (
                <span style={{ fontSize: 10, fontWeight: 700, background: stageCol, color: 'white', padding: '1px 7px', borderRadius: 10 }}>
                  {lang === 'vi' ? '★ Liên quan ngay' : lang === 'ar' ? '★ مهم الآن' : lang === 'zh' ? '★ 当前重要' : lang === 'ko' ? '★ 지금 중요' : '★ Relevant now'}
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
            {lang === 'vi' ? 'Mối lo thường gặp' : lang === 'ar' ? 'قلق شائع' : lang === 'zh' ? '常见顾虑' : lang === 'ko' ? '자주 하는 걱정' : 'A common concern'}
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
            {lang === 'vi' ? 'Nhà trường làm gì →' : lang === 'ar' ? '← ما تفعله المدرسة' : lang === 'zh' ? '学校的做法 →' : lang === 'ko' ? '학교가 하는 일 보기 →' : 'What the school is doing →'}
          </button>
        </div>
      ) : (
        <div style={{ padding: '1rem 1.2rem 1.25rem', borderTop: `1px solid ${col}22` }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              {lang === 'vi' ? 'Nhà trường làm gì' : lang === 'ar' ? 'ما تفعله المدرسة' : lang === 'zh' ? '学校的做法' : lang === 'ko' ? '학교가 하는 일' : 'What the school is doing'}
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>
              {c.bridge}
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: col, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
              {lang === 'vi' ? 'Cách điều này kết nối với mục tiêu của bạn' : lang === 'ar' ? 'كيف يرتبط هذا بهدفك' : lang === 'zh' ? '与您目标的联系' : lang === 'ko' ? '목표와의 연결' : 'How this connects to your goal'}
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
                {lang === 'vi' ? 'Câu hỏi cho buổi họp tiếp theo' : lang === 'ar' ? 'ما تسأل عنه في لقائك القادم' : lang === 'zh' ? '下次面谈时要问的问题' : lang === 'ko' ? '다음 면담에서 물어볼 것' : 'What to ask at your next meeting'}
              </div>
              <div style={{ fontSize: 11, color: '#A16207', marginBottom: 8, lineHeight: 1.5 }}>
                {whatToAskNote || (lang === 'ar'
                  ? 'معلمو IB يتوقعون هذه الأسئلة ويرحبون بها — السؤال المباشر أمر طبيعي وليس وقاحة.'
                  : lang === 'zh'
                  ? 'IB教师欢迎并期待这些问题——直接提问是正常的，不是失礼。'
                  : lang === 'ko'
                  ? 'IB 교사들은 이런 질문을 기대하고 환영합니다. 직접적으로 묻는 것은 일반적인 일입니다.'
                  : 'IB teachers expect and welcome these questions — asking directly is normal, not rude.')}
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
            {lang === 'ar' ? '← اطّلع على الردّين' : lang === 'zh' ? '查看两种回应 →' : lang === 'ko' ? '두 가지 반응 보기 →' : 'See both responses →'}
          </button>
        )}

        {phase === 'reveal' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '.5rem' }}>
            <div style={{
              padding: '.875rem 1rem', borderRadius: 'var(--r)',
              background: '#E1F5EE', border: '1px solid #1D9E7544',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
                {lang === 'ar' ? 'مع الفهم' : lang === 'zh' ? '了解情况时' : lang === 'ko' ? '이해했을 때' : 'With understanding'}
              </div>
              <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>{s.withUnderstanding}</div>
            </div>
            <div style={{
              padding: '.875rem 1rem', borderRadius: 'var(--r)',
              background: '#FEF3F2', border: '1px solid #C0392B44',
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
                {lang === 'ar' ? 'بدون فهم' : lang === 'zh' ? '不了解情况时' : lang === 'ko' ? '이해하지 못했을 때' : 'Without understanding'}
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
        {lang === 'ar' ? 'أين أنت في رحلتك؟' : lang === 'zh' ? '您目前处于哪个阶段？' : lang === 'ko' ? '지금 어느 단계에 계신가요?' : 'Where are you in the journey?'}
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
          {lang === 'ar' ? 'أقسام الدليل' : lang === 'zh' ? '指南章节' : lang === 'ko' ? '안내서 섹션' : 'Guide sections'}
        </div>
        <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>
          {lang === 'ar' ? `تمت زيارة ${visitedCount} من ${total}` : lang === 'zh' ? `已访问 ${visitedCount}/${total}` : lang === 'ko' ? `${total}개 중 ${visitedCount}개 방문` : `${visitedCount} of ${total} visited`}
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
  const [selectedSubjectId, setSelectedSubjectId] = useState('')

  const selectedSubject = MYP_SUBJECTS.find(s => s.id === selectedSubjectId) || null

  const total = Object.values(criteria).reduce((s, v) => s + v, 0)
  const boundary = data.en.boundaries.find(b => total >= b.min && total <= b.max)
  const grade = boundary ? boundary.grade : null
  const descriptor = grade ? data.en.descriptors.find(d => d.grade === grade) : null
  const descriptorLabel = descriptor ? (lang === 'ar' ? (descriptor.ar || descriptor.label) : lang === 'zh' ? (descriptor.zh || descriptor.label) : lang === 'ko' ? (descriptor.ko || descriptor.label) : lang === 'vi' ? (descriptor.vi || descriptor.label) : descriptor.label) : '—'

  const gradeColor = grade >= 6 ? '#1D9E75' : grade >= 4 ? '#185FA5' : grade >= 2 ? '#BA7517' : '#C0392B'

  const subjectSelectLabel = {
    ar: 'اختر المادة لعرض أسماء المعايير',
    zh: '选择科目以显示维度名称',
    ko: '준거 이름 표시를 위해 과목 선택',
    vi: 'Chọn môn để xem tên tiêu chí',
    en: 'Select subject to see criterion names',
  }
  const subjectPlaceholder = {
    ar: '— اختر مادة (اختياري) —',
    zh: '— 选择科目（可选）—',
    ko: '— 과목 선택 (선택 사항) —',
    vi: '— Chọn môn (tùy chọn) —',
    en: '— Select subject (optional) —',
  }

  const CriterionSlider = ({ label, val, onChange }) => {
    const crit = selectedSubject ? selectedSubject.criteria[label] : null
    const band = crit ? getBand(crit.bands, val) : null
    const critName = crit
      ? (lang === 'ar' ? crit.nameAr : crit.name)
      : null

    return (
      <div style={{ marginBottom: '1.1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <div>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>
              {lang === 'ar' ? `المعيار ${label}` : lang === 'zh' ? `维度 ${label}` : lang === 'ko' ? `준거 ${label}` : `Criterion ${label}`}
            </span>
            {critName && (
              <span style={{ fontSize: 11, color: 'var(--ink-4)', marginLeft: 6 }}>— {critName}</span>
            )}
          </div>
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
        {band && val > 0 && (
          <div style={{
            marginTop: 5, fontSize: 11.5, color: 'var(--ink-3)', lineHeight: 1.55,
            padding: '5px 9px', background: 'var(--surface-2)',
            borderLeft: `3px solid ${gradeColor}`, borderRadius: '0 4px 4px 0',
          }}>
            {lang === 'ar' && band.ar ? band.ar : band.en}
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1.5rem' }}>
      <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>
          {lang === 'ar' ? 'حاسبة درجات MYP' : lang === 'zh' ? 'MYP成绩计算器' : lang === 'ko' ? 'MYP 등급 계산기' : 'MYP Grade Calculator'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>
          {lang === 'ar' ? 'اسحب كل شريط لتحديد درجة المعيار (0–8)' : lang === 'zh' ? '拖动滑块设置各维度得分（0–8）' : lang === 'ko' ? '각 슬라이더를 드래그하여 준거 점수(0~8)를 설정하세요' : 'Drag each slider to set the criterion score (0–8)'}
        </div>
      </div>

      <div style={{ padding: '1.1rem 1.2rem' }}>
        {/* Subject selector — optional, unlocks per-criterion names + band descriptions */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', display: 'block', marginBottom: 4 }}>
            {subjectSelectLabel[lang] || subjectSelectLabel.en}
          </label>
          <select
            value={selectedSubjectId}
            onChange={e => setSelectedSubjectId(e.target.value)}
            style={{
              width: '100%', padding: '6px 10px', fontSize: 13,
              border: '1px solid var(--border)', borderRadius: 6,
              background: 'var(--surface)', color: 'var(--ink)',
              cursor: 'pointer', appearance: 'auto',
            }}
          >
            <option value="">{subjectPlaceholder[lang] || subjectPlaceholder.en}</option>
            {MYP_SUBJECTS.map(s => (
              <option key={s.id} value={s.id}>
                {lang === 'ar' ? s.labelAr : lang === 'zh' ? (s.labelZh || s.label) : lang === 'ko' ? (s.labelKo || s.label) : lang === 'vi' ? (s.labelVi || s.label) : s.label}
              </option>
            ))}
          </select>
        </div>

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
              {lang === 'ar' ? 'المجموع' : lang === 'zh' ? '总分' : lang === 'ko' ? '총점' : 'Total'}
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: gradeColor }}>{total}<span style={{ fontSize: 13, fontWeight: 400, color: 'var(--ink-4)' }}>/32</span></div>
          </div>
          <div style={{ width: 1, height: 40, background: 'var(--border)' }} />
          <div style={{ textAlign: 'center', minWidth: 56 }}>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 2 }}>
              {lang === 'ar' ? 'الدرجة' : lang === 'zh' ? '等级' : lang === 'ko' ? '등급' : 'Grade'}
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: gradeColor, lineHeight: 1 }}>{grade || '—'}</div>
            <div style={{ fontSize: 10, color: 'var(--ink-4)', marginTop: 2 }}>{lang === 'ar' ? 'من 7' : lang === 'zh' ? '满分7' : lang === 'ko' ? '7점 만점' : 'out of 7'}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: gradeColor }}>{descriptorLabel}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 3, lineHeight: 1.5 }}>
              {lang === 'ar'
                ? `الحدود: ${boundary ? boundary.min + '–' + boundary.max : '—'} نقطة`
                : lang === 'zh'
                ? `分数区间：${boundary ? boundary.min + '–' + boundary.max : '—'} 分`
                : lang === 'ko' ? `경계: ${boundary ? boundary.min + '~' + boundary.max : '—'} 점`
                : `Boundaries: ${boundary ? boundary.min + '–' + boundary.max : '—'} points`}
            </div>
          </div>
        </div>

        {/* All grade boundaries reference table */}
        <div style={{ marginTop: '1.25rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            {lang === 'ar' ? 'مرجع حدود الدرجات' : lang === 'zh' ? '等级边界参考' : lang === 'ko' ? '등급 경계 참고표' : 'Grade boundary reference'}
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
              const label = lang === 'ar' ? (desc.ar || desc.label) : lang === 'zh' ? (desc.zh || desc.label) : lang === 'ko' ? (desc.ko || desc.label) : lang === 'vi' ? (desc.vi || desc.label) : desc.label
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
const DP_SUBJECTS_ZH = ['科目 1 (HL)', '科目 2 (HL)', '科目 3 (HL)', '科目 4 (SL)', '科目 5 (SL)', '科目 6 (SL)']
const DP_SUBJECTS_AR = ['المادة 1 (HL)', 'المادة 2 (HL)', 'المادة 3 (HL)', 'المادة 4 (SL)', 'المادة 5 (SL)', 'المادة 6 (SL)']
const DP_SUBJECTS_VI = ['Môn 1 (HL)', 'Môn 2 (HL)', 'Môn 3 (HL)', 'Môn 4 (SL)', 'Môn 5 (SL)', 'Môn 6 (SL)']
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

  const subjectLabels = lang === 'ar' ? DP_SUBJECTS_AR : lang === 'zh' ? DP_SUBJECTS_ZH : lang === 'ko' ? DP_SUBJECTS_KO : lang === 'vi' ? DP_SUBJECTS_VI : DP_SUBJECTS_EN

  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', marginBottom: '1.5rem' }}>
      <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>
          {lang === 'ar' ? 'حاسبة درجات DP' : lang === 'zh' ? 'DP成绩计算器' : lang === 'ko' ? 'DP 등급 계산기' : 'DP Grade Calculator'}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 3 }}>
          {lang === 'ar' ? 'حدّد درجات 6 مواد ونواة EE/ToK' : lang === 'zh' ? '设留6门科目及EE/ToK核心分数' : lang === 'ko' ? '6개 과목과 소논문/지식이론 핵심 등급을 설정하세요' : 'Set grades for 6 subjects and the EE/ToK core'}
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
                    {lang === 'ar' ? `الحد الأدنى ${minPass} لـ ${isHL ? 'HL' : 'SL'}` : lang === 'zh' ? `${isHL ? 'HL' : 'SL'}最低需要${minPass}分` : lang === 'ko' ? `${isHL ? 'HL' : 'SL'} 최소 ${minPass}점 필요` : `Min ${minPass} required for ${isHL ? 'HL' : 'SL'}`}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* EE + ToK */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem', marginTop: '.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
          {[
            { key: 'ee', val: ee, set: setEe, label: lang === 'ar' ? 'المقالة الموسّعة (EE)' : lang === 'zh' ? '课题论文 (EE)' : lang === 'ko' ? '소논문 (EE)' : 'Extended Essay (EE)' },
            { key: 'tok', val: tok, set: setTok, label: lang === 'ar' ? 'نظرية المعرفة (ToK)' : lang === 'zh' ? '知识论 (ToK)' : lang === 'ko' ? '지식이론 (ToK)' : 'Theory of Knowledge (ToK)' },
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
            {lang === 'ar' ? 'نقاط إضافية EE + ToK' : lang === 'zh' ? 'EE + ToK 加分' : lang === 'ko' ? '소논문 + 지식이론 보너스' : 'EE + ToK bonus'}
          </div>
          <div style={{ fontSize: 18, fontWeight: 800, color: corePoints > 0 ? '#1D9E75' : corePoints === -1 ? '#C0392B' : 'var(--ink-4)' }}>
            {corePoints === -1 ? (lang === 'ar' ? '⚠ الشهادة في خطر' : lang === 'zh' ? '⚠ 毕业证书存在风险' : lang === 'ko' ? '⚠ 졸업장 위험' : '⚠ Diploma at risk') : `+${corePoints} pts`}
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
              {lang === 'ar' ? 'مجموع النقاط' : lang === 'zh' ? '总分' : lang === 'ko' ? '총 점수' : 'Total points'}
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
              ? (lang === 'ar' ? '✓ مُنحت الشهادة' : lang === 'zh' ? '✓ 获得毕业证书' : lang === 'ko' ? '✓ 졸업장 수여' : '✓ Diploma awarded')
              : (lang === 'ar' ? '✗ لم تُمنح الشهادة' : lang === 'zh' ? '✗ 未获得毕业证书' : lang === 'ko' ? '✗ 졸업장 미수여' : '✗ Diploma not awarded')}
          </div>
        </div>

        {/* Fail conditions */}
        {!passes && (
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: 5 }}>
            {totalFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'ar' ? 'المجموع أقل من 24 نقطة' : lang === 'zh' ? '总分低于24分' : lang === 'ko' ? '총점 24점 미만' : 'Total below 24 points'}</div>}
            {hlFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'ar' ? 'مادة HL أو أكثر أقل من درجة 3' : lang === 'zh' ? '一门或多门HL科目低于3分' : lang === 'ko' ? 'HL 과목 중 3점 미만 있음' : 'One or more HL subjects below grade 3'}</div>}
            {slFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'ar' ? 'مادة SL أو أكثر أقل من درجة 2' : lang === 'zh' ? '一门或多门SL科目低于2分' : lang === 'ko' ? 'SL 과목 중 2점 미만 있음' : 'One or more SL subjects below grade 2'}</div>}
            {tooManyOnes && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'ar' ? '3 مواد أو أكثر بدرجة 1' : lang === 'zh' ? '3门或以上科目得1分' : lang === 'ko' ? '1점 과목 3개 이상' : '3 or more grade 1s'}</div>}
            {eeEFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'ar' ? 'تقدير E في كل من EE وToK' : lang === 'zh' ? 'EE和ToK均为E等级' : lang === 'ko' ? '소논문과 지식이론 모두 E 등급' : 'Grade E on both EE and ToK'}</div>}
            {corePoints === -1 && !eeEFail && <div style={{ fontSize: 12, color: '#C0392B', lineHeight: 1.5 }}>• {lang === 'ar' ? 'تركيبة EE/ToK لا تستوفي شرط الشهادة' : lang === 'zh' ? 'EE/ToK组合不符合毕业证书条件' : lang === 'ko' ? '소논문/지식이론 조합이 졸업장 조건 미충족' : 'EE/ToK combination fails the diploma condition'}</div>}
          </div>
        )}

        {/* University context */}
        <div style={{ marginTop: '1.25rem', padding: '.875rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 6 }}>
            {lang === 'ar' ? 'السياق الجامعي' : lang === 'zh' ? '大学录取背景' : lang === 'ko' ? '대학교 입시 맥락' : 'University context'}
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.65 }}>
            {data[lang]?.universityContext || (lang === 'ar'
              ? `تطلب الجامعات المرموقة عادةً 36–40 نقطة أو أكثر. بـ ${total} نقطة، طفلك ${total >= 40 ? 'في نطاق البرامج الأكثر تنافسية' : total >= 36 ? 'تنافسي في معظم الجامعات الدولية' : total >= 30 ? 'ضمن نطاق كثير من الجامعات — مع مجال للتحسين' : 'في المراحل الأولى من تحضيره لـ IB'}. ملاحظة: تأخذ الجامعات أيضاً في الاعتبار الدرجات التقديرية واختيارات مواد HL والبيان الشخصي.`
              : lang === 'zh'
              ? `顶尖大学通常要求36–40分以上。以${total}分来看，您的孩子${total >= 40 ? '已达到最严选拔项目的申请标准' : total >= 36 ? '在大多数国际大学具有竞争力' : total >= 30 ? '在许多大学的录取范围内——仍有提升空间' : '目前仍处于IB备考的早期阶段'}。注意：大学同时考量预测成绩、HL科目选择及个人陈述。`
              : lang === 'en'
              ? `Top universities typically require 36–40+ points. With ${total} points, your child is ${total >= 40 ? 'in range for the most selective programs' : total >= 36 ? 'competitive for most international universities' : total >= 30 ? 'within range for many universities — with room to improve' : 'in the earlier stages of their IB preparation'}. Note: universities also consider predicted grades, HL subject choices, and personal statements.`
              : `상위 대학교들은 일반적으로 36~40점 이상을 요구합니다. ${total}점으로, 자녀는 ${total >= 40 ? '가장 까다로운 프로그램에 지원 가능한 수준입니다' : total >= 36 ? '대부분의 국제 대학교에 경쟁력 있는 수준입니다' : total >= 30 ? '많은 대학교에 지원 가능한 범위 내에 있습니다 — 발전 여지가 있습니다' : '아직 IB 준비의 초기 단계에 있습니다'}. 참고: 대학교들은 예상 점수, HL 과목 선택, 자기소개서도 함께 고려합니다.`)}
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


// ─── AP Score Table ───────────────────────────────────────────────────────────
function APScoreTable({ data, lang }) {
  const d = data[lang] || data.en
  const [selectedScore, setSelectedScore] = useState(null)

  const scoreColors = { 5: '#1D9E75', 4: '#185FA5', 3: '#BA7517', 2: '#C0392B', 1: '#7F8C8D' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Score scale interactive picker */}
      <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
        <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>
            {lang === 'vi' ? 'Thang điểm 1–5 & ý nghĩa tín chỉ' : 'Score scale 1–5 & credit meaning'}
          </div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 3 }}>
            {data.en.scoresNote}
          </div>
        </div>
        <div style={{ padding: '1rem 1.2rem' }}>
          {/* Score chips */}
          <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
            {data.en.scores.map(s => {
              const color = scoreColors[s.score]
              const active = selectedScore === s.score
              return (
                <button
                  key={s.score}
                  onClick={() => setSelectedScore(active ? null : s.score)}
                  style={{
                    flex: 1, padding: '10px 4px',
                    borderRadius: 8, cursor: 'pointer', border: 'none',
                    background: active ? color : `${color}18`,
                    color: active ? 'white' : color,
                    transition: 'background .12s, color .12s',
                  }}
                >
                  <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1 }}>{s.score}</div>
                  <div style={{ fontSize: 9, marginTop: 3, opacity: active ? .9 : .7, fontWeight: 600, textTransform: 'uppercase' }}>
                    {lang === 'vi' ? s.vi : s.label}
                  </div>
                </button>
              )
            })}
          </div>
          {/* Score detail */}
          {selectedScore && (() => {
            const s = data.en.scores.find(sc => sc.score === selectedScore)
            const color = scoreColors[selectedScore]
            return (
              <div style={{
                padding: '1rem', borderRadius: 'var(--r)',
                background: `${color}10`, border: `1px solid ${color}33`,
                borderLeft: `4px solid ${color}`,
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color, marginBottom: 6 }}>
                  {lang === 'vi' ? s.vi : s.label}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>
                  {lang === 'vi' ? s.creditVi : s.creditEn}
                </div>
              </div>
            )
          })()}
          {!selectedScore && (
            <div style={{ fontSize: 12, color: 'var(--ink-4)', textAlign: 'center', padding: '6px 0' }}>
              {lang === 'vi' ? 'Chọn điểm số để xem ý nghĩa tín chỉ' : 'Select a score to see credit meaning'}
            </div>
          )}
        </div>
      </div>

      {/* High-value subjects */}
      <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
        <div style={{ padding: '.875rem 1.2rem', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>
            {lang === 'vi' ? 'Các môn AP có giá trị tín chỉ cao' : 'High-value AP subjects for credit'}
          </div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 3 }}>
            {lang === 'vi'
              ? 'Các môn phổ biến tại các trường AP ở Việt Nam với mức công nhận tín chỉ mạnh nhất'
              : 'Subjects common at Vietnam AP schools with the strongest credit recognition'}
          </div>
        </div>
        <div style={{ padding: '.75rem 1.2rem 1.2rem' }}>
          {data.en.highValueSubjects.map((s, i) => (
            <div key={i} style={{
              padding: '.8rem 0',
              borderBottom: i < data.en.highValueSubjects.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                {lang === 'vi' ? s.subjectVi : s.subject}
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.65 }}>
                {lang === 'vi' ? s.noteVi : s.noteEn}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Watch out */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {data.en.watchOut.map((note, i) => (
          <div key={i} style={{
            fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6,
            paddingLeft: 10, borderLeft: '2px solid #E67E22',
          }}>{note}</div>
        ))}
      </div>
    </div>
  )
}

// ─── Grading Section ──────────────────────────────────────────────────────────
function GradingSection({ gradingSystem, lang }) {
  const hasAP = !!gradingSystem.ap
  const [tab, setTab] = useState('myp')
  const tabs = hasAP ? ['myp', 'dp', 'ap'] : ['myp', 'dp']
  const g = tab === 'ap' ? gradingSystem.ap : gradingSystem[tab]

  return (
    <div>
      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: 8, marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '6px 20px', fontSize: 13, fontWeight: 600,
            borderRadius: 20, cursor: 'pointer',
            background: tab === t ? (t === 'ap' ? '#E67E22' : 'var(--teal)') : 'var(--surface-2)',
            color: tab === t ? 'white' : 'var(--ink-3)',
            border: `1px solid ${tab === t ? (t === 'ap' ? '#E67E22' : 'var(--teal)') : 'var(--border)'}`,
            transition: 'background .15s, color .15s',
          }}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: '.75rem' }}>
        {g[lang]?.title || g.en.title}
      </div>
      <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1rem' }}>
        {g[lang]?.intro || g.en.intro}
      </p>
      {tab !== 'ap' && (
        <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          {tab === 'myp' ? g[lang].criteriaNote : g[lang].subjectStructure}
        </p>
      )}

      {tab === 'myp'
        ? <MypCalculator data={gradingSystem.myp} lang={lang} />
        : tab === 'dp'
        ? <DpCalculator data={gradingSystem.dp} lang={lang} />
        : <APScoreTable data={gradingSystem.ap} lang={lang} />
      }
    </div>
  )
}


// ─── PYP Bridge Section ───────────────────────────────────────────────────────────────────────────
function PypBridgeSection({ pypBridge, lang }) {
  if (!pypBridge || !pypBridge[lang]) return null
  const b = pypBridge[lang]
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: '.75rem' }}>
        {b.title}
      </div>
      <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
        {b.intro}
      </p>

      {/* Changes table */}
      {b.changes && b.changes.length > 0 && (
        <div style={{ marginBottom: '1.5rem', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', padding: '.75rem 1rem', gap: '1rem' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.07em' }}>
              {lang === 'ar' ? 'الجانب' : lang === 'zh' ? '方面' : lang === 'ko' ? '항목' : lang === 'id' ? 'Aspek' : lang === 'ja' ? '項目' : 'Aspect'}
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em' }}>PYP</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em' }}>MYP</div>
          </div>
          {b.changes.map((ch, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem',
              padding: '.875rem 1rem',
              background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface-2)',
              borderBottom: i < b.changes.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink)' }}>{ch.aspect}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6 }}>{ch.pyp}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.6 }}>{ch.myp}</div>
            </div>
          ))}
        </div>
      )}

      {/* First year note */}
      {b.firstYearNote && (
        <div style={{
          padding: '.875rem 1rem', marginBottom: '1.25rem',
          background: '#FFFBEB', border: '1px solid #F0C060', borderRadius: 'var(--r)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#92400E', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 5 }}>
            {lang === 'ar' ? 'ملاحظة السنة الأولى' : lang === 'zh' ? '第一年提示' : lang === 'ko' ? '첫 해 메모' : lang === 'id' ? 'Catatan Tahun Pertama' : lang === 'ja' ? '1年目のメモ' : 'First year note'}
          </div>
          <div style={{ fontSize: 13, color: '#78350F', lineHeight: 1.7 }}>{b.firstYearNote}</div>
        </div>
      )}

      {/* What to ask */}
      {b.whatToAsk && b.whatToAsk.length > 0 && (
        <div style={{ padding: '.875rem 1rem', background: '#FFFBEB', border: '1px solid #F0C060', borderRadius: 'var(--r)' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#92400E', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 8 }}>
            {lang === 'ar' ? 'ما تسأل عنه في لقائك القادم' : lang === 'zh' ? '下次面谈时要问的问题' : lang === 'ko' ? '다음 면담에서 물어볼 것' : lang === 'id' ? 'Yang perlu ditanyakan' : lang === 'ja' ? '次の面談で聴くこと' : 'What to ask at your next meeting'}
          </div>
          {b.whatToAsk.map((q, i) => (
            <div key={i} style={{
              fontSize: 12.5, color: '#78350F', lineHeight: 1.65,
              paddingLeft: 10, borderLeft: '2px solid #F0C060',
              marginBottom: i < b.whatToAsk.length - 1 ? 8 : 0,
            }}>{q}</div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── University Walkthrough ────────────────────────────────────────────────────────────────────────────────
function UniversityWalkthrough({ walkthrough, lang }) {
  const [selectedPath, setSelectedPath] = useState(null)
  if (!walkthrough || !walkthrough[lang]) return null
  const w = walkthrough[lang]
  const path = selectedPath ? w.paths.find(p => p.id === selectedPath) : null

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: '.5rem' }}>
        {lang === 'ja' ? '大学進学ルートガイド' : lang === 'id' ? 'Panduan Masuk Universitas' : 'University Application Walkthrough'}
      </div>
      <p style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
        {w.intro}
      </p>

      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.75rem' }}>
        {lang === 'ja' ? '進路を選んでください' : lang === 'id' ? 'Pilih jalur Anda' : 'Choose your target path'}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '1.5rem' }}>
        {w.paths.map(p => {
          const isSelected = selectedPath === p.id
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPath(isSelected ? null : p.id)}
              style={{
                textAlign: 'left', padding: '.875rem 1rem',
                borderRadius: 'var(--r)', cursor: 'pointer',
                border: isSelected ? '2px solid var(--teal)' : '1px solid var(--border)',
                background: isSelected ? 'var(--teal-faint, #E1F5EE)' : 'var(--surface-2)',
                transition: 'border .15s, background .15s',
                display: 'flex', alignItems: 'center', gap: '.75rem',
              }}
            >
              <span style={{ fontSize: 20 }}>{p.flag}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: isSelected ? 'var(--teal)' : 'var(--ink)', lineHeight: 1.3 }}>
                  {p.label}
                </div>
                {p.warning && (
                  <div style={{ fontSize: 11.5, color: '#C0392B', marginTop: 3 }}>⚠ {p.warning}</div>
                )}
              </div>
              <span style={{ fontSize: 12, color: isSelected ? 'var(--teal)' : 'var(--ink-4)', flexShrink: 0 }}>
                {isSelected ? '▲' : '▼'}
              </span>
            </button>
          )
        })}
      </div>

      {path && (
        <div style={{ border: '1px solid var(--teal)44', borderRadius: 'var(--r)', overflow: 'hidden' }}>
          <div style={{ padding: '.875rem 1.2rem', background: 'var(--teal-faint, #E1F5EE)', borderBottom: '1px solid var(--teal)33', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ fontSize: 18 }}>{path.flag}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--teal)' }}>{path.label}</span>
          </div>
          <div style={{ padding: '1rem 1.2rem' }}>
            {path.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: i < path.steps.length - 1 ? '1.25rem' : 0 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'var(--teal)', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2,
                }}>{step.n}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{step.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.7 }}>{step.detail}</div>
                </div>
              </div>
            ))}
            {path.honest && (
              <div style={{
                marginTop: '1.25rem', padding: '.875rem 1rem',
                background: '#FEF3F2', border: '1px solid #C0392B44', borderRadius: 'var(--r)',
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#C0392B', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: 5 }}>
                  {lang === 'ja' ? '正直なところ' : lang === 'id' ? 'Catatan jujur' : 'Honest note'}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.7 }}>{path.honest}</div>
              </div>
            )}
          </div>
        </div>
      )}
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
  const visibleSections = SECTIONS.filter(s => s.id !== 'pyp' || !!activity.pypCards || !!activity.pypBridge)
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
        {lang === 'ar' ? `← التالي: ${nextSection.ar || nextSection.en}` : lang === 'zh' ? `下一节：${nextSection.zh || nextSection.en}` : lang === 'ko' ? `다음: ${nextSection.ko}` : `Next: ${nextSection.en}`} →
      </button>
    </div>
  ) : null

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ maxWidth: 680, margin: '0 auto', padding: '1.5rem 1.25rem 4rem' }}>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
            {lang === 'ar' ? 'دليل الوالدين · IB' : lang === 'zh' ? '家长指南 · IB' : lang === 'ko' ? '학부모 안내 · IB' : 'Parent Guide · IB'}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.25, margin: 0 }}>
            {m.title}
          </h1>
          <p style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 8, lineHeight: 1.6 }}>
            {m.subtitle}
          </p>
        </div>
        {(!activity.languages || activity.languages.length > 1) && (
          <LangToggle lang={lang} setLang={setLang} languages={activity.languages} />
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
            {lang === 'ar' ? 'تغيير المرحلة' : lang === 'zh' ? '更换阶段' : lang === 'ko' ? '단계 변경' : 'change stage'}
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
                {lang === 'ar' ? 'ما يبقى كما هو' : lang === 'zh' ? '不变的是什么' : lang === 'ko' ? '변하지 않는 것' : 'What stays the same'}
              </div>
              <div style={{ fontSize: 13, color: '#1D4030', lineHeight: 1.65 }}>
                {m.reassurance}
              </div>
            </div>
          )}

          {(m.koreanUniversityNote || m.indianUniversityNote || m.chineseUniversityNote || m.visionNote) && (() => {
            const uniNote = m.koreanUniversityNote || m.indianUniversityNote || m.chineseUniversityNote || m.visionNote
            const uniLabel = m.koreanUniversityNote
              ? (lang === 'zh' ? '韩国大学入学' : lang === 'ko' ? '한국 대학교 입시' : 'Korean university admission')
              : m.indianUniversityNote
              ? 'Indian universities & pathways'
              : m.visionNote
              ? (lang === 'ar' ? 'رؤية 2030 والجامعات السعودية' : 'Vision 2030 & Saudi universities')
              : 'Chinese universities & pathways'
            return (
              <div style={{
                marginBottom: '1.75rem', padding: '.875rem 1rem',
                background: 'var(--surface-2)', borderRadius: 'var(--r)',
                border: '1px solid var(--border)', borderLeft: '3px solid var(--teal)',
              }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 5 }}>
                  {uniLabel}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>
                  {uniNote}
                </div>
              </div>
            )
          })()}

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
                {lang === 'ar'
                  ? `← انتقل إلى ${SECTIONS.find(s => s.id === recommended)?.ar || SECTIONS.find(s => s.id === recommended)?.en}`
                  : lang === 'zh'
                  ? `前往 ${SECTIONS.find(s => s.id === recommended)?.zh || SECTIONS.find(s => s.id === recommended)?.en} →`
                  : lang === 'ko' ? `${SECTIONS.find(s => s.id === recommended)?.ko}로 이동 →`
                  : `Go to ${SECTIONS.find(s => s.id === recommended)?.en} →`}
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
                {lang === 'ar' ? 'مسرد مختصرات IB' : lang === 'zh' ? 'IB缩略语词汇表' : lang === 'ko' ? 'IB 약어 용어집' : 'IB Acronym Glossary'}
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
              {lang === 'zh'
                ? '本指南专为在IB学校就读的国际家庭而写。如有不准确或遗漏之处，您的学校可向模块作者提供反馈。'
              : lang === 'ko' ? '이 안내서는 IB 학교를 경험하는 국제 가정을 위해 작성되었습니다. 부정확하거나 누락된 내용이 있으면 학교를 통해 모듈 작성자에게 피드백을 전달할 수 있습니다.'
              : lang === 'ar' ? 'كُتب هذا الدليل للعائلات الدولية التي تتعامل مع مدارس IB. إذا بدا شيء غير دقيق أو مفقود، يمكن لمدرستك مشاركة التعليقات مع مؤلف الوحدة.'
              : 'This guide was written for international families navigating IB schools. If something feels inaccurate or is missing, your school can share feedback with the module author.'}
            </div>
          </div>
        </div>
      )}

      {/* ── CORE CONCEPTS ───────────────────────────────────────────────────────────────── */}
      {activeSection === 'concepts' && (
        <div>
          {activity.openingHook && <HookSection hook={activity.openingHook} lang={lang} />}
          {(activity.cards || []).map((card, i) => (
            <ConceptCard
              key={card.id || i}
              card={card}
              lang={lang}
              index={i}
              activeStage={activeStage}
              whatToAskNote={null}
            />
          ))}
          <SectionFooter />
        </div>
      )}

      {/* ── GRADE SYSTEM ─────────────────────────────────────────────────────────────────── */}
      {activeSection === 'grades' && (
        <div>
          {activity.gradingSystem && (
            <GradingSection gradingSystem={activity.gradingSystem} lang={lang} />
          )}
          {activity.universityWalkthrough && (
            <UniversityWalkthrough walkthrough={activity.universityWalkthrough} lang={lang} />
          )}
          <SectionFooter />
        </div>
      )}

      {/* ── PYP BRIDGE ────────────────────────────────────────────────────────────────────── */}
      {activeSection === 'pyp' && (
        <div>
          {activity.pypBridge && (
            <PypBridgeSection pypBridge={activity.pypBridge} lang={lang} />
          )}
          {(activity.pypCards || []).map((card, i) => (
            <ConceptCard
              key={card.id || i}
              card={card}
              lang={lang}
              index={i}
              activeStage={activeStage}
              whatToAskNote={null}
            />
          ))}
          <SectionFooter />
        </div>
      )}

      {/* ── REAL SITUATIONS ─────────────────────────────────────────────────────────────── */}
      {activeSection === 'scenarios' && (
        <div>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            {lang === 'ar'
              ? 'مواقف حقيقية يواجهها أولياء أمور الطلاب في المدارس الدولية'
              : lang === 'zh' ? '国际学校家长真实遇到的情境——了解与不了解时的不同处理方式。'
              : lang === 'ko' ? '국제 학교 학부모들이 실제로 겪는 상황 — 이해한 경우와 이해하지 못한 경우의 대응 방식'
              : lang === 'ja' ? '実際に起きた状況とその対応のちがい'
              : lang === 'id' ? 'Situasi nyata yang dihadapi orang tua di sekolah internasional'
              : 'Real situations that parents at international schools encounter — and how they play out with and without understanding.'}
          </p>
          {(activity.scenarios || []).map((scenario, i) => (
            <ReviewScenario
              key={scenario.id || i}
              scenario={scenario}
              lang={lang}
              index={i}
            />
          ))}
          <SectionFooter />
        </div>
      )}

      {/* ── NEXT STEPS ───────────────────────────────────────────────────────────────────── */}
      {activeSection === 'next' && (
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '1.25rem' }}>
              {lang === 'ar' ? 'خطواتك التالية' : lang === 'zh' ? '您的下一步行动' : lang === 'ko' ? '다음 단계' : lang === 'ja' ? '次のステップ' : lang === 'id' ? 'Langkah Anda selanjutnya' : 'Your next steps'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.875rem' }}>
              {nextStepsItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '.875rem', alignItems: 'flex-start',
                  padding: '.875rem 1rem', borderRadius: 'var(--r)',
                  background: 'var(--surface-2)', border: '1px solid var(--border)',
                }}>
                  <div style={{
                    width: 24, height: 24, borderRadius: '50%',
                    background: 'var(--teal)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1,
                  }}>{i + 1}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.75 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>

          {!done ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <button
                onClick={markDone}
                style={{
                  fontSize: 13.5, fontWeight: 600, color: 'white',
                  background: 'var(--teal)', border: 'none',
                  borderRadius: 24, padding: '10px 28px', cursor: 'pointer',
                }}
              >
                {lang === 'ar' ? '✓ أكملت هذا الدليل' : lang === 'zh' ? '✓ 已完成本指南' : lang === 'ko' ? '✓ 이 안내서 완료' : lang === 'ja' ? '✓ このガイドを完了' : lang === 'id' ? '✓ Panduan selesai' : '✓ Mark this guide complete'}
              </button>
            </div>
          ) : (
            <div style={{
              textAlign: 'center', padding: '1.25rem',
              background: '#E1F5EE', borderRadius: 'var(--r)',
              border: '1px solid #1D9E7533',
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1D9E75' }}>
                {lang === 'ar' ? '✓ أكملت هذا الدليل' : lang === 'zh' ? '✓ 已完成本指南' : lang === 'ko' ? '✓ 이 안내서를 완료했습니다' : '✓ Guide complete'}
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>
                {lang === 'ar' ? 'يمكنك العودة في أي وقت.' : lang === 'zh' ? '您可以随时回顾。' : lang === 'ko' ? '언제든지 다시 돌아올 수 있습니다.' : 'You can come back any time.'}
              </div>
            </div>
          )}
        </div>
      )}


    </div>
  )
}

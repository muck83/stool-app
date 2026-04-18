import { useNavigate } from 'react-router-dom'

const MODULE_META = {
  'india-ib':             { flag: '🇮🇳', label: 'Understand India',                   lang: 'EN / HI',     desc: 'CBSE, board exams, and percentage culture — what IB looks like from a family inside that world.' },
  'korea-ib':             { flag: '🇰🇷', label: 'Understand Korea',                   lang: 'EN / 한국어', desc: 'Suneung pressure, class rankings, and what a Korean parent expects from a teacher relationship.' },
  'ksa-ib':               { flag: '🇸🇦', label: 'Understand Saudi Arabia',            lang: 'EN / العربية', desc: 'Tawjihiyya, family expectations, and navigating IB in a Gulf context.' },
  'china-ib':             { flag: '🇨🇳', label: 'Understand China',                   lang: 'EN / 中文',   desc: 'Gaokao culture, collective family ambition, and what "no ranking" means to a Chinese parent.' },
  'vietnam-ib':           { flag: '🇻🇳', label: 'Understand Vietnam',                 lang: 'EN / VI',     desc: "THPTQG culture and the Vietnamese parent's relationship with academic achievement." },
  'woodstock-transition': { flag: '🏔️', label: 'Woodstock Curriculum Transition',     lang: 'EN',          desc: 'IGCSE, AP, and WSD — what the transition means for every cohort, and how to talk about it.', isParent: true },
  'indonesia-ib':         { flag: '🇮🇩', label: 'Understand Indonesia',               lang: 'EN / ID',     desc: 'UTBK pressure, face dynamics, and the faith dimension in one of the world\'s most diverse school communities.' },
  'uae-ib':               { flag: '🇦🇪', label: 'Understand UAE',                     lang: 'EN / AR',     desc: 'Wasta, school choice as social capital, and the Emirati family inside a global curriculum.' },
}

export default function ModuleCard({ assignment, completion }) {
  const navigate = useNavigate()
  const meta     = MODULE_META[assignment.module_slug] ?? {
    flag: '🌏', label: assignment.module_slug, lang: 'EN', desc: '',
  }
  const pct     = completion?.progress_pct ?? 0
  const done    = !!completion?.completed_at
  const started = pct > 0

  let statusLabel, statusClass, fillClass, btnLabel, btnBg
  if (done) {
    statusLabel = 'Complete';  statusClass = 'badge-done';    fillClass = 'green'; btnLabel = 'Review';   btnBg = '#43A047'
  } else if (started) {
    statusLabel = 'In progress'; statusClass = 'badge-progress'; fillClass = 'amber'; btnLabel = 'Continue'; btnBg = 'var(--cal-amber)'
  } else {
    statusLabel = 'Assigned';  statusClass = 'badge-assigned'; fillClass = '';      btnLabel = 'Start';    btnBg = 'var(--cal-teal)'
  }

  const dueStr = assignment.due_date
    ? new Date(assignment.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
    : null

  return (
    <div className="card" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 0 }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <span style={{ fontSize: 28 }}>{meta.flag}</span>
        <span className={`badge ${statusClass}`}>{statusLabel}</span>
      </div>

      {/* Name + lang */}
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, color: 'var(--cal-teal)', marginBottom: 2 }}>
        {meta.label}
      </div>
      <div style={{ fontSize: 11, color: 'var(--cal-muted)', marginBottom: 10 }}>
        {meta.isParent ? 'Parent Guide' : 'IB Guide'} · {meta.lang}
      </div>

      {/* Description */}
      <div style={{ fontSize: 12, color: 'var(--cal-ink-soft)', lineHeight: 1.55, marginBottom: 14, flexGrow: 1 }}>
        {meta.desc}
      </div>

      {/* Progress bar */}
      <div className="progress-track" style={{ marginBottom: 8 }}>
        <div className={`progress-fill ${fillClass}`} style={{ width: `${pct}%` }} />
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, co
/* ─────────────────────────────────────────────────────────────
   Calibrate — Mock data for UI development
   Swap these out for real Supabase calls when ready.
   ───────────────────────────────────────────────────────────── */

export const MOCK_SCHOOL = {
  id:     'school-nlis',
  name:   'NLIS Riyadh',
  domain: 'nlis.edu.sa',
}

export const MODULE_META = {
  'ksa-ib':              { slug: 'ksa-ib',              dbId: 'ksa-001',       flag: '🇸🇦', label: 'Understand Saudi Arabia',          lang: 'EN / AR',    desc: 'Tawjihiyya, family expectations, and navigating IB in a Gulf context.', preamble_md: 'This module explores the cultural dynamics that shape how families from Saudi Arabia engage with international schools. Before you begin the dimensions below, understand that every interaction you\'ll study here is rooted in a specific educational system your students\' parents grew up in.' },
  'india-ib':            { slug: 'india-ib',            dbId: 'india-001',     flag: '🇮🇳', label: 'Understand India',                 lang: 'EN / HI',   desc: 'CBSE, board exams, and percentage culture — what IB looks like from that world.', preamble_md: 'This module explores the cultural dynamics that shape how families from India engage with international schools. Before you begin the dimensions below, understand that every interaction you\'ll study here is rooted in a specific educational system your students\' parents grew up in.' },
  'korea-ib':            { slug: 'korea-ib',            dbId: 'korea-001',     flag: '🇰🇷', label: 'Understand Korea',                 lang: 'EN / 한국어', desc: 'Suneung pressure, class rankings, and the Korean parent\'s relationship with teacher authority.', preamble_md: 'This module explores the cultural dynamics that shape how families from Korea engage with international schools. Before you begin the dimensions below, understand that every interaction you\'ll study here is rooted in a specific educational system your students\' parents grew up in.' },
  'china-ib':            { slug: 'china-ib',            dbId: 'china-001',     flag: '🇨🇳', label: 'Understand China',                 lang: 'EN / 中文',  desc: 'Gaokao culture and what "no ranking" means to a Chinese parent.', preamble_md: 'This module explores the cultural dynamics that shape how families from China engage with international schools. Before you begin the dimensions below, understand that every interaction you\'ll study here is rooted in a specific educational system your students\' parents grew up in.' },
  'vietnam-ib':          { slug: 'vietnam-ib',          dbId: 'vietnam-001',   flag: '🇻🇳', label: 'Understand Vietnam',               lang: 'EN / VI',    desc: 'Filial piety, academic honour, and teaching in a system mid-reform.', preamble_md: 'Vietnamese families invest in international schools as a different route to the outcomes the national system promises — but not always with a clear picture of what that route looks like from inside.' },
  'woodstock-transition': { slug: 'woodstock-transition', dbId: 'woodstock-001', flag: '🏔️', label: 'Woodstock Curriculum Transition', lang: 'EN',         desc: 'IGCSE, AP, and WSD — what the transition means for every cohort, and how to talk about it.', preamble_md: 'This module explores the cultural dynamics that shape how families at Woodstock engage with the curriculum transition. Before you begin the dimensions below, understand that every interaction you\'ll study here is rooted in a specific educational system your students\' parents grew up in.' },
}

export const MOCK_ASSIGNMENTS = [
  { id: 'a1', school_id: 'school-nlis', module_slug: 'ksa-ib',   role_target: 'all',     due_date: '2026-05-01', assigned_at: '2026-03-15' },
  { id: 'a2', school_id: 'school-nlis', module_slug: 'india-ib', role_target: 'teacher', due_date: '2026-06-30', assigned_at: '2026-04-13' }, // recent — triggers banner
  { id: 'a3', school_id: 'school-nlis', module_slug: 'korea-ib', role_target: 'teacher', due_date: '2026-05-15', assigned_at: '2026-03-20' },
]

// ── Mock quiz analytics ────────────────────────────────────────────────────
// Per-question stats for the admin Analytics view.
// In production these come from quiz_responses table aggregations.
// n = teachers who answered; correct = how many got it right.
export const MOCK_ADMIN_ACTION_ITEMS = [
  {
    id: 'mock-action-invite-failed',
    school_id: 'school-nlis',
    user_id: null,
    module_slug: null,
    action_type: 'invite_failed',
    severity: 'high',
    status: 'open',
    title: 'Invite failed for parent.one@gmail.com',
    detail: 'The email bounced during the batch import. Check the address and resend the invitation.',
    due_date: null,
    metadata: { email: 'parent.one@gmail.com', role: 'parent' },
    created_at: '2026-04-16T12:00:00Z',
  },
  {
    id: 'mock-action-no-progress',
    school_id: 'school-nlis',
    user_id: 'u4',
    module_slug: 'ksa-ib',
    action_type: 'no_progress',
    severity: 'medium',
    status: 'open',
    title: 'Tom Walsh has not started Saudi Arabia module',
    detail: 'The assignment is more than 7 days old with no recorded progress.',
    due_date: '2026-05-01',
    metadata: { email: 'twalsh@nlis.edu.sa' },
    user: { full_name: 'Tom Walsh', email: 'twalsh@nlis.edu.sa' },
    created_at: '2026-04-16T12:00:00Z',
  },
  {
    id: 'mock-action-stalled',
    school_id: 'school-nlis',
    user_id: 'u5',
    module_slug: 'india-ib',
    action_type: 'stalled',
    severity: 'medium',
    status: 'open',
    title: 'Anna Kowalski is stalled at 30%',
    detail: 'No progress update has been recorded in 14 days for the India module.',
    due_date: '2026-06-30',
    metadata: { progress_pct: 30, email: 'akowalski@nlis.edu.sa' },
    user: { full_name: 'Anna Kowalski', email: 'akowalski@nlis.edu.sa' },
    created_at: '2026-04-16T12:00:00Z',
  },
  {
    id: 'mock-action-overdue',
    school_id: 'school-nlis',
    user_id: 'u10',
    module_slug: 'ksa-ib',
    action_type: 'overdue',
    severity: 'high',
    status: 'open',
    title: 'Li Wei is overdue for Saudi Arabia module',
    detail: 'The due date has passed and the module is not complete.',
    due_date: '2026-04-01',
    metadata: { progress_pct: 55, email: 'liwei@nlis.edu.sa' },
    user: { full_name: 'Li Wei', email: 'liwei@nlis.edu.sa' },
    created_at: '2026-04-16T12:00:00Z',
  },
  {
    id: 'mock-action-quiz-weak',
    school_id: 'school-nlis',
    user_id: null,
    module_slug: 'china-ib',
    action_type: 'quiz_weak',
    severity: 'low',
    status: 'open',
    title: 'Quiz weak spot: China module',
    detail: '44% correct across 9 responses. Teachers are over-reading parent workbook help as interference.',
    due_date: null,
    metadata: { question_id: 'china-d2-q1', correct: 4, total: 9 },
    created_at: '2026-04-16T12:00:00Z',
  },
]

export const MOCK_QUIZ_ANALYTICS = {
  'india-ib': [
    { id: 'india-d4-q1', label: 'D4 · Checkpoint', prompt: '"Indian values" language can sound inclusive while actually centering a selective, classed version of belonging — what does the research say?', n: 12, correct: 5,  topWrong: 'C — "Parents treat this as branding and focus on academics"' },
    { id: 'india-d3-q1', label: 'D3 · Checkpoint', prompt: 'Which PTM outcome is most likely to produce frustration later, even if the meeting felt warm in the moment?', n: 12, correct: 7,  topWrong: 'A — "The teacher is respectful but somewhat formal"' },
    { id: 'india-final-q2', label: 'Final · Q2',   prompt: 'Best interpretation when a parent asks whether "Indian Values Week" includes regional and family differences?', n: 10, correct: 5,  topWrong: 'C — "The parent probably just wants more event details"' },
    { id: 'india-d5-q1', label: 'D5 · Checkpoint', prompt: 'A high-performing student avoids visible trial-and-error. What is the strongest first interpretation?', n: 12, correct: 8,  topWrong: 'A — "The family is clearly pressuring the student too much"' },
    { id: 'india-d2-q1', label: 'D2 · Checkpoint', prompt: 'Why do marks remain powerful even in schools that sincerely promote inquiry and narrative feedback?', n: 12, correct: 9,  topWrong: 'C — "Narrative feedback cannot carry useful academic information"' },
    { id: 'india-d6-q1', label: 'D6 · Checkpoint', prompt: 'In this module, what is the most useful way to understand parent WhatsApp groups?', n: 11, correct: 8,  topWrong: 'A — "Mostly gossip channels that schools should avoid dignifying"' },
    { id: 'india-d1-q1', label: 'D1 · Checkpoint', prompt: 'After a polished exhibition, a parent asks "But where does my child actually stand?" — strongest first interpretation?', n: 12, correct: 10, topWrong: 'A — "Rejecting holistic education and wanting more traditional approach"' },
    { id: 'india-final-q1', label: 'Final · Q1',   prompt: 'A parent asks for a concrete scorecard after a project exhibition — most research-aligned response?', n: 10, correct: 7,  topWrong: 'A — "Explain that marks are outdated and should not matter anymore"' },
    { id: 'india-final-q3', label: 'Final · Q3',   prompt: 'A few parents want a WhatsApp group for clarifications — best guiding principle?', n: 10, correct: 8,  topWrong: 'B — "Refuse because parent groups are inherently toxic"' },
  ],
  'ksa-ib': [
    { id: 'ksa-d1-q1',    label: 'D1 · Checkpoint', prompt: 'A parent asks what a "student voice" activity will actually teach children to do — strongest first interpretation?', n: 32, correct: 25, topWrong: null },
    { id: 'ksa-d2-q1',    label: 'D2 · Checkpoint', prompt: 'Why do routine parent questions sometimes feel larger than they first appear?', n: 30, correct: 19, topWrong: 'A — "Families are mostly asking for faster updates and tighter logistics"' },
    { id: 'ksa-d3-q1',    label: 'D3 · Checkpoint', prompt: 'Why can an English-first routine become more than a language policy in this setting?', n: 28, correct: 14, topWrong: 'C — "Families in this context usually oppose strong English instruction"' },
    { id: 'ksa-d4-q1',    label: 'D4 · Checkpoint', prompt: 'A family chose an international school but still expects Islamic Studies to anchor the week — what does the selection-paradox research say?', n: 27, correct: 13, topWrong: 'B — "They are confused about what an international school offers"' },
    { id: 'ksa-d5-q1',    label: 'D5 · Checkpoint', prompt: 'A student is respectful but unusually quiet during a mixed-gender group task — strongest first interpretation?', n: 26, correct: 20, topWrong: null },
    { id: 'ksa-d6-q1',    label: 'D6 · Checkpoint', prompt: 'Across the scenario bank, what is the most important teacher move when a parent frames feedback in religious terms?', n: 25, correct: 16, topWrong: 'A — "Redirect immediately to secular learning objectives"' },
    { id: 'ksa-final-q1', label: 'Final · Q1',      prompt: 'A parent asks whether a "student voice" activity teaches children to challenge adults — best first move?', n: 22, correct: 17, topWrong: null },
    { id: 'ksa-final-q2', label: 'Final · Q2',      prompt: 'A child begins treating English as the language of status — strongest explanation?', n: 21, correct: 16, topWrong: null },
    { id: 'ksa-final-q3', label: 'Final · Q3',      prompt: 'What does the Saudi school-choice research suggest about many families in this sector?', n: 20, correct: 13, topWrong: 'B — "They are trading away local continuity for future opportunity"' },
  ],
  'korea-ib': [
    { id: 'korea-d1-q1',    label: 'D1 · Checkpoint', prompt: 'A parent says the Suneung is the only exam that matters and asks why IB does not prepare for it — strongest first interpretation?', n: 34, correct: 22, topWrong: 'C — "The parent is rejecting IB philosophy outright"' },
    { id: 'korea-d2-q1',    label: 'D2 · Checkpoint', prompt: 'A parent expects the homeroom teacher to coordinate all subjects and know the child\'s full schedule — best explanation?', n: 31, correct: 24, topWrong: null },
    { id: 'korea-d3-q1',    label: 'D3 · Checkpoint', prompt: 'A parent coalition pushes back when a test week is replaced by a project week — most research-backed first interpretation?', n: 29, correct: 15, topWrong: 'A — "They are mainly uncomfortable with innovation"' },
    { id: 'korea-d4-q1',    label: 'D4 · Checkpoint', prompt: 'A teacher discovers most students attend hagwon until 10 pm and are fatigued in morning lessons — strongest first interpretation?', n: 27, correct: 14, topWrong: 'B — "Parents are undermining the school by over-scheduling"' },
    { id: 'korea-d5-q1',    label: 'D5 · Checkpoint', prompt: 'A student consistently waits until she is sure an answer is correct before speaking — strongest interpretation?', n: 26, correct: 20, topWrong: null },
    { id: 'korea-d6-q1',    label: 'D6 · Checkpoint', prompt: 'Across the scenario bank, what is the most important teacher move when a parent frames concerns through ranking language?', n: 24, correct: 15, topWrong: 'A — "Explain that rankings are educationally harmful and should be abandoned"' },
    { id: 'korea-final-q1', label: 'Final · Q1',      prompt: 'A parent asks why the school does not publish class rankings — best first move?', n: 21, correct: 16, topWrong: null },
    { id: 'korea-final-q2', label: 'Final · Q2',      prompt: 'A student performs well but shows visible distress before every assessment — strongest explanation from the module?', n: 20, correct: 12, topWrong: 'C — "The student simply has test anxiety unrelated to cultural context"' },
    { id: 'korea-final-q3', label: 'Final · Q3',      prompt: 'What principle best captures this module\'s approach to parent communication?', n: 19, correct: 15, topWrong: null },
  ],
  'china-ib': [
    { id: 'china-d1-q1',    label: 'D1 · Checkpoint', prompt: 'During curriculum night a parent asks where the fluency drills are — strongest first interpretation?', n: 35, correct: 23, topWrong: 'A — "She is rejecting deep understanding"' },
    { id: 'china-d2-q1',    label: 'D2 · Checkpoint', prompt: 'A parent offers a workbook matched to your unit overview — what is the best default reading?', n: 33, correct: 17, topWrong: 'A — "The parent is overstepping professional boundaries"' },
    { id: 'china-d3-q1',    label: 'D3 · Checkpoint', prompt: 'After Double Reduction, why can more practice still feel educationally reasonable to families in this context?', n: 30, correct: 22, topWrong: null },
    { id: 'china-d4-q1',    label: 'D4 · Checkpoint', prompt: 'A student reproduces a model answer almost exactly — what is the most careful first response?', n: 28, correct: 13, topWrong: 'A — "Treat it immediately as plagiarism"' },
    { id: 'china-d5-q1',    label: 'D5 · Checkpoint', prompt: 'A quiet student listens carefully and rarely volunteers — strongest first interpretation?', n: 27, correct: 21, topWrong: null },
    { id: 'china-d6-q1',    label: 'D6 · Checkpoint', prompt: 'Across the China scenario bank, what is the most important teacher move?', n: 25, correct: 15, topWrong: 'A — "Convince parents that Western inquiry is more advanced"' },
    { id: 'china-final-q1', label: 'Final · Q1',      prompt: 'A parent asks publicly in WeChat why your class gives less homework — best first move?', n: 22, correct: 14, topWrong: 'C — "Ignore it so you do not reward public criticism"' },
    { id: 'china-final-q2', label: 'Final · Q2',      prompt: 'Which statement best captures the parallel-tracks problem described in this module?', n: 21, correct: 12, topWrong: 'A — "Parents and teachers simply want different outcomes"' },
    { id: 'china-final-q3', label: 'Final · Q3',      prompt: 'A student is quiet but attentive and the parent says this is respectful listening — what should the teacher do?', n: 20, correct: 16, topWrong: null },
  ],
}

// Completions: pct >= 80 is treated as "complete" (same rule as stool-app PD layer)
export const MOCK_USERS = [
  {
    id: 'u1', full_name: 'Sarah Chen',      email: 'schen@nlis.edu.sa',      role: 'teacher',
    completions: { 'ksa-ib': 100, 'india-ib': 65,  'korea-ib': 0   },
  },
  {
    id: 'u2', full_name: 'James Hartley',   email: 'jhartley@nlis.edu.sa',   role: 'teacher',
    completions: { 'ksa-ib': 100, 'india-ib': 100, 'korea-ib': 40  },
  },
  {
    id: 'u3', full_name: 'Priya Nair',      email: 'pnair@nlis.edu.sa',      role: 'teacher',
    completions: { 'ksa-ib': 100, 'india-ib': 100, 'korea-ib': 100 },
  },
  {
    id: 'u4', full_name: 'Tom Walsh',       email: 'twalsh@nlis.edu.sa',     role: 'teacher',
    completions: { 'ksa-ib': 0,   'india-ib': 0,   'korea-ib': 0   },
  },
  {
    id: 'u5', full_name: 'Anna Kowalski',   email: 'akowalski@nlis.edu.sa',  role: 'teacher',
    completions: { 'ksa-ib': 100, 'india-ib': 30,  'korea-ib': 15  },
  },
  {
    id: 'u6', full_name: 'Dmitri Volkov',   email: 'dvolkov@nlis.edu.sa',    role: 'teacher',
    completions: { 'ksa-ib': 100, 'india-ib': 100, 'korea-ib': 80  },
  },
  {
    id: 'u7', full_name: 'Yuki Tanaka',     email: 'ytanaka@nlis.edu.sa',    role: 'teacher',
    completions: { 'ksa-ib': 85,  'india-ib': 0,   'korea-ib': 0   },
  },
  {
    id: 'u8', full_name: 'Clare O\'Brien',  email: 'cobrien@nlis.edu.sa',    role: 'teacher',
    completions: { 'ksa-ib': 100, 'india-ib': 80,  'korea-ib': 55  },
  },
  {
    id: 'u9',  full_name: 'Fatima Al-Rashid', email: 'falrashid@nlis.edu.sa', role: 'parent',
    completions: { 'ksa-ib': 100, 'india-ib': 0   },
  },
  {
    id: 'u10', full_name: 'Li Wei',           email: 'liwei@nlis.edu.sa',     role: 'parent',
    completions: { 'ksa-ib': 55,  'india-ib': 0   },
  },
  {
    id: 'u11', full_name: 'Min-jun Park',     email: 'mjpark@nlis.edu.sa',    role: 'parent',
    completions: { 'ksa-ib': 100, 'india-ib': 20  },
  },
  {
    id: 'u12', full_name: 'Raj Sharma',       email: 'rsharma@nlis.edu.sa',   role: 'parent',
    completions: { 'ksa-ib': 0,   'india-ib': 0   },
  },
  {
    id: 'u13', full_name: 'Elena Popescu',    email: 'epopescu@nlis.edu.sa',  role: 'parent',
    completions: { 'ksa-ib': 90,  'india-ib': 40  },
  },
  {
    id: 'u14', full_name: 'Ahmed Al-Farsi',   email: 'aalfarsi@nlis.edu.sa',  role: 'parent',
    completions: { 'ksa-ib': 100, 'india-ib': 0   },
  },
]

// Derive per-slug modules that are active (from assignments)
export function getActiveModuleSlugs(roleFilter = 'all') {
  const relevant = MOCK_ASSIGNMENTS.filter(a =>
    roleFilter === 'all' ||
    a.role_target === roleFilter ||
    a.role_target === 'all'
  )
  return [...new Set(relevant.map(a => a.module_slug))]
}

// Derive summary stats
export function getSchoolStats() {
  const teachers    = MOCK_USERS.filter(u => u.role === 'teacher')
  const parents     = MOCK_USERS.filter(u => u.role === 'parent')
  const allSlugs    = [...new Set(MOCK_ASSIGNMENTS.map(a => a.module_slug))]

  let totalCells = 0, doneCells = 0
  MOCK_USERS.forEach(u => {
    const relevant = MOCK_ASSIGNMENTS.filter(a =>
      a.role_target === 'all' || a.role_target === u.role
    )
    relevant.forEach(a => {
      totalCells++

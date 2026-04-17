import { createClient } from '@supabase/supabase-js'

// Add your Supabase project URL and anon key to a .env file:
//   VITE_SUPABASE_URL=https://xxxx.supabase.co
//   VITE_SUPABASE_ANON_KEY=your-anon-key

const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL
const supabaseKey  = import.meta.env.VITE_SUPABASE_ANON_KEY
const MOCK_MODE = !supabaseUrl

export const supabase = createClient(supabaseUrl, supabaseKey)
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

const MOCK_PD_MODULES = {
  'india-001': {
    id: 'india-001',
    country_code: 'IN',
    title: 'India',
    tagline: 'CBSE, board exams, percentage culture, and what IB looks like from that world.',
    preamble_md: 'This module starts from a simple premise: parent questions about marks, rank, and proof of progress are often trust-seeking moves, not resistance to inquiry. Read each dimension as a lens for interpreting concern before choosing a response.',
    status: 'live',
  },
  'ksa-001': {
    id: 'ksa-001',
    country_code: 'SA',
    title: 'Saudi Arabia',
    tagline: 'Tawjihiyya, family expectations, and navigating IB in a Gulf context.',
    preamble_md: 'Use this guide to separate surface objections from deeper concerns about language, family authority, religious continuity, and future opportunity. The goal is not to stereotype families, but to slow down the first interpretation.',
    status: 'live',
  },
  'korea-001': {
    id: 'korea-001',
    country_code: 'KR',
    title: 'South Korea',
    tagline: 'Suneung pressure, class rankings, and the Korean parent relationship with teacher authority.',
    preamble_md: 'Before reading the dimensions, hold two ideas together: Korean families may value international learning and still expect precision, effort, ranking literacy, and teacher responsibility. Those expectations can coexist.',
    status: 'live',
  },
  'china-001': {
    id: 'china-001',
    country_code: 'CN',
    title: 'China',
    tagline: 'Gaokao culture and what no ranking means to a Chinese parent.',
    preamble_md: 'This module frames practice, fluency, parental help, and quiet participation as culturally meaningful signals. Notice where a teacher might misread care as interference or silence as disengagement.',
    status: 'live',
  },
}

function mockDimensionsForModuleView(moduleId) {
  const module = MOCK_PD_MODULES[moduleId] ?? { title: 'Mock module' }
  return Array.from({ length: 6 }, (_, idx) => ({
    id: `mock-${moduleId}-dimension-${idx + 1}`,
    module_id: moduleId,
    dimension_number: idx + 1,
    title: `${module.title} lens ${idx + 1}`,
    research_status: idx < 4 ? 'fully_sourced' : idx === 4 ? 'partial' : 'community',
    content: {
      summary: `A mock dimension summary for ${module.title}. This keeps the learner view visible in MOCK_MODE while Supabase content is unavailable.`,
      sections: [
        {
          heading: 'Teacher move',
          items: [
            'Pause before interpreting parent concern as resistance.',
            'Name the educational purpose in language the family can trust.',
          ],
        },
      ],
    },
  }))
}

function mockQuizQuestionsForModule(moduleId) {
  return mockDimensionsForModuleView(moduleId).map(dim => ({
    id: `${moduleId}-mock-d${dim.dimension_number}-q1`,
    module_id: moduleId,
    quiz_type: 'checkpoint',
    sort_order: dim.dimension_number,
    dimension_number: dim.dimension_number,
    prompt: `What is the strongest first move for ${dim.title}?`,
    options: [
      { id: 'a', text: 'Assume the family rejects international education.', isCorrect: false, feedback: 'That is too reductive.' },
      { id: 'b', text: 'Ask what concern or prior expectation sits underneath the question.', isCorrect: true, feedback: 'Correct. Start by interpreting the concern before responding.' },
      { id: 'c', text: 'Explain that IB practice is already globally accepted.', isCorrect: false, feedback: 'That may be true, but it can skip the trust issue.' },
      { id: 'd', text: 'Move the conversation quickly back to policy.', isCorrect: false, feedback: 'Policy may matter later, but it is rarely the best first move.' },
    ],
  }))
}

/* ── Auth helpers ── */

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*, school:schools(id, name, domain)')
    .eq('id', userId)
    .single()
  if (error) throw error
  return data
}

/* ── Assignments ── */

export async function getAssignments(userId, schoolId) {
  const { data, error } = await supabase
    .from('assignments')
    .select('*')
    .or(`user_id.eq.${userId},and(school_id.eq.${schoolId},user_id.is.null)`)
    .order('due_date', { ascending: true, nullsFirst: false })
  if (error) throw error
  return data ?? []
}

/* ── Completions ── */

export async function getCompletions(userId) {
  const { data, error } = await supabase
    .from('module_completions')
    .select('*')
    .eq('user_id', userId)
  if (error) throw error
  return data ?? []
}

export async function upsertCompletion(userId, moduleSlug, progressPct) {
  const isComplete = progressPct >= 80
  const { error } = await supabase
    .from('module_completions')
    .upsert({
      user_id:      userId,
      module_slug:  moduleSlug,
      progress_pct: progressPct,
      completed_at: isComplete ? new Date().toISOString() : null,
      last_updated: new Date().toISOString(),
    }, { onConflict: 'user_id,module_slug' })
  if (error) throw error
}

/* ── Admin: school overview ── */

export async function getSchoolProgress(schoolId) {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      id, full_name, email, role,
      completions:module_completions(module_slug, progress_pct, completed_at)
    `)
    .eq('school_id', schoolId)
    .neq('role', 'admin')
    .order('full_name')
  if (error) throw error
  return data ?? []
}

export async function getSchoolAssignments(schoolId) {
  const { data, error } = await supabase
    .from('assignments')
    .select('*')
    .eq('school_id', schoolId)
    .order('assigned_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

/* ── PD Module content ── */

export async function getModule(dbId) {
  if (MOCK_MODE) return MOCK_PD_MODULES[dbId] ?? {
    id: dbId,
    title: dbId,
    tagline: 'Mock module content',
    preamble_md: 'This mock preamble appears in local development so the framing card can be reviewed without a Supabase connection.',
    status: 'live',
  }

  const { data, error } = await supabase
    .from('pd_modules')
    .select('*')
    .eq('id', dbId)
    .single()
  if (error) throw error
  return data
}

export async function getDimensions(dbId) {
  if (MOCK_MODE) return mockDimensionsForModuleView(dbId)

  const { data, error } = await supabase
    .from('pd_dimensions')
    .select('*')
    .eq('module_id', dbId)
    .order('dimension_number')
  if (error) throw error
  return data ?? []
}

export async function getQuizQuestions(dbId) {
  if (MOCK_MODE) return mockQuizQuestionsForModule(dbId)

  const { data, error } = await supabase
    .from('pd_quiz_questions')
    .select('*')
    .eq('module_id', dbId)
    .order('quiz_type')        // 'checkpoint' before 'final_exam' alphabetically
    .order('sort_order')
  if (error) throw error
  return data ?? []
}

export async function getModuleQuizQuestions(moduleId) {
  if (MOCK_MODE) return []
  const { data, error } = await supabase
    .from('pd_quiz_questions')
    .select('id, prompt, quiz_type, sort_order, dimension_number, options')
    .eq('module_id', moduleId)
    .order('sort_order')
  if (error) throw error
  return data || []
}

export async function getSimulations(dbId) {
  if (MOCK_MODE) return []
  const { data, error } = await supabase
    .from('pd_simulations')
    .select('id, title, description, context, characters, nodes, dimension_tags, estimated_minutes, sort_order, status')
    .eq('module_id', dbId)
    .eq('status', 'live')
    .order('sort_order')
  if (error) throw error
  return data ?? []
}

export async function saveSimulationResponse({ sessionId, simulationId, nodeId, choiceId = null, reflectionText = null }) {
  if (MOCK_MODE) return
  const { error } = await supabase
    .from('pd_simulation_responses')
    .insert({ session_id: sessionId, simulation_id: simulationId, node_id: nodeId, choice_id: choiceId, reflection_text: reflectionText })
  if (error) console.warn('Simulation response save failed (non-blocking):', error)
}

/* ── Quiz responses ── */

export async function upsertQuizResponse({ userId, moduleId, questionId, optionId, isCorrect, quizType, dimensionNumber }) {
  const { error } = await supabase
    .from('quiz_responses')
    .upsert({
      user_id:          userId,
      module_id:        moduleId,
      question_id:      questionId,
      option_id:        optionId,
      is_correct:       isCorrect,
      quiz_type:        quizType,
      dimension_number: dimensionNumber ?? null,
      answered_at:      new Date().toISOString(),
    }, { onConflict: 'user_id,question_id' })
  if (error) throw error
}

/** Returns all quiz_responses for a user across all modules — Progress page uses this. */
export async function getUserQuizResponses(userId) {
  if (MOCK_MODE) return []
  const { data, error } = await supabase
    .from('quiz_responses')
    .select('module_id, question_id, is_correct, quiz_type, dimension_number, answered_at')
    .eq('user_id', userId)
  if (error) throw error
  return data ?? []
}

/** Returns raw quiz_responses rows for a module — caller aggregates. */
export async function getModuleQuizAnalytics(moduleId) {
  const { data, error } = await supabase
    .from('quiz_responses')
    .select('user_id, question_id, option_id, is_correct, quiz_type, dimension_number')
    .eq('module_id', moduleId)
  if (error) throw error
  return data ?? []
}

export async function resetPasswordForEmail(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/login`,
  })
  if (error) throw error
}

export async function createAssignment({ schoolId, userId, roleTarget, moduleSlug, assignedBy, dueDate }) {
  const { error } = await supabase
    .from('assignments')
    .insert({
      school_id:   schoolId,
      user_id:     userId ?? null,
      role_target: roleTarget ?? null,
      module_slug: moduleSlug,
      assigned_by: assignedBy,
      due_date:    dueDate ?? null,
    })
  if (error) throw error
}

/* Admin: invite batches */

export async function createInviteBatch({ schoolId, createdBy, totalRows }) {
  if (MOCK_MODE) {
    return {
      id: `mock-batch-${Date.now()}`,
      school_id: schoolId,
      created_by: createdBy,
      total_rows: totalRows,
      imported: 0,
      failed: 0,
      statu
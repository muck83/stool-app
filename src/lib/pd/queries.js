/**
 * Supabase queries for the PD layer.
 * All functions degrade gracefully when supabase is null.
 */

import { supabase } from '../supabase.js'

/* ─── Read ─── */

export async function fetchModules() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('pd_modules')
    .select('*')
    .eq('status', 'live')
    .order('created_at')
  if (error) { console.error('PD fetchModules:', error); return [] }
  return data || []
}

export async function fetchDimensions(moduleId) {
  if (!supabase || !moduleId) return []
  const { data, error } = await supabase
    .from('pd_dimensions')
    .select('*')
    .eq('module_id', moduleId)
    .order('dimension_number')
  if (error) { console.error('PD fetchDimensions:', error); return [] }
  return data || []
}

export async function fetchScenarios(moduleId) {
  if (!supabase || !moduleId) return []
  const { data, error } = await supabase
    .from('pd_scenarios')
    .select('*')
    .eq('module_id', moduleId)
    .eq('status', 'live')
    .order('created_at')
  if (error) { console.error('PD fetchScenarios:', error); return [] }
  return data || []
}

/* ─── Completions ─── */

export async function fetchCompletions(userId, moduleId) {
  if (!supabase || !userId) return []
  let query = supabase
    .from('pd_completions')
    .select('*')
    .eq('user_id', userId)
  if (moduleId) query = query.eq('module_id', moduleId)
  const { data, error } = await query
  if (error) { console.error('PD fetchCompletions:', error); return [] }
  return data || []
}

export async function markDimensionComplete(userId, moduleId, dimensionId) {
  if (!supabase || !userId) return null
  const { data, error } = await supabase
    .from('pd_completions')
    .upsert(
      { user_id: userId, module_id: moduleId, dimension_id: dimensionId },
      { onConflict: 'user_id,module_id,dimension_id' }
    )
    .select()
    .single()
  if (error) { console.error('PD markComplete:', error); return null }
  return data
}

/* ─── Badges ─── */

export async function fetchBadges(userId) {
  if (!supabase || !userId) return []
  const { data, error } = await supabase
    .from('pd_badges')
    .select('*')
    .eq('user_id', userId)
  if (error) { console.error('PD fetchBadges:', error); return [] }
  return data || []
}

export async function awardBadge(userId, moduleId) {
  if (!supabase || !userId) return null
  const { data, error } = await supabase
    .from('pd_badges')
    .upsert(
      { user_id: userId, module_id: moduleId },
      { onConflict: 'user_id,module_id' }
    )
    .select()
    .single()
  if (error) { console.error('PD awardBadge:', error); return null }
  return data
}

/**
 * Check if user has hit the completion threshold for a module.
 * If so, award the badge. Returns { complete, percentage, badge }.
 */
export async function checkAndUnlockReward(userId, moduleId, threshold = 80) {
  if (!supabase || !userId) return { complete: false, percentage: 0, badge: null }

  const [completions, dimensions] = await Promise.all([
    fetchCompletions(userId, moduleId),
    fetchDimensions(moduleId),
  ])

  const total = dimensions.length
  if (total === 0) return { complete: false, percentage: 0, badge: null }

  const done = completions.filter(c => c.module_id === moduleId).length
  const percentage = Math.round((done / total) * 100)
  const complete = percentage >= threshold

  let badge = null
  if (complete) {
    badge = await awardBadge(userId, moduleId)
  }

  return { complete, percentage, badge }
}

/* ─── Simulations ─── */

export async function fetchSimulations(moduleId) {
  if (!supabase || !moduleId) return []
  const { data, error } = await supabase
    .from('pd_simulations')
    .select('*')
    .eq('module_id', moduleId)
    .eq('status', 'live')
    .order('sort_order')
  if (error) { console.error('PD fetchSimulations:', error); return [] }
  return data || []
}

export async function fetchSimulation(simId) {
  if (!supabase || !simId) return null
  const { data, error } = await supabase
    .from('pd_simulations')
    .select('*')
    .eq('id', simId)
    .eq('status', 'live')
    .single()
  if (error) { console.error('PD fetchSimulation:', error); return null }
  return data || null
}

/* ─── Quiz Questions ─── */

/**
 * Fetch quiz questions for a module.
 * @param {string} moduleId
 * @param {'checkpoint'|'final_exam'|null} quizType — omit to get all
 */
export async function fetchQuizQuestions(moduleId, quizType = null) {
  if (!supabase || !moduleId) return []
  let query = supabase
    .from('pd_quiz_questions')
    .select('*')
    .eq('module_id', moduleId)
    .order('sort_order')
  if (quizType) query = query.eq('quiz_type', quizType)
  const { data, error } = await query
  if (error) { console.error('PD fetchQuizQuestions:', error); return [] }
  return data || []
}

export async function saveSimulationResponse(sessionId, simulationId, nodeId, choiceId, reflectionText) {
  if (!supabase) return
  try {
    await supabase
      .from('pd_simulation_responses')
      .insert({
        session_id: sessionId,
        simulation_id: simulationId,
        node_id: nodeId,
        choice_id: choiceId || null,
        reflection_text: reflectionText || null,
      })
  } catch (e) {
    // Fire and forget — log silently
    console.error('PD saveSimulationResponse failed:', e)
  }
}

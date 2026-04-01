/**
 * src/lib/pd/progress.js
 * localStorage-based progress tracking for the PD learn layer.
 *
 * Storage schema:
 *   pd_completed  — Set of "<moduleId>:<dimensionId>" strings
 *   pd_badges     — Set of moduleId strings
 *
 * No auth required — works for any visitor.
 */

const COMPLETED_KEY = 'pd_completed'
const BADGES_KEY    = 'pd_badges'
const SIM_PROGRESS_KEY = 'pd_sim_progress'
const SIM_COMPLETED_KEY = 'pd_sim_completed'

// ─── low-level helpers ───────────────────────────────────────────────────────

function readSet(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function writeSet(key, set) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]))
  } catch {
    // ignore quota errors silently
  }
}

// ─── dimension completion ────────────────────────────────────────────────────

/**
 * Mark a dimension as completed.
 * @param {string} moduleId   — UUID from pd_modules
 * @param {string} dimensionId — UUID from pd_dimensions
 */
export function markComplete(moduleId, dimensionId) {
  const set = readSet(COMPLETED_KEY)
  set.add(`${moduleId}:${dimensionId}`)
  writeSet(COMPLETED_KEY, set)
}

/**
 * Check if a specific dimension is completed.
 */
export function isCompleted(moduleId, dimensionId) {
  return readSet(COMPLETED_KEY).has(`${moduleId}:${dimensionId}`)
}

/**
 * Return a Set of completed dimensionIds for a given module.
 */
export function completedDimensionIds(moduleId) {
  const set = readSet(COMPLETED_KEY)
  const ids = new Set()
  for (const key of set) {
    const [mid, did] = key.split(':')
    if (mid === moduleId) ids.add(did)
  }
  return ids
}

/**
 * Count how many dimensions in `allDimensions` (array of {id}) are completed.
 */
export function completionCount(moduleId, allDimensions) {
  const done = completedDimensionIds(moduleId)
  return allDimensions.filter(d => done.has(d.id)).length
}

/**
 * Completion percentage (0–100, integer).
 */
export function completionPercent(moduleId, allDimensions) {
  if (!allDimensions || allDimensions.length === 0) return 0
  return Math.round((completionCount(moduleId, allDimensions) / allDimensions.length) * 100)
}

// ─── badge / salary gate ─────────────────────────────────────────────────────

const BADGE_THRESHOLD = 80 // %

/**
 * Award a badge for a module (called internally after threshold check).
 */
export function awardBadge(moduleId) {
  const set = readSet(BADGES_KEY)
  set.add(moduleId)
  writeSet(BADGES_KEY, set)
}

/**
 * Check if user holds a badge for a module.
 */
export function hasBadge(moduleId) {
  return readSet(BADGES_KEY).has(moduleId)
}

/**
 * Return Set of all module IDs for which the user holds a badge.
 */
export function allBadgeModuleIds() {
  return readSet(BADGES_KEY)
}

/**
 * Check completion against threshold; award badge if newly crossed.
 * Returns { percent, badgeAwarded }.
 */
export function checkAndMaybeAwardBadge(moduleId, allDimensions) {
  const percent = completionPercent(moduleId, allDimensions)
  if (percent >= BADGE_THRESHOLD && !hasBadge(moduleId)) {
    awardBadge(moduleId)
    return { percent, badgeAwarded: true }
  }
  return { percent, badgeAwarded: false }
}

// ─── resume CTA helper ───────────────────────────────────────────────────────

/**
 * Find the first incomplete dimension for a module.
 * Returns the dimension object or null if all done (or none started).
 * @param {string} moduleId
 * @param {Array}  allDimensions — sorted by dimension_number
 */
export function nextIncompleteDimension(moduleId, allDimensions) {
  if (!allDimensions || allDimensions.length === 0) return null
  const done = completedDimensionIds(moduleId)
  return allDimensions.find(d => !done.has(d.id)) || null
}

/**
 * Return true if the user has started but not finished a module.
 */
export function isInProgress(moduleId, allDimensions) {
  const count = completionCount(moduleId, allDimensions)
  return count > 0 && count < allDimensions.length
}

// ─── quiz / assessment progress ─────────────────────────────────────────────

const QUIZ_KEY         = 'pd_quiz'
const MODULE_SCORE_KEY = 'pd_module_scores'
const REVISIT_KEY      = 'pd_revisit'

/**
 * Read the full quiz store for one module.
 * Returns { [questionId]: { selectedOptionId, isCorrect, attempts } }
 */
function readModuleQuiz(moduleId) {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    const obj = raw ? JSON.parse(raw) : {}
    return obj[moduleId] || {}
  } catch { return {} }
}

function writeModuleQuiz(moduleId, data) {
  try {
    const raw = localStorage.getItem(QUIZ_KEY)
    const obj = raw ? JSON.parse(raw) : {}
    obj[moduleId] = data
    localStorage.setItem(QUIZ_KEY, JSON.stringify(obj))
  } catch {}
}

/**
 * Save (or update) a quiz answer.
 * Best-score logic: if a prior correct answer exists, keep it.
 * @param {number|null} confidence — 1 (not sure), 2 (somewhat), 3 (very sure). Optional.
 */
export function saveQuizAnswer(moduleId, questionId, selectedOptionId, isCorrect, confidence = null) {
  const quiz = readModuleQuiz(moduleId)
  const existing = quiz[questionId]
  if (existing && existing.isCorrect && !isCorrect) {
    // Keep the prior correct attempt — only bump attempt count
    quiz[questionId] = { ...existing, attempts: (existing.attempts || 1) + 1 }
  } else {
    quiz[questionId] = {
      selectedOptionId,
      isCorrect,
      attempts: existing ? (existing.attempts || 1) + 1 : 1,
      ...(confidence !== null ? { confidence } : {}),
    }
  }
  writeModuleQuiz(moduleId, quiz)

  // Revisit flag: uncertain AND wrong → teacher should review this topic
  if (!isCorrect && confidence !== null && confidence <= 2) {
    _setRevisitFlag(moduleId, questionId)
  }
}

// ─── revisit flags ───────────────────────────────────────────────────────────

function _readRevisit(moduleId) {
  try {
    const raw = localStorage.getItem(REVISIT_KEY)
    const obj = raw ? JSON.parse(raw) : {}
    return new Set(obj[moduleId] || [])
  } catch { return new Set() }
}

function _writeRevisit(moduleId, set) {
  try {
    const raw = localStorage.getItem(REVISIT_KEY)
    const obj = raw ? JSON.parse(raw) : {}
    obj[moduleId] = [...set]
    localStorage.setItem(REVISIT_KEY, JSON.stringify(obj))
  } catch {}
}

function _setRevisitFlag(moduleId, questionId) {
  const set = _readRevisit(moduleId)
  set.add(questionId)
  _writeRevisit(moduleId, set)
}

/**
 * Get the Set of question IDs flagged for review in a module.
 * A flag is set when: confidence ≤ 2 AND the answer was wrong.
 */
export function getRevisitFlags(moduleId) {
  return _readRevisit(moduleId)
}

/**
 * Clear a single revisit flag (e.g., after teacher revisits the dimension
 * and answers the checkpoint correctly with high confidence).
 */
export function clearRevisitFlag(moduleId, questionId) {
  const set = _readRevisit(moduleId)
  set.delete(questionId)
  _writeRevisit(moduleId, set)
}

/**
 * Get a saved answer for one question, or null.
 * Returns { selectedOptionId, isCorrect, attempts } | null
 */
export function getQuizAnswer(moduleId, questionId) {
  const quiz = readModuleQuiz(moduleId)
  return quiz[questionId] || null
}

/**
 * Compute a 0–1 score for a list of question IDs.
 * Only answered questions count (unanswered = 0, included in denominator).
 */
export function getQuizScore(moduleId, questionIds) {
  if (!questionIds || questionIds.length === 0) return 0
  const quiz = readModuleQuiz(moduleId)
  const correct = questionIds.filter(id => quiz[id]?.isCorrect).length
  return correct / questionIds.length
}

/**
 * True when the final exam is unlocked:
 * all dimensions complete (which implies all checkpoints were attempted).
 */
export function isExamUnlocked(moduleId, allDimensions) {
  if (!allDimensions || allDimensions.length === 0) return false
  const done = completedDimensionIds(moduleId)
  return allDimensions.every(d => done.has(d.id))
}

/**
 * True when the final exam has been attempted at least once
 * (all exam question IDs have an answer).
 */
export function isExamAttempted(moduleId, examQuestionIds) {
  if (!examQuestionIds || examQuestionIds.length === 0) return false
  const quiz = readModuleQuiz(moduleId)
  return examQuestionIds.every(id => quiz[id] != null)
}

/**
 * Compute the full module score (Phase 1 formula, no calibration):
 *   module_score = 0.65 × checkpoint_score + 0.35 × final_exam_score
 */
export function getModuleScore(moduleId, checkpointQuestionIds, examQuestionIds) {
  const cs = getQuizScore(moduleId, checkpointQuestionIds)
  const es = getQuizScore(moduleId, examQuestionIds)
  return 0.65 * cs + 0.35 * es
}

/**
 * Return the earned badge tier with Phase 2 dimension floor logic:
 *   'distinction' | 'mastery' | 'completed' | null
 * null = module not yet complete.
 *
 * Dimension floors (applied after score thresholds):
 *   Mastery    — every checkpoint must be eventually correct (isCorrect: true)
 *   Distinction — every checkpoint correct AND answered on the first attempt
 */
export function getModuleBadgeTier(moduleId, checkpointQuestionIds, examQuestionIds, allDimensions) {
  // Must be fully complete first
  if (!isExamUnlocked(moduleId, allDimensions)) return null
  if (!isExamAttempted(moduleId, examQuestionIds)) return null

  const score = getModuleScore(moduleId, checkpointQuestionIds, examQuestionIds)
  let tier = 'completed'
  if (score >= 0.90) tier = 'distinction'
  else if (score >= 0.80) tier = 'mastery'

  // ── Dimension floor checks ───────────────────────────────────────────────
  // Every checkpoint question must be answered correctly to earn Mastery+
  const allCheckpointsCorrect = checkpointQuestionIds.every(qId => {
    const ans = getQuizAnswer(moduleId, qId)
    return ans?.isCorrect === true
  })

  if ((tier === 'mastery' || tier === 'distinction') && !allCheckpointsCorrect) {
    tier = 'completed'
  }

  // For Distinction: additionally require every checkpoint answered on first attempt
  if (tier === 'distinction') {
    const allFirstAttempt = checkpointQuestionIds.every(qId => {
      const ans = getQuizAnswer(moduleId, qId)
      return ans?.isCorrect === true && (ans?.attempts || 1) === 1
    })
    if (!allFirstAttempt) tier = 'mastery'
  }

  return tier
}

/**
 * Persist the module badge tier and update the existing pd_badges Set
 * so hasBadge() continues to work for older UI code.
 */
export function saveModuleBadge(moduleId, tier, score) {
  try {
    const raw = localStorage.getItem(MODULE_SCORE_KEY)
    const obj = raw ? JSON.parse(raw) : {}
    obj[moduleId] = { badge: tier, moduleScore: score, awardedAt: new Date().toISOString() }
    localStorage.setItem(MODULE_SCORE_KEY, JSON.stringify(obj))
  } catch {}
  // Keep the legacy pd_badges Set up to date so hasBadge() works everywhere
  const set = readSet(BADGES_KEY)
  set.add(moduleId)
  writeSet(BADGES_KEY, set)
}

/**
 * Read the stored module badge record, or null.
 * Returns { badge, moduleScore, awardedAt } | null
 */
export function getModuleBadgeRecord(moduleId) {
  try {
    const raw = localStorage.getItem(MODULE_SCORE_KEY)
    const obj = raw ? JSON.parse(raw) : {}
    return obj[moduleId] || null
  } catch { return null }
}

// ─── simulation progress ────────────────────────────────────────────────────

/**
 * Get progress for a specific simulation.
 * Returns { currentNode: string, choices: {nodeId: choiceId}, reflections: {nodeId: text} }
 * or null if no progress saved.
 */
export function getSimProgress(simId) {
  try {
    const raw = localStorage.getItem(SIM_PROGRESS_KEY)
    if (!raw) return null
    const obj = JSON.parse(raw)
    return obj[simId] || null
  } catch {
    return null
  }
}

/**
 * Save or update progress for a simulation.
 * choiceId and reflectionText are optional.
 */
export function saveSimProgress(simId, nodeId, choiceId, reflectionText) {
  try {
    const raw = localStorage.getItem(SIM_PROGRESS_KEY)
    const obj = raw ? JSON.parse(raw) : {}
    if (!obj[simId]) {
      obj[simId] = { currentNode: nodeId, choices: {}, reflections: {} }
    }
    obj[simId].currentNode = nodeId
    if (choiceId) {
      obj[simId].choices[nodeId] = choiceId
    }
    if (reflectionText) {
      obj[simId].reflections[nodeId] = reflectionText
    }
    localStorage.setItem(SIM_PROGRESS_KEY, JSON.stringify(obj))
  } catch {
    // ignore quota errors silently
  }
}

/**
 * Check if a simulation is marked complete.
 */
export function isSimCompleted(simId) {
  try {
    const raw = localStorage.getItem(SIM_COMPLETED_KEY)
    const arr = raw ? JSON.parse(raw) : []
    return arr.includes(simId)
  } catch {
    return false
  }
}

/**
 * Mark a simulation as complete.
 */
export function markSimComplete(simId) {
  try {
    const raw = localStorage.getItem(SIM_COMPLETED_KEY)
    const arr = raw ? JSON.parse(raw) : []
    if (!arr.includes(simId)) {
      arr.push(simId)
      localStorage.setItem(SIM_COMPLETED_KEY, JSON.stringify(arr))
    }
  } catch {
    // ignore quota errors silently
  }
}

/**
 * Count completed simulations for a module.
 * allSims is an array of simulation objects with .id field.
 */
export function simCompletionCount(moduleId, allSims) {
  if (!allSims || allSims.length === 0) return 0
  return allSims.filter(s => isSimCompleted(s.id)).length
}

/**
 * Check if all simulations for a module are complete and award badge if so.
 * Returns { count, total, allDone, badgeAwarded }.
 */
export function checkAndMaybeAwardSimBadge(moduleId, allSims) {
  const count = simCompletionCount(moduleId, allSims)
  const total = allSims.length
  const allDone = count === total && total > 0
  const badgeAlreadyHeld = hasBadge(moduleId)

  let badgeAwarded = false
  if (allDone && !badgeAlreadyHeld) {
    awardBadge(moduleId)
    badgeAwarded = true
  }

  return { count, total, allDone, badgeAwarded }
}

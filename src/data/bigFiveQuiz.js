/**
 * Big Five (TIPI) — Ten Item Personality Inventory
 * Gosling, Rentfrow & Swann (2003), J. Research in Personality
 *
 * Used to annotate school reviews with the reviewer's disposition,
 * so readers can calibrate reviews through the lens of who wrote them.
 *
 * Traits: O=Openness, C=Conscientiousness, E=Extraversion,
 *         A=Agreeableness, N=Neuroticism
 * Scale: each trait scored 2–10 from two 1–5 Likert items.
 */

export const B5_STORAGE_KEY = 'mystool_b5'

export const B5_QUESTIONS = [
  { id: 'q1',  trait: 'E', direction:  1, text: 'I am someone who is outgoing and enthusiastic.' },
  { id: 'q2',  trait: 'A', direction: -1, text: 'I am someone who tends to be critical and finds fault with others.' },
  { id: 'q3',  trait: 'C', direction:  1, text: 'I am someone who is dependable and self-disciplined.' },
  { id: 'q4',  trait: 'N', direction:  1, text: 'I am someone who is anxious or easily upset.' },
  { id: 'q5',  trait: 'O', direction:  1, text: 'I am someone who is open to new experiences and complex ideas.' },
  { id: 'q6',  trait: 'E', direction: -1, text: 'I am someone who is reserved and quiet.' },
  { id: 'q7',  trait: 'A', direction:  1, text: 'I am someone who is warm and sympathetic toward others.' },
  { id: 'q8',  trait: 'C', direction: -1, text: 'I am someone who is disorganized and careless.' },
  { id: 'q9',  trait: 'N', direction: -1, text: 'I am someone who is calm and emotionally stable.' },
  { id: 'q10', trait: 'O', direction: -1, text: 'I am someone who is conventional and uncreative.' },
]

export const B5_TRAIT_LABELS = {
  O: 'Openness',
  C: 'Conscientiousness',
  E: 'Extraversion',
  A: 'Agreeableness',
  N: 'Neuroticism',
}

// Brief tooltip-level descriptions for what each pole means in school review context
export const B5_TRAIT_CONTEXT = {
  O: {
    high: 'Values experimentation and novel approaches — may weight innovation more heavily.',
    low:  'Values structure and predictability — flags inconsistency more sharply.',
  },
  C: {
    high: 'Notices organizational follow-through — may be more critical of chaotic environments.',
    low:  'More flexible about process — less likely to flag administrative friction.',
  },
  E: {
    high: 'Energized by collaboration — colleague culture and staff cohesion weigh heavily.',
    low:  'Prefers independent work — may rate autonomy dimensions more critically.',
  },
  A: {
    high: 'Prioritizes harmony — may soften criticism of interpersonal conflict.',
    low:  'Names problems directly — may rate culture and leadership more harshly.',
  },
  N: {
    high: 'More sensitive to stress signals — may amplify workload and exit safety concerns.',
    low:  'High stress tolerance — may understate difficulties that others find significant.',
  },
}

/**
 * Score 10 Likert responses into Big Five trait scores (2–10 scale).
 * @param {Object} responses  e.g. { q1: 3, q2: 5, ... }
 * @returns {Object}          e.g. { O: 8, C: 6.5, E: 4, A: 7, N: 3 }
 */
export function scoreB5(responses) {
  const traitItems = { O: [], C: [], E: [], A: [], N: [] }
  B5_QUESTIONS.forEach(q => {
    const raw = responses[q.id]
    if (raw == null) return
    const adjusted = q.direction === 1 ? raw : 6 - raw
    traitItems[q.trait].push(adjusted)
  })
  const scores = {}
  Object.entries(traitItems).forEach(([trait, items]) => {
    if (items.length === 0) return
    const avg = items.reduce((a, b) => a + b, 0) / items.length
    scores[trait] = Math.round(avg * 2 * 10) / 10  // scale 1–5 → 2–10
  })
  return scores
}

/**
 * Returns display labels for the most distinctive traits only.
 * Only emits "High X" (score ≥ 8) or "Low X" (score ≤ 4).
 * Middle-range scores are omitted — they don't meaningfully calibrate a review.
 * @param {Object} scores  { O, C, E, A, N } in 2–10 range
 * @returns {Array}  [{ trait, label, high }]
 */
export function getB5Labels(scores) {
  if (!scores) return []
  return Object.entries(scores)
    .filter(([, v]) => v >= 8 || v <= 4)
    .sort((a, b) => {
      // Most extreme traits first
      const aEx = Math.abs(a[1] - 6)
      const bEx = Math.abs(b[1] - 6)
      return bEx - aEx
    })
    .map(([trait, v]) => ({
      trait,
      label: `${v >= 8 ? 'High' : 'Low'} ${B5_TRAIT_LABELS[trait]}`,
      high: v >= 8,
      context: B5_TRAIT_CONTEXT[trait]?.[v >= 8 ? 'high' : 'low'] || '',
    }))
}

/**
 * Similarity between two B5 profiles — returns 0–1.
 * 0 = maximally different, 1 = identical.
 */
export function b5Similarity(a, b) {
  if (!a || !b) return null
  const traits = ['O', 'C', 'E', 'A', 'N']
  const diffs = traits
    .map(t => (a[t] != null && b[t] != null ? Math.abs(a[t] - b[t]) : null))
    .filter(d => d != null)
  if (diffs.length === 0) return null
  const avgDiff = diffs.reduce((a, b) => a + b, 0) / diffs.length
  return Math.max(0, 1 - avgDiff / 8)
}

/**
 * Load saved B5 scores from localStorage. Returns null if not taken.
 */
export function loadB5() {
  try {
    const raw = localStorage.getItem(B5_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

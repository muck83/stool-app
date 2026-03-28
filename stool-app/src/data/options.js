// Shared dropdown option constants — single source of truth used across
// Onboarding, Salaries, and any future forms.
// Stored values are the canonical strings used in localStorage and the DB.

export const CURRICULUM_OPTS = [
  'IB',
  'British Curriculum',
  'US-oriented',
  'Multiple',
]

export const HOUSING_OPTS = [
  { value: 'Provided',  label: 'School provides housing' },
  { value: 'Allowance', label: 'Monthly allowance' },
  { value: 'None',      label: 'No housing benefit' },
]

// Detailed housing follow-ups — what teachers actually need to know
export const HOUSING_QUALITY_OPTS = [
  { value: 'great',    label: 'Good quality — standalone, furnished, decent area' },
  { value: 'ok',       label: 'Adequate — liveable but basic or shared compound' },
  { value: 'shared',   label: 'Shared housing — roommate situation' },
  { value: 'poor',     label: 'Poor quality — would not recommend' },
]

export const ALLOWANCE_COVERAGE_OPTS = [
  { value: '100',  label: 'Covers all or nearly all of rent' },
  { value: '75',   label: 'Covers most of rent (roughly 75%)' },
  { value: '50',   label: 'Covers about half of rent' },
  { value: '25',   label: 'Token amount — covers less than a quarter' },
]

export const FLIGHTS_OPTS = [
  { value: 'Yes', label: 'Yes — covered' },
  { value: 'No',  label: 'No' },
]

export const TAX_OPTS = [
  { value: 'Tax-free', label: 'Tax-free' },
  { value: 'Low',      label: 'Low (under 15%)' },
  { value: 'Moderate', label: 'Moderate (15–25%)' },
  { value: 'High',     label: 'High (25%+)' },
]

// ─── Migration helpers ────────────────────────────────────────────────────────
// Maps old stored values (from before options were normalised) to canonical ones.

export function normaliseHousing(v) {
  if (!v) return ''
  const map = { provided: 'Provided', allowance: 'Allowance', none: 'None' }
  return map[v.toLowerCase()] ?? v
}

export function normaliseFlights(v) {
  if (!v) return ''
  const map = { yes: 'Yes', no: 'No' }
  return map[v.toLowerCase()] ?? v
}

export function normaliseTax(v) {
  if (!v) return ''
  const map = { taxfree: 'Tax-free', 'tax-free': 'Tax-free', low: 'Low', moderate: 'Moderate', high: 'High' }
  return map[v.toLowerCase()] ?? v
}

export function normaliseCurriculum(v) {
  if (!v) return ''
  // Old Salaries form used 'US-oriented curriculum' — strip the suffix
  if (v === 'US-oriented curriculum') return 'US-oriented'
  return v
}

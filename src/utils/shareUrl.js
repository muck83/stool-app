/**
 * Share URL utilities
 * Encodes a minimal, privacy-safe profile snapshot into a URL param.
 * Salary is intentionally excluded — it's personal financial data.
 */

const PARAM = 'share'

// Compact key map: keeps URLs short
const ENCODE_MAP = {
  n:  'name',
  h:  'home',
  c:  'cc',
  cy: 'city',
  s:  'sch',
  p:  'plc',
  k:  'pkg',
  d:  'dc',
  dy: 'dcity',
}

const DECODE_MAP = Object.fromEntries(
  Object.entries(ENCODE_MAP).map(([short, full]) => [full, short])
)

export function encodeProfile(profile) {
  const compact = {}
  for (const [full, short] of Object.entries(DECODE_MAP)) {
    const val = profile[full]
    // Only include non-empty values
    if (val !== undefined && val !== null && val !== '' && val !== 0) {
      compact[short] = val
    }
  }
  try {
    return btoa(JSON.stringify(compact))
  } catch {
    return null
  }
}

export function decodeShareParam(search) {
  try {
    const params = new URLSearchParams(search)
    const raw = params.get(PARAM)
    if (!raw) return null
    const compact = JSON.parse(atob(raw))
    const profile = {}
    for (const [short, val] of Object.entries(compact)) {
      const full = ENCODE_MAP[short]
      if (full) profile[full] = val
    }
    // Ensure score fields are numbers
    for (const key of ['sch', 'plc', 'pkg']) {
      if (profile[key] !== undefined) profile[key] = Number(profile[key])
    }
    return profile
  } catch {
    return null
  }
}

export function buildShareUrl(profile) {
  const encoded = encodeProfile(profile)
  if (!encoded) return null
  const url = new URL(window.location.href)
  url.search = ''
  url.searchParams.set(PARAM, encoded)
  return url.toString()
}

export function clearShareParam() {
  const url = new URL(window.location.href)
  url.searchParams.delete(PARAM)
  window.history.replaceState({}, '', url.toString())
}

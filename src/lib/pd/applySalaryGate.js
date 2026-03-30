/**
 * Salary gate logic for the PD layer.
 *
 * Unauthenticated users (or users without the relevant PD badge) see only
 * count + range for KSA, China, and South Korea salary rows.
 * Once they complete 80% of the country module → badge → full rows unlock.
 */

import { GATED_COUNTRIES } from '../slugMap.js'

/**
 * Check whether a salary row should be gated.
 * @param {object} row - salary row with at least a `country` field
 * @param {string[]} unlockedCountries - countries the user has badges for
 * @returns {boolean} true if the row should be hidden/gated
 */
export function isRowGated(row, unlockedCountries = []) {
  if (!row?.country) return false
  const c = row.country.trim()
  const isGatedCountry = GATED_COUNTRIES.some(
    gc => gc.toLowerCase() === c.toLowerCase()
  )
  if (!isGatedCountry) return false
  // Unlocked if user holds the badge for this country's module
  return !unlockedCountries.some(
    uc => uc.toLowerCase() === c.toLowerCase()
  )
}

/**
 * Given an array of salary rows, return gated summary for a country.
 * @param {object[]} rows - all salary rows for one gated country
 * @returns {{ count: number, minUsd: number, maxUsd: number }}
 */
export function gatedSummary(rows) {
  if (!rows || rows.length === 0) return { count: 0, minUsd: 0, maxUsd: 0 }
  const usdValues = rows.map(r => r.usd).filter(v => typeof v === 'number' && v > 0)
  return {
    count: rows.length,
    minUsd: Math.min(...usdValues),
    maxUsd: Math.max(...usdValues),
  }
}

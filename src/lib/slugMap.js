/**
 * Module slug ↔ ID ↔ country mapping for the PD layer.
 * Used by routing, salary gate, and context banner logic.
 */

export const MODULES = [
  { slug: 'saudi-arabia', id: 'ksa-001', countryCode: 'SA', country: 'Saudi Arabia', color: '#BA7517' },
  { slug: 'china',        id: 'china-001', countryCode: 'CN', country: 'China',        color: '#D85A30' },
  { slug: 'south-korea',  id: 'korea-001', countryCode: 'KR', country: 'South Korea',  color: '#534AB7' },
]

export const GATED_COUNTRIES = MODULES.map(m => m.country)
export const GATED_COUNTRY_CODES = MODULES.map(m => m.countryCode)

export function moduleBySlug(slug) {
  return MODULES.find(m => m.slug === slug) || null
}

export function moduleByCountry(country) {
  if (!country) return null
  const lc = country.toLowerCase().trim()
  return MODULES.find(m => m.country.toLowerCase() === lc) || null
}

export function moduleById(id) {
  return MODULES.find(m => m.id === id) || null
}

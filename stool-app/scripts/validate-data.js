import { COUNTRIES } from '../src/data/countries.js'
import { HOF } from '../src/data/hofstede.js'
import { CTRY_DATA, REGION_MAP } from '../src/data/geo.js'

function printCheck(ok, label, items = []) {
  console.log(`${ok ? '✓' : '✗'} ${label}`)
  if (items.length) console.log(`  ${items.join(', ')}`)
}

const countrySet = new Set(COUNTRIES)
const hofKeys = Object.keys(HOF).sort()
const dataKeys = Object.keys(CTRY_DATA).sort()
const regionCovered = new Set(Object.values(REGION_MAP).flat())

const hofMissingFromCountries = hofKeys.filter(country => !countrySet.has(country))
const dataMissingFromHof = dataKeys.filter(country => !HOF[country])
const dataMissingFromCountries = dataKeys.filter(country => !countrySet.has(country))
const dataMissingFromRegionMap = dataKeys.filter(country => !regionCovered.has(country))

// The live app uses COUNTRIES as a superset dropdown, so the strict invariant here
// is that every supported data country is represented in COUNTRIES, not vice versa.
const unsupportedDropdownCountries = COUNTRIES.filter(country => !HOF[country]).sort()

let hasFailure = false

printCheck(hofMissingFromCountries.length === 0, 'Every HOF country exists in COUNTRIES', hofMissingFromCountries)
if (hofMissingFromCountries.length) hasFailure = true

printCheck(dataMissingFromHof.length === 0, 'Every CTRY_DATA country exists in HOF', dataMissingFromHof)
if (dataMissingFromHof.length) hasFailure = true

printCheck(dataMissingFromCountries.length === 0, 'Every CTRY_DATA country exists in COUNTRIES', dataMissingFromCountries)
if (dataMissingFromCountries.length) hasFailure = true

printCheck(dataMissingFromRegionMap.length === 0, 'Every CTRY_DATA country appears in REGION_MAP', dataMissingFromRegionMap)
if (dataMissingFromRegionMap.length) hasFailure = true

console.log(`ℹ COUNTRIES without HOF coverage: ${unsupportedDropdownCountries.length}`)
if (unsupportedDropdownCountries.length) {
  console.log(`  ${unsupportedDropdownCountries.join(', ')}`)
}

process.exit(hasFailure ? 1 : 0)

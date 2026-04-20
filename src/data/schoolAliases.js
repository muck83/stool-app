/**
 * School name alias map — bad/variant → canonical name.
 *
 * Covers three categories:
 *  1. Formatting errors: wrong case, "The" prefix, punctuation, Int'l abbreviation
 *  2. Acronym noise: name (ACRONYM) → name
 *  3. Confirmed same-school variants: word-order flips, shortened names
 *
 * Campus-specific suffixes (Pudong, Bangkok, Hsinchu, Pattaya, etc.) are
 * intentionally KEPT because campuses may have different salaries.
 *
 * To add a new alias: 'Submitted variant' : 'Canonical name'
 */
export const SCHOOL_ALIASES = {
  // ── Formatting & case ─────────────────────────────────────────────────────
  'American college of sofia':                    'American College of Sofia',
  'The American College of Sofia':                'American College of Sofia',
  'Lincoln school':                               'Lincoln School',
  'Vienna international school':                  'Vienna International School',
  'Ayeyarwaddy international school':             'Ayeyarwaddy International School',
  'Metropolitan school of Panama':                'Metropolitan School of Panama',
  'American International school':                'American International School',
  'Garden international school':                  'Garden International School',
  "Yew Chung Int'l School":                       'Yew Chung International School',
  'PaRK International School':                    'Park International School',
  'International school of Singapore':            'International School of Singapore',
  'Colegio Americano de Torreon':                 'Colegio Americano de Torreón',
  'STAMFORD AMERICA SCHOOL':                      'Stamford American International School',
  'Yasmina British academy (Aldar)':              'Yasmina British Academy',
  'tsinghua international':                       'Tsinghua International School',

  // ── "The" prefix removal ──────────────────────────────────────────────────
  'The British school of kuwait':                 'British School of Kuwait',
  'The American School Foundation':               'American School Foundation',
  'The International school of Kuala Lumpur':     'International School of Kuala Lumpur',

  // ── Parenthetical acronym removal ────────────────────────────────────────
  'Osaka YMCA International School (OYIS)':       'Osaka YMCA International School',
  'Myanmar International School Yangon (MISY)':   'Myanmar International School Yangon',
  'Verdala International School (ISL)':           'Verdala International School',
  'International School of Dakar (ISD)':          'International School of Dakar',
  'American School Dhahran (ISG Group)':          'American School Dhahran',
  'The International School of Macao(TIS)':       'The International School of Macao',
  'TIS Macao':                                    'The International School of Macao',

  // ── Punctuation / abbreviated words ──────────────────────────────────────
  'St. Andrews international school Green Valley':'St Andrews International School Green Valley',

  // ── Confirmed same-school variants ───────────────────────────────────────
  // Japan
  'British School in Tokyo':                      'British School Tokyo',

  // Thailand
  'Concordian':                                   'Concordian International School',
  'Regents Int School':                           'Regents International School',
  'ISB':                                          'International School Bangkok',
  'NIST':                                         'NIST International School',
  'UWC Thailand International School':            'UWC Thailand',

  // China — YCIS network (ambiguous campus → full name; campus variants preserved)
  'YCIS':                                         'Yew Chung International School',
  'YCIS (Yew Chung International School)':        'Yew Chung International School',
  'YCIS Pudong':                                  'Yew Chung International School Pudong',
  'BASIS':                                        'BASIS International School',
  'WAB':                                          'Western Academy of Beijing',

  // Vietnam
  'Vietnam Australia School':                     'Vietnam Australia International School',
  'Pennsylvania International School':            'Pennsylvania American International School',
  'TAS':                                          'The American School (TAS)',
  'American International school':                'American International School',
  'BSKL':                                         'British International School of Kuala Lumpur',
  'ISKL':                                         'International School of Kuala Lumpur',
  'SAS':                                          'Singapore American School',
  'UWCSEA':                                       'UWC South East Asia',
  'ASD':                                          'American School of Dubai',
  'HKIS':                                         'Hong Kong International School',
  'ISM':                                          'International School Manila',
  'JIS':                                          'Jakarta Intercultural School',
  'GEMS Wellington Academy Al Khail':                                       'GEMS Wellington Academy - Al Khail',
  'GWAK':                                       'GEMS Wellington Academy - Al Khail',
  'GEMS Wellington International':                                       'GEMS Wellington International School',
  'GEMS World Academy':                                       'GEMS World Academy - Dubai',
  'JESS':                                       'Jumeirah English Speaking School',
  'Uptown School':                                       'Uptown International School',
  'DESC':                                       'Dubai English Speaking College',
  'BSAK':                                       'The British School Al Khubairat',
  'British School Al Khubairat':                                       'The British School Al Khubairat',
  'ACS Abu Dhabi':                                       'American Community School of Abu Dhabi',
  'American Community School Abu Dhabi':                                       'American Community School of Abu Dhabi',
  'ADIS':                                       'Abu Dhabi International School',
  'Cranleigh':                                       'Cranleigh Abu Dhabi',
  'Brighton Abu Dhabi':                                       'Brighton College Abu Dhabi',
  'Doha College Qatar':                                       'Doha College',
  'Repton Dubai':                                       'Repton School Dubai',
  'Repton Abu Dhabi':                                       'Repton School Abu Dhabi',
  'NAS Dubai':                                       'Nord Anglia International School Dubai',
  'Nord Anglia Dubai':                                       'Nord Anglia International School Dubai',
  'BIS Abu Dhabi':                                       'The British International School Abu Dhabi',
  'British International School Abu Dhabi':                                       'The British International School Abu Dhabi',
  'NAS Abu Dhabi':                                       'Nord Anglia International School Abu Dhabi',
  'Nord Anglia Abu Dhabi':                                       'Nord Anglia International School Abu Dhabi',
  'ISC Khalifa City':                                       'The International School of Choueifat - Khalifa City',
  'ISC Abu Dhabi':                                       'The International School of Choueifat - Khalifa City',
}

/**
 * Resolve a submitted school name to its canonical form.
 * Returns the canonical if found, otherwise returns the original.
 */
export function resolveSchoolName(name) {
  if (!name) return name
  return SCHOOL_ALIASES[name] ?? name
}

/**
 * Soft-normalise for search/comparison only (not for storage).
 * Strips "The", lowercases, collapses whitespace.
 */
export function normaliseForSearch(name) {
  if (!name) return ''
  return name
    .toLowerCase()
    .replace(/^the\s+/, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

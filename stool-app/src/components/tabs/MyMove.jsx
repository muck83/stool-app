import { useState, useMemo } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DCOLS } from '../../data/hofstede.js'
import { CTRY_DATA, CITIES } from '../../data/geo.js'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import { PLACE_ATTRS } from '../../data/places.js'
import StoolViz from '../StoolViz.jsx'

// ─── Hofstede lived-experience tooltips ───────────────────────────────────────
function getDimExperience(dim, score) {
  if (score == null) return ''
  const hi = score >= 70
  const lo = score < 40
  const exp = {
    'Power Distance': hi
      ? `Your authority is rarely questioned. Students expect you to have all the answers — saying "I don't know" can genuinely surprise them. Decisions flow from the top down, and parents and students will accept your judgment without much pushback. Formal titles matter.`
      : lo
      ? `Students treat you as a facilitator, not an authority. Expect to be challenged openly — sometimes bluntly. First-name terms are common. Students will negotiate grades, question methods, and advocate for themselves without hesitation.`
      : `A mix: students respect your role but will voice disagreement when they feel strongly. Some hierarchy is expected but it isn't rigid.`,
    'Individualism': hi
      ? `Students advocate for themselves and expect individual recognition. Competition between classmates is normal and motivating. Group work can cause frustration if individual contributions aren't tracked. Direct feedback is welcomed.`
      : lo
      ? `Group harmony comes before individual achievement. Students may avoid standing out — even with a correct answer. Design tasks so the group succeeds or fails together. Never single out a student publicly for a mistake.`
      : `A balance of individual and group motivations. Some students will push to stand out; others work best when the group succeeds.`,
    'Masculinity': hi
      ? `Results and achievement are what students, parents, and the school judge you by. Competition is motivating. Extra hours and visible effort are respected. Work-life balance is a lower priority.`
      : lo
      ? `Relationships and wellbeing come first. Students value a caring classroom as much as academic results. Competition can feel uncomfortable. Your own work-life balance will likely be better respected here.`
      : `A blend of achievement focus and genuine care for relationships. Some students are competitive; others collaborative.`,
    'Uncertainty Avoidance': hi
      ? `Students need clear rubrics, detailed instructions, and predictable routines. Open-ended tasks generate real anxiety. Establish your classroom structure early — ambiguity reads as incompetence, not creativity.`
      : lo
      ? `Students are comfortable with open-ended tasks and improvisation. Too much structure can feel patronising. Creative freedom is welcomed.`
      : `Some structure helps but students can manage ambiguity. Clear expectations are polite, not essential.`,
    'Long-term Orientation': hi
      ? `Education is a serious long-term investment. Students are patient and persistent. Parents may prioritise exam results over current wellbeing. The pressure is real and intentional.`
      : lo
      ? `Students and families focus on present experience and immediate results. Make the value of your lessons visible now — abstract future benefits don't land.`
      : `A mix of present enjoyment and future planning. Students respond to both immediate relevance and longer-term goals.`,
    'Indulgence': hi
      ? `People enjoy life and leisure is genuinely valued. Students expect school to be engaging, even fun. A relaxed, energetic classroom is respected here.`
      : lo
      ? `Restraint and discipline are cultural norms. Students take school seriously. A loose, fun-first approach may be seen as lacking rigour.`
      : `A moderate balance between enjoyment and discipline. Students appreciate engaging lessons but also respect structure.`,
  }
  return exp[dim] || ''
}

// ─── Teaching Environment score ───────────────────────────────────────────────
// Answers: "How conducive is the school culture in this country to effective,
// fulfilling teaching — for a teacher coming from YOUR background?"
// Based on Hofstede research. Explicitly NOT a rating of any specific school.

function scoreTeachingEnv(focusCountry, homeCountry) {
  const hDest = HOF[focusCountry]
  const hHome = HOF[homeCountry]
  if (!hDest) return { score: null, factors: [], descriptor: '' }

  let score = 6.5
  const factors = []

  // PDI: high hierarchy = less teacher autonomy, more directive management
  const pdi = hDest[0]
  if (pdi > 80) {
    score -= 1.5
    factors.push({ icon: '⬆️', label: 'Very high hierarchy', impact: -1, detail: 'Schools tend to be top-down. Expect less professional autonomy and more directive management style from leadership.' })
  } else if (pdi > 65) {
    score -= 0.75
    factors.push({ icon: '↑', label: 'High hierarchy', impact: -1, detail: 'Significant authority distance. Your autonomy in the classroom may be constrained by strong hierarchy expectations.' })
  } else if (pdi < 35) {
    score += 0.5
    factors.push({ icon: '✓', label: 'Flat hierarchy', impact: 1, detail: 'Schools tend to be collaborative and less directive. Teachers typically have strong professional autonomy.' })
  }

  // UAI: high uncertainty avoidance = rigid systems, resist change, rule-bound
  const uai = hDest[3]
  if (uai > 80) {
    score -= 1.0
    factors.push({ icon: '⬆️', label: 'Rigid systems', impact: -1, detail: 'Strong preference for rules and correct answers. Open-ended or inquiry-based teaching methods can face real resistance.' })
  } else if (uai > 65) {
    score -= 0.5
    factors.push({ icon: '↑', label: 'Structured environment', impact: -1, detail: 'Schools prefer clear processes. Flexibility is possible but change requires patience and institutional buy-in.' })
  } else if (uai < 35) {
    score += 0.5
    factors.push({ icon: '✓', label: 'Open to innovation', impact: 1, detail: 'Schools are comfortable with ambiguity and new approaches. Good environment for creative, inquiry-based teaching.' })
  }

  // MAS: high masculinity = competitive pressure, demanding schedules
  const mas = hDest[2]
  if (mas > 80) {
    score -= 0.75
    factors.push({ icon: '↑', label: 'High performance pressure', impact: -1, detail: 'Intense focus on results and achievement. Expect demanding schedules and strong emphasis on measurable outcomes.' })
  } else if (mas < 35) {
    score += 0.3
    factors.push({ icon: '✓', label: 'Balanced work culture', impact: 1, detail: 'Relationships and wellbeing are valued alongside results. Work-life balance is more likely to be respected.' })
  }

  // Cultural fit: home vs destination gaps
  if (hHome) {
    const idvGap = Math.abs(hHome[1] - hDest[1])
    const pdiGap = Math.abs(hHome[0] - hDest[0])

    if (idvGap > 50) {
      score -= 1.0
      factors.push({ icon: '⬆️', label: 'Large cultural distance', impact: -1, detail: `Your home culture and ${focusCountry} approach individual vs group dynamics very differently (${idvGap}-point gap). Reading student behaviour will take real adjustment.` })
    } else if (idvGap > 25) {
      score -= 0.4
      factors.push({ icon: '↑', label: 'Some cultural distance', impact: -1, detail: `Moderate cultural adjustment required. Student motivation styles and group dynamics will feel somewhat unfamiliar at first.` })
    } else {
      factors.push({ icon: '✓', label: 'Familiar cultural norms', impact: 1, detail: `Your home culture and ${focusCountry} share similar values around individual and group dynamics — a meaningful advantage when building classroom relationships.` })
    }

    if (pdiGap > 50) score -= 0.75
    else if (pdiGap > 30) score -= 0.3
  }

  const finalScore = Math.min(10, Math.max(1, Math.round(score * 10) / 10))
  const descriptor = finalScore >= 8 ? 'Strong fit'
    : finalScore >= 6.5 ? 'Good fit'
    : finalScore >= 5 ? 'Adjustment needed'
    : 'Significant challenge'

  return { score: finalScore, factors, descriptor }
}

// ─── Leg scoring ──────────────────────────────────────────────────────────────
const LEG_COLS = { package: '#1D9E75', env: '#BA7517', place: '#534AB7' }

function scoreLegs(focusCity, focusCountry, homeCountry, placePrefs, schoolSal) {
  const dest  = CTRY_DATA[focusCountry]
  const hDest = HOF[focusCountry]
  const hHome = HOF[homeCountry]
  if (!dest) return null

  // Package: real salary data — school-specific if selected, else country median
  const sal      = schoolSal || dest.medSal
  const salScore = sal < 3000 ? 3 : sal < 4500 ? 5 : sal < 6000 ? 6 : sal < 8000 ? 7.5 : 9
  const pkgBonus = (dest.housingRate > 70 ? 1.2 : dest.housingRate > 50 ? 0.6 : 0)
                 + (dest.taxFree ? 1.2 : 0)
                 + (dest.flightRate > 75 ? 0.4 : 0)
  const pkgScore = Math.min(10, Math.round((salScore + pkgBonus) * 10) / 10)

  // Teaching environment: Hofstede-backed cultural school climate
  const { score: envScore, factors, descriptor } = scoreTeachingEnv(focusCountry, homeCountry)

  // Place: QoL indices + personal preferences
  const idvGap = hHome && hDest ? Math.abs(hHome[1] - hDest[1]) : 0
  const plcBase = Math.min(10, Math.max(1,
    ((dest.ql / 20) + (dest.safety / 25) + (dest.expat / 25)) / 3 * 10
    + (idvGap > 50 ? -0.8 : idvGap > 30 ? -0.4 : 0)
  ))
  const cityAttrs = PLACE_ATTRS[focusCity] || []
  let prefDelta = 0
  cityAttrs.forEach(attr => {
    const pref = (placePrefs || {})[attr.id]
    if (pref === 1)  prefDelta += 0.4
    if (pref === -1) prefDelta -= 0.5
  })
  const plcScore = Math.min(10, Math.max(1, Math.round((plcBase + prefDelta) * 10) / 10))

  return {
    pkg: Math.round(pkgScore * 10) / 10,
    env: envScore,
    envFactors: factors,
    envDescriptor: descriptor,
    plc: Math.round(plcScore * 10) / 10,
    salUsed: sal,
  }
}

// ─── School salary reference ──────────────────────────────────────────────────
function getCitySchools(city) {
  if (!city) return []
  const map = {}
  SALARY_DB_SEED.forEach(e => {
    if (e.city !== city || !e.school) return
    if (!map[e.school]) map[e.school] = { name: e.school, salaries: [], count: 0 }
    map[e.school].count++
    if (e.usd) map[e.school].salaries.push(e.usd)
  })
  return Object.values(map)
    .map(s => ({ ...s, avg: s.salaries.length ? Math.round(s.salaries.reduce((a, b) => a + b, 0) / s.salaries.length) : 0 }))
    .filter(s => s.avg > 0)
    .sort((a, b) => b.avg - a.avg)
}

const ALL_CITIES = Object.keys(PLACE_ATTRS)
const IMPACT_COL = { '-1': '#C0392B', '1': '#1D9E75' }

export default function MyMove() {
  const { profile, updateProfile, setActiveTab } = useProfile()
  const [hoveredDim, setHoveredDim]         = useState(null)
  const [hoveredFactor, setHoveredFactor]   = useState(null)
  const [search, setSearch]                 = useState('')
  const [explored, setExplored]             = useState(null)
  const [selectedSchool, setSelectedSchool] = useState(null)

  const placePrefs = profile.placePrefs || {}

  const setPref = (attrId, val) => {
    const cur  = placePrefs[attrId] || 0
    const next = cur === val ? 0 : val
    updateProfile({ placePrefs: { ...placePrefs, [attrId]: next } })
  }

  const focusCity    = explored || profile.dcity || null
  const focusCountry = focusCity ? (CITIES[focusCity]?.country || profile.dc || null) : null

  const handleCityChange = (city) => { setExplored(city); setSelectedSchool(null); setSearch('') }
  const handleSchoolToggle = (name) => setSelectedSchool(prev => prev === name ? null : name)

  const citySchools = useMemo(() => getCitySchools(focusCity), [focusCity])
  const schoolSal   = selectedSchool ? citySchools.find(s => s.name === selectedSchool)?.avg : null

  const scores = useMemo(
    () => (focusCity && focusCountry)
      ? scoreLegs(focusCity, focusCountry, profile.home, placePrefs, schoolSal)
      : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusCity, focusCountry, profile.home, JSON.stringify(placePrefs), schoolSal]
  )

  const cityAttrs     = PLACE_ATTRS[focusCity] || []
  const hDest         = HOF[focusCountry]
  const hHome         = HOF[profile.home]
  const prefsSetCount = Object.values(placePrefs).filter(v => v !== 0).length

  const stoolLegs = scores ? [
    { label: 'Package',  score: scores.pkg, color: LEG_COLS.package,
      sublabel: selectedSchool ? `$${(schoolSal || 0).toLocaleString()}/mo` : `~$${(CTRY_DATA[focusCountry]?.medSal || 0).toLocaleString()}/mo` },
    { label: 'Teaching', score: scores.env, color: LEG_COLS.env,
      sublabel: scores.envDescriptor || '' },
    { label: 'Place',    score: scores.plc, color: LEG_COLS.place,
      sublabel: prefsSetCount > 0 ? `${prefsSetCount} prefs set` : 'set preferences →' },
  ] : []

  const results = search.length > 1
    ? ALL_CITIES.filter(c => c.toLowerCase().includes(search.toLowerCase())).slice(0, 8)
    : []

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.25rem' }}>
        Imagine your move
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        Search a city to explore its stool. Tell us what matters to you — the Place leg updates in real time.
      </div>

      {/* ── City search ── */}
      <div style={{ position: 'relative', marginBottom: '1.5rem', maxWidth: 380 }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search a city — Dubai, Bangkok, Tokyo…"
          style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-2)', borderRadius: 'var(--rl)', fontSize: 14, boxSizing: 'border-box', background: 'white' }}
        />
        {results.length > 0 && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 20, background: 'white', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', boxShadow: '0 8px 24px rgba(0,0,0,.1)', marginTop: 4, overflow: 'hidden' }}>
            {results.map(city => (
              <div key={city} onClick={() => handleCityChange(city)}
                style={{ padding: '10px 14px', cursor: 'pointer', fontSize: 14, borderBottom: '1px solid var(--border)' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f5f4f1'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                {city}
                <span style={{ fontSize: 11, color: 'var(--ink-4)', marginLeft: 8 }}>{CITIES[city]?.country}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {focusCity ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* ── LEFT: Stool + salary reference ── */}
          <div>

            {/* Stool card */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '.25rem' }}>{focusCity}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: '1.25rem' }}>
                {focusCountry} · {CTRY_DATA[focusCountry]?.region}
              </div>
              <StoolViz legs={stoolLegs} title={focusCity} size={260} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.5rem', marginTop: '1rem' }}>
                {stoolLegs.map(leg => (
                  <div key={leg.label} style={{ textAlign: 'center', padding: '.75rem .5rem', background: leg.color + '12', borderRadius: 8, border: `1px solid ${leg.color}30` }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 300, color: leg.color }}>{leg.score}</div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: leg.color, textTransform: 'uppercase', letterSpacing: '.06em' }}>{leg.label}</div>
                    {leg.sublabel && <div style={{ fontSize: 10, color: 'var(--ink-4)', marginTop: 2 }}>{leg.sublabel}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Salary reference — school list for Package only */}
            {citySchools.length > 0 && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.25rem' }}>
                  Salary reference · {focusCity}
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.55 }}>
                  Select a school to update the Package leg with reported compensation.
                  {selectedSchool && (
                    <button onClick={() => setSelectedSchool(null)}
                      style={{ marginLeft: 8, fontSize: 11, color: 'var(--ink-4)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>
                      Clear
                    </button>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                  {citySchools.map(school => {
                    const active = selectedSchool === school.name
                    return (
                      <button key={school.name} onClick={() => handleSchoolToggle(school.name)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 11px', borderRadius: 7, cursor: 'pointer', textAlign: 'left', border: active ? '1.5px solid #1D9E75' : '1.5px solid var(--border)', background: active ? '#E1F5EE' : 'white', transition: 'all .15s' }}
                        onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = 'var(--border-2)' }}
                        onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = 'var(--border)' }}>
                        <span style={{ fontSize: 12, color: active ? '#1D9E75' : 'var(--ink-2)', fontWeight: active ? 600 : 400, flex: 1, paddingRight: 8, lineHeight: 1.3 }}>
                          {school.name}
                        </span>
                        <div style={{ flexShrink: 0, textAlign: 'right' }}>
                          <div style={{ fontSize: 12.5, fontWeight: 600, color: active ? '#1D9E75' : 'var(--ink)' }}>
                            ${school.avg.toLocaleString()}
                          </div>
                          <div style={{ fontSize: 10, color: 'var(--ink-4)' }}>
                            {school.count} {school.count === 1 ? 'report' : 'reports'}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
                {/* School quality reviews coming soon */}
                <div style={{ marginTop: '1rem', padding: '.75rem', background: '#FAEEDA', borderRadius: 7, border: '1px solid #BA751722' }}>
                  <div style={{ fontSize: 11.5, color: '#633806', lineHeight: 1.6 }}>
                    <strong>School quality ratings coming.</strong> Every review submitted in My School builds toward a score for that school here.{' '}
                    <span onClick={() => setActiveTab('schools')} style={{ fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>
                      Rate your current school →
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* At a glance */}
            {CTRY_DATA[focusCountry] && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.75rem' }}>At a glance</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem .75rem' }}>
                  {[
                    ['Median salary',   `$${CTRY_DATA[focusCountry].medSal?.toLocaleString()}/mo`],
                    ['Housing',         `${CTRY_DATA[focusCountry].housingRate}% incl.`],
                    ['Flights',         `${CTRY_DATA[focusCountry].flightRate}% incl.`],
                    ['Tax-free',        CTRY_DATA[focusCountry].taxFree ? 'Yes ✓' : 'No'],
                    ['Quality of life', `${CTRY_DATA[focusCountry].ql}/100`],
                    ['Safety',          `${CTRY_DATA[focusCountry].safety}/100`],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, padding: '3px 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ color: 'var(--ink-4)' }}>{k}</span>
                      <span style={{ fontWeight: 500 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Place prefs + Teaching environment + Culture ── */}
          <div>

            {/* Place preferences */}
            {cityAttrs.length > 0 && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.25rem' }}>
                  What {focusCity} is like
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '1rem' }}>
                  Mark what appeals or puts you off — your Place score adjusts instantly.
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                  {cityAttrs.map(attr => {
                    const pref = placePrefs[attr.id] || 0
                    return (
                      <div key={attr.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flex: 1, minWidth: 0 }}>
                          <span style={{ fontSize: 15, flexShrink: 0 }}>{attr.icon}</span>
                          <span style={{ fontSize: 13, color: pref === 1 ? '#1D9E75' : pref === -1 ? '#D85A30' : 'var(--ink-2)', fontWeight: pref !== 0 ? 500 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {attr.label}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                          <button onClick={() => setPref(attr.id, 1)} title="Love this"
                            style={{ width: 30, height: 26, borderRadius: 6, border: '1.5px solid', borderColor: pref === 1 ? '#1D9E75' : 'var(--border-2)', background: pref === 1 ? '#E1F5EE' : 'white', cursor: 'pointer', fontSize: 12 }}>❤️</button>
                          <button onClick={() => setPref(attr.id, -1)} title="Not for me"
                            style={{ width: 30, height: 26, borderRadius: 6, border: '1.5px solid', borderColor: pref === -1 ? '#D85A30' : 'var(--border-2)', background: pref === -1 ? '#FAECE7' : 'white', cursor: 'pointer', fontSize: 12 }}>✗</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Teaching environment breakdown */}
            {scores?.env != null && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.25rem' }}>
                  Teaching environment
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.55 }}>
                  How the school culture in {focusCountry} tends to feel for a teacher from{' '}
                  {profile.home ? <strong>{profile.home}</strong> : 'your background'}.
                  Based on national culture research — not a rating of any specific school.
                </div>

                {/* Score + descriptor */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', padding: '.75rem', background: LEG_COLS.env + '0E', borderRadius: 8, border: `1px solid ${LEG_COLS.env}22` }}>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: LEG_COLS.env, lineHeight: 1 }}>{scores.env}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: LEG_COLS.env }}>{scores.envDescriptor}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 2 }}>out of 10</div>
                  </div>
                </div>

                {/* Factors — hover for detail */}
                {scores.envFactors?.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                    {scores.envFactors.map((f, i) => (
                      <div key={i}
                        style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '.5rem', padding: '7px 10px', borderRadius: 7, cursor: 'help', background: f.impact > 0 ? '#F0FBF6' : '#FBF3F0', border: `1px solid ${f.impact > 0 ? '#1D9E7530' : '#C0392B30'}` }}
                        onMouseEnter={() => setHoveredFactor(i)}
                        onMouseLeave={() => setHoveredFactor(null)}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: f.impact > 0 ? '#1D9E75' : '#C0392B', flexShrink: 0, marginTop: 1 }}>
                          {f.impact > 0 ? '↑' : '↓'}
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 500, color: f.impact > 0 ? '#0F6E56' : '#922B21', flex: 1 }}>
                          {f.label}
                        </span>
                        {hoveredFactor === i && (
                          <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', zIndex: 10, background: 'var(--ink)', color: 'white', fontSize: 12, padding: '10px 12px', borderRadius: 8, marginTop: 4, lineHeight: 1.65, boxShadow: '0 6px 20px rgba(0,0,0,.2)', pointerEvents: 'none' }}>
                            {f.detail}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Culture in the classroom — Hofstede dims */}
            {hDest && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.25rem' }}>
                  Culture in the classroom
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '1rem' }}>
                  Hover each dimension to understand what it means day-to-day as a teacher.
                </div>
                {DLBLS.map((d, i) => {
                  const val  = hDest[i]
                  const hVal = hHome?.[i]
                  const experience = getDimExperience(d, val)
                  return (
                    <div key={d} style={{ marginBottom: '.875rem', position: 'relative', cursor: 'help' }}
                      onMouseEnter={() => setHoveredDim(d)}
                      onMouseLeave={() => setHoveredDim(null)}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                        <span style={{ fontWeight: 500 }}>{d}</span>
                        <span style={{ color: DCOLS[i], fontWeight: 600 }}>{val}/100</span>
                      </div>
                      <div style={{ height: 7, background: 'var(--border)', borderRadius: 4, overflow: 'visible', position: 'relative' }}>
                        <div style={{ width: `${val}%`, height: '100%', background: DCOLS[i], borderRadius: 4, transition: 'width .4s' }} />
                        {hVal != null && (
                          <div style={{ position: 'absolute', top: -2, left: `${hVal}%`, transform: 'translateX(-50%)', width: 2, height: 11, background: 'var(--ink-2)', opacity: .4, borderRadius: 1 }} />
                        )}
                      </div>
                      {hoveredDim === d && experience && (
                        <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', zIndex: 10, background: 'var(--ink)', color: 'white', fontSize: 12.5, padding: '12px 14px', borderRadius: 8, marginTop: 6, lineHeight: 1.65, boxShadow: '0 6px 20px rgba(0,0,0,.2)', pointerEvents: 'none' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                            <strong style={{ color: DCOLS[i] }}>{d}</strong>
                            <span style={{ color: DCOLS[i], fontWeight: 700, fontSize: 14 }}>{val}</span>
                          </div>
                          {experience}
                        </div>
                      )}
                    </div>
                  )
                })}
                {profile.home && (
                  <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.5rem' }}>
                    Bar line = your home country ({profile.home})
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Empty state */
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--ink-3)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🪑</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '.5rem' }}>Where are you thinking?</div>
          <div style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 360, margin: '0 auto' }}>
            Search any city above to see its stool — package, teaching environment, and place, scored for your background.
          </div>
          <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['Dubai', 'Bangkok', 'Tokyo', 'Singapore', 'Tbilisi', 'Riyadh'].map(c => (
              <button key={c} onClick={() => handleCityChange(c)}
                style={{ padding: '6px 14px', border: '1px solid var(--border-2)', borderRadius: 20, fontSize: 13, background: 'white', cursor: 'pointer', color: 'var(--ink-2)' }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

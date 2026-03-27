import { useState, useMemo } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DCOLS } from '../../data/hofstede.js'
import { CTRY_DATA, CITIES } from '../../data/geo.js'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import { PLACE_ATTRS, ATTR_CATEGORIES } from '../../data/places.js'
import StoolViz from '../StoolViz.jsx'

const DIM_DESCRIPTIONS = {
  'Power Distance':        'How much people accept unequal distribution of power. High = hierarchical workplaces where authority is rarely questioned. Low = flat structures where staff challenge leadership.',
  'Individualism':         'Whether people act as individuals or as part of a group. High = personal achievement and autonomy valued. Low = group loyalty, consensus, and collective harmony come first.',
  'Masculinity':           'Preference for competition vs cooperation. High = assertiveness, achievement, and results-orientation dominate. Low = collaboration, work-life balance, and caring for others are prioritised.',
  'Uncertainty Avoidance': 'Tolerance for ambiguity. High = strong need for rules, structure, and predictability. Low = comfortable with improvisation, flexibility, and not knowing what comes next.',
  'Long-term Orientation': 'Focus on the future vs the present. High = thrift, perseverance, and investing for the long run. Low = respect for tradition, short-term results, and fulfilling social obligations.',
  'Indulgence':            'How much people try to control impulses and desires. High = enjoy life, leisure, and having fun. Low = restraint, regulation of gratification, and strict social norms.',
}

const LEG_COLS = { package: '#1D9E75', school: '#BA7517', place: '#534AB7' }

// Score a destination's stool legs from geo/hofstede data + personalised place prefs
// focusCity  — the city name (key for PLACE_ATTRS)
// focusCountry — the country name (key for CTRY_DATA / HOF)
function scoreLegs(focusCity, focusCountry, homeCountry, placePrefs) {
  const dest  = CTRY_DATA[focusCountry]
  const hDest = HOF[focusCountry]
  const hHome = HOF[homeCountry]
  if (!dest) return null

  // ── Package leg
  const salScore = dest.medSal < 3000 ? 3 : dest.medSal < 4500 ? 5 : dest.medSal < 6000 ? 6 : dest.medSal < 8000 ? 7.5 : 9
  const pkgBonus = (dest.housingRate > 70 ? 1.2 : dest.housingRate > 50 ? 0.6 : 0)
                 + (dest.taxFree ? 1.2 : 0)
                 + (dest.flightRate > 75 ? 0.4 : 0)
  const pkgScore = Math.min(10, Math.round((salScore + pkgBonus) * 10) / 10)

  // ── School leg (culture/environment proxy from Hofstede)
  let schScore = 5
  if (hDest) {
    const pdiS = hDest[0] > 80 ? 3 : hDest[0] > 60 ? 4 : hDest[0] > 40 ? 5 : 6
    const masS = hDest[2] > 80 ? 3 : hDest[2] > 60 ? 4 : hDest[2] > 40 ? 5 : 6
    const uaiS = hDest[3] > 80 ? 4 : hDest[3] > 60 ? 5 : hDest[3] > 40 ? 5 : 6
    schScore = Math.min(9, Math.round((pdiS + masS + uaiS) / 3))
  }

  // ── Place leg base (quality-of-life metrics)
  const idvGap = hHome && hDest ? Math.abs(hHome[1] - hDest[1]) : 0
  const plcBase = Math.min(10, Math.max(1,
    ((dest.ql / 20) + (dest.safety / 25) + (dest.expat / 25)) / 3 * 10
    + (idvGap > 50 ? -0.8 : idvGap > 30 ? -0.4 : 0)
  ))

  // ── Apply personalised preference modifiers (keyed by CITY, not country)
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
    sch: schScore,
    plc: Math.round(plcScore * 10) / 10,
  }
}

const ALL_CITIES = Object.keys(PLACE_ATTRS)

export default function MyMove() {
  const { profile, editProfile, updateProfile } = useProfile()
  const [hoveredDim, setHoveredDim] = useState(null)
  const [search, setSearch]         = useState('')
  const [explored, setExplored]     = useState(null)

  const placePrefs = profile.placePrefs || {}

  const setPref = (attrId, val) => {
    const cur  = placePrefs[attrId] || 0
    const next = cur === val ? 0 : val   // toggle off if same
    updateProfile({ placePrefs: { ...placePrefs, [attrId]: next } })
  }

  // Determine which city / country is in focus
  const focusCity    = explored || profile.dcity || null
  const focusCountry = focusCity
    ? (CITIES[focusCity]?.country || profile.dc || null)
    : null

  const scores = useMemo(
    () => (focusCity && focusCountry)
      ? scoreLegs(focusCity, focusCountry, profile.home, placePrefs)
      : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusCity, focusCountry, profile.home, JSON.stringify(placePrefs)]
  )

  const cityAttrs   = PLACE_ATTRS[focusCity] || []
  const hDest       = HOF[focusCountry]
  const hHome       = HOF[profile.home]

  const prefsSetCount = Object.values(placePrefs).filter(v => v !== 0).length

  const stoolLegs = scores ? [
    { label: 'Package', score: scores.pkg, color: LEG_COLS.package,
      sublabel: `~$${(CTRY_DATA[focusCountry]?.medSal || 0).toLocaleString()}/mo` },
    { label: 'School',  score: scores.sch, color: LEG_COLS.school },
    { label: 'Place',   score: scores.plc, color: LEG_COLS.place,
      sublabel: prefsSetCount > 0 ? `${prefsSetCount} prefs set` : 'set preferences →' },
  ] : []

  // Search results
  const results = search.length > 1
    ? ALL_CITIES.filter(c => c.toLowerCase().includes(search.toLowerCase())).slice(0, 8)
    : []

  return (
    <div className="tp active">

      {/* Header */}
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.25rem' }}>
        Imagine your move
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
        Search a city to explore its stool. Tell us what matters to you — the Place leg updates in real time.
      </div>

      {/* City search */}
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
              <div
                key={city}
                onClick={() => { setExplored(city); setSearch('') }}
                style={{ padding: '10px 14px', cursor: 'pointer', fontSize: 14, borderBottom: '1px solid var(--border)', transition: 'background .1s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#f5f4f1'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}
              >
                {city}
                <span style={{ fontSize: 11, color: 'var(--ink-4)', marginLeft: 8 }}>
                  {CITIES[city]?.country}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {focusCity ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>

          {/* Left: Stool + quick stats */}
          <div>
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '.25rem' }}>
                {focusCity}
              </div>
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

            {/* Quick facts */}
            {CTRY_DATA[focusCountry] && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.75rem' }}>At a glance</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.4rem .75rem' }}>
                  {[
                    ['Median salary', `$${CTRY_DATA[focusCountry].medSal?.toLocaleString()}/mo`],
                    ['Housing',       `${CTRY_DATA[focusCountry].housingRate}% incl.`],
                    ['Flights',       `${CTRY_DATA[focusCountry].flightRate}% incl.`],
                    ['Tax-free',      CTRY_DATA[focusCountry].taxFree ? 'Yes ✓' : 'No'],
                    ['Quality of life',`${CTRY_DATA[focusCountry].ql}/100`],
                    ['Safety',        `${CTRY_DATA[focusCountry].safety}/100`],
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

          {/* Right: Place preferences + Hofstede */}
          <div>

            {/* Place attributes */}
            {cityAttrs.length > 0 && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '.25rem' }}>
                  What {focusCity} is like
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '1rem' }}>
                  Mark what appeals to you or puts you off — your Place score adjusts instantly.
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                  {cityAttrs.map(attr => {
                    const pref = placePrefs[attr.id] || 0
                    return (
                      <div key={attr.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flex: 1, minWidth: 0 }}>
                          <span style={{ fontSize: 15, flexShrink: 0 }}>{attr.icon}</span>
                          <span style={{ fontSize: 13, color: pref === 1 ? '#1D9E75' : pref === -1 ? '#D85A30' : 'var(--ink-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: pref !== 0 ? 500 : 400 }}>
                            {attr.label}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                          <button
                            onClick={() => setPref(attr.id, 1)}
                            title="Love this"
                            style={{ width: 30, height: 26, borderRadius: 6, border: '1.5px solid', borderColor: pref === 1 ? '#1D9E75' : 'var(--border-2)', background: pref === 1 ? '#E1F5EE' : 'white', cursor: 'pointer', fontSize: 12 }}
                          >❤️</button>
                          <button
                            onClick={() => setPref(attr.id, -1)}
                            title="Not for me"
                            style={{ width: 30, height: 26, borderRadius: 6, border: '1.5px solid', borderColor: pref === -1 ? '#D85A30' : 'var(--border-2)', background: pref === -1 ? '#FAECE7' : 'white', cursor: 'pointer', fontSize: 12 }}
                          >✗</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Cultural dimensions */}
            {hDest && (
              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem' }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: '1rem' }}>
                  Cultural dimensions
                </div>
                {DLBLS.map((d, i) => {
                  const val  = hDest[i]
                  const hVal = hHome?.[i]
                  return (
                    <div
                      key={d}
                      style={{ marginBottom: '.75rem', position: 'relative', cursor: 'pointer' }}
                      onMouseEnter={() => setHoveredDim(d)}
                      onMouseLeave={() => setHoveredDim(null)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
                        <span style={{ fontWeight: 500 }}>{d}</span>
                        <span style={{ color: DCOLS[i], fontWeight: 600 }}>{val}</span>
                      </div>
                      <div style={{ height: 6, background: 'var(--border)', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                        <div style={{ width: `${val}%`, height: '100%', background: DCOLS[i], borderRadius: 4, transition: 'width .4s' }} />
                        {hVal != null && (
                          <div style={{ position: 'absolute', top: 0, left: `${hVal}%`, transform: 'translateX(-50%)', width: 2, height: '100%', background: 'var(--ink-2)', opacity: .5 }} />
                        )}
                      </div>
                      {hoveredDim === d && DIM_DESCRIPTIONS[d] && (
                        <div style={{ position: 'absolute', left: 0, top: '100%', zIndex: 10, background: 'var(--ink)', color: 'white', fontSize: 12, padding: '10px 13px', borderRadius: 8, marginTop: 6, lineHeight: 1.55, maxWidth: 300, boxShadow: '0 4px 16px rgba(0,0,0,.18)', pointerEvents: 'none' }}>
                          <strong style={{ color: DCOLS[i], display: 'block', marginBottom: 4 }}>{d}</strong>
                          {DIM_DESCRIPTIONS[d]}
                        </div>
                      )}
                    </div>
                  )
                })}
                {profile.home && (
                  <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.5rem' }}>
                    Vertical line = your home country ({profile.home})
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* No city selected */
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--ink-3)' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🪑</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '.5rem' }}>
            Where are you thinking?
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 360, margin: '0 auto' }}>
            Search any city above to see its stool — how the compensation, school culture, and place stack up for you personally.
          </div>
          <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            {['Dubai', 'Bangkok', 'Tokyo', 'Singapore', 'Tbilisi', 'Riyadh'].map(c => (
              <button
                key={c}
                onClick={() => setExplored(c)}
                style={{ padding: '6px 14px', border: '1px solid var(--border-2)', borderRadius: 20, fontSize: 13, background: 'white', cursor: 'pointer', color: 'var(--ink-2)' }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

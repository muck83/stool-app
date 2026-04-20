import { useState, useMemo, useEffect } from 'react'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import { REGION_MAP } from '../../data/geo.js'
import { resolveSchoolName, normaliseForSearch } from '../../data/schoolAliases.js'
import SchoolAutocomplete from '../SchoolAutocomplete.jsx'
import { useProfile } from '../../context/ProfileContext.jsx'
import {
  CURRICULUM_OPTS, HOUSING_OPTS, FLIGHTS_OPTS, TAX_OPTS,
  HOUSING_QUALITY_OPTS, ALLOWANCE_COVERAGE_OPTS,
  normaliseHousing, normaliseFlights, normaliseTax, normaliseCurriculum,
} from '../../data/options.js'
import { fetchSalarySubmissions, insertSalarySubmission, supabase, supabaseStatus } from '../../lib/supabase.js'
import { isRowGated, gatedSummary } from '../../lib/pd/applySalaryGate.js'
import { allBadgeModuleIds } from '../../lib/pd/progress.js'
import { MODULES } from '../../lib/slugMap.js'
import SalaryGateCard from '../learn/SalaryGateCard.jsx'

// ── Daily rotating insights computed from live salary data ───────────────
function buildInsights(db) {
  const med = arr => {
    if (!arr.length) return null
    const s = [...arr].sort((a, b) => a - b)
    return s[Math.floor(s.length / 2)]
  }
  const insights = []

  // IB vs British curriculum
  const ibM = med(db.filter(r => r.curr === 'IB' && r.usd > 0).map(r => r.usd))
  const brM = med(db.filter(r => r.curr === 'British' && r.usd > 0).map(r => r.usd))
  if (ibM && brM && Math.abs(ibM - brM) > 200) {
    const higher = ibM > brM ? 'IB' : 'British'
    const lowerC = ibM > brM ? 'British' : 'IB'
    const pct = Math.round(Math.abs(ibM - brM) / Math.min(ibM, brM) * 100)
    insights.push({
      emoji: '📚',
      headline: `${higher} curriculum teachers earn ${pct}% more than ${lowerC} on our data`,
      detail: `Median monthly: IB $${ibM.toLocaleString()}, British $${brM.toLocaleString()}. That $${Math.abs(ibM - brM).toLocaleString()}/mo gap adds up to over $${(Math.abs(ibM - brM) * 12).toLocaleString()} a year.`,
    })
  }

  // Housing provided vs not
  const hProvM = med(db.filter(r => r.housing === 'Provided' && r.usd > 0).map(r => r.usd))
  const hNoneM = med(db.filter(r => r.housing === 'None' && r.usd > 0).map(r => r.usd))
  if (hProvM && hNoneM && Math.abs(hNoneM - hProvM) > 100) {
    const diff = hNoneM - hProvM
    insights.push({
      emoji: '🏠',
      headline: `Schools offering free housing pay $${Math.abs(diff).toLocaleString()}/mo less in base salary`,
      detail: `Median with housing included: $${hProvM.toLocaleString()}/mo. Without: $${hNoneM.toLocaleString()}/mo. Whether the package is worth it depends entirely on local rent.`,
    })
  }

  // Top-paying countries (3+ records)
  const byC = {}
  db.forEach(r => { if (r.usd > 0 && r.country) { if (!byC[r.country]) byC[r.country] = []; byC[r.country].push(r.usd) } })
  const cMeds = Object.entries(byC)
    .filter(([, v]) => v.length >= 3)
    .map(([c, v]) => ({ c, m: med(v), n: v.length }))
    .sort((a, b) => b.m - a.m)

  if (cMeds.length >= 2) {
    const top = cMeds[0], second = cMeds[1]
    insights.push({
      emoji: '🌍',
      headline: `${top.c} has the highest median salary in our database — $${top.m.toLocaleString()}/mo`,
      detail: `Based on ${top.n} records. The next highest is ${second.c} at $${second.m.toLocaleString()}/mo. Both are take-home (after-tax) figures.`,
    })
  }

  // Flights inclusion rate
  const withFlt = db.filter(r => r.flights === 'Yes').length
  const pctFlt = Math.round(withFlt / db.length * 100)
  insights.push({
    emoji: '✈️',
    headline: `${pctFlt}% of schools in our database include annual flights`,
    detail: `${withFlt.toLocaleString()} of ${db.length.toLocaleString()} records. A family return flight can be worth $3,000–6,000 a year — always factor it into package comparisons.`,
  })

  // Highest single salary on record
  const maxRec = [...db].filter(r => r.usd > 0 && r.usd < 20000).sort((a, b) => b.usd - a.usd)[0]
  if (maxRec) {
    insights.push({
      emoji: '💰',
      headline: `The highest monthly salary in our database is $${maxRec.usd.toLocaleString()}`,
      detail: `Reported at ${maxRec.school} in ${maxRec.country} (${maxRec.curr}, ${maxRec.y}). Outlier packages like this usually combine a senior role with full housing and flights included.`,
    })
  }

  // Tax-free percentage
  const taxFree = db.filter(r => r.tax && (r.tax === '0%' || r.tax === '0' || /school pays|tax.?free|no tax/i.test(r.tax)))
  const pctTF = Math.round(taxFree.length / db.length * 100)
  if (pctTF > 5) {
    insights.push({
      emoji: '🔖',
      headline: `${pctTF}% of positions in our database are fully tax-free`,
      detail: `${taxFree.length} records report zero income tax. On $5,000/mo, moving from a 30% tax country to a tax-free one is worth roughly $1,500/mo — $18,000 a year.`,
    })
  }

  // Country spread top-to-bottom
  if (cMeds.length >= 4) {
    const top = cMeds[0], bottom = cMeds[cMeds.length - 1]
    const ratio = (top.m / bottom.m).toFixed(1)
    insights.push({
      emoji: '📊',
      headline: `International school salaries vary ${ratio}× between the highest and lowest-paying countries`,
      detail: `From $${bottom.m.toLocaleString()}/mo in ${bottom.c} to $${top.m.toLocaleString()}/mo in ${top.c} — both monthly take-home. Destination choice has an enormous career impact.`,
    })
  }

  // Senior vs classroom roles
  const tMed = med(db.filter(r => r.usd > 0 && r.role && /^teacher$/i.test(r.role.trim())).map(r => r.usd))
  const sMed = med(db.filter(r => r.usd > 0 && r.role && /(head|director|coordinator|principal|deputy)/i.test(r.role)).map(r => r.usd))
  if (tMed && sMed && sMed > tMed) {
    const pct = Math.round((sMed - tMed) / tMed * 100)
    insights.push({
      emoji: '👔',
      headline: `Senior roles earn ${pct}% more than classroom teachers in our database`,
      detail: `Median classroom teacher: $${tMed.toLocaleString()}/mo. Senior/leadership roles: $${sMed.toLocaleString()}/mo. The premium is real, but so is the extra workload.`,
    })
  }

  // Year-over-year salary trend
  const yr = new Date().getFullYear()
  const recentMed = med(db.filter(r => r.y >= yr - 1 && r.usd > 0).map(r => r.usd))
  const olderMed  = med(db.filter(r => r.y <= yr - 2 && r.y >= yr - 4 && r.usd > 0).map(r => r.usd))
  const recentN = db.filter(r => r.y >= yr - 1 && r.usd > 0).length
  const olderN  = db.filter(r => r.y <= yr - 2 && r.y >= yr - 4 && r.usd > 0).length
  if (recentMed && olderMed && recentN >= 10 && olderN >= 10) {
    const pct = Math.round((recentMed - olderMed) / olderMed * 100)
    const dir = pct >= 0 ? 'up' : 'down'
    insights.push({
      emoji: '📈',
      headline: `Median salaries are ${dir} ${Math.abs(pct)}% compared to 2–3 years ago`,
      detail: `Recent (${yr - 1}–${yr}): $${recentMed.toLocaleString()}/mo vs $${olderMed.toLocaleString()}/mo in ${yr - 4}–${yr - 2}. Based on ${recentN + olderN} records.`,
    })
  }

  // Allowance vs provided housing — which school type is more common?
  const provN = db.filter(r => r.housing === 'Provided').length
  const allowN = db.filter(r => r.housing === 'Allowance').length
  const noneN  = db.filter(r => r.housing === 'None').length
  const totalHous = provN + allowN + noneN
  if (totalHous > 20) {
    const pctNone = Math.round(noneN / totalHous * 100)
    insights.push({
      emoji: '🗝️',
      headline: `${pctNone}% of schools in our database offer no housing benefit at all`,
      detail: `${provN} provide housing directly, ${allowN} give an allowance, and ${noneN} offer nothing. In high-cost cities, that "nothing" can quietly erase a competitive salary.`,
    })
  }

  return insights.filter(Boolean)
}

function getCountryMedian(db, country) {
  const vals = db
    .filter(r => r.country.toLowerCase() === country.toLowerCase() && r.usd > 0)
    .map(r => r.usd)
    .sort((a, b) => a - b)
  if (!vals.length) return null
  return vals[Math.floor(vals.length / 2)]
}

function salaryWarning(sal, countryMedian) {
  if (!countryMedian || !sal || sal <= 0) return null
  const ratio = sal / countryMedian
  if (sal > 15000)
    return { type: 'high', msg: `$${sal.toLocaleString()}/mo is very high — are you sure this is a monthly USD figure, not annual or in local currency?` }
  if (ratio > 3.5)
    return { type: 'high', msg: `This is ${ratio.toFixed(1)}× the median for this country ($${countryMedian.toLocaleString()}/mo). Please double-check it's monthly USD, not annual or local currency.` }
  if (ratio < 0.25 && sal > 0)
    return { type: 'low', msg: `This looks very low for this country (median: $${countryMedian.toLocaleString()}/mo). Is this monthly in USD equivalent?` }
  return null
}

export default function Salaries() {
  const { profile } = useProfile()
  const [liveDB, setLiveDB] = useState(SALARY_DB_SEED)
  const [region, setRegion] = useState('')
  const [curr, setCurr] = useState('')
  const [search, setSearch] = useState('')
  const [form, setForm] = useState(() => ({
    country: profile.cc   || '',
    city:    profile.city || '',
    school:  profile.school || '',
    curr:    normaliseCurriculum(profile.curr) || '',
    role:    '',
    sal:     profile.sal  || '',
    hous:    normaliseHousing(profile.hous)   || '',
    housQuality: '',
    allowCoverage: '',
    flt:     normaliseFlights(profile.flt)    || '',
    tax:     normaliseTax(profile.tax)        || '',
    extras:  '',
    exp:     '',
  }))
  const [msg, setMsg] = useState('')
  const [newIds, setNewIds] = useState(new Set())
  const [warnAck, setWarnAck] = useState(false)
  const [dbLoading, setDbLoading] = useState(!!supabase)

  // Daily insight — seeded by day, cycleable manually
  const surpriseInsights = useMemo(() => buildInsights(liveDB), [liveDB])
  const dailyIdx = Math.floor(Date.now() / 86400000) % (surpriseInsights.length || 1)
  const [insightIdx, setInsightIdx] = useState(dailyIdx)
  const insight = surpriseInsights[insightIdx % surpriseInsights.length] || null

  // Fetch community submissions from Supabase and merge with seed data
  useEffect(() => {
    if (!supabase) return
    fetchSalarySubmissions().then(remote => {
      if (remote.length > 0) {
        // Prepend remote records; seed data stays as the historical baseline
        setLiveDB(prev => [...remote, ...prev])
      }
      setDbLoading(false)
    })
  }, [])

  const setF = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    if (k === 'sal' || k === 'country') setWarnAck(false)
  }

  const countryMedian = useMemo(
    () => getCountryMedian(liveDB, form.country),
    [liveDB, form.country]
  )
  const warning = useMemo(
    () => salaryWarning(parseFloat(form.sal) || 0, countryMedian),
    [form.sal, countryMedian]
  )

  const filtered = useMemo(() => {
    let rows = liveDB
    if (region) { const cs = REGION_MAP[region] || []; rows = rows.filter(r => cs.includes(r.country)) }
    if (curr) rows = rows.filter(r => r.curr && r.curr.toLowerCase().includes(curr.toLowerCase()))
    if (search) {
      const q = normaliseForSearch(search)
      rows = rows.filter(r =>
        normaliseForSearch(r.school + ' ' + r.city + ' ' + r.country + ' ' + r.role).includes(q)
      )
    }
    // Sort: most recent first (remote/new entries first, then by year desc)
    return [...rows].sort((a, b) => {
      // New submissions and remote entries before seed data
      const aNew = a._new || a._remote ? 1 : 0
      const bNew = b._new || b._remote ? 1 : 0
      if (aNew !== bNew) return bNew - aNew
      return (b.y || 0) - (a.y || 0)
    })
  }, [liveDB, region, curr, search])

  // Split filtered into open rows (visible) and gated groups (locked by country)
  const { openRows, gatedGroups } = useMemo(() => {
    const openRows = []
    const gatedMap = {}
    for (const row of filtered) {
      if (isRowGated(row, unlockedCountries)) {
        const c = row.country
        if (!gatedMap[c]) gatedMap[c] = []
        gatedMap[c].push(row)
      } else {
        openRows.push(row)
      }
    }
    const gatedGroups = Object.entries(gatedMap).map(([country, rows]) => {
      const mod = MODULES.find(m => m.country.toLowerCase() === country.toLowerCase())
      return {
        country,
        summary: gatedSummary(rows),
        moduleSlug: mod?.slug || country.toLowerCase().replace(/\s+/g, '-'),
        color: mod?.color || '#A35E08',
      }
    })
    return { openRows, gatedGroups }
  }, [filtered, unlockedCountries])

  const medianUSD = useMemo(() => {
    const vals = liveDB.map(r => r.usd).filter(v => v > 0).sort((a, b) => a - b)
    return vals[Math.floor(vals.length / 2)] || 0
  }, [liveDB])

  const submit = () => {
    const { country, city, school, sal } = form
    const missing = []
    if (!country) missing.push('country')
    if (!city) missing.push('city')
    if (!school) missing.push('school name')
    if (!parseFloat(sal)) missing.push('monthly salary')
    if (missing.length) { setMsg(`Please fill in: ${missing.join(', ')}.`); return }
    // Block submission if there's an unacknowledged warning
    if (warning && !warnAck) {
      setMsg('⚠ Please confirm the salary note above before submitting.')
      return
    }

    const id = Date.now()
    const rec = {
      y: new Date().getFullYear(), country, city,
      // Resolve to canonical school name at submission time
      school: resolveSchoolName(school.trim()),
      curr: form.curr || 'Other', role: form.role || 'Teacher',
      usd: Math.round(parseFloat(sal)),
      exp_bracket: form.exp || null,
      housing: form.hous || 'Not stated',
      housingQuality: form.housQuality || '',
      allowanceCoverage: form.allowCoverage || '',
      flights: form.flt || 'Not stated',
      tax: form.tax || 'Not stated', _new: true, _id: id,
    }
    // Update local state immediately so it feels instant
    setLiveDB(prev => [rec, ...prev])
    setNewIds(prev => new Set([...prev, id]))
    setForm({
      country: profile.cc   || '',
      city:    profile.city || '',
      school:  profile.school || '',
      curr:    normaliseCurriculum(profile.curr) || '',
      role:    '',
      sal:     '',
      hous:    normaliseHousing(profile.hous) || '',
      housQuality: '',
      allowCoverage: '',
      flt:     normaliseFlights(profile.flt)  || '',
      tax:     normaliseTax(profile.tax)      || '',
      extras:  '',
      exp:     '',
    })
    setTimeout(() => setNewIds(prev => { const n = new Set(prev); n.delete(id); return n }), 8000)

    // Persist to Supabase and report result
    insertSalarySubmission(rec).then(result => {
      if (result?.error) {
        if (result.error === 'not-configured') {
          setMsg(`✓ Saved locally — Supabase not connected (check Vercel env vars).`)
        } else {
          setMsg(`⚠ Saved locally but Supabase error: ${result.error}`)
        }
      } else {
        setMsg(`✓ Saved: ${school}, ${city}, ${country} — $${rec.usd.toLocaleString()}/mo. Now ${liveDB.length + 1} total records.`)
      }
    })
  }

  const currClass = c => c === 'IB' ? 'pt' : c === 'British' ? 'pp' : 'pb2'

  return (
    <div className="tp active">
      {/* Stats row */}
      <div className="g4" style={{ marginBottom: '1.25rem' }}>
        <div className="chip"><div className="chl">Total records</div><div className="chv">{liveDB.length}</div><div className="chs">Crowdsourced, anonymised</div></div>
        <div className="chip"><div className="chl">Countries</div><div className="chv">{new Set(liveDB.map(r => r.country)).size}</div><div className="chs">Represented</div></div>
        <div className="chip"><div className="chl">Median salary</div><div className="chv">${Math.round(medianUSD).toLocaleString()}</div><div className="chs">USD monthly</div></div>
        <div className="chip"><div className="chl">With full package</div><div className="chv">{Math.round(liveDB.filter(r => r.flights === 'Yes' && r.housing !== 'None').length / liveDB.length * 100)}%</div><div className="chs">Housing + flights included</div></div>
      </div>

      {/* Daily insight card */}
      {insight && (
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)',
          borderRadius: 'var(--rl)',
          padding: '1rem 1.25rem',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <div style={{ fontSize: 32, lineHeight: 1, flexShrink: 0 }}>{insight.emoji}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em',
              color: '#7EC8B0', marginBottom: '.3rem',
            }}>
              Did you know · updates daily
            </div>
            <div style={{
              fontSize: 15, fontWeight: 600, color: '#FFFFFF',
              lineHeight: 1.4, marginBottom: '.3rem',
            }}>
              {insight.headline}
            </div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.65)', lineHeight: 1.55 }}>
              {insight.detail}
            </div>
          </div>
          <button
            onClick={() => setInsightIdx(i => (i + 1) % surpriseInsights.length)}
            title="Next insight"
            style={{
              flexShrink: 0,
              background: 'rgba(255,255,255,.1)',
              border: '1px solid rgba(255,255,255,.2)',
              borderRadius: 8,
              color: 'rgba(255,255,255,.7)',
              padding: '6px 12px',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background .15s',
            }}
          >
            next →
          </button>
        </div>
      )}

      {/* Table + Contribute side by side */}
      <div className="sal-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 300px', gap: '1rem', alignItems: 'start' }}>

        {/* Left — salary database */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', marginBottom: '.25rem' }}>
            <div className="ct" style={{ margin: 0 }}>
              Live salary database — {liveDB.length} records
              {dbLoading && <span style={{ fontSize: 11, fontWeight: 400, color: 'var(--ink-4)', marginLeft: 8 }}>loading community data…</span>}
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 10, fontWeight: 500, background: '#F3F4F6', color: 'var(--ink-3)', padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap' }}>
                Community-submitted · Unverified
              </span>
              <span style={{
                fontSize: 10, fontWeight: 500, padding: '2px 8px', borderRadius: 10, whiteSpace: 'nowrap',
                background: supabaseStatus === 'connected' ? '#DCF0E6' : supabaseStatus === 'misconfigured' ? '#FEF3C7' : '#F3F4F6',
                color:      supabaseStatus === 'connected' ? 'var(--teal-dark)' : supabaseStatus === 'misconfigured' ? '#92400E' : 'var(--ink-4)',
              }}>
                {supabaseStatus === 'connected' ? '● Live DB' : supabaseStatus === 'misconfigured' ? '⚠ DB misconfigured' : '○ Seed data only'}
              </span>
            </div>
          </div>
          <div className="cs">Self-reported by international educators. Anonymised and unverified — treat as a directional guide, not a definitive benchmark.</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '1rem', marginTop: '.75rem' }}>
            <select value={region} onChange={e => setRegion(e.target.value)} style={{ padding: '7px 10px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 13, background: 'white', color: 'var(--ink)' }}>
              <option value="">All regions</option>
              {['SE Asia','East Asia','Middle East','Europe','Americas'].map(r => <option key={r}>{r}</option>)}
            </select>
            <select value={curr} onChange={e => setCurr(e.target.value)} style={{ padding: '7px 10px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 13, background: 'white', color: 'var(--ink)' }}>
              <option value="">All curricula</option>
              {['IB','British','US'].map(c => <option key={c}>{c}</option>)}
            </select>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search school or city…" style={{ padding: '7px 10px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 13, flex: 1, minWidth: 140 }} />
          </div>
          <div className="dt-scroll">
            <table className="data-table">
              <thead><tr><th>Year</th><th>Country</th><th>City</th><th>School</th><th>Curriculum</th><th>Role</th><th>USD/mo</th><th>Housing</th><th>Flights</th><th>Tax</th></tr></thead>
              <tbody>
                {openRows.map((r, i) => (
                  <tr key={r._id || i} style={newIds.has(r._id) ? { background: '#DCF0E6', animation: 'rowFlash 2s ease forwards' } : undefined}>
                    <td>{r.y}{newIds.has(r._id) && <span className="pill pt" style={{ fontSize: 10, padding: '1px 7px' }}>NEW</span>}</td>
                    <td>{r.country}</td><td>{r.city}</td>
                    <td style={{ fontWeight: 500 }}>{r.school}</td>
                    <td><span className={`pill ${currClass(r.curr)}`}>{r.curr}</span></td>
                    <td>{r.role}</td>
                    <td style={{ color: 'var(--teal-dark)', fontWeight: 500 }}>${r.usd.toLocaleString()}</td>
                    <td>
                      {r.housing}
                      {r.housingQuality && <span style={{ display: 'block', fontSize: 10, color: r.housingQuality === 'poor' || r.housingQuality === 'shared' ? 'var(--coral)' : 'var(--ink-4)' }}>
                        {r.housingQuality === 'great' ? 'Good quality' : r.housingQuality === 'ok' ? 'Basic/adequate' : r.housingQuality === 'shared' ? 'Shared' : r.housingQuality === 'poor' ? 'Poor' : ''}
                      </span>}
                      {r.allowanceCoverage && <span style={{ display: 'block', fontSize: 10, color: r.allowanceCoverage === '25' ? 'var(--coral)' : 'var(--ink-4)' }}>
                        Covers ~{r.allowanceCoverage}% of rent
                      </span>}
                    </td><td>{r.flights}</td><td>{r.tax}</td>
                  </tr>
                ))}
                {gatedGroups.map(({ country, summary, moduleSlug, color }) => (
                  <tr key={`gate-${country}`} style={{ background: `${color}08` }}>
                    <td colSpan={2} style={{ color: 'var(--ink-3)', fontStyle: 'italic', fontSize: 12 }}>
                      🔒 {country}
                    </td>
                    <td colSpan={4} style={{ fontSize: 12, color: 'var(--ink-3)' }}>
                      {summary.count} record{summary.count !== 1 ? 's' : ''} locked ·{' '}
                      range ${summary.minUsd.toLocaleString()}–${summary.maxUsd.toLocaleString()}/mo ·{' '}
                      <a href={`/learn/${moduleSlug}`} style={{ color, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${color}50` }}>
                        complete the {country} module to unlock →
                      </a>
                    </td>
                    <td colSpan={3} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: '.75rem' }}>
            Showing <strong>{openRows.length}</strong> of <strong>{liveDB.length}</strong> records
            {gatedGroups.length > 0 && (
              <span style={{ marginLeft: 8, color: 'var(--ink-4)' }}>
                · {gatedGroups.reduce((n, g) => n + g.summary.count, 0)} locked
                ({gatedGroups.map(g => g.country).join(', ')})
              </span>
            )}
          </div>
        </div>

        {/* Salary gate cards — one per locked country */}
        {gatedGroups.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginTop: '1rem' }}>
            {gatedGroups.map(({ country, summary, moduleSlug }) => (
              <SalaryGateCard
                key={country}
                country={country}
                percentage={0}
                threshold={80}
                moduleSlug={moduleSlug}
              />
            ))}
          </div>
        )}

        {/* Right — contribute form (single-column, sticky) */}
        <div className="card" style={{ position: 'sticky', top: '1rem' }}>
          <div className="ct" style={{ marginBottom: '.25rem' }}>Contribute your data</div>
          <div className="cs" style={{ marginBottom: '1rem' }}>Anonymised. Helps other educators make informed decisions.</div>

          <div className="fg"><label>Country</label><input value={form.country} onChange={e => setF('country', e.target.value)} placeholder="e.g. Thailand" /></div>
          <div className="fg"><label>City</label><input value={form.city} onChange={e => setF('city', e.target.value)} placeholder="e.g. Bangkok" /></div>
          <div className="fg">
            <label>School name</label>
            <SchoolAutocomplete
              value={form.school}
              onChange={v => setF('school', v)}
              onSelect={rec => {
                if (rec.city) setF('city', rec.city)
                if (rec.country && !form.country) setF('country', rec.country)
              }}
              schools={liveDB}
              country={form.country}
              placeholder="e.g. Bangkok Patana"
            />
          </div>
          <div className="fg"><label>Curriculum</label>
            <select value={form.curr} onChange={e => setF('curr', e.target.value)}>
              <option value="">Select</option>
              {CURRICULUM_OPTS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="fg"><label>Your role / subject</label><input value={form.role} onChange={e => setF('role', e.target.value)} placeholder="e.g. IB DP Mathematics" /></div>
          <div className="fg">
            <label>Years of international teaching experience</label>
            <select value={form.exp} onChange={e => setF('exp', e.target.value)}>
              <option value="">Select (optional)</option>
              <option value="0-2">0–2 years (early career)</option>
              <option value="3-6">3–6 years</option>
              <option value="7-14">7–14 years</option>
              <option value="15+">15+ years (senior)</option>
            </select>
          </div>
          <div className="fg">
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              Monthly take-home salary (USD)
              <span style={{ fontSize: 10, background: '#FEF3C7', color: '#92400E', padding: '1px 6px', borderRadius: 8, fontWeight: 500 }}>after tax</span>
            </label>
            <input type="number" value={form.sal} onChange={e => setF('sal', e.target.value)} placeholder="e.g. 4500" min={0} />
            {warning && !warnAck && (
              <div style={{ marginTop: 6, padding: '8px 10px', background: '#FEF9E7', border: '1px solid #F0C060', borderRadius: 6 }}>
                <div style={{ fontSize: 12, color: '#92400E', lineHeight: 1.5, marginBottom: 6 }}>⚠ {warning.msg}</div>
                <button type="button" onClick={() => setWarnAck(true)} style={{ fontSize: 11, fontWeight: 600, color: '#92400E', background: 'white', border: '1px solid #F0C060', borderRadius: 6, padding: '3px 10px', cursor: 'pointer' }}>
                  Yes, this is correct
                </button>
              </div>
            )}
            {warning && warnAck && <div style={{ fontSize: 11, color: 'var(--teal-dark)', marginTop: 4 }}>✓ Confirmed</div>}
          </div>
          <div className="fg"><label>Housing</label>
            <select value={form.hous} onChange={e => { setF('hous', e.target.value); setF('housQuality', ''); setF('allowCoverage', '') }}>
              <option value="">Select</option>
              {HOUSING_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          {form.hous === 'Provided' && (
            <div className="fg">
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                Housing quality
                <span style={{ fontSize: 10, background: '#DCF0E6', color: 'var(--teal-dark)', padding: '1px 6px', borderRadius: 8, fontWeight: 500 }}>this really matters</span>
              </label>
              <select value={form.housQuality} onChange={e => setF('housQuality', e.target.value)}>
                <option value="">What was it actually like?</option>
                {HOUSING_QUALITY_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          )}
          {form.hous === 'Allowance' && (
            <div className="fg">
              <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                Allowance vs actual rent
                <span style={{ fontSize: 10, background: '#DCF0E6', color: 'var(--teal-dark)', padding: '1px 6px', borderRadius: 8, fontWeight: 500 }}>this really matters</span>
              </label>
              <select value={form.allowCoverage} onChange={e => setF('allowCoverage', e.target.value)}>
                <option value="">How much of rent did it cover?</option>
                {ALLOWANCE_COVERAGE_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          )}
          <div className="fg"><label>Flights allowance</label>
            <select value={form.flt} onChange={e => setF('flt', e.target.value)}>
              <option value="">Select</option>
              {FLIGHTS_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div className="fg"><label>Tax status</label>
            <select value={form.tax} onChange={e => setF('tax', e.target.value)}>
              <option value="">Select</option>
              {TAX_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', marginTop: '.25rem' }} onClick={submit}>Submit anonymously →</button>
          {msg && <div style={{ fontSize: 12, color: msg.startsWith('✓') ? 'var(--teal-dark)' : 'var(--coral-dark)', marginTop: '.5rem' }}>{msg}</div>}
        </div>

      </div>
    </div>
  )
}

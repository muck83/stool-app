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
  }))
  const [msg, setMsg] = useState('')
  const [newIds, setNewIds] = useState(new Set())
  const [warnAck, setWarnAck] = useState(false)
  const [dbLoading, setDbLoading] = useState(!!supabase)

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
    return rows
  }, [liveDB, region, curr, search])

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
        <div className="chip"><div className="chl">Stool ratings</div><div className="chv">{liveDB.filter(r => r.pkg != null).length}</div><div className="chs">Schools rated</div></div>
      </div>

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
                background: supabaseStatus === 'connected' ? '#E1F5EE' : supabaseStatus === 'misconfigured' ? '#FEF3C7' : '#F3F4F6',
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
                {filtered.map((r, i) => (
                  <tr key={r._id || i} style={newIds.has(r._id) ? { background: '#E1F5EE', animation: 'rowFlash 2s ease forwards' } : undefined}>
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
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: '.75rem' }}>
            Showing <strong>{filtered.length}</strong> of <strong>{liveDB.length}</strong> records
          </div>
        </div>

        {/* Right — contribute form (single-column, sticky) */}
        <div className="card" style={{ position: 'sticky', top: '1rem' }}>
          <div className="ct" style={{ marginBottom: '.25rem' }}>Contribute your data</div>
          <div className="cs" style={{ marginBottom: '1rem' }}>Anonymised. Helps other educators make informed decisions.</div>

          <div className="fg"><label>Country</label><input value={form.country} onChange={e => setF('country', e.target.value)} placeholder="e.g. Thailand" /></div>
          <div className="fg"><label>City</label><input value={form.city} onChange={e => setF('city', e.target.value)} placeholder="e.g. Bangkok" /></div>
          <div className="fg">
            <label>School name</label>
            <SchoolAutocomplete value={form.school} onChange={v => setF('school', v)} schools={liveDB} country={form.country} placeholder="e.g. Bangkok Patana" />
          </div>
          <div className="fg"><label>Curriculum</label>
            <select value={form.curr} onChange={e => setF('curr', e.target.value)}>
              <option value="">Select</option>
              {CURRICULUM_OPTS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="fg"><label>Your role / subject</label><input value={form.role} onChange={e => setF('role', e.target.value)} placeholder="e.g. IB DP Mathematics" /></div>
          <div className="fg">
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              Monthly salary (USD)
              <span style={{ fontSize: 10, background: '#FEF3C7', color: '#92400E', padding: '1px 6px', borderRadius: 8, fontWeight: 500 }}>monthly only</span>
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
                <span style={{ fontSize: 10, background: '#E1F5EE', color: 'var(--teal-dark)', padding: '1px 6px', borderRadius: 8, fontWeight: 500 }}>this really matters</span>
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
                <span style={{ fontSize: 10, background: '#E1F5EE', color: 'var(--teal-dark)', padding: '1px 6px', borderRadius: 8, fontWeight: 500 }}>this really matters</span>
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

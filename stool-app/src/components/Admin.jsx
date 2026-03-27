import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD
const supabaseUrl    = import.meta.env.VITE_SUPABASE_URL
const serviceKey     = import.meta.env.VITE_SUPABASE_SERVICE_KEY

// Service role client — bypasses RLS, sees ALL records including flagged/removed
const adminSupabase = supabaseUrl && serviceKey
  ? createClient(supabaseUrl, serviceKey)
  : null

const STATUS_COLORS = {
  active:   { bg: '#E1F5EE', color: '#1D9E75' },
  verified: { bg: '#E6F1FB', color: '#185FA5' },
  flagged:  { bg: '#FEF3C7', color: '#92400E' },
  removed:  { bg: '#FAECE7', color: '#D85A30' },
}

export default function Admin() {
  const [authed, setAuthed]     = useState(false)
  const [pw, setPw]             = useState('')
  const [pwError, setPwError]   = useState(false)
  const [records, setRecords]   = useState([])
  const [loading, setLoading]   = useState(false)
  const [filter, setFilter]     = useState('all')  // all | flagged | active | removed
  const [search, setSearch]     = useState('')
  const [updating, setUpdating] = useState(null)

  const login = () => {
    if (pw === ADMIN_PASSWORD) { setAuthed(true); setPwError(false) }
    else { setPwError(true) }
  }

  const load = async () => {
    if (!adminSupabase) return
    setLoading(true)
    const { data, error } = await adminSupabase
      .from('salary_submissions')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error) setRecords(data || [])
    setLoading(false)
  }

  useEffect(() => { if (authed) load() }, [authed])

  const setStatus = async (id, status) => {
    setUpdating(id)
    await adminSupabase.from('salary_submissions').update({ status }).eq('id', id)
    setRecords(prev => prev.map(r => r.id === id ? { ...r, status } : r))
    setUpdating(null)
  }

  const filtered = records.filter(r => {
    if (filter !== 'all' && r.status !== filter) return false
    if (search) {
      const q = search.toLowerCase()
      return (r.school + r.country + r.city + r.ip_address).toLowerCase().includes(q)
    }
    return true
  })

  const counts = {
    all:     records.length,
    active:  records.filter(r => r.status === 'active').length,
    flagged: records.filter(r => r.status === 'flagged').length,
    removed: records.filter(r => r.status === 'removed').length,
    verified:records.filter(r => r.status === 'verified').length,
  }

  // ── IP grouping for gaming overview
  const ipGroups = records.reduce((acc, r) => {
    if (!r.ip_address) return acc
    acc[r.ip_address] = (acc[r.ip_address] || 0) + 1
    return acc
  }, {})
  const suspiciousIPs = Object.entries(ipGroups).filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1])

  if (!ADMIN_PASSWORD || !adminSupabase) return (
    <div style={{ padding: '2rem', color: '#D85A30' }}>
      Admin not configured. Add <code>VITE_ADMIN_PASSWORD</code> and <code>VITE_SUPABASE_SERVICE_KEY</code> to Vercel env vars.
    </div>
  )

  if (!authed) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F7F6F3' }}>
      <div style={{ background: 'white', borderRadius: 12, padding: '2rem', width: 320, boxShadow: '0 4px 24px rgba(0,0,0,.08)' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', marginBottom: '.25rem' }}>stool admin</div>
        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: '1.5rem' }}>Moderation dashboard</div>
        <input
          type="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          placeholder="Admin password"
          autoFocus
          style={{ width: '100%', padding: '10px 12px', border: `1px solid ${pwError ? '#D85A30' : 'var(--border-2)'}`, borderRadius: 'var(--r)', fontSize: 14, marginBottom: 8, boxSizing: 'border-box' }}
        />
        {pwError && <div style={{ fontSize: 12, color: '#D85A30', marginBottom: 8 }}>Wrong password</div>}
        <button onClick={login} style={{ width: '100%', padding: '10px', background: 'var(--ink)', color: 'white', border: 'none', borderRadius: 'var(--r)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
          Sign in →
        </button>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#F7F6F3', padding: '1.5rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem' }}>stool admin</div>
            <div style={{ fontSize: 12, color: 'var(--ink-4)' }}>Salary submission moderation</div>
          </div>
          <button onClick={load} style={{ fontSize: 12, padding: '6px 14px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', background: 'white', cursor: 'pointer' }}>
            {loading ? 'Loading…' : '↻ Refresh'}
          </button>
        </div>

        {/* Stats chips */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '.75rem', marginBottom: '1.25rem' }}>
          {[['Total', counts.all, '#1a1917'], ['Active', counts.active, '#1D9E75'], ['Flagged', counts.flagged, '#92400E'], ['Verified', counts.verified, '#185FA5'], ['Removed', counts.removed, '#D85A30']].map(([l, n, c]) => (
            <div key={l} style={{ background: 'white', borderRadius: 8, padding: '.875rem 1rem', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 4 }}>{l}</div>
              <div style={{ fontSize: '1.75rem', fontWeight: 300, color: c }}>{n}</div>
            </div>
          ))}
        </div>

        {/* Suspicious IPs */}
        {suspiciousIPs.length > 0 && (
          <div style={{ background: '#FEF3C7', border: '1px solid #F0C060', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#92400E', marginBottom: '.5rem' }}>⚠ IPs with 3+ submissions</div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {suspiciousIPs.map(([ip, count]) => (
                <span key={ip} style={{ fontSize: 12, color: '#92400E', background: 'white', padding: '2px 8px', borderRadius: 6, border: '1px solid #F0C060' }}>
                  {ip} — {count} records
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Filters + search */}
        <div style={{ display: 'flex', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
          {['all', 'active', 'flagged', 'verified', 'removed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{ fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 20, border: '1px solid var(--border-2)', cursor: 'pointer', background: filter === f ? 'var(--ink)' : 'white', color: filter === f ? 'white' : 'var(--ink-3)', textTransform: 'capitalize' }}
            >
              {f} {f !== 'all' && `(${counts[f]})`}
            </button>
          ))}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search school, country, IP…"
            style={{ padding: '5px 12px', border: '1px solid var(--border-2)', borderRadius: 20, fontSize: 12, flex: 1, minWidth: 200 }}
          />
        </div>

        {/* Records table */}
        <div style={{ background: 'white', borderRadius: 8, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr style={{ background: '#F7F6F3' }}>
                  {['Date', 'Country', 'City', 'School', 'Curr', 'Role', 'USD/mo', 'Housing', 'Flights', 'Tax', 'IP Address', 'Flag reason', 'Status', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '8px 12px', textAlign: 'left', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => {
                  const sc = STATUS_COLORS[r.status] || STATUS_COLORS.active
                  return (
                    <tr key={r.id} style={{ borderBottom: '1px solid var(--border)', opacity: r.status === 'removed' ? 0.5 : 1 }}>
                      <td style={{ padding: '7px 12px', whiteSpace: 'nowrap', color: 'var(--ink-4)' }}>{new Date(r.created_at).toLocaleDateString()}</td>
                      <td style={{ padding: '7px 12px' }}>{r.country}</td>
                      <td style={{ padding: '7px 12px' }}>{r.city}</td>
                      <td style={{ padding: '7px 12px', fontWeight: 500, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.school}</td>
                      <td style={{ padding: '7px 12px' }}>{r.curr}</td>
                      <td style={{ padding: '7px 12px', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.role}</td>
                      <td style={{ padding: '7px 12px', fontWeight: 500, color: '#1D9E75' }}>${r.usd?.toLocaleString()}</td>
                      <td style={{ padding: '7px 12px' }}>{r.housing}</td>
                      <td style={{ padding: '7px 12px' }}>{r.flights}</td>
                      <td style={{ padding: '7px 12px' }}>{r.tax}</td>
                      <td style={{ padding: '7px 12px', fontFamily: 'monospace', fontSize: 11, color: r.flagged ? '#92400E' : 'var(--ink-4)' }}>{r.ip_address || '—'}</td>
                      <td style={{ padding: '7px 12px', color: '#92400E', fontSize: 11, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.flag_reason || '—'}</td>
                      <td style={{ padding: '7px 12px' }}>
                        <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 10, background: sc.bg, color: sc.color, textTransform: 'capitalize' }}>
                          {r.status}
                        </span>
                      </td>
                      <td style={{ padding: '7px 12px', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'flex', gap: 4 }}>
                          {r.status !== 'verified' && (
                            <button onClick={() => setStatus(r.id, 'verified')} disabled={updating === r.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid #185FA5', color: '#185FA5', background: 'white', cursor: 'pointer' }}>
                              ✓ Verify
                            </button>
                          )}
                          {r.status !== 'flagged' && (
                            <button onClick={() => setStatus(r.id, 'flagged')} disabled={updating === r.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid #92400E', color: '#92400E', background: 'white', cursor: 'pointer' }}>
                              ⚑ Flag
                            </button>
                          )}
                          {r.status !== 'removed' && (
                            <button onClick={() => setStatus(r.id, 'removed')} disabled={updating === r.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid #D85A30', color: '#D85A30', background: 'white', cursor: 'pointer' }}>
                              ✕ Remove
                            </button>
                          )}
                          {r.status === 'removed' && (
                            <button onClick={() => setStatus(r.id, 'active')} disabled={updating === r.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid var(--border-2)', color: 'var(--ink-3)', background: 'white', cursor: 'pointer' }}>
                              ↩ Restore
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
                {filtered.length === 0 && (
                  <tr><td colSpan={14} style={{ padding: '2rem', textAlign: 'center', color: 'var(--ink-4)' }}>{loading ? 'Loading…' : 'No records match this filter.'}</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.75rem' }}>Showing {filtered.length} of {records.length} records</div>
      </div>
    </div>
  )
}

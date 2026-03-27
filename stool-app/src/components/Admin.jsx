import { Fragment, useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const serviceKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY

const adminSupabase = supabaseUrl && serviceKey
  ? createClient(supabaseUrl, serviceKey)
  : null

const STATUS_COLORS = {
  active: { bg: '#E1F5EE', color: '#1D9E75' },
  verified: { bg: '#E6F1FB', color: '#185FA5' },
  flagged: { bg: '#FEF3C7', color: '#92400E' },
  removed: { bg: '#FAECE7', color: '#D85A30' },
}

const SCHOOL_DIM_LABELS = { q1: 'Leadership', q2: 'Honesty', q3: 'Workload', q4: 'Autonomy', q5: 'Colleagues', q6: 'Mission', q7: 'Overall' }
const DIAG_DIM_LABELS = { q1: 'Feedback', q2: 'Voice', q3: 'Belonging', q4: 'Silence', q5: 'Workload', q6: 'Transparency', q7: 'Friction', q8: 'Outlook' }

function scoreColor(score) {
  if (score >= 8) return '#1D9E75'
  if (score >= 6) return '#BA7517'
  if (score >= 4) return '#D85A30'
  return '#A32D2D'
}

function statusStyle(status) {
  return STATUS_COLORS[status] || STATUS_COLORS.active
}

function formatDate(value) {
  return value ? new Date(value).toLocaleDateString() : '-'
}

function titleize(value) {
  return value ? String(value).replace(/_/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()) : '-'
}

function StatGrid({ items, columns = 4 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '.75rem', marginBottom: '1.25rem' }}>
      {items.map(([label, value, color]) => (
        <div key={label} style={{ background: 'white', borderRadius: 8, padding: '.875rem 1rem', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', marginBottom: 4 }}>{label}</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 300, color }}>{value}</div>
        </div>
      ))}
    </div>
  )
}

function ErrorPanel({ error, tableName }) {
  if (!error) return null
  return (
    <div style={{ background: '#FEF3C7', border: '1px solid #F0C060', borderRadius: 8, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: '#92400E', marginBottom: '.35rem' }}>{tableName} is not ready yet</div>
      <div style={{ fontSize: 12.5, color: '#92400E', lineHeight: 1.6 }}>
        {error}. If this table has not been created yet, run <code>supabase-schema-v4.sql</code> in Supabase and refresh.
      </div>
    </div>
  )
}

function StatusPill({ status }) {
  const sc = statusStyle(status)
  return (
    <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 10, background: sc.bg, color: sc.color, textTransform: 'capitalize' }}>
      {status}
    </span>
  )
}

function ActionButtons({ record, updating, onSetStatus }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {record.status !== 'verified' && (
        <button onClick={() => onSetStatus(record.id, 'verified')} disabled={updating === record.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid #185FA5', color: '#185FA5', background: 'white', cursor: 'pointer' }}>Verify</button>
      )}
      {record.status !== 'flagged' && (
        <button onClick={() => onSetStatus(record.id, 'flagged')} disabled={updating === record.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid #92400E', color: '#92400E', background: 'white', cursor: 'pointer' }}>Flag</button>
      )}
      {record.status !== 'removed' && (
        <button onClick={() => onSetStatus(record.id, 'removed')} disabled={updating === record.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid #D85A30', color: '#D85A30', background: 'white', cursor: 'pointer' }}>Remove</button>
      )}
      {record.status === 'removed' && (
        <button onClick={() => onSetStatus(record.id, 'active')} disabled={updating === record.id} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid var(--border-2)', color: 'var(--ink-3)', background: 'white', cursor: 'pointer' }}>Restore</button>
      )}
    </div>
  )
}

function useAdminTable(tableName) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [updating, setUpdating] = useState(null)

  const load = async () => {
    if (!adminSupabase) return
    setLoading(true)
    const { data, error: loadError } = await adminSupabase.from(tableName).select('*').order('created_at', { ascending: false })
    if (loadError) setError(loadError.message)
    else {
      setError('')
      setRecords(data || [])
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [tableName])

  const setStatus = async (id, status) => {
    setUpdating(id)
    const { error: updateError } = await adminSupabase.from(tableName).update({ status }).eq('id', id)
    if (!updateError) setRecords((prev) => prev.map((record) => (record.id === id ? { ...record, status } : record)))
    setUpdating(null)
  }

  return { records, loading, error, updating, load, setStatus }
}

function SchoolReviewsPanel() {
  const { records: reviews, loading, error, updating, load, setStatus } = useAdminTable('school_reviews')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(null)

  const filtered = reviews.filter((review) => {
    if (filter !== 'all' && review.status !== filter) return false
    if (!search) return true
    return `${review.school || ''} ${review.country || ''}`.toLowerCase().includes(search.toLowerCase())
  })

  const schoolGroups = reviews.reduce((acc, review) => {
    if (!acc[review.school]) acc[review.school] = []
    acc[review.school].push(review)
    return acc
  }, {})

  const counts = {
    all: reviews.length,
    active: reviews.filter((review) => review.status === 'active').length,
    flagged: reviews.filter((review) => review.status === 'flagged').length,
    removed: reviews.filter((review) => review.status === 'removed').length,
  }

  const avgScore = (review) => {
    const scores = Object.values(review.answers || {}).map((value) => value?.score).filter((value) => value != null)
    return scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10 : null
  }

  return (
    <div>
      <ErrorPanel error={error} tableName="School reviews" />
      <StatGrid items={[['Total reviews', counts.all, '#1a1917'], ['Active', counts.active, '#1D9E75'], ['Flagged', counts.flagged, '#92400E'], ['Schools covered', Object.keys(schoolGroups).length, '#534AB7']]} />
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
        {['all', 'active', 'flagged', 'removed'].map((value) => (
          <button key={value} onClick={() => setFilter(value)} style={{ fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 20, border: '1px solid var(--border-2)', cursor: 'pointer', background: filter === value ? 'var(--ink)' : 'white', color: filter === value ? 'white' : 'var(--ink-3)', textTransform: 'capitalize' }}>{value} {value !== 'all' && `(${counts[value] ?? 0})`}</button>
        ))}
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search school or country..." style={{ padding: '5px 12px', border: '1px solid var(--border-2)', borderRadius: 20, fontSize: 12, flex: 1, minWidth: 200 }} />
        <button onClick={load} style={{ fontSize: 12, padding: '5px 14px', border: '1px solid var(--border-2)', borderRadius: 20, background: 'white', cursor: 'pointer' }}>{loading ? 'Loading...' : 'Refresh'}</button>
      </div>
      <div style={{ background: 'white', borderRadius: 8, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: '#F7F6F3' }}>
                {['Date', 'School', 'Country', 'Avg score', 'Hours/wk', 'Status', 'Actions', 'Detail'].map((label) => (
                  <th key={label} style={{ padding: '8px 12px', textAlign: 'left', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((review) => {
                const isExpanded = expanded === review.id
                const avg = avgScore(review)
                return (
                  <Fragment key={review.id}>
                    <tr style={{ borderBottom: '1px solid var(--border)', opacity: review.status === 'removed' ? 0.5 : 1 }}>
                      <td style={{ padding: '7px 12px', color: 'var(--ink-4)' }}>{formatDate(review.created_at)}</td>
                      <td style={{ padding: '7px 12px', fontWeight: 500 }}>{review.school}</td>
                      <td style={{ padding: '7px 12px' }}>{review.country}</td>
                      <td style={{ padding: '7px 12px', color: avg ? scoreColor(avg) : 'var(--ink-4)' }}>{avg || '-'}</td>
                      <td style={{ padding: '7px 12px' }}>{review.hours_per_week || '-'}</td>
                      <td style={{ padding: '7px 12px' }}><StatusPill status={review.status} /></td>
                      <td style={{ padding: '7px 12px' }}><ActionButtons record={review} updating={updating} onSetStatus={setStatus} /></td>
                      <td style={{ padding: '7px 12px' }}><button onClick={() => setExpanded(isExpanded ? null : review.id)} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid var(--border-2)', color: 'var(--ink-3)', background: 'white', cursor: 'pointer' }}>{isExpanded ? 'Hide' : 'Show'}</button></td>
                    </tr>
                    {isExpanded && (
                      <tr style={{ borderBottom: '1px solid var(--border)', background: '#FAFAF9' }}>
                        <td colSpan={8} style={{ padding: '1rem 1.25rem' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '.5rem' }}>
                            {Object.entries(SCHOOL_DIM_LABELS).map(([key, label]) => (
                              <div key={key} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 6, padding: '.5rem .75rem' }}>
                                <div style={{ fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 3 }}>{label}</div>
                                <div style={{ fontSize: '1.3rem', fontWeight: 300, color: review.answers?.[key]?.score ? scoreColor(review.answers[key].score) : 'var(--ink-4)' }}>{review.answers?.[key]?.score || '-'}</div>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                )
              })}
              {filtered.length === 0 && <tr><td colSpan={8} style={{ padding: '2rem', textAlign: 'center', color: 'var(--ink-4)' }}>{loading ? 'Loading...' : 'No reviews match this filter.'}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function SalarySubmissionsPanel() {
  const { records, loading, error, updating, load, setStatus } = useAdminTable('salary_submissions')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = records.filter((record) => {
    if (filter !== 'all' && record.status !== filter) return false
    if (!search) return true
    return `${record.school || ''} ${record.country || ''} ${record.city || ''} ${record.ip_address || ''}`.toLowerCase().includes(search.toLowerCase())
  })

  const counts = {
    all: records.length,
    active: records.filter((record) => record.status === 'active').length,
    flagged: records.filter((record) => record.status === 'flagged').length,
    verified: records.filter((record) => record.status === 'verified').length,
    removed: records.filter((record) => record.status === 'removed').length,
  }

  return (
    <div>
      <ErrorPanel error={error} tableName="Salary submissions" />
      <StatGrid columns={5} items={[['Total', counts.all, '#1a1917'], ['Active', counts.active, '#1D9E75'], ['Flagged', counts.flagged, '#92400E'], ['Verified', counts.verified, '#185FA5'], ['Removed', counts.removed, '#D85A30']]} />
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
        {['all', 'active', 'flagged', 'verified', 'removed'].map((value) => (
          <button key={value} onClick={() => setFilter(value)} style={{ fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 20, border: '1px solid var(--border-2)', cursor: 'pointer', background: filter === value ? 'var(--ink)' : 'white', color: filter === value ? 'white' : 'var(--ink-3)', textTransform: 'capitalize' }}>{value} {value !== 'all' && `(${counts[value]})`}</button>
        ))}
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search school, country, or IP..." style={{ padding: '5px 12px', border: '1px solid var(--border-2)', borderRadius: 20, fontSize: 12, flex: 1, minWidth: 200 }} />
        <button onClick={load} style={{ fontSize: 12, padding: '5px 14px', border: '1px solid var(--border-2)', borderRadius: 20, background: 'white', cursor: 'pointer' }}>{loading ? 'Loading...' : 'Refresh'}</button>
      </div>
      <div style={{ background: 'white', borderRadius: 8, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: '#F7F6F3' }}>
                {['Date', 'Country', 'City', 'School', 'Curr', 'Role', 'USD/mo', 'Status', 'Actions'].map((label) => (
                  <th key={label} style={{ padding: '8px 12px', textAlign: 'left', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((record) => (
                <tr key={record.id} style={{ borderBottom: '1px solid var(--border)', opacity: record.status === 'removed' ? 0.5 : 1 }}>
                  <td style={{ padding: '7px 12px', color: 'var(--ink-4)' }}>{formatDate(record.created_at)}</td>
                  <td style={{ padding: '7px 12px' }}>{record.country}</td>
                  <td style={{ padding: '7px 12px' }}>{record.city}</td>
                  <td style={{ padding: '7px 12px', fontWeight: 500 }}>{record.school}</td>
                  <td style={{ padding: '7px 12px' }}>{record.curr}</td>
                  <td style={{ padding: '7px 12px' }}>{record.role}</td>
                  <td style={{ padding: '7px 12px', color: '#1D9E75' }}>${record.usd?.toLocaleString()}</td>
                  <td style={{ padding: '7px 12px' }}><StatusPill status={record.status} /></td>
                  <td style={{ padding: '7px 12px' }}><ActionButtons record={record} updating={updating} onSetStatus={setStatus} /></td>
                </tr>
              ))}
              {filtered.length === 0 && <tr><td colSpan={9} style={{ padding: '2rem', textAlign: 'center', color: 'var(--ink-4)' }}>{loading ? 'Loading...' : 'No records match this filter.'}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function DiagnosticSubmissionsPanel() {
  const { records, loading, error, updating, load, setStatus } = useAdminTable('diagnostic_submissions')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(null)

  const filtered = records.filter((record) => {
    if (filter !== 'all' && record.status !== filter) return false
    if (!search) return true
    return [record.name, record.school, record.current_country, record.current_city, record.destination_country, record.destination_city, record.curr, record.yrs, record.diagnosis_kind].join(' ').toLowerCase().includes(search.toLowerCase())
  })

  const counts = {
    all: records.length,
    active: records.filter((record) => record.status === 'active').length,
    flagged: records.filter((record) => record.status === 'flagged').length,
    verified: records.filter((record) => record.status === 'verified').length,
    removed: records.filter((record) => record.status === 'removed').length,
  }

  return (
    <div>
      <ErrorPanel error={error} tableName="Diagnostic submissions" />
      <StatGrid columns={5} items={[['Total', counts.all, '#1a1917'], ['Active', counts.active, '#1D9E75'], ['Flagged', counts.flagged, '#92400E'], ['Verified', counts.verified, '#185FA5'], ['Removed', counts.removed, '#D85A30']]} />
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem', flexWrap: 'wrap' }}>
        {['all', 'active', 'flagged', 'verified', 'removed'].map((value) => (
          <button key={value} onClick={() => setFilter(value)} style={{ fontSize: 12, fontWeight: 500, padding: '5px 12px', borderRadius: 20, border: '1px solid var(--border-2)', cursor: 'pointer', background: filter === value ? 'var(--ink)' : 'white', color: filter === value ? 'white' : 'var(--ink-3)', textTransform: 'capitalize' }}>{value} {value !== 'all' && `(${counts[value]})`}</button>
        ))}
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search teacher, school, country, or destination..." style={{ padding: '5px 12px', border: '1px solid var(--border-2)', borderRadius: 20, fontSize: 12, flex: 1, minWidth: 240 }} />
        <button onClick={load} style={{ fontSize: 12, padding: '5px 14px', border: '1px solid var(--border-2)', borderRadius: 20, background: 'white', cursor: 'pointer' }}>{loading ? 'Loading...' : 'Refresh'}</button>
      </div>
      <div style={{ background: 'white', borderRadius: 8, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ background: '#F7F6F3' }}>
                {['Date', 'Teacher', 'School', 'Current post', 'Considering', 'Diagnostic', 'School score', 'Status', 'Actions', 'Detail'].map((label) => (
                  <th key={label} style={{ padding: '8px 12px', textAlign: 'left', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ink-4)', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap' }}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((record) => {
                const isExpanded = expanded === record.id
                return (
                  <Fragment key={record.id}>
                    <tr style={{ borderBottom: '1px solid var(--border)', opacity: record.status === 'removed' ? 0.5 : 1 }}>
                      <td style={{ padding: '7px 12px', color: 'var(--ink-4)' }}>{formatDate(record.created_at)}</td>
                      <td style={{ padding: '7px 12px' }}>{record.name || 'Anonymous teacher'}</td>
                      <td style={{ padding: '7px 12px', fontWeight: 500 }}>{record.school || '-'}</td>
                      <td style={{ padding: '7px 12px' }}>{[record.current_city, record.current_country].filter(Boolean).join(', ') || '-'}</td>
                      <td style={{ padding: '7px 12px' }}>{[record.destination_city, record.destination_country].filter(Boolean).join(', ') || '-'}</td>
                      <td style={{ padding: '7px 12px' }}>{titleize(record.diagnosis_kind)}</td>
                      <td style={{ padding: '7px 12px' }}>{record.current_school_score ?? '-'} -&gt; {record.school_leg_score ?? '-'}</td>
                      <td style={{ padding: '7px 12px' }}><StatusPill status={record.status} /></td>
                      <td style={{ padding: '7px 12px' }}><ActionButtons record={record} updating={updating} onSetStatus={setStatus} /></td>
                      <td style={{ padding: '7px 12px' }}><button onClick={() => setExpanded(isExpanded ? null : record.id)} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 6, border: '1px solid var(--border-2)', color: 'var(--ink-3)', background: 'white', cursor: 'pointer' }}>{isExpanded ? 'Hide' : 'Show'}</button></td>
                    </tr>
                    {isExpanded && (
                      <tr style={{ borderBottom: '1px solid var(--border)', background: '#FAFAF9' }}>
                        <td colSpan={10} style={{ padding: '1rem 1.25rem' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '1rem' }}>
                            <div>
                              <div style={{ fontSize: 11, fontWeight: 600, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.5rem' }}>Teacher snapshot</div>
                              <div style={{ display: 'flex', gap: '.45rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                {[
                                  record.curr && `Curriculum: ${record.curr}`,
                                  record.yrs && `Years abroad: ${record.yrs}`,
                                  record.home && `Home: ${record.home}`,
                                  record.school && `School: ${record.school}`,
                                  record.current_country && `Now: ${[record.current_city, record.current_country].filter(Boolean).join(', ')}`,
                                  record.destination_country && `Considering: ${[record.destination_city, record.destination_country].filter(Boolean).join(', ')}`,
                                  record.package_score != null && `Package: ${record.package_score}`,
                                  record.place_score != null && `Place: ${record.place_score}`,
                                  record.current_school_score != null && `School profile score: ${record.current_school_score}`,
                                  record.school_leg_score != null && `Diagnostic school score: ${record.school_leg_score}`,
                                ].filter(Boolean).map((item) => (
                                  <span key={item} style={{ fontSize: 11.5, color: 'var(--ink-3)', background: 'white', border: '1px solid var(--border)', borderRadius: 999, padding: '5px 10px' }}>{item}</span>
                                ))}
                              </div>
                              <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '.85rem 1rem', marginBottom: '.75rem' }}>
                                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-2)', marginBottom: '.35rem' }}>{record.result?.title || titleize(record.diagnosis_kind)}</div>
                                {record.result?.body && <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '.5rem' }}>{record.result.body}</div>}
                                {record.result?.urgency && <div style={{ fontSize: 12, color: 'var(--ink-4)', lineHeight: 1.6 }}>{record.result.urgency}</div>}
                              </div>
                              {Array.isArray(record.result?.actions) && record.result.actions.length > 0 && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
                                  {record.result.actions.map((action) => (
                                    <div key={action} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '.6rem .8rem', fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6 }}>{action}</div>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div>
                              <div style={{ fontSize: 11, fontWeight: 600, color: '#BA7517', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: '.5rem' }}>Raw answers</div>
                              <div style={{ display: 'grid', gap: '.5rem' }}>
                                {Object.entries(DIAG_DIM_LABELS).map(([key, label]) => (
                                  <div key={key} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: '.65rem .8rem' }}>
                                    <div style={{ fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 3 }}>{label}</div>
                                    <div style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{record.answers?.[key] != null ? Number(record.answers[key]) + 1 : '-'}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                )
              })}
              {filtered.length === 0 && <tr><td colSpan={10} style={{ padding: '2rem', textAlign: 'center', color: 'var(--ink-4)' }}>{loading ? 'Loading...' : 'No diagnostic submissions match this filter.'}</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [pw, setPw] = useState('')
  const [pwError, setPwError] = useState(false)
  const [tab, setTab] = useState('salary')

  const login = () => {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true)
      setPwError(false)
    } else {
      setPwError(true)
    }
  }

  if (!ADMIN_PASSWORD || !adminSupabase) return <div style={{ padding: '2rem', color: '#D85A30' }}>Admin not configured. Add <code>VITE_ADMIN_PASSWORD</code> and <code>VITE_SUPABASE_SERVICE_KEY</code> to Vercel env vars.</div>

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F7F6F3' }}>
        <div style={{ background: 'white', borderRadius: 12, padding: '2rem', width: 320, boxShadow: '0 4px 24px rgba(0,0,0,.08)' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', marginBottom: '.25rem' }}>stool admin</div>
          <div style={{ fontSize: 12, color: 'var(--ink-4)', marginBottom: '1.5rem' }}>Moderation dashboard</div>
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && login()} placeholder="Admin password" autoFocus style={{ width: '100%', padding: '10px 12px', border: `1px solid ${pwError ? '#D85A30' : 'var(--border-2)'}`, borderRadius: 'var(--r)', fontSize: 14, marginBottom: 8, boxSizing: 'border-box' }} />
          {pwError && <div style={{ fontSize: 12, color: '#D85A30', marginBottom: 8 }}>Wrong password</div>}
          <button onClick={login} style={{ width: '100%', padding: '10px', background: 'var(--ink)', color: 'white', border: 'none', borderRadius: 'var(--r)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Sign in -&gt;</button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F7F6F3', padding: '1.5rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem' }}>stool admin</div>
          <div style={{ fontSize: 12, color: 'var(--ink-4)' }}>Moderation dashboard</div>
        </div>
        <div style={{ display: 'flex', gap: 4, marginBottom: '1.5rem', background: 'white', border: '1px solid var(--border)', borderRadius: 8, padding: 4, width: 'fit-content', flexWrap: 'wrap' }}>
          {[
            { id: 'salary', label: 'Salary submissions' },
            { id: 'reviews', label: 'School ratings' },
            { id: 'diagnostics', label: 'Diagnostics' },
          ].map((item) => (
            <button key={item.id} onClick={() => setTab(item.id)} style={{ fontSize: 13, fontWeight: 500, padding: '7px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', background: tab === item.id ? 'var(--ink)' : 'transparent', color: tab === item.id ? 'white' : 'var(--ink-3)' }}>{item.label}</button>
          ))}
        </div>
        {tab === 'salary' && <SalarySubmissionsPanel />}
        {tab === 'reviews' && <SchoolReviewsPanel />}
        {tab === 'diagnostics' && <DiagnosticSubmissionsPanel />}
      </div>
    </div>
  )
}

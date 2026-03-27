import { useState, useEffect, useRef } from 'react'
import { SR_QS, SR_DIAGNOSES, SR_DIM_COLORS } from '../../data/srQuestions.js'
import { useProfile } from '../../context/ProfileContext.jsx'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import SchoolAutocomplete from '../SchoolAutocomplete.jsx'
import { insertSchoolReview, searchSchoolReviews } from '../../lib/supabase.js'

const DIM_LABELS = { q1: 'Leadership', q2: 'Honesty', q3: 'Workload', q4: 'Autonomy', q5: 'Colleagues', q6: 'Mission', q7: 'Overall' }
const DIM_KEYS   = ['q1','q2','q3','q4','q5','q6','q7']

function ProgressBar({ step, total }) {
  return (
    <div className="sr-prog">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, transition: 'background .3s', background: i < step ? '#BA7517' : i === step ? '#EF9F27' : 'rgba(26,25,23,.12)' }} />
      ))}
    </div>
  )
}

function ProfileCard({ school, country, answers, hours }) {
  const scores = DIM_KEYS.map(k => answers[k]?.score).filter(s => s != null)
  const overall = scores.length ? Math.round(scores.reduce((a,b) => a+b, 0) / scores.length * 10) / 10 : null

  const diagCounts = {}
  DIM_KEYS.forEach(k => {
    const d = answers[k]?.diag
    if (d && d !== 'none') diagCounts[d] = (diagCounts[d] || 0) + 1
  })
  let primaryDiag = null
  if (answers.q7?.diag === 'leave') primaryDiag = 'leave'
  else if (answers.q7?.diag === 'mixed' && Object.keys(diagCounts).length > 1) primaryDiag = 'mixed'
  if (!primaryDiag) {
    const sorted = Object.entries(diagCounts).sort((a,b) => b[1] - a[1])
    primaryDiag = sorted.length === 0 ? 'none' : sorted.length === 1 ? sorted[0][0] : sorted[0][1] === sorted[1][1] ? 'mixed' : sorted[0][0]
  }

  const diag = SR_DIAGNOSES[primaryDiag]
  const oc = overall >= 8 ? '#1D9E75' : overall >= 6 ? '#BA7517' : overall >= 4 ? '#D85A30' : '#A32D2D'
  const overallLabel = !overall ? '—' : overall >= 8 ? 'Strong posting' : overall >= 6 ? 'Solid with caveats' : overall >= 4 ? 'Significant concerns' : 'Serious warning signs'

  return (
    <div>
      <div style={{ background: '#FAEEDA', padding: '1rem 1.25rem .875rem', borderRadius: 'var(--r) var(--r) 0 0', border: '1px solid rgba(186,117,23,.2)' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--amber-dark)' }}>{school}</div>
        <div style={{ fontSize: 11.5, color: 'var(--amber)', marginTop: 2 }}>{country} · {new Date().getFullYear()}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: '1px solid var(--border)', borderTop: 'none', overflow: 'hidden' }}>
        {['q1','q2','q3','q4','q5','q6'].map(k => {
          const s = answers[k]?.score
          const c = SR_DIM_COLORS[k]
          return (
            <div key={k} style={{ padding: '.75rem 1rem', borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
              <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: 3 }}>{DIM_LABELS[k]}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 300, color: s ? c : '#9b9b96', marginBottom: 3 }}>{s || '—'}</div>
              <div style={{ height: 4, background: 'var(--surface-2)', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${s ? s * 10 : 0}%`, height: 4, background: c, borderRadius: 2 }} />
              </div>
            </div>
          )
        })}
      </div>
      {diag && (
        <div style={{ border: `1px solid ${diag.color}33`, borderLeft: `4px solid ${diag.color}`, borderRadius: '0 var(--r) var(--r) 0', background: diag.bg, padding: '1.25rem', marginTop: '1rem' }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: diag.color, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.3rem' }}>Primary diagnosis</div>
          <div style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '.2rem' }}>{diag.name}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', fontStyle: 'italic', marginBottom: '1rem' }}>{diag.short}</div>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.35rem' }}>What the research says about prognosis</div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: '1rem' }}>{diag.prognosis}</div>
          <div style={{ fontSize: 11, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--ink-4)', marginBottom: '.35rem' }}>What you can actually do</div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>{diag.advice}</div>
        </div>
      )}
      {hours && (
        <div className="ibox" style={{ marginTop: '.75rem' }}>
          <strong>{hours} hrs/week</strong> · {parseInt(hours) < 42 ? 'Below the international school average — a real positive.' : parseInt(hours) < 50 ? 'Around the international school average.' : 'Above average — worth naming in any future contract negotiation.'}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.875rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', marginTop: '1rem' }}>
        <div style={{ fontSize: '2rem', fontWeight: 300, color: oc }}>{overall || '—'}</div>
        <div style={{ flex: 1, marginLeft: '.875rem' }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: oc }}>{overallLabel}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>Composite across {scores.length} of 6 dimensions</div>
        </div>
      </div>
      <div className="ibox" style={{ marginTop: '.75rem', fontSize: 12 }}>
        Your responses have been recorded. This school will appear in community profiles once 3+ teachers have contributed.
      </div>
    </div>
  )
}

// ── School Search / Browse ────────────────────────────────────────────────────

function SchoolSearchPanel() {
  const [query, setQuery]       = useState('')
  const [results, setResults]   = useState(null)  // null = not searched, [] = no results
  const [loading, setLoading]   = useState(false)
  const debounceRef = useRef(null)

  const scoreColor = (s) => s >= 8 ? '#1D9E75' : s >= 6 ? '#BA7517' : s >= 4 ? '#D85A30' : '#A32D2D'
  const scoreLabel = (s) => s >= 8 ? 'Strong posting' : s >= 6 ? 'Solid with caveats' : s >= 4 ? 'Significant concerns' : 'Serious warning signs'

  const search = async (q) => {
    if (!q.trim() || q.trim().length < 2) { setResults(null); return }
    setLoading(true)
    const data = await searchSchoolReviews(q.trim())
    // Group by school name (ilike might return multiple schools)
    const grouped = data.reduce((acc, r) => {
      const key = r.school.toLowerCase()
      if (!acc[key]) acc[key] = { school: r.school, country: r.country, reviews: [] }
      acc[key].reviews.push(r)
      return acc
    }, {})
    setResults(Object.values(grouped))
    setLoading(false)
  }

  const handleChange = (e) => {
    const val = e.target.value
    setQuery(val)
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => search(val), 400)
  }

  const getSchoolStats = (reviews) => {
    const active = reviews.filter(r => !r.status || r.status === 'active' || r.status === 'verified')
    if (active.length < 3) return { avg: null, count: active.length, enough: false }
    const allScores = active.flatMap(r => {
      if (!r.answers) return []
      return Object.values(r.answers).map(a => a?.score).filter(s => s != null)
    })
    const avg = allScores.length ? Math.round(allScores.reduce((a,b) => a+b,0) / allScores.length * 10) / 10 : null
    const dimAvgs = DIM_KEYS.map(k => {
      const scores = active.map(r => r.answers?.[k]?.score).filter(s => s != null)
      return { key: k, avg: scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length*10)/10 : null }
    })
    return { avg, count: active.length, enough: true, dimAvgs }
  }

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '.35rem', color: 'var(--ink)' }}>Search school ratings</div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: '.875rem', lineHeight: 1.6 }}>
        See what teachers have said about a school before you sign. Ratings appear once 3+ teachers have reviewed a school.
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Search by school name, e.g. Bangkok Patana…"
          style={{ flex: 1, padding: '10px 14px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 14 }}
        />
        {loading && <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, color: 'var(--ink-4)', padding: '0 8px' }}>Searching…</div>}
      </div>

      {results !== null && results.length === 0 && !loading && (
        <div style={{ padding: '1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', fontSize: 13, color: 'var(--ink-3)' }}>
          No ratings yet for "{query}" — be the first to review this school below.
        </div>
      )}

      {results && results.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {results.map(({ school, country, reviews }) => {
            const stats = getSchoolStats(reviews)
            return (
              <div key={school} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
                {/* School header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: stats.enough ? '1px solid var(--border)' : 'none' }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{school}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 2 }}>
                      {country} · {stats.count} review{stats.count !== 1 ? 's' : ''}
                      {!stats.enough && ` · needs ${3 - stats.count} more to show ratings`}
                    </div>
                  </div>
                  {stats.enough && stats.avg && (
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 300, color: scoreColor(stats.avg), lineHeight: 1 }}>{stats.avg}</div>
                      <div style={{ fontSize: 11, color: scoreColor(stats.avg), marginTop: 3 }}>{scoreLabel(stats.avg)}</div>
                    </div>
                  )}
                </div>

                {/* Dimension scores */}
                {stats.enough && stats.dimAvgs && (
                  <div style={{ padding: '.875rem 1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '.5rem', marginBottom: '.5rem' }}>
                      {stats.dimAvgs.slice(0, 6).map(({ key, avg: dimAvg }) => (
                        <div key={key} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>{DIM_LABELS[key]}</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 300, color: dimAvg ? SR_DIM_COLORS[key] : '#ccc' }}>{dimAvg || '—'}</div>
                          <div style={{ height: 3, background: 'var(--surface-2)', borderRadius: 2, marginTop: 4, overflow: 'hidden' }}>
                            <div style={{ width: `${dimAvg ? dimAvg * 10 : 0}%`, height: 3, background: SR_DIM_COLORS[key], borderRadius: 2 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.5rem' }}>
                      Based on {stats.count} teacher review{stats.count !== 1 ? 's' : ''} · Ratings are community-generated and independently verified.
                    </div>
                  </div>
                )}

                {/* Not enough reviews */}
                {!stats.enough && (
                  <div style={{ padding: '.75rem 1.25rem', background: '#FAFAF9', borderTop: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 12, color: 'var(--ink-4)', fontStyle: 'italic' }}>
                      Ratings hidden until 3 teachers have reviewed. {3 - stats.count} more review{3 - stats.count !== 1 ? 's' : ''} needed.
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function MySchool() {
  const { profile } = useProfile()
  const [step, setStep] = useState(0) // 0=identity, 1-7=questions, 8=result
  const [school, setSchool] = useState('')
  const [country, setCountry] = useState(profile.cc || '')
  const [answers, setAnswers] = useState({})
  const [hours, setHours] = useState('')
  const [reviews, setReviews] = useState([])

  const selectOpt = (key, score, diag) => setAnswers(a => ({ ...a, [key]: { score, diag } }))

  const next = () => {
    if (step === 0) {
      if (!school.trim()) return
      setStep(1)
    } else if (step < SR_QS.length) {
      setStep(step + 1)
    } else {
      const review = { school, country, answers: { ...answers }, hours }
      setReviews(r => [...r, review])
      insertSchoolReview(review)
      setStep(SR_QS.length + 1)
    }
  }

  const back = () => { if (step > 0) setStep(step - 1) }

  const reset = () => {
    setStep(0); setSchool(''); setCountry(profile.cc || ''); setAnswers({}); setHours('')
  }

  const q = step >= 1 && step <= SR_QS.length ? SR_QS[step - 1] : null
  const col = q ? (SR_DIM_COLORS[q.key] || '#BA7517') : '#BA7517'

  return (
    <div className="tp active">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>How was your experience at your school?</div>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', maxWidth: 480, lineHeight: 1.65, marginBottom: '1.25rem' }}>
        Seven questions that surface the real picture — leadership, honesty, workload, autonomy, colleagues, mission. You get a named diagnosis and practical advice. Your responses also contribute to an aggregated school profile that helps other teachers make informed decisions.
      </div>

      {/* School search panel — always visible */}
      <SchoolSearchPanel />

      <div className="g2" style={{ marginBottom: '1.25rem', alignItems: 'start' }}>
        <div>
          <div className="g3" style={{ marginBottom: '1.25rem' }}>
            {[['3','reviews needed before a school profile becomes visible'],['10','reviews needed to feed the destination prediction model'],['7','behavioural questions — takes about 4 minutes']].map(([n, desc]) => (
              <div key={n} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 300, color: n === '7' ? 'var(--amber)' : 'var(--ink)', marginBottom: 2 }}>{n}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.4 }}>{desc}</div>
              </div>
            ))}
          </div>
          {reviews.length > 0 && (
            <div className="card">
              <div className="ct">Community school profiles</div>
              <div className="cs">Profiles appear once 3+ teachers have reviewed a school.</div>
              {reviews.map((r, i) => {
                const scores = Object.values(r.answers).map(a => a?.score).filter(Boolean)
                const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length*10)/10 : null
                const oc = avg >= 8 ? '#1D9E75' : avg >= 6 ? '#BA7517' : '#D85A30'
                return (
                  <div key={i} style={{ borderTop: '1px solid var(--border)', padding: '.875rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 500 }}>{r.school}</div>
                      <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{r.country} · {new Date().getFullYear()}</div>
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 300, color: oc }}>{avg || '—'}</div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="card" id="school-review-card">
          <div className="ct">School diagnostic</div>
          <div className="cs">7 behavioural questions. You get a named diagnosis — leadership opacity, workload exploitation, mission drift — with a prognosis and specific advice.</div>
          <ProgressBar step={step > 0 ? step - 1 : 0} total={SR_QS.length} />

          {step === 0 && (
            <>
              <div className="fg">
                <label>Country</label>
                <input value={country} onChange={e => setCountry(e.target.value)} placeholder="e.g. Thailand" />
              </div>
              <div className="fg">
                <label>School name</label>
                <SchoolAutocomplete
                  value={school}
                  onChange={v => setSchool(v)}
                  schools={SALARY_DB_SEED}
                  country={country}
                  placeholder="e.g. Bangkok Patana School"
                />
              </div>
              <button className="btn btn-amber" style={{ maxWidth: 200, marginTop: '.5rem' }} onClick={next}>Start review →</button>
            </>
          )}

          {q && step <= SR_QS.length && (
            <>
              <div style={{ fontSize: 11, fontWeight: 500, color: col, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>{q.label} · Question {step} of {SR_QS.length}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4, marginBottom: '.3rem' }}>{q.text}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '1.1rem', lineHeight: 1.5 }}>{q.why}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.25rem' }}>
                {q.opts.map((o, i) => {
                  const sel = answers[q.key]?.score === o.score
                  return (
                    <button key={i} className="diag-opt" style={sel ? { borderColor: col, background: `${col}18`, fontWeight: 500 } : undefined} onClick={() => selectOpt(q.key, o.score, o.diag)}>
                      {sel ? '✓ ' : ''}{o.t}
                    </button>
                  )
                })}
              </div>
              {q.extra === 'hours' && (
                <div style={{ marginBottom: '.875rem', padding: '.875rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)' }}>
                  <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: 8 }}>Actual hours per week — optional but valuable</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                    <input type="number" value={hours} onChange={e => setHours(e.target.value)} min={20} max={90} placeholder="e.g. 52" style={{ width: 100, padding: '10px 13px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 500 }} />
                    <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>hours / week total</span>
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                <button className="btn btn-ghost" onClick={back}>← Back</button>
                <button className="btn btn-amber" style={{ maxWidth: 160 }} onClick={next}>{step === SR_QS.length ? 'See diagnosis →' : 'Next →'}</button>
              </div>
            </>
          )}

          {step === SR_QS.length + 1 && (
            <>
              <ProfileCard school={school} country={country} answers={answers} hours={hours} />
              <button className="btn btn-ghost" style={{ marginTop: '.875rem', fontSize: 13 }} onClick={reset}>Review another school</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

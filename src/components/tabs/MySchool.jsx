import { useState, useEffect, useRef } from 'react'
import { SR_QS, SR_DIAGNOSES, SR_DIM_COLORS } from '../../data/srQuestions.js'
import { useProfile } from '../../context/ProfileContext.jsx'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import { HOF } from '../../data/hofstede.js'
import SchoolAutocomplete from '../SchoolAutocomplete.jsx'
import { insertSchoolReview, searchSchoolReviews, fetchRatedSchools } from '../../lib/supabase.js'
import BigFiveQuiz from '../BigFiveQuiz.jsx'
import { loadB5, getB5Labels, b5Similarity } from '../../data/bigFiveQuiz.js'

const DIM_LABELS = {
  q1: 'Leadership', q2: 'Honesty',  q3: 'Workload', q4: 'Autonomy',
  q5: 'Colleagues', q6: 'Mission',  q7: 'Overall',
  q8: 'Exit safety', q9: 'Parents', q10: 'Family pkg',
}
const DIM_KEYS     = ['q1','q2','q3','q4','q5','q6','q7']
const DIM_KEYS_ALL = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10']

// ── 6th-sense thesis engine ────────────────────────────────────────────────────
const DIM_NAMES = {
  q1: 'leadership transparency', q2: 'recruitment honesty', q3: 'workload',
  q4: 'professional autonomy', q5: 'staff culture', q6: 'mission alignment',
}

function generateThesis(stats, profile, schoolCountry) {
  const { avg, count, dimAvgs, avgNotice } = stats
  const sig = {}
  if (dimAvgs) dimAvgs.forEach(({ key, avg: a }) => { sig[key] = a })
  const lines = []

  if (avg >= 8) {
    lines.push(`Across ${count} teacher reviews, this school scores consistently strong. The pattern points to institutional integrity — leadership that explains itself, honest recruitment, workload that matches what was promised. Schools that score like this are the minority in this sector. The signal is worth taking seriously.`)
  } else if (avg >= 6.5) {
    lines.push(`The community verdict here is positive overall, with specific areas worth understanding before you decide. A composite of ${avg}/10 across ${count} reviews suggests a school that works for most teachers — which means the things that fall short are probably predictable rather than structural surprises.`)
  } else if (avg >= 5) {
    lines.push(`${count} teachers have reviewed this school and the picture is genuinely mixed — ${avg}/10 overall. Real strengths in some dimensions, persistent concerns in others. What this means for you depends on which dimensions matter most to where you are right now.`)
  } else if (avg >= 3.5) {
    lines.push(`The signal across ${count} reviews points to a school with structural problems that appear consistently — ${avg}/10. This doesn't mean every experience here is bad. But the issues teachers flag aren't isolated incidents. They're patterns.`)
  } else {
    lines.push(`Teachers are honest here: ${avg}/10 across ${count} reviews. The concerns are consistent enough across dimensions to suggest something structural, not situational.`)
  }

  const coreDims = ['q1','q2','q3','q4','q5','q6'].filter(k => sig[k] != null)
  if (coreDims.length >= 3) {
    const sorted = [...coreDims].sort((a,b) => sig[a] - sig[b])
    const weakest = sorted[0]
    const strongest = sorted[sorted.length - 1]
    if (sig[weakest] <= 4) {
      lines.push(`The dimension that stands out most is ${DIM_NAMES[weakest]} — scored ${sig[weakest]}/10. That's a consistent signal, not a single outlier. It's worth reading what teachers specifically said here before treating it as a dealbreaker or dismissing it.`)
    } else if (sig[strongest] >= 8 && avg < 7) {
      lines.push(`The standout strength is ${DIM_NAMES[strongest]} (${sig[strongest]}/10). Schools that score that well on this dimension structurally tend to hold it across cohorts — it's not usually down to one manager or one year.`)
    } else if (sig[strongest] >= 8 && avg >= 7) {
      lines.push(`${DIM_NAMES[strongest].charAt(0).toUpperCase() + DIM_NAMES[strongest].slice(1)} is the standout — ${sig[strongest]}/10 — and it reinforces the overall picture. The ${DIM_NAMES[weakest]} score (${sig[weakest]}/10) is the main caveat worth carrying into any job negotiation.`)
    }
  }

  const riskParts = []
  if (sig.q8 != null && sig.q8 < 5) riskParts.push(`exit safety (${sig.q8}/10) — departures had consequences at this school`)
  if (sig.q9 != null && sig.q9 < 5) riskParts.push(`parent pressure (${sig.q9}/10) — professional standards were regularly overridden`)
  if (sig.q10 != null && sig.q10 < 5) riskParts.push(`family package (${sig.q10}/10) — dependent benefits fell short of what was promised`)
  if (riskParts.length > 0) {
    lines.push(`There are risk signals worth naming directly: ${riskParts.join('; ')}. Exit safety, parent culture, and family package are the dimensions most likely to turn a difficult posting into an untenable one. They're worth verifying specifically — not accepting on faith.`)
  } else if (sig.q8 != null && sig.q8 >= 7 && sig.q9 != null && sig.q9 >= 7) {
    lines.push(`The risk signals — exit safety and parent culture — are positive here. Teachers report departures were handled professionally and parent expectations didn't override classroom standards. These are things most people don't check until it's too late.`)
  }

  const destHof = HOF[schoolCountry]
  const homeHof = HOF[profile.home] || HOF[profile.cc]
  if (destHof && homeHof) {
    const pdiDiff = Math.abs(destHof[0] - homeHof[0])
    if (pdiDiff > 35) {
      const direction = destHof[0] > homeHof[0] ? 'more hierarchical' : 'less hierarchical'
      lines.push(`One cultural layer worth naming: ${schoolCountry} operates with a notably ${direction} institutional dynamic than your home culture (power distance gap of ${pdiDiff} points). That shows up in how leadership makes decisions, how much autonomy teachers are realistically given, and how disagreement is handled — regardless of what the job description says.`)
    }
  }

  const isEarlyCareer = profile.yrs === 'Just starting' || profile.yrs === '1–3 years'
  if (isEarlyCareer && avg < 5.5) {
    lines.push(`One thing worth naming for where you are in your career: schools with structural concerns are harder to navigate without the pattern recognition that comes from previous postings. What an experienced international teacher can manage — and protect themselves from — can land differently when you're still learning the terrain.`)
  }

  if (avgNotice != null && avgNotice > 8) {
    lines.push(`One practical signal: the average notice period here is ${avgNotice} weeks — longer than the sector norm. If circumstances change mid-contract, leaving requires planning that most teachers don't do in advance.`)
  }

  if (avg >= 7) {
    lines.push(`The honest read: the data is mostly saying yes here. Go in knowing the caveats the community has flagged, and you'll be going in informed.`)
  } else if (avg >= 5) {
    lines.push(`The honest read: this is a posting where your specific fit matters more than the average. The signal isn't "avoid" — it's "understand exactly what you're accepting." The teachers who do well here probably went in knowing.`)
  } else {
    lines.push(`The honest read: the data is warning you. That doesn't mean don't go — it means go in with your eyes open, clear on what's non-negotiable, and a realistic exit timeline from day one.`)
  }

  return lines
}

function SchoolThesis({ stats, profile, schoolCountry }) {
  const [showEngine, setShowEngine] = useState(false)
  const paragraphs = generateThesis(stats, profile, schoolCountry)
  if (!paragraphs || paragraphs.length === 0) return null

  const hasProfile  = !!(profile.home || profile.cc || profile.yrs)
  const hasHofstede = !!(HOF[schoolCountry] && (HOF[profile.home] || HOF[profile.cc]))
  const homeName    = profile.home || profile.cc || null

  return (
    <div style={{ padding: '1.375rem 1.25rem 1.125rem', borderBottom: '1px solid var(--border)', background: '#FAFAF8' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem' }}>
        <div style={{ width: 3, height: 16, background: 'var(--amber)', borderRadius: 2, flexShrink: 0 }} />
        <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--amber-dark)' }}>
          Intelligence briefing{hasProfile ? ' · personalised' : ''}
        </div>
      </div>

      {paragraphs.map((p, i) => (
        <p key={i} style={{ fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.75, margin: 0, marginBottom: i < paragraphs.length - 1 ? '.875rem' : 0 }}>{p}</p>
      ))}

      <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(26,25,23,.08)', paddingTop: '.625rem' }}>
        <button
          onClick={() => setShowEngine(!showEngine)}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: 11, color: 'var(--ink-4)', display: 'flex', alignItems: 'center', gap: 4 }}
        >
          <span style={{ fontSize: 9 }}>{showEngine ? '▲' : '▼'}</span> What's powering this analysis
        </button>
        {showEngine && (
          <div style={{ marginTop: '.625rem', fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.65, maxWidth: 520 }}>
            This briefing is generated deterministically from {stats.count} teacher review{stats.count !== 1 ? 's' : ''} — it is not AI-generated speculation. Every sentence maps to a specific threshold in the underlying data. Signals used: community review averages across all 10 dimensions (leadership, honesty, workload, autonomy, colleagues, mission, exit safety, parent culture, family package){hasHofstede ? `; Hofstede cultural dimensions for ${schoolCountry} vs ${homeName}` : ''}{profile.yrs ? `; career stage (${profile.yrs} abroad)` : ''}. Nothing is invented. Where data is missing, no claim is made.
          </div>
        )}
      </div>
    </div>
  )
}

function ProgressBar({ step, total }) {
  return (
    <div className="sr-prog">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, transition: 'background .3s', background: i < step ? '#BA7517' : i === step ? '#EF9F27' : 'rgba(26,25,23,.12)' }} />
      ))}
    </div>
  )
}

function ProfileCard({ school, country, answers, hours, noticePeriod }) {
  const scores = DIM_KEYS_ALL.map(k => answers[k]?.score).filter(s => s != null)
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
        {DIM_KEYS_ALL.filter(k => k !== 'q7').map(k => {
          const s = answers[k]?.score
          const c = SR_DIM_COLORS[k]
          const isNew = ['q8','q9','q10'].includes(k)
          return (
            <div key={k} style={{ padding: '.75rem 1rem', borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)', background: isNew ? 'var(--surface-2)' : 'white' }}>
              <div style={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '.07em', color: isNew ? c : 'var(--ink-4)', marginBottom: 3 }}>{DIM_LABELS[k]}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 300, color: s ? c : '#9b9b96', marginBottom: 3 }}>{s || '—'}</div>
              <div style={{ height: 4, background: 'rgba(26,25,23,.08)', borderRadius: 2, overflow: 'hidden' }}>
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
      {(hours || noticePeriod) && (
        <div style={{ display: 'flex', gap: '.625rem', flexWrap: 'wrap', marginTop: '.75rem' }}>
          {hours && (
            <div className="ibox" style={{ flex: 1, minWidth: 160 }}>
              <strong>{hours} hrs/week</strong> · {parseInt(hours) < 42 ? 'Below average — a real positive.' : parseInt(hours) < 50 ? 'Around the sector average.' : 'Above average — worth naming in any contract negotiation.'}
            </div>
          )}
          {noticePeriod && (
            <div className="ibox" style={{ flex: 1, minWidth: 160 }}>
              <strong>{noticePeriod} weeks notice</strong> · {parseInt(noticePeriod) <= 4 ? 'Standard — reasonable exit flexibility.' : parseInt(noticePeriod) <= 8 ? 'Longer than average — factor this into any job search timeline.' : 'Long notice period — significant exit risk if circumstances change.'}
            </div>
          )}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.875rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)', marginTop: '1rem' }}>
        <div style={{ fontSize: '2rem', fontWeight: 300, color: oc }}>{overall || '—'}</div>
        <div style={{ flex: 1, marginLeft: '.875rem' }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: oc }}>{overallLabel}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>Composite across {scores.length} dimensions</div>
        </div>
      </div>
      <div className="ibox" style={{ marginTop: '.75rem', fontSize: 12 }}>
        Your responses have been recorded. This school now appears in community-rated schools — more reviews make the profile stronger.
      </div>
    </div>
  )
}

// ── Shared helpers ───────────────────────────────────────────────────────────

const scoreColor = (s) => s >= 8 ? '#1D9E75' : s >= 6 ? '#BA7517' : s >= 4 ? '#D85A30' : '#A32D2D'
const scoreLabel = (s) => s >= 8 ? 'Strong posting' : s >= 6 ? 'Solid with caveats' : s >= 4 ? 'Significant concerns' : 'Serious warning signs'

function getSchoolStats(reviews) {
  const active = reviews.filter(r => !r.status || r.status === 'active' || r.status === 'verified')
  if (active.length === 0) return { avg: null, count: 0, enough: false, early: false }
  const allScores = active.flatMap(r => {
    if (!r.answers) return []
    return Object.values(r.answers).map(a => a?.score).filter(s => s != null)
  })
  const avg = allScores.length ? Math.round(allScores.reduce((a,b) => a+b,0) / allScores.length * 10) / 10 : null
  const dimAvgs = DIM_KEYS_ALL.map(k => {
    const scores = active.map(r => r.answers?.[k]?.score).filter(s => s != null)
    return { key: k, avg: scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length*10)/10 : null }
  })
  const avgNotice = (() => {
    const vals = active.map(r => parseInt(r.noticePeriod)).filter(n => !isNaN(n) && n > 0)
    return vals.length ? Math.round(vals.reduce((a,b)=>a+b,0)/vals.length) : null
  })()
  return { avg, count: active.length, enough: true, early: active.length < 3, dimAvgs, avgNotice }
}

// ── Individual review card ────────────────────────────────────────────────────

function ReviewCard({ review }) {
  const scores = DIM_KEYS_ALL.map(k => review.answers?.[k]?.score).filter(s => s != null)
  const overall = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 10) / 10
    : null
  const year = review.created_at ? new Date(review.created_at).getFullYear() : null

  // Find weakest and strongest core dimension
  const dimScores = DIM_KEYS
    .map(k => ({ key: k, score: review.answers?.[k]?.score }))
    .filter(d => d.score != null)
    .sort((a, b) => a.score - b.score)
  const weakest  = dimScores[0]
  const strongest = dimScores[dimScores.length - 1]

  const b5Labels = getB5Labels(review.big_five)
  const [showTooltip, setShowTooltip] = useState(null)

  return (
    <div style={{ display: 'flex', gap: '.875rem', padding: '.875rem 1rem', borderBottom: '1px solid var(--border)', alignItems: 'flex-start' }}>
      {/* Score + year */}
      <div style={{ flexShrink: 0, textAlign: 'center', width: 38 }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 300, color: overall ? scoreColor(overall) : '#ccc', lineHeight: 1 }}>
          {overall || '—'}
        </div>
        <div style={{ fontSize: 9, color: 'var(--ink-4)', marginTop: 3 }}>{year || '—'}</div>
      </div>

      {/* Signals + personality */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {(weakest || strongest) && (
          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5, marginBottom: '.3rem' }}>
            {weakest && weakest.score <= 5 && (
              <span>
                <span style={{ color: 'var(--ink-4)' }}>Lowest: </span>
                <span style={{ color: SR_DIM_COLORS[weakest.key], fontWeight: 500 }}>
                  {DIM_LABELS[weakest.key]} ({weakest.score})
                </span>
              </span>
            )}
            {weakest && weakest.score <= 5 && strongest && strongest.score >= 7 && (
              <span style={{ color: 'var(--ink-4)' }}> · </span>
            )}
            {strongest && strongest.score >= 7 && (
              <span>
                <span style={{ color: 'var(--ink-4)' }}>Highest: </span>
                <span style={{ color: SR_DIM_COLORS[strongest.key], fontWeight: 500 }}>
                  {DIM_LABELS[strongest.key]} ({strongest.score})
                </span>
              </span>
            )}
          </div>
        )}

        {b5Labels.length > 0 && (
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: '.3rem' }}>
            {b5Labels.map(l => (
              <span
                key={l.trait}
                title={l.context}
                onMouseEnter={() => setShowTooltip(l.trait)}
                onMouseLeave={() => setShowTooltip(null)}
                style={{
                  position: 'relative',
                  fontSize: 10,
                  padding: '2px 8px',
                  borderRadius: 10,
                  background: l.high ? '#EBF3FF' : '#FFF0E8',
                  color: l.high ? '#1A5FA8' : '#A35020',
                  fontWeight: 500,
                  cursor: 'default',
                  border: `1px solid ${l.high ? '#B8D4F5' : '#F5CCAD'}`,
                }}
              >
                {l.label}
                {showTooltip === l.trait && l.context && (
                  <span style={{
                    position: 'absolute', bottom: '120%', left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--ink)', color: 'white', fontSize: 10.5, lineHeight: 1.5,
                    padding: '.4rem .65rem', borderRadius: 6, whiteSpace: 'nowrap', maxWidth: 240,
                    whiteSpace: 'normal', zIndex: 10, pointerEvents: 'none', boxShadow: '0 2px 8px rgba(0,0,0,.2)',
                  }}>
                    {l.context}
                  </span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ── School Search / Browse ────────────────────────────────────────────────────

function SchoolSearchPanel() {
  const { profile } = useProfile()
  const [query, setQuery]       = useState('')
  const [results, setResults]   = useState(null)
  const [loading, setLoading]   = useState(false)
  const [b5Filter, setB5Filter] = useState('all')
  const debounceRef = useRef(null)
  const myB5 = loadB5()

  const search = async (q) => {
    if (!q.trim() || q.trim().length < 2) { setResults(null); return }
    setLoading(true)
    const data = await searchSchoolReviews(q.trim())
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

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: '.75rem' }}>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Search by school name, e.g. Bangkok Patana..."
          style={{ flex: 1, padding: '10px 14px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 14 }}
        />
        {loading && <div style={{ display: 'flex', alignItems: 'center', fontSize: 12, color: 'var(--ink-4)', padding: '0 8px' }}>Searching...</div>}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.25rem', borderBottom: stats.enough ? '1px solid var(--border)' : 'none' }}>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)' }}>{school}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 2 }}>
                      {country} · {stats.count} review{stats.count !== 1 ? 's' : ''}
                    </div>
                  </div>
                  {stats.enough && stats.avg && (
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 300, color: scoreColor(stats.avg), lineHeight: 1 }}>{stats.avg}</div>
                      <div style={{ fontSize: 11, color: scoreColor(stats.avg), marginTop: 3 }}>{scoreLabel(stats.avg)}</div>
                    </div>
                  )}
                </div>

                {stats.enough && !stats.early && (
                  <SchoolThesis stats={stats} profile={profile} schoolCountry={country} />
                )}

                {stats.enough && stats.dimAvgs && (
                  <div style={{ padding: '.875rem 1.25rem' }}>
                    {stats.early && (
                      <div style={{ background: '#FEF9E7', border: '1px solid #EDD89A', borderRadius: 'var(--r)', padding: '.5rem .75rem', marginBottom: '.75rem', fontSize: 11.5, color: '#6B5B1F', lineHeight: 1.5 }}>
                        <strong>Early data</strong> — based on {stats.count} review{stats.count !== 1 ? 's' : ''}. Scores become more reliable with 3+ reviews. Add yours to strengthen this profile.
                      </div>
                    )}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '.5rem', marginBottom: '.75rem' }}>
                      {stats.dimAvgs.filter(d => !['q7','q8','q9','q10'].includes(d.key)).map(({ key, avg: dimAvg }) => (
                        <div key={key} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>{DIM_LABELS[key]}</div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 300, color: dimAvg ? SR_DIM_COLORS[key] : '#ccc' }}>{dimAvg || '—'}</div>
                          <div style={{ height: 3, background: 'var(--surface-2)', borderRadius: 2, marginTop: 4, overflow: 'hidden' }}>
                            <div style={{ width: `${dimAvg ? dimAvg * 10 : 0}%`, height: 3, background: SR_DIM_COLORS[key], borderRadius: 2 }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    {stats.dimAvgs.some(d => ['q8','q9','q10'].includes(d.key) && d.avg != null) && (
                      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '.625rem', marginBottom: '.5rem' }}>
                        <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.5rem' }}>Risk signals</div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.5rem' }}>
                          {stats.dimAvgs.filter(d => ['q8','q9','q10'].includes(d.key)).map(({ key, avg: dimAvg }) => (
                            <div key={key} style={{ textAlign: 'center', background: 'var(--surface-2)', borderRadius: 6, padding: '.5rem .25rem' }}>
                              <div style={{ fontSize: 10, color: SR_DIM_COLORS[key], textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4, fontWeight: 600 }}>{DIM_LABELS[key]}</div>
                              <div style={{ fontSize: '1.15rem', fontWeight: 300, color: dimAvg ? SR_DIM_COLORS[key] : '#ccc' }}>{dimAvg || '—'}</div>
                              <div style={{ height: 3, background: 'rgba(26,25,23,.1)', borderRadius: 2, marginTop: 4, overflow: 'hidden' }}>
                                <div style={{ width: `${dimAvg ? dimAvg * 10 : 0}%`, height: 3, background: SR_DIM_COLORS[key], borderRadius: 2 }} />
                              </div>
                            </div>
                          ))}
                        </div>
                        {stats.avgNotice && (
                          <div style={{ marginTop: '.5rem', fontSize: 11.5, color: 'var(--ink-3)' }}>
                            Avg notice period: <strong>{stats.avgNotice} weeks</strong>
                            {stats.avgNotice > 8 ? ' — longer than sector average' : stats.avgNotice <= 4 ? ' — standard' : ''}
                          </div>
                        )}
                      </div>
                    )}
                    <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: '.25rem' }}>
                      Based on {stats.count} teacher review{stats.count !== 1 ? 's' : ''} · Community-generated · Risk signals from reviews including exit safety, parent culture, and family package questions.
                    </div>
                  </div>
                )}

                {!stats.enough && (
                  <div style={{ padding: '.75rem 1.25rem', background: '#FAFAF9', borderTop: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 12, color: 'var(--ink-4)', fontStyle: 'italic' }}>
                      No reviews yet — be the first to rate this school.
                    </div>
                  </div>
                )}

                {/* ── Individual reviews ──────────────────────────────── */}
                {stats.enough && (() => {
                  const activeReviews = reviews.filter(r => !r.status || r.status === 'active' || r.status === 'verified')
                  const filtered = b5Filter === 'similar' && myB5
                    ? activeReviews.filter(r => {
                        if (!r.big_five) return false
                        const sim = b5Similarity(myB5, r.big_five)
                        return sim != null && sim >= 0.55
                      })
                    : activeReviews
                  const hasSomeB5 = activeReviews.some(r => r.big_five)
                  return (
                    <div style={{ borderTop: '1px solid var(--border)' }}>
                      <div style={{ padding: '.75rem 1.25rem .5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem', flexWrap: 'wrap' }}>
                        <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)' }}>
                          Individual reviews ({filtered.length}{filtered.length !== activeReviews.length ? ` of ${activeReviews.length}` : ''})
                        </div>
                        {myB5 && hasSomeB5 && (
                          <div style={{ display: 'flex', gap: 4 }}>
                            {['all', 'similar'].map(f => (
                              <button
                                key={f}
                                onClick={() => setB5Filter(f)}
                                style={{
                                  fontSize: 10.5, padding: '3px 9px', borderRadius: 10, cursor: 'pointer',
                                  border: b5Filter === f ? '1.5px solid #BA7517' : '1.5px solid var(--border-2)',
                                  background: b5Filter === f ? '#FAEEDA' : 'white',
                                  color: b5Filter === f ? '#BA7517' : 'var(--ink-3)',
                                  fontWeight: b5Filter === f ? 600 : 400,
                                }}
                              >
                                {f === 'all' ? 'All reviewers' : 'Similar to me'}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                      {filtered.length === 0 && (
                        <div style={{ padding: '.5rem 1.25rem .875rem', fontSize: 12, color: 'var(--ink-4)', fontStyle: 'italic' }}>
                          No reviews match this filter yet.
                        </div>
                      )}
                      {filtered.map((r, i) => <ReviewCard key={i} review={r} />)}
                    </div>
                  )
                })()}
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
  const { profile, updateProfile } = useProfile()
  const [mode, setMode] = useState('home') // home | review | search
  const [step, setStep] = useState(0)
  const [school, setSchool] = useState(profile.school || '')
  const [country, setCountry] = useState(profile.cc || '')
  const [answers, setAnswers] = useState({})
  const [hours, setHours] = useState('')
  const [noticePeriod, setNoticePeriod] = useState('')
  const [reviews, setReviews] = useState([])
  const [reviewSchool, setReviewSchool] = useState('')
  const [reviewCountry, setReviewCountry] = useState('')
  const [ratedSchools, setRatedSchools] = useState([])

  useEffect(() => {
    // Fetch full review data for rated school cards
    fetchRatedSchools(50).then(data => {
      const grouped = {}
      data.forEach(r => {
        const key = r.school?.toLowerCase()
        if (!key) return
        if (!grouped[key]) grouped[key] = { school: r.school, country: r.country, reviews: [] }
        grouped[key].reviews.push(r)
      })
      setRatedSchools(Object.values(grouped))
    })
  }, [])

  const hasSchool = !!(profile.school && profile.cc)

  const selectOpt = (key, score, diag) => setAnswers(a => ({ ...a, [key]: { score, diag } }))

  // Map onboarding school diagnostic answers (sd1-sd5) to review questions (q1-q7)
  // sd1 (leadership voice) → q1 (Leadership), sd2 (workload) → q3 (Workload),
  // sd3 (transparency) → q2 (Honesty), sd5 (stay 2 yrs) → q7 (Your take)
  const ONBOARD_TO_REVIEW = { sd1: 'q1', sd2: 'q3', sd3: 'q2', sd5: 'q7' }
  // Onboarding answer index (0=worst..3=best) → review option index (reversed: 0=best..3=worst)
  const ONBOARD_IDX_TO_REVIEW_IDX = { 0: 3, 1: 2, 2: 1, 3: 0 }

  const buildPrefillFromDiag = () => {
    if (!profile.schoolDiag) return {}
    const prefilled = {}
    Object.entries(ONBOARD_TO_REVIEW).forEach(([sdKey, qKey]) => {
      const sdVal = profile.schoolDiag[sdKey]
      if (sdVal == null) return
      const reviewIdx = ONBOARD_IDX_TO_REVIEW_IDX[sdVal]
      if (reviewIdx == null) return
      const q = SR_QS.find(q => q.key === qKey)
      if (!q || !q.opts[reviewIdx]) return
      const opt = q.opts[reviewIdx]
      prefilled[qKey] = { score: opt.score, diag: opt.diag }
    })
    return prefilled
  }

  const startReview = (prefill) => {
    if (prefill) {
      setSchool(profile.school || '')
      setCountry(profile.cc || '')
      setAnswers(buildPrefillFromDiag())
    } else {
      setAnswers({})
    }
    setStep(0)
    // Gate on Big Five quiz — show once, then never again
    setMode(loadB5() ? 'review' : 'b5quiz')
  }

  const next = () => {
    if (step === 0) {
      if (!school.trim()) return
      setStep(1)
    } else if (step < SR_QS.length) {
      const currentQ = SR_QS[step - 1]
      if (currentQ && !answers[currentQ.key]) return // require an answer
      setStep(step + 1)
    } else {
      const review = { school, country, answers: { ...answers }, hours, noticePeriod, big_five: loadB5() }
      setReviews(r => [...r, review])
      insertSchoolReview(review)
      // Update the profile's school score if reviewing own school
      if (school === profile.school) {
        const scores = Object.values(answers).map(a => a?.score).filter(s => s != null)
        if (scores.length) {
          const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 10) / 10
          updateProfile({ sch: avg })
        }
      }
      setStep(SR_QS.length + 1)
    }
  }

  const back = () => { if (step > 0) setStep(step - 1) }

  const reset = () => {
    setStep(0)
    setSchool(profile.school || '')
    setCountry(profile.cc || '')
    setAnswers({})
    setHours('')
    setNoticePeriod('')
    setMode('home')
  }

  const q = step >= 1 && step <= SR_QS.length ? SR_QS[step - 1] : null
  const col = q ? (SR_DIM_COLORS[q.key] || '#BA7517') : '#BA7517'

  // ── HOME MODE ──────────────────────────────────────────────────────────────
  if (mode === 'home') {
    return (
      <div className="tp active">
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>My school</div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', maxWidth: 560, lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Rate your school, search what others have said, and help build the honest picture this sector needs.
        </div>

        {/* ── Hero CTA: rate your school ─────────────────────────────────── */}
        {hasSchool && (
          <div
            onClick={() => startReview(true)}
            style={{
              background: 'linear-gradient(135deg, #FAEEDA 0%, #FFF8EE 100%)',
              border: '1px solid rgba(186,117,23,.25)',
              borderRadius: 'var(--rl)',
              padding: '1.5rem 1.5rem 1.35rem',
              marginBottom: '1.25rem',
              cursor: 'pointer',
              transition: 'box-shadow .2s',
            }}
          >
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--amber)', fontWeight: 600, marginBottom: '.4rem' }}>
              Rate your school
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--amber-dark)', marginBottom: '.35rem' }}>
              {profile.school}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.55, marginBottom: '.75rem' }}>
              {profile.city ? `${profile.city}, ` : ''}{profile.cc} · You're already here — your experience matters. Ten questions, a personal diagnosis, and your review helps every teacher who considers this school next.
            </div>
            <div style={{
              display: 'inline-block',
              padding: '.55rem 1.1rem',
              background: '#BA7517',
              color: 'white',
              borderRadius: 'var(--r)',
              fontSize: 13,
              fontWeight: 600,
            }}>
              Start my review
            </div>
          </div>
        )}

        {/* ── Your completed reviews ──────────────────────────────────────── */}
        {reviews.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', fontWeight: 600, marginBottom: '.65rem' }}>
              Your reviews
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {reviews.map((r, i) => {
                const scores = Object.values(r.answers).map(a => a?.score).filter(Boolean)
                const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length*10)/10 : null
                const oc = avg >= 8 ? '#1D9E75' : avg >= 6 ? '#BA7517' : avg >= 4 ? '#D85A30' : '#A32D2D'
                const label = avg >= 8 ? 'Strong' : avg >= 6 ? 'Solid' : avg >= 4 ? 'Concerns' : 'Warning'
                return (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '.85rem 1.1rem',
                    background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)',
                  }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>{r.school}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 2 }}>{r.country} · Reviewed {new Date().getFullYear()}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 300, color: oc, lineHeight: 1 }}>{avg}</div>
                      <div style={{ fontSize: 10, color: oc, marginTop: 2 }}>{label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── Search & Review side by side ─────────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', alignItems: 'start' }}>
          {/* Left: Search ratings — inline */}
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r)',
            padding: '1.25rem',
          }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', marginBottom: '.2rem' }}>Search ratings</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5, marginBottom: '.75rem' }}>
              See what teachers have said before you sign. Every review builds the picture.
            </div>
            <SchoolSearchPanel />
          </div>

          {/* Right: Review a different school */}
          <div style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r)',
            padding: '1.25rem',
          }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)', marginBottom: '.2rem' }}>Review a school</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5, marginBottom: '.75rem' }}>
              Worked somewhere else? Rate a previous posting and help build the community picture.
            </div>
            <div className="fg" style={{ marginBottom: '.5rem' }}>
              <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Country</label>
              <input value={reviewCountry} onChange={e => setReviewCountry(e.target.value)} placeholder="e.g. Thailand" style={{ width: '100%', padding: '8px 12px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 13 }} />
            </div>
            <div className="fg" style={{ marginBottom: '.75rem' }}>
              <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em' }}>School name</label>
              <SchoolAutocomplete
                value={reviewSchool}
                onChange={v => setReviewSchool(v)}
                onSelect={rec => {
                  if (rec.country && !reviewCountry) setReviewCountry(rec.country)
                }}
                schools={SALARY_DB_SEED}
                country={reviewCountry}
                placeholder="e.g. Bangkok Patana School"
              />
            </div>
            <button
              className="btn btn-amber"
              style={{ fontSize: 13, padding: '.5rem 1rem' }}
              onClick={() => {
                if (!reviewSchool.trim()) return
                setSchool(reviewSchool)
                setCountry(reviewCountry)
                startReview(false)
              }}
            >
              Start review &rarr;
            </button>
          </div>
        </div>

        {/* ── Rated schools ────────────────────────────────────────────── */}
        {ratedSchools.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-4)', fontWeight: 600, marginBottom: '.65rem' }}>
              Community-rated schools
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {ratedSchools.map(({ school, country, reviews: revs }) => {
                const stats = getSchoolStats(revs)
                if (!stats.enough) return null
                return (
                  <div key={school} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)',
                    padding: '.875rem 1.1rem', cursor: 'default',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{school}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--ink-4)', marginTop: 2 }}>
                        {country} · {stats.count} review{stats.count !== 1 ? 's' : ''}
                        {stats.early && ' · early data'}
                      </div>
                      {stats.dimAvgs && (
                        <div style={{ display: 'flex', gap: '.75rem', marginTop: '.45rem' }}>
                          {stats.dimAvgs.filter(d => !['q7','q8','q9','q10'].includes(d.key)).map(({ key, avg: dimAvg }) => (
                            <div key={key} style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: 9, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.04em' }}>{DIM_LABELS[key]}</div>
                              <div style={{ fontSize: 14, fontWeight: 400, color: dimAvg ? SR_DIM_COLORS[key] : '#ccc', marginTop: 1 }}>{dimAvg || '—'}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div style={{ textAlign: 'right', marginLeft: '1rem' }}>
                      <div style={{ fontSize: '1.75rem', fontWeight: 300, color: scoreColor(stats.avg), lineHeight: 1 }}>{stats.avg}</div>
                      <div style={{ fontSize: 10, color: scoreColor(stats.avg), marginTop: 3 }}>{scoreLabel(stats.avg)}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* ── How it works ─────────────────────────────────────────────────── */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '.75rem',
          padding: '1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)',
        }}>
          {[
            ['10 school questions', 'Leadership, honesty, workload, autonomy, colleagues, mission — plus exit safety, parent culture, and family package.'],
            ['Personal diagnosis', 'You get a named diagnosis with a prognosis and specific advice for your situation — not a generic summary.'],
            ['Community profiles', 'Every review builds a school profile visible to the community. More reviews mean stronger, more reliable ratings.'],
            ['Reviewer context', 'Before you submit, you\'ll answer 10 quick personality statements. This tells readers the lens your review comes from — not to judge it, but to calibrate it. Saved once to your device.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ padding: '.5rem' }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', marginBottom: '.25rem' }}>{title}</div>
              <div style={{ fontSize: 11.5, color: 'var(--ink-3)', lineHeight: 1.45 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ── BIG FIVE QUIZ MODE ─────────────────────────────────────────────────────
  if (mode === 'b5quiz') {
    return (
      <div className="tp active">
        <button
          onClick={reset}
          style={{ background: 'none', border: 'none', color: 'var(--ink-3)', cursor: 'pointer', fontSize: 12, fontWeight: 500, marginBottom: '1rem', padding: 0 }}
        >
          &larr; Back to My School
        </button>
        <BigFiveQuiz
          onComplete={() => setMode('review')}
          onSkip={() => setMode('review')}
        />
      </div>
    )
  }

  // ── REVIEW MODE ────────────────────────────────────────────────────────────
  return (
    <div className="tp active">
      <button
        onClick={reset}
        style={{ background: 'none', border: 'none', color: 'var(--ink-3)', cursor: 'pointer', fontSize: 12, fontWeight: 500, marginBottom: '1rem', padding: 0 }}
      >
        &larr; Back to My School
      </button>

      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', marginBottom: '.5rem' }}>School diagnostic</div>
      <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginBottom: '1rem', lineHeight: 1.6, maxWidth: 520 }}>
        10 questions covering school culture, exit safety, parent pressure, and family package reality. You get a named diagnosis with a prognosis and specific advice.
      </div>

      <ProgressBar step={step > 0 ? step - 1 : 0} total={SR_QS.length} />

      {step === 0 && (
        <div className="card" style={{ padding: '1.25rem' }}>
          {hasSchool && school === profile.school && (
            <div style={{
              background: '#E1F5EE', border: '1px solid rgba(29,158,117,.2)',
              borderRadius: 'var(--r)', padding: '.65rem .85rem',
              fontSize: 12.5, color: 'var(--teal-dark)', marginBottom: '1rem',
              lineHeight: 1.5,
            }}>
              We've prefilled your school from your profile{Object.keys(buildPrefillFromDiag()).length > 0 ? ' and carried over answers from your onboarding diagnostic' : ''}. Just hit start — you can change anything as you go.
            </div>
          )}
          <div className="fg">
            <label>Country</label>
            <input value={country} onChange={e => setCountry(e.target.value)} placeholder="e.g. Thailand" />
          </div>
          <div className="fg">
            <label>School name</label>
            <SchoolAutocomplete
              value={school}
              onChange={v => setSchool(v)}
              onSelect={rec => {
                if (rec.country && !country) setCountry(rec.country)
              }}
              schools={SALARY_DB_SEED}
              country={country}
              placeholder="e.g. Bangkok Patana School"
            />
          </div>
          <button className="btn btn-amber" style={{ maxWidth: 200, marginTop: '.5rem' }} onClick={next}>Start review &rarr;</button>
        </div>
      )}

      {q && step <= SR_QS.length && (
        <div className="card" style={{ padding: '1.25rem' }}>
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
          {q.extra === 'notice' && (
            <div style={{ marginBottom: '.875rem', padding: '.875rem 1rem', background: 'var(--surface-2)', borderRadius: 'var(--r)' }}>
              <label style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: 8 }}>Notice period required — optional but important for future teachers</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                <input type="number" value={noticePeriod} onChange={e => setNoticePeriod(e.target.value)} min={0} max={52} placeholder="e.g. 8" style={{ width: 100, padding: '10px 13px', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 500 }} />
                <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>weeks notice required by contract</span>
              </div>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
            <button className="btn btn-ghost" onClick={back}>&larr; Back</button>
            <button className="btn btn-amber" style={{ maxWidth: 160 }} onClick={next}>{step === SR_QS.length ? 'See diagnosis →' : 'Next →'}</button>
          </div>
        </div>
      )}

      {step === SR_QS.length + 1 && (
        <div>
          <ProfileCard school={school} country={country} answers={answers} hours={hours} noticePeriod={noticePeriod} />
          <button className="btn btn-ghost" style={{ marginTop: '.875rem', fontSize: 13 }} onClick={reset}>&larr; Back to My School</button>
        </div>
      )}
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DCOLS } from '../../data/hofstede.js'
import { CITIES } from '../../data/geo.js'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import { supabase } from '../../lib/supabase.js'

const LEG_DEFS = [
  { key: 'sch', l: 'School',  c: '#A35E08', bg: '#F5E5C6', desc: 'Leadership, culture, mission' },
  { key: 'plc', l: 'Place',   c: '#3F3A8F', bg: '#E5E3F5', desc: 'City, safety, lifestyle' },
  { key: 'pkg', l: 'Package', c: '#0E8A5F', bg: '#DCF0E6', desc: 'Salary, housing, flights' },
]

function LegCard({ l, c, bg, desc, score }) {
  const label = score <= 3 ? 'Weak' : score <= 5 ? 'Shaky' : score <= 7 ? 'Solid' : 'Strong'
  return (
    <div
      style={{
        flex: 1, minWidth: 120,
        borderTop: `3px solid ${c}`,
        border: `1px solid ${c}33`, borderTopWidth: 3,
        borderRadius: '0 0 var(--r) var(--r)',
        padding: '1rem 1.05rem',
        background: bg,
        display: 'flex', flexDirection: 'column', minHeight: 140,
      }}
    >
      <div style={{ fontSize: 10, fontWeight: 700, color: c, textTransform: 'uppercase', letterSpacing: '.09em', marginBottom: 6 }}>{l}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
        <div style={{ fontSize: '2.25rem', fontWeight: 300, lineHeight: 1, color: c, letterSpacing: '-.02em' }}>{score}</div>
        <div style={{ fontSize: 11, color: c, opacity: .75, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>{label}</div>
      </div>
      <div style={{ height: 5, background: `${c}22`, borderRadius: 3, overflow: 'hidden', marginBottom: 10 }}>
        <div style={{ width: `${score * 10}%`, height: 5, background: c, borderRadius: 3, transition: 'width .6s cubic-bezier(.4,0,.2,1)' }} />
      </div>
      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', lineHeight: 1.45, marginTop: 'auto' }}>{desc}</div>
    </div>
  )
}

function QuestionCard({ q, c, bg, urgent, badge, badgeCol, sub, action, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="card-hover"
      style={{
        background: bg,
        border: `1px solid ${c}22`, borderLeft: `3px solid ${c}`,
        borderRadius: '0 var(--rl) var(--rl) 0',
        padding: '1.05rem 1.15rem',
        cursor: 'pointer',
        display: 'flex', alignItems: 'flex-start', gap: '1rem',
        width: '100%', textAlign: 'left',
        fontFamily: 'inherit', color: 'inherit',
        transition: 'box-shadow var(--dur-2) var(--ease), transform var(--dur-2) var(--ease), border-color var(--dur-2) var(--ease)',
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', marginBottom: '.4rem', flexWrap: 'wrap' }}>
          {urgent && <span className="tag" style={{ background: 'var(--coral)', color: 'white', margin: 0 }}>Urgent</span>}
          <span className="tag" style={{ background: `${badgeCol}22`, color: badgeCol, margin: 0 }}>{badge}</span>
        </div>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--ink)', marginBottom: '.35rem', lineHeight: 1.4 }}>{q}</div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '.625rem' }}>{sub}</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: c }}>{action}</div>
      </div>
      <div style={{ fontSize: 20, color: c, flexShrink: 0, marginTop: 2, opacity: .7, lineHeight: 1 }} aria-hidden="true">›</div>
    </button>
  )
}

export default function Overview() {
  const { profile, setActiveTab, editProfile } = useProfile()
  const [liveCount, setLiveCount] = useState(SALARY_DB_SEED.length)

  useEffect(() => {
    if (!supabase) return
    supabase
      .from('salary_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active')
      .then(({ count }) => {
        if (count && count > 0) setLiveCount(SALARY_DB_SEED.length + count)
      })
  }, [])
  const { sch = 5, plc = 5, pkg = 5, sal = 0, cc, home, dc, dcity, hous, flt, tax } = profile

  const strong = [sch, plc, pkg].filter(s => s >= 6).length
  const verdictText = strong >= 3 ? 'All three legs solid — genuinely rare.'
    : strong === 2 ? 'Two legs solid — viable threshold.'
    : strong === 1 ? 'One strong leg. This posting has real challenges.'
    : 'No strong legs. Important to address.'

  const cd = Object.values(CITIES).find(c => c.country === cc) || null
  const col = cd ? cd.col : 50
  const medSal = cd ? cd.med : 4307
  const salGap = sal > 0 ? Math.round((sal - medSal) / medSal * 100) : null
  const hCur = HOF[cc], hHome = HOF[home]

  const questions = [
    {
      q: sch === 0 ? "What's actually wrong with your school?"
        : sch < 4 ? `Your school score is ${sch}/10 — what's actually going on there?`
        : sch < 6 ? `Your school score is ${sch}/10. Is that sustainable long-term?`
        : `Your school scores ${sch}/10. Have you reviewed it for other teachers?`,
      sub: sch === 0 ? 'Seven questions that diagnose the real issue — leadership, honesty, workload, autonomy, colleagues, mission. You get a named diagnosis and practical advice. Takes 4 minutes.'
        : sch < 6 ? 'A school score below 6 is worth diagnosing properly. Get a named verdict and specific advice.'
        : 'Great school experiences are rare. Your honest review helps other teachers avoid the wrong schools.',
      c: '#A35E08', bg: '#F5E5C6', badgeCol: sch < 6 ? '#BF4820' : '#0E8A5F',
      badge: sch < 6 ? 'Priority' : 'Contribute', urgent: sch > 0 && sch < 5,
      action: 'Diagnose your school →', onClick: () => setActiveTab('schools'),
    },
    {
      q: sal === 0 ? 'Do you know if your salary is fair for your market?'
        : salGap !== null && salGap < -20 ? `You're earning ${Math.abs(salGap)}% below the median for your region. Is that intentional?`
        : salGap !== null && salGap < 0 ? "You're slightly below the regional median. See the full picture."
        : `You're above the regional median. See how you compare across ${cc || 'your region'}.`,
      sub: `${liveCount.toLocaleString()} real educator salary records — filterable by country, curriculum, and role. Know what the market pays before your next negotiation.${sal > 0 && salGap !== null && salGap < 0 ? ' Note: the median covers all experience levels — a gap is normal early in your career.' : ''}`,
      c: '#0E8A5F', bg: '#DCF0E6', badgeCol: '#0E8A5F',
      badge: sal > 0 && salGap !== null && salGap < -20 ? 'Worth checking' : 'Explore',
      urgent: sal > 0 && salGap !== null && salGap < -20,
      action: 'Explore salaries →', onClick: () => setActiveTab('data'),
    },
    {
      q: cc ? `Is what you're experiencing in ${cc} cultural friction — or something structural?`
             : "Is your unhappiness about the culture — or about the school and the package?",
      sub: 'Cultural friction improves with time. Structural problems don\'t. Eight honest questions help you tell the difference.',
      c: '#3F3A8F', bg: '#E5E3F5', badgeCol: '#3F3A8F',
      badge: 'Quick — 2 mins', urgent: false,
      action: 'Run the diagnostic →', onClick: () => setActiveTab('diagnostic'),
    },
    dc ? {
      q: `Is your stool likely to be better in ${dcity ? dcity + ', ' : ''}${dc}?`,
      sub: 'We use salary data from 603 educators, cultural research, and quality-of-life indices to forecast your school, place, and package scores at your destination.',
      c: '#185FA5', bg: '#E6F1FB', badgeCol: '#185FA5',
      badge: 'Data-driven', urgent: false,
      action: 'Forecast my move →', onClick: () => setActiveTab('prediction'),
    } : {
      q: 'Thinking about a move? See your stool predicted at your destination.',
      sub: 'Add a destination country to your profile and we\'ll forecast your school, place, and package scores using real educator data.',
      c: '#185FA5', bg: '#E6F1FB', badgeCol: '#185FA5',
      badge: 'Before you sign', urgent: false,
      action: 'Add a destination →', onClick: editProfile,
    },
    {
      q: cc ? `Why are your students in ${cc} behaving the way they are?`
             : "What's behind the classroom behaviors that are confusing you most?",
      sub: 'Eight common classroom patterns explained by the cultural research, with strategies for each, and how they\'d change at your destination.',
      c: '#3B6D11', bg: '#EAF3DE', badgeCol: '#3B6D11',
      badge: 'Research-backed', urgent: false,
      action: 'Open the Classroom Guide →', onClick: () => setActiveTab('faq'),
    },
  ]

  // Community stats — seed data for country/tax calcs, liveCount for display
  const totalRecords = liveCount
  const totalCountries = new Set(SALARY_DB_SEED.map(r => r.country)).size
  const taxFreeCount = SALARY_DB_SEED.filter(r => r.tax && (r.tax === '0%' || r.tax === '0' || /school pays|tax.?free|no tax/i.test(r.tax))).length
  const taxFreePct = Math.round(taxFreeCount / SALARY_DB_SEED.length * 100)

  return (
    <div className="tp active">

      {/* Community data strip */}
      <div className="stat-strip" style={{ marginBottom: '1.25rem' }}>
        {[
          { n: totalRecords.toLocaleString(), label: 'salary records', sub: 'from real educators' },
          { n: totalCountries, label: 'countries', sub: 'in our database' },
          { n: taxFreePct + '%', label: 'of jobs are tax-free', sub: 'worth $10k+ extra/yr at median' },
        ].map((s, i) => (
          <div key={i} className="stat-cell">
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.label}</div>
            <div className="stat-s">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Stool row */}
      <div style={{ display: 'flex', gap: '.875rem', alignItems: 'stretch', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {LEG_DEFS.map(leg => (
          <LegCard key={leg.key} {...leg} score={profile[leg.key] || 5} />
        ))}
        <div
          style={{
            flex: 2, minWidth: 180, minHeight: 140,
            background: 'white', border: '1px solid var(--border)',
            borderRadius: 'var(--r)', padding: '1rem 1.1rem',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '.5rem',
            boxShadow: 'var(--sh-1)',
          }}
        >
          <div className="eyebrow" style={{ color: 'var(--ink-4)' }}>Verdict</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.3 }}>{verdictText}</div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-4)', lineHeight: 1.5 }}>The research threshold for a sustainable posting is 2 of 3 legs at 6 or above.</div>
        </div>
      </div>

      {/* Five questions — 2-column tile grid */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div className="hero-tip" style={{ marginBottom: '1rem' }}>
          <span className="ht-icon" aria-hidden="true">💡</span>
          <span>
            <strong>The median salary in Switzerland is {(8873).toLocaleString('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0})}/mo. In Uganda it's $1,800.</strong>{' '}
            That $7,000/mo gap — plus tax, housing, and flights — makes destination one of the biggest financial decisions an international teacher makes. The questions below help you see yours clearly.
          </span>
        </div>
        <div className="eyebrow" style={{ marginBottom: '.875rem' }}>The questions worth answering</div>
        <div className="q-tiles" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '.75rem' }}>
          {questions.map((q, i) => (
            <div key={i} style={i === questions.length - 1 && questions.length % 2 !== 0 ? { gridColumn: 'span 2' } : undefined}>
              <QuestionCard {...q} />
            </div>
          ))}
        </div>
      </div>

      {/* Financial + Cultural */}
      <div className="g2">
        <div className="card">
          <div className="ct">Your financial picture</div>
          <div className="cs">How your package compares to the community data.</div>
          {sal > 0 && cd ? (
            <>
              <div className="g2" style={{ marginTop: '.5rem' }}>
                <div className="chip"><div className="chl">Your salary</div><div className="chv">${sal.toLocaleString()}</div><div className="chs">USD monthly</div></div>
                <div className="chip"><div className="chl">Regional median</div><div className="chv">${(cd.med || 4307).toLocaleString()}</div><div className="chs">from {liveCount.toLocaleString()} records</div></div>
              </div>
              <div style={{ marginTop: '.75rem', fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                You are <strong style={{ color: salGap >= 0 ? 'var(--teal-dark)' : 'var(--coral-dark)' }}>{salGap >= 0 ? '+' : ''}{salGap}%</strong> vs. the regional median.
                {hous === 'Provided' && <span style={{ color: 'var(--teal-dark)' }}> + Housing provided.</span>}
                {flt === 'Yes' && <span style={{ color: 'var(--teal-dark)' }}> + Flights covered.</span>}
                {tax === 'Tax-free' && <span style={{ color: 'var(--teal-dark)' }}> + Tax-free.</span>}
              </div>
              <div style={{ marginTop: 6, fontSize: 11.5, color: 'var(--ink-4)', lineHeight: 1.5 }}>
                Note: this median includes all experience levels. Early-career teachers typically earn 15–30% less than senior colleagues in the same market — so if you're just starting out, a negative gap is expected.
              </div>
              <div onClick={() => setActiveTab('data')} style={{ marginTop: '.75rem', fontSize: 12, fontWeight: 500, color: 'var(--teal-dark)', cursor: 'pointer' }}>See full salary database →</div>
            </>
          ) : (
            <div style={{ fontSize: 13, color: 'var(--ink-4)', padding: '.5rem 0' }}>
              Add your salary to your profile to see how you compare.{' '}
              <span onClick={editProfile} style={{ color: 'var(--teal)', cursor: 'pointer', fontWeight: 500 }}>Update profile →</span>
            </div>
          )}
        </div>

        <div className="card">
          <div className="ct">Cultural snapshot</div>
          <div className="cs">The biggest gap between where you're from and where you are now.</div>
          {hHome && hCur ? (() => {
            const gaps = DLBLS.map((d, i) => ({ d, gap: Math.abs(hHome[i] - hCur[i]), i, hc: hCur[i], hh: hHome[i] }))
            const sorted = [...gaps].sort((a, b) => b.gap - a.gap)
            const biggest = sorted[0]
            return (
              <div style={{ marginTop: '.5rem' }}>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: '.75rem', lineHeight: 1.5 }}>
                  Biggest gap <strong>{home}</strong> → <strong>{cc}</strong>: <strong style={{ color: 'var(--purple-dark)' }}>{biggest.d}</strong> — {biggest.gap} points.{' '}
                  {biggest.gap > 30 ? 'Significant adjustment.' : 'Manageable cultural distance.'}
                </div>
                {sorted.slice(0, 3).map(g => (
                  <div key={g.i} className="hbar">
                    <div className="hbh">
                      <span className="hbn" style={{ fontSize: 12 }}>{g.d}</span>
                      <span style={{ fontSize: 11, color: 'var(--ink-4)' }}>{home}: {g.hh} · {cc}: {g.hc}</span>
                    </div>
                    <div className="hbt"><div className="hbf" style={{ width: `${g.hc}%`, background: DCOLS[g.i] }} /></div>
                  </div>
                ))}
                <div onClick={() => setActiveTab('cultural')} style={{ marginTop: '.75rem', fontSize: 12, fontWeight: 500, color: 'var(--purple-dark)', cursor: 'pointer' }}>Full cultural analysis →</div>
              </div>
            )
          })() : (
            <div style={{ fontSize: 13, color: 'var(--ink-4)', padding: '.5rem 0' }}>
              Add your home and current country to see your cultural gap.{' '}
              <span onClick={editProfile} style={{ color: 'var(--teal)', cursor: 'pointer', fontWeight: 500 }}>Update profile →</span>
            </div>
          )}
        </div>
      </div>

      {/* Contribution prompts */}
      {(profile.school || profile.sal > 0) && (
        <div style={{ marginTop: '1.75rem' }}>
          <div className="eyebrow" style={{ marginBottom: '.625rem' }}>Help other teachers</div>

          {profile.school && (
            <button
              type="button"
              onClick={() => setActiveTab('schools')}
              className="card-hover"
              style={{
                background: 'var(--amber-bg)', border: '1px solid rgba(163,94,8,.22)',
                borderLeft: '3px solid var(--amber)',
                borderRadius: '0 var(--r) var(--r) 0',
                padding: '.95rem 1.1rem', marginBottom: '.5rem',
                width: '100%', textAlign: 'left', cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--amber-dark)', marginBottom: '.25rem' }}>
                Rate {profile.school}
              </div>
              <div style={{ fontSize: 12.5, color: '#63370A', lineHeight: 1.55 }}>
                Your honest school review helps other teachers considering this school. It takes about 2 minutes and is completely anonymous.
              </div>
            </button>
          )}

          {profile.sal > 0 && (
            <button
              type="button"
              onClick={() => setActiveTab('data')}
              className="card-hover"
              style={{
                background: 'var(--teal-light)', border: '1px solid rgba(14,138,95,.22)',
                borderLeft: '3px solid var(--teal)',
                borderRadius: '0 var(--r) var(--r) 0',
                padding: '.95rem 1.1rem', marginBottom: '.5rem',
                width: '100%', textAlign: 'left', cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <div style={{ fontSize: 13.5, fontWeight: 600, color: '#06523A', marginBottom: '.25rem' }}>
                Add your salary to the database
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--teal-dark)', lineHeight: 1.55 }}>
                Your salary data (with school details prefilled from your profile) helps others negotiate fairly. Anonymous and takes 30 seconds.
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

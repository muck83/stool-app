import { useState, useEffect } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { HOF, DLBLS, DCOLS } from '../../data/hofstede.js'
import { CITIES } from '../../data/geo.js'
import { SALARY_DB_SEED } from '../../data/salaryDb.js'
import { supabase } from '../../lib/supabase.js'

const LEG_DEFS = [
  { key: 'sch', l: 'School',  c: '#BA7517', bg: '#FAEEDA', desc: 'Leadership, culture, mission' },
  { key: 'plc', l: 'Place',   c: '#534AB7', bg: '#EEEDFE', desc: 'City, safety, lifestyle' },
  { key: 'pkg', l: 'Package', c: '#1D9E75', bg: '#E1F5EE', desc: 'Salary, housing, flights' },
]

function LegCard({ l, c, bg, desc, score }) {
  const label = score <= 3 ? 'Weak' : score <= 5 ? 'Shaky' : score <= 7 ? 'Solid' : 'Strong'
  return (
    <div style={{ flex: 1, minWidth: 120, borderTop: `3px solid ${c}`, border: `1px solid ${c}33`, borderTopWidth: 3, borderRadius: '0 0 var(--r) var(--r)', padding: '.875rem 1rem', background: bg }}>
      <div style={{ fontSize: 10, fontWeight: 500, color: c, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 4 }}>{l}</div>
      <div style={{ fontSize: '2rem', fontWeight: 300, lineHeight: 1, color: c, marginBottom: 3 }}>{score}</div>
      <div style={{ fontSize: 10, color: c, opacity: .75, marginBottom: 6 }}>{label}</div>
      <div style={{ height: 4, background: `${c}33`, borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: `${score * 10}%`, height: 4, background: c, borderRadius: 2 }} />
      </div>
      <div style={{ fontSize: 10.5, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.4 }}>{desc}</div>
    </div>
  )
}

function QuestionCard({ q, c, bg, urgent, badge, badgeCol, sub, action, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ background: bg, border: `1px solid ${c}22`, borderLeft: `3px solid ${c}`, borderRadius: '0 var(--rl) var(--rl) 0', padding: '1rem 1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: '1rem', transition: 'box-shadow .18s, transform .18s' }}
      onMouseOver={e => { e.currentTarget.style.boxShadow = '0 3px 14px rgba(0,0,0,.09)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
      onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.3rem', flexWrap: 'wrap' }}>
          {urgent && <span style={{ fontSize: 10, fontWeight: 500, background: '#D85A30', color: 'white', padding: '2px 7px', borderRadius: 10 }}>Urgent</span>}
          <span style={{ fontSize: 10, fontWeight: 500, background: `${badgeCol}22`, color: badgeCol, padding: '2px 7px', borderRadius: 10 }}>{badge}</span>
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', marginBottom: '.3rem', lineHeight: 1.4 }}>{q}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55, marginBottom: '.625rem' }}>{sub}</div>
        <div style={{ fontSize: 12, fontWeight: 500, color: c }}>{action}</div>
      </div>
      <div style={{ fontSize: 18, color: c, flexShrink: 0, marginTop: 2, opacity: .7 }}>›</div>
    </div>
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
      c: '#BA7517', bg: '#FAEEDA', badgeCol: sch < 6 ? '#D85A30' : '#1D9E75',
      badge: sch < 6 ? 'Priority' : 'Contribute', urgent: sch > 0 && sch < 5,
      action: 'Diagnose your school →', onClick: () => setActiveTab('schools'),
    },
    {
      q: sal === 0 ? 'Do you know if your salary is fair for your market?'
        : salGap !== null && salGap < -20 ? `You're earning ${Math.abs(salGap)}% below the median for your region. Is that intentional?`
        : salGap !== null && salGap < 0 ? "You're slightly below the regional median. See the full picture."
        : `You're above the regional median. See how you compare across ${cc || 'your region'}.`,
      sub: `${liveCount.toLocaleString()} real educator salary records — filterable by country, curriculum, and role. Know what the market pays before your next negotiation.${sal > 0 && salGap !== null && salGap < 0 ? ' Note: the median covers all experience levels — a gap is normal early in your career.' : ''}`,
      c: '#1D9E75', bg: '#E1F5EE', badgeCol: '#1D9E75',
      badge: sal > 0 && salGap !== null && salGap < -20 ? 'Worth checking' : 'Explore',
      urgent: sal > 0 && salGap !== null && salGap < -20,
      action: 'Explore salaries →', onClick: () => setActiveTab('data'),
    },
    {
      q: cc ? `Is what you're experiencing in ${cc} cultural friction — or something structural?`
             : "Is your unhappiness about the culture — or about the school and the package?",
      sub: 'Cultural friction improves with time. Structural problems don\'t. Eight honest questions help you tell the difference.',
      c: '#534AB7', bg: '#EEEDFE', badgeCol: '#534AB7',
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
      <div style={{
        display: 'flex', marginBottom: '1.25rem',
        background: 'white', border: '1px solid var(--border)',
        borderRadius: 'var(--rl)', overflow: 'hidden',
      }}>
        {[
          { n: totalRecords.toLocaleString(), label: 'salary records', sub: 'from real educators' },
          { n: totalCountries, label: 'countries', sub: 'in our database' },
          { n: taxFreePct + '%', label: 'of jobs are tax-free', sub: 'worth $10k+ extra/yr at median' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: '.75rem 1rem', textAlign: 'center',
            borderRight: i < 2 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--teal-dark)', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginTop: 3 }}>{s.label}</div>
            <div style={{ fontSize: 10.5, color: 'var(--ink-4)', marginTop: 1, lineHeight: 1.35 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Stool row */}
      <div style={{ display: 'flex', gap: '.875rem', alignItems: 'stretch', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {LEG_DEFS.map(leg => (
          <LegCard key={leg.key} {...leg} score={profile[leg.key] || 5} />
        ))}
        <div style={{ flex: 2, minWidth: 180, background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '.875rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5, marginBottom: '.5rem' }}>{verdictText}</div>
          <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>The research threshold for a sustainable posting is 2 of 3 legs at 6 or above.</div>
        </div>
      </div>

      {/* Five questions — 2-column tile grid */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{
          background: '#0f3460', borderRadius: 'var(--r)',
          padding: '.7rem 1rem', marginBottom: '.875rem',
          display: 'flex', alignItems: 'center', gap: '.75rem',
        }}>
          <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0 }}>💡</span>
          <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.9)', lineHeight: 1.5 }}>
            <strong style={{ color: '#7EC8B0' }}>The median salary in Switzerland is {(8873).toLocaleString('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0})}/mo. In Uganda it's $1,800.</strong>
            {' '}That $7,000/mo gap — plus tax, housing, and flights — makes destination one of the biggest financial decisions an international teacher makes. The questions below help you see yours clearly.
          </span>
        </div>
        <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.875rem' }}>The questions worth answering</div>
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
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', marginBottom: '.75rem' }}>Help other teachers</div>

          {profile.school && (
            <div
              onClick={() => setActiveTab('schools')}
              style={{
                background: '#FAEEDA', border: '1px solid #BA751733', borderRadius: 'var(--r)',
                padding: '.875rem 1rem', marginBottom: '.5rem', cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 500, color: '#633806', marginBottom: '.25rem' }}>
                Rate {profile.school}
              </div>
              <div style={{ fontSize: 12, color: '#854F0B', lineHeight: 1.5 }}>
                Your honest school review helps other teachers considering this school. It takes about 2 minutes and is completely anonymous.
              </div>
            </div>
          )}

          {profile.sal > 0 && (
            <div
              onClick={() => setActiveTab('data')}
              style={{
                background: '#E1F5EE', border: '1px solid #1D9E7533', borderRadius: 'var(--r)',
                padding: '.875rem 1rem', marginBottom: '.5rem', cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 500, color: '#085041', marginBottom: '.25rem' }}>
                Add your salary to the database
              </div>
              <div style={{ fontSize: 12, color: '#0F6E56', lineHeight: 1.5 }}>
                Your salary data (with school details prefilled from your profile) helps others negotiate fairly. Anonymous and takes 30 seconds.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

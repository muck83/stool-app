import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { COUNTRIES } from '../../data/countries.js'
import { CURRICULUM_OPTS, HOUSING_OPTS, FLIGHTS_OPTS, TAX_OPTS } from '../../data/options.js'

const COUNTRY_OPTS = COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)

function StoolSVG({ width = 110, height = 116 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 80 84" style={{ display: 'block', margin: '0 auto' }}>
      <ellipse id="spl-shadow" className="spl-a" style={{ '--dd': '1380ms', '--sd': '400ms' }}
        cx="40" cy="81" rx="24" ry="2.5" fill="#1a1917" opacity="0.07" />
      <line id="spl-l1" className="spl-a" style={{ '--dd': '480ms', '--sd': '550ms' }}
        x1="19" y1="22" x2="7" y2="74" stroke="#BA7517" strokeWidth="7" strokeLinecap="round" />
      <line id="spl-l2" className="spl-a" style={{ '--dd': '900ms', '--sd': '550ms' }}
        x1="40" y1="24" x2="40" y2="76" stroke="#534AB7" strokeWidth="7" strokeLinecap="round" />
      <line id="spl-l3" className="spl-a" style={{ '--dd': '1280ms', '--sd': '550ms' }}
        x1="61" y1="22" x2="73" y2="74" stroke="#1D9E75" strokeWidth="7" strokeLinecap="round" />
      <circle id="spl-f1" className="spl-a" style={{ '--dd': '480ms', '--sd': '550ms' }}
        cx="7" cy="74" r="5" fill="#BA7517" />
      <circle id="spl-f2" className="spl-a" style={{ '--dd': '900ms', '--sd': '550ms' }}
        cx="40" cy="76" r="5" fill="#534AB7" />
      <circle id="spl-f3" className="spl-a" style={{ '--dd': '1280ms', '--sd': '550ms' }}
        cx="73" cy="74" r="5" fill="#1D9E75" />
      <rect id="spl-seat" className="spl-a" style={{ '--dd': '80ms', '--sd': '500ms' }}
        x="7" y="13" width="66" height="17" rx="6" fill="#1a1917" />
      <rect id="spl-sheen" className="spl-a" style={{ '--dd': '80ms', '--sd': '500ms' }}
        x="11" y="14" width="58" height="3" rx="2" fill="#fff" opacity="0.07" />
    </svg>
  )
}

function Splash({ onNext }) {
  return (
    <div style={{ padding: '.25rem 0 1rem' }}>

      {/* Vision statement */}
      <div className="spl-a" style={{ '--dd': '200ms', '--sd': '500ms', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
        Most teachers discover what's wrong with a posting <em>after</em> they sign.
        stool uses real salary data, school intelligence, and cultural research to change that — built by a teacher who needed it.
      </div>

      {/* Three legs */}
      <div className="spl-a" style={{ '--dd': '500ms', '--sd': '500ms', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '.625rem', marginBottom: '1.25rem' }}>
        {[
          { color: '#BA7517', bg: '#FAEEDA', textColor: '#633806', subColor: '#854F0B', label: 'School', desc: 'Leadership · culture · workload · colleagues' },
          { color: '#534AB7', bg: '#EEEDFE', textColor: '#26215C', subColor: '#3C3489', label: 'Place', desc: 'City · safety · lifestyle · family' },
          { color: '#1D9E75', bg: '#E1F5EE', textColor: '#085041', subColor: '#0F6E56', label: 'Package', desc: 'Salary · housing · flights · tax' },
        ].map(leg => (
          <div key={leg.label} style={{ borderTop: `3px solid ${leg.color}`, borderRadius: '0 0 8px 8px', border: `1px solid ${leg.color}33`, borderTopWidth: 3, padding: '.875rem .625rem', background: leg.bg }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: leg.textColor, marginBottom: '.3rem' }}>{leg.label}</div>
            <div style={{ fontSize: 11, color: leg.subColor, lineHeight: 1.5 }}>{leg.desc}</div>
          </div>
        ))}
      </div>

      {/* The 2-of-3 rule */}
      <div className="spl-a" style={{ '--dd': '900ms', '--sd': '500ms', background: 'var(--surface-2)', borderRadius: 'var(--r)', padding: '.875rem 1rem', marginBottom: '.75rem', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65 }}>
        <strong>The 2-of-3 rule:</strong> you need at least 2 legs solid to sustain a posting.
        Recruiters lead with package. Almost every teacher who regrets a move underestimated school and place. This platform is built to correct that asymmetry.
      </div>

      {/* Privacy trust block */}
      <div className="spl-a" style={{ '--dd': '1200ms', '--sd': '500ms', background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '.875rem 1rem', marginBottom: '1.25rem' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginBottom: '.5rem' }}>
          🔒 Your data stays on your device
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.7, marginBottom: '.625rem' }}>
          Your profile is saved locally in your browser — we collect no names, no email addresses, no identifying information. We're not tracking you.
        </div>
        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
          {['Anonymous submissions only', 'No recruiters or school access', 'No ads or sponsored content'].map(t => (
            <span key={t} style={{ fontSize: 11, background: '#F0F9F6', border: '1px solid #1D9E7533', borderRadius: 20, padding: '3px 10px', color: '#0F6E56' }}>✓ {t}</span>
          ))}
        </div>
      </div>

      <button className="spl-au btn btn-primary" style={{ '--dd': '1500ms', '--sd': '500ms', width: '100%', fontSize: 15, padding: 14 }} onClick={onNext}>
        Build my profile →
      </button>
    </div>
  )
}

function SliderField({ label, id, value, onChange, description, color = 'var(--teal)' }) {
  return (
    <div className="sli">
      <label>
        <span className="sl" style={{ color }}>{label}</span>
        <span className="sv" style={{ color }}>{value}</span>
      </label>
      <input type="range" min={1} max={10} step={1} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ accentColor: color }} />
      <div className="sd">{description}</div>
    </div>
  )
}

const STEPS = [
  { title: "Where are you from?", sub: "Your home culture is the baseline — understanding what you're adapting from matters as much as where you're going." },
  { title: "Your current situation", sub: "Where are you right now? This anchors your cultural, financial, and professional baseline." },
  { title: "Considering a move?", sub: "Tell us where you're thinking of going and we'll predict your three-legged stool score at your destination." },
  { title: "Rate your current stool", sub: "Honest self-assessment. The research on expatriate adjustment is clear: false optimism here only delays a harder conversation later." },
]

export default function Onboarding() {
  const { launchDashboard } = useProfile()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '', home: '', yrs: '', curr: '', subj: '',
    cc: '', city: '', sal: '', hous: '', flt: '', tax: '',
    dc: '', dcity: '',
    sch: 5, plc: 5, pkg: 5,
  })

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const advance = () => {
    if (step === 0) { setStep(1); return }
    if (step < 4) { setStep(step + 1); return }
    launchDashboard({ ...form, sal: parseFloat(form.sal) || 0 })
  }

  const dots = Array.from({ length: 5 }, (_, i) => (
    <div key={i} className={`ob-dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
  ))

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '3rem 1.5rem 4rem', background: 'var(--surface)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
        <StoolSVG width={72} height={76} />
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--teal-dark)', letterSpacing: '-.02em', lineHeight: 1, marginBottom: '.35rem', marginTop: '.6rem' }}>stool</div>
        <div style={{ fontSize: 11, color: 'var(--ink-4)', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 500, marginBottom: '.35rem' }}>package · place · school</div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>The honest intelligence platform for international educators</div>
      </div>

      <div className="ob-card fu">
        <div className="ob-dots">{dots}</div>

        {step === 0 && <Splash onNext={() => setStep(1)} />}

        {step > 0 && (
          <>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '.35rem' }}>{STEPS[step - 1].title}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: '1.75rem', lineHeight: 1.55 }}>{STEPS[step - 1].sub}</div>

            {step === 1 && (
              <>
                <div className="frow">
                  <div className="fg"><label>First name (optional)</label><input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Mark" /></div>
                  <div className="fg"><label>Home country</label>
                    <select value={form.home} onChange={e => set('home', e.target.value)}>
                      <option value="">Select</option>{COUNTRY_OPTS}
                    </select>
                  </div>
                </div>
                <div className="frow">
                  <div className="fg"><label>Years teaching internationally</label>
                    <select value={form.yrs} onChange={e => set('yrs', e.target.value)}>
                      <option value="">Select</option>
                      {['Just starting','1–3 years','4–7 years','8–15 years','15+ years'].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="fg"><label>Primary curriculum</label>
                    <select value={form.curr} onChange={e => set('curr', e.target.value)}>
                      <option value="">Select</option>
                      {CURRICULUM_OPTS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="fg"><label>Subject area(s)</label><input value={form.subj} onChange={e => set('subj', e.target.value)} placeholder="e.g. Mathematics, IB DP" /></div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="frow">
                  <div className="fg"><label>Current country</label>
                    <select value={form.cc} onChange={e => set('cc', e.target.value)}>
                      <option value="">Select</option>{COUNTRY_OPTS}
                    </select>
                  </div>
                  <div className="fg"><label>Current city</label><input value={form.city} onChange={e => set('city', e.target.value)} placeholder="e.g. Bangkok" /></div>
                </div>
                <div className="frow">
                  <div className="fg"><label>Monthly salary (USD equiv.)</label><input type="number" value={form.sal} onChange={e => set('sal', e.target.value)} placeholder="e.g. 4500" min={0} /></div>
                  <div className="fg"><label>Housing</label>
                    <select value={form.hous} onChange={e => set('hous', e.target.value)}>
                      <option value="">Select</option>
                      {HOUSING_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="frow">
                  <div className="fg"><label>Flights allowance</label>
                    <select value={form.flt} onChange={e => set('flt', e.target.value)}>
                      <option value="">Select</option>
                      {FLIGHTS_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                  <div className="fg"><label>Tax status</label>
                    <select value={form.tax} onChange={e => set('tax', e.target.value)}>
                      <option value="">Select</option>
                      {TAX_OPTS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="frow">
                  <div className="fg"><label>Destination country</label>
                    <select value={form.dc} onChange={e => set('dc', e.target.value)}>
                      <option value="">No destination yet</option>{COUNTRY_OPTS}
                    </select>
                  </div>
                  <div className="fg"><label>Destination city</label><input value={form.dcity} onChange={e => set('dcity', e.target.value)} placeholder="e.g. Dubai" /></div>
                </div>
                <div className="ibox">The <strong>three-legged stool</strong>: school + place + package. You need at least 2 of 3. Our destination prediction uses 603 real salary records, cultural research data, and quality-of-life indices to forecast whether your stool improves at your destination.</div>
              </>
            )}

            {step === 4 && (
              <>
                <SliderField label="The school" id="sch" value={form.sch} onChange={v => set('sch', v)} description="Leadership, colleague culture, workload, professional development, mission" color="#BA7517" />
                <SliderField label="The place" id="plc" value={form.plc} onChange={v => set('plc', v)} description="City quality, safety, family life, lifestyle, adventure" color="#534AB7" />
                <SliderField label="The package" id="pkg" value={form.pkg} onChange={v => set('pkg', v)} description="Salary, housing, flights, tax, savings potential" color="#1D9E75" />
              </>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.75rem', gap: 12 }}>
              {step > 1
                ? <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>← Back</button>
                : <span />}
              <button className="btn btn-primary" onClick={advance}>
                {step === 4 ? 'Build my dashboard →' : 'Continue →'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

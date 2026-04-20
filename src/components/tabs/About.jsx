// About.jsx
import { useState } from 'react'
import { useProfile } from '../../context/ProfileContext.jsx'
import { insertFeedback } from '../../lib/supabase.js'

export default function About() {
  const { setActiveTab } = useProfile()
  const [msg, setMsg] = useState('')
  const [replyEmail, setReplyEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  return (
    <div className="tp active">

      {/* Opening story */}
      <div style={{ maxWidth: 660, marginBottom: '3rem' }}>

        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--ink)' }}>
          The police came.<br />
          <span style={{ color: 'var(--teal-dark)' }}>That was the best thing that happened.</span>
        </div>

        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          It was my 30th birthday. I'd been living in Ho Chi Minh City for about a month - teaching, adjusting, figuring things out. To celebrate, I bought some good sausages, packed my portable Weber, and walked to the park in Phu My Hung. It seemed like the obvious place.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          Two police officers appeared. Politely but clearly: I couldn't grill here.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          They didn't tell me where I <em>could</em> grill. They just told me the park wasn't it.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
          I'd been in Vietnam long enough to know one thing: in Saigon, you grill on the street. The pavement in front of your building, the edge of the road, the narrow strip of concrete outside the corner shop - that's where life happens. I picked up the Weber, walked to the kerb, and kept going. The officers watched for a moment. Then they smiled and left.
        </div>

        <div style={{ background: 'var(--surface-2)', borderLeft: '3px solid var(--teal)', borderRadius: '0 var(--r) var(--r) 0', padding: '1rem 1.25rem', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
          Nobody told me to move to the street. I just knew - because by then, I'd been paying attention.
        </div>

        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>
          That's the whole idea behind this platform. Not rules to memorise. Not a checklist of cultural dos and don'ts. Just enough understanding of the place you're going that when something unexpected happens - and it always does - you know which way to carry the grill.
        </div>
      </div>

      {/* The problem */}
      <div style={{ maxWidth: 660, marginBottom: '3rem' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--ink)' }}>
          Most teachers grill in the park for two years.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          International schools recruit with the package. The salary looks strong, housing is provided, flights home are covered, and it's tax-free. This is the leg of the stool that's easiest to measure and easiest to sell.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          The school - the leadership culture, the transparency, the workload, the way decisions get made - is much harder to evaluate from a job listing or a single interview. So is the city: whether you'll feel connected there, whether the safety and lifestyle match your life, whether it's a place where you'll grow rather than survive.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          Most teachers figure this out after they sign. Many are well into their second year before they can name which leg of the stool is actually broken.
        </div>
        <div style={{ background: '#F5E5C6', borderLeft: '3px solid #A35E08', borderRadius: '0 var(--r) var(--r) 0', padding: '1rem 1.25rem', fontSize: 14, color: '#4A2A02', lineHeight: 1.75 }}>
          <strong>You need at least 2 of 3 to be solid.</strong> One weak leg is survivable - you can manage it, work around it, find meaning in the other two. Two weak legs is a contract you'll regret. Almost everyone who regrets a move over-weighted the package and under-investigated the school.
        </div>
      </div>

      {/* Three legs */}
      <div style={{ maxWidth: 660, marginBottom: '3rem' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--ink)' }}>
          The three-legged stool
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '.75rem', marginBottom: '1.25rem' }}>
          {[
            { color: '#A35E08', bg: '#F5E5C6', textColor: '#4A2A02', label: 'School', desc: 'Leadership, transparency, workload, colleague culture, professional development, mission alignment. The thing you\'ll live inside every day.' },
            { color: '#3F3A8F', bg: '#E5E3F5', textColor: '#1A164E', label: 'Place', desc: 'City, safety, lifestyle, family logistics, social connection. Everything that happens outside the school gates.' },
            { color: '#0E8A5F', bg: '#DCF0E6', textColor: '#06523A', label: 'Package', desc: 'Salary, housing, flights, tax status, savings potential. The financial picture - important, but rarely the real story.' },
          ].map(leg => (
            <div key={leg.label} style={{ borderTop: `3px solid ${leg.color}`, border: `1px solid ${leg.color}33`, borderTopWidth: 3, borderRadius: '0 0 8px 8px', padding: '1rem', background: leg.bg }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: leg.textColor, marginBottom: '.4rem' }}>{leg.label}</div>
              <div style={{ fontSize: 12, color: leg.textColor, lineHeight: 1.6, opacity: .85 }}>{leg.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>
          The platform uses real salary data, Hofstede cultural dimensions research, and quality-of-life indices to give you a predicted score for each leg at your destination - before you sign. It also helps you diagnose your current posting: which leg is actually causing friction, and whether that friction is the kind that improves with time (cultural adaptation) or the kind that doesn't (structural problems).
        </div>
      </div>

      {/* About the founder */}
      <div style={{ maxWidth: 660, marginBottom: '3rem' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--ink)' }}>
          Where this came from
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          I'm a middle school math teacher. I did my PhD research in international education while teaching - not from a leadership position, not from a policy desk, from a classroom. I was watching what actually happened to teachers who moved: what made some thrive and others leave mid-contract, what the people who thrived understood that the people who struggled didn't.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: '1rem' }}>
          The answer wasn't salary. It was almost never salary. It was a combination of cultural fit, school culture, and genuine quality of life - three things that are hard to measure, rarely discussed honestly in the recruitment process, and almost never weighted properly against the package.
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>
          This platform is built to fix that. To give every teacher - whether they're considering their first international posting or their fifteenth - the honest picture before they decide. The kind of picture that might, one day, save your birthday.
        </div>
      </div>

      {/* CTA */}
      <div style={{ maxWidth: 660, paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          className="btn btn-primary"
          onClick={() => setActiveTab('overview')}
          style={{ fontSize: 13 }}
        >
          See my stool {'->'}
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => setActiveTab('diagnostic')}
          style={{ fontSize: 13 }}
        >
          Take the diagnostic
        </button>
      </div>

      {/* Comment / feedback box */}
      <div style={{ maxWidth: 660, marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '.75rem', color: 'var(--ink)' }}>
          Say something
        </div>
        {status === 'done' ? (
          <div style={{ fontSize: 13, color: 'var(--teal-dark)', lineHeight: 1.7 }}>
            Got it — thanks for taking the time.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            <textarea
              rows={4}
              placeholder="Questions, corrections, ideas, complaints — all welcome."
              value={msg}
              onChange={e => setMsg(e.target.value)}
              style={{
                width: '100%', boxSizing: 'border-box',
                padding: '.65rem .75rem', fontSize: 13, lineHeight: 1.65,
                border: '1px solid var(--border)', borderRadius: 'var(--r)',
                background: 'var(--surface)', color: 'var(--ink)',
                resize: 'vertical', fontFamily: 'inherit',
                outline: 'none',
              }}
            />
            <input
              type="email"
              placeholder="Email (optional — only if you want a reply)"
              value={replyEmail}
              onChange={e => setReplyEmail(e.target.value)}
              style={{
                padding: '.55rem .75rem', fontSize: 13,
                border: '1px solid var(--border)', borderRadius: 'var(--r)',
                background: 'var(--surface)', color: 'var(--ink)',
                fontFamily: 'inherit', outline: 'none',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                className="btn btn-primary"
                style={{ fontSize: 13 }}
                disabled={!msg.trim() || status === 'sending'}
                onClick={async () => {
                  setStatus('sending')
                  const result = await insertFeedback({ message: msg, email: replyEmail })
                  setStatus(result.error ? 'error' : 'done')
                }}
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
              {status === 'error' && (
                <span style={{ fontSize: 12, color: '#c0392b' }}>
                  Something went wrong — try again in a moment.
                </span>
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}




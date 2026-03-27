import { useProfile } from '../../context/ProfileContext.jsx'

export default function About() {
  const { setActiveTab } = useProfile()

  return (
    <div className="tp active">
      <div style={{ maxWidth: 680 }}>

        {/* ── Headline */}
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1.75rem', lineHeight: 1.25, marginBottom: '.75rem' }}>
          Built by a teacher who needed it
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink-3)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          stool is a free, independent intelligence platform for international educators. No ads. No recruiters. No sponsored listings.
        </div>

        {/* ── Personal story */}
        <div style={{ borderLeft: '3px solid var(--teal)', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', marginTop: 0, marginBottom: '1rem' }}>
            I moved to Vietnam to lead an international school. Within months, I was watching talented teachers make enormous decisions — accepting contracts, moving families, uprooting careers — based on almost nothing. Salary ranges whispered in Facebook groups. Schools described only by their own marketing. Places reduced to a single line in a job posting.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', marginTop: 0, marginBottom: '1rem' }}>
            I decided to study the problem properly. My PhD research at the University of the Cumberlands examined how nationality and culture shape the experience of working in international schools — specifically how teachers and assistants from different cultural backgrounds prefer to be led, using Hofstede's national culture framework across 96 educators at Saigon South International School. What I found confirmed what I'd been watching on the ground: culture isn't background noise in international education. It <em>is</em> the work.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--ink-2)', marginTop: 0, marginBottom: 0 }}>
            stool came out of a simple frustration: no tool existed that treated the international teaching decision as what it actually is — three separate legs that all have to hold. The <strong>package</strong> has to make sense financially. The <strong>school</strong> has to be a place where you can do real work. And the <strong>place</strong> has to sustain you as a human being. One short leg and the whole thing wobbles.
          </p>
        </div>

        {/* ── What stool is */}
        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', marginBottom: '1rem' }}>What we're building</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {[
              { icon: '💰', title: 'Real salary data', text: 'Crowd-sourced compensation records from international educators — not recruiter estimates, not marketing ranges. What teachers actually earn, housing-adjusted and tax-adjusted.' },
              { icon: '🏫', title: 'School intelligence', text: 'Reviews, ratings, and cultural context for international schools — built by educators, not by admissions departments.' },
              { icon: '🌍', title: 'Place as a variable', text: 'The place leg is personal. Where one teacher thrives, another struggles. Our preference system lets you score any city against what actually matters to you.' },
              { icon: '🎓', title: 'Research-grounded', text: 'The cultural dimension data, classroom guidance, and place analysis are grounded in Hofstede\'s Values Survey — the same framework that anchored my PhD research.' },
            ].map(({ icon, title, text }) => (
              <div key={title}>
                <div style={{ fontSize: '1.25rem', marginBottom: '.35rem' }}>{icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: '.35rem' }}>{title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Data trust section */}
        <div style={{ background: '#F7F6F3', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '.75rem' }}>
            On sharing your data
          </div>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginTop: 0, marginBottom: '1rem' }}>
            I understand why teachers are cautious. The international schools space has a long history of information asymmetry that benefits schools and recruiters — not teachers. stool exists to rebalance that.
          </p>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginTop: 0, marginBottom: '1rem' }}>
            Every salary record you contribute is anonymous. We collect no names, no email addresses, no identifying information beyond what makes the data meaningful — country, role, compensation structure. I spent years conducting IRB-approved academic research: I know what responsible data collection looks like and I've built stool with those same principles.
          </p>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginTop: 0, marginBottom: '1rem' }}>
            But here's the honest ask: the tool gets more useful the more teachers contribute. If you've ever wished you had better information before signing a contract, the way to build that is to add your own. The next teacher making that decision will benefit directly from what you share.
          </p>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            {[
              '✓ Fully anonymous submissions',
              '✓ No recruiter or school access',
              '✓ No ads, no sponsored content',
              '✓ Open to all international educators',
            ].map(t => (
              <span key={t} style={{ fontSize: 12, background: 'white', border: '1px solid var(--border-2)', borderRadius: 20, padding: '4px 12px', color: 'var(--ink-3)' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* ── Vision */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', marginBottom: '.75rem' }}>
            The vision
          </div>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginTop: 0, marginBottom: '1rem' }}>
            International teaching is still treated as an adventure you figure out as you go. There's no Bloomberg for international educator compensation. No Glassdoor that understands what it means to teach in a high-PDI culture. No tool that asks what you actually want from a place — not just what the school offers.
          </p>
          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.75, marginTop: 0, marginBottom: 0 }}>
            stool is early and imperfect, and the data gets richer every time a teacher adds their experience. The goal is a platform where any educator — whether they're considering their first move abroad or their fifth — can make an informed decision about whether a particular school, package, and place add up to a stable stool.
          </p>
        </div>

        {/* ── Author card */}
        <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '1.25rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ color: 'white', fontFamily: 'var(--serif)', fontSize: '1.2rem' }}>M</span>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>Mark Crowell, B.A., M.S.Ed, Ed.D</div>
            <div style={{ fontSize: 13, color: 'var(--ink-4)', marginBottom: '.5rem' }}>
              International school leader · PhD in Educational Leadership, University of the Cumberlands · Former faculty, Saigon South International School, Ho Chi Minh City
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>
              Research focus: leadership preferences of international school teachers across nationalities and cultures, using Hofstede's national culture framework.
            </div>
          </div>
        </div>

        {/* ── CTA */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('data')}
            style={{ padding: '10px 20px', background: 'var(--ink)', color: 'white', border: 'none', borderRadius: 'var(--r)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}
          >
            Contribute salary data →
          </button>
          <button
            onClick={() => setActiveTab('prediction')}
            style={{ padding: '10px 20px', background: 'white', color: 'var(--ink)', border: '1px solid var(--border-2)', borderRadius: 'var(--r)', fontSize: 14, cursor: 'pointer' }}
          >
            Explore a destination
          </button>
        </div>

      </div>
    </div>
  )
}

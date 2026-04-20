import { Link } from 'react-router-dom'

/**
 * /learn — platform entry point.
 * Visitor picks their track: teacher PD or parent guides.
 */

const TRACKS = [
  {
    id: 'teacher',
    emoji: '🎓',
    label: 'Teacher',
    title: 'Professional development',
    description: 'Research-grounded modules on the cultural, institutional, and pedagogical context of the country you\'re teaching in. Built for teachers moving to Korea, India, China, and the Gulf.',
    cta: 'Browse teacher modules →',
    href: '/learn/teacher',
    color: '#0E8A5F',
    tags: ['Korea', 'India', 'China', 'KSA'],
    tagNote: '4 country modules',
  },
  {
    id: 'parent',
    emoji: '🏠',
    label: 'Parent',
    title: 'School navigation guides',
    description: 'Practical guides for families at international schools. Understand what your child\'s school is doing, why the grades look different, and what questions actually get answers.',
    cta: 'Browse parent guides →',
    href: '/parent',
    color: '#185FA5',
    tags: ['Korea · IB', 'India · IB', 'China · IB', 'Japan · IB', 'Indonesia · IB', 'UAE · IB'],
    tagNote: '6 guides available',
  },
  {
    id: 'counselor',
    emoji: '🧭',
    label: 'Counselor',
    title: 'Cultural translation modules',
    description: 'Frameworks, reframe scripts, and copyable parent-facing language for counselors navigating friction between IB and home-country expectations from Saudi Arabia, China, and Korea.',
    cta: 'Browse counselor modules →',
    href: '/learn/counselor',
    color: '#6D3FC0',
    tags: ['KSA · IB', 'China · IB', 'Korea · IB'],
    tagNote: '1 module available',
  },
]

export default function PlatformHome() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '2.5rem 1.25rem 4rem' }}>

      {/* Back link */}
      <Link to="/" style={{
        fontSize: 12, color: 'var(--ink-4)', textDecoration: 'none',
        display: 'inline-block', marginBottom: '1.5rem',
      }}>
        ← Back to stool
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--ink)',
          margin: '0 0 10px 0', lineHeight: 1.15,
        }}>
          Learn
        </h1>
        <p style={{ fontSize: 15, color: 'var(--ink-3)', lineHeight: 1.65, maxWidth: 540, margin: 0 }}>
          Who is this for? Choose your track and we'll show you the right content.
        </p>
      </div>

      {/* Track cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.25rem',
        marginBottom: '3rem',
      }}>
        {TRACKS.map(track => (
          <Link
            key={track.id}
            to={track.href}
            style={{
              textDecoration: 'none',
              display: 'flex', flexDirection: 'column',
              padding: '1.5rem',
              border: `1px solid ${track.color}44`,
              borderTop: `3px solid ${track.color}`,
              borderRadius: 'var(--r)',
              background: 'var(--surface)',
              transition: 'box-shadow .15s, transform .1s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `0 4px 16px ${track.color}1A`
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {/* Emoji + label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <span style={{ fontSize: 28 }}>{track.emoji}</span>
              <div>
                <div style={{ fontSize: 10.5, fontWeight: 600, color: track.color, textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  {track.label}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2 }}>
                  {track.title}
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.7,
              margin: '0 0 1.25rem', flex: 1,
            }}>
              {track.description}
            </p>

            {/* Available content tags */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 6 }}>
                {track.tagNote}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {track.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 11, fontWeight: 500,
                    color: track.color,
                    background: `${track.color}12`,
                    border: `1px solid ${track.color}33`,
                    borderRadius: 10,
                    padding: '2px 9px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{
              fontSize: 12.5, fontWeight: 600, color: track.color,
              borderTop: `1px solid ${track.color}22`, paddingTop: '1rem',
            }}>
              {track.cta}
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <div style={{
        padding: '1rem 1.1rem',
        background: 'var(--surface-2)', borderRadius: 'var(--r)',
        border: '1px solid var(--border)',
        fontSize: 12.5, color: 'var(--ink-4)', lineHeight: 1.65,
      }}>
        Content on this platform is grounded in academic research, school data, and teacher experience.
        All modules show their evidence sourcing so you know what is well-established and what is
        based on practitioner knowledge.
      </div>
    </div>
  )
}

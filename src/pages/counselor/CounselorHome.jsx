import { Link } from 'react-router-dom'
import { counselorIb } from '../../../vocab/counselor/counselor-ib.jsx'

/**
 * /learn/counselor — listing of all counselor modules.
 */

const COUNSELOR_MODULES = [
  counselorIb,
]

const PROGRAM_META = {
  IB: { color: '#6D3FC0', label: 'IB World School' },
}

export default function CounselorHome() {
  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '2rem 1.25rem 4rem' }}>

      {/* Back link */}
      <Link to="/learn" style={{
        fontSize: 12, color: 'var(--ink-4)', textDecoration: 'none',
        display: 'inline-block', marginBottom: '1.5rem',
      }}>
        ← Back to Learn
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#6D3FC0', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
          Counselor modules
        </div>
        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--ink)',
          margin: '0 0 10px 0', lineHeight: 1.2,
        }}>
          Cultural translation for school counselors
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
          Practical frameworks, reframe scripts, and parent-facing language for counselors
          navigating the friction between international school programs and home-country
          expectations.
        </p>
      </div>

      {/* Module cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
        {COUNSELOR_MODULES.map(mod => {
          const pm = PROGRAM_META[mod.program] || { color: '#6D3FC0', label: mod.program }
          const m = mod.meta

          return (
            <Link
              key={mod.id}
              to={`/counselor/${mod.slug}`}
              style={{
                textDecoration: 'none',
                display: 'flex', alignItems: 'flex-start', gap: '1.1rem',
                padding: '1.25rem 1.4rem',
                border: `1px solid ${pm.color}33`,
                borderLeft: `4px solid ${pm.color}`,
                borderRadius: 'var(--r)',
                background: 'var(--surface)',
                transition: 'box-shadow .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 2px 12px ${pm.color}1A` }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Icon */}
              <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>
                🧭
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Chips */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 10.5, fontWeight: 700,
                    color: pm.color,
                    background: `${pm.color}15`,
                    padding: '2px 8px', borderRadius: 10,
                  }}>
                    {pm.label}
                  </span>
                  <span style={{
                    fontSize: 10.5, fontWeight: 600,
                    color: 'var(--ink-4)',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    padding: '2px 8px', borderRadius: 10,
                  }}>
                    English only
                  </span>
                  <span style={{
                    fontSize: 10.5, fontWeight: 600,
                    color: 'var(--ink-4)',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    padding: '2px 8px', borderRadius: 10,
                  }}>
                    KSA · China · Korea
                  </span>
                </div>

                {/* Title + subtitle */}
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                  {m?.title || mod.slug}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  {m?.subtitle}
                </div>

                {/* CTA hint */}
                <div style={{ marginTop: 10, fontSize: 12, fontWeight: 600, color: pm.color }}>
                  Open module →
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Coming soon */}
      <div style={{
        padding: '1rem 1.1rem',
        background: 'var(--surface-2)', borderRadius: 'var(--r)',
        border: '1px solid var(--border)',
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 5 }}>
          More modules coming
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Additional counselor modules covering Japan, Indonesia, UAE, and India are in
          development. Country-specific admissions guides and conversation scripts will
          be added as modules ship.
        </div>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { koreaIbParent }     from '../../../vocab/parent/korea-ib-parent.jsx'
import { indiaIbParent }     from '../../../vocab/parent/india-ib-parent.jsx'
import { chinaIbParent }     from '../../../vocab/parent/china-ib-parent.jsx'
import { ksaIbParent }       from '../../../vocab/parent/ksa-ib-parent.jsx'
import { vietnamIbParent }   from '../../../vocab/parent/vietnam-ib-parent.jsx'
import { woodstockParent }   from '../../../vocab/parent/woodstock-parent.jsx'
import { japanIbParent }     from '../../../vocab/parent/japan-ib-parent.jsx'
import { indonesiaIbParent } from '../../../vocab/parent/indonesia-ib-parent.jsx'
import { uaeIbParent }       from '../../../vocab/parent/uae-ib-parent.jsx'

/**
 * /parent — listing of all parent guide modules.
 */

const PARENT_MODULES = [
  woodstockParent,
  koreaIbParent, indiaIbParent, chinaIbParent, ksaIbParent, vietnamIbParent,
  japanIbParent, indonesiaIbParent, uaeIbParent,
]

const COUNTRY_META = {
  korea:         { flag: '🇰🇷', color: '#0E8A5F', label: 'Korea' },
  india:         { flag: '🇮🇳', color: '#E67E22', label: 'India' },
  china:         { flag: '🇨🇳', color: '#C0392B', label: 'China' },
  'saudi-arabia':{ flag: '🇸🇦', color: '#006C35', label: 'Saudi Arabia' },
  vietnam:       { flag: '🇻🇳', color: '#DA251D', label: 'Vietnam' },
  woodstock:     { flag: '🌲', color: '#8B1A1A', label: 'Woodstock · Mussoorie' },
  japan:         { flag: '🇯🇵', color: '#BC002D', label: 'Japan' },
  indonesia:     { flag: '🇮🇩', color: '#CE1126', label: 'Indonesia' },
  uae:           { flag: '🇦🇪', color: '#009A44', label: 'UAE' },
}

const LANG_CHIP_LABELS = { en: 'English', ko: '한국어', zh: '中文', ar: 'العربية', vi: 'Tiếng Việt', ja: '日本語', id: 'Indonesia' }

export default function ParentHome() {
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
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6 }}>
          Parent guides
        </div>
        <h1 style={{
          fontFamily: 'var(--serif)', fontSize: '1.75rem', color: 'var(--ink)',
          margin: '0 0 10px 0', lineHeight: 1.2,
        }}>
          Understanding your child's international school
        </h1>
        <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
          Practical guides for families at international schools — what the grades mean,
          why the approach looks different, and what to ask at parent–teacher meetings.
        </p>
      </div>

      {/* Module cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
        {PARENT_MODULES.map(mod => {
          const meta = COUNTRY_META[mod.slug] || COUNTRY_META[mod.country] || { flag: '🌍', color: 'var(--teal)', label: mod.country }
          const m = mod.meta?.en
          const isEnOnly = mod.languages?.length === 1 && mod.languages[0] === 'en'

          return (
            <Link
              key={mod.id}
              to={`/parent/${mod.slug}`}
              style={{
                textDecoration: 'none',
                display: 'flex', alignItems: 'flex-start', gap: '1.1rem',
                padding: '1.25rem 1.4rem',
                border: `1px solid ${meta.color}33`,
                borderLeft: `4px solid ${meta.color}`,
                borderRadius: 'var(--r)',
                background: 'var(--surface)',
                transition: 'box-shadow .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 2px 12px ${meta.color}1A` }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Flag */}
              <div style={{
                fontSize: 28, lineHeight: 1,
                flexShrink: 0, marginTop: 2,
              }}>
                {meta.flag}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Country + program chips */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 10.5, fontWeight: 700,
                    color: meta.color,
                    background: `${meta.color}15`,
                    padding: '2px 8px', borderRadius: 10,
                  }}>
                    {meta.label}
                  </span>
                  <span style={{
                    fontSize: 10.5, fontWeight: 600,
                    color: 'var(--ink-4)',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    padding: '2px 8px', borderRadius: 10,
                  }}>
                    {mod.program}
                  </span>
                  {isEnOnly && (
                    <span style={{
                      fontSize: 10.5, color: 'var(--ink-4)',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      padding: '2px 8px', borderRadius: 10,
                    }}>
                      English only
                    </span>
                  )}
                  {!isEnOnly && (
                    <span style={{
                      fontSize: 10.5, color: 'var(--ink-4)',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      padding: '2px 8px', borderRadius: 10,
                    }}>
                      {(mod.languages || []).map(l => LANG_CHIP_LABELS[l] || l.toUpperCase()).join(' / ')}
                    </span>
                  )}
                </div>

                {/* Title + subtitle */}
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                  {m?.title || mod.slug}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  {m?.subtitle}
                </div>

                {/* CTA hint */}
                <div style={{ marginTop: 10, fontSize: 12, fontWeight: 600, color: meta.color }}>
                  Open guide →
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
          More guides coming
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65 }}>
          Additional country guides are in development. If your school is not represented,
          your school can request a guide through the module author.
        </div>
      </div>
    </div>
  )
}

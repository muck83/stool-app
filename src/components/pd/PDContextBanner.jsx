import { moduleByCountry } from '../../lib/slugMap.js'

/**
 * Contextual banner shown on school profiles in Saudi Arabia, China, and
 * South Korea. Hidden for users who already hold the badge for that country.
 *
 * @param {{ country: string, badges: string[] }} props
 *   - country: the school's country name
 *   - badges: array of module IDs the user has earned (e.g. ['ksa-001'])
 */
export default function PDContextBanner({ country, badges = [] }) {
  const mod = moduleByCountry(country)
  if (!mod) return null

  // Hide if user already holds the badge
  if (badges.includes(mod.id)) return null

  const bannerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 20px',
    background: `linear-gradient(135deg, ${mod.color}12 0%, ${mod.color}08 100%)`,
    borderLeft: `4px solid ${mod.color}`,
    borderRadius: '0 var(--r) var(--r) 0',
    marginBottom: '1rem',
    fontSize: '14px',
    color: 'var(--ink-2)',
    lineHeight: 1.5,
  }

  const linkStyle = {
    display: 'inline-block',
    marginTop: '4px',
    fontSize: '13px',
    fontWeight: 500,
    color: mod.color,
    textDecoration: 'none',
    borderBottom: `1px solid ${mod.color}40`,
  }

  return (
    <div style={bannerStyle}>
      <div style={{ fontSize: '24px' }}>
        {mod.countryCode === 'SA' ? '🕌' : mod.countryCode === 'CN' ? '🏯' : '🏛️'}
      </div>
      <div>
        <div>
          <strong>Teaching in {mod.country}?</strong> Understand the cultural and institutional
          context before you arrive.
        </div>
        <a href={`/learn/${mod.slug}`} style={linkStyle}>
          Start the {mod.country} module →
        </a>
      </div>
    </div>
  )
}

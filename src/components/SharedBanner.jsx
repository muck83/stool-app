import { useProfile } from '../context/ProfileContext.jsx'

export default function SharedBanner() {
  const { profile, isSharedView, dismissSharedView } = useProfile()
  if (!isSharedView) return null

  const displayName = profile.name ? `${profile.name}'s` : "Someone's"

  return (
    <div style={{
      background: '#FFFBEA',
      borderBottom: '1px solid #F0D060',
      padding: '.625rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.625rem', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em',
          background: '#F0D060', color: '#7A5C00', padding: '2px 8px', borderRadius: 10,
        }}>
          Shared view
        </span>
        <span style={{ fontSize: 13, color: '#7A5C00', lineHeight: 1.5 }}>
          You're viewing <strong>{displayName}</strong> personal self-assessment —
          scores are their own ratings, not verified school data.
        </span>
      </div>
      <button
        onClick={dismissSharedView}
        style={{
          fontSize: 12, fontWeight: 600, color: 'var(--teal-dark)',
          background: 'white', border: '1px solid var(--teal)',
          borderRadius: 'var(--r)', padding: '5px 12px', cursor: 'pointer',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}
      >
        Build my own stool →
      </button>
    </div>
  )
}

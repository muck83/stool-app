import { useProfile } from '../context/ProfileContext.jsx'

export default function Nav({ tabs }) {
  const { profile, activeTab, setActiveTab } = useProfile()

  const initials = profile.name
    ? profile.name.slice(0, 2).toUpperCase()
    : '?'

  return (
    <header className="dh">
      <div className="db-brand" aria-label="stool — honest intelligence for international educators">
        <svg viewBox="0 0 80 84" aria-hidden="true">
          <line x1="19" y1="22" x2="7"  y2="74" stroke="#0E8A5F" strokeWidth="7" strokeLinecap="round"/>
          <line x1="40" y1="24" x2="40" y2="76" stroke="#3F3A8F" strokeWidth="7" strokeLinecap="round"/>
          <line x1="61" y1="22" x2="73" y2="74" stroke="#A35E08" strokeWidth="7" strokeLinecap="round"/>
          <circle cx="7"  cy="74" r="4.5" fill="#0E8A5F"/>
          <circle cx="40" cy="76" r="4.5" fill="#3F3A8F"/>
          <circle cx="73" cy="74" r="4.5" fill="#A35E08"/>
          <rect x="7" y="13" width="66" height="17" rx="6" fill="#1a1917"/>
        </svg>
        <span>stool</span>
      </div>

      <nav className="dtabs" aria-label="Main navigation">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`dtab ${activeTab === tab.id ? 'active' : ''}`}
            data-tab={tab.id}
            onClick={() => setActiveTab(tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <button
        className="dpb"
        onClick={() => setActiveTab('profile')}
        aria-label="Open profile"
      >
        <div className="dav">{initials}</div>
        <span>{profile.name || 'Profile'}</span>
      </button>
    </header>
  )
}

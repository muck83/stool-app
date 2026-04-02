import { useProfile } from '../context/ProfileContext.jsx'

export default function Nav({ tabs }) {
  const { profile, activeTab, setActiveTab, editProfile } = useProfile()

  const initials = profile.name
    ? profile.name.slice(0, 2).toUpperCase()
    : '?'

  return (
    <header className="dh">
      <div className="db-brand">
        <svg width="22" height="23" viewBox="0 0 80 84">
          <line x1="19" y1="22" x2="7"  y2="74" stroke="#1D9E75" stroke-width="7" strokeLinecap="round"/>
          <line x1="40" y1="24" x2="40" y2="76" stroke="#534AB7" stroke-width="7" strokeLinecap="round"/>
          <line x1="61" y1="22" x2="73" y2="74" stroke="#BA7517" stroke-width="7" strokeLinecap="round"/>
          <circle cx="7"  cy="74" r="4.5" fill="#1D9E75"/>
          <circle cx="40" cy="76" r="4.5" fill="#534AB7"/>
          <circle cx="73" cy="74" r="4.5" fill="#BA7517"/>
          <rect x="7" y="13" width="66" height="17" rx="6" fill="#1a1917"/>
        </svg>
        stool
      </div>

      <nav className="dtabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`dtab ${activeTab === tab.id ? 'active' : ''}`}
            data-tab={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <button className="dpb" onClick={() => setActiveTab('profile')}>
        <div className="dav">{initials}</div>
        <span>{profile.name || 'Profile'}</span>
      </button>
    </header>
  )
}

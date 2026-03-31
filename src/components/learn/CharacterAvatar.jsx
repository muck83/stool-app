export default function CharacterAvatar({ name, role, color, countryCode, size = 40 }) {
  const initials = getInitials(name)
  const persona = getAvatarPersona(name, role)
  const accent = getCountryAccent(countryCode, color)
  const fontSize = Math.max(12, Math.round(size * 0.34))
  const iconSize = Math.round(size * 0.62)
  const ringStrokeWidth = Math.max(1.5, size * 0.055)
  const showPattern = size >= 40
  const showBadge = size >= 34
  const patternOpacity = size < 40
    ? 0
    : persona === 'teacher'
      ? 0.12
      : persona === 'parent'
        ? 0.1
        : 0.08

  return (
    <div
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `
          radial-gradient(circle at 30% 28%, rgba(255,255,255,.88) 0%, rgba(255,255,255,.36) 24%, transparent 25%),
          linear-gradient(160deg, ${accent.surface} 0%, ${accent.surfaceAlt} 100%)
        `,
        border: `1.5px solid ${accent.outerBorder}`,
        color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        boxSizing: 'border-box',
        boxShadow: `0 4px 10px ${accent.shadow}, inset 0 1px 0 rgba(255,255,255,.75)`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', inset: 0 }}
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size / 2) - (ringStrokeWidth * 0.6)}
          fill="none"
          stroke="rgba(255,255,255,.58)"
          strokeWidth={Math.max(1, ringStrokeWidth * 0.55)}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={(size / 2) - ringStrokeWidth}
          fill="none"
          stroke={accent.ring}
          strokeWidth={ringStrokeWidth}
          strokeDasharray={getRoleRingDash(persona, size)}
          strokeLinecap="round"
          opacity="0.75"
        />
        {showPattern && persona === 'teacher' && (
          <>
            <path
              d={`M ${size * 0.26} ${size * 0.36} L ${size * 0.74} ${size * 0.36}`}
              stroke={accent.pattern}
              strokeWidth="1.35"
              strokeLinecap="round"
              opacity={patternOpacity}
            />
            <path
              d={`M ${size * 0.31} ${size * 0.30} L ${size * 0.31} ${size * 0.70}`}
              stroke={accent.pattern}
              strokeWidth="1.05"
              strokeLinecap="round"
              opacity={patternOpacity}
            />
            <path
              d={`M ${size * 0.69} ${size * 0.30} L ${size * 0.69} ${size * 0.70}`}
              stroke={accent.pattern}
              strokeWidth="1.05"
              strokeLinecap="round"
              opacity={patternOpacity}
            />
          </>
        )}
        {showPattern && persona === 'parent' && (
          <path
            d={`M ${size * 0.18} ${size * 0.63} C ${size * 0.30} ${size * 0.50}, ${size * 0.44} ${size * 0.72}, ${size * 0.56} ${size * 0.59} S ${size * 0.79} ${size * 0.52}, ${size * 0.84} ${size * 0.65}`}
            fill="none"
            stroke={accent.pattern}
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity={patternOpacity}
          />
        )}
        {showPattern && persona === 'student' && (
          <>
            {[0.3, 0.5, 0.7].map((y, index) => (
              <circle
                key={index}
                cx={size * (0.24 + (index * 0.18))}
                cy={size * y}
                r={size * 0.028}
                fill={accent.pattern}
                opacity={patternOpacity}
              />
            ))}
          </>
        )}
      </svg>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {name === 'You' ? (
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="7.2" r="3.45" stroke={color} strokeWidth="1.75" />
            <path
              d="M6.3 18.2c.8-2.3 2.72-3.7 5.7-3.7 3.02 0 4.95 1.4 5.75 3.7"
              stroke={color}
              strokeWidth="1.85"
              strokeLinecap="round"
            />
            <path
              d="M8.7 14.55 12 17.55l3.3-3"
              stroke={color}
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.72"
            />
            <path
              d="M9.2 11.7h5.6"
              stroke={accent.pattern}
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.62"
            />
          </svg>
        ) : (
          <span
            style={{
              fontSize,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '.02em',
              textShadow: '0 1px 0 rgba(255,255,255,.35)',
            }}
          >
            {initials}
          </span>
        )}
      </div>

      {showBadge && (
        <div
          style={{
            position: 'absolute',
            right: Math.max(1, size * 0.04),
            bottom: Math.max(1, size * 0.04),
            width: Math.max(10, size * 0.22),
            height: Math.max(10, size * 0.22),
            borderRadius: '50%',
            background: accent.badgeBg,
            border: `1.5px solid ${accent.badgeBorder}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            boxShadow: '0 1px 3px rgba(16,24,40,.12)',
          }}
        >
          <CountryAccentMark countryCode={countryCode} color={accent.badgeBorder} />
        </div>
      )}
    </div>
  )
}

function CountryAccentMark({ countryCode, color }) {
  if (countryCode === 'CN') {
    return (
      <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M6 1.3 7.2 4l2.9.24-2.2 1.9.7 2.8L6 7.4 3.4 8.9l.7-2.8L1.9 4.2 4.8 4 6 1.3Z" fill={color} />
      </svg>
    )
  }
  if (countryCode === 'IN') {
    return (
      <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="3.5" stroke={color} strokeWidth="1.3" />
        <circle cx="6" cy="6" r="0.9" fill={color} />
      </svg>
    )
  }
  if (countryCode === 'KR') {
    return (
      <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M6 2.2a3.8 3.8 0 0 1 0 7.6c-1.35 0-2.5-.7-3.1-1.78h3.1V2.2Z" fill={color} opacity="0.95" />
        <path d="M6 9.8a3.8 3.8 0 0 1 0-7.6c1.35 0 2.5.7 3.1 1.78H6V9.8Z" fill={color} opacity="0.42" />
      </svg>
    )
  }
  if (countryCode === 'SA') {
    return (
      <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2.2 4.1h7.6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
        <path d="M4.2 7.2h3.6" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="2.8" fill={color} />
    </svg>
  )
}

function getInitials(name) {
  if (!name) return '?'
  const words = String(name).trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return '?'
  if (words.length === 1) return words[0].slice(0, 1).toUpperCase()
  return `${words[0][0] || ''}${words[words.length - 1][0] || ''}`.toUpperCase().slice(0, 2)
}

function getAvatarPersona(name, role) {
  const normalizedRole = String(role || '').toLowerCase()
  const normalizedName = String(name || '').toLowerCase()
  if (normalizedName === 'you' || normalizedRole.includes('teacher') || normalizedRole.includes('leader')) {
    return 'teacher'
  }
  if (
    normalizedRole.includes('mother') ||
    normalizedRole.includes('father') ||
    normalizedRole.includes('parent') ||
    normalizedRole.includes('guardian')
  ) {
    return 'parent'
  }
  if (
    normalizedRole.includes('student') ||
    normalizedRole.includes('child') ||
    normalizedRole.includes('year ')
  ) {
    return 'student'
  }
  return 'default'
}

function getRoleRingDash(persona, size) {
  if (persona === 'teacher') return `${size * 0.36} ${size * 0.08} ${size * 0.10} ${size * 0.08}`
  if (persona === 'parent') return `${size * 0.18} ${size * 0.09}`
  if (persona === 'student') return `${size * 0.04} ${size * 0.11}`
  return ''
}

function getCountryAccent(countryCode, baseColor) {
  const accents = {
    SA: {
      ring: '#2E8B57',
      pattern: '#1F6B43',
      badgeBg: '#E9F5EE',
      badgeBorder: '#2E8B57',
      surface: '#F4FBF7',
      surfaceAlt: '#DBF0E4',
      outerBorder: '#B8DCC5',
      shadow: 'rgba(46, 139, 87, 0.16)',
    },
    CN: {
      ring: '#D6A11B',
      pattern: '#B78500',
      badgeBg: '#FFF6DD',
      badgeBorder: '#D6A11B',
      surface: '#FFF8EA',
      surfaceAlt: '#F8E8BF',
      outerBorder: '#E7C977',
      shadow: 'rgba(214, 161, 27, 0.16)',
    },
    KR: {
      ring: '#2E7ACB',
      pattern: '#D95858',
      badgeBg: '#EEF4FF',
      badgeBorder: '#2E7ACB',
      surface: '#F3F7FF',
      surfaceAlt: '#DBE8FF',
      outerBorder: '#B8CCF0',
      shadow: 'rgba(46, 122, 203, 0.16)',
    },
    IN: {
      ring: '#2E5AAC',
      pattern: '#E18A1A',
      badgeBg: '#EEF3FF',
      badgeBorder: '#2E5AAC',
      surface: '#F4F7FF',
      surfaceAlt: '#E0E7FB',
      outerBorder: '#C0CDEC',
      shadow: 'rgba(46, 90, 172, 0.16)',
    },
  }
  return accents[countryCode] || {
    ring: baseColor,
    pattern: baseColor,
    badgeBg: `${baseColor}18`,
    badgeBorder: baseColor,
    surface: `${baseColor}10`,
    surfaceAlt: `${baseColor}22`,
    outerBorder: `${baseColor}38`,
    shadow: `${baseColor}22`,
  }
}

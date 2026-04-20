export default function CharacterAvatar({ name, role, color, countryCode, size = 40 }) {
  const persona = getAvatarPersona(name, role)
  const accent = getCountryAccent(countryCode, color)
  const portrait = getPortraitRecipe({ name, role, persona, countryCode })
  const borderWidth = Math.max(1.5, size * 0.05)
  const badgeSize = Math.max(10, size * 0.2)
  const showBadge = size >= 34

  return (
    <div
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        boxSizing: 'border-box',
        background: `
          radial-gradient(circle at 30% 24%, rgba(255,255,255,.92) 0%, rgba(255,255,255,.45) 18%, transparent 19%),
          linear-gradient(180deg, ${accent.skyTop} 0%, ${accent.skyMid} 54%, ${accent.skyBottom} 100%)
        `,
        border: `${borderWidth}px solid ${accent.frame}`,
        boxShadow: `0 6px 18px ${accent.shadow}, inset 0 1px 0 rgba(255,255,255,.7)`,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{ display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <clipPath id={`avatarClip-${sanitizeId(name)}-${size}`}>
            <circle cx="50" cy="50" r="50" />
          </clipPath>
        </defs>

        <g clipPath={`url(#avatarClip-${sanitizeId(name)}-${size})`}>
          <rect x="0" y="0" width="100" height="100" fill="transparent" />

          <ellipse cx="50" cy="83" rx="34" ry="18" fill={accent.baseShadow} opacity="0.16" />

          {portrait.hairBack && (
            <path d={portrait.hairBack} fill={portrait.hairColor} />
          )}

          <path d={portrait.neck} fill={portrait.skin} />
          <path d={portrait.body} fill={portrait.clothing} />
          {portrait.collar && <path d={portrait.collar} fill={portrait.collarColor} />}
          {portrait.secondaryClothing && <path d={portrait.secondaryClothing} fill={portrait.secondaryColor} />}

          <path d={portrait.face} fill={portrait.skin} />
          <path d={portrait.hair} fill={portrait.hairColor} />

          {portrait.earLeft && <path d={portrait.earLeft} fill={portrait.skin} />}
          {portrait.earRight && <path d={portrait.earRight} fill={portrait.skin} />}

          <path d={portrait.brows} stroke={portrait.feature} strokeWidth="1.7" strokeLinecap="round" fill="none" opacity="0.9" />
          <path d={portrait.eyes} stroke={portrait.feature} strokeWidth="1.6" strokeLinecap="round" fill="none" />
          <path d={portrait.nose} stroke={portrait.featureSoft} strokeWidth="1.25" strokeLinecap="round" fill="none" opacity="0.72" />
          <path d={portrait.mouth} stroke={portrait.feature} strokeWidth="1.45" strokeLinecap="round" fill="none" opacity="0.82" />

          {portrait.glasses && (
            <g stroke={portrait.feature} strokeWidth="1.25" fill="none" opacity="0.72">
              <rect x="34" y="41" width="12" height="8" rx="3.4" />
              <rect x="54" y="41" width="12" height="8" rx="3.4" />
              <path d="M46 45h8" />
            </g>
          )}

          {portrait.accessory && <path d={portrait.accessory} fill={portrait.accessoryColor} opacity="0.95" />}

          <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(255,255,255,.34)" strokeWidth="2" />
          <circle cx="50" cy="50" r="47.5" fill="none" stroke={accent.innerRing} strokeWidth="1.5" opacity="0.48" />
        </g>
      </svg>

      {showBadge && (
        <div
          style={{
            position: 'absolute',
            right: Math.max(1, size * 0.05),
            bottom: Math.max(1, size * 0.05),
            width: badgeSize,
            height: badgeSize,
            borderRadius: '50%',
            background: accent.badgeBg,
            border: `1.5px solid ${accent.badgeBorder}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 1px 4px rgba(16,24,40,.14)',
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
  return 'adult'
}

function getPortraitRecipe({ name, role, persona, countryCode }) {
  const seed = hashSeed(`${name}|${role}|${countryCode}`)
  const skinPalette = [
    '#F3D3B5',
    '#E8C29D',
    '#D8AB82',
    '#BF8B65',
    '#9D6C4E',
  ]
  const hairPalette = ['#1E1A1B', '#31282A', '#4B372F', '#5A463C', '#231F28']
  const clothingPalette = getClothingPalette(countryCode)

  const skin = skinPalette[seed % skinPalette.length]
  const hairColor = hairPalette[(seed >> 2) % hairPalette.length]
  const clothing = clothingPalette.primary[(seed >> 4) % clothingPalette.primary.length]
  const collarColor = clothingPalette.collar[(seed >> 5) % clothingPalette.collar.length]
  const secondaryColor = clothingPalette.secondary[(seed >> 6) % clothingPalette.secondary.length]
  const feature = '#5B4438'
  const featureSoft = '#8B6D5B'

  const recipeByPersona = {
    teacher: getTeacherPortrait,
    parent: getParentPortrait,
    student: getStudentPortrait,
    adult: getAdultPortrait,
  }

  return recipeByPersona[persona]({
    seed,
    name,
    role,
    skin,
    hairColor,
    clothing,
    collarColor,
    secondaryColor,
    feature,
    featureSoft,
  })
}

function getTeacherPortrait(palette) {
  return buildPortrait({
    ...palette,
    face: 'M50 24c12.4 0 21 9.3 21 22.4 0 15.7-10.4 25.1-21 25.1s-21-9.4-21-25.1C29 33.3 37.6 24 50 24Z',
    hair: 'M29 46c0-17.4 11.2-24.2 21-24.2 10.6 0 20.5 6.9 22.1 19.8-2.6-4.4-5.5-7.5-9.4-9.8-4.5-2.7-9.5-4.1-14.8-4.1-4.6 0-8.6 1-12 3.1-3.3 2-5.7 4.6-7.5 8.1L29 46Z',
    hairBack: 'M33 63c-2.6-4.9-4-10.3-4-16.4 0-2.4.2-4.6.6-6.7 1.8 4 4.2 7.4 7.4 10.1 4.1 3.4 8.4 5.2 13.1 5.2s9-1.7 13.1-5.2c3.2-2.7 5.6-6.1 7.4-10.1.4 2.1.6 4.3.6 6.7 0 6.1-1.4 11.5-4 16.4H33Z',
    neck: 'M44.3 64h11.4v8.6H44.3Z',
    body: 'M18 100c1.6-10.8 5.7-19.1 12.2-24.8C35.6 70.5 42.1 68 50 68c7.9 0 14.4 2.5 19.8 7.2C76.3 80.9 80.4 89.2 82 100H18Z',
    collar: 'M37.6 72.8 50 81l12.4-8.2 4.5 4.5L50 100 33.1 77.3l4.5-4.5Z',
    secondaryClothing: 'M44.4 71.8 50 79.2l5.6-7.4v7.8L50 87l-5.6-7.4v-7.8Z',
    brows: 'M39 46.2c1.8-1.6 4-2.3 6.7-2.2M54.3 44c2.7-.1 4.9.6 6.7 2.2',
    eyes: 'M38.8 49.7c2 .7 4 .7 6 0M55.2 49.7c2 .7 4 .7 6 0',
    nose: 'M50 50.4v7.1c0 1 .6 1.8 1.5 2.1',
    mouth: 'M44.5 61.6c1.6 1.4 3.5 2.1 5.5 2.1 2 0 3.9-.7 5.5-2.1',
    earLeft: 'M28.7 48.8c-1.4.6-2.1 1.7-2.1 3.2 0 1.8.8 3 2.4 3.7',
    earRight: 'M71.3 48.8c1.4.6 2.1 1.7 2.1 3.2 0 1.8-.8 3-2.4 3.7',
    glasses: String(palette.role || '').toLowerCase().includes('leader') || String(palette.name).toLowerCase() === 'you',
    accessory: 'M46.8 71.8h6.4l-3.2 4.4-3.2-4.4Z',
    accessoryColor: palette.secondaryColor,
  })
}

function getParentPortrait(palette) {
  const isFather = /father|mr\b|dad/i.test(`${palette.role} ${palette.name}`)
  return buildPortrait({
    ...palette,
    face: 'M50 25.5c11.8 0 20 8.8 20 21.2 0 15.1-10 24.2-20 24.2s-20-9.1-20-24.2C30 34.3 38.2 25.5 50 25.5Z',
    hair: isFather
      ? 'M31 46.2c.4-15.6 10.5-23.5 19.1-23.5 9 0 18.3 7.2 19.9 18.7-2.7-3.8-5.5-6.6-8.4-8.2-3.3-1.9-7.2-2.9-11.8-2.9-4.7 0-8.8 1.1-12.3 3.4-3 1.9-5.2 4.4-6.5 7.4Z'
      : 'M30.5 46.5c0-15.4 10.5-24.7 19.5-24.7 12.1 0 20.4 9.1 20.4 23.8-1.5-3.6-3.8-6.8-6.8-9.4-3.7-3.1-8-4.7-12.9-4.7-4.9 0-9.2 1.6-12.9 4.7-3 2.6-5.3 5.8-7.3 10.3Z',
    hairBack: isFather ? null : 'M34 64.5c-3.1-4.7-4.7-10.2-4.7-16.6 0-1.6.1-3.2.3-4.8 1.7 4.7 4.3 8.6 7.8 11.8 3.8 3.4 8 5.1 12.6 5.1 4.6 0 8.8-1.7 12.6-5.1 3.5-3.2 6.1-7.1 7.8-11.8.2 1.6.3 3.2.3 4.8 0 6.4-1.6 11.9-4.7 16.6H34Z',
    neck: 'M44.5 63.5h11v8.4h-11Z',
    body: 'M16.5 100c1.7-11.2 6-19.6 12.8-25 5.3-4.2 12.2-6.5 20.7-6.5 8.5 0 15.4 2.3 20.7 6.5 6.8 5.4 11.1 13.8 12.8 25H16.5Z',
    collar: isFather ? 'M35 74.5c4.8-3.6 9.8-5.4 15-5.4s10.2 1.8 15 5.4l-4.8 7.3H39.8L35 74.5Z' : 'M39 72.8c3.3 2.6 7 3.9 11 3.9s7.7-1.3 11-3.9l4.2 6.8H34.8l4.2-6.8Z',
    secondaryClothing: isFather ? 'M44.6 78.2h10.8l-2 21.8h-6.8l-2-21.8Z' : 'M34 79h32v21H34Z',
    brows: 'M39.5 45.5c1.6-1.1 3.6-1.6 5.9-1.5M54.6 44c2.3-.1 4.3.4 5.9 1.5',
    eyes: 'M39.5 49.2c1.6.5 3.3.5 5 0M55.5 49.2c1.6.5 3.3.5 5 0',
    nose: 'M50 49.8v6.8',
    mouth: isFather ? 'M45.4 61.2c1.3 1 2.8 1.5 4.6 1.5 1.8 0 3.3-.5 4.6-1.5' : 'M44.2 61.1c1.7 1.3 3.6 2 5.8 2 2.2 0 4.1-.7 5.8-2',
    earLeft: 'M30.3 49c-1.3.4-2 1.4-2 3 0 1.6.8 2.8 2.3 3.3',
    earRight: 'M69.7 49c1.3.4 2 1.4 2 3 0 1.6-.8 2.8-2.3 3.3',
    glasses: false,
    accessory: isFather ? 'M49 80.2h2v7.6h-2Z' : null,
    accessoryColor: palette.secondaryColor,
  })
}

function getStudentPortrait(palette) {
  const studentVariant = hashSeed(`${palette.name}|student`) % 2
  return buildPortrait({
    ...palette,
    face: 'M50 28c10.4 0 17.8 7.9 17.8 18.9 0 13.5-8.7 21.9-17.8 21.9-9.1 0-17.8-8.4-17.8-21.9C32.2 35.9 39.6 28 50 28Z',
    hair: studentVariant === 0
      ? 'M33 46.5c.8-13.6 9.8-21.2 17.2-21.2 8.8 0 16.8 6.8 18.3 18.2-2.6-2.5-5-4.4-7.4-5.6-3.1-1.7-6.7-2.6-10.9-2.6-4.1 0-7.8.9-11.1 2.8-2.7 1.6-4.8 4.1-6.1 8.4Z'
      : 'M33.2 47.5c0-14 9-21.7 16.8-21.7 9.9 0 17.4 7.1 18.4 19.2-2.2-3.4-4.9-6-8-7.9-3.4-2.1-6.9-3.1-10.4-3.1-3.6 0-7.1 1-10.6 3.1-3.2 1.9-5.9 4.7-8.2 8.3Z',
    hairBack: studentVariant === 0 ? null : 'M36 62.5c-2.5-3.6-3.8-8.1-3.8-13.6 0-1.6.1-3 .3-4.4 1.6 3.9 4.1 7.1 7.4 9.7 3.1 2.4 6.5 3.6 10.1 3.6 3.6 0 7-1.2 10.1-3.6 3.3-2.6 5.8-5.8 7.4-9.7.2 1.4.3 2.8.3 4.4 0 5.5-1.3 10-3.8 13.6H36Z',
    neck: 'M45.6 61.2h8.8v7.8h-8.8Z',
    body: 'M20.5 100c1.9-10.4 5.8-18 11.8-22.8C36.8 73.6 42.7 71.8 50 71.8c7.3 0 13.2 1.8 17.7 5.4 6 4.8 9.9 12.4 11.8 22.8H20.5Z',
    collar: 'M36.2 74.3h27.6v6.4H36.2Z',
    secondaryClothing: 'M44.4 73.5 50 79l5.6-5.5v7.8L50 87l-5.6-5.7v-7.8Z',
    brows: 'M40.2 46c1.2-.7 2.7-1 4.4-.9M55.4 45.1c1.7-.1 3.2.2 4.4.9',
    eyes: 'M40.1 49.6c1.3.4 2.8.4 4.1 0M55.8 49.6c1.3.4 2.8.4 4.1 0',
    nose: 'M50 50.4v5.8',
    mouth: 'M45.2 60.2c1.3 1.1 2.9 1.6 4.8 1.6 1.9 0 3.5-.5 4.8-1.6',
    earLeft: 'M32 49.6c-1 .5-1.6 1.4-1.6 2.7 0 1.4.6 2.4 1.8 3',
    earRight: 'M68 49.6c1 .5 1.6 1.4 1.6 2.7 0 1.4-.6 2.4-1.8 3',
    glasses: false,
    accessory: studentVariant === 1 ? 'M42 74.8h16l-2.1 3.5H44.1L42 74.8Z' : null,
    accessoryColor: palette.secondaryColor,
  })
}

function getAdultPortrait(palette) {
  return getParentPortrait(palette)
}

function buildPortrait(parts) {
  return {
    skin: parts.skin,
    hairColor: parts.hairColor,
    clothing: parts.clothing,
    collarColor: parts.collarColor,
    secondaryColor: parts.secondaryColor,
    feature: parts.feature,
    featureSoft: parts.featureSoft,
    face: parts.face,
    hair: parts.hair,
    hairBack: parts.hairBack,
    neck: parts.neck,
    body: parts.body,
    collar: parts.collar,
    secondaryClothing: parts.secondaryClothing,
    brows: parts.brows,
    eyes: parts.eyes,
    nose: parts.nose,
    mouth: parts.mouth,
    earLeft: parts.earLeft,
    earRight: parts.earRight,
    glasses: parts.glasses,
    accessory: parts.accessory,
    accessoryColor: parts.accessoryColor,
  }
}

function getClothingPalette(countryCode) {
  const palettes = {
    CN: {
      primary: ['#6C3B32', '#345B7B', '#506F5D', '#7A5C35'],
      collar: ['#F6EFE5', '#E8EEF6', '#EEF4EE'],
      secondary: ['#C9A34D', '#7898BA', '#7F9F8C'],
    },
    KR: {
      primary: ['#30486E', '#5D4D7E', '#476155', '#7A4C4C'],
      collar: ['#F2F5FA', '#F4F0FA', '#EEF4EE'],
      secondary: ['#D66B6B', '#6B91D6', '#9DBBA7'],
    },
    SA: {
      primary: ['#345849', '#475A72', '#6B4E3C', '#5A3C46'],
      collar: ['#F6F7F3', '#EEF3F8', '#F7F1ED'],
      secondary: ['#C89C55', '#A5C8B2', '#A7BDD8'],
    },
    IN: {
      primary: ['#5B4D8C', '#355A7A', '#7A4E33', '#456B4F'],
      collar: ['#F7F4EF', '#EFF3F9', '#F3F6EF'],
      secondary: ['#E38A1A', '#567FCA', '#8DAA78'],
    },
  }
  return palettes[countryCode] || {
    primary: ['#556B7A', '#6C5A7A', '#6F553D'],
    collar: ['#F5F5F5', '#EEF3F8'],
    secondary: ['#B59F78', '#7E9BC7'],
  }
}

function getCountryAccent(countryCode, baseColor) {
  const accents = {
    SA: {
      skyTop: '#F6FBF8',
      skyMid: '#E3F0E9',
      skyBottom: '#CDE0D7',
      frame: '#B8DCC5',
      innerRing: '#2E8B57',
      shadow: 'rgba(46, 139, 87, 0.18)',
      baseShadow: '#315B48',
      badgeBg: '#E9F5EE',
      badgeBorder: '#2E8B57',
    },
    CN: {
      skyTop: '#FFF8EC',
      skyMid: '#F8EFD8',
      skyBottom: '#EADAB4',
      frame: '#E7C977',
      innerRing: '#D6A11B',
      shadow: 'rgba(214, 161, 27, 0.18)',
      baseShadow: '#6E5630',
      badgeBg: '#FFF6DD',
      badgeBorder: '#D6A11B',
    },
    KR: {
      skyTop: '#F4F7FF',
      skyMid: '#E5ECFA',
      skyBottom: '#D3DCF1',
      frame: '#B8CCF0',
      innerRing: '#2E7ACB',
      shadow: 'rgba(46, 122, 203, 0.18)',
      baseShadow: '#405A7A',
      badgeBg: '#EEF4FF',
      badgeBorder: '#2E7ACB',
    },
    IN: {
      skyTop: '#F8F7FF',
      skyMid: '#EBEEF8',
      skyBottom: '#D9E0F1',
      frame: '#C0CDEC',
      innerRing: '#2E5AAC',
      shadow: 'rgba(46, 90, 172, 0.18)',
      baseShadow: '#4E597A',
      badgeBg: '#EEF3FF',
      badgeBorder: '#2E5AAC',
    },
  }
  return accents[countryCode] || {
    skyTop: `${baseColor}10`,
    skyMid: `${baseColor}18`,
    skyBottom: `${baseColor}28`,
    frame: `${baseColor}40`,
    innerRing: baseColor,
    shadow: `${baseColor}24`,
    baseShadow: '#5E6472',
    badgeBg: `${baseColor}18`,
    badgeBorder: baseColor,
  }
}

function hashSeed(value) {
  return String(value)
    .split('')
    .reduce((acc, char) => ((acc * 31) + char.charCodeAt(0)) >>> 0, 7)
}

function sanitizeId(value) {
  return String(value || 'avatar').replace(/[^a-z0-9_-]/gi, '').slice(0, 24)
}

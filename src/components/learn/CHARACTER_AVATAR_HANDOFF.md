# Character Avatar Handoff

## Source of Truth

The reusable avatar component now lives in:

- `src/components/learn/CharacterAvatar.jsx`

`SimulationPage.jsx` imports it from:

- `src/pages/learn/SimulationPage.jsx`

## How To Use It

```jsx
import CharacterAvatar from '../../components/learn/CharacterAvatar.jsx'
```

Pass these props:

- `name`
- `role`
- `color`
- `countryCode`
- `size`

Example:

```jsx
<CharacterAvatar
  name={char.name}
  role={char.role}
  color={modMeta.color}
  countryCode={modMeta.countryCode}
  size={44}
/>
```

## What It Handles Internally

- `You` renders as a teacher silhouette instead of initials
- ring treatment varies by inferred role
- small country accent badge varies by `countryCode`
- subtle patterning only appears at larger sizes so small avatars stay clean

## Integration Guidance

- Reuse this component anywhere simulations show a person or perspective shift.
- Do not recreate avatar logic inline in page components.
- If new countries are added, extend `getCountryAccent()` and `CountryAccentMark()` inside `CharacterAvatar.jsx`.
- If new role families are added, extend `getAvatarPersona()` inside `CharacterAvatar.jsx`.

## Current Consumers

- setup character cards in `SimulationPage.jsx`
- perspective header in `SimulationPage.jsx`

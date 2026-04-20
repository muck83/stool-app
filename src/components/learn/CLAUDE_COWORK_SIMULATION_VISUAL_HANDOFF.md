# Claude Cowork Handoff: Simulation Visual Layer

This document explains the current simulation visual implementation, where the extracted avatar system lives, and how to extend or reuse it safely.

## What Changed

The branching simulation UI in `SimulationPage.jsx` was visually upgraded to feel more like a paid PD product and less like a prototype.

The biggest structural change is that the avatar system was extracted into its own reusable component:

- `src/components/learn/CharacterAvatar.jsx`

This component is now the source of truth for simulation portraits.

## Files To Know

### Main simulation page

- `src/pages/learn/SimulationPage.jsx`

This is still the React state machine for the branching simulations.

It renders the six node types:

- `SetupNode`
- `DilemmaNode`
- `ConsequenceNode`
- `PerspectiveNode`
- `ReflectionNode`
- `DebriefNode`

The state machine logic was intentionally preserved. The visual changes are presentation-only.

### Reusable avatar component

- `src/components/learn/CharacterAvatar.jsx`

This file now owns:

- inline SVG head-and-shoulders portraits
- the dedicated `You` teacher portrait
- role-based portrait variation
- country accent badges
- country-sensitive palette shifts
- portrait framing and polish

### This handoff doc

- `src/components/learn/CLAUDE_COWORK_SIMULATION_VISUAL_HANDOFF.md`

## Important Workspace Note

If you are browsing the research/content workspace at:

- `C:\\Users\\markt\\Downloads\\Get out the stool`

you will **not** find the React avatar component there.

The app source lives in:

- `C:\\Users\\markt\\Downloads\\stool-app`

That is the workspace Claude should use for implementation work.

## CharacterAvatar API

Import it like this:

```jsx
import CharacterAvatar from '../../components/learn/CharacterAvatar.jsx'
```

Supported props:

- `name`
- `role`
- `color`
- `countryCode`
- `size`

Example usage:

```jsx
<CharacterAvatar
  name={char.name}
  role={char.role}
  color={modMeta.color}
  countryCode={modMeta.countryCode}
  size={44}
/>
```

## Where It Is Used Today

### SetupNode

In `SimulationPage.jsx`, each setup character card now renders:

- avatar on the left
- name and role on the right
- muted description below

This is the larger, more editorial use case.

### PerspectiveNode

In `SimulationPage.jsx`, the perspective shift now renders:

- avatar
- parsed character name
- small perspective heading

This is the smaller, cleaner use case.

## What CharacterAvatar Does Internally

### 1. It renders people, not initials

The component now renders an actual stylized head-and-shoulders portrait in inline SVG.

It does **not** depend on image assets or packages.

### 2. "You" gets a dedicated teacher portrait

If `name === 'You'`, the component uses the teacher preset rather than a generic initials badge.

This is intentional and should be preserved.

### 3. Role-based differentiation

The component infers a broad persona using `name` and `role`.

Current personas:

- `teacher`
- `parent`
- `student`
- `default`

This affects:

- head shape and silhouette
- hair treatment
- clothing shape
- facial detail balance

### 4. Country-specific accenting

The component uses `countryCode` to apply:

- portrait background treatment
- frame and badge accent color
- mini country badge
- subtle palette differences in the portrait environment

Current supported country codes:

- `SA`
- `CN`
- `KR`
- `IN`

If new countries are added, update:

- `getCountryAccent()`
- `CountryAccentMark()`

inside `CharacterAvatar.jsx`

### 5. Small-size cleanup

At smaller sizes, the portrait still stays readable because the SVG is simplified enough to work in the perspective header use case.

Do not overload the component with tiny accessory details unless you re-test small-size clarity.

## Simulation Visual Layer Already Implemented

### SetupNode improvements

- 180px scene banner
- country overline
- flag emoji
- school/location label using `simulation.meta?.schoolContext || modMeta.country`
- simulation title
- upgraded character cards

### DilemmaNode improvements

- choice label pill shown above the quote text

### ConsequenceNode improvements

- directional slide-in animation

### PerspectiveNode improvements

- avatar + character label row
- visual distinction for viewpoint shifts

### DebriefNode improvements

- actual choice lookup from progress + node choice definitions
- numbered timeline
- choice label + truncated choice text instead of raw choice IDs

## Animation Model

The outer container still uses the existing fade/translate transition.

Each node component also has its own mount animation:

- `setup`: fade up
- `dilemma`: fade up
- `consequence`: slide from left
- `perspective`: slight scale-in
- `reflection`: slower fade up
- `debrief`: slower fade up

These are intentionally inline and local to the component blocks.

## If Claude Wants To Reuse Avatars Elsewhere

Good reuse targets:

- practical scenario cards
- quiz/exam review panels
- learner profile timeline
- badge/history views that mention named characters

Preferred rule:

- reuse `CharacterAvatar.jsx`
- do not recreate ad hoc portrait logic inline in other pages

## If Claude Wants To Improve It Further

Safe improvement areas:

- refine portrait presets
- add more role/persona recipes
- tune clothing and background palettes
- add optional `variant` prop if another page needs a flatter or denser style
- add optional `showBadge` prop if a cleaner minimal mode is needed

Avoid unless necessary:

- adding image assets
- adding a dependency just for icons or avatars
- moving portrait logic back inline into page files

## Troubleshooting

### "Claude can't find the avatars"

Check these first:

1. Are you in `C:\\Users\\markt\\Downloads\\stool-app`?
2. Are you looking in `src/components/learn/CharacterAvatar.jsx`?
3. Are you opening the app source, not the research folder?

### "The simulation still shows old initials-only avatars"

Check whether the current page is importing:

```jsx
import CharacterAvatar from '../../components/learn/CharacterAvatar.jsx'
```

and not relying on an old inline `CharacterAvatar` definition.

### "Country accents don't appear"

Verify that `modMeta.countryCode` is being passed through when the avatar is rendered.

## Build Verification

This setup has already been verified with:

```bash
npm run build
```

in:

- `C:\\Users\\markt\\Downloads\\stool-app`

So Claude should treat the current extracted component structure as valid.

## Recommended Claude Workflow

1. Open `src/components/learn/CharacterAvatar.jsx`
2. Open `src/pages/learn/SimulationPage.jsx`
3. Confirm imports and prop usage
4. Reuse the avatar component rather than rebuilding it
5. Run `npm run build` after changes

## Bottom Line

If Claude needs the avatar system, the answer is:

- use `src/components/learn/CharacterAvatar.jsx`
- wire it in with `name`, `role`, `color`, `countryCode`, and `size`
- treat that file as the reusable portrait primitive for simulation characters

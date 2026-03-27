# Codex Briefing — stool app

> This document gives you everything you need to continue implementation work on the **stool** platform without needing strategic guidance. Read all of it before touching any file.

---

## What this app is

**stool** is a free, independent intelligence platform for international school teachers deciding on moves. The metaphor is a three-legged stool: **Package** (salary/compensation) + **School** (professional environment/culture) + **Place** (city/lifestyle). A teacher needs at least 2 of 3 legs to be solid. The platform predicts all three legs at a destination and personalizes based on cultural data.

Built by Mark Crowell — former middle school math teacher, PhD research at Saigon South International School (Ho Chi Minh City), University of the Cumberlands.

---

## Stack

- **React + Vite** SPA deployed on **Vercel** via GitHub auto-redeploy (push to `main` = live)
- **Supabase** PostgreSQL backend (salary submissions + school reviews)
- **Git repo**: the inner directory structure is `stool-app/src/...` — all committed paths use this prefix
- **No TypeScript** — plain `.jsx` / `.js` throughout
- **No CSS modules** — all styling is inline or via CSS custom properties in `src/styles/globals.css`

---

## CRITICAL: Git commit process

The Windows mount prevents normal `git add` from working. Every commit MUST use git plumbing:

```bash
cd /path/to/stool-app  # the outer git root

# 1. Hash each modified file
HASH=$(git hash-object -w src/path/to/file.jsx)

# 2. Stage with plumbing (path MUST include stool-app/ prefix)
export GIT_INDEX_FILE=/tmp/git-idxN   # increment N each commit to avoid corruption
cp "$(git rev-parse --git-dir)/index" "$GIT_INDEX_FILE"
git update-index --cacheinfo 100644,$HASH,stool-app/src/path/to/file.jsx

# 3. Write tree and commit
TREE=$(git write-tree)
COMMIT=$(git commit-tree $TREE -p HEAD -m "commit message")
git update-ref refs/heads/main $COMMIT

# 4. Push (requires GitHub auth — Mark runs this manually)
git push origin main
```

**Rule**: always use a new `/tmp/git-idxN` number. Never use `git add`.

---

## Profile data shape

```js
{
  name: '',       // display only
  home: '',       // home country string — must match HOF key
  yrs: '',        // 'Just starting' | '1–3 years' | '4–7 years' | '8–15 years' | '15+ years'
  curr: '',       // curriculum — used only in Salaries tab filter
  cc: '',         // current country — must match HOF key
  city: '',       // current city string
  sal: 0,         // monthly salary USD
  hous: '',       // housing benefit value
  flt: '',        // flights benefit value
  tax: '',        // tax status string
  dc: '',         // destination country — must match HOF key AND CTRY_DATA key
  dcity: '',      // destination city string
  sch: 5,         // current school self-rating 1–10
  plc: 5,         // current place self-rating 1–10
  pkg: 5,         // current package self-rating 1–10
}
```

**`subj` (subject area) was removed** — do not add it back.

---

## Hofstede data (`src/data/hofstede.js`)

```js
HOF['Country'] = [PDI, IDV, MAS, UAI, LTO, IVR]
//                 0    1    2    3    4    5
```

- **PDI** Power Distance: high = hierarchical, authority unquestioned
- **IDV** Individualism: low = group-oriented, high = individual-oriented
- **MAS** Masculinity: high = competitive/results, low = caring/collaborative
- **UAI** Uncertainty Avoidance: high = needs rules/certainty, low = comfortable with ambiguity
- **LTO** Long-term Orientation: high = future-focused, thrift, low = tradition/short-term
- **IVR** Indulgence: high = enjoys life/leisure, low = restrained

**To add a country**, look up its Hofstede scores at hofstede-insights.com and add to `HOF` object. Also add to `CTRY_DATA` in `geo.js` and to `COUNTRIES` array in `countries.js`.

---

## Country/city data (`src/data/geo.js`)

### CTRY_DATA — used for My Move predictions
```js
'CountryName': {
  region: 'SE Asia',      // string — must match REGION_MAP
  ql: 72,                 // quality of life index 0–100
  safety: 68,             // safety index 0–100
  expat: 78,              // expat suitability 0–100
  col: 42,                // cost of living index (NYC=100)
  medSal: 3515,           // median teacher salary USD/month
  housingRate: 59,        // % of schools offering housing (0–100)
  flightRate: 66,         // % of schools offering flights (0–100)
  taxFree: false,         // boolean — true for Gulf states etc.
}
```

### CITIES — used for salary filtering
```js
'CityName': { col: 42, med: 3515, country: 'CountryName', region: 'SE Asia' }
```

### REGION_MAP — used for filtering
Each key maps to an array of country names.

---

## FAQ / Classroom Guide data (`src/data/faqData.js`)

Each behavior item:
```js
{
  id: 'f1',
  behavior: 'Students stay silent — nobody speaks up in class',
  category: 'participation',  // MUST be one of the five below
  dest_key: 'IDV',            // which Hofstede dimension drives this
  current_context: (cc, hc) => { /* returns string */ },
  why: "...",      // research-backed explanation
  respond: "...",  // practical classroom strategies
  research: '...',  // citation string
  dest_high: '...',  // what to expect if destination has HIGH score on dest_key dim
  dest_low: '...',   // what to expect if destination has LOW score
}
```

**Valid categories**: `participation` | `communication` | `learning` | `parents` | `relationships`

**Valid dest_key values**: `PDI` | `IDV` | `MAS` | `UAI` | `LTO` | `IVR`

The `current_context` function receives `(cc, hc)` where `hc` is the HOF array for the current country. It must return a string. Always handle `!hc` case first.

---

## School review schema (Supabase `school_reviews` table)

```sql
id             uuid primary key
created_at     timestamptz
school         text
country        text
answers        jsonb  -- { q1: { score: 8, diag: 'strong' }, q2: {...}, ... q7: {...} }
hours_per_week int
ip_address     text
status         text   -- 'active' | 'flagged' | 'removed' | 'verified'
```

Score range: 1–10 for each of 7 questions (q1–q7).
A school profile becomes public once 3+ active reviews exist.

---

## yrs personalization (IMPORTANT — recently added)

`profile.yrs` is now actively used throughout the app:

**In `MyMove.jsx`**: `yrsBuffer` adds to the school score prediction:
- `'Just starting'` / `''` → +0
- `'1–3 years'` → +0
- `'4–7 years'` → +0.25
- `'8–15 years'` → +0.5
- `'15+ years'` → +1

**In `ClassroomGuide.jsx`**: `homeConfig(yrs)` changes the home panel label and adds a contextual note:
- `'15+ years'` → label "Your cultural roots", note about third-culture identity
- `'8–15 years'` → label "Where you started", note about shifted frame
- `'4–7 years'` → label "Your original culture", no note
- default → label "Your home country", no note

**In `Onboarding/index.jsx`**: Step 4 shows live predicted scores alongside current sliders. An inline callout appears in Step 1 for 8–15 and 15+ year teachers.

---

## Architecture rules — do not break these

1. **No fake school leg** — the School leg in My Move is based on Hofstede data (PDI + MAS + UAI + yrs buffer), not individual school ratings. School ratings in My School are separate and don't feed into My Move predictions yet.

2. **CTRY_DATA keyed by country, CITIES keyed by city** — never mix these up.

3. **HOF countries must exactly match CTRY_DATA and COUNTRIES array** — if you add a country, add it to all three.

4. **`profile.home` is a starting point, not ground truth** for teachers with 8+ years abroad — the `yrsBuffer` reflects this.

5. **Public read on school_reviews uses anon key** — admin uses service role key only (never expose service role in frontend). The `adminSupabase` client in `Admin.jsx` is already set up correctly.

6. **3 reviews minimum before a school profile publishes** — enforced in the frontend, not yet in Supabase RLS. Don't remove this check.

7. **Salary submissions use `salary_submissions` table; school reviews use `school_reviews` table** — never conflate these.

---

## Ranked task list for Codex

These are all implementation tasks that require no product judgment. Work top to bottom.

### HIGH PRIORITY

**1. Add 15+ missing countries to HOF + CTRY_DATA + COUNTRIES**

Countries commonly appearing in the salary database but missing from HOF/CTRY_DATA:
- `Austria`, `Albania`, `Argentina`, `Brazil`, `Chile`, `Ecuador`, `Egypt`, `Ethiopia`, `Ghana`, `Greece`, `Hungary`, `Jordan`, `Kazakhstan`, `Kenya`, `Lebanon`, `Morocco`, `Nigeria`, `Pakistan`, `Peru`, `Portugal`, `Tanzania`, `Turkey`, `Uganda`

For each, look up Hofstede scores at hofstede-insights.com (or use known published values). Add:
- `HOF['Country'] = [PDI,IDV,MAS,UAI,LTO,IVR]` in `hofstede.js`
- `CTRY_DATA['Country'] = {...}` in `geo.js` (estimate ql/safety/expat/col/medSal/housingRate/flightRate/taxFree from regional data if exact not available)
- Add to `COUNTRIES` array in `countries.js` (alphabetical order)
- Add to appropriate `REGION_MAP` entry in `geo.js`

**2. Add 6+ new FAQ behaviors to `faqData.js`**

The current 6 behaviors cover the basics. Add at minimum:

- **`f7`** — category: `relationships`, dest_key: `PDI`
  Behavior: "Students call you by your first name — or never call you anything at all"
  (PDI-driven: low PDI = first names normal; high PDI = formal title always)

- **`f8`** — category: `learning`, dest_key: `LTO`
  Behavior: "Students are intensely focused on exams but check out after them"
  (LTO-driven: high LTO = exam = the point; low LTO = broader learning valued)

- **`f9`** — category: `communication`, dest_key: `UAI`
  Behavior: "Students want the rubric before they'll start — creative tasks cause anxiety"
  (UAI-driven: high UAI = uncertainty avoidance = rubrics = safety)

- **`f10`** — category: `participation`, dest_key: `MAS`
  Behavior: "A few students dominate while others never speak"
  (MAS-driven: high = competitive, assertive students crowd out others)

- **`f11`** — category: `parents`, dest_key: `PDI`
  Behavior: "Parents defer completely to your judgment — you never hear from them"
  (High PDI = teacher is unchallenged authority; low PDI = parents advocate actively)

- **`f12`** — category: `relationships`, dest_key: `IVR`
  Behavior: "Students bring you food, gifts, and personal items constantly"
  (High IVR/indulgence cultures express warmth through giving)

Follow the exact schema of existing items. The `current_context` function must handle the `!hc` case and use the correct HOF index for `dest_key`.

**3. Fix REGION_MAP to include all CTRY_DATA countries**

Some countries in CTRY_DATA (Philippines, Myanmar, Georgia, Cambodia) are not in REGION_MAP. Add them to the correct region arrays.

### MEDIUM PRIORITY

**4. Add more cities to CITIES in `geo.js`**

Cities commonly searched but missing:
- `Amman` (Jordan), `Cairo` (Egypt), `Nairobi` (Kenya), `Lagos` (Nigeria), `Istanbul` (Turkey), `Athens` (Greece), `Budapest` (Hungary), `Prague` (Czech Republic, if adding Czech Republic to HOF/CTRY_DATA), `Lima` (Peru), `Bogotá` (Colombia — this one exists in CTRY_DATA already as Colombia), `Santiago` (Chile), `Buenos Aires` (Argentina), `Casablanca` (Morocco), `Addis Ababa` (Ethiopia)

Format: `'CityName': { col: X, med: XXXX, country: 'CountryName', region: 'Region' }`

**5. Expand `schoolAliases.js` with common school name variants**

The `SchoolAutocomplete` component uses `schoolAliases.js` for matching. Add common abbreviations and variations. Example format (check existing file first):
```js
'BSKL': 'British School Kuala Lumpur',
'ASD': 'American School Dubai',
'ISB': 'International School of Bangkok',
```

**6. Add `Austria`, `Greece`, `Hungary`, `Portugal`, `Italy` to REGION_MAP under Europe**

These have Hofstede data but some may be missing from REGION_MAP.

### LOWER PRIORITY

**7. Tighten the `current_context` functions in existing FAQ items**

Items f1–f6 have `current_context` functions. Review them and check:
- Are the Hofstede thresholds correct for the dimension? (e.g., f3 uses LTO+MAS, should thresholds be reviewed?)
- Is the country name used naturally in the returned string?
- Does the function handle countries NOT in HOF gracefully (return empty string, not crash)?

**8. Add `Czech Republic` and `Poland` to CTRY_DATA**

Both have Hofstede data already (Poland is in HOF). `Czech Republic` is missing entirely. Common postings in Eastern Europe. Use regional salary estimates.

**9. Clean up `salaryDb.js.bak`**

This file is committed but serves no purpose. Remove it from the git tree in a cleanup commit.

---

## Things Codex must NOT do

- Do not change the visual design or layout of any component
- Do not rename tabs or change navigation structure
- Do not modify the stool scoring logic (pkg/plc/sch predictions) beyond adding `yrsBuffer` which is already implemented
- Do not add the `subj` field back — it was intentionally removed
- Do not add school-specific ratings to the My Move prediction — this is a deliberate product decision (ratings not yet sufficient)
- Do not change the 3-review minimum threshold for publishing school profiles
- Do not modify Admin.jsx unless fixing a clear bug
- Do not add TypeScript, change the build system, or add new npm packages without explicit instruction
- Do not use `git add` — always use the plumbing approach described above

---

## Key files quick reference

| File | Purpose |
|---|---|
| `src/data/hofstede.js` | Hofstede scores for all countries |
| `src/data/geo.js` | CTRY_DATA (country predictions), CITIES (salary filter), REGION_MAP |
| `src/data/faqData.js` | Classroom Guide behaviors |
| `src/data/countries.js` | Dropdown options — must stay in sync with HOF |
| `src/data/srQuestions.js` | My School 7-question diagnostic |
| `src/components/tabs/MyMove.jsx` | Stool prediction engine |
| `src/components/tabs/ClassroomGuide.jsx` | Category-first behavior guide |
| `src/components/tabs/MySchool.jsx` | School diagnostic + search |
| `src/components/Admin.jsx` | Moderation dashboard (salary + school reviews) |
| `src/lib/supabase.js` | All DB calls — anon key for reads/writes, service key admin-only |
| `src/components/Onboarding/index.jsx` | 4-step profile builder |
| `src/context/ProfileContext.jsx` | Global profile state + localStorage |

---

## Environment variables (Vercel)

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_SUPABASE_SERVICE_KEY=...   (admin panel only)
VITE_ADMIN_PASSWORD=...         (admin panel only)
```

These are set in Vercel project settings. Never hardcode them. The app degrades gracefully when Supabase is not configured (falls back to seed data).

---

## When in doubt

- Read the existing data file format carefully before adding to it — pattern-match exactly
- Test that country names match exactly across all three files (HOF, CTRY_DATA, COUNTRIES)
- The app deploys automatically on push to `main` — Vercel build log shows any import errors immediately

# Codex Task Batch 2 — Grunt Work + Exploratory Data

> Read CODEX_BRIEFING.md first for full architecture context, git plumbing procedure,
> and the list of things you must NOT do.

---

## Before You Start

**Commit all previous work first.** If the changes from Batch 1 (hofstede.js, geo.js,
faqData.js, schoolAliases.js expansions) are not committed, run the full git plumbing
commit sequence from CODEX_BRIEFING.md before touching anything else.

---

## Task 1 — About Page rewrite

**File:** `src/components/tabs/About.jsx`

Rewrite the copy. The founder (Mark) is an international school teacher who did PhD
research while working as a middle school math teacher — not a school leader. The
current framing asks "What's wrong with your school?" which is too negative and implies
leadership perspective.

**New framing:**
- First-person, teacher voice (not administrator/leader)
- Research-backed but accessible — PhD research in international education while
  teaching middle school math
- Frame the three-legged stool as something teachers figured out through experience,
  not a corporate framework
- The problem stool solves: teachers get dazzled by package, sign, arrive, and discover
  the school leg was broken all along
- Tone: warm, honest, slightly wry. Not inspirational-poster language.
- Remove or rephrase any question that implies the user is evaluating their school from
  a leadership/admin position

Do NOT change any component structure, routing, or imports. Only change the text/copy
content inside the existing JSX.

---

## Task 2 — Onboarding Step 5: Email save prompt

**⚠️ FILE ALREADY MODIFIED — read carefully before editing.**
`src/components/Onboarding/index.jsx` was updated after this brief was written.
A `MiniSchoolDiagnostic` component and `SCHOOL_DIAG_QS` constant were added.
Do NOT remove or modify these. Read the full file before making any changes.

**File:** `src/components/Onboarding/index.jsx`

After Step 4 (the comparison sliders), add a Step 5 before launching the dashboard.
Step 5 is an optional email save screen.

**What it should do:**
- Title: "Save your profile?" (serif, matches other step titles)
- Subtitle: "Enter your email and we'll save your profile so you can load it from any
  device. No password needed — your email is your key."
- Email input + "Save and continue →" primary button
- "Skip for now →" link below (small, muted) that skips saving and calls `launchDashboard`
- On save: call `saveToCloud(email)` from ProfileContext, then call `launchDashboard`
  on success or after 1.5s
- `saveToCloud` is already implemented and exported from ProfileContext

**Step counting:** The `STEPS` array currently has 4 entries (indices 0–3, shown at
steps 1–4). Add a 5th entry. The dots row should show 6 dots total (splash + 5 steps).
Currently `dots` is `Array.from({ length: 5 }, ...)` — change to `length: 6`.

The `advance()` function currently calls `launchDashboard` when `step === 4`. Change
that threshold to `step === 5`. Step 5 has its own submit logic (save then launch),
so `advance()` only needs to handle navigation up to step 4.

**Do NOT** make email required. This is opt-in.

---

## Task 3 — faqData.js behavior audit

**File:** `src/data/faqData.js`

The ClassroomGuide was redesigned so that country/Hofstede context is displayed at the
**category** level (via `CATEGORY_CONFIG.getSummary`), not inside individual behavior
items. Individual behavior `why` and `respond` fields should therefore be
country-agnostic — plain pedagogical advice that applies everywhere.

**Audit all f1–f12 entries:**
- Remove any sentence that says "in [country]" or "because Hofstede shows" or
  references a specific country/culture
- `why` field: explain the behavior from a student psychology / classroom dynamics
  perspective. 1–3 sentences.
- `respond` field: concrete teacher action. 1–3 sentences. Imperative voice.
- `research` field (if present): one short citation or principle name is fine.
  Remove verbose academic language.
- Do NOT change IDs, categories, or the overall data structure

---

## Task 4 — School aliases expansion: Middle East focus

**File:** `src/data/schoolAliases.js`

Add common aliases and abbreviations for major Middle East international schools.
The format is `'Alias': 'Full Name'` — match existing file format exactly.

Schools to add (research canonical names via public sources):
- GEMS network schools (GEMS Wellington, GEMS Modern Academy, GEMS World Academy, etc.)
- Repton School Dubai / Abu Dhabi
- Nord Anglia schools in Dubai and Abu Dhabi
- Taaleem schools (Jumeirah English Speaking School / JESS, Uptown School, etc.)
- Dubai College, Dubai English Speaking College (DESC)
- The British School Al Khubairat (BSAK)
- American Community School (ACS) Abu Dhabi
- Abu Dhabi International School (ADIS)
- Cranleigh Abu Dhabi
- Brighton College Abu Dhabi
- Formarke Hall / Derby School Dubai
- Doha College, Qatar
- American School of Doha (ASD) — may already exist, check first
- The International School of Choueifat (ISC) — multiple campuses

Only add entries you are confident about. Do not invent aliases. If uncertain about
a canonical name, skip it.

---

## Task 5 — Salary data for new countries

**File:** `src/data/salaryDb.js`

Add at minimum 2–3 salary entries for each of these countries that were added to
hofstede.js/geo.js in Batch 1 but likely have no salary records yet:
Egypt, Nigeria, Kenya, Turkey, Greece, Hungary, Czech Republic, Peru, Chile, Ecuador,
Morocco, Jordan, Lebanon, Tanzania, Uganda, Ethiopia, Ghana, Pakistan, Kazakhstan.

**Entry format** (match existing entries exactly):
```js
{ id: 'XX_001', country: 'CountryName', city: 'CityName', school: 'School Name',
  role: 'Teacher', curr: 'IB' /* or 'IGCSE','US','British','Other' */,
  usd: 3500, housing: 'provided'|'partial'|'none',
  flights: 'annual'|'biennial'|'none', tax: 'exempt'|'liable',
  y: 2024, notes: '' }
```

Use realistic market-rate figures sourced from publicly available ISR data, TES
international job listings, or known norms for the region. Label `notes: 'estimated'`
on any entry that is a best-fit estimate rather than a verified data point.

Assign sequential IDs continuing from the highest existing ID in the file.

---

## Task 6 — Consistency validation script

**File:** create `scripts/validate-data.js` (Node.js, no dependencies beyond built-ins)

Write a script that:
1. Imports/requires `COUNTRIES` from `src/data/countries.js`
2. Imports `HOF` from `src/data/hofstede.js`
3. Imports `CTRY_DATA` and `REGION_MAP` from `src/data/geo.js`
4. Checks: every entry in `COUNTRIES` exists as a key in `HOF`
5. Checks: every key in `HOF` exists as a key in `CTRY_DATA`
6. Checks: every key in `CTRY_DATA` exists in `REGION_MAP` (as a value in one of
   the region arrays)
7. Prints a clear report: ✓ or ✗ for each check, lists any mismatches by name
8. Exits with code 1 if any check fails, 0 if all pass

Run the script after completing Tasks 1–5 and include its output in your completion
report. Fix any mismatches it reveals before committing.

---

## Task 7 — Exploratory data file: What do international teachers actually need?

**File:** create `research/teacher-needs-audit.md`

This is a research and synthesis task. The goal is to answer: **"What information
and tools would be most useful to an international school teacher evaluating a move?"**

Do this in two phases:

### Phase A — Source audit
Search publicly available sources and compile what international school teachers
actually ask about, worry about, and wish they'd known. Sources to check:
- ISR (International Schools Review) review patterns — what dimensions do reviews
  focus on? (You can infer from the ISR review form structure)
- TES forums / international teaching communities — common thread topics
- Search Associates / ISS / Schrole job listing patterns — what benefits do schools
  emphasize, what do teachers ask about?
- Facebook groups for international teachers (search for group names/topics)
- Reddit r/TeachersInternational or similar — top recurring questions

### Phase B — Gap analysis against stool
For each need you identify, note whether stool currently addresses it, partially
addresses it, or doesn't address it at all. Use this format:

```
## [Need category]
**What teachers want to know:** ...
**How often it comes up:** High / Medium / Low
**Stool currently:** Addresses / Partially addresses / Gap
**Gap detail (if any):** ...
```

### Minimum coverage areas to research:
1. Contract terms and benefits comparison
2. School management style and leadership quality
3. Housing quality (not just allowance — actual accommodation)
4. Student behavior and classroom culture
5. Curriculum familiarity and resources
6. Work-life balance / hours expectations
7. Community and social life for expats
8. Partner employment opportunities
9. Children's schooling (kids of the teacher)
10. Healthcare quality and insurance
11. Career development and PD opportunities
12. Exit strategy / what happens at contract end
13. Visa stability and political risk
14. Cost of living vs. take-home pay (not just salary)

Output this file as clean markdown. This is a research document for the founder to
read and use to plan the next feature sprint — not a user-facing document.

---

## Commit instructions

After all tasks are complete and the validation script passes:

1. Hash every modified/new file with `git hash-object -w [path]`
2. Copy the current index: `cp "$(git rev-parse --git-dir)/index" /tmp/git-idx9`
3. Stage each file: `GIT_INDEX_FILE=/tmp/git-idx9 git update-index [--add] --cacheinfo 100644,[hash],[path]`
4. Write tree: `GIT_INDEX_FILE=/tmp/git-idx9 git write-tree`
5. Commit: `git commit-tree [tree] -p HEAD -m "Batch 2: About page, Step 5 email save, faqData audit, salary data expansion, school aliases, validation script, teacher needs research"`
6. Update ref: `git update-ref refs/heads/main [commit]`
7. Push: `git push origin main`

Report back with: commit hash, validation script output, and a summary of any
estimated vs. verified salary entries added.

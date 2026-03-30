# Claude Handoff — stool PD Layer (learn.mystool.org)

**Read this before writing a single line of code.**

This document gives a new Cowork session everything it needs to build the
professional development layer for mystool.org. It synthesises the project
synthesis document (`stool_project_synthesis.docx`), the existing codebase
state, and the specific constraints of this repo.

---

## 1. What you are building

The PD layer is a professional development product for international teachers
built on top of mystool.org. It lives at `learn.mystool.org`, surfaces
contextually from stool school profiles, and feeds teacher intelligence back
into the stool data flywheel.

It is **not** a separate product. It is **not** a feature buried inside stool.
It is a linked layer that has its own depth and can grow independently.

### The core insight

Teachers evaluating international schools need to understand the cultural,
institutional, and pedagogical context they are entering. That understanding
does not exist in accessible, honest, research-grounded form anywhere. The PD
layer is that product.

### Three launch modules

| Country | Core challenge |
|---------|---------------|
| Saudi Arabia | Institutional dissonance — sex segregation, Saudization, compliance/circumvention dynamics |
| China | Philosophy of learning — the mind vs. virtue orientation (Li 2005); transfers to Korean, Vietnamese, Indian families too |
| South Korea | Confucian foundations under hyper-competitive pressure — hagwon system, CSAT, silence misreads |

### Six dimensions per module

| Dimension | Research question |
|-----------|------------------|
| D1 | Learning philosophy — where does this culture sit on the mind-virtue axis? |
| D2 | Parent communication dynamics — structural mismatches between parent signals and Western-trained teacher interpretation |
| D3 | Institutional and political context — what constraints does the school operate within? |
| D4 | Ethical leadership tensions — which Eisenbeiss orientations are most frequently in conflict here? |
| D5 | Student behaviour patterns — what will new teachers misread? |
| D6 | Practical scenarios — most common friction points with diagnosis and response framework |

### How the two products connect

| Integration point | How it works | Effect |
|-------------------|-------------|--------|
| School profile banner | Teacher views KSA/China/Korea school → banner: "Teaching in Saudi Arabia? Understand the context." | Links to learn.mystool.org module |
| Salary gate | KSA/China/Korea salary rows partially gated for unauthenticated users | 80% module completion → badge → full salary rows unlock |
| Post-review prompt | After submitting a review for a target country | "Help incoming teachers" → scenario submission flow |
| Badge on profile | Module completion badge appears on stool community profile | Raises credibility score |

---

## 2. The existing codebase — what is already built

### Stack (CRITICAL — differs from synthesis doc's TypeScript assumptions)

```
React 18 + Vite 5
Plain .jsx / .js  ← NO TypeScript. Do not introduce .ts or .tsx files.
Supabase backend (PostgreSQL + RLS)
Inline styles + src/styles/globals.css
Vercel deploys from GitHub main
```

The synthesis doc was written assuming possible TypeScript. The actual codebase
is **plain JSX throughout**. Adapt all TypeScript in the spec documents to plain
JavaScript before applying.

### URL and deployment

- Main app: `mystool.org` (Vercel, `stool-app-is.vercel.app`)
- PD layer target: `learn.mystool.org` (needs its own Vercel deployment or subdomain config)
- Git repo root on Mark's machine: `C:\Users\markt\Downloads\stool-app`

### Framework path resolution — this is PATH B

The synthesis doc left the framework question open ("Step 0 in BUILD_BRIEF.md
resolves this"). **It is resolved: PATH B.**

There is no `apps/` directory. There is no monorepo. This is a single Vite app.

PATH B means:
- The learn app is a new Vite project (or a new tab/section in the existing Vite
  app, if keeping it simple)
- No Next.js
- Use React Router for routing if adding a separate `learn` app
- API routes become Supabase RPC calls or edge functions, not Express/Next API routes

### Existing tabs (do not modify in Phase 1 or 2)

```
src/components/tabs/Overview.jsx
src/components/tabs/MySchool.jsx
src/components/tabs/Salaries.jsx          ← Phase 3 touches this
src/components/tabs/MyMove.jsx
src/components/tabs/ClassroomGuide.jsx    ← Hofstede-driven culture guide
src/components/tabs/Diagnostic.jsx
src/components/tabs/Culture.jsx
src/components/tabs/Financial.jsx
src/components/tabs/Research.jsx
src/components/tabs/About.jsx
src/components/Admin.jsx
```

### Existing data files (reference, do not modify)

```
src/data/hofstede.js     — Hofstede 6D indices for all countries
src/data/geo.js          — CTRY_DATA and REGION_MAP
src/data/countries.js
src/data/salaryDb.js
```

Hofstede index order: `[PDI, IDV, MAS, UAI, LTO, IVR]` (0-indexed).

### Existing database schema

Tables: `user_profiles`, `countries`, `salary_rows` (name may vary),
`auth.users`. The PD migration adds new tables only and adds columns to
`user_profiles` and `countries` — **additive, nothing dropped**.

### Brand

- Teal: `#1D9E75`
- Purple: `#534AB7`
- Gold: `#BA7517`
- Fonts: DM Serif Display (headings), DM Sans (body)
- Tone: plain language, teacher-readable, "what this may feel like"

---

## 3. The critical repo constraint

This repo has a mirrored Windows git/tree structure. Vercel does **not** build
from the visible root files. It builds from tracked files under `stool-app/...`.

### Rule

After editing any file at root, e.g. `src/components/tabs/MyMove.jsx`, you
**must** also commit the file into the tracked path
`stool-app/src/components/tabs/MyMove.jsx`.

### Correct commit workflow (Linux/sandbox)

```bash
rm -f /tmp/stool-idx-new
GIT_INDEX_FILE=/tmp/stool-idx-new git read-tree HEAD
GIT_INDEX_FILE=/tmp/stool-idx-new git add \
  src/path/to/file.jsx \
  stool-app/src/path/to/file.jsx
TREE=$(GIT_INDEX_FILE=/tmp/stool-idx-new git write-tree)
PARENT=$(git rev-parse HEAD)
COMMIT=$(git commit-tree "$TREE" -p "$PARENT" -m "Commit message")
python3 -c "
with open('.git/refs/heads/main','w') as f:
    f.write('$COMMIT\n')
"
```

**Do not use normal `git add` or `git commit`.** They are unreliable in this
NTFS-mounted repo.

Mark runs `git push` himself from Windows PowerShell — the sandbox cannot
authenticate with GitHub.

---

## 4. What documents exist vs. what needs to be retrieved

The synthesis document references several work products from a previous Codex
session. Status at time of this handoff:

| Document | Status in repo |
|----------|---------------|
| `stool_project_synthesis.docx` | ✅ Exists — Mark has it. This is the primary reference |
| `CLAUDE_HANDOFF_LEARNING.md` (this file) | ✅ Just created |
| `CLAUDE_HANDOFF.md` (existing stool context) | ✅ In repo |
| `BUILD_BRIEF.md` | ❌ Not in repo — was in a previous Codex session |
| `PD_LAYER_SPEC.md` | ❌ Not in repo — was in a previous Codex session |
| `KOREA_MODULE_CONTENT.md` | ❌ Not in repo — was in a previous Codex session |
| `RIYADH_OBSERVATION_FRAMEWORK.md` | ❌ Not in repo — was in a previous Codex session |
| `supabase/migrations/20260330_create_pd_layer.sql` | ❌ Not in repo — written but not saved here |

**Action for Mark before starting the build session**: Locate the Codex session
that produced the above documents and copy them into the repo root, or paste
their contents into the new Cowork session at the start. `PD_LAYER_SPEC.md` and
`BUILD_BRIEF.md` are especially critical — they contain the full migration SQL,
API endpoint code, and component source.

If those documents cannot be retrieved, the synthesis doc contains enough
architectural detail to recreate `BUILD_BRIEF.md` from scratch. The migration
schema, API routes, and component specs are described in section 4.5 of the
synthesis.

---

## 5. Build sequence

The synthesis doc defines three phases. Follow them in order.

### Phase 1 — new files only, zero changes to existing code

Files to create (no existing file touched):

```
supabase/migrations/20260330_create_pd_layer.sql   — 5 new tables, RLS, seed data
src/lib/slugMap.js                                  — module slug/ID/country mapping
src/lib/pd/applySalaryGate.js                       — salary gate helper
src/components/pd/PDContextBanner.jsx               — school profile contextual banner
```

After Phase 1, Mark reviews the migration file and runs:
```bash
supabase db push
# then in Supabase SQL editor:
UPDATE public.pd_scenarios SET status = 'live';
```

### Phase 2 — learn app pages and components

The learn app will be a new Vite sub-project or a new route set added to the
existing app. Decision: keep it simple for Phase 1 launch by adding a
`/learn/*` route set inside the existing Vite app, then migrate to subdomain
once it has proven content. This avoids a second Vercel deployment for the MVP.

Components to build (new files):

```
src/components/learn/CompletionBar.jsx
src/components/learn/ModuleCard.jsx
src/components/learn/DimensionCard.jsx        — includes Research-backed/Partially sourced/Community-sourced labels
src/components/learn/HofstedeRadar.jsx        — radar chart using existing hofstede.js data
src/components/learn/SalaryGateCard.jsx
```

Pages/routes to build:

```
/learn                        — module list (Saudi, China, Korea cards)
/learn/:slug                  — module overview with Hofstede radar
/learn/:slug/:dimension       — dimension detail with citations
/learn/:slug/scenarios        — scenario bank
```

API interactions (Supabase queries, not Express routes):

```
GET pd_modules (with status = 'live')
GET pd_dimensions (filtered by module_id)
GET pd_scenarios (filtered by module_id)
POST pd_completions (on dimension complete)
checkAndUnlockReward (check badge award threshold, write to pd_badges)
```

### Phase 3 — stool integrations (touch exactly two existing files)

**Stop and show diffs before applying either of these.**

1. `src/components/tabs/Salaries.jsx` — add salary gate check using
   `applySalaryGate.js`. Unauthenticated users see count and range only for
   KSA, China, and Korea rows.

2. School profile page (identify exact file) — add `PDContextBanner` for
   schools in Saudi Arabia, China, and South Korea.

---

## 6. Research gaps and content status

### What is fully sourced (build immediately)

- Saudi D3 (Hammad & Shah 2018) ✅
- Saudi D4 (Eisenbeiss 2012 framework) ✅
- China D1 (Li 2005 mind vs. virtue) ✅
- China D2 (Ran 2001 parallel tracks) ✅
- China D5 (Li, Kim 2002, Dahlin) ✅
- Korea D5 (Ferguson 2001, Ju et al. 2016, Bong 2008, Park/Byun/Kim 2011) ✅

### What is partially sourced (build with evidence labels)

- Saudi D5 — 7 findings, university/EFL context not IS-specific
- China D3 — regulatory track strong; IS-specific double reduction thin
- Korea D1 — CHC backbone from Li plus Ferguson
- Korea D2 — Park/Byun/Kim, Bong, Byun/Schofer/Kim; Reddit post needed
- Korea D3 — Yoo (2016), Kim & Kim (2019), Kang & Shin (2020); partial

### What awaits field observation (placeholder only)

- Saudi D1 — no academic path; Riyadh field observation only sourcing route
- Saudi D2 — Alfaraidy (2020) partial; parent meeting debriefs primary path

### Evidence label system (show in UI)

Every dimension shows one of:
- `Research-backed` — peer-reviewed, multiple sources
- `Partially sourced` — some academic support, some inferred
- `Community-sourced` — based on teacher reports and community posts

---

## 7. Key academic sources

| Source | Dimension |
|--------|-----------|
| Hammad & Shah (2018), *Educational Administration Quarterly* | Saudi D3 |
| Eisenbeiss (2012), *Leadership Quarterly* | All D4 dimensions |
| Li (2005), *Current Directions in Psychological Science* | China D1 |
| Ran (2001), *Educational Research* | China D2 |
| Ferguson (2001), *Counterpoints* | Korea D5 — silence, authority, shame, open-ended tasks |
| Ju et al. (2016), *IJPBL* | Korea D4/D5 — UAI + PDI in PBL contexts |
| Bong (2008), *Journal of Experimental Education* | Korea D2/D5 — parental pressure → help-seeking avoidance |
| Park, Byun & Kim (2011), *Sociology of Education* | Korea D2 — parental involvement via private tutoring |
| Kim (2002), *JPSP* | China D5, Korea D5 — talking impairs Asian American reasoning |
| Alfaraidy (2020), *JRIE* | Saudi D2 — 431 Saudi IS parents (partially retrieved) |

---

## 8. Firm decisions — do not revisit

| Decision | Why |
|----------|-----|
| URL: `learn.mystool.org` | Signals connection without being buried. Can stand alone later. |
| No Moodle or LMS infrastructure | stool's advantage is research depth + community, not infrastructure |
| No streak mechanics | Teachers don't open PD daily |
| Salary gate at 80% completion | Do not change this threshold |
| No school license or admin dashboard in Phase 1 | Phase 2 commercial model |
| No community scenario submission UI in Phase 1 | Phase 2 item |
| PDContextBanner hidden for users who already hold the badge | Never show what they've already earned |
| Build order: Saudi MVP first | D3 + D4 + 3 scenarios is the minimum viable module |

---

## 9. Things Cowork can decide independently

- TypeScript → JavaScript adaptation details (match existing .jsx patterns)
- Tailwind class choices (match design intent; teal/purple/gold palette)
- Import path conventions (match existing `src/...` patterns)
- React Router vs. other routing for the learn routes
- Variable names, comment style, CSS class ordering

---

## 10. What Mark needs to do (not Cowork)

1. Locate BUILD_BRIEF.md and PD_LAYER_SPEC.md from the previous Codex session
   and paste them into the new Cowork session at the start
2. Review and run the migration: `supabase db push`
3. Then run `UPDATE public.pd_scenarios SET status = 'live';`
4. Post the Reddit posts (KSA to r/Internationalteachers immediately, China
   this week, Korea before Phase 3)
5. Run JSTOR Session 3 (Alfaraidy full text, Chinese Ed & Society browse,
   Young 2018) to close remaining research gaps
6. Push to GitHub from Windows PowerShell after each Cowork commit

---

## 11. How to start the new Cowork session

Open a new Cowork session with the stool-app folder selected. Then say:

> Read CLAUDE_HANDOFF_LEARNING.md and stool_project_synthesis.docx in full.
> Then read CLAUDE_HANDOFF.md for the existing repo constraints.
> If BUILD_BRIEF.md exists in the repo, read it too.
> Do not write any code until you have read all three documents.
> When ready, tell me: which framework path you are on (PATH A or PATH B),
> what the first file you will create is, and what you will NOT touch until Phase 3.

---

*stool · learn.mystool.org · CLAUDE_HANDOFF_LEARNING.md · March 2026*

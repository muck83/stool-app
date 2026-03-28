# Claude Handoff — stool

This file exists because this repo is easy to edit locally and deploy incorrectly.

Read this before changing any file.

## What This Project Is

`stool` is a React + Vite SPA for international school teachers deciding on moves.

The core metaphor is a three-legged stool:
- `School`
- `Place`
- `Package`

A move is usually sustainable when at least 2 of the 3 legs are solid.

The app is not just a salary tool. It helps teachers think through:
- professional environment
- city and family life
- compensation and savings reality
- cultural adjustment
- classroom misreads
- school-level red flags

Main tabs:
- `Overview`
- `My School`
- `Salaries`
- `My Move`
- `Classroom Guide`
- `Diagnostic`
- `Culture`
- `Financial`
- `Research`
- `About`
- `Admin` at `/admin`

## Product Tone

Write for teachers, not researchers.

Good:
- plain language
- practical guidance
- “what this may feel like”
- “what to check before signing”
- “possible interpretation”

Avoid:
- academic-sounding UI
- deterministic cultural claims
- stereotypes
- “this country means these students are X”

Preferred framing:
- broad patterns
- prompts to observe carefully
- research-informed but human language

## Stack

- React + Vite
- plain `.js` / `.jsx`
- no TypeScript
- Supabase backend
- inline styles plus `src/styles/globals.css`
- Vercel deploys from GitHub `main`

## Critical Repo Constraint

This repo has a mirrored Windows git/tree problem.

### What you see vs what deploys

Editable working files are in normal root paths like:
- `src/...`
- `scripts/...`
- `research/...`

But the tracked git tree that GitHub and Vercel use is under:
- `stool-app/src/...`
- `stool-app/scripts/...`
- `stool-app/research/...`

That means:
- the root file can look correct
- the tracked file can still be old, broken, or missing
- Vercel deploys the tracked `stool-app/...` file, not the visible root file

This is why a “fixed” local file can still produce an older deployment.

## Editing Rule

Edit the root working files, for example:
- `src/components/tabs/MyMove.jsx`
- `src/components/Admin.jsx`

But do **not** assume that means the deployable file is updated.

After editing, always verify and commit the tracked tree version.

## Do Not Use Normal Git Staging

Do **not** use:
- `git add`
- `git add -A`
- normal staging assumptions

They are not reliable in this repo.

## Correct Commit Workflow

Always commit with git plumbing.

Example for one file:

```powershell
$env:GIT_INDEX_FILE='C:\Users\markt\AppData\Local\Temp\git-idxNN'
if (Test-Path $env:GIT_INDEX_FILE) { Remove-Item $env:GIT_INDEX_FILE -Force }
git read-tree HEAD
$h1 = git hash-object -w src/components/tabs/MyMove.jsx
git update-index --add --cacheinfo 100644,$h1,stool-app/src/components/tabs/MyMove.jsx
$tree = git write-tree
$commit = git commit-tree $tree -p HEAD -m "Commit message"
git update-ref refs/heads/main $commit
```

Rules:
- use a fresh `git-idxNN` every time
- hash the root file
- stage it into the tracked `stool-app/...` path

## Before Debugging A Deploy Error

Do not assume the visible root file is what deployed.

First compare:
- root working file, e.g. `src/data/geo.js`
- tracked file, e.g. `git show HEAD:stool-app/src/data/geo.js`

If Vercel fails on a file, inspect the tracked file first.

Most recent failures in this project were caused by tracked-tree drift, not by the visible working copy.

## Build Rule

Run the build from the real repo:

```powershell
cd C:\Users\markt\Downloads\stool-app
npm.cmd run build
```

A clean local build is necessary but not sufficient.

You still must ensure the tracked `stool-app/...` file matches the root file you edited.

## Important Files

Core app:
- `src/App.jsx`
- `src/context/ProfileContext.jsx`
- `src/components/Onboarding/index.jsx`
- `src/components/ProfileBar.jsx`

Tabs:
- `src/components/tabs/Overview.jsx`
- `src/components/tabs/MySchool.jsx`
- `src/components/tabs/Salaries.jsx`
- `src/components/tabs/MyMove.jsx`
- `src/components/tabs/ClassroomGuide.jsx`
- `src/components/tabs/Diagnostic.jsx`
- `src/components/tabs/Culture.jsx`
- `src/components/tabs/About.jsx`
- `src/components/Admin.jsx`

Data:
- `src/data/hofstede.js`
- `src/data/geo.js`
- `src/data/countries.js`
- `src/data/faqData.js`
- `src/data/salaryDb.js`
- `src/data/schoolAliases.js`
- `src/data/srQuestions.js`

Backend:
- `src/lib/supabase.js`
- `supabase-schema-v4.sql`

## Key Product Rules

- Do not add `subj` back to the profile.
- Do not mix `CTRY_DATA` and `CITIES`.
- `My Move` uses country-level prediction logic, not school-specific review scores.
- `My School` is separate from `My Move`.
- The `3 review minimum` for school profile publishing should remain.
- Avoid changing navigation structure unless explicitly asked.
- Avoid redesigning whole pages unless explicitly asked.

## Recent Product Direction

Recent UX direction has been:
- make pages more teacher-readable
- reduce academic language
- show clearly what the app is using from the profile
- explain “adjustment” as “difference” rather than danger
- use culture as a prompt to interpret more carefully, not a stereotype machine

## If You Change Copy

Prefer:
- “what may feel different”
- “why we think this”
- “what this forecast is using”
- “broad pattern”
- “country-level forecast”

Avoid:
- jargon without explanation
- overclaiming certainty
- hidden personalization logic

## What To Report Back

When you finish work, say:
- which root files you edited
- whether `npm.cmd run build` passed
- whether you updated the tracked `stool-app/...` tree
- the exact commit hash if you made one

If something looks wrong in production, verify the tracked tree before assuming the visible file is the deployed one.

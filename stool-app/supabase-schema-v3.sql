-- ── Stool schema v3 — profiles table ─────────────────────────────────────────
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query)
--
-- This table enables email-keyed cloud profile save/restore.
-- No auth required — email is the key. Profiles are upserted on conflict.

create table if not exists public.profiles (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  profile     jsonb not null default '{}'::jsonb,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Index for fast email lookups
create index if not exists profiles_email_idx on public.profiles (email);

-- Row-level security: enable but allow anon read/write by email
alter table public.profiles enable row level security;

-- Allow anyone to upsert a profile (keyed by email — no auth)
create policy "profiles_upsert" on public.profiles
  for all using (true) with check (true);

-- ── Notes ────────────────────────────────────────────────────────────────────
-- The anon key is sufficient for save/load — no service role needed.
-- There is no authentication: anyone who knows an email address can read
-- or overwrite that profile. Acceptable trade-off for a zero-friction
-- save flow; revisit if PII sensitivity increases.
--
-- profile jsonb shape mirrors DEFAULT_PROFILE in ProfileContext.jsx:
--   { name, home, yrs, curr, cc, city, sal, hous, flt, tax,
--     dc, dcity, sch, plc, pkg }

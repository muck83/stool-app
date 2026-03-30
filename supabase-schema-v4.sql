-- Stool schema v4 - diagnostic submissions
-- Run this after supabase-schema-v3.sql in the Supabase SQL editor.

create table if not exists public.diagnostic_submissions (
  id                  uuid primary key default gen_random_uuid(),
  created_at          timestamptz not null default now(),
  name                text,
  school              text,
  home                text,
  curr                text,
  yrs                 text,
  current_country     text,
  current_city        text,
  destination_country text,
  destination_city    text,
  package_score       int,
  place_score         int,
  current_school_score int,
  school_leg_score    int,
  diagnosis_kind      text,
  answered_count      int,
  profile_snapshot    jsonb not null default '{}'::jsonb,
  answers             jsonb not null default '{}'::jsonb,
  result              jsonb not null default '{}'::jsonb,
  ip_address          text,
  status              text not null default 'active'
);

create index if not exists diagnostic_submissions_created_idx
  on public.diagnostic_submissions (created_at desc);

create index if not exists diagnostic_submissions_status_idx
  on public.diagnostic_submissions (status);

create index if not exists diagnostic_submissions_school_idx
  on public.diagnostic_submissions (school);

create index if not exists diagnostic_submissions_current_country_idx
  on public.diagnostic_submissions (current_country);

alter table public.diagnostic_submissions enable row level security;

create policy "diagnostic_submissions_insert"
  on public.diagnostic_submissions
  for insert
  with check (true);

create policy "diagnostic_submissions_select"
  on public.diagnostic_submissions
  for select
  using (true);

-- Notes:
-- 1. The frontend stores a profile snapshot so admin can see the diagnostic
--    in the context of the teacher's current move data at the time they ran it.
-- 2. Status is moderated in the admin dashboard with the service role key.

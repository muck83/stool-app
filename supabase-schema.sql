-- ============================================================
-- stool app — Supabase schema
-- Run this once in the Supabase SQL editor (Dashboard → SQL Editor → New query)
-- ============================================================

-- ─── Salary submissions ───────────────────────────────────────────────────────

create table if not exists salary_submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  y           int,
  country     text not null,
  city        text not null,
  school      text not null,
  curr        text,
  role        text,
  usd         int  not null,
  housing     text,
  flights     text,
  tax         text
);

-- Anyone can read salary data
alter table salary_submissions enable row level security;

create policy "Public read salaries"
  on salary_submissions for select
  using (true);

-- Anyone can submit anonymously
create policy "Public insert salaries"
  on salary_submissions for insert
  with check (true);


-- ─── School reviews ───────────────────────────────────────────────────────────

create table if not exists school_reviews (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  school         text not null,
  country        text,
  answers        jsonb,        -- { q1: { score, diag }, q2: { score, diag }, ... }
  hours_per_week int
);

-- Anyone can read school reviews
alter table school_reviews enable row level security;

create policy "Public read reviews"
  on school_reviews for select
  using (true);

-- Anyone can submit anonymously
create policy "Public insert reviews"
  on school_reviews for insert
  with check (true);


-- ─── Useful views (optional) ─────────────────────────────────────────────────

-- Count of reviews per school (used for the "3 reviews needed" threshold)
create or replace view school_review_counts as
  select school, country, count(*) as review_count
  from school_reviews
  group by school, country;

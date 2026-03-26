-- ============================================================
-- stool app — Schema update v2
-- Run this in Supabase SQL Editor (in addition to the original schema)
-- Adds IP tracking, flagging, and moderation status
-- ============================================================

-- Add moderation columns to salary_submissions
alter table salary_submissions
  add column if not exists ip_address  text,
  add column if not exists flagged      boolean not null default false,
  add column if not exists flag_reason  text,
  add column if not exists status       text not null default 'active';
  -- status values: 'active' | 'flagged' | 'removed' | 'verified'

-- Add moderation columns to school_reviews
alter table school_reviews
  add column if not exists ip_address  text,
  add column if not exists flagged      boolean not null default false,
  add column if not exists status       text not null default 'active';

-- Index for fast IP lookups (used for duplicate detection)
create index if not exists idx_salary_ip on salary_submissions(ip_address);
create index if not exists idx_salary_status on salary_submissions(status);

-- Admin: allow service role to update records (for flagging/removing)
-- Note: use your service role key only in the admin dashboard, never in the frontend

-- View: suspicious submissions (same IP 3+ times, or flagged)
create or replace view suspicious_submissions as
  select
    s.*,
    ip_count.count as submissions_from_ip
  from salary_submissions s
  left join (
    select ip_address, count(*) as count
    from salary_submissions
    where ip_address is not null
    group by ip_address
  ) ip_count on s.ip_address = ip_count.ip_address
  where s.flagged = true
     or ip_count.count >= 3
     or s.status != 'active'
  order by s.created_at desc;

-- Public read should only return active records
-- Drop and recreate the read policy to filter out removed records
drop policy if exists "Public read salaries" on salary_submissions;
create policy "Public read salaries"
  on salary_submissions for select
  using (status = 'active' or status = 'verified');

-- Allow admin updates via service role (RLS bypassed for service role by default)

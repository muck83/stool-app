-- Stool schema v5 - add email to diagnostic_submissions
-- Run this in the Supabase SQL editor after supabase-schema-v4.sql.

alter table public.diagnostic_submissions
  add column if not exists email text;

create index if not exists diagnostic_submissions_email_idx
  on public.diagnostic_submissions (email);

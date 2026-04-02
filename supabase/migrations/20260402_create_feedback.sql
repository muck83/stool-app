create table if not exists feedback (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  message text,
  email text,
  ip_address text
);

alter table feedback enable row level security;

create policy "Anyone can insert feedback"
  on feedback for insert
  with check (true);

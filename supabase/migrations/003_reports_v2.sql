-- 003_reports_v2.sql

-- Improved reports table schema with RLS, updated_at trigger, and indexes
-- Creates table public.reports referencing auth.users, enables RLS, and adds policies

begin;

-- Ensure extension for gen_random_uuid()
create extension if not exists pgcrypto;

-- Create or replace reports table
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,

  type text not null check (type in ('LOST','FOUND')),
  name text,
  breed text,
  color text,
  size text,
  sex text,
  age text,

  description text not null,
  status text not null default 'LOST'
    check (status in ('LOST','FOUND','REUNITED','CLOSED')),

  report_date date not null,
  address text,
  latitude double precision,
  longitude double precision,

  additional_comments text,
  contact_phone text,
  contact_email text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS
alter table public.reports enable row level security;

-- RLS policies
create policy if not exists "Public reports are readable"
  on public.reports
  for select
  using (true);

create policy if not exists "Users can create their own reports"
  on public.reports
  for insert
  with check (auth.uid() = user_id);

create policy if not exists "Users can update their own reports"
  on public.reports
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy if not exists "Users can delete their own reports"
  on public.reports
  for delete
  using (auth.uid() = user_id);

-- Trigger to auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger if not exists reports_set_updated_at
  before update on public.reports
  for each row
  execute procedure public.set_updated_at();

-- Indexes
create index if not exists idx_reports_status on public.reports(status);
create index if not exists idx_reports_report_date on public.reports(report_date);
create index if not exists idx_reports_lat_lng on public.reports(latitude, longitude);

commit;

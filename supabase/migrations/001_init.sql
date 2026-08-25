-- 001_init.sql

-- Tables for Patas Perdidas

create extension if not exists "uuid-ossp";

create table profiles (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text,
  phone text,
  avatar_url text,
  created_at timestamptz default now()
);

create table reports (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id) on delete set null,
  type text,
  name text,
  breed text,
  color text,
  size text,
  sex text,
  age text,
  description text,
  status text,
  date date,
  address text,
  latitude numeric,
  longitude numeric,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table dog_images (
  id uuid primary key default uuid_generate_v4(),
  report_id uuid references reports(id) on delete cascade,
  image_url text,
  created_at timestamptz default now()
);

create table comments (
  id uuid primary key default uuid_generate_v4(),
  report_id uuid references reports(id) on delete cascade,
  user_id uuid references profiles(id),
  content text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table messages (
  id uuid primary key default uuid_generate_v4(),
  report_id uuid references reports(id),
  sender_id uuid references profiles(id),
  recipient_id uuid references profiles(id),
  message text,
  created_at timestamptz default now(),
  read_at timestamptz
);

# Patas Perdidas

This repository contains the Patas Perdidas (Lost & Found Dogs) web application scaffold.

Quick start (after creating a Supabase project):

1. Clone
   git clone https://github.com/brunavaldez/patasperdidas.git
   cd patasperdidas

2. Install
   npm install

3. Create a Supabase project at https://supabase.com and copy the project's URL and anon key into .env (use .env.example)

4. Run migrations & seed (use psql or Supabase SQL editor)
   - Run the SQL in supabase/migrations/001_init.sql
   - Run the SQL in supabase/seed.sql

5. Start dev
   npm run dev

What is included
- Next.js 13 App Router + TypeScript
- Tailwind CSS
- Supabase client wrapper (lib/supabaseClient.ts)
- Basic components and pages scaffolding
- Supabase migrations and seed data

Next steps (I will implement next):
- Full integration with Supabase Auth and client/server logic
- Image uploads to Supabase Storage
- Search & filtering with URL params
- Comments and internal messaging
- Row Level Security (RLS) policies and examples
- Accessibility improvements and final visual polish

This scaffold is ready for development. See the TODOs in code comments for next tasks.

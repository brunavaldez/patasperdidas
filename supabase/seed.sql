-- seed.sql: demo data for Avenida San Martin and Avenida Beni

insert into profiles (id, name, email) values
  ('11111111-1111-1111-1111-111111111111', 'Demo User', 'demo@example.com')
ON CONFLICT DO NOTHING;

-- Avenida San Martin
insert into reports (id, user_id, type, name, breed, description, status, date, address, latitude, longitude)
values
  ('aaaaaaaa-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'found', 'Max', 'Golden Retriever', 'Friendly lost dog found near the park.', 'FOUND', '2026-09-04', 'Avenida San Martin', -16.5, -68.12),
  ('aaaaaaaa-0000-0000-0000-000000000002', '11111111-1111-1111-1111-111111111111', 'lost', 'Luna', 'Pug', 'Lost dog with a blue collar.', 'LOST', '2026-09-02', 'Avenida San Martin', -16.501, -68.119);

-- Avenida Beni
insert into reports (id, user_id, type, name, breed, description, status, date, address, latitude, longitude)
values
  ('bbbbbbbb-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'found', 'Rocky', 'Mixed', 'Found near Avenida Beni, looks well cared for.', 'FOUND', '2026-09-01', 'Avenida Beni', -16.493, -68.100);

insert into dog_images (report_id, image_url) values
  ('aaaaaaaa-0000-0000-0000-000000000001', 'https://picsum.photos/seed/max/800/600'),
  ('aaaaaaaa-0000-0000-0000-000000000002', 'https://picsum.photos/seed/luna/800/600'),
  ('bbbbbbbb-0000-0000-0000-000000000001', 'https://picsum.photos/seed/rocky/800/600');

-- Insert 5 users
INSERT INTO Users (username, email, password_hash, role) VALUES
  ('alice123', 'alice@example.com', 'hashed123', 'owner'),
  ('bobwalker', 'bob@example.com', 'hashed456', 'walker'),
  ('carol123', 'carol@example.com', 'hashed789', 'owner'),
  ('dannywalker', 'danny@example.com', 'hashed999', 'walker'),
  ('emilydog', 'emily@example.com', 'hashed000', 'owner');

-- Insert 5 dogs
INSERT INTO Dogs (owner_id, name, size) VALUES
  ((SELECT user_id FROM Users WHERE username = 'alice123'), 'Max', 'medium'),
  ((SELECT user_id FROM Users WHERE username = 'carol123'), 'Bella', 'small'),
  ((SELECT user_id FROM Users WHERE username = 'emilydog'), 'Rocky', 'large'),
  ((SELECT user_id FROM Users WHERE username = 'alice123'), 'Luna', 'small'),
  ((SELECT user_id FROM Users WHERE username = 'carol123'), 'Charlie', 'medium');

-- Insert 5 walk requests
INSERT INTO WalkRequests (dog_id, requested_time, duration_minutes, location, status) VALUES
  ((SELECT dog_id FROM Dogs WHERE name = 'Max'), '2025-06-10 08:00:00', 30, 'Parklands', 'open'),
  ((SELECT dog_id FROM Dogs WHERE name = 'Bella'), '2025-06-10 09:30:00', 45, 'Beachside Ave', 'accepted'),
  ((SELECT dog_id FROM Dogs WHERE name = 'Rocky'), '2025-06-11 10:00:00', 60, 'Central Park', 'open'),
  ((SELECT dog_id FROM Dogs WHERE name = 'Luna'), '2025-06-11 12:15:00', 20, 'Hillside Trail', 'open'),
  ((SELECT dog_id FROM Dogs WHERE name = 'Charlie'), '2025-06-12 07:45:00', 40, 'Downtown Walkway', 'cancelled');

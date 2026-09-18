CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);


CREATE TABLE participants (
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id),
  display_name TEXT NOT NULL,
  joined_at TIMESTAMP DEFAULT NOW()
);
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

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id),
  external_id TEXT,
  name TEXT NOT NULL,
  image_url TEXT,
  metadata JSONB
);

CREATE TABLE swipes (
  id SERIAL PRIMARY KEY,
  room_id INTEGER REFERENCES rooms(id),
  participant_id INTEGER REFERENCES participants(id),
  item_id INTEGER REFERENCES items(id),
  direction TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
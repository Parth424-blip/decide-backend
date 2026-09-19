const express = require("express");
const dotenv = require("dotenv/config");

const { Pool } = require("pg");
const { Redis } = require("@upstash/redis");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const redis = Redis.fromEnv();
const app = express();
const port = 3001;

app.use(express.json());

app.post("/rooms/:code/join", async (req, res) => {
  const code = req.params.code;

  const displayName = req.body.displayName;

  const roomResult = await pool.query("SELECT * FROM rooms WHERE code = $1", [
    code,
  ]);
  const roomid = newParticipant.rows[0].id;
  const newParticipant = await pool.query(
    "INSERT INTO participants (room_id, display_name) VALUES ($1, $2) RETURNING *",
    [roomId, displayName],
  );

  res.send(newParticipant.rows[0]);
});

app.post("/rooms", async (req, res) => {
  const randomNumber = Math.random().toString(36).substring(2, 8).toUpperCase();

  const result = await pool.query(
    "INSERT INTO rooms (code) VALUES ($1) RETURNING *",
    [randomNumber],
  );

  res.send(result.rows[0]);
});

app.get("/rooms/:code", async (req, res) => {
  const code1 = req.params.code;

  const result = await pool.query("SELECT * FROM rooms WHERE code = $1", [
    code1,
  ]);

  res.send(result.rows[0]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

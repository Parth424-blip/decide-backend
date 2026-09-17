const express = require("express");
const dotenv = require("dotenv/config");

const { Pool } = require("pg");
const { Redis } = require("@upstash/redis");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const redis = Redis.fromEnv();
const app = express();
const port = 3001;

app.post("/rooms", async (req, res) => {
  const generatedCode = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  const result = await pool.query(
    "INSERT INTO rooms (code) VALUES ($1) RETURNING *",
    [generatedCode],
  );

  res.send(result.rows[0]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

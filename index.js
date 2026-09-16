const express = require("express");
const dotenv = require("dotenv/config");

const { Pool } = require("pg");
const { Redis } = require("@upstash/redis");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const redis = Redis.fromEnv();
const app = express();
const port = 3001;

app.get("/health", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.send(result.rows[0]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

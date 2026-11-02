require('dotenv').config();

const { Pool } = require('pg');

// Vercel sets VERCEL=1 in its build and runtime environments.
const IS_SERVERLESS = Boolean(process.env.VERCEL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL
    ? { rejectUnauthorized: false }
    : false,

  // Each warm serverless instance keeps its own pool, so keep them small and
  // let them go idle quickly. Use Neon's *pooled* (-pooler) host in
  // DATABASE_URL so PgBouncer multiplexes these onto few real connections.
  max: IS_SERVERLESS ? 3 : 10,
  idleTimeoutMillis: IS_SERVERLESS ? 10000 : 30000,
  connectionTimeoutMillis: 10000
});

if (!IS_SERVERLESS) {
  pool.on('connect', () => {
    console.log('PostgreSQL connected successfully.');
  });
}

pool.on('error', (err) => {
  console.error('PostgreSQL connection error:', err.message);
});

module.exports = pool;

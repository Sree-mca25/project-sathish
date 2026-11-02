require('dotenv').config();

const bcrypt = require('bcrypt');
const db = require('./database');

/**
 * Creates the schema and bootstraps the first Super Admin.
 *
 * This must NOT run on every serverless cold start, so server.js only calls it
 * when started directly (local dev). On Vercel, run it once from your machine:
 *
 *   npm run init-db
 */
async function initializeDatabase() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id BIGSERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      status TEXT NOT NULL DEFAULT 'Active',
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS products (
      id BIGSERIAL PRIMARY KEY,
      product_code TEXT,
      name TEXT NOT NULL,
      category TEXT,
      subcategory TEXT,
      price NUMERIC DEFAULT 0,
      image TEXT,
      description TEXT,
      stock INTEGER DEFAULT 0,
      status TEXT DEFAULT 'Active',
      data_json JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS services (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      data_json JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS portfolio (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      data_json JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS arts (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      data_json JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS courses (
      id BIGSERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      data_json JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Session table for connect-pg-simple. Created here so the serverless
  // function never needs to issue DDL at request time.
  await db.query(`
    CREATE TABLE IF NOT EXISTS user_sessions (
      sid VARCHAR NOT NULL COLLATE "default",
      sess JSON NOT NULL,
      expire TIMESTAMP(6) NOT NULL
    );
  `);

  // connect-pg-simple may already have created this table with its own
  // constraint names (session_pkey / IDX_session_expire), so match on the
  // constraint *type* and on the indexed column rather than on a name.
  await db.query(`
    DO $$
    BEGIN
      IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint c
        JOIN pg_class t ON t.oid = c.conrelid
        WHERE t.relname = 'user_sessions' AND c.contype = 'p'
      ) THEN
        ALTER TABLE user_sessions
          ADD CONSTRAINT user_sessions_pkey PRIMARY KEY (sid);
      END IF;

      IF NOT EXISTS (
        SELECT 1 FROM pg_indexes
        WHERE tablename = 'user_sessions' AND indexdef LIKE '%(expire)%'
      ) THEN
        CREATE INDEX "IDX_user_sessions_expire" ON user_sessions (expire);
      END IF;
    END $$;
  `);

  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const fullName = process.env.ADMIN_NAME?.trim() || 'Sathish Admin';

  if (!email || !password || password.length < 12) {
    throw new Error(
      'Set ADMIN_EMAIL and an ADMIN_PASSWORD of at least 12 characters in .env'
    );
  }

  const existing = await db.query(
    'SELECT id FROM users WHERE email = $1',
    [email]
  );

  if (existing.rowCount === 0) {
    const passwordHash = await bcrypt.hash(password, 12);

    await db.query(
      `INSERT INTO users (full_name, email, password_hash, role, status)
       VALUES ($1, $2, $3, $4, $5)`,
      [fullName, email, passwordHash, 'Super Admin', 'Active']
    );

    console.log(`Initial Super Admin created: ${email}`);
  } else {
    console.log(`Super Admin already exists: ${email}`);
  }

  console.log('Neon PostgreSQL connected; tables checked.');
}

module.exports = initializeDatabase;

// Allow `node init-db.js` / `npm run init-db` as a one-off setup command.
if (require.main === module) {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL missing in .env');
    process.exit(1);
  }

  initializeDatabase()
    .then(() => db.end())
    .then(() => {
      console.log('Database ready.');
      process.exit(0);
    })
    .catch((err) => {
      console.error('Database init failed:', err);
      process.exit(1);
    });
}

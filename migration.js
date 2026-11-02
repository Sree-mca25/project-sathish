require('dotenv').config();

const fs = require('fs');
const path = require('path');
const db = require('./database');

// Fixed allowlist. These names are interpolated into SQL identifiers below, so
// nothing outside this array may ever reach a query.
const TABLES = ['products', 'services', 'portfolio', 'arts', 'courses'];

const USAGE = `
Imports sathish-media-backup(1).json into the Neon PostgreSQL database.

  node migration.js                      Import only into empty tables.
                                         Non-empty tables are left untouched.

  node migration.js --replace            Wipe and reimport every table.
  node migration.js --replace=products,arts
                                         Wipe and reimport only those tables.

  node migration.js --dry-run            Report what would happen, change nothing.

Known tables: ${TABLES.join(', ')}
`;

function parseArgs(argv) {
  const replace = new Set();
  let dryRun = false;

  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') {
      console.log(USAGE);
      process.exit(0);
    } else if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--replace') {
      TABLES.forEach((t) => replace.add(t));
    } else if (arg.startsWith('--replace=')) {
      for (const name of arg.slice('--replace='.length).split(',')) {
        const table = name.trim();
        if (!table) continue;
        if (!TABLES.includes(table)) {
          console.error(`Unknown table in --replace: "${table}"`);
          console.error(`Known tables: ${TABLES.join(', ')}`);
          process.exit(1);
        }
        replace.add(table);
      }
    } else {
      console.error(`Unknown argument: "${arg}"`);
      console.log(USAGE);
      process.exit(1);
    }
  }

  return { replace, dryRun };
}

const backupPath = [
  path.join(__dirname, 'sathish-media-backup(1).json'),
  path.join(__dirname, 'sathish-media-backup.json')
].find((file) => fs.existsSync(file));

if (!backupPath) {
  console.error(
    'Backup file not found! Place sathish-media-backup(1).json beside migration.js.'
  );
  process.exit(1);
}

/**
 * Each top-level key in the backup holds a JSON *string*, not an array, so it
 * needs a second parse. Tolerate both shapes.
 */
function parseItems(value, tableName) {
  try {
    const items = typeof value === 'string' ? JSON.parse(value) : value;

    if (!Array.isArray(items)) {
      throw new Error(`${tableName} data must be an array.`);
    }

    return items;
  } catch (error) {
    throw new Error(`Cannot read ${tableName} backup: ${error.message}`);
  }
}

async function tableExists(client, tableName) {
  const result = await client.query(
    'SELECT to_regclass($1) IS NOT NULL AS present',
    [`public.${tableName}`]
  );
  return result.rows[0].present;
}

async function getTableCount(client, tableName) {
  const result = await client.query(
    `SELECT COUNT(*)::int AS count FROM "${tableName}"`
  );
  return result.rows[0].count;
}

function getName(item, tableName) {
  if (tableName === 'portfolio') {
    return item.name || item.title || 'Untitled Portfolio';
  }

  if (tableName === 'services') {
    return item.name || item.title || item.serviceName || 'Untitled Service';
  }

  return item.name || item.title || `Untitled ${tableName}`;
}

async function insertItem(client, table, item) {
  if (table === 'products') {
    await client.query(
      `INSERT INTO products (
         product_code, name, category, subcategory, price,
         image, description, stock, status, data_json
       ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb)`,
      [
        String(item.product_code || item.uniqueId || item.id || ''),
        String(item.name || 'Untitled Product'),
        String(item.category || ''),
        String(item.subcategory || item.subCategory || ''),
        Number(item.price) || 0,
        String(item.image || ''),
        String(item.description || ''),
        Number(item.stock) || 0,
        String(item.status || 'Active'),
        JSON.stringify(item)
      ]
    );
    return;
  }

  await client.query(
    `INSERT INTO "${table}" (name, data_json) VALUES ($1, $2::jsonb)`,
    [String(getName(item, table)), JSON.stringify(item)]
  );
}

async function migrate({ replace, dryRun }) {
  const backup = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
  const client = await db.connect();

  try {
    const data = {};

    for (const table of TABLES) {
      if (!(await tableExists(client, table))) {
        throw new Error(
          `Table "${table}" does not exist. Run \`npm run init-db\` first.`
        );
      }

      data[table] = parseItems(backup[table] ?? [], table);
    }

    if (dryRun) {
      console.log('DRY RUN — nothing will be written.\n');
    }

    // One transaction for the whole import: a failure part-way through rolls
    // every table back rather than leaving a half-populated database.
    await client.query('BEGIN');

    const planned = {};

    for (const table of TABLES) {
      const items = data[table];
      const existing = await getTableCount(client, table);

      if (existing > 0 && !replace.has(table)) {
        console.log(
          `SKIPPED  ${table}: already has ${existing} row(s). ` +
          `Use --replace=${table} to overwrite.`
        );
        planned[table] = existing;
        continue;
      }

      if (existing > 0) {
        console.log(`REPLACING ${table}: removing ${existing} existing row(s).`);
        if (!dryRun) {
          // RESTART IDENTITY so reimported rows get ids from 1 again.
          await client.query(`TRUNCATE TABLE "${table}" RESTART IDENTITY`);
        }
      }

      if (!dryRun) {
        for (const item of items) {
          await insertItem(client, table, item);
        }
      }

      console.log(`IMPORTED ${items.length} ${table}.`);
      planned[table] = items.length;
    }

    if (dryRun) {
      await client.query('ROLLBACK');
      console.log('\nDry run complete — rolled back, database unchanged.');
      console.log('\nWould result in:');
      for (const table of TABLES) {
        console.log(`  ${table.padEnd(10)} ${planned[table]}`);
      }
      return;
    }

    await client.query('COMMIT');

    console.log('\nMigration completed.');
    console.log('\nDatabase totals:');

    for (const table of TABLES) {
      console.log(`  ${table.padEnd(10)} ${await getTableCount(client, table)}`);
    }
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    throw error;
  } finally {
    client.release();
  }
}

migrate(parseArgs(process.argv.slice(2)))
  .catch((error) => {
    console.error('\nMigration failed:', error.message);
    process.exitCode = 1;
  })
  .finally(() => db.end());

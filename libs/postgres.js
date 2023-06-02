const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'viqi',
    password: 'admin123',
    database: 'app_bluetooth'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;

// db/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "f1_craze",
  password: "ROBYpost2609.",
  port: 5432,
});

module.exports = pool;

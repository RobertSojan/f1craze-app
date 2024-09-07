// db/db.js
const { Pool } = require('pg');
require('dotenv').config;


const pool = new Pool({
  connectionString: process.env.DATABASE_URL // Use environment variable
});

module.exports = pool;

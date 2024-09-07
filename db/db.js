// db/db.js
const { Pool } = require('pg');
require('dotenv').config;


const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use environment variable

  ssl: {
    rejectUnauthorized: false
  }

});

module.exports = pool;

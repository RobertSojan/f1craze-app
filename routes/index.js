const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// Home route
router.get('/', (req, res) => {
  res.render('home');
});

// Drivers page route
router.get('/drivers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM drivers ORDER BY wins DESC');
    const drivers = result.rows;
    res.render('drivers', { drivers });
  } catch (error) {
    console.error('Error fetching drivers:', error);
  }
});

// Championships page route
router.get('/championships', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM championships ORDER BY year DESC');
    const championships = result.rows;
    res.render('championships', { championships });
  } catch (error) {
    console.error('Error fetching championships:', error);
  }
});

module.exports = router;

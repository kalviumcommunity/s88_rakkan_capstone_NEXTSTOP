const express = require('express');
const router = express.Router();
const User = require('../models/User'); // import the schema

// POST /api/users
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.status(201).json({
      message: 'User created',
      user: savedUser
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

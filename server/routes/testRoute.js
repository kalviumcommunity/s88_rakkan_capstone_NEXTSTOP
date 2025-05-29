const express = require('express');
const router = express.Router();

// ✅ GET endpoint
router.get('/', (req, res) => {
  res.json({ message: 'GET /api/test - backend working ✅' });
});

// ✅ POST endpoint
router.post('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  res.status(201).json({
    message: 'POST request received successfully',
    data: { name, email }
  });
});

// ✅ PUT endpoint (MUST BE INSIDE router)
router.put('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  res.status(200).json({
    message: 'User data updated successfully',
    updatedData: { name, email }
  });
});

module.exports = router;

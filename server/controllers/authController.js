const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "GET /api/test - NextStop backend is live 🚀",
  });
});

module.exports = router;

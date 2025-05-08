const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/test', require('./routes/testRoute'));

app.get('/', (req, res) => {
  res.send('Welcome to NextStop API');
});

// Connect to MongoDB (optional here)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

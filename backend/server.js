// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Create an Express application
const app = express();
// Import user routes
const userRoutes = require('./routes/userRoutes');

// Enable CORS for cross-origin requests
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());
// Use the user routes for API endpoints
app.use('/api', userRoutes);

// Connect to MongoDB using the connection string from the environment variables
// Temporarily disable MongoDB connection
 mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 }).then(() => {
   console.log('Connected to MongoDB');
 }).catch((error) => {
   console.error('Error connecting to MongoDB:', error);
 });

 app.post('/api/signup', (req, res) => {
  const { username, password } = req.body;
  // Replace with your actual sign-up logic
  if (username && password) {
    res.json({ message: 'Sign up successful' });
  } else {
    res.status(400).json({ message: 'Sign up failed' });
  }
});

 app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Replace with your actual authentication logic
  if (username === 'admin' && password === 'password') {
    res.json({ message: 'Login successful', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
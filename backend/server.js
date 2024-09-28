// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const User = require('./models/User'); // Import the User model

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

 const bcrypt = require('bcrypt');
 const SALT_ROUNDS = 10;

 app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.json({ message: 'Sign up successful' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(400).json({ message: 'Sign up failed', error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      res.json({ message: 'Login successful', token: 'fake-jwt-token' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
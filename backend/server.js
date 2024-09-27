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
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  startup: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
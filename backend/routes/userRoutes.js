// backend/routes/userRoutes.js

// Import the Express router
const express = require('express');
const router = express.Router();

// Import the user controller functions
const { createUser, getUsers } = require('../controllers/userController');

// Define the route to create a new user
router.post('/users', createUser);

// Define the route to get all users
router.get('/users', getUsers);

// Define the route to get user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
	const user = await User.findById(req.user.id).select('-password');
	res.json(user);
  } catch (error) {
	res.status(500).send('Server error');
  }
});

router.put('/profile', authMiddleware, async (req, res) => {
  const { username } = req.body;
  try {
	// Check if the username is already taken
	const existingUser = await User.findOne({ username });
	if (existingUser) {
	  return res.status(400).json({ msg: 'Username already taken' });
	}

	// Update the user's username
	const user = await User.findById(req.user.id);
	user.username = username;
	await user.save();

	res.json(user);
  } catch (error) {
	res.status(500).send('Server error');
  }
});

module.exports = router;
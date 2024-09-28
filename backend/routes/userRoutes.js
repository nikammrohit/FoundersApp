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

module.exports = router;
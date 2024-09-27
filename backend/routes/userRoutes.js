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

// Export the router to be used in the server
module.exports = router;
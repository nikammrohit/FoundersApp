// backend/controllers/userController.js

// Import the User model
const User = require('../models/userModel');

// Controller function to create a new user
exports.createUser = async (req, res) => {
  try {
	// Create a new user instance with the request body data
	const user = new User(req.body);
	// Save the user to the database
	await user.save();
	// Send a success response with the created user
	res.status(201).send(user);
  } catch (error) {
	// Send an error response if something goes wrong
	res.status(400).send(error);
  }
};

// Controller function to get all users
exports.getUsers = async (req, res) => {
  try {
	// Find all users in the database
	const users = await User.find();
	// Send a success response with the list of users
	res.status(200).send(users);
  } catch (error) {
	// Send an error response if something goes wrong
	res.status(500).send(error);
  }
};
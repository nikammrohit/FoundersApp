// Import mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the user schema with fields: name, email, and startup
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  startup: String,
});

// Create a User model using the userSchema
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;
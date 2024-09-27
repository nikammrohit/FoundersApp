// Import mongoose to define the schema and model
const mongoose = require('mongoose');

// Define the user schema with fields: name, email, and startup
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  startup: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema); // Use existing model if it exists

// Export the User model to be used in other parts of the application
module.exports = User;
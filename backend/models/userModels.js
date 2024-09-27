// backend/models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  startup: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
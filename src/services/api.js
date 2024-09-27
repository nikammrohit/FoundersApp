// src/api.js
// Import axios for making HTTP requests
import axios from 'axios';

// Define the base URL for the API, using an environment variable or defaulting to localhost
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Function to fetch users from the API
export const fetchUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export const createUser = (user) => axios.post(`${API_URL}/users`, user);
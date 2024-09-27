// src/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchUsers = () => {
  return axios.get(`${API_URL}/users`);
};

export const createUser = (user) => axios.post(`${API_URL}/users`, user);
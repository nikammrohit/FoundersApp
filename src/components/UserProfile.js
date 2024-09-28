// frontend/src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserProfile.css'; // Import the CSS file for styling

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [newUsername, setNewUsername] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUsernameChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('/api/user/profile', { username: newUsername }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setUser(response.data);
      setNewUsername('');
      setError('');
    } catch (error) {
      setError('Username already taken or invalid.');
      console.error('Error updating username:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">{user.username}'s Profile</h1>
      <p className="profile-detail">Email: {user.email}</p>
      <p className="profile-detail">Startup: {user.startup}</p>
      <form onSubmit={handleUsernameChange}>
        <div className="form-group">
          <label>New Username:</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="profile-input"
          />
        </div>
        <button type="submit" className="profile-button">Update Username</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default UserProfile;
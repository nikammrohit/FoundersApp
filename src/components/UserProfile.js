// frontend/src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserProfile.css'; // Import the CSS file for styling

const UserProfile = () => {
  const [user, setUser] = useState(null);

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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">{user.username}'s Profile</h1>
      <p className="profile-detail">Email: {user.email}</p>
      <p className="profile-detail">Startup: {user.startup}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default UserProfile;
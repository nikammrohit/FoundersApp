// src/components/Home.js
// Import React and necessary hooks
import React, { useEffect, useState } from 'react';
// Import the fetchUsers function from the API module
import { fetchUsers } from '../api';

// Define the Home component
const Home = () => {
    const [users, setUsers] = useState([]);

    // useEffect hook to fetch users when the component mounts
    useEffect(() => {
        fetchUsers().then((response) => setUsers(response.data));
    }, []);

    // Render the list of users
    return (
        <div>
            <h1>Startup Founders</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>{user.name} - {user.startup}</li>
                ))}
            </ul>
        </div>
    );
};

// Export the Home component as the default export
export default Home;
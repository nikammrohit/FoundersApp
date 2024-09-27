// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers().then((response) => setUsers(response.data));
    }, []);

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

export default Home;
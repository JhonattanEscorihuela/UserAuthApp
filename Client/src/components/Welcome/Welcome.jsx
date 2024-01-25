// Welcome.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
    const location = useLocation();
    const username = location.state ? location.state.username : 'Guest';

    return (
        <div className="welcome-container">
            <h2>Welcome, {username}!</h2>
            <p>This is your personalized welcome message or content.</p>
        </div>
    );
};

export default Welcome;

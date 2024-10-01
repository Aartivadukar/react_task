// ComponentA.js
import React from 'react';

import { useGlobalContext } from '../context/GlobalContext';

const ComponentA = () => {
    const { login, logout, state } = useGlobalContext();

    const handleLogin = () => {
        login({ name: 'John Doe' });
    };

    return (
        <div>
            <h2>Component A</h2>
            {state.user ? (
                <div>
                    <p>Welcome, {state.user.name}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default ComponentA;

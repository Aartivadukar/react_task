// ComponentB.js
import React from 'react';

import { useGlobalContext } from '../context/GlobalContext';

const ComponentB = () => {
    const { state, toggleTheme } = useGlobalContext();

    return (
        <div>
            <h2>Component B</h2>
            <p>Current theme: {state.theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ComponentB;

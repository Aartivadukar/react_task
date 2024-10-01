// src/App.js
import React from 'react';
import Parent from './components/Parent';

const App = () => {
    return (
        <div>
            <h1>useMemo Parent and Child Example</h1>
            <Parent />
        </div>
    );
};

export default App;

// App.js
import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import ComponentA from './components/ComponentsA';
import ComponentB from './components/ComponentsB';


const App = () => {
    return (
        <GlobalProvider>
            <ComponentA />
            <ComponentB />
        </GlobalProvider>
    );
};

export default App;

// src/App.js

import React from 'react';
import { GlobalStateProvider } from './context/GlobalStateContext';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <GlobalStateProvider>
      <MainComponent />
    </GlobalStateProvider>
  );
}

export default App;

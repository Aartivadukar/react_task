// src/components/MainComponent.js

import React from 'react';
import { useGlobalState } from '../context/GlobalStateContext';
import '../styles/light.css';
import '../styles/dark.css';


const MainComponent = () => {
  const { state, dispatch } = useGlobalState();

  const setUser = () => {
    dispatch({ type: 'SET_USER', payload: { name: 'Jane Doe' } });
  };

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  // Determine the current theme class
  const themeClass = state.theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <div className={themeClass} style={{ minHeight: '100vh', padding: '20px' }}>
      <h1>React Context Global State</h1>
      <p>User: {state.user ? state.user.name : 'No user logged in'}</p>
      <p>Theme: {state.theme}</p>
      <button onClick={setUser}>Set User</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default MainComponent;

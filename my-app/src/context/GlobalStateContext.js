// src/context/GlobalStateContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Create the context
const GlobalStateContext = createContext();

// Create the reducer for managing global state
const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

// Create the provider to wrap the app and provide the global state
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, {
    user: null,
    theme: 'light',
  });

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to use the global state
export const useGlobalState = () => useContext(GlobalStateContext);

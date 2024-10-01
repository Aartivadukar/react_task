// GlobalContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        theme: 'light',
    });

    const toggleTheme = () => {
        setState((prevState) => ({
            ...prevState,
            theme: prevState.theme === 'light' ? 'dark' : 'light',
        }));
    };

    const login = (user) => {
        setState((prevState) => ({
            ...prevState,
            user,
        }));
    };

    const logout = () => {
        setState((prevState) => ({
            ...prevState,
            user: null,
        }));
    };

    return (
        <GlobalContext.Provider value={{ state, toggleTheme, login, logout }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

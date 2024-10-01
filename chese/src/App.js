// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; // Correct import path
import Chessboard from './components/Chessboard/Chessboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Chessboard</h1>
        <Chessboard />
      </div>
    </Provider>
  );
}

export default App;

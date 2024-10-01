// src/store/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state: An array of 64 elements representing the chessboard squares
const initialState = Array(64).fill(null);

// Create a slice for the chessboard
const chessboardSlice = createSlice({
  name: 'chessboard',
  initialState,
  reducers: {
    toggleSquareColor: (state, action) => {
      const { index, isWhiteSquare } = action.payload;
      const currentColor = state[index];
      const newColor = isWhiteSquare
        ? currentColor === 'yellow' ? null : 'yellow'
        : currentColor === 'red' ? null : 'red';
      state[index] = newColor;
    },
  },
});

// Export the action to toggle square colors
export const { toggleSquareColor } = chessboardSlice.actions;

// Configure and export the Redux store
const store = configureStore({
  reducer: {
    chessboard: chessboardSlice.reducer,
  },
});

export default store;

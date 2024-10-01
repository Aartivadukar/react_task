// src/components/Chessboard/Chessboard.js
import React from 'react';
import './Chessboard.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSquareColor } from '../../store/store';

const Chessboard = () => {
  const squares = useSelector((state) => state.chessboard);
  const dispatch = useDispatch();

  const handleClick = (index, isWhiteSquare) => {
    dispatch(toggleSquareColor({ index, isWhiteSquare }));
  };

  const renderSquares = () => {
    const chessboard = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const index = row * 8 + col;
        const isWhiteSquare = (row + col) % 2 === 0;
        const color = squares[index]
          ? squares[index]
          : isWhiteSquare
          ? 'white'
          : 'black';

        chessboard.push(
          <div
            key={index}
            className="square"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index, isWhiteSquare)}
          />
        );
      }
    }
    return chessboard;
  };

  return <div className="chessboard">{renderSquares()}</div>;
};

export default Chessboard;

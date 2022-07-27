import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);
  const handlesquareclick = possition => {
    if (board[possition]) {
      return;
    }

    setBoard(pre => {
      return pre.map((Square, pos) => {
        if (pos === possition) {
          return isXnext ? 'X' : 'O';
        }
        return Square;
      });
    });
    setIsXnext(pre => !pre);
  };
  const rendersquare = possition => {
    return (
      <Square
        value={board[possition]}
        onClick={() => handlesquareclick(possition)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>

      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>

      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};

export default Board;

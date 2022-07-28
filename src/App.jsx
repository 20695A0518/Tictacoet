import React, { useState } from 'react';
import Board from './Components/Board';
import { calculateWinner } from './helpers ';
import './Style/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);
  const winner = calculateWinner(board);
  const Message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXnext ? 'X' : 'O'}`;
  const handlesquareclick = possition => {
    if (board[possition] || winner) {
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
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{Message}</h2>
      <Board board={board} handlesquareclick={handlesquareclick} />
    </div>
  );
};
export default App;

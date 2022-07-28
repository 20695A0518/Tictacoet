import React, { useState } from 'react';
import Board from './Components/Board';
import History from './History';
import { calculateWinner } from './helpers ';
import './Style/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXnext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  const Message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isXnext ? 'X' : 'O'}`;
  const handlesquareclick = possition => {
    if (current.board[possition] || winner) {
      return;
    }

    setHistory(pre => {
      const last = pre[pre.length - 1];
      const newBoard = last.board.map((Square, pos) => {
        if (pos === possition) {
          return last.isXnext ? 'X' : 'O';
        }
        return Square;
      });
      return pre.concat({ board: newBoard, isXnext: !last.isXnext });
    });

    setCurrentMove(pre => pre + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{Message}</h2>
      <Board board={current.board} handlesquareclick={handlesquareclick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;

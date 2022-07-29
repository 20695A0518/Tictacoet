import React, { useState } from 'react';
import Board from './Components/Board';
import History from './History';
import Statusmessage from './Statusmessage';
import { calculateWinner } from './helpers ';
import './Style/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXnext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningSquares } = calculateWinner(current.board);

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
  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <Statusmessage winner={winner} current={current} />

      <Board
        board={current.board}
        handlesquareclick={handlesquareclick}
        winningSquares={winningSquares}
      />
      <button
        type="buttton"
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        start newgame
      </button>
      <h2 style={{ fontweight: 'normal' }}> Current game history </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls" />
    </div>
  );
};
export default App;

import React from 'react';

const Statusmessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {!!0 && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXnext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default Statusmessage;

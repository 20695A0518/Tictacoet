import React from 'react';
import { SassColor } from 'sass';
const Square = ({ value, onClick, iswinningsquare }) => {
  return (
    <button
      type="button"
      className={`square ${iswinningsquare ? 'winning' : ''}${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;

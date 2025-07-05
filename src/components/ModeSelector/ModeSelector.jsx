import './ModeSelector.css';
import React from 'react';

function ModeSelector({ onSelectMode }) {
  return (
    <div className="mode-selector">
      <h1>Tic Tac Toe</h1>
      <p>Choose a mode:</p>
      <button onClick={() => onSelectMode('bot')}>
        Play vs Bot
      </button>
      <button onClick={() => onSelectMode('friend')}>
        Play vs Friend
      </button>
    </div>
  );
}

export default ModeSelector;

import { useState } from "react";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, SetWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (newBoard.every(Boolean)) {
      setWinner("draw");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl text-neonPink font-bold">
        {winner
          ? winner === "draw"
            ? "It's a Draw!"
            : `Player ${winner} Wins!`
          : `Current Player: ${currentPlayer}`}
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`
              w-20 h-20 md:w-24 md:h-24
              flex items-center justify-center
              rounded-xl border border-neonPink
              text-3xl md:text-5xl font-bold
              bg-white dark:bg-darkBg
              text-black dark:text-neonPink
              hover:bg-neonPink hover:text-white
              transition-colors duration-300
              shadow-glow
            `}
          >
            {cell}
          </button>
        ))}
      </div>

      {winner && (
        <button
          onClick={resetGame}
          className="mt-4 px-6 py-3 bg-neonPink text-white rounded-xl hover:scale-105 transition-transform shadow-glow"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

/**
 * Checks for winning conditions.
 * @param {string[]} board
 * @returns {'X' | 'O' | null}
 */
function checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default GameBoard;

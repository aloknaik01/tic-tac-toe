/**
 * Returns the best move for the AI using Minimax.
 * @param {Array<string|null>} board - current board
 * @param {string} aiPlayer - usually "O"
 * @param {string} humanPlayer - usually "X"
 */
export function getBestMove(board, aiPlayer, humanPlayer) {
  const emptyIndices = getEmptyIndices(board);

  // Base cases:
  const winner = checkWinner(board);
  if (winner === aiPlayer) return { score: +10 };
  if (winner === humanPlayer) return { score: -10 };
  if (emptyIndices.length === 0) return { score: 0 };

  // Collect moves
  const moves = [];

  for (let i of emptyIndices) {
    // Try move
    const newBoard = [...board];
    newBoard[i] = aiPlayer;

    const result = minimax(newBoard, humanPlayer, aiPlayer, humanPlayer);
    moves.push({ index: i, score: result.score });
  }

  // Pick the highest scoring move
  let bestMove = moves[0];
  for (let move of moves) {
    if (move.score > bestMove.score) {
      bestMove = move;
    }
  }

  return bestMove;
}

/**
 * Minimax recursive algorithm.
 * @param {Array<string|null>} board
 * @param {string} player
 * @param {string} aiPlayer
 * @param {string} humanPlayer
 */
function minimax(board, player, aiPlayer, humanPlayer) {
  const emptyIndices = getEmptyIndices(board);

  const winner = checkWinner(board);
  if (winner === aiPlayer) return { score: +10 };
  if (winner === humanPlayer) return { score: -10 };
  if (emptyIndices.length === 0) return { score: 0 };

  const moves = [];

  for (let i of emptyIndices) {
    const newBoard = [...board];
    newBoard[i] = player;

    const nextPlayer = player === aiPlayer ? humanPlayer : aiPlayer;
    const result = minimax(newBoard, nextPlayer, aiPlayer, humanPlayer);

    moves.push({
      index: i,
      score: result.score
    });
  }

  // If it's AI's turn, maximize score
  let bestMove;
  if (player === aiPlayer) {
    let highest = -Infinity;
    for (let move of moves) {
      if (move.score > highest) {
        highest = move.score;
        bestMove = move;
      }
    }
  } else {
    let lowest = +Infinity;
    for (let move of moves) {
      if (move.score < lowest) {
        lowest = move.score;
        bestMove = move;
      }
    }
  }

  return bestMove;
}

function getEmptyIndices(board) {
  return board
    .map((cell, index) => (cell == null ? index : null))
    .filter((i) => i != null);
}

/**
 * Check winner function for AI.
 * @param {Array<string|null>} board
 * @returns {"X"|"O"|null}
 */
function checkWinner(board) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  for (let [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

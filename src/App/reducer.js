import { useReducer } from "react";

const WIN_STREAK = 4;
const NUMBER_OF_ROWS = 6;
const NUMBER_OF_COLUMNS = 7;

export default function useBoardReducer() {
  return useReducer(reducer, init());
}

function reducer(state, action) {
  switch (action.type) {
    case "MOVE":
      if (state.winner !== null) {
        return state;
      }

      const { column } = action;
      const rowToAddDisc = state.nextEmptyCell[column];

      if (rowToAddDisc < 0) {
        return state;
      }

      const newBoard = state.board.map((row, rowIndex) =>
        rowIndex === rowToAddDisc
          ? replaceAt(state.board[rowIndex], column, state.player)
          : row
      );

      return {
        board: newBoard,
        player: state.player === 1 ? 2 : 1,
        nextEmptyCell: replaceAt(state.nextEmptyCell, column, rowToAddDisc - 1),
        winner: isWinConditionReached(newBoard, rowToAddDisc, column)
          ? state.player
          : null
      };
    case "RESET":
      return init();
    default:
      return state;
  }
}

function init() {
  return {
    board: [...Array(NUMBER_OF_ROWS)].map(() =>
      [...Array(NUMBER_OF_COLUMNS)].fill(0)
    ),
    player: 1,
    nextEmptyCell: [...Array(NUMBER_OF_COLUMNS)].fill(5),
    winner: null
  };
}

function isWinConditionReached(board, row, col) {
  const player = board[row][col];

  for (const [rowDir, colDir] of directions) {
    let [i, j] = [row, col];
    let streak = 0;

    const traverseCondition = () =>
      i >= 0 &&
      i < board.length &&
      j >= 0 &&
      j < board[i].length &&
      board[i][j] === player &&
      streak < WIN_STREAK;

    while (traverseCondition()) {
      streak += 1;
      i += rowDir;
      j += colDir;
    }

    [i, j] = [row - rowDir, col - colDir];

    while (traverseCondition()) {
      streak += 1;
      i -= rowDir;
      j -= colDir;
    }

    if (streak === WIN_STREAK) {
      return true;
    }
  }

  return false;
}

const directions = [
  [-1, -1],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
];

function replaceAt(array, index, value) {
  return array.map((currentValue, currentIndex) =>
    currentIndex === index ? value : currentValue
  );
}

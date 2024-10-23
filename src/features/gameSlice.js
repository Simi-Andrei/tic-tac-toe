import { createSlice } from "@reduxjs/toolkit";

// Function to get the winning row/column or diagonal
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return line; // Return winning cells
    }
  }
  return null; // No winner
};

// Initial state of the game
const initialState = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
  status: "inProgress",
  score: JSON.parse(localStorage.getItem("gameScore")) || {
    player1: 0,
    player2: 0,
  },
  winningCells: [],
  messages: JSON.parse(localStorage.getItem("chatMessages")) || [],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Reset the state to the initial state
    reset(state) {
      state.board = Array(9).fill(null);
      state.currentPlayer = "X";
      state.winner = null;
      state.status = "inProgress";
      state.winningCells = [];
    },
    // Resest the state and also the board, messages and score
    resetHistory(state) {
      state.board = Array(9).fill(null);
      state.currentPlayer = "X";
      state.winner = null;
      state.status = "inProgress";
      state.winningCells = [];
      state.messages = [];
      localStorage.removeItem("chatMessages");
      state.score = { player1: 0, player2: 0 };
      localStorage.setItem("gameScore", JSON.stringify(state.score));
    },
    // Player move
    move(state, action) {
      const { index, player } = action.payload;

      // Check if the game is still in progress or if the cell is empty
      if (state.board[index] === null && state.status === "inProgress") {
        state.board[index] = player;

        // Check if any player wins or if it is a draw game
        const winningLine = calculateWinner(state.board);
        if (winningLine) {
          state.winner = player; // Set winner player
          state.status = "won";
          state.winningCells = winningLine; // Store winning cells
          if (player === "X") {
            // Increase player X score in header
            state.score.player1 += 1;
          } else {
            // Increase player O score in header
            state.score.player2 += 1;
          }
          // Save score in local storage
          localStorage.setItem("gameScore", JSON.stringify(state.score));
        } else if (state.board.every((cell) => cell !== null)) {
          // Call draw if there is no winning line
          state.status = "draw";
        } else {
          // Other player move if no winning line or no draw
          state.currentPlayer = player === "X" ? "O" : "X";
        }
      }
    },
    // Add a message to the chat
    addMessage(state, action) {
      const { player, text } = action.payload;
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      state.messages.push({ player, text, timestamp });
      localStorage.setItem("chatMessages", JSON.stringify(state.messages)); // Save chat messages to local storage
    },
  },
});

export const { reset, move, addMessage, resetHistory } = gameSlice.actions;
export default gameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
      state.score = { player1: 0, player2: 0 };
      state.messages = [];
    },
  },
});

export const { reset } = gameSlice.actions;
export default gameSlice.reducer;

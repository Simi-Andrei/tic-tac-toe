import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  board: Array(9).fill(null),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;

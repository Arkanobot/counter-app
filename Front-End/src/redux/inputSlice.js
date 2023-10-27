import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  input: undefined,
};

//actions & reducers
export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  name: undefined,
};

//actions & reducers
export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName } = nameSlice.actions;

export default nameSlice.reducer;

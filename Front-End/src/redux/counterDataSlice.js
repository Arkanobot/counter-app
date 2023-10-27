import { createSlice } from "@reduxjs/toolkit";

//initial State
const initialState = {
  data: [],
};

//actions & reducers
export const counterDataSlice = createSlice({
  name: "counterData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = counterDataSlice.actions;

export default counterDataSlice.reducer;

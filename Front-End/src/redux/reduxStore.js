import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameSlice";
import inputReducer from "./inputSlice";
import counterReducer from "./counterDataSlice";

//redux store
export const store = configureStore({
  reducer: {
    name: nameReducer,
    input: inputReducer,
    data: counterReducer,
  },
});

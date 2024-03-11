/** @format */

import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../slice/";
import DarkModeSlice from "../slice/DarkModeSlice";

const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
    theme: DarkModeSlice.reducer,
  },
});

export default store;

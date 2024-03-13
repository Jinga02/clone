/** @format */

import { configureStore } from "@reduxjs/toolkit";
import StyleSlice from "../slice/StyleSlice";

const store = configureStore({
  reducer: {
    styleValue: StyleSlice.reducer,
  },
});

export default store;

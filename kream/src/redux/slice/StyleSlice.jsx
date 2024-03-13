/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  styles: [], // styles 속성 추가
};

const StyleSlice = createSlice({
  name: "styleValue",
  initialState,
  reducers: {
    setStyles: (state, action) => {
      state.styles = action.payload;
    },
    getStyle: (state, action) => {},
  },
});

export const { setStyles } = StyleSlice.actions;
export default StyleSlice;

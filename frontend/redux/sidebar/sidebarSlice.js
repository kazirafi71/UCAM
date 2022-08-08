import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowSidebar: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,

  reducers: {
    showSidebarReducer: (state, action) => {
      state.isShowSidebar = action.payload;
    },
  },
});

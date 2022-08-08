import { combineReducers } from "@reduxjs/toolkit";
import { sidebarSlice } from "./sidebar/sidebarSlice";

export const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
});

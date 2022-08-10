import { combineReducers } from "@reduxjs/toolkit";
import { deleteModalSlice } from "./deleteModal/deleteModalSlice";
import { sidebarSlice } from "./sidebar/sidebarSlice";
import { tokenSlice } from "./token/tokenSlice";

export const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
  token: tokenSlice.reducer,
  deleteModal: deleteModalSlice.reducer,
});

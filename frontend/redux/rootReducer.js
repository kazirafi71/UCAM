import { combineReducers } from "@reduxjs/toolkit";
import { adminSlice } from "./admin/adminSlice";
import { courseSlice } from "./course/courseSlice";
import { deleteModalSlice } from "./deleteModal/deleteModalSlice";
import { sidebarSlice } from "./sidebar/sidebarSlice";
import { tokenSlice } from "./token/tokenSlice";

export const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
  token: tokenSlice.reducer,
  deleteModal: deleteModalSlice.reducer,
  admin: adminSlice.reducer,
  courses: courseSlice.reducer,
});

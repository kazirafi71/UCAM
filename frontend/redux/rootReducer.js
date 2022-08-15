import { combineReducers } from "@reduxjs/toolkit";
import { adminSlice } from "./admin/adminSlice";
import { attendanceSlice } from "./attendence/attendenceSlice";
import { courseSlice } from "./course/courseSlice";
import { deleteModalSlice } from "./deleteModal/deleteModalSlice";
import { sidebarSlice } from "./sidebar/sidebarSlice";
import { studentSlice } from "./student/studentSlice";
import { teacherSlice } from "./teacher/teacherSlice";
import { tokenSlice } from "./token/tokenSlice";

export const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
  token: tokenSlice.reducer,
  deleteModal: deleteModalSlice.reducer,
  admin: adminSlice.reducer,
  courses: courseSlice.reducer,
  student: studentSlice.reducer,
  teacher: teacherSlice.reducer,
  attendance: attendanceSlice.reducer,
});

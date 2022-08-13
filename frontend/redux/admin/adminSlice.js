import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: [],
  teacherList: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    getStudentListReducer: (state, action) => {
      state.studentList = action.payload;
    },
    getTeacherListReducer: (state, action) => {
      state.teacherList = action.payload;
    },
  },
});

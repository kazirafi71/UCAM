import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseStudents: [],
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    listCourseStudents: (state, action) => {
      state.courseStudents = action.payload;
    },
  },
});

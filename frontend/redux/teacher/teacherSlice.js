import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teacher_courses: [],
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    listTeacherCoursesReducer: (state, action) => {
      state.teacher_courses = action.payload;
    },
  },
});

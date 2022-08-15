import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teacher_courses: [],
  teacher_profile: "",
  errorMsg: "",
  isLoading: false,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    listTeacherCoursesReducer: (state, action) => {
      state.teacher_courses = action.payload;
    },
    teacherProfileReducer: (state, action) => {
      state.teacher_profile = action.payload;
    },
    errorMsgReducer: (state, action) => {
      state.errorMsg = action.payload;
    },
    LoadingReducer: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

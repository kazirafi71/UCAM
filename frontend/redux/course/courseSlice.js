import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listCourses: [],
  is_error: false,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    listCoursesReducer: (state, action) => {
      state.listCourses = action.payload;
    },
  },
});

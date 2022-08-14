import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student_profile: "",
  errorMsg: "",
  isLoading: false,
};

export const studentSlice = createSlice({
  name: "Student",
  initialState,
  reducers: {
    studentProfileInfoReducer: (state, action) => {
      state.student_profile = action.payload;
    },
    errorReducer: (state, action) => {
      state.errorMsg = action.payload;
    },
    loadingReducer: (state, action) => {
      state.isLoading = action.payload;
    },
    clearStudentInfoReducer: (state, action) => {
      state.student_profile = "";
    },
  },
});

export const { clearStudentInfoReducer } = studentSlice.actions;

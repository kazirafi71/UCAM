import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendanceSheet: [],
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    listAttendanceSheetReducer: (state, action) => {
      state.attendanceSheet = action.payload;
    },
  },
});

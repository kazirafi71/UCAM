import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendanceSheet: [],
  attendanceSummary: [],
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    listAttendanceSheetReducer: (state, action) => {
      state.attendanceSheet = action.payload;
    },
    attendanceSummaryReducer: (state, action) => {
      state.attendanceSummary = action.payload;
    },
  },
});

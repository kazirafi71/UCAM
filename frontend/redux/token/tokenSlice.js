import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_valid_token: true,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    verifyTokenReducer: (state, action) => {
      state.is_valid_token = action.payload;
    },
  },
});

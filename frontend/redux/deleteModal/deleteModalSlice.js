import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: "",
  errorMsg: "",
  update_list: false,
};

export const deleteModalSlice = createSlice({
  name: "deleteModalSlice",
  initialState,
  reducers: {
    deleteSuccessReducer: (state, action) => {
      state.success = action.payload;
      
    },
    deleteErrorReducer: (state, action) => {
      state.errorMsg = action.payload;
    },
    updateListReducer: (state, action) => {
      state.update_list = action.payload;
    },
  },
});

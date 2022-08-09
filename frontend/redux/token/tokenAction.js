import Axios from "axios";
import baseUrl from "../../config/baseUrl";
import { tokenSlice } from "./tokenSlice";
const { actions: slice } = tokenSlice;

export const checkTokenAction = (auth_token) => {
  return (dispatch) => {
    let bodyData = {
      token: auth_token,
    };

    Axios.post(`${baseUrl}/api/verify-token`, bodyData)
      .then((result) => {
        if (result.data.success) {
          dispatch(slice.verifyTokenReducer(true));
        } else {
          dispatch(slice.verifyTokenReducer(false));
        }
      })
      .catch((error) => {
        dispatch(slice.verifyTokenReducer(false));
        // console.log(error.response?.data?.error);
      });
  };
};

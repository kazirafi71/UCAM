import Axios from "axios";
import baseUrl from "../../config/baseUrl";
import getLocalStorageData from "../../utils/localStorageData";
import { studentSlice } from "./studentSlice";
const { actions: slice } = studentSlice;

// const auth_token = getLocalStorageData();

export const getStudentProfileInfoAction =
  (studentId, auth_token) => async (dispatch) => {
    try {
      dispatch(slice.loadingReducer(true));
      const result = await Axios.get(
        `${baseUrl}/api/student-profile/${studentId}`,
        {
          headers: {
            Authorization: "Bearer " + auth_token,
          },
        }
      );

      dispatch(slice.loadingReducer(false));
      dispatch(slice.studentProfileInfoReducer(result.data));
    } catch (error) {
      dispatch(slice.loadingReducer(false));
      dispatch(slice.errorReducer(error.response?.data?.error));
    }
  };



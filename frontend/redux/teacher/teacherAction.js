import { teacherSlice } from "./teacherSlice";
const { actions: slice } = teacherSlice;
import Axios from "axios";
import baseUrl from "../../config/baseUrl";

export const getTeacherProfileAction =
  (teacherId, token) => async (dispatch) => {
    try {
      dispatch(slice.LoadingReducer(true));
      const result = await Axios.get(
        `${baseUrl}/api/teacher-profile/${teacherId}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch(slice.LoadingReducer(false));
      dispatch(slice.teacherProfileReducer(result.data));
    } catch (error) {
      dispatch(slice.LoadingReducer(false));
      dispatch(slice.errorMsgReducer(error.response.data.error));
    }
  };

export const getTeacherCoursesAction =
  (teacherId, token) => async (dispatch) => {
    try {
      dispatch(slice.LoadingReducer(true));
      const result = await Axios.get(
        `${baseUrl}/api/teacher-courses/${teacherId}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      dispatch(slice.LoadingReducer(false));
      dispatch(slice.listTeacherCoursesReducer(result.data));
    } catch (error) {
      dispatch(slice.LoadingReducer(false));
      dispatch(slice.errorMsgReducer(error.response.data.error));
    }
  };

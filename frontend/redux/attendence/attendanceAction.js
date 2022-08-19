import { attendanceSlice } from "./attendenceSlice";
const { actions: slice } = attendanceSlice;
import Axios from "axios";
import baseUrl from "../../config/baseUrl";

export const getListAttendanceSheetAction =
  (courseId, teacherId, user_token) => async (dispatch) => {
    try {
      const result = await Axios.get(
        `${baseUrl}/api/get-attendance-list/${courseId}/teacher/${teacherId}`,
        {
          headers: {
            Authorization: "Bearer " + user_token,
          },
        }
      );
      dispatch(slice.listAttendanceSheetReducer(result.data));
    } catch (error) {
      console.log(error);
    }
  };

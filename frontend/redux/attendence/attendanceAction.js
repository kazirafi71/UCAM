import { attendanceSlice } from "./attendenceSlice";
const { actions: slice } = attendanceSlice;
import Axios from "axios";
import baseUrl from "../../config/baseUrl";

export const getListCourseStudentsAction = (courseId) => async (dispatch) => {
  try {
    const result = await Axios.get(
      `${baseUrl}/api/get-attendance-list/${courseId}`
    );
    dispatch(slice.listCourseStudents(result.data));
  } catch (error) {
    console.log(error);
  }
};

import Axios from "axios";
import baseUrl from "../../config/baseUrl";
import { getAdminToken } from "../../utils/localStorageData";
import { adminSlice } from "./adminSlice";
const { actions: slice } = adminSlice;
const admin_token = getAdminToken();

export const studentListAction = () => async (dispatch) => {
  try {
    const result = await Axios.get(
      baseUrl + "/api/admin/list-student-profiles",
      {
        headers: {
          Authorization: "Bearer " + admin_token,
        },
      }
    );

    dispatch(slice.getStudentListReducer(result.data));
  } catch (error) {
    console.log(error);
  }
};

export const teacherListAction = () => async (dispatch) => {
  try {
    const result = await Axios.get(baseUrl + "/api/admin/list-teachers", {
      headers: {
        Authorization: "Bearer " + admin_token,
      },
    });
    

    dispatch(slice.getTeacherListReducer(result.data));
  } catch (error) {
    console.log(error);
  }
};

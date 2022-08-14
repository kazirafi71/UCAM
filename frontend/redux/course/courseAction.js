import Axios from "axios";
import baseUrl from "../../config/baseUrl";
import { getAdminToken } from "../../utils/localStorageData";
import { courseSlice } from "./courseSlice";
const { actions: slice } = courseSlice;

const admin_token = getAdminToken();

export const courseListAction = () => async (dispatch) => {
  try {
    const result = await Axios.get(baseUrl + "/api/admin/list-courses", {
      headers: {
        Authorization: "Bearer " + admin_token,
      },
    });

    dispatch(slice.listCoursesReducer(result.data));
  } catch (error) {
    console.log(error);
  }
};

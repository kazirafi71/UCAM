import Axios from "axios";
import baseUrl from "../../config/baseUrl";
import { getAdminToken } from "../../utils/localStorageData";
import { deleteModalSlice } from "./deleteModalSlice";
const { actions: slice } = deleteModalSlice;
import toast from "react-hot-toast";

export const deleteUser_action = (userId) => {
  return (dispatch) => {
    const admin_token = getAdminToken();
    Axios.delete(`${baseUrl}/api/admin/delete-user/${userId}`, {
      headers: {
        Authorization: "Bearer " + admin_token,
      },
    })
      .then((result) => {
        if (result.data.success) {
          toast.success(result.data.success);
          dispatch(slice.deleteSuccessReducer(result.data.success));
          dispatch(slice.updateListReducer(true));
        }
      })
      .catch((err) => {
        dispatch(slice.deleteSuccessReducer(err.response.data.error));
      });
  };
};

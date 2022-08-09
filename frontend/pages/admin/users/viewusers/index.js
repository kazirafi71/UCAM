import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import ViewUsersComp from "../../../../Components/AdminComp/UsersComp/ViewUsersComp/ViewUsersComp";
import Axios from "axios";
import baseUrl from "../../../../config/baseUrl";
import { getAdminToken } from "../../../../utils/localStorageData";

const ViewUsers = () => {
  return (
    <AdminLayout>
      <ViewUsersComp />
    </AdminLayout>
  );
};

export default ViewUsers;

import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import ViewUsersComp from "../../../../Components/AdminComp/UsersComp/ViewUsersComp/ViewUsersComp";

const ViewUsers = () => {
  return (
    <AdminLayout>
      <ViewUsersComp />
    </AdminLayout>
  );
};

export default ViewUsers;

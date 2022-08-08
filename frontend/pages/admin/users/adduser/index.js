import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import AddUserComp from "../../../../Components/AdminComp/UsersComp/AddUserComp/AddUserComp";

const AddUser = () => {
  return (
    <AdminLayout>
      <AddUserComp />
    </AdminLayout>
  );
};

export default AddUser;

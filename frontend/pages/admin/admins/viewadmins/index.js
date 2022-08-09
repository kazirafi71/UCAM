import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import ViewAdminListComp from "../../../../Components/AdminComp/AdminsComp/ViewAdminListComp/ViewAdminListComp";

const ViewAdmins = () => {
  return (
    <AdminLayout>
      <ViewAdminListComp />
    </AdminLayout>
  );
};

export default ViewAdmins;

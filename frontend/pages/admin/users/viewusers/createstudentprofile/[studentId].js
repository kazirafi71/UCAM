import React from "react";
import AdminLayout from "../../../../../Components/AdminComp/AdminLayout/AdminLayout";
import CreateStudentProfileComp from "../../../../../Components/AdminComp/StudentInfo/CreateStudentProfileComp/CreateStudentProfileComp";

const CreateStudentProfile = () => {
  return (
    <AdminLayout>
      <CreateStudentProfileComp />
    </AdminLayout>
  );
};

export default CreateStudentProfile;

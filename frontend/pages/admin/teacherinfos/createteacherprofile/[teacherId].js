import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import CreateTeacherProfileComp from "../../../../Components/AdminComp/TeacherInfoComps/TeacherInfosList/CreateTeacherProfileComp/CreateTeacherProfileComp";

const createteacherprofile = () => {
  return (
    <AdminLayout>
      <CreateTeacherProfileComp />
    </AdminLayout>
  );
};

export default createteacherprofile;

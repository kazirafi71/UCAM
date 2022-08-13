import React from "react";
import AdminLayout from "../../../Components/AdminComp/AdminLayout/AdminLayout";
import TeacherInfosList from "../../../Components/AdminComp/TeacherInfoComps/TeacherInfosList/TeacherInfosList";
const index = () => {
  return (
    <AdminLayout>
      <TeacherInfosList />
    </AdminLayout>
  );
};

export default index;

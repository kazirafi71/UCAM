import React from "react";
import AdminLayout from "../../../Components/AdminComp/AdminLayout/AdminLayout";
import CourseListComp from "../../../Components/AdminComp/CourseComp/CourseListComp/CourseListComp";

const index = () => {
  return (
    <AdminLayout>
      <CourseListComp />
    </AdminLayout>
  );
};

export default index;

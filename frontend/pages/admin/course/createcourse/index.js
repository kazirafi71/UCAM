import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import CreateCourseComp from "../../../../Components/AdminComp/CourseComp/CreateCourseComp/CreateCourseComp";

const createcourse = () => {
  return (
    <AdminLayout>
      <CreateCourseComp />
    </AdminLayout>
  );
};

export default createcourse;

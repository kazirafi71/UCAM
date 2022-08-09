import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import ViewUsersComp from "../../../../Components/AdminComp/UsersComp/ViewUsersComp/ViewUsersComp";
import Axios from "axios";
import baseUrl from "../../../../config/baseUrl";

const ViewUsers = ({ data }) => {
  return (
    <AdminLayout>
      <ViewUsersComp data={data} />
    </AdminLayout>
  );
};

export async function getServerSideProps(context) {
  const result = await Axios.get(`${baseUrl}/api/admin/list-users`);
  const data = result?.data;

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default ViewUsers;

import React from "react";
import AdminLayout from "../../../../Components/AdminComp/AdminLayout/AdminLayout";
import CreateBillComp from "../../../../Components/AdminComp/BillComp/CreateBillComp/CreateBillComp";

const CreateBill = () => {
  return (
    <AdminLayout>
      <CreateBillComp />
    </AdminLayout>
  );
};

export default CreateBill;

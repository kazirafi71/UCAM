import React from "react";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";
import { Container } from "react-bootstrap";

const ViewBillInfoComp = () => {
  return (
    <div>
      <Container>
        <AdminTitleComp
          title="View bill Information's"
          btn_text="Add Bill"
          url="/admin/bill/createbill"
        />
      </Container>
    </div>
  );
};

export default ViewBillInfoComp;

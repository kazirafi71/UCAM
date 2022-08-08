import React from "react";
import AdminNav from "../AdminNav/AdminNav";
import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }) => {
  const sidebarShow = useSelector((state) => state.sidebar);

  return (
    <div>
      <AdminNav />
      <Container fluid>
        <Row>
          {sidebarShow?.isShowSidebar ? (
            <Col md={3}>
              <AdminSidebar />
            </Col>
          ) : (
            ""
          )}

          <Col md={sidebarShow?.isShowSidebar ? "9" : "12"}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLayout;

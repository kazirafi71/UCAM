import React, { useEffect } from "react";
import AdminNav from "../AdminNav/AdminNav";
import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useSelector } from "react-redux";
import { getAdminToken } from "../../../utils/localStorageData";
import { useRouter } from "next/router";

const AdminLayout = ({ children }) => {
  const sidebarShow = useSelector((state) => state.sidebar);
  const router = useRouter();
  const admin_token = getAdminToken();
  useEffect(() => {
    if (!admin_token) {
      router.push("/admin/adminlogin");
    }
  }, []);
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

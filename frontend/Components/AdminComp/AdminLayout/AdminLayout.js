import React, { useEffect } from "react";
import AdminNav from "../AdminNav/AdminNav";
import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { useSelector } from "react-redux";
import { getAdminToken } from "../../../utils/localStorageData";
import { useRouter } from "next/router";
import { checkTokenAction } from "../../../redux/token/tokenAction";
import Styles from "./AdminLayout.module.css";

import toast, { Toaster } from "react-hot-toast";

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
    <div style={{ backgroundColor: "#f6f8fc", height: "100vh" }}>
      <Toaster />
      <AdminNav />
      <Container fluid>
        {/* desktop_style */}
        <Row className={Styles.desktopLayout_style}>
          {sidebarShow?.isShowSidebar ? (
            <Col md={3}>
              <AdminSidebar />
            </Col>
          ) : (
            ""
          )}

          <Col md={sidebarShow?.isShowSidebar ? "9" : "12"}>{children}</Col>
        </Row>

        {/* mobile_style */}
        <Row className={Styles.mobileLayout_style}>
          <Col md={12}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLayout;

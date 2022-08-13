import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@mui/material";
import Axios from "axios";
import baseUrl from "../../../config/baseUrl";
import { getAdminToken } from "../../../utils/localStorageData";
import { FaUserFriends, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { useRouter } from "next/router";

const DashboardComp = () => {
  const [totalNumber, setTotalNumber] = useState("");
  const router = useRouter();

  useEffect(() => {
    Axios.get(`${baseUrl}/api/admin/total-counts`, {
      headers: { Authorization: "Bearer " + getAdminToken() },
    })
      .then((result) => {
        setTotalNumber(result?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { total_users, total_teachers, total_admins, total_students } =
    totalNumber;
  return (
    <div>
      <Container>
        <Row>
          <Col className="py-3" md={4}>
            <Paper
              onClick={() => router.push("/admin/users/viewusers")}
              style={{ cursor: "pointer" }}
              className="shadow"
            >
              <div className="text-center py-3">
                <h3 className="pb-2" style={{ color: "rgb(255, 166, 0)" }}>
                  <FaUserFriends style={{ marginRight: 5 }} />
                  Users
                </h3>
                <h2>{total_users}</h2>
              </div>
            </Paper>
          </Col>
          <Col className="py-3" md={4}>
            <Paper
              onClick={() => router.push("/admin/studentinfos")}
              style={{ cursor: "pointer" }}
              className="shadow"
            >
              <div className="text-center py-3">
                <h3 className="pb-2" style={{ color: "rgb(255, 166, 0)" }}>
                  <FaUserGraduate style={{ marginRight: 5 }} /> Students
                </h3>
                <h2>{total_students}</h2>
              </div>
            </Paper>
          </Col>
          <Col className="py-3" md={4}>
            <Paper
              onClick={() => router.push("/admin/teacherinfos")}
              style={{ cursor: "pointer" }}
              className="shadow"
            >
              <div className="text-center py-3">
                <h3 className="pb-2" style={{ color: "rgb(255, 166, 0)" }}>
                  <FaUserTie style={{ marginRight: 5 }} /> Teachers
                </h3>
                <h2>{total_teachers}</h2>
              </div>
            </Paper>
          </Col>
          <Col className="py-3" md={4}>
            <Paper
              onClick={() => router.push("/admin/admins/viewadmins")}
              style={{ cursor: "pointer" }}
              className="shadow"
            >
              <div className="text-center py-3">
                <h3 className="pb-2" style={{ color: "rgb(255, 166, 0)" }}>
                  <RiAdminFill style={{ marginRight: 5 }} /> Admins
                </h3>
                <h2>{total_admins}</h2>
              </div>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardComp;

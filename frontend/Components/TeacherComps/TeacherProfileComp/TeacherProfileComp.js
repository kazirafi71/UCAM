import React, { useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import CommonTitle from "../../CommonComp/CommonTitle/CommonTitle";
import Styles from "./TeacherProfileComp.module.css";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getStudentProfileInfoAction } from "../../../redux/student/studentAction";
import LoadingComp from "../../CommonComp/LoadingComp/LoadingComp";
import getLocalStorageData, {
  decodedToken,
} from "../../../utils/localStorageData";

const TeacherProfileComp = () => {
  const dispatch = useDispatch();
  const { errorMsg, isLoading, teacher_profile } = useSelector(
    (state) => state.teacher
  );

  // useEffect(() => {
  //   const token = decodedToken();
  //   const auth_token = getLocalStorageData();
  //   dispatch(getStudentProfileInfoAction(token?._id, auth_token));
  // }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingComp />
      </div>
    );
  }
  if (errorMsg) {
    return (
      <div>
        <Alert className="text-center" variant="danger">
          {errorMsg}
        </Alert>
      </div>
    );
  }

  const {
    blood_group,
    contact_no,
    date_of_birth,
    email,
    fullName,
    gender,
    nationality,
    parament_address,
    present_address,
    profile_img,
    religion,
    passed_university,
    passed_department,
  } = teacher_profile;

  return (
    <div className={Styles.profileMain__style}>
      <Container className="py-3">
        <CommonTitle title="Teacher Information's" />
        <Paper className="p-4 shadow-md">
          <Row>
            <div className="">
              <img
                className={Styles.profileImg__Style}
                src={profile_img}
                alt=""
              />
            </div>
            <Col md={6}>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Name </p>
                <small>: {fullName}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Gender </p>
                <small>: {gender}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Religion </p>
                <small>: {religion}</small>
              </div>

              <div className="d-flex">
                <p className={Styles.titleName__style}>Passed University </p>
                <small>: {passed_university}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Passed Department </p>
                <small>: {passed_department}</small>
              </div>

              <div className="d-flex">
                <p className={Styles.titleName__style}>Nationality </p>
                <small>: {nationality}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Blood Group </p>
                <small>: {blood_group}</small>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Contact No. </p>
                <small>: {contact_no}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Email :</p>
                <small>: {email}</small>
              </div>

              <div className="d-flex">
                <p className={Styles.titleName__style}>Date of Birth </p>
                <small>: {date_of_birth}</small>
              </div>

              <div className="d-flex">
                <p className={Styles.titleName__style}>Present Address </p>
                <small>: {present_address}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Permanent Address </p>
                <small>: {parament_address} </small>
              </div>
            </Col>
          </Row>
        </Paper>
      </Container>
    </div>
  );
};

export default TeacherProfileComp;

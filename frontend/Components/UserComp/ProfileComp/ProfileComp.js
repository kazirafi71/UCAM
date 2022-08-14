import React, { useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import CommonTitle from "../../CommonComp/CommonTitle/CommonTitle";
import Styles from "./ProfileComp.module.css";
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getStudentProfileInfoAction } from "../../../redux/student/studentAction";
import LoadingComp from "../../CommonComp/LoadingComp/LoadingComp";
import getLocalStorageData, {
  decodedToken,
} from "../../../utils/localStorageData";

const ProfileComp = () => {
  const dispatch = useDispatch();
  const { errorMsg, isLoading, student_profile } = useSelector(
    (state) => state.student
  );

  useEffect(() => {
    const token = decodedToken();
    const auth_token = getLocalStorageData();
    dispatch(getStudentProfileInfoAction(token?._id, auth_token));
  }, []);

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
    father_name,
    father_profession,
    fullName,
    gender,
    marital_status,
    mother_name,
    mother_profession,
    nationality,
    parament_address,
    present_address,
    profile_img,
    religion,
    roll_number,
    second_guardian_address,
    second_guardian_name,
    session,
    section,
    sms_guardian_number,
  } = student_profile;
  return (
    <div className={Styles.profileMain__style}>
      <Container className="py-3">
        <CommonTitle title="Student Information" />
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
                <p className={Styles.titleName__style}>Roll </p>
                <small>: {roll_number}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Session </p>
                <small>: {session}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Section </p>
                <small>: {section}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Nationality </p>
                <small>: {nationality}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Blood Group </p>
                <small>: {blood_group}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Contact No. </p>
                <small>: {contact_no}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Father's Name </p>
                <small>: {father_name}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}> Mother's Name</p>
                <small>: {mother_name}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>SMS Contact Self </p>
                <small>: {contact_no}</small>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Email :</p>
                <small>: {email}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>SMS Contact Gaurdian </p>
                <small>: {sms_guardian_number}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Date of Birth </p>
                <small>: {date_of_birth}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Matrial Status </p>
                <small>: {marital_status}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Guardian's Name </p>
                <small>: {second_guardian_name}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}> Father's Profession</p>
                <small>: {father_profession}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Mother's Profession</p>
                <small>: {mother_profession}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Present Address </p>
                <small>: {present_address}</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Permanent Address </p>
                <small>: {parament_address} </small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Guardian Address </p>
                <small>: {second_guardian_address}</small>
              </div>
            </Col>{" "}
          </Row>
        </Paper>
      </Container>
    </div>
  );
};

export default ProfileComp;

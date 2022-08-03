import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonTitle from "../../CommonComp/CommonTitle/CommonTitle";
import Styles from "./ProfileComp.module.css";

const ProfileComp = () => {
  return (
    <div className={Styles.profileMain__style}>
      <Container className="py-3">
        <CommonTitle title="Student Information" />
        <Paper className="p-4 shadow-md">
          <Row>
            <div className="">
              <img
                className={Styles.profileImg__Style}
                src={`https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60`}
                alt=""
              />
            </div>
            <Col md={6}>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Name </p>
                <small>: Kazi Musaddi Rafi</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Gender </p>
                <small>: Male</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Blood Group </p>
                <small>: B+</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Contact No. </p>
                <small>: +8801626627461</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Father's Name </p>
                <small>: Kazi Obaidul Haque</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}> Mother's Name</p>
                <small>: Moni Akter</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>SMS Contact Self </p>
                <small>: +8801682401675</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>SMS Contact Gaurdian </p>
                <small>: +8801682401675</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Date of Birth </p>
                <small>: 15/06/2000</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Matrial Status </p>
                <small>: Single</small>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Religion </p>
                <small>: Islam</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Email :</p>
                <small>: kazirafi668@gmail.com</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Guardian's Name </p>
                <small>: SALIM REZA</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}> Father's Profession</p>
                <small>: Teacher</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Mother's Profession</p>
                <small>: House Wife</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Present Address </p>
                <small>: MIRER BETKA, TANGAIL SADAR, TANGAIL</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Permanent Address </p>
                <small>: MIRER BETKA, TANGAIL SADAR, TANGAIL </small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Guardian Address </p>
                <small>: Pichuria, TANGAIL SADAR, TANGAIL</small>
              </div>
              <div className="d-flex">
                <p className={Styles.titleName__style}>Mailing Address </p>
                <small>: kazirafi668@gmail.com</small>
              </div>
            </Col>{" "}
          </Row>
        </Paper>
      </Container>
    </div>
  );
};

export default ProfileComp;

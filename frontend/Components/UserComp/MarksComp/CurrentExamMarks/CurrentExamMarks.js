import { Paper } from "@mui/material";
import React from "react";
import { Container, Table } from "react-bootstrap";
import CommonTitle from "../../../CommonComp/CommonTitle/CommonTitle";
import Styles from "./CurrentExamMarks.module.css";

const CurrentExamMarks = () => {
  return (
    <div className={Styles.mainDiv__style}>
      <Container className="py-3">
        <CommonTitle title="Exam Mark Summary" />
        <div className="">
          <h6 className={Styles.sessionInfo__style}>
            Academic Session : Jul - Dec 2022
          </h6>
          <Paper className="text-center">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Course Code </th>
                  <th>Course Title</th>
                  <th>Section </th>

                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>

                  <td>
                    <button className={Styles.detailsBtn_style}>Details</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>

                  <td>
                    <button className={Styles.detailsBtn_style}>Details</button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Paper>
        </div>
        {/* Class Attendance Details */}
        <div className=" pt-4">
          <h6 className={Styles.sessionInfo__style}>
            Class Attendance Details for :: ICE4207 : Cryptography
          </h6>
          <Paper className="text-center">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Exam Name</th>
                  <th>Exam Mark</th>
                  <th>Obtained Mark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Test Exam</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
              </tbody>
            </Table>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default CurrentExamMarks;

import { Paper } from "@mui/material";
import React from "react";
import { Container, Table } from "react-bootstrap";
import CommonTitle from "../../../CommonComp/CommonTitle/CommonTitle";
import Styles from "./AttendenceSummary.module.css";

const AttendenceSummary = () => {
  return (
    <div className={Styles.mainDiv__style}>
      <Container className="py-3">
        <CommonTitle title="Class Attendance Summary" />
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

                  <th>Present Count </th>
                  <th>Absent Count </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ICE4223</td>
                  <td>Cloud Computing</td>
                  <td>B</td>
                  <td>5</td>
                  <td>2</td>

                  <td>
                    <button className={Styles.detailsBtn_style}>Details</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>ICE4223</td>
                  <td>Cloud Computing</td>
                  <td>B</td>
                  <td>5</td>
                  <td>2</td>

                  <td>
                    <button className={Styles.detailsBtn_style}>Details</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>ICE4223</td>
                  <td>Cloud Computing</td>
                  <td>B</td>
                  <td>5</td>
                  <td>2</td>

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
                  <th>Attendance Date </th>
                  <th>Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>17/07/2022</td>
                  <td>Present</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>20/07/2022</td>
                  <td>Present</td>
                </tr>
              </tbody>
            </Table>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default AttendenceSummary;

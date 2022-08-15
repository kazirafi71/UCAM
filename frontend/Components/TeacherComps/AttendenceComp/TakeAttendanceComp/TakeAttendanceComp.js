import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const TakeAttendanceComp = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            <h2>Microwave</h2>
            <Paper>
              <Table
                className="text-center"
                cla
                striped
                bordered
                hover
                responsive
              >
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Roll Number </th>
                    <th>FullName</th>

                    <th>Present Count </th>
                    <th>Absent Count </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>ICE4223</td>
                    <td>Cloud Computing</td>

                    <td>5</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </Table>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TakeAttendanceComp;

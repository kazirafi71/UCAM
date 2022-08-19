import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListAttendanceSheetAction } from "../../../../redux/attendence/attendanceAction";
import { getTeacherCoursesAction } from "../../../../redux/teacher/teacherAction";
import getLocalStorageData, {
  decodedToken,
} from "../../../../utils/localStorageData";
import LoadingComp from "../../../CommonComp/LoadingComp/LoadingComp";
import Axios from "axios";
import baseUrl from "../../../../config/baseUrl";
import toast, { Toaster } from "react-hot-toast";

const TakeAttendanceComp = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [studentId, setStudentId] = useState("");
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const dispatch = useDispatch();
  const { attendanceSheet } = useSelector((state) => state.attendance);

  const { teacher_profile, teacher_courses, isLoading, errorMsg } = useSelector(
    (state) => state.teacher
  );
  const token = getLocalStorageData();

  useEffect(() => {
    if (teacher_profile) {
      dispatch(getTeacherCoursesAction(teacher_profile?._id, token));
    }
  }, [teacher_profile]);

  useEffect(() => {
    if (selectedCourse && teacher_profile) {
      dispatch(
        getListAttendanceSheetAction(
          selectedCourse,
          teacher_profile?._id,
          token
        )
      );
    }
  }, [selectedCourse, teacher_profile, token]);

  // Taking attendance

  const presentHandler = (status, id) => {
    setAttendanceStatus(status);
    setStudentId(id);
  };

  const saveAttendanceHandler = () => {
    toast.success("Attendance saved successfully");
  };

  const presentSaveHandler = () => {
    let today = new Date().toLocaleDateString();
    let bodyData = {
      studentId: studentId,
      attendance_status: attendanceStatus,
      attendance_date: today,
    };

    if (attendanceStatus) {
      Axios.put(
        `${baseUrl}/api/create-attendance/${selectedCourse}`,
        bodyData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    if (attendanceStatus) {
      presentSaveHandler();
    }
  }, [attendanceStatus]);

  if (isLoading) {
    return <LoadingComp />;
  }
  if (errorMsg) {
    return <Alert className="alert-danger text-center">{errorMsg}</Alert>;
  }

  console.log(attendanceStatus);

  return (
    <div>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            <div className="py-3">
              <h5 className="py-2">Select your course</h5>
              <Form>
                <Form.Select
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>Select course</option>
                  {teacher_courses &&
                    teacher_courses?.map((item, index) => {
                      return (
                        <option key={index} value={item._id}>
                          {item.course_title}
                        </option>
                      );
                    })}
                </Form.Select>
              </Form>
            </div>

            <Paper>
              <Table className="text-center" striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Roll Number </th>
                    <th>FullName</th>

                    <th>Present</th>
                    <th>Absent</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceSheet &&
                    attendanceSheet[0]?.course_students &&
                    attendanceSheet[0]?.course_students?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>1</td>
                          <td>{item.roll_number}</td>
                          <td>{item.fullName}</td>
                          <td>
                            <Form.Check
                              type="radio"
                              aria-label="radio 1"
                              name={`present${index}`}
                              value=""
                              label="Present"
                              onChange={(e) => presentHandler(true, item._id)}
                            />
                          </td>
                          <td>
                            <Form.Check
                              type="radio"
                              aria-label="radio 1"
                              name={`present${index}`}
                              label="Absent"
                              onChange={(e) => presentHandler(false, item._id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Paper>
            <button
              onClick={saveAttendanceHandler}
              className="commonBtn__style mt-2"
            >
              Save
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TakeAttendanceComp;

import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStudentCoursesAction } from "../../../../redux/student/studentAction";
import getLocalStorageData, {
  decodedToken,
} from "../../../../utils/localStorageData";
import CommonTitle from "../../../CommonComp/CommonTitle/CommonTitle";

const CourseHistoryComp = () => {
  const dispatch = useDispatch();
  const { student_courses } = useSelector((state) => state.student);

  useEffect(() => {
    const studentId = decodedToken();
    const auth_token = getLocalStorageData();
    dispatch(getStudentCoursesAction(studentId?._id, auth_token));
  }, []);
  return (
    <div>
      <Container className="py-3">
        <CommonTitle title="Course History" />
        <div className="">
          <Paper className="text-center">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Course Code </th>
                  <th>Course Title</th>
                  <th>Credit </th>
                  <th>Academic Session </th>
                </tr>
              </thead>
              <tbody>
                {student_courses &&
                  student_courses?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.course_code}</td>
                        <td> {item.course_title}</td>
                        <td>{item.credit}</td>
                        <td> {item.academic_session}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default CourseHistoryComp;

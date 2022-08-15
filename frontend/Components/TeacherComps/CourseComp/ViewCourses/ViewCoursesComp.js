import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherCoursesAction } from "../../../../redux/teacher/teacherAction";
import getLocalStorageData, {
  decodedToken,
} from "../../../../utils/localStorageData";
import LoadingComp from "../../../CommonComp/LoadingComp/LoadingComp";
import courseThumb from "../../../../assets/Images/commonImg/markus-spiske-Skf7HxARcoc-unsplash.jpg";
import Image from "next/image";

const ViewCoursesComp = () => {
  const { teacher_profile, teacher_courses, isLoading, errorMsg } = useSelector(
    (state) => state.teacher
  );
  const dispatch = useDispatch();
  // console.log(teacher_courses);
  useEffect(() => {
    const token_info = decodedToken();
    const token = getLocalStorageData();
    dispatch(getTeacherCoursesAction(teacher_profile?._id, token));
  }, [teacher_profile]);

  if (isLoading) {
    return <LoadingComp />;
  }
  if (errorMsg) {
    return <Alert className="alert-danger text-center">{errorMsg}</Alert>;
  }

  // console.log(teacher_courses);
  if (teacher_courses.length == 0) {
    return <h2 className="text-center py-3">No courses found</h2>;
  }
  return (
    <div>
      <Container>
        <h2 className="text-center py-3">My Courses</h2>

        <Row>
          {teacher_courses &&
            teacher_courses?.map((item, index) => {
              return (
                <Col key={index} className="py-3" md={4}>
                  <Paper>
                    <img
                      src={courseThumb.src}
                      style={{
                        objectFit: "cover",
                        height: "250px",
                        width: "100%",
                      }}
                      alt=""
                    />
                    <div className="p-2">
                      <h6>{item.course_title}</h6>
                      <p>Department : {item.department}</p>
                      <p>Credit : {item.credit}</p>
                    </div>
                  </Paper>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ViewCoursesComp;

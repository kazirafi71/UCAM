import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import CommonTitle from "../../../CommonComp/CommonTitle/CommonTitle";
import Styles from "./AttendenceSummary.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAttendanceSummaryAction } from "../../../../redux/attendence/attendanceAction";
import getLocalStorageData from "../../../../utils/localStorageData";
import LoadingComp from "../../../CommonComp/LoadingComp/LoadingComp";

const AttendenceSummary = () => {
  const dispatch = useDispatch();
  const { attendanceSummary } = useSelector((state) => state.attendance);
  const { isLoading, student_profile } = useSelector((state) => state.student);
  const [detailsInfo, setDetailsInfo] = useState("");
  const [detailsCourse, setDetailsCourse] = useState("");

  useEffect(() => {
    if (student_profile) {
      const auth_token = getLocalStorageData();
      dispatch(getAttendanceSummaryAction(student_profile?._id, auth_token));
    }
  }, [student_profile]);

  if (isLoading) {
    return <LoadingComp />;
  }

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
                  <th>Present Count </th>
                  <th>Absent Count </th>
                  <th>Action </th>
                </tr>
              </thead>
              <tbody>
                {attendanceSummary &&
                  attendanceSummary?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.course?.course_code}</td>
                        <td>{item.course?.course_title}</td>
                        <td>{item.total_present}</td>
                        <td>{item.total_absent}</td>

                        <td>
                          <button
                            onClick={() => {
                              setDetailsInfo(item?.attendance);
                              setDetailsCourse(item.course?.course_title);
                            }}
                            className={Styles.detailsBtn_style}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </Paper>
        </div>
        {/* Class Attendance Details */}
        {detailsInfo && (
          <div className=" pt-4">
            <h6 className={Styles.sessionInfo__style}>
              Class Attendance Details for :: ICE4207 : {detailsCourse}
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
                  {detailsInfo &&
                    detailsInfo?.map((item, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.attendance_date}</td>
                          <td>
                            {item.attendance_status ? "Present" : "Absent"}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </Paper>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AttendenceSummary;

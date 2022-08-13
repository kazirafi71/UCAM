import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  studentListAction,
  teacherListAction,
} from "../../../../redux/admin/adminActions";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import LoadingComp from "../../../CommonComp/LoadingComp/LoadingComp";
import Axios from "axios";
import baseUrl from "../../../../config/baseUrl";
import { getAdminToken } from "../../../../utils/localStorageData";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
const animatedComponents = makeAnimated();

const initialValues = {
  course_title: "",
  credit: "",
  course_code: "",
  academic_session: "",
  department: "",
  course_students: "",
  course_teachers: "",
};

const CreateCourseComp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { studentList, teacherList } = useSelector((state) => state.admin);
  const [teacherOptions, setTeacherOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);
  const [teacherId, setTeacherId] = useState([]);
  const [studentId, setStudentId] = useState([]);

  // console.log(studentList);
  // console.log(teacherList);

  const validate = (values) => {
    const {
      course_title,
      credit,
      course_code,
      academic_session,
      department,
      course_students,
      course_teachers,
    } = values;

    let errors = {};
    if (!course_title) {
      errors.course_title = "Please enter course title";
    }
    if (!credit) {
      errors.credit = "Please enter course credit";
    }
    if (!course_code) {
      errors.course_code = "Please enter course code";
    }
    if (!academic_session) {
      errors.academic_session = "Please enter course academic session";
    }
    if (!department) {
      errors.department = "Please enter department";
    }
    // if (!course_students) {
    //   errors.course_students = "Please enter course students";
    // }
    // if (!course_teachers) {
    //   errors.course_teachers = "Please enter course teachers";
    // }

    return errors;
  };
  const onSubmit = (values) => {
    
    const {
      course_title,
      credit,
      course_code,
      academic_session,
      department,
      course_students,
      course_teachers,
    } = values;

    let courseData = {
      course_title,
      credit,
      course_code,
      academic_session,
      department,
      course_students: studentId,
      course_teachers: teacherId,
    };

    const admin_token = getAdminToken();

    Axios.post(baseUrl + "/api/admin/create-course", courseData, {
      headers: {
        Authorization: "Bearer " + admin_token,
      },
    })
      .then((result) => {
        if (result.data.success) {
          toast.success(result.data?.success);
          router.push("/admin/course");
        } else {
          toast.error("something went wrong");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  console.log(formik);

  useEffect(() => {
    dispatch(studentListAction());
    dispatch(teacherListAction());
  }, []);

  useEffect(() => {
    // console.log(studentList);
    if (studentList) {
      const studentOptions = studentList.map((item) => {
        return {
          value: item.user?._id,
          label: `${item.fullName} (${item.roll_number}) (${item.section})`,
        };
      });

      setStudentOptions(studentOptions);
    }
    if (teacherList) {
      const teacherOptions = teacherList.map((item) => {
        return {
          value: item.user?._id,
          label: `${item.fullName} (${item.passed_department}) `,
        };
      });

      setTeacherOptions(teacherOptions);
    }
  }, [studentList, teacherList]);

  const studentHandler = (val) => {
    const students = val.map((item) => item.value);
    setStudentId(students);
  };

  const teacherHandler = (val) => {
    const teachers = val.map((item) => item.value);
    setTeacherId(teachers);
  };

  if (!studentList || !teacherList) {
    return (
      <div>
        <LoadingComp />
      </div>
    );
  }

  // console.log(formik.errors);
  return (
    <div>
      <Container>
        <AdminTitleComp title="Create Course" />
        <Paper className="p-3 py-4 mt-4">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Course Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter course title"
                name="course_title"
                {...formik.getFieldProps("course_title")}
              />
              <small style={{ color: "red" }}>
                {formik.touched.course_title &&
                  formik.errors.course_title &&
                  formik.errors.course_title}
              </small>
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Course Credit*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Please enter course title"
                    name="credit"
                    {...formik.getFieldProps("credit")}
                  />
                  <small style={{ color: "red" }}>
                    {formik.touched.credit &&
                      formik.errors.credit &&
                      formik.errors.credit}
                  </small>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Course Code*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Please enter course title"
                    name="course_code"
                    {...formik.getFieldProps("course_code")}
                  />
                  <small style={{ color: "red" }}>
                    {formik.touched.course_code &&
                      formik.errors.course_code &&
                      formik.errors.course_code}
                  </small>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Academic Session*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Please enter course title"
                    name="academic_session"
                    {...formik.getFieldProps("academic_session")}
                  />{" "}
                  <small style={{ color: "red" }}>
                    {formik.touched.academic_session &&
                      formik.errors.academic_session &&
                      formik.errors.academic_session}
                  </small>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Please enter course title"
                    name="department"
                    {...formik.getFieldProps("department")}
                  />
                  <small style={{ color: "red" }}>
                    {formik.touched.department &&
                      formik.errors.department &&
                      formik.errors.department}
                  </small>{" "}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Course Students*</Form.Label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={studentOptions}
                    onChange={studentHandler}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Course Teachers*</Form.Label>
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={teacherOptions}
                    onChange={teacherHandler}
                  />
                </Form.Group>
              </Col>
            </Row>

            <button className="commonBtn__style" type="submit">
              Submit
            </button>
          </Form>
        </Paper>
      </Container>
    </div>
  );
};

export default CreateCourseComp;

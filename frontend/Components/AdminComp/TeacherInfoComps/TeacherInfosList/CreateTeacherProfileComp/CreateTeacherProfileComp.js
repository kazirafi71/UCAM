import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

import { useFormik } from "formik";
import Axios from "axios";

import { useRouter } from "next/router";

import toast, { Toaster } from "react-hot-toast";
import LoadingComp from "../../../../CommonComp/LoadingComp/LoadingComp";
import AdminTitleComp from "../../../../CommonComp/AdminTitleComp/AdminTitleComp";
import baseUrl from "../../../../../config/baseUrl";
import { getAdminToken } from "../../../../../utils/localStorageData";

const initialValues = {
  gender: "",
  contact_no: "",
  fullName: "",
  nationality: "",
  blood_group: "",
  passed_university: "",
  passed_department: "",
  date_of_birth: "",
  religion: "",
  email: "",
  present_address: "",
  parament_address: "",
  teacher_img: "",
};

const CreateTeacherProfileComp = () => {
  const router = useRouter();
  const { teacherId } = router.query;
  const [loading, setLoading] = useState(false);

  // console.log(studentId);

  const validate = (values) => {
    const {
      fullName,
      gender,
      contact_no,
      nationality,
      email,
      passed_university,
      passed_department,
    } = values;

    let errors = {};

    if (!fullName) {
      errors.fullName = "Please enter student fullName";
    }
    if (!gender) {
      errors.gender = "Please enter student gender";
    }
    if (!contact_no) {
      errors.contact_no = "Please enter contact no";
    }
    if (!nationality) {
      errors.nationality = "Please enter nationality";
    }
    if (!email) {
      errors.email = "Please enter email";
    }
    if (!passed_university) {
      errors.passed_university = "Please enter passed university";
    }
    if (!passed_department) {
      errors.passed_department = "Please enter passed department";
    }

    return errors;
  };
  const onSubmit = async (values) => {
    const {
      gender,
      contact_no,
      fullName,
      nationality,
      blood_group,
      date_of_birth,
      religion,
      email,
      present_address,
      parament_address,
      teacher_img,
      passed_university,
      passed_department,
    } = values;

    setLoading(true);

    const formData = new FormData();

    formData.append("gender", gender);
    formData.append("contact_no", contact_no);
    formData.append("fullName", fullName);
    formData.append("nationality", nationality);
    formData.append("blood_group", blood_group);

    formData.append("date_of_birth", date_of_birth);

    formData.append("religion", religion);
    formData.append("email", email);

    formData.append("present_address", present_address);
    formData.append("parament_address", parament_address);
    formData.append("passed_university", passed_university);
    formData.append("passed_department", passed_department);

    formData.append("teacher_img", teacher_img);

    try {
      const admin_token = getAdminToken();
      const result = await Axios.post(
        `${baseUrl}/api/admin/create-teacher-profile/${teacherId}`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + admin_token,
          },
        }
      );

      if (result.data?.success) {
        setLoading(false);
        toast.success(result.data.success);
        router.push("/admin/teacherinfos");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.error);
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <Container>
      <Toaster />
      <AdminTitleComp title="Create Teacher Profile" />
      <Paper className="p-3 py-4 mt-4">
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>FullName *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter fullname"
                  name="fullName"
                  {...formik.getFieldProps("fullName")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.fullName &&
                    formik.errors.fullName &&
                    formik.errors.fullName}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Gender *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter gender"
                  name="gender"
                  {...formik.getFieldProps("gender")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.gender &&
                    formik.errors.gender &&
                    formik.errors.gender}
                </small>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contact No. *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Please enter contact number "
                  name="contact_no"
                  {...formik.getFieldProps("contact_no")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.contact_no &&
                    formik.errors.contact_no &&
                    formik.errors.contact_no}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Blood Group </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter blood group "
                  name="blood_group"
                  {...formik.getFieldProps("blood_group")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Passed University *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter passed university "
                  name="passed_university"
                  {...formik.getFieldProps("passed_university")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.passed_university &&
                    formik.errors.passed_university &&
                    formik.errors.passed_university}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Passed department *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter passed department "
                  name="passed_department"
                  {...formik.getFieldProps("passed_department")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.passed_department &&
                    formik.errors.passed_department &&
                    formik.errors.passed_department}
                </small>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nationality*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter nationality"
                  name="nationality"
                  {...formik.getFieldProps("nationality")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.nationality &&
                    formik.errors.nationality &&
                    formik.errors.nationality}
                </small>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Present Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter present address"
                  name="present_address"
                  {...formik.getFieldProps("present_address")}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Permanent Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter permanent address"
                  name="parament_address"
                  {...formik.getFieldProps("parament_address")}
                />{" "}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Religion</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter religion"
                  name="religion"
                  {...formik.getFieldProps("religion")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.religion &&
                    formik.errors.religion &&
                    formik.errors.religion}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Please enter date of birth"
                  name="date_of_birth"
                  {...formik.getFieldProps("date_of_birth")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Please enter second guardian address"
                  name="teacher_img"
                  onChange={(e) => {
                    formik.setFieldValue("teacher_img", e.target.files[0]);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          {loading ? (
            <LoadingComp />
          ) : (
            <button className="commonBtn__style" type="submit">
              Create Profile
            </button>
          )}
        </Form>
      </Paper>
    </Container>
  );
};

export default CreateTeacherProfileComp;

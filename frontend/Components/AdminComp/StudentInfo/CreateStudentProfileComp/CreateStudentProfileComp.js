import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";
import { useFormik } from "formik";
import Axios from "axios";
import baseUrl from "../../../../config/baseUrl";
import { useRouter } from "next/router";
import { getAdminToken } from "../../../../utils/localStorageData";
import toast, { Toaster } from "react-hot-toast";
import LoadingComp from "../../../CommonComp/LoadingComp/LoadingComp";

const initialValues = {
  gender: "",
  contact_no: "",
  fullName: "",
  nationality: "",
  blood_group: "",
  father_name: "",
  father_profession: "",
  mother_name: "",
  mother_profession: "",
  sms_guardian_number: "",
  date_of_birth: "",
  marital_status: "",
  religion: "",
  email: "",
  second_guardian_name: "",
  present_address: "",
  parament_address: "",
  second_guardian_address: "",
  roll_number: "",
  session: "",
  section: "",
  student_img: "",
};

const CreateStudentProfileComp = () => {
  const router = useRouter();
  const { studentId } = router.query;
  const [loading, setLoading] = useState(false);

  // console.log(studentId);

  const validate = (values) => {
    const {
      fullName,
      gender,
      contact_no,
      nationality,
      father_name,
      mother_name,
      sms_guardian_number,
      date_of_birth,
      religion,
      parament_address,
      roll_number,
      session,
      section,
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
    if (!father_name) {
      errors.father_name = "Please enter father's name";
    }
    if (!mother_name) {
      errors.mother_name = "Please enter mother's name";
    }
    if (!sms_guardian_number) {
      errors.sms_guardian_number = "Please enter guardian number for sms";
    }
    if (!date_of_birth) {
      errors.date_of_birth = "Please enter date of birth";
    }
    if (!religion) {
      errors.religion = "Please enter religion";
    }
    if (!parament_address) {
      errors.parament_address = "Please enter parament address";
    }
    if (!roll_number) {
      errors.roll_number = "Please enter roll number";
    }
    if (!session) {
      errors.session = "Please enter session";
    }
    if (!section) {
      errors.section = "Please enter section";
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
      father_name,
      father_profession,
      mother_name,
      mother_profession,
      sms_guardian_number,
      date_of_birth,
      marital_status,
      religion,
      email,
      second_guardian_name,
      present_address,
      parament_address,
      second_guardian_address,
      roll_number,
      session,
      section,
      student_img,
    } = values;

    setLoading(true);

    const formData = new FormData();

    formData.append("gender", gender);
    formData.append("contact_no", contact_no);
    formData.append("fullName", fullName);
    formData.append("nationality", nationality);
    formData.append("blood_group", blood_group);
    formData.append("father_name", father_name);
    formData.append("father_profession", father_profession);
    formData.append("mother_name", mother_name);
    formData.append("mother_profession", mother_profession);
    formData.append("sms_guardian_number", sms_guardian_number);
    formData.append("date_of_birth", date_of_birth);
    formData.append("marital_status", marital_status);
    formData.append("religion", religion);
    formData.append("email", email);
    formData.append("second_guardian_name", second_guardian_name);
    formData.append("present_address", present_address);
    formData.append("parament_address", parament_address);
    formData.append("second_guardian_address", second_guardian_address);
    formData.append("roll_number", roll_number);
    formData.append("session", session);
    formData.append("section", section);
    formData.append("student_img", student_img);

    try {
      const admin_token = getAdminToken();
      const result = await Axios.post(
        `${baseUrl}/api/admin/create-student-profile/${studentId}`,
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
        router.push("/admin/studentinfos");
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
      <AdminTitleComp title="Create Student Profile" />
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
                <Form.Label>Roll Number *</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Please enter roll number"
                  name="roll_number"
                  {...formik.getFieldProps("roll_number")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.roll_number &&
                    formik.errors.roll_number &&
                    formik.errors.roll_number}
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
                <Form.Label>Martial Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter martial status "
                  name="marital_status"
                  {...formik.getFieldProps("marital_status")}
                />
              </Form.Group>
            </Col>
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
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
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
                <Form.Label>Father's Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter father's name "
                  name="father_name"
                  {...formik.getFieldProps("father_name")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.father_name &&
                    formik.errors.father_name &&
                    formik.errors.father_name}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Father's Profession</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter father's profession "
                  name="father_profession"
                  {...formik.getFieldProps("father_profession")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Mother's Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter mother's name"
                  name="mother_name"
                  {...formik.getFieldProps("mother_name")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.mother_name &&
                    formik.errors.mother_name &&
                    formik.errors.mother_name}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Mother's Profession</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter mother's profession "
                  name="mother_profession"
                  {...formik.getFieldProps("mother_profession")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Sms Guardian No.*</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Please enter sms guardian number"
                  name="sms_guardian_number"
                  {...formik.getFieldProps("sms_guardian_number")}
                />{" "}
                <small style={{ color: "red" }}>
                  {formik.touched.sms_guardian_number &&
                    formik.errors.sms_guardian_number &&
                    formik.errors.sms_guardian_number}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Session*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter session"
                  name="session"
                  {...formik.getFieldProps("session")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.session &&
                    formik.errors.session &&
                    formik.errors.session}
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
                <Form.Label>Permanent Address*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter permanent address"
                  name="parament_address"
                  {...formik.getFieldProps("parament_address")}
                />{" "}
                <small style={{ color: "red" }}>
                  {formik.touched.parament_address &&
                    formik.errors.parament_address &&
                    formik.errors.parament_address}
                </small>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Second Guardian Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter second guardian name"
                  name="second_guardian_name"
                  {...formik.getFieldProps("second_guardian_name")}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Second Guardian Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter second guardian address"
                  name="second_guardian_address"
                  {...formik.getFieldProps("second_guardian_address")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {" "}
              <Form.Group className="mb-3">
                <Form.Label>Section*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter section"
                  name="section"
                  {...formik.getFieldProps("section")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.section &&
                    formik.errors.section &&
                    formik.errors.section}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Religion*</Form.Label>
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
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Religion*</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Please enter date of birth"
                  name="date_of_birth"
                  {...formik.getFieldProps("date_of_birth")}
                />
                <small style={{ color: "red" }}>
                  {formik.touched.date_of_birth &&
                    formik.errors.date_of_birth &&
                    formik.errors.date_of_birth}
                </small>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Please enter second guardian address"
                  name="student_img"
                  onChange={(e) => {
                    formik.setFieldValue("student_img", e.target.files[0]);
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

export default CreateStudentProfileComp;

import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Styles from "./AdminLoginComp.module.css";
import Link from "next/link";
import { useFormik } from "formik";
import Axios from "axios";
import baseUrl from "../../../config/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import getLocalStorageData, {
  getAdminToken,
} from "../../../../backend/utils/localStorageData";

const initialValues = {
  email: "",
  password: "",
  admin_code: "",
};

const AdminLoginComp = () => {
  const router = useRouter();
  const validate = (values) => {
    const { email, password, admin_code } = values;
    let errors = {};
    if (!email) {
      errors.email = "Please provide your email";
    }
    if (!password) {
      errors.password = "Please provide your password";
    }
    if (!admin_code) {
      errors.admin_code = "Please provide your admin code";
    }
    return errors;
  };
  const onSubmit = async (values) => {
    const { email, password, admin_code } = values;

    let data = {
      email,
      password,
      admin_code,
    };

    try {
      const result = await Axios.post(`${baseUrl}/api/admin/admin-login`, data);

      localStorage.setItem("admin_token", result.data?.token);
      toast.success("Login success");
      router.push("/admin/dashboard");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  useEffect(() => {
    const admin_token = getAdminToken();

    if (admin_token) {
      router.push("/admin/dashboard");
    }
  }, []);

  return (
    <div className={Styles.mainLogin_Style}>
      <Container>
        <Toaster />
        <Row>
          <Col className="mx-auto" md={7}>
            <Paper className="p-3 py-4">
              <h3 className="text-center">Login Here</h3>

              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    {...formik.getFieldProps("email")}
                  />
                  <small style={{ color: "red" }}>
                    {formik.touched.email &&
                      formik.errors.email &&
                      formik.errors.email}
                  </small>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Admin Code*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Admin Code"
                    name="admin_code"
                    {...formik.getFieldProps("admin_code")}
                  />
                  <small style={{ color: "red" }}>
                    {formik.touched.admin_code &&
                      formik.errors.admin_code &&
                      formik.errors.admin_code}
                  </small>
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label>Password*</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    {...formik.getFieldProps("password")}
                  />
                  <small style={{ color: "red" }}>
                    {formik.touched.password &&
                      formik.errors.password &&
                      formik.errors.password}
                  </small>
                </Form.Group>

                <button className="commonBtn__style mt-3" type="submit">
                  Login
                </button>
              </Form>
            </Paper>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLoginComp;

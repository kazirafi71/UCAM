import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Styles from "./LoginComp.module.css";
import Link from "next/link";
import { useFormik } from "formik";
import Axios from "axios";
import baseUrl from "../../../config/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import getLocalStorageData from "../../../utils/localStorageData";

const initialValues = {
  username: "",
  password: "",
};

const LoginComp = () => {
  const router = useRouter();
  const validate = (values) => {
    const { username, password } = values;
    let errors = {};
    if (!username) {
      errors.username = "Please provide your username";
    }
    if (!password) {
      errors.password = "Please provide your password";
    }

    return errors;
  };
  const onSubmit = async (values) => {
    const { username, password } = values;

    let data = {
      username,
      password,
    };

    try {
      const result = await Axios.post(`${baseUrl}/api/login`, data);

      localStorage.setItem("auth_token", result.data?.token);
      toast.success("Login success");
      router.push("/");
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
    const auth_token = getLocalStorageData();
    if (auth_token) {
      router.push("/");
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
              <h6 className="text-center py-2">
                Enter your ID and Password to access applications
              </h6>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    {...formik.getFieldProps("username")}
                  />
                  <small style={{ color: "red" }}>
                    {formik.touched.username &&
                      formik.errors.username &&
                      formik.errors.username}
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
                <Link href="/">
                  <a className={Styles.forgotPass_style}>Forgot Password?</a>
                </Link>{" "}
                <br />
                <button className="commonBtn__style mt-3" type="submit">
                  Submit
                </button>
              </Form>
            </Paper>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginComp;

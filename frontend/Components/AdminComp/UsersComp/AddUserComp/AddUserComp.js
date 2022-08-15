import { Paper } from "@mui/material";
import Axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";
import baseUrl from "../../../../config/baseUrl";
import { getAdminToken } from "../../../../utils/localStorageData";

const initialValues = {
  username: "",
  password: "",
  role: "",
};

const AddUserComp = () => {
  const router = useRouter();
  const validate = (values) => {
    const { username, password, role } = values;
    let errors = {};
    if (!username) {
      errors.username = "Please provide your username";
    }
    if (!password) {
      errors.password = "Please provide your password";
    }
    if (!role) {
      errors.role = "Please select role";
    }

    return errors;
  };
  const onSubmit = async (values) => {
    const admin_token = getAdminToken();
    const { username, password, role } = values;

    let data = {
      username,
      password,
      role,
    };

    try {
      const result = await Axios.post(
        `${baseUrl}/api/admin/create-user`,
        data,
        {
          headers: {
            Authorization: "Bearer " + admin_token,
          },
        }
      );

      toast.success(result.data.success);
      router.push("/admin/users/viewusers");
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <Container>
      <AdminTitleComp title="Add User" />
      <Paper className="p-3 py-4 mt-4">
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
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
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Role*</Form.Label>
            <Form.Select name="role" {...formik.getFieldProps("role")}>
              <option value="">Select role</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </Form.Select>
            <small style={{ color: "red" }}>
              {formik.touched.role && formik.errors.role && formik.errors.role}
            </small>
          </Form.Group>

          <button className="commonBtn__style mt-3" type="submit">
            Add User
          </button>
        </Form>
      </Paper>{" "}
    </Container>
  );
};

export default AddUserComp;

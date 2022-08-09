import { Paper } from "@mui/material";
import Axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import toast, { Toaster } from "react-hot-toast";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";
import baseUrl from "../../../../config/baseUrl";
import { getAdminToken } from "../../../../utils/localStorageData";

const initialValues = {
  email: "",
  password: "",
};

const AddAdminComp = () => {
  const router = useRouter();
  const validate = (values) => {
    const { email, password } = values;
    let errors = {};
    if (!email) {
      errors.email = "Please provide your email";
    }
    if (!password) {
      errors.password = "Please provide your password";
    }

    return errors;
  };
  const onSubmit = async (values) => {
    const admin_token = getAdminToken();
    const { email, password } = values;

    let data = {
      email,
      password,
    };

    try {
      const result = await Axios.post(
        `${baseUrl}/api/admin/create-admin`,
        data,
        {
          headers: {
            Authorization: "Bearer " + admin_token,
          },
        }
      );

      toast.success(result.data.success);
      router.push("/admin/admins/viewadmins");
    } catch (error) {
      
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
      <Toaster />
      <AdminTitleComp title="Add Admin" />
      <Paper className="p-3 py-4 mt-4">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
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

          <button className="commonBtn__style mt-3" type="submit">
            Add Admin
          </button>
        </Form>
      </Paper>{" "}
    </Container>
  );
};

export default AddAdminComp;

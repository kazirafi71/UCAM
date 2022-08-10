import { Paper } from "@mui/material";
import React from "react";
import { Container, Form } from "react-bootstrap";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";

const CreateStudentProfileComp = () => {
  return (
    <Container>
      <AdminTitleComp title="Create Student Profile" />
      <Paper className="p-3 py-4 mt-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <button className="commonBtn__style" type="submit">
            Submit
          </button>
        </Form>
      </Paper>
    </Container>
  );
};

export default CreateStudentProfileComp;

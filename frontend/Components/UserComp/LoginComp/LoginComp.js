import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Styles from "./LoginComp.module.css";
import Link from "next/link";

const LoginComp = () => {
  return (
    <div className={Styles.mainLogin_Style}>
      <Container>
        <Row>
          <Col className="mx-auto" md={7}>
            <Paper className="p-3 py-4">
              <h3 className="text-center">Login Here</h3>
              <h6 className="text-center py-2">
                Enter your ID and Password to access applications
              </h6>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username*</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label>Password*</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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

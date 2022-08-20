import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";

const CreateBillComp = () => {
  return (
    <div>
      <Container>
        <AdminTitleComp title="Add Bill" />
        <Paper className="p-3 py-4 mt-4">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Bill Type*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Please enter your bill type"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>invoice*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Please enter your bill type"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Issue Date*</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Please enter your bill issue date"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Date*</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Please enter your bill last date"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Total Amount*</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="Please enter total amount"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                {" "}
                <Form.Group className="mb-3">
                  <Form.Label>Bill Details*</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Please enter total amount"
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

export default CreateBillComp;

import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../utils/useForm";
import {formValidation} from "../utils/formValidation";

const Register = () => {
  const [values, handleregisterChange, submitRegister, errors] = useForm(
    formValidation
  );

  return (
    <Container className="register-wrapper">
      <h3
        style={{
          textAlign: "center",
          paddingBottom: "1rem",
          paddingTop: "1rem",
          fontWeight: "bold",
        }}
      >
        Sign up
      </h3>
      <div className="col-md-6 shadow p-5 mb-5 bg-white rounded ">
        <Form onSubmit={submitRegister}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={values.name || ""}
              placeholder="Full name"
              onChange={handleregisterChange}
            />
            <Form.Text>
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={values.email || ""}
              onChange={handleregisterChange}
            />
            <Form.Text>
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={values.password || ""}
              onChange={handleregisterChange}
            />
            <Form.Text>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="confirmpassword">
            <Form.Label>Confirm Password</Form.Label>

            <Form.Control
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={values.confirmpassword || ""}
              onChange={handleregisterChange}
            />
            <Form.Text>
              {errors.confirmpassword && (
                <p style={{ color: "red" }}>{errors.confirmpassword}</p>
              )}
            </Form.Text>
          </Form.Group>
          <Row>
            <Col className="col-md-4 offset-md-4">
              <Button type="submit" className="btn btn-custom btn-block">
                Sign up
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Row>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </Row>
    </Container>
  );
};

export default Register;

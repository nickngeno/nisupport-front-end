import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../utils/useForm";
import formValidation from "../utils/formValidation";

const Register = () => {
  const [values, handleChange, handleRegister, errors] = useForm(
    formValidation
  );

  return (
    <Container className="register-wrapper">
      <h3
        style={{
          textAlign: "center",
          paddingBottom: "1rem",
          paddingTop:"1rem",
          fontWeight: "bold",
        }}
      >
        Sign up
      </h3>
      <div className="col-md-6 shadow p-5 mb-5 bg-white rounded ">
        <Form onSubmit={handleRegister}>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={values.name || ""}
                placeholder="Full name"
                onChange={handleChange}
              />
              <Form.Text>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={values.email || ""}
                onChange={handleChange}
              />
              <Form.Text>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="password">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={values.password || ""}
                onChange={handleChange}
              />
              <Form.Text>
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="confirmpassword">
            <Form.Label column sm={2}>
              Confirm Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={values.confirmpassword || ""}
                onChange={handleChange}
              />
              <Form.Text>
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.confirmpassword}</p>
                )}
              </Form.Text>
            </Col>
          </Form.Group>
          <Row>
            <Col className="col-md-4 offset-md-4">
              <Button type="submit" className="btn btn-primary btn-block">
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

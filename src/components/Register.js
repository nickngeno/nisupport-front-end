import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../utils/useForm";

const Register = () => {

  const [values, handleChange,register] = useForm();
  
  return (
    <Container className="register-wrapper">
      <div className="col-md-5 shadow p-3 mb-5 bg-white rounded ">
        <h3
          style={{
            textAlign: "center",
            paddingBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          Sign up
        </h3>
        <Form onSubmit={register}>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                value={values.name || ""}
                placeholder="firstname lastname"
                onChange={handleChange}
              />
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
            </Col>
          </Form.Group>
          <Row>
            <Col className="col-md-4 offset-md-4">
              <Button type="submit" className="btn-custom">
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

import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Register = () => {
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
        <Form>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                name="name"
                placeholder="firstname lastname"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" name="email" placeholder="Email" />
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
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="password">
            <Form.Label column sm={2}>
              Confirm Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                name="password"
                placeholder="Confirm Password"
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

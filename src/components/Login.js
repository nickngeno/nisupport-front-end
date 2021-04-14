import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Login = () => {
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
          Login
        </h3>
        <Form>
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
          <Row>
            <Col className="col-md-12 offset-md-8">
              <a href="/passwordreset">Forgot password?</a>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-4 offset-md-4">
              <Button type="submit" className="btn-custom">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <Row>
        <p>
          New to niSupport? <a href="/register">Register</a>
        </p>
      </Row>
    </Container>
  );
};

export default Login;

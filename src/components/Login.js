import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import useLoginform from "../utils/useLoginform";
import { Spinner } from "react-bootstrap";
import Footer from "./Footer";

const Login = () => {
  const {
    submitLogin,
    handleloginChange,
    loginvalues,
    errors,
    isSubmitting,
  } = useLoginform();

  return (
    <>
    <Container className="register-wrapper">
      <h3
        style={{
          textAlign: "center",
          paddingBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Login
      </h3>
      <div className="col-sm-12 col-md-8 col-lg-6 shadow p-5 mb-3 bg-white rounded ">
        <Form onSubmit={submitLogin}>
          <Form.Group controlId="email">
            <Form.Label> Email </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={loginvalues.email}
              placeholder="Email"
              onChange={handleloginChange}
            />
            <Form.Text>
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label> Password </Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={loginvalues.password}
              placeholder="Password"
              onChange={handleloginChange}
            />
            <Form.Text>
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
            </Form.Text>
          </Form.Group>
          <Row>
            <Col className="col-sm-6 offset-sm-6 ">
              <a href="/passwordreset">Forgot password?</a>
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-12 col-md-4 offset-md-4">
              {isSubmitting ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </Button>
              ) : (
                <Button type="submit" className="btn btn-custom btn-block">
                  Login
                </Button>
              )}
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
    <Footer />
    </>
  );
};

export default Login;

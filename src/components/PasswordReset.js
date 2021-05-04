import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const PasswordReset = () => {
  return (
    <Container className="resetpassword-wrapper">
      <p style={{textAlign:"center"}}>
        An email with instructions and a link to reset your password will be
        sent to that email. Please provide the right email used during
        registration
      </p>
      <div className="col-md-6 shadow p-4 mb-5 bg-white rounded ">
        <Form>
          <Form.Group as={Row} controlId="email">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Col>
          </Form.Group>
          <Row>
            <Col className="col-md-4 offset-md-4">
              <Button type="submit" className=" btn btn-warning">
                Reset Password
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

export default PasswordReset;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../images/tony-rojas.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container className="herowrapper">
        <Row>
          <Col md={6} className="heroLeft">
            <span className="title">
              The largest community of Music enthuasiasts
            </span>
            <p>Why not get engaged to your real fans?</p>
            <a href="/" className="btn-custom link">Get Started</a>
          </Col>
          <Col md={6} className="heroRight">
            <img
              src={heroImg}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

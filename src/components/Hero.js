import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import heroImg from "../images/happy_music.svg";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container className="herowrapper">
        <Row>
          <Col md={6} className="heroLeft">
            <h2 className="title">
              The largest community of Music enthuasiasts
            </h2>
            <p>Why not get engaged to your real fans?</p>
            <a href="/" className="btn-custom link">Get Started</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

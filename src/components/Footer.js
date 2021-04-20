import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer-section">
        <Container className="footer-div">
          <Row>
            <Col>
              <Row>
                <Col className="footer-menu">
                  <span>Community</span>
                </Col>
                <Col className="footer-menu">
                  <span>Company</span>
                </Col>
              </Row>
            </Col>
            <Col className="footerlogo">Logo</Col>
            <Col>
              <Row>
                <Col className="footer-menu">
                  <span>Help desk</span>
                </Col>
                <Col className="footer-menu">
                  <span>Resources</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="social-links">
            <a href="/" target="_blank">
              <FaTwitterSquare />
            </a>
            <a href="/" target="_blank">
              <GrFacebook />
            </a>
            <a href="/" target="_blank">
              <FiInstagram />
            </a>
            <a href="/" target="_blank">
              <FaYoutubeSquare />
            </a>
          </Row>
          <Row className="copyright">
            <Col>&copy; Copyright niSupport 2021 </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import Logo from '../images/logo1.png'

const Footer = () => {
  return (
    <>
      <Container fluid className="footer-section">
        <Container className="footer-div">
          <Row>
            <Col>
              <Row>
                <Col className="footer-menu">
                  <span>Company</span>
                </Col>
                <Col className="footer-menu">
                  <span>Community</span>
                </Col>
              </Row>
            </Col>
            <Col className="footerlogo">
              <img src={Logo} alt="logo" style={{width:"100px", height:"auto"}} />
            </Col>
            <Col>
              <Row>
                <Col className="footer-menu">
                  <span>Pricing</span>
                </Col>
                <Col className="footer-menu">
                  <span>Resources</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr/>
          <Row className="social-links">
            <a href="/" target="_blank">
              <FaTwitterSquare />
            </a>
            <a href="/" target="_blank">
              <FaFacebook />
            </a>
            <a href="/" target="_blank">
              <FiInstagram />
            </a>
            <a href="/" target="_blank">
              <FaYoutubeSquare />
            </a>
          </Row>
          <Row className="copyright">
            <Col>&copy; Copyright niSupport {new Date().getFullYear()} 🦋</Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;

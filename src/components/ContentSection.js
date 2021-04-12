import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {AiOutlineControl} from 'react-icons/ai'
import {FaMoneyBillAlt} from 'react-icons/fa'
import {GrDocumentTime} from 'react-icons/gr'
import Jason from "../images/jason.jpg";
const ContentSection = () => {
  return (
    <>
      <Container fluid className="nisupport-section">
        <Container>
          <h2 className="title">What is niSupport?</h2>
          <p>
            With niSupport , you can let your fans become active participants in
            the work they love by offering them a monthly membership. You give
            them access to exclusive content, community, and insight into your
            creative process. In exchange, you get the freedom to do your best
            work, and the stability you need to build an independent creative
            career.
          </p>
        </Container>
      </Container>
      <Container fluid className="everyone-section">
        <Container>
          <h2 className="title">niSupport is for everyone who creates music</h2>
          <Row>
            <Col md={6} className="nisupport-leftsection">
              <p>
                Connect directly and build community with your most engaged
                fans. Test new work in a supportive environment. Establish a
                reliable, recurring revenue stream.
              </p>
              <Button className="btn-custom"> Get Started</Button>
            </Col>
            <Col md={6} className="nisupport-leftsection">
              <img src={Jason} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="nisupport-section">
        <Container>
          <h2 className="title">Why should musicians use membership?</h2>
          <Row>
            <Col className="card-items">
              <span><FaMoneyBillAlt/></span>
              <h4>Predictable & sustainable revenue</h4>
              <p>
                Monthly pledges means you know exactly what you're getting paid
                each month.
              </p>
            </Col>
            <Col className="card-items">
              <span><AiOutlineControl/></span>
              <h4>Retain full control</h4>
              <p>
              Still want to run ads, do brand deals, or work with sponsors? Cool with us!
              </p>
            </Col>
            <Col className="card-items">
              <span><GrDocumentTime/></span>
              <h4>Your music, your schedule</h4>
              <p>
              Posting tracks weekly? Waiting to release an album? No matter what, you call the shots.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="everyone-section">
        <Container style={{paddingTop: "3rem"}}>
          <Row>
          <Col md={6} className="nisupport-leftsection">
              <img src={Jason} alt="" />
            </Col>
            <Col md={6} className="nisupport-leftsection">
              <p style={{fontFamily: "Hi Melody", fontSize: "1.5rem"}}>
              "Like all recording artists, I've kept my eye on what creative tools the internet might afford. Patreon is unique; it's a platform that interests me. I've spent an entire career traveling, coming to your towns to play music. Now I'm inviting you to my place."
              </p>
            </Col>
            
          </Row>
        </Container>
      </Container>
      <Container fluid className="call-to-action">
        <Container className="calltoaction-items">
          <h2 className="title">Ready to build your membership business?</h2>
          <Button className="btn-custom">Get Stared</Button>
        </Container>
      </Container>

    </>
  );
};

export default ContentSection;

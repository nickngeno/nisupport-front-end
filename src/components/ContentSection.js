import React from "react";
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap";
import { AiOutlineControl } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GrDocumentTime } from "react-icons/gr";
import Jason from "../images/jason.jpg";

const ContentSection = () => {
  return (
    <>
      <Container fluid className="gray-section">
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
      <Container fluid className="white-section">
        <Container>
          <h2 className="title">niSupport is for everyone who creates music</h2>
          <Row>
            <Col md={6} className="white-leftsection">
              <p>
                Connect directly and build community with your most engaged
                fans. Test new work in a supportive environment. Establish a
                reliable, recurring revenue stream.
              </p>
              <a href="/" className="btn-custom link">
                Get Started
              </a>
            </Col>
            <Col md={6} className="white-leftsection">
              <img src={Jason} alt="" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="gray-section">
        <Container>
          <h2 className="title">Why should musicians use membership?</h2>
          <CardDeck>
            <Card className=" shadow">
              <Row className=" card-items align-items-center p-3">
                <Col sm={2} >
                  <FaMoneyBillAlt className="icon" />
                </Col>
                <Col  sm={10} >
                  <Card.Title>Predictable & sustainable revenue</Card.Title>
                </Col>
              </Row>
              <Card.Body>
                <Card.Text>
                  Monthly pledges means you know exactly what you're getting
                  paid each month.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow">
              <Row className=" card-items align-items-center p-3">
                <Col  sm={2}>
                  <AiOutlineControl className="icon" />
                </Col>
                <Col  sm={10}>
                  <Card.Title>Retain full control</Card.Title>
                </Col>
              </Row>
              <Card.Body>
                <Card.Text>
                  Still want to run ads, do brand deals, or work with sponsors?
                  Cool with us!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow">
              <Row className=" card-items align-items-center p-3">
                <Col sm={2}>
                  <GrDocumentTime className="icon" />
                </Col>
                <Col sm={10}>
                  <Card.Title>Your music, your schedule</Card.Title>
                </Col>
              </Row>
              <Card.Body>
                <Card.Text>
                  Posting tracks weekly? Waiting to release an album? No matter
                  what, you call the shots.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </Container>
      <Container fluid className="white-section">
        <Container>
          <Row>
            <Col md={6} className="white-leftsection">
              <img src={Jason} alt="" />
            </Col>
            <Col md={6} className="white-leftsection">
              <p style={{ fontFamily: "Hi Melody", fontSize: "2rem" }}>
                "Like all recording artists, I've kept my eye on what creative
                tools the internet might afford. niSupport is unique; it's a
                platform that interests me. I've spent an entire career
                traveling, coming to your towns to play music. Now I'm inviting
                you to my place."
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="call-to-action">
        <Container className="calltoaction-items">
          <h2 className="title">Ready to build your membership business?</h2>
          <a href="/" className="btn-custom link">
            Get Stared
          </a>
        </Container>
      </Container>
    </>
  );
};

export default ContentSection;

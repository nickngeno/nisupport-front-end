import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import Nick from "../../images/Nick.png";
import Post from "../Post";

const WelcomePage = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col sm={2} className="welcome-leftSide">
            <img
              src={Nick}
              alt="avatar"
              style={{
                width: "150px",
                borderRadius: "50%",
                paddingTop: "1rem",
              }}
            />
            <div className="followers-wrapper">
              <span className="followers-title">You have : </span>
              <div className="followers">
                <p>
                  <strong>20</strong>:{" "}
                </p>
                <p> Followers</p>
              </div>
              <div className="followers">
                <p>
                  <strong>10</strong>:{" "}
                </p>
                <p> Supporters</p>
              </div>
            </div>
          </Col>
          <Col sm={8} className="welcome-middleSide">
            <Row>
              <Col sm={8}>
                <Nav justify variant="tabs" bg="light" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/home">All</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Recent</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={4}>
                <Button className="btn-custom"> Create Post</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Post />
              </Col><hr/>
            </Row>
          </Col>
          <Col sm={2} className="welcome-rightSide">
            <h5>Recent Posts</h5>
            <hr />
            <ul className="timeline">
              <li className="timeline-btn active">2021</li>
              <li className="timeline-btn">2020</li>
              <li className="timeline-btn">2019</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WelcomePage;

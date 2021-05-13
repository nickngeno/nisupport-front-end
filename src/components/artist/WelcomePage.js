import React from "react";
import { Container, Row, Col, Nav, Button, Card ,ListGroup,ListGroupItem} from "react-bootstrap";
import Nick from "../../images/Nick.png";
import Footer from "../Footer";
import Post from "../Post";

const WelcomePage = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col sm={3}>
            <Card >
              <Card.Header></Card.Header>
              <Card.Img
                variant="top"
                src={Nick}
                alt="avatar"
                style={{
                  margin:"auto",
                  marginTop: "-2rem",
                  width: "100px",
                  borderRadius: "50%",
                  paddingTop: "1rem",
                  overflow: "hidden"
                }}
              />
              <Card.Body className="profileCard">
                <Card.Title>Nicholas Ngeno</Card.Title>
                <Card.Subtitle>Musician</Card.Subtitle>
              </Card.Body><hr/>
              <Card.Body className="profileCard-stats">
                <span>20</span>
                <Card.Text>Followers</Card.Text>
              </Card.Body>
              <Card.Body className="profileCard-stats">
                <span>10</span>
                <Card.Text>Supporters</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={7} className="welcome-middleSide">
            <Row>
              <Col sm={12} className="pt-2">
                <Card>
                  <Card.Header>
                    <Nav
                      justify
                      variant="tabs"
                      bg="light"
                      defaultActiveKey="/#"
                    >
                      <Nav.Item>
                        <Nav.Link href="/#">All</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-1">Recent</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Button className="btn btn-custom"> Create Post</Button>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                </Card>
              </Col>
            </Row>
            <Col>
              <Post />
            </Col>
          </Col>
          <Col sm={2} className="recentpostsCard">
            <Card>
              <Card.Header> Recent Posts</Card.Header>
              <ListGroup className="list-group-flush p-3">
                <ListGroupItem className="timeline-btn">2021</ListGroupItem>
                <ListGroupItem className="timeline-btn">2020</ListGroupItem>
                <ListGroupItem className="timeline-btn">2019</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default WelcomePage;

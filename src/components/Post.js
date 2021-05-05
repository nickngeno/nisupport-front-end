import React from "react";
import { CgMore } from "react-icons/cg";
import contemplating from "../images/contemplating.svg";
import addPost from "../images/add_post.svg";
import { Card, Row, Col } from "react-bootstrap";
const Post = () => {
  return (
    <>
      <Row>
        <Col className="postcard" style={{ position: "relative" }}>
          <CgMore style={{ position: "absolute", top: "5px", right: "1rem" ,fontSize:"1.5rem" ,cursor:"pointer"}} />
          <Card>
            <Card.Img
              src={addPost}
              alt="meatball menu"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Post 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                quis. Tempore ducimus dolorem pariatur. Deleniti in quia libero
                ex sunt id ducimus ea incidunt eveniet facere! Ullam eligendi
                optio in.
              </Card.Text>
              <Card.Link href="#">10 Comments</Card.Link>
              <Card.Link href="#">10 Likes</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row >
        <Col className="postcard">
        <CgMore style={{ position: "absolute", top: "5px", right: "1rem" ,fontSize:"1.5rem" ,cursor:"pointer"}} />
          <Card>
            <Card.Img
              src={contemplating}
              alt="meatball menu"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Post 2</Card.Title>
              <Card.Text>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                quis. Tempore ducimus dolorem pariatur. Deleniti in quia libero
                ex sunt id ducimus ea incidunt eveniet facere! Ullam eligendi
                optio in.
              </Card.Text>
              <Card.Link href="#">10 Comments</Card.Link>
              <Card.Link href="#">10 Likes</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Post;

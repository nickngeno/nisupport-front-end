import React from "react";
import {Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import {FaSearch} from 'react-icons/fa'

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">niSupport</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/contensection">Pricing</Nav.Link>
            <Nav.Link href="/contensection">Community</Nav.Link>
            <Nav.Link href="/footer">Footer</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search artist" className="mr-sm-2" />
            <FaSearch style={{ cursor:"pointer"}} />
          </Form>
          <Nav className="">
            <Nav.Link href="#home">Login</Nav.Link>
            <Button className="btn-custom" variant="ml-2 mr-4">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </>
  );
};

export default Navigation;

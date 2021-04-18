import React from "react";
import {Navbar, Nav, Form, FormControl } from "react-bootstrap";
import {FaSearch} from 'react-icons/fa'

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">niSupport</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/contensection">Pricing</Nav.Link>
            <Nav.Link href="/contensection">Community</Nav.Link>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search artist" className="mr-sm-2" />
            <FaSearch style={{ cursor:"pointer"}} />
          </Form>
          <Nav className="">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register" className="btn-custom">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </>
  );
};

export default Navigation;

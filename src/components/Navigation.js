import React from "react";
import {Navbar, Nav, Form, FormControl } from "react-bootstrap";
import {FaSearch} from 'react-icons/fa'
import Logo from '../images/logo1.png'

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" style={{ width: "150px", height: "auto"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/contensection">Pricing</Nav.Link>
            <Nav.Link href="/welcomepage">Community</Nav.Link>
            <Nav.Link href="/welcomepage">Contact</Nav.Link>
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

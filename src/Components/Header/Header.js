import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top"  expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img
            src="/rc_logo.png.png"
            width="100%"
            height="50"
            className="d-inline-block align-top"
            alt="RC Solutions"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/technologies">Technologies</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

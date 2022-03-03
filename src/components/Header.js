import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
  return (
    <div>
      <header>
        <Navbar expand="lg" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Will Bowles
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link href="/projects">
                  <Link
                    to="/projects"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Projects
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;

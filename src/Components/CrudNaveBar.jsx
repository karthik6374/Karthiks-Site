import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CrudNaveBar = () => {
  //const navigate = useNavigate();
  //const goToHomePage = () => {
    //navigate("/");
  //};
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary position-absolute top-0 start-0 end-0"
    >
      <Container>
        <Navbar.Brand href="/">
         Fab's Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
          </Nav>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CrudNaveBar;

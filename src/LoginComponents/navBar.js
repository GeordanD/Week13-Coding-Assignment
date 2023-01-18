//TODO At the top of page;
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


export default class NavBar extends React.Component {
    render() {
        return (
<Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Restaurant Login</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <NavDropdown title="Online Store" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Gift Cards</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Merchandise</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Reserve Party
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-3"
          aria-label="Search"
        />
        <Button variant="secondary">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
            </Navbar>
        )
    }
}
import React from "react";
import "./Navbar.scss";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="navbar" variant="dark">
        <Navbar.Brand href="#home">CoronaPages</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Form inline>
          <Button variant="outline-info">Login</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

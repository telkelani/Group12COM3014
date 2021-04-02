import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <Container>
        <div id="loginform">
          <h2 className="text-center">Register an account</h2>
          <Form>
            <Form.Group>
              <Form.Label>Forename</Form.Label>
              <Form.Control type="text" placeholder="Jon" />
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Doe" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <a href="/login">Login</a>
        </div>
      </Container>
    </div>
  );
};

export default Register;

import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Login.scss";

const Login = () => {
  return (
    <Container>
      <div id="loginform">
        <h2 className="text-center">Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <a href="/register">Want to register?</a>
      </div>
    </Container>
  );
};

export default Login;

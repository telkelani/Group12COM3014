import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const Profile = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (props.user === undefined) {
      return;
    }
    setUser(props.user);
  }, [props.user]);

  if (user === undefined) {
    return (
      <Spinner className="centered" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  const _calculateAge = (dateofbirth) => {
    console.log(dateofbirth);
    const ageDifference = Date.now() - new Date(dateofbirth);
    return Math.abs(new Date(ageDifference).getUTCFullYear() - 1970);
  };

  return (
    <Container className="text-center">
      <div className="card">
        <h1 className="display-1"></h1>
        <img src="user-solid.svg" style={{ height: "200px", width: "100%" }} />
        <Container style={{ padding: "20px" }}>
          <Row>
            <Col>
              <b>Full Name</b>
            </Col>
            {/* <Col>{name}</Col> */}
          </Row>
          <Row>
            <Col>
              <b>Role</b>
            </Col>
            {/* <Col>{userInfo.role}</Col> */}
          </Row>
          <Row>
            <Col>
              <b>Age</b>
            </Col>
            {/* <Col>{_calculateAge(userInfo.dateofbirth)}</Col> */}
          </Row>
          <Row>
            <Col>
              <b>Email</b>
            </Col>
            {/* <Col>{userInfo.email}</Col> */}
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Profile;

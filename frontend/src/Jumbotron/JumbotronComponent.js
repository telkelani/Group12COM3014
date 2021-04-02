import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./JumbotronComponent.scss";

const JumbotronComponent = () => {
  return (
    <div>
      <Jumbotron>
        <h1 style={{ color: "white" }} className="display-3">
          Pulse
        </h1>
        <p className="lead" style={{ color: "white" }}>
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" style={{ color: "white" }} />
        <p style={{ color: "white" }}>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">New Thread</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;

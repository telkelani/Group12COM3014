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
          A public forum to discuss a wide range of topics.
        </p>
        <hr className="my-2" style={{ color: "white" }} />
        <p className="lead">
          <Button color="primary">New Thread</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;

import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./JumbotronComponent.scss";

const JumbotronComponent = () => {
  return (
    <div>
      <Jumbotron>
        <h1
          style={{ color: "white" }}
          className="animate__animated animate__pulse display-3"
        >
          Pulse
        </h1>

        <p className="lead" style={{ color: "white" }}>
          A medical forum to discuss and get advice on health issues.
        </p>
        <hr className="my-2" style={{ color: "white" }} />
        <p className="lead">
          <a href="/newpost">
            <Button color="primary">New Thread</Button>
          </a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;

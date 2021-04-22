import React, { useState } from "react";
import "./Chat.scss";
import { Container, Form, Button } from "react-bootstrap";
const io = require("socket.io-client");

const Chat = () => {
  const socket = io("http://localhost:4002");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {};

  return (
    <Container className="chatbox">
      <div className="messagebox">Hi</div>
      <div className="input-group">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Type something to say!"
        />
        <Button className="btn-default">Send</Button>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default Chat;

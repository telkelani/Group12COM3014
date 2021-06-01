import React, { useState, useEffect, useRef } from "react";
import "./Chat.scss";
import { Container, Form, Button } from "react-bootstrap";
const io = require("socket.io-client");

const Chat = (props) => {
  const socket = useRef();
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;
    setMessage(value);
    console.log(message);
  };

  const name = props.user.firstName + " " + props.user.lastName;

  const handleSend = () => {
    socket.current.emit("message", { name: name, message: message });
  };

  useEffect(() => {
    socket.current = io("http://localhost:4002");
    console.log(props);
    console.log(props.user.firstName + " " + props.user.lastName);
    console.log("PROPS");
    console.log(props);
    socket.current.emit("new-user", name);
    setMessages((messages) => [
      ...messages,
      {
        name: props.user.firstName + " " + props.user.lastName,
        message: "Connected to the chat",
      },
    ]);
    socket.current.on("receiveMessage", (message) => {
      console.log(message);
      console.log(messages);
      setMessages((messages) => [...messages, message]);
    });
    socket.current.on("user-connected", (name) => {
      setMessages((messages) => [
        ...messages,
        {
          name: name,
          message: "Connected to the chat",
        },
      ]);
    });
  }, []);

  const RenderMessages = () => {
    const listMessages = messages.map((message) => (
      <li>{message.name + ": " + message.message}</li>
    ));

    return <ul>{listMessages}</ul>;
  };

  return (
    <Container className="chatbox">
      <div className="messagebox">
        <RenderMessages />
      </div>
      <div className="input-group">
        <Form.Control
          size="lg"
          type="text"
          onChange={handleChange}
          placeholder="Type something to say!"
        />
        <Button className="btn-default" onClick={handleSend}>
          Send
        </Button>
      </div>
      {/* </div> */}
    </Container>
  );
};

export default Chat;

import "./App.scss";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Chat from "./Chat/Chat";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { React, useState, useEffect } from "react";

const axios = require("axios");
const loginServiceDetails = "http://localhost:4000";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .post(loginServiceDetails + "/isLoggedIn")
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          let { firstName, lastName, email, dateOfBirth } = response.data;
          console.log(response);
          setUser((user) => ({
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateOfBirth: dateOfBirth,
          }));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

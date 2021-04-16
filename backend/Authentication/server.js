const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();
const bcrypt = require("bcrypt");
const User = require("./db.js");
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  //Extract user details from request body
  let { firstName, lastName, email, password, dateOfBirth } = req.body;

  //If email already exists don't let the account be created
  const emailExists = await User.find({ email: email });
  if (emailExists.length > 0) {
    return res.status(200).send({
      error:
        "An account with that email already exists. Please try another email or login.",
    });
  }

  //Hash the password with bcrypt, 10 salt rounds
  password = await bcrypt.hash(password, 10);

  //Create a new mongoose User model with the details and save it
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    dateOfBirth: dateOfBirth,
  });

  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ error: "Oops, something went wrong" });
    }
    return res.sendStatus(200);
  });
});

app.post("/login", async (req, res) => {
  //Extract email and password from request body
  let { email, password } = req.body;

  //Check if email exists in the database
  const user = await User.find({ email: email });
  if (user.length == 0) {
    return res.status(403).send({ error: "No user with that email found." });
  }

  //Check if the password is correct
  bcrypt.compare(password, user[0].password, (err, result) => {
    if (result === false) {
      return res
        .status(403)
        .send({ error: "The password you have entered is incorrect." });
    }

    return res.sendStatus(200);

    //Do session stuff here
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

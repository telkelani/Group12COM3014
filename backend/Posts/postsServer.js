const express = require("express");
const app = express();
const db = require("./db/db.js");

const PORT = 4001;
const postsRoute = require("./routes/posts");

//These two lines are needed to interpret response in JSON
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//This is going to be the default endpoint, postsRoute handles all the routes
app.use("/posts/api", postsRoute);

app.listen(PORT, () => console.log(`Server running and listening on ${PORT}`));

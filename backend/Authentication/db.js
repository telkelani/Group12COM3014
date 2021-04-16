const mongoose = require("mongoose");
const databaseURI = "mongodb://localhost/Group12COM3014";
mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const User = db.model("User", {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  dateOfBirth: String,
});

module.exports = User;

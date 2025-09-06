const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const name = req.body.fullname;
  const age = req.body.age;
  res.send(`client name is ${name} and age is ${age}`);
});

module.exports = app;

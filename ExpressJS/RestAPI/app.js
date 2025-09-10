const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/routes.users");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);

//Home route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

//For invalid route
app.use((req, res, next) => {
  res.status(404).json({
    message: "Invalid route",
  });
});

//For server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something broken",
  });
});

module.exports = app;

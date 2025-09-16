const express = require("express");
const userRouter = require("./routes/users.routes");
require("./config/db");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/./views/index.html");
});

app.use("/api/user", userRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "No such directory exist.",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Brokes",
  });
});

module.exports = app;

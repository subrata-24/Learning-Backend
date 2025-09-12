const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Something goes wrong");
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send(`<h1>Try to connect mongoDB</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

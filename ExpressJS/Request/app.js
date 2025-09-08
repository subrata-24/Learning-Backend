const express = require("express");
const app = express();

app.get("/user/:id", (req, res, next) => {
  const id = req.params.id;
  if (/^[0-4]{3}$/.test(id)) res.send(`<h1>ID is ${req.params.id}</h1>`);
  else next();
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1><p>Invalid route or ID</p>");
});

module.exports = app;

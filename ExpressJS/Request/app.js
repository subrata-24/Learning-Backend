const express = require("express");

const app = express();

app.get("/", (req, res) => {
  /*
    Access HTTP request headers using req.header("headerName")
    - "name" and "id" are expected to be sent as headers in the 
    request by the client.
    Example: 
      name: Subrata
      id: 24
  */
  const name = req.header("name");
  const id = req.header("id");
  res.send(`<h1>Student name is ${name} and id is ${id}</h1>`);
});

module.exports = app;

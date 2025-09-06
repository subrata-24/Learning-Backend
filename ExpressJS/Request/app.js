const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse URL-encoded form data (from HTML forms)
// Example: <form method="POST" action="/user">...</form>
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to parse JSON data sent in the request body
// Example: POST request with Content-Type: application/json
app.use(bodyParser.json());

// POST route to handle "/user" requests
app.post("/user", (req, res) => {
  /*
    Access POST request data from req.body
    - "name" and "id" are expected in the request body
    Example JSON body: { "name": "Subrata", "id": "24" }
  */
  const name = req.body.name;
  const id = req.body.id;

  /*
    Send a dynamic response displaying student name and ID
    Example response: "Student name is Subrata and id is 24"
  */
  res.send(`Student name is ${name} and id is ${id}`);
});

module.exports = app;

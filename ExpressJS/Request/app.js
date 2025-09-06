const express = require("express");

const app = express();

app.get("/", (req, res) => {
  /*
    req.query contains all the query parameters sent in the URL
    Example: URL => http://localhost:3000/?name=Subrata&id=24
    Then req.query = { name: "Subrata", id: "24" }
  */
  const { name, id } = req.query; // Destructuring query parameters into variables

  /*
    Send an HTML response back to the client
    The content is dynamically created using the query parameters
    Example response: <h1>Student name is Subrata and id is 24</h1>
  */
  res.send(`<h1>Student name is ${name} and id is ${id}</h1>`);
});

module.exports = app;

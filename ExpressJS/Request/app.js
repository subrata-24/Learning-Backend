const express = require("express");

const app = express();

/*
  Route with dynamic URL parameters
  URL pattern: /userName/:name/userId/:id
  - :name and :id are route parameters (mandatory)
  - They allow passing values directly in the URL path
  Example URL: http://localhost:3000/userName/Subrata/userId/24
*/
app.get("/userName/:name/userId/:id", (req, res) => {
  // Extract route parameters from req.params object
  // req.params = { name: "Subrata", id: "24" } for the example URL
  const { name, id } = req.params;
  res.send(`<h1>Student name is ${name} and id is ${id}</h1>`);
});

module.exports = app;

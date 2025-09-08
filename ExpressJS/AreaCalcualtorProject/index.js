const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/views/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/views/triangle.html");
});

app.post("/circle", (req, res) => {
  const radius = parseFloat(req.body.radius);
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of this circle is ${area}</h2>`);
});

app.post("/triangle", (req, res) => {
  const height = parseFloat(req.body.height);
  const base = parseFloat(req.body.base);
  const area = 0.5 * base * height;
  res.send(`<h2>Area of this triangle is ${area}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

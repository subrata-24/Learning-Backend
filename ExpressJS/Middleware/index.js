const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleware = (req, res, next) => {
  req.currentTime = new Date(Date.now());
  console.log("I am middleware");
  next();
};

app.use(myMiddleware);

// Routes
app.get("/", (req, res) => {
  console.log("I am home " + req.currentTime);
  res.send(`<h2>I am home.</h2>`);
});

app.get("/about", (req, res) => {
  console.log("I am about " + req.currentTime);
  res.send(`<h2>I am about.</h2>`);
});

app.get("/divide", (req, res, next) => {
  try {
    let result = 10 / 0;
    res.send(`Result: ${result}`);
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
});

// Route not found → 404 middleware (3 params).
// Something went wrong inside route → 500 middleware (4 params).

// 404 handler (after routes)
app.use((req, res, next) => {
  res.status(404).send(`<h1>404. URL not found.</h1>`);
});

// Error handler (after everything)
app.use((err, req, res, next) => {
  console.error(err.stack); // log error details
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

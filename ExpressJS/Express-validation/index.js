// index.js
const express = require("express");
const router = require("./routes/routes.users");
const app = express();
const PORT = 3000;

// Add JSON parser (important for JSON request bodies)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Validate registration information of user</h1>`);
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

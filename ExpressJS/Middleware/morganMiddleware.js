const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 4000;

app.use(morgan("dev"));

app.get("/morganCheck", (req, res) => {
  res.status(200).send(`<h1>For checking morgan</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is runnig at http://localhost:${PORT}`);
});

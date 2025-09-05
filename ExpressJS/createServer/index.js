const app = require("./app");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("I am home page!!");
});

app.get("/about", (req, res) => {
  res.send("I am abot page.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

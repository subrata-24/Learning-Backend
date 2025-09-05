const app = require("./app");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("I am home page!!");
});

app.get("/about", (req, res) => {
  res.send("I am abot page.");
});

app.post("/", (req, res) => {
  console.log("Post something on home page");
});

app.put("/", (req, res) => {
  console.log("Update on home page.");
});

app.delete("/", (req, res) => {
  console.log("Delete something from home page.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

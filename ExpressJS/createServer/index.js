const app = require("./app");
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>I am home page!!</h1>");
});

app.get("/register", (req, res) => {
  res.send("<h1>I am register page!!</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>I am login page!!</h1>");
});

app.use((req, res) => {
  res.send("<h1>404!!The page can not be found.</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/routes.user");

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.use((req, res, next) => {
  res.status(404).send(`<h2>404.Route doesn't found.</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

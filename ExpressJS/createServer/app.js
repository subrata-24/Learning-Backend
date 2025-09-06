const express = require("express");
const app = express();

const userRouter = require("./routes/route.user");

// Mount all user routes under the prefix "/api/user"
// Example: "/api/user/register" or "/api/user/login"
app.use("/api/user", userRouter);

// Define home route (root of the application)
app.get("/", (req, res) => {
  res.send("<h1>I am home page!!</h1>");
});

// Handle all undefined routes (catch-all 404 handler)
app.use((req, res) => {
  res.send("<h1>404!! The page cannot be found.</h1>");
});

module.exports = app;

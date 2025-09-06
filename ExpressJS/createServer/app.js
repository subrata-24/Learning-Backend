const express = require("express");
const app = express();

const userRouter = require("./routes/route.user");

app.use("/api/user", userRouter);

// Route for home page
app.get("/", (req, res) => {
  // Send index.html file as response with 200 OK status
  res.status(200).sendFile(__dirname + "/views/index.html");
});

// Route for register page
app.use("/register", (req, res) => {
  // Send json data as response of the request
  //   res.status(200).json({
  //     Name: "Subrata Biswas",
  //     message: "Nam to suna hi hoga",
  //     statusCode: 200,
  //   });

  // Redirect user when a user comes to /register route.
  //   res.redirect("/login");

  // Send register.html file as response with 200 OK status
  res.status(200).sendFile(__dirname + "/views/register.html");
});

// Route for login page
app.use("/login", (req, res) => {
  // Set cookies in the response (saved on client browser)
  res.cookie("name", "suvro");
  res.cookie("age", "58");

  // Clear/remove the "name" cookie from browser
  res.clearCookie("name"); // for clear a cookie

  // Append a custom header "id" with value 13000 in response
  res.append("id", 13000);

  // End the response (no body sent)
  res.end();
});

app.use((req, res) => {
  res.send("<h1>404!! The page cannot be found.</h1>");
});

module.exports = app;

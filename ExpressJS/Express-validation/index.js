const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Validate registration information of user</h1>`);
});

app.post(
  "/api/registration",
  //Input vaidation
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name must not be empty")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 character"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },

  (req, res) => {
    try {
      const { name, email, password, dob } = req.body;
      const newUser = {
        name,
        email,
        password,
        dob,
      };
      return res.status(200).json({
        message: "Working good.",
        newUser,
      });
    } catch (error) {
      return res.status(201).json({
        message: error.message,
      });
    }
  }
);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

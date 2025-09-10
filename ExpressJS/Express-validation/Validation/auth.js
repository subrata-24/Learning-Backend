// auth.js
const { check } = require("express-validator");

exports.validateRegistrationInfo = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name must not be empty")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters")
    .isLength({ max: 15 })
    .withMessage("Name must be at max 15 characters"),

  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("Not a valid email"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password must not be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .isLength({ max: 20 })
    .withMessage("Password must be at max 20 characters"),

  check("dob")
    .trim()
    .notEmpty()
    .withMessage("dob is missing")
    .isISO8601()
    .withMessage("Not a valid date"),
];

exports.validateLoginInfo = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("Not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password must not be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 5 character")
    .isLength({ max: 20 })
    .withMessage("Password must be at max 20 character"),
];

const express = require("express");
const { validation } = require("../Validation/validate");
const { registerUser, loginUser } = require("../controllers/controlers.users");
const {
  validateRegistrationInfo,
  validateLoginInfo,
} = require("../Validation/auth");
const router = express.Router();

router.post(
  "/registration",
  validateRegistrationInfo,
  validation,
  registerUser
);

router.post(
  "/login",
  //Input vaidation
  validateLoginInfo,
  validation,
  loginUser
);

module.exports = router;

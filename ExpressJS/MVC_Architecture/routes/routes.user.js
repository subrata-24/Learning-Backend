const express = require("express");
const { getUsers, postUsers } = require("../controllers/users.controller");
const router = express.Router();

router.post("/user", postUsers);

router.get("/user", getUsers);

module.exports = router;

const express = require("express");
const {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controlers/users.controlers");
const router = express.Router();

router.get("/", getAllUsers);

router.get("/:id", getOneUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;

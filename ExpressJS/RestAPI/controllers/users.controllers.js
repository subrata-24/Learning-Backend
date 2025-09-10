const users = require("../models/users.models");

exports.getUser = (req, res) => {
  res.status(200).json({ users });
};

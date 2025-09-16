const { v4: uuidv4 } = require("uuid");
const User = require("../models/users.models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: "Something  went wrong!",
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: "Something  went wrong!",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });

    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(404).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = req.body.age;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: "Something  went wrong!",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({
      message: "User deleted  successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "Something  went wrong!",
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
};

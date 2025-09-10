const registerUser = (req, res) => {
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
};

const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;
    const User = {
      email,
      password,
    };
    if (email === "subrata@gmail.com" && password === "12345678") {
      return res.status(200).json({
        message: "Login successful.",
        User,
      });
    } else {
      return res.status(404).json({
        messgae: "Password/email is not correct.",
      });
    }
  } catch (error) {
    return res.status(201).json({
      message: error.message,
    });
  }
};

module.exports = { registerUser, loginUser };

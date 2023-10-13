const User = require("../models/User");

const hashPassword = require("../config/hashPassword");
const decryptPassword = require("../config/decryptPassword");
const generateToken = require("../config/generateToken");
const isAuthenticated = require("../middlewares/isAuthenticated");
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(200)
      .json({ message: "use unique email. user found with this email" });
  }
  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(200)
      .json({
        status: "success",
        message: "User created successfully",
        user: newUser,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(404)
      .json({
        status: "error",
        message: "no user found with this credentials",
      });
  }
  try {
    const hashedPasswordFromDatabase = user.password;
    const isPasswordSame = await decryptPassword(
      password,
      hashedPasswordFromDatabase
    );
    console.log(isPasswordSame);
    if (isPasswordSame) {
      const token = await generateToken(user._id);
      return res
        .status(200)
        .json({ status: "success", message: "login successful", token: token });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

const deleteUser = [
  isAuthenticated,
  async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
      return res
        .status(401)
        .json({ status: "error", message: "no userid provided" });
    }
    try {
      const user = await User.findByIdAndDelete({ _id: userId });
      if (!userId) {
        return res
          .status(401)
          .json({ status: "error", message: "no userid provided" });
      }
      res
        .status(200)
        .json({ status: "success", message: "user deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: error.message });
    }
  },
];

const getUserDetails = [
  isAuthenticated,
  async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
      return res
        .status(401)
        .json({ status: "error", message: "no userid provided" });
    }
    try {
      const user = await User.findOne({ _id: userId });
      if (!user) {
        res
          .status(404)
          .json({ status: "not found", message: "user not found" });
      }
      res
        .status(200)
        .json({
          status: "success",
          message: "successfully fetched details",
          user_details: user,
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: error.message });
    }
  },
];

const updateUserDetails = [
  isAuthenticated,
  async (req, res) => {
    const { userId } = req.params;
    if (!userId) {
      return res
        .status(401)
        .json({ status: "error", message: "no userid provided" });
    }
    try {
      const updates = req.body;
      // If the updates include a new password, hash it
      if (updates.password) {
        const hashedPassword = await hashPassword(updates.password);
        updates.password = hashedPassword;
      }
      const user = await User.findByIdAndUpdate(userId, updates, { new: true });
      res
        .status(200)
        .json({ status: "success", message: "user updated successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: error.message });
    }
  },
];

module.exports = {
  register,
  login,
  deleteUser,
  getUserDetails,
  updateUserDetails,
};

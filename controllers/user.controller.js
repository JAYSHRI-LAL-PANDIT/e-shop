const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const getUserProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).send({ message: "Token not found" });
    }
    const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken._id).select("-password");
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    if (!users) {
      return res.status(401).send({ message: "users not found" });
    }
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { getUserProfile, getAllUsers };

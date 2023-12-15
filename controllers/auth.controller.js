const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createCart } = require("./cart.controller");

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res
        .status(409)
        .send({ success: false, message: "User already exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    user.save();
    //cart creating
    createCart(user._id);
    return res
      .status(201)
      .send({ success: true, message: "User Created Successfully" });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User doesn't exist" });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res
        .status(404)
        .send({ success: false, message: "Invalid Password" });
    }

    const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "24h",
    });

    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { register, login };

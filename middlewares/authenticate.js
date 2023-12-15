const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send({ message: "Token not found" });
    }

    const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken._id);
    req.user = user;
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
  next();
};

module.exports = authenticate;

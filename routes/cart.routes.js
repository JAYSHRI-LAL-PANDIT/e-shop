const express = require("express");
const cartController = require("../controllers/cart.controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/", authenticate, cartController.getUserCart);

module.exports = router;

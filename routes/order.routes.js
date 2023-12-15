const express = require("express");
const authenticate = require("../middlewares/authenticate");
const orderController = require("../controllers/order.controller");

const router = express.Router();

router.post("/create", authenticate, orderController.createOrder);

module.exports = router;

const express = require("express");
const authenticate = require("../middlewares/authenticate");
const cartItemController = require("../controllers/cartItem.controller");

const router = express.Router();

router.post("/addItemToCart", authenticate, cartItemController.addItemToCart);
router.delete("/remove/:id", authenticate, cartItemController.removeCartItem);

module.exports = router;

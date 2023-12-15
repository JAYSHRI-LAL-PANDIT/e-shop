const Cart = require("../models/cart.model");
const CartItem = require("../models/cartItem.model");

const createCart = async (userId) => {
  try {
    const cart = await new Cart({ userId });
    const createdCart = await cart.save();
    console.log("Cart Created", createdCart);
  } catch (error) {
    throw new Error(error);
  }
};

const getUserCart = async (req, res) => {
  try {
    const user = req.user;
    const userId = user._id;
    let cart = await Cart.findOne({ userId });
    let cartItems = await CartItem.find({ cartId: cart._id }).populate(
      "productId"
    );

    cart.cartItemsId = cartItems;

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItemsId) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.totalDiscountedPrice = totalDiscountedPrice;
    cart.discount = totalPrice - totalDiscountedPrice;

    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { createCart, getUserCart };

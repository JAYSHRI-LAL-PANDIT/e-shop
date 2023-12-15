const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    size: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const CartItem = mongoose.model("cartItem", cartItemSchema);
module.exports = CartItem;

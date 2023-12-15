const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    cartItemsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartItem",
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    totalDiscountedPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalItem: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;

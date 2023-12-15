const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    orderItemsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItem",
      },
    ],
    shippingAddressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
    },
    orderDate: {
      type: Date,
      default: Date.now(),
    },
    deliveryDate: {
      type: Date,
    },
    totalItem: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);
module.exports = Order;

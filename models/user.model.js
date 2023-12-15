const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      default: "CUSTOMER",
    },
    addressId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "address",
      },
    ],
    paymentId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment",
      },
    ],
    ratingId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rating",
      },
    ],
    reviewId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
module.exports = User;

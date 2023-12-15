const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
    },
    color: {
      type: String,
    },
    sizes: [
      {
        name: {
          type: String,
        },
        quantity: {
          type: Number,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: String,
    },
    discountedPercentage: {
      type: String,
    },
    numRating: {
      type: Number,
    },
    ratingsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rating",
      },
    ],
    reviewsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
      },
    ],
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", productSchema);
module.exports = Product;

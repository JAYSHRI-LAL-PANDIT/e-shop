const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    parentCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    level: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", categorySchema);
module.exports = Category;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided"],
  },
  featured: {
    type: Boolean,
    default: 4.9,
  },
  rating: {
    type: Number,
    required: [true, "rating must be provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi", "oppo", "oneplus"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);

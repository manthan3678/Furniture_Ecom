const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    shipping: {
      type: String,
    },
  },
  { timestamps: true }
);

const productData = mongoose.model("productData", productSchema);
module.exports = productData;

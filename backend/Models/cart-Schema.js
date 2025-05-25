const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  desc: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  id: {
    type: String,
    required: true,
  },
});
const cartData = mongoose.model("carts", cartSchema);
module.exports = cartData;

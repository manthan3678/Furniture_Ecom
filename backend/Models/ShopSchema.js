const mongoose = require("mongoose");

const shopSchema = mongoose.Schema({
  banner: {
    title: {
      typpe: String,
    },
    image: {
      type: String,
    },
  },
  // Array hai ,uskbad usk andar ek object hai or object k andr hai {keys} image or titile or price

  products: [
    {
      desc: {
        type: String,
      },
      image: {
        type: String,
      },
      price: {
        type: String,
      },
      title: {
        type: String,
      },
    },
  ],
});
const ShopPageData = mongoose.model("shop", shopSchema);
module.exports = ShopPageData;

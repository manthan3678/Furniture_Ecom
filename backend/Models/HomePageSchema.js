const mongoose = require("mongoose");

const homePageSchema = mongoose.Schema({
  banner: {
    no_of_furniture: {
      typpe: String,
    },
    no_of_customer: {
      type: String,
    },
  },
  // Array hai ,uskbad usk andar ek object hai or object k andr hai {keys} image or titile or price
  best_selling: [
    {
      image: {
        type: String,
      },
      title: {
        type: String,
      },

      price: {
        type: String,
      },
    },
  ],
  products: [
    {
      image: {
        type: String,
      },
      title: {
        type: String,
      },
      desc: {
        type: String,
      },
      price: {
        type: String,
      },
    },
  ],
});
const HomePageData = mongoose.model("homepage", homePageSchema);
module.exports = HomePageData;

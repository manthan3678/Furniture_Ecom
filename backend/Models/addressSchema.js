const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
const addressData = mongoose.model("addresses", addressSchema);
module.exports = addressData;

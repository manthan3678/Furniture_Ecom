const addressData = require("../Models/addressSchema");
// This is for getting the Data Cart PAge
const addressPageData = async (req, res) => {
  try {
    const addressDATA = await addressData.find({});

    res.send({
      success: true,
      message: "Addresses Data Received",
      addressDATA,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Faild to fetch  Addresses Data",
      error,
    });
  }
};
// Add To Cart
const handleAddress = async (req, res) => {
  try {
    const { name, phone, address, city, state, country, pincode, id } =
      req.body;
    const addressItem = await addressData.create({
      name,
      phone,
      address,
      city,
      state,
      country,
      pincode,
      id,
    });
    res.send({
      success: true,
      message: "Address Added t",
      addressItem,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Unable to add Address",
      error,
    });
  }
};
// This function is for Deleting th item

//Ye jayega  router vali file me
module.exports = { handleAddress, addressPageData };

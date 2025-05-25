const ShopPageData = require("../Models/ShopSchema");
// Shop Page Data k Liye use krreh hai
const HandleShopPage = async (req, res) => {
  const shopData = await ShopPageData.find({});
  res.json(shopData);
};
//Ye jayega shoppage router vali file me
module.exports = { HandleShopPage };

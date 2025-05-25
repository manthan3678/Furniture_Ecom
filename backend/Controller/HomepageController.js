const HomePageData = require("../Models/HomePageSchema");
// Home Page Data k Liye use krreh hai
const HandleHomePage = async (req, res) => {
  const homeData = await HomePageData.find({});
  res.json(homeData);
};
//Ye jayega homepage router vali file me
module.exports = { HandleHomePage };

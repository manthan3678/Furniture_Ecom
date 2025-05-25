const cartData = require("../Models/cart-Schema");
// This is for getting the Data Cart PAge
const HandleCartPage = async (req, res) => {
  try {
    const userId = req.params.id;
    const cartdata = await cartData.find({ id: userId });

    res.send({
      success: true,
      message: "Cart Data Received",
      cartdata,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Faild to fetch Data",
    });
  }
};
// Add To Cart
const handleAddCart = async (req, res) => {
  try {
    const { title, desc, image, price, quantity, id } = req.body;
    const cartItem = await cartData.create({
      title,
      desc,
      image,
      price,
      quantity,
      id,
    });
    res.send({
      success: true,
      message: "Item Added to Cart",
      cartItem,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Unable to add item in A Cart",
    });
  }
};
// This function is for Deleting th item
const handleDelete = async (req, res) => {
  try {
    const userId = req.params.user;
    const productId = req.params.id;
    await cartData.deleteOne({ _id: productId });
    await cartData.find({ id: userId }).then(() => {
      res.send({
        success: true,
        message: "Item deleted",
      });
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Faild to delete Item",
    });
  }
};
//Ye jayega  router vali file me
module.exports = { HandleCartPage, handleAddCart, handleDelete };

const Router = require("express").Router();
const { checkUserAuth, checkAdmin } = require("../middleware/auth-middleware");
const {
  createProductController,
  getProductController,
  deleteProductController,
  updateProductController,
  getSingleProduct,
} = require("../Controller/productController");
// Post Method
Router.post(
  "/create-product",
  checkUserAuth,
  checkAdmin,
  createProductController
);
// Get Method
Router.get("/get-product", getProductController);
// Delete Method
Router.delete("/delete-product/:pid", deleteProductController);
// Update Method
Router.put(
  "/update-product/:pid",
  checkUserAuth,
  checkAdmin,
  updateProductController
);
// Get Single Product
Router.get("/get-single-product/:slug", getSingleProduct);
module.exports = Router;

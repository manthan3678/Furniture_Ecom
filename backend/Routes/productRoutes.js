const Router = require("express").Router();
const { checkUserAuth, checkAdmin } = require("../middleware/auth-middleware");
const { createProductController } = require("../Controller/productController");
Router.post(
  "/create-product",
  checkUserAuth,
  checkAdmin,
  createProductController
);

module.exports = Router;

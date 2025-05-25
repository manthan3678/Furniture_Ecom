const {
  HandleCartPage,
  handleAddCart,
  handleDelete,
} = require("../Controller/cartPageController");

const Router = require("express").Router();
// HandleHomepAge controller hai or controller ki file se ara hai
Router.get("/cart/:id", HandleCartPage);
Router.post("/cart", handleAddCart);
Router.delete("/cart/:id/:user", handleDelete);
module.exports = Router;

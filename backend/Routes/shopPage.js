const { HandleShopPage } = require("../Controller/shop-contrioller");
const Router = require("express").Router();
// HandleshoppAge controller hai or controller ki file se ara hai
Router.get("/shop", HandleShopPage);
module.exports = Router;

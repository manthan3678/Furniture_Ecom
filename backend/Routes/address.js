const Router = require("express").Router();
const {
  handleAddress,
  addressPageData,
} = require("../Controller/address-controller");
Router.post("/address", handleAddress);
Router.get("/address", addressPageData);
module.exports = Router;

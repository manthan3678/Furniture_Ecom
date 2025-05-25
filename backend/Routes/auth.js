const Router = require("express").Router();
const {
  HandleRegisterPage,
  handleLoginPage,
  userData,
} = require("../Controller/user-controller");

Router.post("/register", HandleRegisterPage);
Router.get("/register", userData);
Router.post("/login", handleLoginPage);
module.exports = Router;

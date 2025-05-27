const Router = require("express").Router();
const {
  HandleRegisterPage,
  handleLoginPage,
  userData,
} = require("../Controller/user-controller");
const { checkUserAuth, checkAdmin } = require("../middleware/auth-middleware");

Router.post("/register", HandleRegisterPage);
Router.get("/register", userData);
Router.post("/login", handleLoginPage);

// Prootected Routes
Router.get("/user-auth", checkUserAuth, (req, res) => {
  res.status(200).send({ ok: true });
});
//
Router.get("/admin-auth", checkUserAuth, checkAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = Router;

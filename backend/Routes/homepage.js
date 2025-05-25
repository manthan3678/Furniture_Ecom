// !!!!!!!!!!!!!!!!!!!!!!!!!!! *Routes* !!!!!!!!!!!!!11
// !!!!!!!!! API !!!!!!!!!!
// homapages pr data dalne k liye hompageData ka use krre hai
const { HandleHomePage } = require("../Controller/HomepageController");
const Router = require("express").Router();
// HandleHomepAge controller hai or controller ki file se ara hai
Router.get("/homepage", HandleHomePage);
module.exports = Router;

const JWT = require("jsonwebtoken");
const userModel = require("../Models/user-Schema");
const checkUserAuth = async (req, res, next) => {
  try {
    const check = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_Secret
    );
    req.user = check;
    next();
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "invalid token",
    });
  }
};
const checkAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.send({
        success: false,
        message: "Unauthorizd ADmin Access",
      });
    }
    next();
  } catch (error) {
    return res.send({
      success: true,
      message: "Error in Admin middleware",
    });
  }
};
module.exports = { checkUserAuth, checkAdmin };

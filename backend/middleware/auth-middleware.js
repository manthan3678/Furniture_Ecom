const JWT = require("jsonwebtoken");
const userModel = require("../Models/user-Schema");
const checkUserAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing or malformed",
      });
    }

    const token = authHeader.split(" ")[1]; // Get only the JWT part
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.send({
      success: false,
      message: "invalid token",
    });
  }
};
// !@#$%
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

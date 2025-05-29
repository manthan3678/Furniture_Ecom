const JWT = require("jsonwebtoken");
const userModel = require("../Models/user-Schema");
const checkUserAuth = async (req, res, next) => {
  try {
    // const token = await req.headers.authorization?.split(" ")[1];
    // console.log(token);
    // const check = await JWT.verify(
    //   req.headers.authorization,
    //   process.env.JWT_Secret
    // );
    // req.user = check;

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ ok: false, error: "No token or invalid format" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = JWT.verify(token, process.env.JWT_Secret);

    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.send({
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

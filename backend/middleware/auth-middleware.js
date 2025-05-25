const JWT = require("jsonwebtoken");

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
    const user = await Users.findById(req.user._id);
    if (user.role !== 0) {
      return res.send({
        success: false,
        message: "Unauthorizd Access",
      });
    } else {
      return res.send({
        success: true,
        message: "auhtorization successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { checkUserAuth };

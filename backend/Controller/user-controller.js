const {
  hashedPassword,
  checkedHashPassword,
} = require("../authentication/auth-helper");
const users = require("../Models/user-Schema");
const JWT = require("jsonwebtoken");
// **********************Reguster Page Data k Liye use krreh hai***********************
const HandleRegisterPage = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.send({
        success: false,
        message: "User Already Exists",
      });
    }
    const encryptedPassword = await hashedPassword(password);
    // Dono condition check krne k bad me
    // user create honga or us ki value database me milegi,or response milega successfully register ka
    const user = await users.create({
      name,
      email,
      password: encryptedPassword,
    });
    res.send({
      success: true,
      message: "register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "Failed To register", error });
  }
};
// get k liye code niche hai
const userData = async (req, res) => {
  const userIn = await users.find({});
  res.json(userIn);
};
// ################## Login Page K liye Data yaha check hora hai ######################
const handleLoginPage = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    const checkHashPassword = await checkedHashPassword(
      password,
      user.password
    );
    if (!checkHashPassword) {
      return res.send({
        success: false,
        message: "Invalid Password or Email",
      });
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_Secret, {
      expiresIn: "2d",
    });
    res.send({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        id: user._id,
      },
      token,
    });
  } catch (error) {}
};
//Ye jayega auth router vali file me
module.exports = { HandleRegisterPage, handleLoginPage, userData };

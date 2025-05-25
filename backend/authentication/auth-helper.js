const bcrypt = require("bcrypt");
// Hashedpassword jo hai vo register k time pr kam krega*************************************
const hashedPassword = async (password) => {
  try {
    const salt = 8;
    // password string chahiye rehti hai or salt number
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  } catch (error) {
    console.log(error);
  }
};
// ################################ Login Checking #################################################
// checkedhashpassword jo hai vo login k time pr hash kiye hue password ko check krega or login status show krega
const checkedHashPassword = async (password, hashPassword) => {
  try {
    return bcrypt.compare(password, hashPassword);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { hashedPassword, checkedHashPassword };

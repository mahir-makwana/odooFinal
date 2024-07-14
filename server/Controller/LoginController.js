const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExist = await userModel.findOne({
      email: email,
    });

    if (!isExist) {
      return res.status(200).json({
        message: "user not found",
        error: true,  
      });
    }
    const bcryptPassword = await bcrypt.compare(password, isExist.password);
    if (!bcryptPassword) {
      return res.status(200).json({
        message: "password not match",
        error: true,
      });
    }
    res.status(200).json({
      message: "Login successful",
      data: isExist,
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
    });
  }
};
module.exports = LoginController;

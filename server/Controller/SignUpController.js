const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const SignUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const chkEmail = await userModel.findOne({ email: email });
    if (chkEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }
    const saltMode = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, saltMode);

    payload = {
      name: name,
      email: email,
      password: bcryptPassword,
    };

    const addData = new userModel(payload);

    const saveData = await addData.save();

    res.json({
      message: "SignUp Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
    });
  }
};

module.exports = SignUpController;

const express = require("express");
const router = express.Router();

const LoginController = require("../Controller/LoginController");
const SignUpController = require("../Controller/SignUpController");

router.post("/login", LoginController);
router.post("/signup", SignUpController);

module.exports = router;

const express = require("express");
const router = express.Router();

const passport = require("../core/passport");
const authController = require("../controllers/auth.controller");

router.post("/login", passport.authenticate("local"), authController.logIn);

router.get("/logout", authController.logOut);

module.exports = router;
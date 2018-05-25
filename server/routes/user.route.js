var express = require("express");
var router = express.Router();

var userController = require("../controllers/user.controller");

router.post("/add", userController.addUser);
router.post("/edit", userController.editUser);
router.post("/delete", userController.deleteUser);
router.get("/all", userController.getAllUsers);

module.exports = router;
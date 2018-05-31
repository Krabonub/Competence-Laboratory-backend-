var express = require("express");
var router = express.Router();

var levelController = require("../controllers/level.controller");

router.get("/all", levelController.getAllLevels);

module.exports = router;
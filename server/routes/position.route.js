var express = require("express");
var router = express.Router();

var positionController = require("../controllers/position.controller");

router.post("/add", positionController.addPosition);

module.exports = router;
var express = require("express");
var router = express.Router();

var levelMatrixController = require("../controllers/levelMatrix.controller");

router.post("/edit", levelMatrixController.editLevelMatrixPage);
router.post("/get", levelMatrixController.getLevelMatrixPage);

module.exports = router;
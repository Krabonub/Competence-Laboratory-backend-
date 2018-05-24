var express = require("express");
var router = express.Router();

var evaluationController = require("../controllers/evaluation.controller");

router.post("/add", evaluationController.addEvaluation);

module.exports = router;
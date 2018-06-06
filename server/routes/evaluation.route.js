var express = require("express");
var router = express.Router();

var evaluationController = require("../controllers/evaluation.controller");

router.post("/add", evaluationController.addEvaluation);
router.post("/edit", evaluationController.editEvaluation);
router.post("/getByUsers", evaluationController.getByUsers);

module.exports = router;
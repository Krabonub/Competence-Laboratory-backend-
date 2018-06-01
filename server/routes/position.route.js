var express = require("express");
var router = express.Router();

var positionController = require("../controllers/position.controller");

router.post("/add", positionController.addPosition);
router.post("/edit", positionController.editPosition);
router.post("/delete", positionController.deletePosition);
router.get("/all", positionController.getAllPositions);
router.post("/addCompetenceGroup", positionController.addCompetenceGroup);
router.post("/deleteCompetenceGroup", positionController.deleteCompetenceGroup);
router.post("/getLevelMatrix", positionController.getLevelMatrix);

module.exports = router;
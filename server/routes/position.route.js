var express = require("express");
var router = express.Router();

var positionController = require("../controllers/position.controller");

router.post("/add", positionController.addPosition);
router.post("/edit", positionController.editPosition);
router.post("/delete", positionController.deletePosition);
router.get("/all", positionController.getAllPositions);
router.post("/addCompetenceGroup", positionController.addCompetenceGroupToPosition);
router.post("/deleteCompetenceGroup", positionController.deleteCompetenceGroupFromPosition);

module.exports = router;
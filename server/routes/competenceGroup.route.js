var express = require("express");
var router = express.Router();

var competenceGroupController = require("../controllers/competenceGroup.controller");

router.post("/add", competenceGroupController.addCompetenceGroup);
router.post("/edit", competenceGroupController.editCompetenceGroup);
router.post("/delete", competenceGroupController.deleteCompetenceGroup);
router.get("/all", competenceGroupController.getAllCompetenceGroups);

module.exports = router;
var express = require("express");
var router = express.Router();

var competenceGroupController = require("../controllers/competenceGroup.controller");

router.post("/add", competenceGroupController.addCompetenceGroup);

module.exports = router;
var express = require("express");
var router = express.Router();

var competenceController = require("../controllers/competence.controller");

router.post("/add", competenceController.addCompetence);

module.exports = router;
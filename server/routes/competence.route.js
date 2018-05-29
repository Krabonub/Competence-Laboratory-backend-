var express = require("express");
var router = express.Router();

var competenceController = require("../controllers/competence.controller");

router.post("/add", competenceController.addCompetence);
router.post("/edit", competenceController.editCompetence);
router.post("/delete", competenceController.deleteCompetence);
router.post("/select", competenceController.getCompetencesByGroup);

module.exports = router;
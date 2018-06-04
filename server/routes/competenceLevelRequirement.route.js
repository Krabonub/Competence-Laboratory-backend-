const express = require("express");
const router = express.Router();

const competenceLevelRequirementController = require("../controllers/competenceLevelRequirement.controller");

router.post("/get", competenceLevelRequirementController.getRequirements);
router.post("/edit", competenceLevelRequirementController.editRequirements);

module.exports = router;
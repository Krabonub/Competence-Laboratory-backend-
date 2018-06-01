const express = require("express");
const router = express.Router();

const competenceLevelRequirementController = require("../controllers/competenceLevelRequirement.controller");

router.post("/edit", competenceLevelRequirementController.editRequirements);
router.post("/get", competenceLevelRequirementController.getRequirements);

module.exports = router;
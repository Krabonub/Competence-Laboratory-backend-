const competenceLevelRequirementService = require('../services/db/competenceLevelRequirement.service');

class CompetenceLevelRequirementController {
  editRequirements(request, response) {
    competenceLevelRequirementService.update(request.body).then(
      (levelMatrixPage) => {
        response.send(levelMatrixPage);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  getRequirements(request, response) {
    levelMatrixService.readLevelMatrixPage().then(
      (levelMatrixPage) => {
        response.send(levelMatrixPage);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new CompetenceLevelRequirementController();
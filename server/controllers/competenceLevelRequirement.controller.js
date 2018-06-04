const competenceLevelRequirementService = require('../services/db/competenceLevelRequirement.service');

class CompetenceLevelRequirementController {
  getRequirements(request, response) {
    competenceLevelRequirementService.read(request.body).then(
      (requirements) => {
        response.send(requirements);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  editRequirements(request, response) {
    competenceLevelRequirementService.update(request.body).then(
      (requirements) => {
        response.send(requirements);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new CompetenceLevelRequirementController();
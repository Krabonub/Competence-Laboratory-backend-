const competenceGroupService = require('../services/db/competenceGroup.service');

class CompetenceGroupController {
  addCompetenceGroup(request, response) {
    competenceGroupService.createCompetenceGroup(request.body).then(
      (competenceGroup) => {
        response.send(competenceGroup);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  editCompetenceGroup(request, response) {
    competenceGroupService.updateCompetenceGroup(request.body).then(
      (competenceGroup) => {
        response.send(competenceGroup);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  deleteCompetenceGroup(request, response) {
    competenceGroupService.deleteCompetenceGroup(request.body).then(
      (competenceGroup) => {
        response.send(competenceGroup);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  getAllCompetenceGroups(request, response) {
    competenceGroupService.readCompetenceGroup().then(
      (competenceGroups) => {
        response.send(competenceGroups);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new CompetenceGroupController();
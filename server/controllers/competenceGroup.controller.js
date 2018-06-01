const competenceGroupService = require('../services/db/competenceGroup.service');

class CompetenceGroupController {
  addCompetenceGroup(request, response) {
    var obj = {
      competenceGroupName
    } = request.body;
    competenceGroupService.createCompetenceGroup(obj).then(
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
    var obj = {
      competenceGroupId,
      competenceGroupName
    } = request.body;
    competenceGroupService.updateCompetenceGroup(obj).then(
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
    var obj = {
      competenceGroupId
    } = request.body;
    competenceGroupService.deleteCompetenceGroup(obj).then(
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
  getExcept(request, response) {
    competenceGroupService.readCompetenceGroup().nin("_id", request.body.except).then(
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
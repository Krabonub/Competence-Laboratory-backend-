const competenceService = require('../services/db/competence.service');

class CompetenceController {
  addCompetence(request, response) {
    var obj = {
      competenceName,
      description,
      competenceGroupId
    } = request.body;
    competenceService.createCompetence(obj).then(
      (competence) => {
        response.send(competence);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }

  editCompetence(request, response) {
    var obj = {
      competenceId,
      competenceName,
      description,
      competenceGroupId
    } = request.body;
    competenceService.editCompetence(obj).then(
      (competence) => {
        response.send(competence);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }

  deleteCompetence(request, response) {
    var obj = {
      competenceId
    } = request.body
    competenceService.deleteCompetence(obj).then(
      (competence) => {
        response.send(competence);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }

  getCompetencesByGroup(request, response) {
    var query = request.body.query;
    competenceService.readCompetence(query === "all" ? {} : {
      query: {
        competenceGroup: query
      }
    }).then(
      (competences) => {
        response.send(competences);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new CompetenceController();
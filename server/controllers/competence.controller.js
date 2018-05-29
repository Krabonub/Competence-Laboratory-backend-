const competenceService = require('../services/db/competence.service');

class CompetenceController {
  addCompetence(request, response) {
    competenceService.createCompetence(request.body).then(
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
    competenceService.editCompetence(request.body).then(
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
    competenceService.deleteCompetence(request.body).then(
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
    competenceService.readCompetence(query === "all" ? {} : query).then(
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
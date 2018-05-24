var Competence = require('../../models/competence');

class CompetenceService {
  createCompetence() {
    var newCompetence = new Competence({});
    return newCompetence.save();
  }
  readCompetence() {

  }
  UpdateCompetence() {

  }
  DeleteCompetence() {

  }
}

module.exports = new CompetenceService();
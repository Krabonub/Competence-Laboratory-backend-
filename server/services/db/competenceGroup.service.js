var CompetenceGroup = require('../../models/competenceGroup');

class CompetenceGroupService {
  createCompetenceGroup() {
    var newCompetenceGroup = new CompetenceGroup({});
    return newCompetenceGroup.save();
  }
  readCompetenceGroup() {

  }
  UpdateCompetenceGroup() {

  }
  DeleteCompetenceGroup() {

  }
}

module.exports = new CompetenceGroupService();
const Competence = require('../../models/competence');
const CompetenceGroup = require('../../models/competenceGroup');

class CompetenceService {
  async createCompetence({
    competenceName,
    description,
    competenceGroupId
  }) {
    try {
      var group = await CompetenceGroup.findById(competenceGroupId);
      if (!group) {
        return Promise.reject({
          message: "Competence group does not exist!"
        });
      }
      var newCompetence = new Competence({
        competenceName,
        description,
        competenceGroup: group._id
      });
      return newCompetence.save();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async readCompetence({
    query
  }) {
    return Competence.find(query).populate("competenceGroup");
  }
  async UpdateCompetence({
    competenceId,
    competenceName,
    description,
    competenceGroupId
  }) {
    try {
      var foundCompetence = await Competence.find(competenceId);
      if (!foundCompetence) {
        return Promise.reject({
          message: "Competence does not exist!"
        });
      }
      var foundGroup = await Competence.find(competenceGroupId);
      if (!foundGroup) {
        return Promise.reject({
          message: "Competence group does not exist!"
        });
      }
      foundCompetence.competenceName = competenceName ? competenceName : foundCompetence.competenceName;
      foundCompetence.description = description ? description : foundCompetence.description;
      foundCompetence.competenceGroup = competenceGroup ? foundGroup._id : foundCompetence.competenceGroup;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  deleteCompetence({
    competenceId
  }) {
    return Competence.findByIdAndRemove(competenceId);
  }
}

module.exports = new CompetenceService();
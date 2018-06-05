const Competence = require('../../models/competence');
const CompetenceGroup = require('../../models/competenceGroup');
const competenceLevelRequirementService = require('./competenceLevelRequirement.service');
const Position = require('../../models/position');

class CompetenceService {
  async createCompetence({
    competenceName,
    description,
    competenceGroupId
  }) {
    try {
      var group = await CompetenceGroup.findById(competenceGroupId);
      var positions = await Position.find({
        competenceGroups: group._id
      });
      var promises = [];
      for (let position of positions) {
        promises.push(competenceLevelRequirementService.create({
          positionId: position._id,
          competenceGroupId: group._id
        }));
      }
      var newCompetence = new Competence({
        competenceName,
        description,
        competenceGroup: group._id
      });
      promises.push(newCompetence.save());
      return Promise.all(promises);
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
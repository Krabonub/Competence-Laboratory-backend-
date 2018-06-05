const CompetenceLevelRequirement = require('../../models/CompetenceLevelRequirement');
const Level = require('../../models/level');
const Competence = require('../../models/competence');
const CompetenceGroup = require('../../models/competenceGroup');
const Position = require('../../models/position');

class CompetenceLevelRequirementService {
  async create({
    positionId,
    competenceGroupId
  }) {
    try {
      var foundPosition = await Position.findById(positionId);
      var foundGroup = await CompetenceGroup.findById(competenceGroupId);
      var foundCompetences = await Competence.find({
        competenceGroup: foundGroup._id
      });
      var allLevels = await Level.find();
      var requirements = [];
      for (let competence of foundCompetences) {
        var tmpReqs = await CompetenceLevelRequirement.find({
          competence: competence._id,
          position: foundPosition._id
        });
        if (tmpReqs.length === 0) {
          for (let level of allLevels) {
            requirements.push(
              (new CompetenceLevelRequirement({
                position: foundPosition._id,
                competence: competence._id,
                level: level._id,
                mark: 0
              })).save()
            );
          }
        }
      }
      return Promise.all(requirements);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async read({
    positionId
  }) {
    var requirements = await CompetenceLevelRequirement.find({
      position: positionId
    }).populate({
      path: "competence",
      populate: {
        path: "competenceGroup"
      }
    });
    return requirements;
  }
  async update(requirements) {
    try {
      var promises = [];
      for (let req of requirements) {
        var foundRequirement = await CompetenceLevelRequirement.findById(req._id);
        foundRequirement.mark = req.mark;
        promises.push(foundRequirement.save());
      }
      return Promise.all(promises);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async delete({
    positionId,
    competenceGroupId
  }) {
    try {
      var foundPosition = await Position.findById(positionId);
      var foundGroup = await CompetenceGroup.findById(competenceGroupId);
      var foundCompetences = await Competence.find({
        competenceGroup: foundGroup._id
      });
      var allLevels = await Level.find();
      var requirementsToDelete = [];
      for (let competence of foundCompetences) {
        for (let level of allLevels) {
          requirementsToDelete.push(
            CompetenceLevelRequirement.findOneAndRemove({
              position: foundPosition._id,
              competence: competence._id,
              level: level._id
            })
          );
        }
      }
      return Promise.all(requirementsToDelete);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = new CompetenceLevelRequirementService();
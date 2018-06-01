const Position = require('../../models/position');
const CompetenceGroup = require('../../models/competenceGroup');
const CompetenceLevelRequirement = require('../../models/CompetenceLevelRequirement');
const Level = require('../../models/level');
const competenceLevelRequirementService = require('./competenceLevelRequirement.service');

class PositionService {
  createPosition({
    positionName
  }) {
    var newPosition = new Position();
    newPosition.positionName = positionName;
    newPosition.competenceLevelRequirementGroups = [];
    return newPosition.save();
  }

  readPositions(query) {
    return Position.find(query);
  }

  readOnePosition(query) {
    return Position.findOne(query);
  }

  updatePosition({
    positionId,
    positionName
  }) {
    return Position.findById(positionId).then(
      (position) => {
        position.positionName = positionName ? positionName : position.positionName;
        return position.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  deletePosition({
    positionId
  }) {
    return Position.deleteOne({
      _id: positionId
    });
  }

  async addCompetenceGroupToPosition({
    positionId,
    competenceGroupId
  }) {
    try {
      var [foundPosition, foundGroup, allLevels] = await Promise.all([
        Position.findById(positionId),
        CompetenceGroup.findById(competenceGroupId),
        Level.find()
      ]);
      const levelRequirementsCompetenceGroup = {
        competenceGroup: foundGroup._id,
        levelRequirementsCompetences: []
      };
      var i = 0;
      for (let competence of foundGroup.competences) {
        levelRequirementsCompetenceGroup.levelRequirementsCompetences[i] = {
          competence,
          competenceLevelRequirements: []
        };
        for (let level of allLevels) {
          var newReq = await competenceLevelRequirementService.create({
            level: level,
            competence: competence,
            mark: 0
          });
          levelRequirementsCompetenceGroup.levelRequirementsCompetences[i].competenceLevelRequirements.push(newReq._id);
        }
        i++;
      }
      foundPosition.levelRequirementsCompetenceGroups.push(levelRequirementsCompetenceGroup);
      return foundPosition.save();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteCompetenceGroupFromPosition({
    positionId,
    levelRequirementsCompetenceGroupId
  }) {
    try {
      var foundPosition = await Position.findById(positionId);
      var group = foundPosition.levelRequirementsCompetenceGroups.id(levelRequirementsCompetenceGroupId);
      for (let competence of group.levelRequirementsCompetences) {
        for (let req of competence.competenceLevelRequirements) {
          CompetenceLevelRequirement.findByIdAndRemove(req).catch((error) => {
            console.log(error);
          });
        }
      }
      group.remove();
      return foundPosition.save();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = new PositionService();
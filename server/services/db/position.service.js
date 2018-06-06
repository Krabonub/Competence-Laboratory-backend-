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
    return Position.findByIdAndRemove(positionId);
  }

  async addCompetenceGroupToPosition({
    positionId,
    competenceGroupId
  }) {
    try {
      var foundPosition = await Position.findById(positionId);
      var foundGroup = await CompetenceGroup.findById(competenceGroupId);
      if (foundPosition.competenceGroups.indexOf(String(foundGroup._id)) !== -1) {
        throw {
          message: `This competence group is already added to the chosen position!`
        }
      }
      foundPosition.competenceGroups.push(foundGroup._id);
      return Promise.all([
        competenceLevelRequirementService.create({
          positionId: foundPosition._id,
          competenceGroupId: foundGroup._id
        }),
        foundPosition.save()
      ]);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteCompetenceGroupFromPosition({
    positionId,
    competenceGroupId
  }) {
    try {
      var foundPosition = await Position.findById(positionId);
      var foundGroup = await CompetenceGroup.findById(competenceGroupId);
      foundPosition.competenceGroups.remove(competenceGroupId);
      return Promise.all([
        competenceLevelRequirementService.delete({
          positionId: foundPosition._id,
          competenceGroupId: foundGroup._id
        }),
        foundPosition.save()
      ]);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
module.exports = new PositionService();
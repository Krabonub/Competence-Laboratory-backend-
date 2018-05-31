const Position = require('../../models/position');
const CompetenceGroup = require('../../models/competenceGroup');

class PositionService {
  createPosition({
    positionName
  }) {
    var newPosition = new Position({
      positionName
    });
    return newPosition.save();
  }

  readPosition(query) {
    return Position.find(query);
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
    competenceGroup
  }) {
    var position = await Position.findById(positionId);
    var group = await CompetenceGroup.findById(competenceGroup);
    if (!position) {
      return Promise.reject({
        message: "Such position is not found!"
      });
    }
    if (!group) {
      return Promise.reject({
        message: "Such group is not found!"
      });
    }
    if (position.competenceGroups.indexOf(group._id) !== -1) {
      return Promise.reject({
        message: "Such competence group already exist in this position!"
      });
    }
    position.competenceGroups.push(group._id);
    return position.save();
  }

  async deleteCompetenceGroupFromPosition({
    positionId,
    competenceGroup
  }) {
    var position = await Position.findById(positionId);
    var group = await CompetenceGroup.findById(competenceGroup);
    if (!position) {
      return Promise.reject({
        message: "Such position is not found!"
      });
    }
    if (!group) {
      return Promise.reject({
        message: "Such group is not found!"
      });
    }
    if (position.competenceGroups.indexOf(group._id) === -1) {
      return Promise.reject({
        message: "Such competence group does not exist in this position!"
      });
    }
    console.log(position.competenceGroups.splice(position.competenceGroups.indexOf(group._id), 1));
    return position.save();
  }
}

module.exports = new PositionService();
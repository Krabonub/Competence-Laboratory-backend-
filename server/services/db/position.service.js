var Position = require('../../models/position');

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
        position.positionName = positionName;
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
}

module.exports = new PositionService();
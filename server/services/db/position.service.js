var Position = require('../../models/position');

class PositionService {
  createPosition() {
    var newPosition = new Position({});
    return newPosition.save();
  }
  readPosition() {

  }
  UpdatePosition() {

  }
  DeletePosition() {

  }
}

module.exports = new PositionService();
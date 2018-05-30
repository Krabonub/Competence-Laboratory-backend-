var LevelMatrixPage = require('../../models/levelMatrixPage');
var Position = require('../../models/position');
var Competence = require('../../models/competence');
var Level = require('../../models/level');

class LevelMatrixService {
  createLevelMatrixPage({
    position
  }) {
    return Position.find({
      position
    }).then(
      (foundPosition) => {
        return Promise.all([
          Level.find(),
          Competence.find()
        ]);
        var newLevelMatrixPage = new LevelMatrixPage({
          position,
          competenceLevelRequirements: []
        });
        return newLevelMatrixPage.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  readLevelMatrixPage(query) {
    return LevelMatrix.find(query).populate("competence");
  }
  updateLevelMatrixPage({
    levelMatrixId,
    levelMatrixName
  }) {
    return LevelMatrix.findOne({
      _id: levelMatrixId
    }).then(
      (foundLevelMatrix) => {
        foundLevelMatrix.levelMatrixName = levelMatrixName;
        return foundLevelMatrix.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  deleteLevelMatrixPage({
    levelMatrixId
  }) {
    return LevelMatrix.deleteOne({
      _id: levelMatrixId
    });
  }
}

module.exports = new LevelMatrixService();
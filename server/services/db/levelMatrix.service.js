const LevelMatrixPage = require('../../models/levelMatrixPage');
const Position = require('../../models/position');
const Competence = require('../../models/competence');
const CompetenceGroup = require('../../models/competenceGroup')
const Level = require('../../models/level');

class LevelMatrixService {
  async createLevelMatrixPage({
    position
  }) {
    try {
      var foundPosition = await Position.findById({
        position
      }).populate();
      if (!foundPosition) {
        return Promise.reject({
          message: "Such Position des not exist!"
        });
      }
      position.competenceGroups.forEach((group) => {
        group.competences.forEach((competence) => {
          ///////////////////////////////////////////////////
        });
      });
      var newLevelMatrixPage = new LevelMatrixPage({
        position,
        competenceLevelRequirements: []
      });
      return newLevelMatrixPage.save();
    } catch (error) {
      return Promise.reject(error);
    }
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
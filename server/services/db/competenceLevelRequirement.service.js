const CompetenceLevelRequirement = require('../../models/CompetenceLevelRequirement');
const Level = require('../../models/level');
const Competence = require('../../models/competence');
const Position = require('../../models/position');

class CompetenceLevelRequirementService {
  async create({
    positionId,
    competenceId,
    mark
  }) {
    try {
      var [foundPosition, foundCompetence, allLevels] = await Promise.all(
        [
          Position.findById(positionId),
          Competence.findById(competenceId),
          Level.find()
        ]
      );
      if (!foundPosition) {
        return Promise.reject({
          message: "Position does not exist !"
        });
      }
      if (!foundCompetence) {
        return Promise.reject({
          message: "Competence does not exist !"
        });
      }
      var requirements = [];
      for (let level of allLevels) {
        requirements.push(
          new CompetenceLevelRequirement({
            position: foundPosition._id,
            competence: foundCompetence._id,
            level: level,
            mark: mark ? mark : 0
          }).save()
        );
      }
      return requirements;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async read(query) {
    return CompetenceLevelRequirement.find(query);
  }
  async update({
    positionId,
    competenceId,
    levelId,
    mark
  }) {

  }
  async delete() {
    var foundPosition = await Position.findById(positionId),
      foundCompetence = await Competence.findById(competenceId),
      foundLevel = await Level.findById(levelId);
  }
}

module.exports = new CompetenceLevelRequirementService();
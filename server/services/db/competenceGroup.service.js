var CompetenceGroup = require('../../models/competenceGroup');

class CompetenceGroupService {
  createCompetenceGroup({
    competenceGroupName
  }) {
    var newCompetenceGroup = new CompetenceGroup({
      competenceGroupName
    });
    return newCompetenceGroup.save();
  }
  readCompetenceGroup(query) {
    return CompetenceGroup.find(query).populate("competence");
  }
  updateCompetenceGroup({
    competenceGroupId,
    competenceGroupName
  }) {
    return CompetenceGroup.findOne({
      _id: competenceGroupId
    }).then(
      (foundCompetenceGroup) => {
        foundCompetenceGroup.competenceGroupName = competenceGroupName;
        return foundCompetenceGroup.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  deleteCompetenceGroup({
    competenceGroupId
  }) {
    return CompetenceGroup.deleteOne({
      _id: competenceGroupId
    });
  }
}

module.exports = new CompetenceGroupService();
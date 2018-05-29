const Competence = require('../../models/competence');
const CompetenceGroup = require('../../models/competenceGroup');

class CompetenceService {
  createCompetence({
    competenceName,
    description,
    competenceGroup
  }) {
    var newCompetence = new Competence({
      competenceName,
      description,
      competenceGroup
    });
    return CompetenceGroup.findById(competenceGroup).then(
      (group) => {
        return newCompetence.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  readCompetence({
    query
  }) {
    return Competence.find(query).populate("competenceGroup");
  }
  UpdateCompetence({
    competenceId,
    competenceName,
    description,
    competenceGroup
  }) {
    return Promise.all([
      Competence.findById(query),
      CompetenceGroup.findById(competenceGroup)
    ]).then(
      ([comp, group]) => {
        comp.competenceName = competenceName ? competenceName : comp.competenceName;
        comp.description = description ? description : comp.description;
        comp.competenceGroup = competenceGroup ? competenceGroup : comp.competenceGroup;
        return comp.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  DeleteCompetence({
    competenceId
  }) {
    return Competence.deleteOne({
      _id: competenceId
    });
  }
}

module.exports = new CompetenceService();
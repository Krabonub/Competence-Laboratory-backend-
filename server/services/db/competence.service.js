const Competence = require('../../models/competence');
const CompetenceGroup = require('../../models/competenceGroup');

class CompetenceService {
  createCompetence({
    competenceName,
    description,
    competenceGroup
  }) {
    var foundGroup;
    return CompetenceGroup.findById(competenceGroup).then(
      (group) => {
        var newCompetence = new Competence({
          competenceName,
          description,
          competenceGroup
        });
        foundGroup = group;
        return newCompetence.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    ).then(
      (competence) => {
        foundGroup.competences.push(competence._id);
        return foundGroup.save();
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
        group.competences = group.competences.filter((item) => {
          return item != comp._id;
        });
        return Promise.all([comp.save(), group.save()]);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  deleteCompetence({
    competenceId
  }) {
    return CompetenceGroup.find({
      "competences": competenceId
    }).then(
      (groups) => {
        var promises = [Competence.deleteOne({
          _id: competenceId
        })];
        groups.forEach((group) => {
          group.competences = group.competences.filter((item) => {
            return item != competenceId;
          });
          promises.push(group.save());
        });
        return Promise.all(promises);
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }
}

module.exports = new CompetenceService();
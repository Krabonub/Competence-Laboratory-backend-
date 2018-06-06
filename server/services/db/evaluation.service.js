var Evaluation = require('../../models/evaluation');
var User = require('../../models/user');

class EvaluationService {
  async create({
    userId,
    evaluationDate,
    comment,
    marks
  }) {
    try {
      var newEvaluation = new Evaluation();
      newEvaluation.user = await User.findById(userId)._id;
      newEvaluation.evaluationDate = evaluationDate;
      newEvaluation.comment = comment;
      newEvaluation.marks = [];
      for (let mark of marks) {
        var competence = await Competene.findById(mark.competence);
        newEvaluation.marks.push({
          competence: competence._id,
          value: mark.value
        });
      }
      return newEvaluation.save();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async read({
    query
  }) {
    return Evaluation.find(query);
  }

  async update({
    evaluationId,
    evaluationDate,
    comment,
    marksUpdates
  }) {
    try {
      var foundEvaluation = await Evaluation.findById(evaluationId);
      foundEvaluation.evaluationDate = evaluationDate;
      foundEvaluation.comment = comment;
      for (let markUpdate of marksUpdates) {
        foundEvaluation.mark.id(markUpdate.markId).value = markUpdate.value;
      }
      return foundEvaluation.save();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete({
    evaluationId
  }) {
    return Evaluation.findByIdAndRemove(evaluationId);
  }
}

module.exports = new EvaluationService();
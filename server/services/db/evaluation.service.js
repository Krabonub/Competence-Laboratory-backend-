var Evaluation = require('../../models/evaluation');

class EvaluationService {
  createEvaluation() {
    var newEvaluation = new Evaluation({});
    return newEvaluation.save();
  }
  readEvaluation() {

  }
  UpdateEvaluation() {

  }
  DeleteEvaluation() {

  }
}

module.exports = new EvaluationService();
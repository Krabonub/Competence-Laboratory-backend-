const evaluationService = require('../services/db/evaluation.service');

class EvaluationController {
  addEvaluation(request, response) {
    evaluationService.create(request.body).then(
      (evaluation) => {
        response.send(evaluation);
      },
      (error) => {
        console.log(error);
        response.code(500).send(error);
      }
    );
  }

  editEvaluation(request, response) {
    evaluationService.update(request.body).then(
      (evaluation) => {
        response.send(evaluation);
      },
      (error) => {
        console.log(error);
        response.code(500).send(error);
      }
    );
  }

  getEvaluation(request, response) {
    evaluationService.read(request.body).then(
      (evaluations) => {
        response.send(evaluations);
      },
      (error) => {
        console.log(error);
        response.code(500).send(error);
      }
    );
  }
  getByUsers(request, response) {
    var userIds = request.body.userIds;
    evaluationService.read().where('user').in(userIds).then(
      (evaluations) => {
        response.send(evaluations);
      },
      (error) => {
        console.log(error);
        response.code(500).send(error);
      }
    );
  }
}

module.exports = new EvaluationController();
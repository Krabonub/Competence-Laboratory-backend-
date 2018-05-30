const levelMatrixService = require('../services/db/levelMatrix.service');

class LevelMatrixController {
  editLevelMatrixPage(request, response) {
    levelMatrixService.updateLevelMatrixPage(request.body).then(
      (levelMatrixPage) => {
        response.send(levelMatrixPage);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  getLevelMatrixPage(request, response) {
    levelMatrixService.readLevelMatrixPage().then(
      (levelMatrixPage) => {
        response.send(levelMatrixPage);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new LevelMatrixController();
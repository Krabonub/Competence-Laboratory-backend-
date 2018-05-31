const levelService = require('../services/db/level.service');

class LevelController {
  getAllLevels(request, response) {
    levelService.readLevel().then(
      (levels) => {
        response.send(levels);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new LevelController();
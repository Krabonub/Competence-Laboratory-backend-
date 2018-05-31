var Level = require('../../models/level');

class LevelService {
  createLevel() {}
  async readLevel(query) {
    return Level.find(query).sort("levelIndex");
  }
  updateLevel() {}
  deleteLevel() {}
}

module.exports = new LevelService();
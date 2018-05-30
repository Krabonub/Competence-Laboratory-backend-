const positionService = require('../services/db/position.service');

class PositionController {
  addPosition(request, response) {
    positionService.createPosition(request.body).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(position);
      }
    );
  }
  editPosition(request, response) {
    positionService.updatePosition(request.body).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(position);
      }
    );
  }
  deletePosition(request, response) {
    positionService.deletePosition(request.body).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(position);
      }
    );
  }
  getAllPositions(request, response) {
    positionService.readPosition().then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(position);
      }
    );
  }
  addCompetenceGroup(request, response) {
    positionService.updatePosition({
      competenceGroup: request.body.competenceGroup
    }).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(position);
      }
    );
  }
}

module.exports = new PositionController();
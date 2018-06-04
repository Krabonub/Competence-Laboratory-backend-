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
    positionService.readPositions().then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(position);
      }
    );
  }

  addCompetenceGroupToPosition(request, response) {
    positionService.addCompetenceGroupToPosition(request.body).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      }
    );
  }

  deleteCompetenceGroupFromPosition(request, response) {
    positionService.deleteCompetenceGroupFromPosition(request.body).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      }
    );
  }
}

module.exports = new PositionController();
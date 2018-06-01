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

  addCompetenceGroup(request, response) {
    positionService.addCompetenceGroupToPosition({
      positionId: request.body.positionId,
      competenceGroupId: request.body.competenceGroupId
    }).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      }
    );
  }

  deleteCompetenceGroup(request, response) {
    positionService.deleteCompetenceGroupFromPosition({
      positionId: request.body.positionId,
      levelRequirementsCompetenceGroupId: request.body.levelRequirementsCompetenceGroupId
    }).then(
      (position) => {
        response.send(position);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      }
    );
  }

  getLevelMatrix(request, response) {
    positionService.readOnePosition({
        _id: request.body.positionId
      })
      .populate({
        path: "levelRequirementsCompetenceGroups.competenceGroup"
      })
      .populate({
        path: "levelRequirementsCompetenceGroups.levelRequirementsCompetences.competence"
      })
      .populate({
        path: "levelRequirementsCompetenceGroups.levelRequirementsCompetences.competenceLevelRequirements"
      })
      .then(
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
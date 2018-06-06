const userService = require('../services/db/user.service');

class UserController {
  addUser(request, response) {
    userService.createUser(request.body).then(
      (user) => {
        response.send(user);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  editUser(request, response) {
    userService.updateUser(request.body).then(
      (user) => {
        response.send(user);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  deleteUser(request, response) {
    userService.deleteUser(request.body).then(
      (user) => {
        response.send(user);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  getAllUsers(request, response) {
    userService.readUser().populate("position").then(
      (user) => {
        response.send(user);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
  getByQuery(request, response) {
    var query = request.body;
    userService.readUser(query).then(
      (user) => {
        response.send(user);
      },
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new UserController();
const userService = require('../services/db/user.service');

class UserController {
  addUser(request, response) {
    userService.createUser().then(
      () => {},
      (error) => {
        console.log(error);
        response.status(500).send(error);
      },
    );
  }
}

module.exports = new UserController();
const userService = require('../services/roaming/user.service');

class UserController {
  registerUser(request, response) {
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
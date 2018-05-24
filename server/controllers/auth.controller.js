const userService = require('../services/db/user.service');

class AuthCotroller {
  logIn(request, response) {
    response.send(request.user);
  }
  logOut(request, response) {
    request.logout();
    response.send({
      message: "log out is sucessfull!"
    });
  }
}

module.exports = new AuthCotroller();
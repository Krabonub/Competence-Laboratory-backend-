var User = require('../../models/user');

class UserService {
  createUser({
    email,
    password,
    firstName,
    lastName
  }) {
    var newUser = new User({
      email,
      password,
      firstName,
      lastName
    });
    return newUser.save();
  }
  readUser() {

  }
  UpdateUser() {

  }
  DeleteUser() {

  }
}

module.exports = new UserService();
const User = require('../../models/user');
const Position = require('../../models/position');

class UserService {
  createUser({
    email,
    firstName,
    lastName,
    position
  }) {
    return Position.findOne({
      positionName: position
    }).then(
      (foundPosition) => {
        var generatedPassword = "1234qwer";
        var newUser = new User({
          email,
          password: User.cryptPassword(generatedPassword),
          firstName,
          lastName,
          position: foundPosition._id
        });
        return newUser.save();
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  readUser(query) {
    return User.find(query).populate("position");
  }
  updateUser({
    userId,
    firstName,
    lastName,
    email,
    password,
    position
  }) {
    return Promise.all([
        User.findById(userId),
        Position.findOne({
          positionName: position
        })
      ])
      .then(
        ([
          foundUser,
          foundPosition
        ]) => {
          foundUser.email = email ? email : foundUser.email;
          foundUser.firstName = firstName ? firstName : foundUser.firstName;
          foundUser.lastName = lastName ? lastName : foundUser.lastName;
          foundUser.password = password ? User.cryptPassword(password) : foundUser.password;
          //foundUser.position = position ? foundPosition._id : foundUser.position;
          return foundUser.save();
        },
        (error) => {
          return Promise.reject(error);
        }
      );
  }
  deleteUser({
    userId
  }) {
    return User.deleteOne({
      _id: userId
    });
  }
}

module.exports = new UserService();
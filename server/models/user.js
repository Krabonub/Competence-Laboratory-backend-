const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  position: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Position"
  },
  level: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Level"
  }
});

userSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.statics.cryptPassword = function(password) {
  return bcrypt.hashSync(password, 8);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
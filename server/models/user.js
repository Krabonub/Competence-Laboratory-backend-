const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var userSchema = mongoose.Schema({
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
  role: {
    type: String,
    enum: ["admin", "employee", "lead", "manager", "department head"],
    default: "employee",
    required: true
  },
  avatarUrl: {
    type: String,
    default: `${CONFIG.get("API_URI")}/user_images/user_default.png`
  }
});

userSchema.methods.comparePasswords = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.statics.cryptPassword = function(password) {
  return bcrypt.hashSync(password, 8);
};

var User = mongoose.model("user", userSchema);

module.exports = User;
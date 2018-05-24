const mongoose = require("mongoose");

const positionSchema = mongoose.Schema({
  positionName: {
    type: String,
    required: true,
    unique: true
  }
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
const mongoose = require("mongoose");

const positionSchema = mongoose.Schema({
  positionName: {
    type: String,
    required: true,
    unique: true
  },
  competenceGroups: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CompetenceGroup"
  }]
});

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
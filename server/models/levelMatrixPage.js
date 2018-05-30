const mongoose = require("mongoose");

const competenceLevelRequirementSchema = mongoose.Schema({
  level: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Level",
    required: true
  },
  competence: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Competence",
    required: true
  },
  mark: {
    type: Number,
    enum: [0, 1, 2, 3, 4],
    required: true,
    default: 0
  }
});

const levelMatrixPageSchema = mongoose.Schema({
  position: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Position"
  },
  competenceLevelRequirements: [competenceRequirementSchema]
});

const LevelMatrixPage = mongoose.model("LevelMatrixPage", levelMatrixPageSchema);

module.exports = LevelMatrixPage;
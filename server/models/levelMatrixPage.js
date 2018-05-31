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

competenceRequirementGroupSchema = mongoose.Schema({
  competenceGroup: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CompetenceGroup",
    required: true
  },
  competenceLevelRequirements: [{
    type: competenceLevelRequirementSchema,
    required: true
  }]
});

const levelMatrixPageSchema = mongoose.Schema({
  position: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Position"
  },
  competenceRequirementGroups: [{
    type: competenceRequirementGroupSchema,
    required: true
  }]
});

const LevelMatrixPage = mongoose.model("LevelMatrixPage", levelMatrixPageSchema);

module.exports = LevelMatrixPage;
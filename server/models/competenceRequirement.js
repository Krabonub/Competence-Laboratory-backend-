const mongoose = require("mongoose");

const competenceRequirementSchema = mongoose.Schema({
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
    required: true
  }
});

const CompetenceRequirement = mongoose.model("CompetenceRequirement", competenceRequirementSchema);

module.exports = CompetenceRequirement;
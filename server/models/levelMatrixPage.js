const mongoose = require("mongoose");

const levelMatrixPageSchema = mongoose.Schema({
  position: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Position"
  },
  competenceRequirements: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CompetenceRequirement"
  }]
});

const LevelMatrixPage = mongoose.model("LevelMatrixPage", levelMatrixPageSchema);

module.exports = LevelMatrixPage;
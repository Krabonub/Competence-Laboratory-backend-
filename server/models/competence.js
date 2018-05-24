const mongoose = require("mongoose");

const competenceSchema = mongoose.Schema({
  competenceName: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  competenceGroup: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CompetenceGroup",
    required: true
  }
});

const Competence = mongoose.model("Competence", competenceSchema);

module.exports = Competence;
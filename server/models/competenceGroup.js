const mongoose = require("mongoose");

const competenceGroupSchema = mongoose.Schema({
  competenceGroupName: {
    type: String,
    required: true,
    unique: true
  }
});

const CompetenceGroup = mongoose.model("CompetenceGroup", competenceGroupSchema);

module.exports = CompetenceGroup;
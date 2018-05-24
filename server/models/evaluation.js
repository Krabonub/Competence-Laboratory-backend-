const mongoose = require("mongoose");

const MarkSchema = mongoose.Schema({
  value: {
    type: Number,
    enum: [0, 1, 2, 3, 4]
  },
  competence: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Competence"
  }
});

const evaluationSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true
  },
  evaluationDate: {
    type: Date,
    required: true
  },
  comment: {
    type: String
  },
  marks: [MarkSchema]
});

const Evaluation = mongoose.model("Evaluation", evaluationSchema);

module.exports = Evaluation;
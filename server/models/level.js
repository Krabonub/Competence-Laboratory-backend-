const mongoose = require("mongoose");

const levelSchema = mongoose.Schema({
  levelName: {
    type: String,
    required: true,
    unique: true
  },
  levelIndex:{
    type:Number,
    required:true,
    unique:true,
  }
});

const Level = mongoose.model("Level", levelSchema);

module.exports = Level;
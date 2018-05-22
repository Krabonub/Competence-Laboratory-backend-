var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(CONFIG.get("DATABASE_URI"))
  .then(() => console.log(`Connection to ${CONFIG.get("DATABASE_URI")} is successfull...`))
  .catch((err) => console.error(err));

var db = mongoose.connection;

module.exports = db;
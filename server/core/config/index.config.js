const fs = require("fs");
const nconf = require("nconf");

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
  process.env.CONFIG_PATH = "./server/core/config/config.dev.json";
}
nconf
  .argv()
  .env()
  .file({ file: process.env.CONFIG_PATH });

module.exports = nconf;

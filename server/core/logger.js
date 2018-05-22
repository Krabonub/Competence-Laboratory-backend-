const winston = require('winston');
require('winston-daily-rotate-file');

const myFormat = winston.format.printf(info => {
  return `${info.level}: ${info.message}`;
});

const myTransport = new (winston.transports.DailyRotateFile)({
  filename: './server/log/%DATE%.app.log',
  datePattern: 'YYYY-MM-DD'
});

const logger = winston.createLogger({
    level: 'info',
    format: myFormat,
    transports: [
      myTransport
    ]
});

//logger.error({message:"test"});

module.exports = logger;
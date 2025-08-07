const winston = require("winston");

const requestLog = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
});

const requestLogStream = {
  write: function (message) {
    requestLog.info(message.trim());
  },
};

module.exports = {
  requestLog,
  requestLogStream,
};

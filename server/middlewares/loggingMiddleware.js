const logger = require("../config/logger");

const loggingMiddleware = (req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};

module.exports = loggingMiddleware;

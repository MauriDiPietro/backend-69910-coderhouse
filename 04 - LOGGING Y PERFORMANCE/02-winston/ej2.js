/*
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
*/

import { createLogger, transports } from "winston";

const logConfig = {
    level: 'info',
    transports: [
        new transports.Console({ level: 'verbose' }),
        new transports.File({
            filename: './logs/error.log',
            level: 'error'
        }),
        new transports.File({
            filename: './logs/ej2.log',
            level: 'silly'
        }),
],
};

const logger = createLogger(logConfig);

logger.level = "debug";

const ej2 = () => {
  logger.error("log error");
  logger.warn("log warn");
  logger.info("log info");
  logger.http("log http");
  logger.verbose("log verbose");
  logger.debug("log debug");
  logger.silly("log silly");
};


ej2()
/*
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
*/

import winston, { createLogger, transports } from "winston";
import "winston-mongodb";

const logConfig = {
  transports: [
    winston.add(
      new transports.MongoDB({
        options: { useUnifiedTopology: true },
        db: "mongodb://localhost:27017/coderhouse",
        collection: "logs",
        tryReconnect: true,
        level: "error",
      })
    ),
  ],
};

const logger = createLogger(logConfig);

const ej2 = () => {
  logger.error("log error");
  logger.warn("log warn");
  logger.info("log info");
  logger.http("log http");
  logger.verbose("log verbose");
  logger.debug("log debug");
  logger.silly("log silly");
};

ej2();

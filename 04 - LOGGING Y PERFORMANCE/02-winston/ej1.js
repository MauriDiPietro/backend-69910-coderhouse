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
  transports: [new transports.Console()],
};

const logger = createLogger(logConfig);

logger.level = "debug";

const ej1 = () => {
  logger.error("log error");
  logger.warn("log warn");
  logger.info("log info");
  logger.http("log http");
  logger.verbose("log verbose");
  logger.debug("log debug");
  logger.silly("log silly");
};


ej1()
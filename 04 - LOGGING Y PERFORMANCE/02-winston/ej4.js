/*
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
*/

import { createLogger, transports, format } from "winston";

const { combine, timestamp, colorize, printf } = format;

const logConfig = {
  level: "info",
  format: combine(
    timestamp({
      format: "MM-DD-YYYY HH:mm:ss",
    }),
    colorize(),
    printf((info) => `${info.level} | [${info.timestamp}] | ${info.message}`)
  ),
  transports: [
    new transports.Console({ level: "silly" }),
    new transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
  ],
};

const logger = createLogger(logConfig);


const ej4 = () => {
  logger.error("log error");
  logger.warn("log warn");
  logger.info("log info");
  logger.http("log http");
  logger.verbose("log verbose");
  logger.debug("log debug");
  logger.silly("log silly");
};

ej4();

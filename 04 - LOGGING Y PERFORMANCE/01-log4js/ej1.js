import log4js from "log4js";

/*
trace
debug
info
warn
error
fatal
*/
const logger = log4js.getLogger();

logger.level = "trace";

const ej1 = () => {
  logger.trace("log trace");
  logger.debug("log debug");
  logger.info("log info");
  logger.warn("log warn");
  logger.error("log error");
  logger.fatal("log fatal");
};

ej1()

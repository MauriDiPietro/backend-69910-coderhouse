import log4js from "log4js";

log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/ej3.log' },
        consoleAppender: { type: 'console' }
    },
    categories: {
        default: { appenders: ['fileAppender', 'consoleAppender'], level: 'info' }
    }
})

const logger = log4js.getLogger();


const ej3 = () => {
  logger.trace("log trace");
  logger.debug("log debug");
  logger.info("log info");
  logger.warn("log warn");
  logger.error("log error");
  logger.fatal("log fatal");
};

ej3()

import log4js from "log4js";

log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/ej2.log' },
    },
    categories: {
        default: { appenders: ['fileAppender'], level: 'debug' }
    }
})

const logger = log4js.getLogger();


const ej2 = () => {
  logger.trace("log trace");
  logger.debug("log debug");
  logger.info("log info");
  logger.warn("log warn");
  logger.error("log error");
  logger.fatal("log fatal");
};

ej2()

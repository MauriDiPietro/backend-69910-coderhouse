import log4js from "log4js";

log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/ej4.log' },
        consoleAppender: { type: 'console' }
    },
    categories: {
        default: { appenders: ['fileAppender', 'consoleAppender'], level: 'info' },
        myLogger: { appenders: ['consoleAppender'], level: 'error' }
    }
})

const logger = log4js.getLogger('myLogger');


const ej3 = () => {
  logger.trace("log trace");
  logger.debug("log debug");
  logger.info("log info");
  logger.warn("log warn");
  logger.error("log error");
  logger.fatal("log fatal");
};

ej3()

import log4js from "log4js";

log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './logs/ej5.log' },
        consoleAppender: { type: 'console' }
    },
    categories: {
        default: { appenders: ['fileAppender', 'consoleAppender'], level: 'trace' },
        test: { appenders: ['consoleAppender'], level: 'info' },
        prod: { appenders: ['fileAppender'], level: 'fatal' }
    }
})

const ENV = process.argv[2]  //process.env | process.argv

const logger = log4js.getLogger(ENV);


const ej5 = () => {
  logger.trace("log trace");
  logger.debug("log debug");
  logger.info("log info");
  logger.warn("log warn");
  logger.error("log error");
  logger.fatal("log fatal");
};

ej5()

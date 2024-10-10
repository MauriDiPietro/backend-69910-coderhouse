import log4js from "log4js";

log4js.configure({
    appenders: {
        fileAppender: { type: 'file', filename: './src/logs/logs.log' },
        consoleAppender: { type: 'console'}
    },
    categories: {
        default: { appenders: ['fileAppender', 'consoleAppender'], level: 'trace' }
    }
});

export const logger = log4js.getLogger();
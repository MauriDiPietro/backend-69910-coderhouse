import winston, { transports, createLogger } from "winston";
import "winston-mongodb";

const logConfiguration = {
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
    new transports.Console({ level: "silly" }),

    new transports.File({
      filename: "./logs.log",
      level: "info",
    }),
  ],
};

export const logger = createLogger(logConfiguration);

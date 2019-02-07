import { createLogger, format, transports } from "winston";
import * as rotate from "winston-daily-rotate-file";
import config from "../config/config.dev";
const { combine, timestamp, label, printf, prettyPrint } = format;
import * as fs from "fs";

const dir = config.logFileDir;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const logFormat = printf(({ level, message, label, timestamp }) => {
  const json = Object.assign(message);
  return `${timestamp} [${label}] ${level}: ${JSON.stringify(json, null, 2)}`;
});

let logger = createLogger({
  level: "info",
  format: combine(
    label({ label: "BPMS" }),
    timestamp(),
    format.splat(),
    format.simple(),
    logFormat
  ),
  transports: [
    new transports.Console({
      colorize: true
    }),
    new transports.DailyRotateFile({
      filename: config.logFileName,
      dirname: config.logFileDir,
      maxsize: 20971520, //20MB
      maxFiles: 25,
      datePattern: ".dd-MM-yyyy"
    })
  ]
});

export default logger;

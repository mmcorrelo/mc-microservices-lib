/**
 * Copyright {Project Name} 2022 All Rights Reserved.
 * Author: Miguel Correlo
 * Node module: @lib/utils
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 */

import winston from 'winston';

const customLevels = {
  levels: {
    trace: 5,
    debug: 4,
    info: 3,
    warn: 2,
    error: 1,
    fatal: 0,
  },
  colors: {
    trace: 'white',
    debug: 'green',
    info: 'green',
    warn: 'yellow',
    error: 'red',
    fatal: 'red',
  },
};

const formatter = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf((info) => {
    const { timestamp, level, message, ...meta } = info;

    return `${ timestamp } [${ level }]: ${ message } ${ Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
    }`;
  }));

export class Logger {
  private static logger?: winston.Logger;

  static initialize(isDevEnvironment: boolean): void {
    if (Logger.logger) {
      throw new Error('Use Logger.instance instead of new.');
    }

    const prodTransport = new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
    });
    const transport = new winston.transports.Console({
      format: formatter,
    });
    Logger.logger = winston.createLogger({
      level: isDevEnvironment ? 'trace' : 'error',
      levels: customLevels.levels,
      transports: [isDevEnvironment ? transport : prodTransport],
    });

    winston.addColors(customLevels.colors);
  }

  static trace(msg: any, meta?: any) {
    Logger.logger.log('trace', msg, meta);
  }

  static debug(msg: any, meta?: any) {
    Logger.logger.debug(msg, meta);
  }

  static info(msg: any, meta?: any) {
    Logger.logger.info(msg, meta);
  }

  static warn(msg: any, meta?: any) {
    Logger.logger.warn(msg, meta);
  }

  static error(msg: any, meta?: any) {
    Logger.logger.error(msg, meta);
  }

  static fatal(msg: any, meta?: any) {
    Logger.logger.log('fatal', msg, meta);
  }
}

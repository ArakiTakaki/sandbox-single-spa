import pino from 'pino';
const isBrowser = typeof window === 'object';
const logger = pino({
  prettifier: {
    levelFirst: false, // --levelFirst
    messageFormat: true, // --messageFormat
    timestampKey: 'time', // --timestampKey
    translateTime: false, // --translateTime
    customPrettifiers: {}
  },
  browser: {
    asObject: isBrowser,
  }
});
const createLogger = (tag: string) => logger.child({ tag });
export default createLogger;
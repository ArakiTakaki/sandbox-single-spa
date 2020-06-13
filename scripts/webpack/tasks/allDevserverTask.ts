import { buildConfig } from "./builds";
import { webpackDevServerAsync } from './util/polyfill';
import createLogger from "../logger";

Object.entries(buildConfig).map(([key, config]) => {
  const logger = createLogger('webpack');
  webpackDevServerAsync(config).then(() => {
    logger.info({
      processName: key,
    }, 'success message');
  }).catch((error) => {
    console.error();
    logger.info({
      processName: key,
    }, error);
  });
});
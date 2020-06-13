import { buildConfig } from "./builds";
import { webpackDevServerAsync, webpackAsync } from './util/polyfill';

console.log(JSON.stringify(buildConfig.MAIN, null, 2));
webpackDevServerAsync(buildConfig.MAIN).then((lib) => {
  console.log('done');
});


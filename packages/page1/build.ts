import { webpackAsync } from "../../scripts/webpack/util/polyfill";
import config from './webpack.config'
webpackAsync(config)
  .then(() => {
    console.log('done');
  })
  .catch(() => {
    console.error('dev server fail');
  });
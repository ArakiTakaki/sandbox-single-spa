import { webpackDevServerAsync } from "../../scripts/webpack/util/polyfill";
import config from './webpack.config'

webpackDevServerAsync(config)
  .then(() => {
    console.log('done');
  })
  .catch(() => {
    console.error('dev server fail');
  });
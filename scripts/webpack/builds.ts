import mainWebpackConfig from '../../packages/core/webpack.config';
import page1WebpackConfig from '../../packages/page1/webpack.config';

export const buildConfig = {
  MAIN: mainWebpackConfig,
  PAGE1: page1WebpackConfig,
}

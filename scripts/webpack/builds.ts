import mainWebpackConfig from '../../packages/core/webpack.config';
import page1WebpackConfig from '../../packages/page1/webpack.config';
import page2WebpackConfig from '../../packages/page2/webpack.config';

export const buildConfig = {
  MAIN: mainWebpackConfig,
  PAGE1: page1WebpackConfig,
  PAGE2: page2WebpackConfig,
}

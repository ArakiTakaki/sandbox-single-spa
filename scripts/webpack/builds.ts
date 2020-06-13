import path from 'path';
import mainWebpackConfig from '../../packages/core/webpack.config';
const BASE = path.resolve(__dirname, '../../');

export const buildEntry = {
  MAIN: path.resolve(BASE, 'packages', 'core'),
  PAGE1: path.resolve(BASE, 'packages', 'page1'),
  PAGE2: path.resolve(BASE, 'packages', 'page2'),
  UI_COMPONENTS: path.resolve(BASE, 'packages', 'ui-components'),
};
export const buildConfig = {
  MAIN: mainWebpackConfig,
}

export const webpackConfigName = 'webpack.config.ts';

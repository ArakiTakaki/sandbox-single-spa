import webpackMerge from 'webpack-merge';
import makeBaseConfig from '../../scripts/webpack/baseConfig';
import path from 'path';

const baseConfig = makeBaseConfig('core');
export default webpackMerge(baseConfig, {
  entry: {
    index: path.resolve(__dirname, 'src/index.tsx'),
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'system',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 3031,
    disableHostCheck: true,
    historyApiFallback: true,
  },
});
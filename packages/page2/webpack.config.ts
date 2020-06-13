import webpackMerge from 'webpack-merge';
import makeBaseConfig from '../../scripts/webpack/baseConfig';
import path from 'path';
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const baseConfig = makeBaseConfig('core');
const vueConfig = webpackMerge(baseConfig, {
  entry: {
    index: path.resolve(__dirname, 'src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'system',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 3032,
    disableHostCheck: true,
    historyApiFallback: true,
  },
});
export default vueConfig;
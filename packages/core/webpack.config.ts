import webpackMerge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import makeBaseConfig from '../../scripts/webpack/baseConfig';
import path from 'path';

const baseConfig = makeBaseConfig('core');
export default webpackMerge(baseConfig, {
  entry: {
    index: path.resolve(__dirname, 'src/entries.ts'),
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'system',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3030,
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: false,
    }),
  ]
});
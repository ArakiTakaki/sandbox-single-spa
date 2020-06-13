import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { isDev } from '../constants';

const makeBaseConfig = (
  name: string,
): webpack.Configuration => {
  return ({
    name: name,
    mode: isDev ? 'development' : 'production',
    devtool: isDev ?'inline-source-map' : undefined ,
    target: 'web',
    module: {
      rules: [
        {
          parser: { system: false }
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            { loader: 'ts-loader', }
          ],
        },
        {
          test: /\.(jpg|png|svg|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: "[name]_[hash].[ext]",
              }
            }
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
    ],
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
      ],
    },
  });
};

export default makeBaseConfig;
import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

export const webpackAsync = (
  config: webpack.Configuration,
  isWatch: boolean = false,
): Promise<{
  status: webpack.Stats,
  webpack: webpack.Compiler.Watching | webpack.Compiler,
}> => {
  return new Promise((resolve, reject) => {
    config.watch = isWatch;
    const process = webpack(config, (error, status) => {
      if (error != null) {
        reject(error);
        return;
      }
      resolve({
        status: status,
        webpack: process,
      });
      return;
    });

    if (process instanceof webpack.Compiler && isWatch) {
      process.watch({}, () => {
        console.log('hoge');
      });
    }

  });
};

export const webpackDevServerAsync = (config: webpack.Configuration) => {
  return new Promise((resolve, reject) => {
    const devServer = new webpackDevServer(webpack(config), {
      noInfo: false,
    });
    devServer.listen(
      config.devServer?.port || 3000,
      config.devServer?.host || '0.0.0.0',
      ((error) => {
        if (error != null) {
          reject(error);
          return;
        }
        resolve();
      }
    ));
  })
}
process.env.NODE_ENV = 'development';

const { merge } = require('webpack-merge');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const BaseConfig = require('./webpack.config');
const { dist, publicUrlOrPath, src, isHTTPS, CRT, KEY } = require('./constants');
const getHttpsConfig = require('./webpack.config.https');

const serverConfig = getHttpsConfig();
const hasHTTPSConfig = typeof serverConfig !== 'boolean';

const devWebpackConfig = merge(BaseConfig, {
  // DEV config
  mode: 'development',
  devtool: 'cheap-module-source-map',
  bail: true,
  output: {
    pathinfo: true,
  },
  devServer: {
    open: false,
    hot: false,
    compress: true,
    static: {
      directory: dist,
      publicPath: [publicUrlOrPath],
      watch: {
        ignored: ignoredFiles(src),
      },
    },
    devMiddleware: {
      publicPath: publicUrlOrPath.slice(0, -1),
    },
    port: 8080,
    server: {
      type: isHTTPS ? 'https' : 'http',
      options: !hasHTTPSConfig
        ? {
            requestCert: false,
          }
        : serverConfig,
    },
    historyApiFallback: {
      disableDotRule: true,
      index: publicUrlOrPath,
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: isHTTPS ? 'https://localhost:8080/' : 'http://localhost:8080/',
        notify: false,
        https:
          isHTTPS && hasHTTPSConfig
            ? {
                cert: CRT,
                key: KEY,
              }
            : false,
      },
      {
        reload: false,
      }
    ),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(devWebpackConfig);
});

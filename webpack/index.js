const { resolve } = require('path')
const vendor = require('./vendor')
const rules = require('./rules')
const plugins = require('./plugins')
const devServer = require('./dev_server')
const devtool = require('./devtool')
const optimization = require('./optimization')

const settings = {
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  context: resolve(__dirname, '..'),
  entry: {
    app: [
      'react-hot-loader/patch',
      // 'babel-polyfill',
      './src/index'
    ],
    // vendor,
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules,
  },
  plugins,
  optimization,
  devServer,
  devtool
};
module.exports = settings;

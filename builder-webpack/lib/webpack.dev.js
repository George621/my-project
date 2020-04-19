
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new FriendlyErrorsWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    hot: true,
    stats: 'errors-only', // 日志打印优化
  },
  devtool: 'source-map',
};

module.exports = merge(baseConfig, devConfig);

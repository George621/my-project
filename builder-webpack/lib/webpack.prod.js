
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new FriendlyErrorsWebpackPlugin()
  ],
  
};

module.exports = merge(baseConfig, devConfig);
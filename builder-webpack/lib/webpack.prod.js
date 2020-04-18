
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const prodConfig = { 
  mode: 'production',//'production',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /.css$/g,
      cssProcessor: require('cssnano')
    }),
    // new FriendlyErrorsWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }

    }
  }
};

module.exports = merge(baseConfig, prodConfig);
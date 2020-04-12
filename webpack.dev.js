'use strict';
const path = require('path')
const webpack = require('webpack')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 指定webpack 打包入口
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name][chunkhash:8].js'
  },
  mode: 'development',  // development process.env
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          // 'file-loader'
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              // name: ''
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|eot|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    hot: true
  }


}
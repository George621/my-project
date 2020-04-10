'use strict';
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const  = require('clean-webpack-plugin');

module.exports = {
  // 指定webpack 打包入口
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production',

  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          // 'file-loader'
          {
            loader: 'file-loader',
            options: {
              // limit: 10240,
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff|eot|otf)$/,
        use: [
          // 'file-loader'
          {
            loader: 'file-loader',
            options: {
              // limit: 10240,
              name: '[name]_[hash:8][ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /.css$/g,
      cssProcessor: require('cssnano')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/search.html'),
      filename: 'search.html',
      chunks: ['search'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }

    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }

    }),
    new CleanWebpackPlugin()
  ]
}
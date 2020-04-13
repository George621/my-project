'use strict';
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];


  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index];
    // /Users/george/Desktop/my-project/src/index/index.js'
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match &&  match[1]
    entry[pageName] = entryFile;
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
  
      })
    )
  })

  // console.log(entryFiles, '===')
  return {
    entry,
    HtmlWebpackPlugins
  }
}
const {entry, HtmlWebpackPlugins} = setMPA();
module.exports = {
  // 指定webpack 打包入口
  entry: entry,

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name][hash:8].js'
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
  ].concat(HtmlWebpackPlugins),
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    hot: true
  },
  devtool: 'source-map'


}
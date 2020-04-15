'use strict';
const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const FriendlyErrorsWebpackPlugin= require('friendly-errors-webpack-plugin');
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
        chunks: ['vendors','commons', pageName],
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
  resolve: { extensions: ['.js', '.jsx'] },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production' ,//'production',

  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader']  // ,'eslint-loader'
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'px2rem-loader',
            // options here
            options: {
              remUni: 75,
              remPrecision: 8
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: ['last 5 versions']
                })
              ]
            }
          },
          'less-loader'
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
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'react',
    //       entry: 'https://s03.appmifile.com/in/spps_js//react.js?de22ad4c', //  可以是本地文件 也可以是cdn文件
    //       global: 'React',
    //     },
    //     {
    //       module: 'react-dom',
    //       entry: 'https://s03.appmifile.com/in/spps_js//react.js?de22ad4c',
    //       global: 'ReactDom',
    //     },
    //   ],
    // }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ].concat(HtmlWebpackPlugins),
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
  },
  // devtool: 'inline-source-map'
  stats: 'errors-only'
}
# wenpack study

### list 
 1.安装 webpack webpack-cli 运行方式 webpack
 2.基础用法 entry、 output、loaders、plugins、mode、react jsx 语法、解析css，less，sass 、解析图片，字体、 
 3.文件监听方式，热更新原理，chunkhash contenthash hash（文件指纹）
 4.自动清理构建目录dis，PostCss autoprefixer 补css3前缀
 5.移动端 csspx 自动转换rem,静态资源内联
 6.多页面打包通用方案，source-map 使用，提取公共资源 splitChuank plugin
 7.tree Shaking  Scope Hoisting production 环境默认开启
 8.动态import js webpack + ESLint 集成
 9.
 10.
 11.
 12.
 13.
 14.

 ### 遇到难点 
 1.
  静态资源拼接不生效
  解决方法： "html-webpack-plugin": "^4.2.0"导致的。所以用ejs 写法解决了
 2.chunkhash contenthash hash 热更新时候不能用哦

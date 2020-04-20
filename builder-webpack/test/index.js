const path = require('path');
// 进入目录
process.chdir(path.join(__dirname,'./smoke/template'))

describe('builder-webpack test case',()=>{
  require('./unit/webpack-base-test');
})
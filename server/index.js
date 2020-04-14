// 遇到问题 1.window is not defined
if(typeof window === 'undefined'){
  global.window = {}
}

const fs = require('fs');
const path = require('path');
const express = require('express');
const {renderToString} = require('react-dom/server');
const SSR = require('../dist/search-server');
const template = fs.readFileSync(path.join(__dirname,'../dist/search.html'),'utf-8');

const  server = (port) =>{
  const app = express();
  app.use(express.static('dist'));  // 设置静态目录

  app.get('/search',(req, res)=>{
    const html = renderMarkup(renderToString(SSR))
    res.status(200).send( html );
  })

  app.listen(port,()=>{
    console.log('Server is running on port:'+ port)
  })
}

server(process.env.PORT || 3000);

const renderMarkup = (str ) =>{ // 包装打包大字符串
  return template.replace('<!-- HTML_PLACEHOlDER -->', str);
}
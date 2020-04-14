
if(typeof window === 'undefined'){
  global.window = {}
}

const express = require('express');
const {renderToString} = require('react-dom/server');
const SSR = require('../src/search/search-server');
const  server = (port) =>{
  const app = express();
  app.use(express.static('dist'));  // 设置静态目录

  app.get('/search',(req, res)=>{
    const html = renderMarkup(renderToString(SSR))
    console.log(html, 'html***')
    res.status(200).send( html );
  })

  app.listen(port,()=>{
    console.log('Server is running on port:'+ port)
  })
}

server(process.env.PORT || 3000);

const renderMarkup = (str ) =>{ // 包装打包大字符串
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <div id="root">${str}</div>
    </body>
    </html>
  `;
}
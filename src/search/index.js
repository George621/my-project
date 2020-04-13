// document.write('search page');
'use strict';
import logo from './images/logo.png'
import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
// import  '../../common'
import  {a} from './tree-shaking'
 
const Search = ()=> {
 if(false){a()}
 

  return (
    <div className='search-text'> 
      <span> seatch text 122 内容,before after write</span>
      <p>
        1. 静态资源内联问题待解决-> "html-webpack-plugin": "^4.2.0", 导致的所以用ejs 写法解决了
      </p>
      <p>
        2.  。。。
      </p>
      <img src={logo} />
      <img src={logo} />
    </div>
  )
}
ReactDom.render(
  <Search />, document.getElementById('root')
)

// document.write('search page');
'use strict';
import logo from './images/logo.png'
import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
import  '../../common'
 
const Search = ()=> {
  return (
    <div className='search-text'> 
      <span>seatch text 122 内容,before after write</span>
      <p>
        1. 静态资源内联问题待解决
      </p>
      <p>
        2.  
      </p>
      <img src={logo} />
      <img src={logo} />
    </div>
  )
}
ReactDom.render(
  <Search />, document.getElementById('root')
)

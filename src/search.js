// document.write('search page');
'use strict';
import logo from './images/logo.png'
import React from 'react'
import ReactDom from 'react-dom'
import './search.less'
 
const Search = ()=> {

  return (
    <div className='search-text'> 
      <span>seatch text 122 内容,before after write</span>
      <img src={logo} />
      <img src={logo} />
    </div>
  )
}
ReactDom.render(
  <Search />, document.getElementById('root')
)
// export default Search
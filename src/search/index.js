import React, { useState } from 'react';
import ReactDom from 'react-dom';
import logo from './images/logo.png';
import './search.less';
// import common from './common'

const Search = () => {
  const [text, setText] = useState('');
  const loadComponent = () => {
    import('./text.js').then((Text) => {
      setText(Text.default)
    })
  }

  return (
    <div className='search-text'>
      <span> seatch text 122 内容,before after write</span>
      <p>
        1. 22静态资源内联问题待解决 html-webpack-plugin 
      </p>
      <div>
        {text}
      </div>
      <img onClick={loadComponent} src={logo} alt='' />
    </div>
  )
}

ReactDom.render(
  <Search />, document.getElementById('root')
)

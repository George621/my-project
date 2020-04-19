import React, { useState } from 'react';
import ReactDom from 'react-dom';
import logo from './images/logo.png';
import './search.less';

const Search = () => {
  const [text, setText] = useState('');
  const loadComponent = () => {
    import('./text.js').then((text) => {
      setText(text.default)
    })
  }

  return (
    <div className='search-text'>
      <span> seatch text 122 内容,before after write</span>
      <p>
        1. 静态资源内联问题待解决 html-webpack-plugin: ^4.2.0, 导致的所以用ejs 写法解决了
      </p>
      <div>
        2. {text} 
      </div>
      <img onClick={loadComponent} src={logo} />
    </div>
  )
}

ReactDom.render(
  <Search />, document.getElementById('root')
);

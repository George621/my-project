// import React from 'react';  // , { useState }
// // import ReactDom from 'react-dom';
// import logo from './images/logo.png';
// import './search.less';

const React = require('react');
// const {useState} = require('react');
const  logo = require('./images/logo.png');
// const ReactDom = require('react-dom')
require('./search.less');

const Search = () => {
  const [text, setText] = React.useState('1');
  const loadComponent = () => {
    console.log('1212')
    // import('./text.js').then((Text) => {
    //   setText(Text.default)
    // })
  }

  return (
    <div className='search-text'>
      <span> seatch text 122 内容,before after write</span>
      <p>
        1. 静态资源内联问题待解决 html-webpack-plugin 
      </p>
      <div>
        {text}
      </div>
      <img onClick={loadComponent} src={logo} alt='' />
    </div>
  )
}

module.exports = <Search />
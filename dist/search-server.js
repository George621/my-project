(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import React from 'react';  // , { useState }
// // import ReactDom from 'react-dom';
// import logo from './images/logo.png';
// import './search.less';
var React = __webpack_require__(1); // const {useState} = require('react');


var logo = __webpack_require__(2); // const ReactDom = require('react-dom')


__webpack_require__(3);

var Search = function Search() {
  var _React$useState = React.useState('1'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      text = _React$useState2[0],
      setText = _React$useState2[1];

  var loadComponent = function loadComponent() {
    console.log('1212'); // import('./text.js').then((Text) => {
    //   setText(Text.default)
    // })
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "search-text"
  }, /*#__PURE__*/React.createElement("span", null, " seatch text 122 \u5185\u5BB9,before after write"), /*#__PURE__*/React.createElement("p", null, "1. \u9759\u6001\u8D44\u6E90\u5185\u8054\u95EE\u9898\u5F85\u89E3\u51B3 html-webpack-plugin"), /*#__PURE__*/React.createElement("div", null, text), /*#__PURE__*/React.createElement("img", {
    onClick: loadComponent,
    src: logo,
    alt: ""
  }));
};

module.exports = /*#__PURE__*/React.createElement(Search, null);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});
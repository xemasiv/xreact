/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.disable('x-powered-by');\napp.use((0, _cors2.default)());\napp.use((0, _compression2.default)());\napp.use(_express2.default.static('dist/browser'));\n\napp.use('*', function (req, res) {\n  var data = { name: 'xemasiv' };\n  res.status(200).send('\\n    <!doctype html>\\n    <html>\\n      <head>\\n        <title>xreact</title>\\n        <link rel=\"stylesheet\" href=\"/fonts/roboto.css\">\\n      </head>\\n      <body>\\n        <div id=\"root\"></div>\\n        <script src=\"/browser.index.js\" defer></script>\\n        <script>window.__DATA__ = ' + (0, _serializeJavascript2.default)(data) + '</script>\\n      </body>\\n    </html>\\n  ');\n});\n\napp.listen(80);\n/*\r\nimport { renderToString } from 'react-dom/server';\r\nimport { SheetsRegistry } from 'react-jss/lib/jss';\r\nimport JssProvider from 'react-jss/lib/JssProvider';\r\nimport { MuiThemeProvider, createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';\r\nimport { green, red } from '@material-ui/core/colors';\r\nimport App from '../App.js';\r\nconst theme = createMuiTheme({ palette: { type: 'light' } });\r\napp.use('/asdasd', (req, res) => {\r\n  const data = { name: 'xemasiv' };\r\n  const sheetsRegistry = new SheetsRegistry();\r\n  const generateClassName = createGenerateClassName();\r\n  const html = renderToString(\r\n    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>\r\n      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>\r\n        <App data={data}/>\r\n      </MuiThemeProvider>\r\n    </JssProvider>\r\n  );\r\n  const css = sheetsRegistry.toString();\r\n  res.send(`\r\n    <!doctype html>\r\n    <html>\r\n      <head>\r\n        <title>xreact</title>\r\n      </head>\r\n      <body>\r\n        <div id=\"root\">${html}</div>\r\n        <style id=\"jss-server-side\">${css}</style>\r\n        <script src=\"/browser.index.js\" defer></script>\r\n        <script>window.__DATA__ = ${serialize(data)}</script>\r\n      </body>\r\n    </html>\r\n  `);\r\n});*/\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });
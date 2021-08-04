/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"redux-templates": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./redux-templates/src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/challenge-list-block/style.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/challenge-list-block/style.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/challenge-list-block/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/challenge-timer/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/challenge-timer/style.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/challenge-timer/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/final-templates/style.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/final-templates/style.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/final-templates/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/style.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/style.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nFile to import not found or unreadable: /Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/_variable.scss.\n      in /Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/style.scss (line 1, column 1)");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/error-notice/style.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/error-notice/style.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/components/error-notice/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/fab-wrapper/styles.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/fab-wrapper/styles.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/components/fab-wrapper/styles.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/welcome-guide/style.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/welcome-guide/style.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".redux-edit-post-welcome-guide {\n  width: 412px; }\n  .redux-edit-post-welcome-guide__image {\n    background: #00a0d2;\n    width: 412px;\n    border-bottom: 1px solid #ddd; }\n    .redux-edit-post-welcome-guide__image__prm-r {\n      display: none; }\n    @media (prefers-reduced-motion: reduce) {\n      .redux-edit-post-welcome-guide__image__prm-r {\n        display: block; }\n      .redux-edit-post-welcome-guide__image__prm-np {\n        display: none; } }\n  .redux-edit-post-welcome-guide__heading {\n    font-family: \"Noto Serif\", serif;\n    font-size: 24px;\n    line-height: 1.4;\n    margin: 0 0 16px 0;\n    padding: 0 32px; }\n  .redux-edit-post-welcome-guide__text {\n    font-size: 16px;\n    line-height: 1.4;\n    margin: 0 0 24px 0;\n    padding: 0 32px;\n    font-weight: normal; }\n  .redux-edit-post-welcome-guide__inserter-icon {\n    margin: 0 4px;\n    vertical-align: text-top; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/custom-css/style.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/custom-css/style.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".redux-css-editor {\n  border: 1px solid #e2e4e7;\n  margin-bottom: 20px; }\n\n.redux-css-editor-help {\n  background: #f7f7f7;\n  padding: 20px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/editor.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/editor.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#redux-templatesImportCollectionBtn {\n  vertical-align: middle;\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  border: 1px solid #bababa;\n  border-radius: 3px;\n  white-space: nowrap;\n  color: #555d66;\n  font-size: 13px;\n  margin: 0 15px 0 15px;\n  padding: 9px 12px;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  transition: 400ms; }\n  #redux-templatesImportCollectionBtn svg {\n    height: 16px;\n    width: 16px;\n    margin-right: 8px; }\n    #redux-templatesImportCollectionBtn svg * {\n      stroke: #555d66;\n      fill: #555d66;\n      stroke-width: 0; }\n  #redux-templatesImportCollectionBtn:hover, #redux-templatesImportCollectionBtn:focus, #redux-templatesImportCollectionBtn:active {\n    text-decoration: none;\n    border: 1px solid #191e23;\n    color: #191e23; }\n    #redux-templatesImportCollectionBtn:hover svg *, #redux-templatesImportCollectionBtn:focus svg *, #redux-templatesImportCollectionBtn:active svg * {\n      stroke: #191e23 !important;\n      fill: #191e23 !important;\n      stroke-width: 0; }\n\n.redux-templates-editor-btn {\n  background: none;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  overflow: visible;\n  padding: 0;\n  -webkit-appearance: button;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none; }\n  .redux-templates-editor-btn::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n\n.d-flex {\n  display: flex; }\n\n.justify-content-center {\n  justify-content: center; }\n\n.redux-css-editor {\n  border: 1px solid #e2e4e7;\n  margin-bottom: 20px; }\n\n.redux-css-editor-help {\n  background: #f7f7f7;\n  padding: 20px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-import-wizard/style.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-import-wizard/style.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/style.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/style.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nFile to import not found or unreadable: /Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/_variables.scss.\n      in /Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-library/style.scss (line 1, column 1)");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/view-collection/style.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/view-collection/style.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-library/view-collection/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/view-saved/style.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/view-saved/style.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-library/view-saved/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-promotor-score/style.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-promotor-score/style.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-promotor-score/style.scss'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modals.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modals.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modals.scss'");

/***/ }),

/***/ "./redux-templates/assets/img/icon-color.svg":
/*!***************************************************!*\
  !*** ./redux-templates/assets/img/icon-color.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/assets/img/icon-color.svg'");

/***/ }),

/***/ "./redux-templates/assets/img/icon.svg":
/*!*********************************************!*\
  !*** ./redux-templates/assets/img/icon.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/assets/img/icon.svg'");

/***/ }),

/***/ "./redux-templates/src/blocks/blocks.js":
/*!**********************************************!*\
  !*** ./redux-templates/src/blocks/blocks.js ***!
  \**********************************************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import */ "./redux-templates/src/blocks/import/index.js");
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./library */ "./redux-templates/src/blocks/library/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const registerBlockType = wp.blocks.registerBlockType;


function registerBlocks() {
  registerBlockType(`redux/${_library__WEBPACK_IMPORTED_MODULE_2__["name"]}`, _objectSpread({}, _library__WEBPACK_IMPORTED_MODULE_2__["settings"]));
  registerBlockType(`redux/${_import__WEBPACK_IMPORTED_MODULE_1__["name"]}`, _objectSpread({}, _import__WEBPACK_IMPORTED_MODULE_1__["settings"]));
}
registerBlocks();

/***/ }),

/***/ "./redux-templates/src/blocks/import/components/edit.js":
/*!**************************************************************!*\
  !*** ./redux-templates/src/blocks/import/components/edit.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/blocks/import/components/edit.js'");

/***/ }),

/***/ "./redux-templates/src/blocks/import/icon.js":
/*!***************************************************!*\
  !*** ./redux-templates/src/blocks/import/icon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/blocks/import/icon.js'");

/***/ }),

/***/ "./redux-templates/src/blocks/import/index.js":
/*!****************************************************!*\
  !*** ./redux-templates/src/blocks/import/index.js ***!
  \****************************************************/
/*! exports provided: name, title, category, icon, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit */ "./redux-templates/src/blocks/import/components/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./redux-templates/src/blocks/import/icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms */ "./redux-templates/src/blocks/import/transforms.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons */ "./redux-templates/src/icons/index.js");
/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */

const __ = wp.i18n.__;
/**
 * Block constants
 */

const name = 'import';
const category = 'common';
const schema = {
  file: {
    type: 'object'
  }
};

const title = __('Template Import', redux_templates.i18n);

const keywords = [__('import', redux_templates.i18n), __('download', redux_templates.i18n), __('migrate', redux_templates.i18n)];
const settings = {
  title: title,
  description: __('Import blocks exported using Redux plugin.', redux_templates.i18n),
  category: category,
  keywords: keywords,
  attributes: schema,
  supports: {
    align: true,
    alignWide: false,
    alignFull: false,
    customClassName: false,
    className: false,
    html: false
  },
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"],

  save() {
    return null;
  }

};


/***/ }),

/***/ "./redux-templates/src/blocks/import/transforms.js":
/*!*********************************************************!*\
  !*** ./redux-templates/src/blocks/import/transforms.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/blocks/import/transforms.js'");

/***/ }),

/***/ "./redux-templates/src/blocks/library/edit.js":
/*!****************************************************!*\
  !*** ./redux-templates/src/blocks/library/edit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/blocks/library/edit.js'");

/***/ }),

/***/ "./redux-templates/src/blocks/library/index.js":
/*!*****************************************************!*\
  !*** ./redux-templates/src/blocks/library/index.js ***!
  \*****************************************************/
/*! exports provided: name, title, category, icon, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _redux_templates_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ~redux-templates/icons */ "./redux-templates/src/icons/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./redux-templates/src/blocks/library/edit.js");
/* harmony import */ var _insert_library_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insert-library-button */ "./redux-templates/src/blocks/library/insert-library-button.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/**
 * BLOCK: Design Library
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const registerBlockType = wp.blocks.registerBlockType;
/**
 * WordPress dependencies
 */





const name = 'library';
const icon = _insert_library_button__WEBPACK_IMPORTED_MODULE_2__["default"];
const category = 'common';
const schema = {};

const title = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Template Library', redux_templates.i18n);

const description = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Choose a section, template, or template kit from the Redux Template Library.', redux_templates.i18n);

const keywords = [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Template Library', redux_templates.i18n), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Design Library', redux_templates.i18n), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Element Layouts', redux_templates.i18n), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Redux', redux_templates.i18n)];
const blockAttributes = {
  file: {
    type: 'object'
  }
};
const settings = {
  title: title,
  description: description,
  icon: _redux_templates_icons__WEBPACK_IMPORTED_MODULE_0__["ReduxTemplatesIconColor"],
  category: 'layout',
  keywords: keywords,
  attributes: schema,
  supports: {
    customClassName: false // inserter: ! disabledBlocks.includes( name ), // Hide if disabled.

  },
  example: {
    attributes: {// backgroundColor: '#000000',
      // opacity: 0.8,
      // padding: 30,
      // textColor: '#FFFFFF',
      // radius: 10,
      // title: __( 'I am a slide title', 'wp-presenter-pro' ),
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  save() {
    return null;
  }

};

const renderButton = function (toolbar) {
  const buttonDiv = document.createElement('div');
  toolbar.appendChild(buttonDiv);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["render"])(wp.element.createElement(_insert_library_button__WEBPACK_IMPORTED_MODULE_2__["default"], null), buttonDiv);
};

Object(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
  let toolbar = document.querySelector('.edit-post-header__toolbar');

  if (!toolbar) {
    toolbar = document.querySelector('.edit-post-header__toolbar');
  }

  if (!toolbar) {
    setTimeout(function () {
      let toolbar = document.querySelector('.edit-post-header__toolbar');

      if (toolbar) {
        renderButton(toolbar);
      }
    }, 500);
    return;
  }

  renderButton(toolbar);
});


/***/ }),

/***/ "./redux-templates/src/blocks/library/insert-library-button.js":
/*!*********************************************************************!*\
  !*** ./redux-templates/src/blocks/library/insert-library-button.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/blocks/library/insert-library-button.js'");

/***/ }),

/***/ "./redux-templates/src/challenge/challenge-list-block/ChallengeStepItem.js":
/*!*********************************************************************************!*\
  !*** ./redux-templates/src/challenge/challenge-list-block/ChallengeStepItem.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/challenge-list-block/ChallengeStepItem.js'");

/***/ }),

/***/ "./redux-templates/src/challenge/challenge-list-block/ProgressBar.js":
/*!***************************************************************************!*\
  !*** ./redux-templates/src/challenge/challenge-list-block/ProgressBar.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/challenge-list-block/ProgressBar.js'");

/***/ }),

/***/ "./redux-templates/src/challenge/challenge-list-block/index.js":
/*!*********************************************************************!*\
  !*** ./redux-templates/src/challenge/challenge-list-block/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChallengeStepItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChallengeStepItem */ "./redux-templates/src/challenge/challenge-list-block/ChallengeStepItem.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./redux-templates/src/challenge/challenge-list-block/ProgressBar.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./redux-templates/src/challenge/config.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/challenge/challenge-list-block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */





const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;

function ChallengeListBlock(props) {
  const started = props.started,
        onStarted = props.onStarted;
  const challengeStep = props.challengeStep,
        finalStatus = props.finalStatus,
        setChallengeOpen = props.setChallengeOpen,
        setChallengeStep = props.setChallengeStep;

  const _useState = useState('challenge-button-row'),
        _useState2 = _slicedToArray(_useState, 2),
        buttonRowClassname = _useState2[0],
        setButtonRowClassname = _useState2[1];

  useEffect(() => {
    setButtonRowClassname(challengeStep !== _config__WEBPACK_IMPORTED_MODULE_3__["default"].beginningStep ? 'challenge-button-row started' : 'challenge-button-row');
  }, [challengeStep]);

  const onCancelChallenge = () => {
    setChallengeOpen(false);
    setChallengeStep(-1);
  };

  return wp.element.createElement("div", {
    className: "challenge-list-block"
  }, wp.element.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Complete the challenge and get up and running within 5 minutes', redux_templates.i18n)), wp.element.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentStep: finalStatus === 'success' ? _config__WEBPACK_IMPORTED_MODULE_3__["default"].totalStep : challengeStep
  }), wp.element.createElement("ul", {
    className: "challenge-list"
  }, _config__WEBPACK_IMPORTED_MODULE_3__["default"].list.map((item, i) => {
    return wp.element.createElement(_ChallengeStepItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      step: i,
      currentStep: challengeStep,
      finalStatus: finalStatus,
      caption: item.caption
    });
  })), finalStatus === '' && wp.element.createElement("div", {
    className: buttonRowClassname
  }, challengeStep === _config__WEBPACK_IMPORTED_MODULE_3__["default"].beginningStep && wp.element.createElement("button", {
    className: "btn-challenge-start",
    onClick: onStarted
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Start Challenge', redux_templates.i18n)), challengeStep === _config__WEBPACK_IMPORTED_MODULE_3__["default"].beginningStep && wp.element.createElement("button", {
    className: "btn-challenge-skip",
    onClick: onCancelChallenge
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Skip Challenge', redux_templates.i18n)), challengeStep !== _config__WEBPACK_IMPORTED_MODULE_3__["default"].beginningStep && wp.element.createElement("button", {
    className: "btn-challenge-cancel",
    onClick: onCancelChallenge
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Cancel Challenge', redux_templates.i18n))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setChallengeOpen = _dispatch.setChallengeOpen,
        setChallengeStep = _dispatch.setChallengeStep;

  return {
    setChallengeOpen,
    setChallengeStep
  };
}), withSelect(select => {
  const _select = select('redux-templates/sectionslist'),
        getChallengeStep = _select.getChallengeStep,
        getChallengeFinalStatus = _select.getChallengeFinalStatus;

  return {
    challengeStep: getChallengeStep(),
    finalStatus: getChallengeFinalStatus()
  };
})])(ChallengeListBlock));

/***/ }),

/***/ "./redux-templates/src/challenge/challenge-list-block/style.scss":
/*!***********************************************************************!*\
  !*** ./redux-templates/src/challenge/challenge-list-block/style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/challenge-list-block/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/challenge/challenge-timer/index.js":
/*!****************************************************************!*\
  !*** ./redux-templates/src/challenge/challenge-timer/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/challenge/challenge-timer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./redux-templates/src/challenge/config.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./redux-templates/src/challenge/helper.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */





const compose = wp.compose.compose;
const _wp$data = wp.data,
      withSelect = _wp$data.withSelect,
      withDispatch = _wp$data.withDispatch;
const _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      useRef = _wp$element.useRef;

function useInterval(callback, delay) {
  const savedCallback = useRef(); // Remember the latest callback.

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function ChallengeTimer(props) {
  const started = props.started,
        expanded = props.expanded,
        setChallengeListExpanded = props.setChallengeListExpanded,
        isChallengeOpen = props.isChallengeOpen,
        finalStatus = props.finalStatus;

  const _useState = useState(_helper__WEBPACK_IMPORTED_MODULE_3__["default"].getSecondsLeft()),
        _useState2 = _slicedToArray(_useState, 2),
        secondsLeft = _useState2[0],
        setSecondsLeft = _useState2[1];

  const _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        paused = _useState4[0],
        setPaused = _useState4[1]; // only timer


  useEffect(() => {
    window.addEventListener('focus', resume);
    window.addEventListener('blur', pause);
    return () => {
      window.removeEventListener('focus', resume);
      window.removeEventListener('blur', pause);
    };
  }); // setup timer

  useEffect(() => {
    setSecondsLeft(_helper__WEBPACK_IMPORTED_MODULE_3__["default"].getSecondsLeft());

    if (_helper__WEBPACK_IMPORTED_MODULE_3__["default"].loadStep() === -1) {
      setSecondsLeft(_config__WEBPACK_IMPORTED_MODULE_2__["default"].initialSecondsLeft);
    }
  }, [isChallengeOpen]); // run timer

  useInterval(() => {
    setSecondsLeft(secondsLeft < 0 ? 0 : secondsLeft - 1);
    _helper__WEBPACK_IMPORTED_MODULE_3__["default"].saveSecondsLeft(secondsLeft < 0 ? 0 : secondsLeft - 1);
  }, started && paused === false && secondsLeft >= 0 && finalStatus === '' ? 1000 : null); // Pause the timer.

  const pause = () => {
    setPaused(true);
  }; // Resume the timer.


  const resume = () => {
    setPaused(false);
  };

  return wp.element.createElement("div", {
    className: "block-timer"
  }, wp.element.createElement("div", null, wp.element.createElement("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Redux Challenge', redux_templates.i18n)), wp.element.createElement("p", null, wp.element.createElement("span", null, _helper__WEBPACK_IMPORTED_MODULE_3__["default"].getFormatted(secondsLeft)), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(' remaining', redux_templates.i18n))), wp.element.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('caret-icon', {
      'closed': expanded
    }),
    onClick: () => setChallengeListExpanded(!expanded)
  }, wp.element.createElement("i", {
    className: "fa fa-caret-down"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setChallengeListExpanded = _dispatch.setChallengeListExpanded;

  return {
    setChallengeListExpanded
  };
}), withSelect(select => {
  const _select = select('redux-templates/sectionslist'),
        getChallengeOpen = _select.getChallengeOpen,
        getChallengeFinalStatus = _select.getChallengeFinalStatus,
        getChallengeListExpanded = _select.getChallengeListExpanded;

  return {
    isChallengeOpen: getChallengeOpen(),
    finalStatus: getChallengeFinalStatus(),
    expanded: getChallengeListExpanded()
  };
})])(ChallengeTimer));

/***/ }),

/***/ "./redux-templates/src/challenge/challenge-timer/style.scss":
/*!******************************************************************!*\
  !*** ./redux-templates/src/challenge/challenge-timer/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/challenge-timer/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/challenge/config.js":
/*!*************************************************!*\
  !*** ./redux-templates/src/challenge/config.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~redux-templates/modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _redux_templates_modal_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~redux-templates/modal-preview */ "./redux-templates/src/modal-preview/index.js");




const _dispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["dispatch"])('redux-templates/sectionslist'),
      setTourActiveButtonGroup = _dispatch.setTourActiveButtonGroup,
      setImportingTemplate = _dispatch.setImportingTemplate;

const _select = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])('redux-templates/sectionslist'),
      getPageData = _select.getPageData;



/* harmony default export */ __webpack_exports__["default"] = ({
  initialSecondsLeft: 300,
  beginningStep: -1,
  totalStep: 7,
  list: [{
    selector: '[data-tut="tour__navigation"]',
    caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Template Type Tabs', redux_templates.i18n),
    offset: {
      x: 0,
      y: 50,
      arrowX: 0,
      arrowY: -20
    },
    box: {
      width: 250
    },
    direction: 'top',
    content: () => wp.element.createElement("div", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('These are the different types of templates we have.', redux_templates.i18n), wp.element.createElement("ul", null, wp.element.createElement("li", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Sections', redux_templates.i18n)), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(' are the building blocks of a page. Each "row" of content on a page we consider a section.', redux_templates.i18n)), wp.element.createElement("li", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pages', redux_templates.i18n)), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(' are, you guessed it, a group of multiple sections making up a page.', redux_templates.i18n)), wp.element.createElement("li", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Template Kits', redux_templates.i18n)), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(' are groups of pages that all follow a style or theme.', redux_templates.i18n)), wp.element.createElement("li", null, wp.element.createElement("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Saved', redux_templates.i18n)), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(' are reusable blocks that you may have previously saved for later.', redux_templates.i18n))))
  }, {
    selector: '[data-tut="tour__filtering"]',
    caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Sidebar', redux_templates.i18n),
    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This area is where you can search and filter to find the right kind of templates you want.', redux_templates.i18n),
    direction: 'left',
    offset: {
      x: 40,
      y: 10,
      arrowX: -20,
      arrowY: 0
    },
    box: {
      width: 250,
      height: 130
    },
    action: () => {
      react_scroll__WEBPACK_IMPORTED_MODULE_1__["animateScroll"].scrollToTop({
        containerId: 'redux-templates-collection-modal-sidebar',
        duration: 0
      });
    }
  }, {
    selector: '[data-tut="tour__filtering"]',
    caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Plugins Filter', redux_templates.i18n),
    offset: {
      x: 40,
      y: 10,
      arrowX: -20,
      arrowY: 0
    },
    box: {
      width: 290,
      height: 185
    },
    content: () => wp.element.createElement("div", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Some templates require certain plugins. You can filter or select those templates. Hint, if the text is a ', redux_templates.i18n), wp.element.createElement("a", {
      href: "#",
      className: "missing-dependency"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('little orange', redux_templates.i18n)), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])(', you don`t have that plugin installed yet, but don`t worry. Redux will help you with that too.', redux_templates.i18n)),
    action: () => {
      react_scroll__WEBPACK_IMPORTED_MODULE_1__["animateScroll"].scrollToBottom({
        containerId: 'redux-templates-collection-modal-sidebar',
        duration: 0
      });
    },
    direction: 'left'
  }, {
    selector: '[data-tut="tour__main_body"]',
    caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Templates List', redux_templates.i18n),
    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This area is where the templates will show up that match the filters you\'ve selected. You can click on many of them to preview or import them.', redux_templates.i18n),
    direction: 'left',
    offset: {
      x: 40,
      y: 10,
      arrowX: -20,
      arrowY: 0
    },
    box: {
      width: 250,
      height: 150
    },
    action: () => {
      react_scroll__WEBPACK_IMPORTED_MODULE_1__["animateScroll"].scrollToTop({
        containerId: 'redux-templates-collection-modal-sidebar',
        duration: 0
      });
      setTourActiveButtonGroup(null);
    }
  }, {
    selector: '#modalContainer .redux-templates-single-item-inner:first-child',
    caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Template Hover', redux_templates.i18n),
    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('When you hover over a template you can see via icons what plugins are required for this template. You can then choose to Preview or Import a design.', redux_templates.i18n),
    action: () => {
      _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_3__["ModalManager"].closeCustomizer();
      const pageData = getPageData();

      if (pageData && pageData.length > 0) {
        setTourActiveButtonGroup(pageData[0]);
      }
    },
    direction: 'left',
    offset: {
      x: 40,
      y: 10,
      arrowX: -20,
      arrowY: 0
    },
    box: {
      width: 240,
      height: 169
    }
  }, {
    selector: '.wp-full-overlay-sidebar',
    caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Preview Dialog', redux_templates.i18n),
    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('This is the preview dialog. It gives more details about the template and helps you to see what you could expect the templates to look like.', redux_templates.i18n),
    action: () => {
      setTourActiveButtonGroup(null);
      setImportingTemplate(null);
      const pageData = getPageData();

      if (pageData && pageData.length > 0) {
        _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_3__["ModalManager"].openCustomizer(wp.element.createElement(_redux_templates_modal_preview__WEBPACK_IMPORTED_MODULE_4__["default"], {
          startIndex: 0,
          currentPageData: pageData
        }));
      }
    },
    position: 'center'
  }, {
    selector: '.redux-templates-import-wizard-wrapper',
    caption: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Import Wizard', redux_templates.i18n),
    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('When you click to import a template, sometimes you will be missing one of the required plugins. Redux will do its best to help you install what\'s missing. If some of them are premium plugins, you will be provided details on where you can get them.', redux_templates.i18n),
    direction: 'right',
    offset: {
      x: 0,
      y: 85,
      arrowX: 40,
      arrowY: 25
    },
    box: {
      width: 250,
      height: 169
    },
    action: () => {
      // if (ModalManager.isModalOpened() === false) ModalManager.open(<LibraryModal autoTourStart={false} />)
      if (document.getElementsByClassName('tooltipster-box')) document.getElementsByClassName('tooltipster-box')[0].style.display = 'none';
      _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_3__["ModalManager"].show();
      _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_3__["ModalManager"].closeCustomizer();
      const pageData = getPageData();
      if (pageData && pageData.length > 0) setImportingTemplate(pageData[0]);
      setTimeout(() => {
        const openedPanel = document.getElementsByClassName('redux-templates-modal-wrapper');

        if (openedPanel && openedPanel.length > 0) {
          let openPanel = openedPanel[0].getBoundingClientRect();
          let box = {
            top: openPanel.top + 90,
            left: openPanel.left - 320
          };
          Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["dispatch"])('redux-templates/sectionslist').setChallengeTooltipRect(box);
        }

        if (document.getElementsByClassName('tooltipster-box')) document.getElementsByClassName('tooltipster-box')[0].style.display = 'block';
      }, 0);
    }
  }]
});

/***/ }),

/***/ "./redux-templates/src/challenge/final-templates/congrats.js":
/*!*******************************************************************!*\
  !*** ./redux-templates/src/challenge/final-templates/congrats.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/final-templates/congrats.js'");

/***/ }),

/***/ "./redux-templates/src/challenge/final-templates/contact.js":
/*!******************************************************************!*\
  !*** ./redux-templates/src/challenge/final-templates/contact.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/final-templates/contact.js'");

/***/ }),

/***/ "./redux-templates/src/challenge/final-templates/index.js":
/*!****************************************************************!*\
  !*** ./redux-templates/src/challenge/final-templates/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChallengeFinalTemplate; });
/* harmony import */ var _congrats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./congrats */ "./redux-templates/src/challenge/final-templates/congrats.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./redux-templates/src/challenge/final-templates/contact.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/challenge/final-templates/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



function ChallengeFinalTemplate({
  finalStatus
}) {
  return wp.element.createElement(_congrats__WEBPACK_IMPORTED_MODULE_0__["default"], null); // TODO - When feedback is working, uncomment this.
  // if (finalStatus === 'success') return <ChallengeCongrats />
  // return <ChallengeContact />;
}

/***/ }),

/***/ "./redux-templates/src/challenge/final-templates/style.scss":
/*!******************************************************************!*\
  !*** ./redux-templates/src/challenge/final-templates/style.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/final-templates/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/challenge/helper.js":
/*!*************************************************!*\
  !*** ./redux-templates/src/challenge/helper.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./redux-templates/src/challenge/config.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Get number of seconds left to complete the Challenge.
   */
  getSecondsLeft: function () {
    var secondsLeft = localStorage.getItem('reduxChallengeSecondsLeft');
    secondsLeft = isNaN(secondsLeft) || secondsLeft == null ? _config__WEBPACK_IMPORTED_MODULE_1__["default"].initialSecondsLeft : parseInt(secondsLeft, 10);
    return secondsLeft;
  },

  /**
   * Save number of seconds left to complete the Challenge.
   */
  saveSecondsLeft: function (secondsLeft) {
    localStorage.setItem('reduxChallengeSecondsLeft', secondsLeft);
  },

  /**
   * Get 'minutes' part of timer display.
   */
  getMinutesFormatted: function (secondsLeft) {
    return Math.floor(secondsLeft / 60);
  },

  /**
   * Get 'seconds' part of timer display.
   */
  getSecondsFormatted: function (secondsLeft) {
    return secondsLeft % 60;
  },

  /**
   * Get formatted timer for display.
   */
  getFormatted: function (secondsLeft) {
    if (secondsLeft < 0) return '0:00';
    var timerMinutes = this.getMinutesFormatted(secondsLeft);
    var timerSeconds = this.getSecondsFormatted(secondsLeft);
    return timerMinutes + (9 < timerSeconds ? ':' : ':0') + timerSeconds;
  },

  /**
   * Get Localized time string for display
   */
  getLocalizedDuration: function () {
    let secondsLeft = this.getSecondsLeft();
    secondsLeft = _config__WEBPACK_IMPORTED_MODULE_1__["default"].initialSecondsLeft - secondsLeft;
    var timerMinutes = this.getMinutesFormatted(secondsLeft);
    var timerSeconds = this.getSecondsFormatted(secondsLeft);
    const minutesString = timerMinutes ? timerMinutes + ' ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('minutes', redux_templates.i18n) + ' ' : '';
    const secondsString = timerSeconds ? timerSeconds + ' ' + Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('seconds', redux_templates.i18n) : '';
    return minutesString + secondsString;
  },

  /**
   * Get last saved step.
   */
  loadStep: function () {
    var step = localStorage.getItem('reduxChallengeStep');
    step = isNaN(step) ? -1 : parseInt(step, 10);
    return step;
  },

  /**
   * Save Challenge step.
   */
  saveStep: function (step) {
    localStorage.setItem('reduxChallengeStep', step);
  }
});

/***/ }),

/***/ "./redux-templates/src/challenge/index.js":
/*!************************************************!*\
  !*** ./redux-templates/src/challenge/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/challenge/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./redux-templates/src/challenge/helper.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./redux-templates/src/challenge/config.js");
/* harmony import */ var _challenge_list_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./challenge-list-block */ "./redux-templates/src/challenge/challenge-list-block/index.js");
/* harmony import */ var _challenge_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./challenge-timer */ "./redux-templates/src/challenge/challenge-timer/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */






const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;

function ReduxChallenge(props) {
  const autoChallengeStart = props.autoChallengeStart;
  const isOpen = props.isOpen,
        challengeStep = props.challengeStep,
        setChallengeStep = props.setChallengeStep,
        listExpanded = props.listExpanded;

  const _useState = useState('redux-templates-challenge'),
        _useState2 = _slicedToArray(_useState, 2),
        challengeClassname = _useState2[0],
        setChallengeClassname = _useState2[1];

  const _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        started = _useState4[0],
        setStarted = _useState4[1];

  useEffect(() => {
    if (challengeStep !== _config__WEBPACK_IMPORTED_MODULE_3__["default"].beginningStep && isOpen) {
      setChallengeClassname('redux-templates-challenge started');
      setStarted(true);
    }
  }, [challengeStep, isOpen]);

  const onStarted = () => {
    setChallengeStep(0);
    setStarted(true);
  };

  return wp.element.createElement("div", {
    className: challengeClassname,
    style: {
      display: isOpen ? 'block' : 'none'
    }
  }, listExpanded && wp.element.createElement(_challenge_list_block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onStarted: onStarted
  }), wp.element.createElement(_challenge_timer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    started: started
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setChallengeStep = _dispatch.setChallengeStep;

  return {
    setChallengeStep
  };
}), withSelect(select => {
  const _select = select('redux-templates/sectionslist'),
        getChallengeStep = _select.getChallengeStep,
        getChallengeOpen = _select.getChallengeOpen,
        getChallengeListExpanded = _select.getChallengeListExpanded;

  return {
    challengeStep: getChallengeStep(),
    isOpen: getChallengeOpen(),
    listExpanded: getChallengeListExpanded()
  };
})])(ReduxChallenge));

/***/ }),

/***/ "./redux-templates/src/challenge/style.scss":
/*!**************************************************!*\
  !*** ./redux-templates/src/challenge/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/challenge/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/challenge/tooltip/ChallengeDot.js":
/*!***************************************************************!*\
  !*** ./redux-templates/src/challenge/tooltip/ChallengeDot.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/challenge/tooltip/ChallengeDot.js'");

/***/ }),

/***/ "./redux-templates/src/challenge/tooltip/TooltipBox.js":
/*!*************************************************************!*\
  !*** ./redux-templates/src/challenge/tooltip/TooltipBox.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~redux-templates/modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./redux-templates/src/challenge/config.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper */ "./redux-templates/src/challenge/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;



const ARROW_BOX = 30;
const DEFAULT_BOX_WIDTH = 250;
const DEFAULT_BOX_HEIGHT = 300;
const DEFAULT_OFFSET_X = 0;
const DEFAULT_OFFSET_Y = 20;
const DEFAULT_ARROW_OFFSET_X = 20;
const DEFAULT_ARROW_OFFSET_Y = 20;

function TooltipBox(props) {
  const challengeStep = props.challengeStep,
        tooltipRect = props.tooltipRect,
        isOpen = props.isOpen,
        setChallengeStep = props.setChallengeStep,
        setChallengeFinalStatus = props.setChallengeFinalStatus,
        setChallengePassed = props.setChallengePassed,
        setChallengeListExpanded = props.setChallengeListExpanded,
        setImportingTemplate = props.setImportingTemplate;

  const _useState = useState({}),
        _useState2 = _slicedToArray(_useState, 2),
        style = _useState2[0],
        setStyle = _useState2[1];

  const _useState3 = useState({}),
        _useState4 = _slicedToArray(_useState3, 2),
        arrowStyle = _useState4[0],
        setArrowStyle = _useState4[1];

  const _useState5 = useState(''),
        _useState6 = _slicedToArray(_useState5, 2),
        content = _useState6[0],
        setContent = _useState6[1];

  const _useState7 = useState(''),
        _useState8 = _slicedToArray(_useState7, 2),
        wrapperClassname = _useState8[0],
        setWrapperClassname = _useState8[1];

  const isVisible = () => {
    return (challengeStep >= 0 || challengeStep > _config__WEBPACK_IMPORTED_MODULE_2__["default"].totalStep) && isOpen;
  };

  const calculateWithStepInformation = () => {
    const stepInformation = _config__WEBPACK_IMPORTED_MODULE_2__["default"].list[challengeStep];
    const boxWidth = stepInformation.box && stepInformation.box.width ? stepInformation.box.width : DEFAULT_BOX_WIDTH;
    const boxHeight = stepInformation.box && stepInformation.box.height ? stepInformation.box.height : DEFAULT_BOX_HEIGHT;
    const offsetX = stepInformation.offset ? stepInformation.offset.x : DEFAULT_OFFSET_X;
    const offsetY = stepInformation.offset ? stepInformation.offset.y : DEFAULT_OFFSET_Y;

    switch (stepInformation.direction) {
      case 'right':
        return [tooltipRect.left + offsetX, tooltipRect.top + offsetY - boxHeight / 2];

      case 'left':
        return [tooltipRect.left + offsetX, tooltipRect.top + offsetY - boxHeight / 2];

      case 'top':
        return [tooltipRect.left + offsetX - boxWidth / 2, tooltipRect.top + offsetY];

      case 'bottom':
        return [tooltipRect.left + offsetX - boxWidth / 2, tooltipRect.top - boxHeight + offsetY];

      default:
        return [tooltipRect.left + offsetX, tooltipRect.top + offsetY];
    }
  };

  const calculateArrowOffset = () => {
    const stepInformation = _config__WEBPACK_IMPORTED_MODULE_2__["default"].list[challengeStep];
    const boxWidth = stepInformation.box && stepInformation.box.width ? stepInformation.box.width : DEFAULT_BOX_WIDTH;
    const boxHeight = stepInformation.box && stepInformation.box.height ? stepInformation.box.height : DEFAULT_BOX_HEIGHT;
    const arrowOffsetX = stepInformation.offset && isNaN(stepInformation.offset.arrowX) === false ? stepInformation.offset.arrowX : DEFAULT_ARROW_OFFSET_X;
    const arrowOffsetY = stepInformation.offset && isNaN(stepInformation.offset.arrowY) === false ? stepInformation.offset.arrowY : DEFAULT_ARROW_OFFSET_Y;

    switch (stepInformation.direction) {
      case 'top':
        return [boxWidth / 2 + arrowOffsetX, arrowOffsetY];

      case 'bottom':
        return [boxWidth / 2 + arrowOffsetX, arrowOffsetY];

      case 'left':
        return [arrowOffsetX, arrowOffsetY + boxHeight / 2 - ARROW_BOX / 2];

      case 'right':
        return [boxWidth + arrowOffsetX, arrowOffsetY + boxHeight / 2 - ARROW_BOX / 2];

      default:
        return [arrowOffsetX, arrowOffsetY];
    }
  }; // adjust position and content upon steps change


  useEffect(() => {
    if (isVisible() && tooltipRect) {
      const stepInformation = _config__WEBPACK_IMPORTED_MODULE_2__["default"].list[challengeStep];

      if (stepInformation) {
        const _calculateWithStepInf = calculateWithStepInformation(),
              _calculateWithStepInf2 = _slicedToArray(_calculateWithStepInf, 2),
              boxLeft = _calculateWithStepInf2[0],
              boxTop = _calculateWithStepInf2[1];

        const _calculateArrowOffset = calculateArrowOffset(),
              _calculateArrowOffset2 = _slicedToArray(_calculateArrowOffset, 2),
              arrowOffsetX = _calculateArrowOffset2[0],
              arrowOffsetY = _calculateArrowOffset2[1];

        setStyle(_objectSpread(_objectSpread({}, style), {}, {
          display: 'block',
          width: stepInformation.box ? stepInformation.box.width : DEFAULT_BOX_WIDTH,
          left: boxLeft,
          top: boxTop //tooltipRect.top + offsetY + PADDING_Y + ARROW_HEIGHT

        }));
        setContent(stepInformation.content);
        setArrowStyle(_objectSpread(_objectSpread({}, arrowStyle), {}, {
          display: 'block',
          left: boxLeft + arrowOffsetX,
          // calculateLeftWithStepInformation(),
          top: boxTop + arrowOffsetY // tooltipRect.top + offsetY + PADDING_Y

        }));
      }
    } else {
      setStyle(_objectSpread(_objectSpread({}, style), {}, {
        display: 'none'
      }));
      setArrowStyle(_objectSpread(_objectSpread({}, arrowStyle), {}, {
        display: 'none'
      }));
    }
  }, [JSON.stringify(tooltipRect), challengeStep, isOpen]); // update wrapper class name based on step change

  useEffect(() => {
    const stepInformation = _config__WEBPACK_IMPORTED_MODULE_2__["default"].list[challengeStep];

    if (stepInformation) {
      switch (stepInformation.direction) {
        case 'top':
          setWrapperClassname('challenge-tooltip tooltipster-sidetip tooltipster-top');
          break;

        case 'bottom':
          setWrapperClassname('challenge-tooltip tooltipster-sidetip tooltipster-bottom');
          break;

        case 'left':
          setWrapperClassname('challenge-tooltip tooltipster-sidetip tooltipster-left');
          break;

        case 'right':
          setWrapperClassname('challenge-tooltip tooltipster-sidetip tooltipster-right');
          break;

        default:
          setWrapperClassname('challenge-tooltip tooltipster-sidetip tooltipster-left');
      }
    }
  }, [challengeStep]);

  const toNextStep = () => {
    if (challengeStep === _config__WEBPACK_IMPORTED_MODULE_2__["default"].totalStep - 1) {
      // finalize challenge
      _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_1__["ModalManager"].show();
      setChallengeFinalStatus(_helper__WEBPACK_IMPORTED_MODULE_3__["default"].getSecondsLeft() > 0 ? 'success' : 'contact');
      setChallengeStep(_config__WEBPACK_IMPORTED_MODULE_2__["default"].beginningStep);
      setChallengePassed(true);
      setChallengeListExpanded(true);
      setImportingTemplate(null);
    } else setChallengeStep(challengeStep + 1);
  };

  return wp.element.createElement("div", {
    className: wrapperClassname
  }, wp.element.createElement("div", {
    className: "tooltipster-box",
    style: style
  }, content, wp.element.createElement("div", {
    className: "btn-row"
  }, wp.element.createElement("button", {
    className: "challenge-done-btn",
    onClick: toNextStep
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Next', redux_templates.i18n)))), wp.element.createElement("div", {
    className: "tooltipster-arrow",
    style: arrowStyle
  }, wp.element.createElement("div", {
    className: "tooltipster-arrow-uncropped"
  }, wp.element.createElement("div", {
    className: "tooltipster-arrow-border"
  }), wp.element.createElement("div", {
    className: "tooltipster-arrow-background"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setChallengeStep = _dispatch.setChallengeStep,
        setChallengeFinalStatus = _dispatch.setChallengeFinalStatus,
        setChallengePassed = _dispatch.setChallengePassed,
        setChallengeListExpanded = _dispatch.setChallengeListExpanded,
        setImportingTemplate = _dispatch.setImportingTemplate;

  return {
    setChallengeStep,
    setChallengeFinalStatus,
    setChallengePassed,
    setChallengeListExpanded,
    setImportingTemplate
  };
}), withSelect((select, props) => {
  const _select = select('redux-templates/sectionslist'),
        getChallengeTooltipRect = _select.getChallengeTooltipRect,
        getChallengeOpen = _select.getChallengeOpen,
        getChallengeStep = _select.getChallengeStep,
        getChallengeFinalStatus = _select.getChallengeFinalStatus;

  return {
    tooltipRect: getChallengeTooltipRect(),
    isOpen: getChallengeOpen(),
    challengeStep: getChallengeStep(),
    finalStatus: getChallengeFinalStatus()
  };
})])(TooltipBox));

/***/ }),

/***/ "./redux-templates/src/components/button-group/index.js":
/*!**************************************************************!*\
  !*** ./redux-templates/src/components/button-group/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/components/button-group/index.js'");

/***/ }),

/***/ "./redux-templates/src/components/error-notice/index.js":
/*!**************************************************************!*\
  !*** ./redux-templates/src/components/error-notice/index.js ***!
  \**************************************************************/
/*! exports provided: ErrorNotice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorNotice", function() { return ErrorNotice; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/components/error-notice/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);





function ErrorNotice(props) {
  const discardAllErrorMessages = props.discardAllErrorMessages,
        errorMessages = props.errorMessages;
  return wp.element.createElement("div", {
    className: "redux-templates-error-notice"
  }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Notice"], {
    status: "error",
    onRemove: discardAllErrorMessages
  }, wp.element.createElement("p", null, errorMessages.join(', '))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        discardAllErrorMessages = _dispatch.discardAllErrorMessages;

  return {
    discardAllErrorMessages
  };
})])(ErrorNotice));

/***/ }),

/***/ "./redux-templates/src/components/error-notice/style.scss":
/*!****************************************************************!*\
  !*** ./redux-templates/src/components/error-notice/style.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/error-notice/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/components/fab-wrapper/config.js":
/*!**************************************************************!*\
  !*** ./redux-templates/src/components/fab-wrapper/config.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/components/fab-wrapper/config.js'");

/***/ }),

/***/ "./redux-templates/src/components/fab-wrapper/index.js":
/*!*************************************************************!*\
  !*** ./redux-templates/src/components/fab-wrapper/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FabWrapper; });
/* harmony import */ var react_tiny_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-tiny-fab */ "./node_modules/react-tiny-fab/dist/fab.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./redux-templates/src/components/fab-wrapper/config.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./redux-templates/src/components/fab-wrapper/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_templates_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~redux-templates/icons */ "./redux-templates/src/icons/index.js");
/* harmony import */ var _redux_templates_modal_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~redux-templates/modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _redux_templates_modal_feedback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~redux-templates/modal-feedback */ "./redux-templates/src/modal-feedback/index.js");







const schema = {
  type: 'object',
  properties: {
    comment: {
      type: 'string'
    },
    agreeToContactFurther: {
      type: 'boolean',
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Yes, I give Redux permission to contact me for any follow up questions.', redux_templates.i18n)
    }
  }
};
const uiSchema = {
  'comment': {
    'ui:widget': 'textarea',
    'ui:options': {
      label: false
    }
  }
};
function FabWrapper() {
  const mainButtonStyles = _config__WEBPACK_IMPORTED_MODULE_1__["default"].mainButtonStyles,
        actionButtonStyles = _config__WEBPACK_IMPORTED_MODULE_1__["default"].actionButtonStyles,
        position = _config__WEBPACK_IMPORTED_MODULE_1__["default"].position,
        event = _config__WEBPACK_IMPORTED_MODULE_1__["default"].event,
        alwaysShowTitle = _config__WEBPACK_IMPORTED_MODULE_1__["default"].alwaysShowTitle;
  return wp.element.createElement(react_tiny_fab__WEBPACK_IMPORTED_MODULE_0__["Fab"], {
    mainButtonStyles: mainButtonStyles,
    position: position,
    icon: _redux_templates_icons__WEBPACK_IMPORTED_MODULE_4__["ReduxTemplatesIcon"](),
    event: event // onClick={testing}
    ,
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('See Quick Links', redux_templates.i18n)
  }, wp.element.createElement(react_tiny_fab__WEBPACK_IMPORTED_MODULE_0__["Action"], {
    style: actionButtonStyles,
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Get Support', redux_templates.i18n),
    onClick: e => {
      window.open('https://wordpress.org/support/plugin/redux-framework/#new-topic-0', '_blank');
    }
  }, wp.element.createElement("i", {
    className: "far fa-question-circle "
  })), wp.element.createElement(react_tiny_fab__WEBPACK_IMPORTED_MODULE_0__["Action"], {
    style: actionButtonStyles,
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Join our Community', redux_templates.i18n),
    onClick: e => {
      window.open('https://www.facebook.com/groups/reduxframework', '_blank');
    }
  }, wp.element.createElement("i", {
    className: "fa fa-comments"
  })), redux_templates.mokama === '1' && wp.element.createElement(react_tiny_fab__WEBPACK_IMPORTED_MODULE_0__["Action"], {
    style: actionButtonStyles,
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Visit our Website', redux_templates.i18n),
    onClick: e => {
      window.open(redux_templates.u + 'tinyfab', '_blank');
    }
  }, wp.element.createElement("i", {
    className: "fas fa-external-link-alt"
  })), redux_templates.mokama !== '1' && wp.element.createElement(react_tiny_fab__WEBPACK_IMPORTED_MODULE_0__["Action"], {
    style: {
      backgroundColor: '#00a7e5'
    },
    text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Upgrade to Redux Pro', redux_templates.i18n),
    onClick: e => {
      window.open(redux_templates.u + 'help_bubble', '_blank');
    }
  }, wp.element.createElement("i", {
    className: "fa fa-star"
  })));
}

/***/ }),

/***/ "./redux-templates/src/components/fab-wrapper/styles.scss":
/*!****************************************************************!*\
  !*** ./redux-templates/src/components/fab-wrapper/styles.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/fab-wrapper/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/components/tab-header/index.js":
/*!************************************************************!*\
  !*** ./redux-templates/src/components/tab-header/index.js ***!
  \************************************************************/
/*! exports provided: TabHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeader", function() { return TabHeader; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _redux_templates_challenge_tooltip_ChallengeDot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~redux-templates/challenge/tooltip/ChallengeDot */ "./redux-templates/src/challenge/tooltip/ChallengeDot.js");





function TabHeader(props) {
  const activeItemType = props.activeItemType,
        searchContext = props.searchContext,
        activeCollection = props.activeCollection,
        isChallengeOpen = props.isChallengeOpen;
  const setActiveItemType = props.setActiveItemType,
        setSearchContext = props.setSearchContext,
        setChallengeOpen = props.setChallengeOpen,
        clearSearch = props.clearSearch;

  const isActive = itemType => {
    return activeItemType === itemType ? 'active' : '';
  };

  const onSearchContextUpdate = e => {
    if (activeItemType !== 'saved') setSearchContext(e.target.value);
  };

  const changeTab = tabName => {
    if (document.getElementById('modalContent')) document.getElementById('modalContent').scrollTop = 0;
    setActiveItemType(tabName);
  };

  const closeModal = () => {
    if (isChallengeOpen === false) {
      _modal_manager__WEBPACK_IMPORTED_MODULE_3__["ModalManager"].close();
    }
  };

  return wp.element.createElement("div", {
    className: "redux-templates-builder-modal-header"
  }, wp.element.createElement("div", {
    className: "template-search-box"
  }, (activeItemType !== 'collection' || activeCollection === null) && activeItemType !== 'saved' && wp.element.createElement("div", null, wp.element.createElement("input", {
    type: "text",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for a template', redux_templates.i18n),
    className: "form-control",
    value: searchContext,
    onChange: onSearchContextUpdate
  }), wp.element.createElement(_redux_templates_challenge_tooltip_ChallengeDot__WEBPACK_IMPORTED_MODULE_4__["default"], {
    step: 1
  }), wp.element.createElement("i", {
    className: "fas fa-search"
  }))), wp.element.createElement("div", {
    className: "redux-templates-template-list-header",
    "data-tut": "tour__navigation"
  }, wp.element.createElement("button", {
    className: isActive('section'),
    onClick: e => changeTab('section')
  }, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Sections', redux_templates.i18n), " "), wp.element.createElement("button", {
    className: isActive('page'),
    onClick: e => changeTab('page')
  }, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Templates', redux_templates.i18n), " "), wp.element.createElement("button", {
    className: isActive('collection'),
    onClick: e => changeTab('collection')
  }, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Template Kits', redux_templates.i18n), " "), wp.element.createElement("button", {
    className: isActive('saved'),
    onClick: e => changeTab('saved')
  }, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Saved', redux_templates.i18n), " "), wp.element.createElement(_redux_templates_challenge_tooltip_ChallengeDot__WEBPACK_IMPORTED_MODULE_4__["default"], {
    step: 0
  }), wp.element.createElement("button", {
    className: "redux-templates-builder-close-modal",
    onClick: closeModal
  }, wp.element.createElement("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    role: "img",
    "aria-hidden": "true",
    focusable: "false"
  }, wp.element.createElement("path", {
    d: "M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"
  })))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setActiveItemType = _dispatch.setActiveItemType,
        setSearchContext = _dispatch.setSearchContext,
        clearSearch = _dispatch.clearSearch;

  return {
    setActiveItemType,
    setSearchContext,
    clearSearch
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])((select, props) => {
  const _select = select('redux-templates/sectionslist'),
        getActiveItemType = _select.getActiveItemType,
        getSearchContext = _select.getSearchContext,
        getActiveCollection = _select.getActiveCollection,
        getChallengeOpen = _select.getChallengeOpen;

  return {
    activeItemType: getActiveItemType(),
    searchContext: getSearchContext(),
    activeCollection: getActiveCollection(),
    isChallengeOpen: getChallengeOpen()
  };
})])(TabHeader));

/***/ }),

/***/ "./redux-templates/src/components/template-change/index.js":
/*!*****************************************************************!*\
  !*** ./redux-templates/src/components/template-change/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
const compose = wp.compose.compose;
const withSelect = wp.data.withSelect;


function TemplateChange(props) {
  const template = props.template;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (template.includes('redux-templates_')) {
      document.body.className += ' redux-template';
    } else {
      document.querySelector('body').classList.remove('redux-template');
    }
  }, [template]);
  return wp.element.createElement("div", null);
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(select => {
  const _select = select('core/editor'),
        getEditedPostAttribute = _select.getEditedPostAttribute;

  return {
    template: getEditedPostAttribute('template')
  };
})])(TemplateChange));

/***/ }),

/***/ "./redux-templates/src/components/template-list-subheader/index.js":
/*!*************************************************************************!*\
  !*** ./redux-templates/src/components/template-list-subheader/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/components/template-list-subheader/index.js'");

/***/ }),

/***/ "./redux-templates/src/components/welcome-guide/images.js":
/*!****************************************************************!*\
  !*** ./redux-templates/src/components/welcome-guide/images.js ***!
  \****************************************************************/
/*! exports provided: GuideImage1, GuideImage2, GuideImage3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideImage1", function() { return GuideImage1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideImage2", function() { return GuideImage2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideImage3", function() { return GuideImage3; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * WordPress dependencies
 */

const GuideImage1 = props => wp.element.createElement(React.Fragment, null, wp.element.createElement("img", _extends({
  className: "redux-edit-post-welcome-guide__image redux-edit-post-welcome-guide__image__prm-np",
  alt: "",
  src: `${redux_templates.plugin}assets/img/welcome-guide-1.png`
}, props)));
const GuideImage2 = props => wp.element.createElement(React.Fragment, null, wp.element.createElement("img", _extends({
  className: "redux-edit-post-welcome-guide__image redux-edit-post-welcome-guide__image__prm-np",
  alt: "",
  src: `${redux_templates.plugin}assets/img/welcome-guide-2.gif`
}, props)));
const GuideImage3 = props => wp.element.createElement(React.Fragment, null, wp.element.createElement("img", _extends({
  className: "redux-edit-post-welcome-guide__image redux-edit-post-welcome-guide__image__prm-np",
  alt: "",
  src: `${redux_templates.plugin}assets/img/welcome-guide-3.png`
}, props)));

/***/ }),

/***/ "./redux-templates/src/components/welcome-guide/index.js":
/*!***************************************************************!*\
  !*** ./redux-templates/src/components/welcome-guide/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WelcomeGuide; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./redux-templates/src/components/welcome-guide/images.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/components/welcome-guide/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */
const useState = wp.element.useState;


const _wp = wp,
      apiFetch = _wp.apiFetch;

/**
 * Internal dependencies
 */



function WelcomeGuide() {
  const _useState = useState(true),
        _useState2 = _slicedToArray(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

  const isActive = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(select => select('core/edit-post').isFeatureActive('welcomeGuide'), []);

  if (isActive) {
    // Don't want to show during the WP guide.
    delete redux_templates.welcome; // In fact, we don't want to show it until the next page load!

    return null;
  }

  if (!isOpen || 'undefined' === typeof redux_templates.welcome) {
    return null;
  }

  return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Guide"], {
    className: "redux-edit-post-welcome-guide",
    contentLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Say hello to the Redux template library', redux_templates.i18n),
    onFinish: () => {
      setIsOpen(false);
      const options = {
        method: 'POST',
        path: 'redux/v1/templates/welcome/?uid=' + window.userSettings.uid
      };
      apiFetch(options).then(response => {}).catch(error => {});
    },
    pages: [{
      image: wp.element.createElement(_images__WEBPACK_IMPORTED_MODULE_3__["GuideImage1"], null),
      content: wp.element.createElement(React.Fragment, null, wp.element.createElement("h1", {
        className: "redux-edit-post-welcome-guide__heading"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Try the Redux Template Library', redux_templates.i18n)), wp.element.createElement("h3", {
        className: "redux-edit-post-welcome-guide__text"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Redux brings you over 1,000 importable templates and blocks that allow you to build Gutenberg powered pages and websites in minutes not days.', redux_templates.i18n)))
    }, {
      image: wp.element.createElement(_images__WEBPACK_IMPORTED_MODULE_3__["GuideImage2"], null),
      content: wp.element.createElement(React.Fragment, null, wp.element.createElement("h1", {
        className: "redux-edit-post-welcome-guide__heading"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Using the Template Library', redux_templates.i18n)), wp.element.createElement("h3", {
        className: "redux-edit-post-welcome-guide__text"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('To use the template library click on the library button then pick your favourite template and import! Redux allows you to import beautiful Gutenberg pages in seconds.', redux_templates.i18n)))
    }, {
      image: wp.element.createElement(_images__WEBPACK_IMPORTED_MODULE_3__["GuideImage3"], null),
      content: wp.element.createElement(React.Fragment, null, wp.element.createElement("h1", {
        className: "redux-edit-post-welcome-guide__heading"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Import 5 templates for free or go Pro!', redux_templates.i18n)), wp.element.createElement("h3", {
        className: "redux-edit-post-welcome-guide__text"
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Redux allows you 5 free imports or you can go Pro now and import unlimited templates for just $49/year (limited time only).', redux_templates.i18n), wp.element.createElement("br", null), wp.element.createElement("br", null), wp.element.createElement("center", null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ExternalLink"], {
        href: `${redux_templates.u}welcome-guide`
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Learn more at Redux.io', redux_templates.i18n)))))
    }]
  });
}

/***/ }),

/***/ "./redux-templates/src/components/welcome-guide/style.scss":
/*!*****************************************************************!*\
  !*** ./redux-templates/src/components/welcome-guide/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/components/welcome-guide/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/custom-css/editor.js":
/*!**************************************************!*\
  !*** ./redux-templates/src/custom-css/editor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * WordPress dependencies.
 */
const __ = wp.i18n.__;
const _wp$element = wp.element,
      Fragment = _wp$element.Fragment,
      useEffect = _wp$element.useEffect,
      useRef = _wp$element.useRef;

const CSSEditor = ({
  attributes,
  setAttributes,
  clientId
}) => {
  useEffect(() => {
    let classes = getClassName();

    if (attributes.customCSS) {
      const generatedCSS = attributes.customCSS.replace(/.ticss-[a-zA-Z0-9_-]*/g, 'selector');
      customCSSRef.current = generatedCSS;
    } else {
      customCSSRef.current = 'selector {\n}\n';
    }

    editorRef.current = wp.CodeMirror(document.getElementById('redux-css-editor'), {
      value: customCSSRef.current,
      autoCloseBrackets: true,
      continueComments: true,
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      lint: true,
      gutters: ['CodeMirror-lint-markers'],
      styleActiveLine: true,
      styleActiveSelected: true,
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
        'Alt-F': 'findPersistent',
        'Cmd-F': 'findPersistent'
      }
    });
    editorRef.current.on('change', () => {
      const regex = new RegExp('selector', 'g');
      const generatedCSS = editorRef.current.getValue().replace(regex, `.${classArRef.current}`);
      customCSSRef.current = generatedCSS;

      if ('selector {\n}\n'.replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')) {
        return setAttributes({
          customCSS: null
        });
      }

      setAttributes({
        customCSS: customCSSRef.current
      });
    });
  }, []);
  useEffect(() => {
    let classes = getClassName();
    setAttributes({
      hasCustomCSS: true,
      className: classes
    });
  }, [attributes]);

  const getClassName = () => {
    let classes;
    const uniqueId = clientId.substr(0, 8);

    if (null !== customCSSRef.current && 'selector {\n}\n'.replace(/\s+/g, '') === customCSSRef.current.replace(/\s+/g, '')) {
      return attributes.className;
    }

    if (attributes.className) {
      classes = attributes.className;

      if (!classes.includes('ticss-')) {
        classes = classes.split(' ');
        classes.push(`ticss-${uniqueId}`);
        classes = classes.join(' ');
      }

      classArRef.current = classes.split(' ');
      classArRef.current = classArRef.current.find(i => i.includes('ticss'));
    } else {
      classes = `ticss-${uniqueId}`;
      classArRef.current = classes;
    }

    return classes;
  };

  const editorRef = useRef(null);
  const customCSSRef = useRef(null);
  const classArRef = useRef(null);
  return wp.element.createElement(Fragment, null, wp.element.createElement("p", null, __('Add your custom CSS.')), wp.element.createElement("div", {
    id: "redux-css-editor",
    className: "redux-css-editor"
  }), wp.element.createElement("p", null, __('Use'), " ", wp.element.createElement("code", null, "selector"), " ", __('to target block wrapper.')), wp.element.createElement("p", null, __('')), wp.element.createElement("p", null, __('Example:')), wp.element.createElement("pre", {
    className: "redux-css-editor-help"
  }, 'selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}'), wp.element.createElement("p", null, __('You can also use other CSS syntax here, such as media queries.')));
};

/* harmony default export */ __webpack_exports__["default"] = (CSSEditor);

/***/ }),

/***/ "./redux-templates/src/custom-css/index.js":
/*!*************************************************!*\
  !*** ./redux-templates/src/custom-css/index.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/custom-css/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.js */ "./redux-templates/src/custom-css/editor.js");
/* harmony import */ var _inject_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inject-css.js */ "./redux-templates/src/custom-css/inject-css.js");
/* harmony import */ var _inject_css_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inject_css_js__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies.
 */
const _lodash = lodash,
      assign = _lodash.assign;
const __ = wp.i18n.__;
const hasBlockSupport = wp.blocks.hasBlockSupport;
const PanelBody = wp.components.PanelBody;
const createHigherOrderComponent = wp.compose.createHigherOrderComponent;

const _ref = wp.blockEditor || wp.editor,
      InspectorControls = _ref.InspectorControls;

const Fragment = wp.element.Fragment;
const _wp$hooks = wp.hooks,
      addFilter = _wp$hooks.addFilter,
      removeFilter = _wp$hooks.removeFilter;
/**
 * Internal dependencies.
 */





const addAttribute = settings => {
  if (hasBlockSupport(settings, 'customClassName', true)) {
    settings.attributes = assign(settings.attributes, {
      hasCustomCSS: {
        type: 'boolean',
        default: false
      },
      customCSS: {
        type: 'string',
        default: null
      }
    });
  }

  return settings;
};

const withInspectorControls = createHigherOrderComponent(BlockEdit => {
  return props => {
    const hasCustomClassName = hasBlockSupport(props.name, 'customClassName', true);

    if (hasCustomClassName && props.isSelected) {
      return wp.element.createElement(Fragment, null, wp.element.createElement(BlockEdit, props), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Custom CSS'),
        icon: wp.element.createElement("i", {
          className: 'fa fa'
        }),
        initialOpen: false
      }, wp.element.createElement(_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        clientId: props.clientId,
        setAttributes: props.setAttributes,
        attributes: props.attributes
      }))));
    }

    return wp.element.createElement(BlockEdit, props);
  };
}, 'withInspectorControl'); // Remove block-css fields.

removeFilter('blocks.registerBlockType', 'themeisle-custom-css/attribute');
removeFilter('editor.BlockEdit', 'themeisle-custom-css/with-inspector-controls');
addFilter('blocks.registerBlockType', 'redux-custom-css/attribute', addAttribute);
addFilter('editor.BlockEdit', 'redux-custom-css/with-inspector-controls', withInspectorControls);

/***/ }),

/***/ "./redux-templates/src/custom-css/inject-css.js":
/*!******************************************************!*\
  !*** ./redux-templates/src/custom-css/inject-css.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * WordPress dependencies.
 */
const __ = wp.i18n.__;
const parse = wp.blocks.parse;
const _wp$data = wp.data,
      select = _wp$data.select,
      subscribe = _wp$data.subscribe;

const addStyle = style => {
  let element = document.getElementById('redux-css-editor-styles');

  if (null === element) {
    element = document.createElement('style');
    element.setAttribute('type', 'text/css');
    element.setAttribute('id', 'redux-css-editor-styles');
    document.getElementsByTagName('head')[0].appendChild(element);
  }

  if (element.textContent === style) {
    return null;
  }

  return element.textContent = style;
};

let style = '';

const cycleBlocks = (blocks, reusableBlocks) => {
  blocks.forEach(block => {
    if (block.attributes.hasCustomCSS) {
      if (block.attributes.customCSS && null !== block.attributes.customCSS) {
        style += block.attributes.customCSS + '\n';
      }
    }

    if ('core/block' === block.name && null !== reusableBlocks) {
      let reBlocks = reusableBlocks.find(i => block.attributes.ref === i.id);

      if (reBlocks) {
        reBlocks = parse(reBlocks.content.raw);
        cycleBlocks(reBlocks, reusableBlocks);
      }

      ;
    }

    if (undefined !== block.innerBlocks && 0 < block.innerBlocks.length) {
      cycleBlocks(block.innerBlocks, reusableBlocks);
    }
  });
};

const subscribed = subscribe(() => {
  style = '';

  const _ref = select('core/block-editor') || select('core/editor'),
        getBlocks = _ref.getBlocks;

  const blocks = getBlocks();
  const reusableBlocks = select('core').getEntityRecords('postType', 'wp_block');
  cycleBlocks(blocks, reusableBlocks);
  addStyle(style);
});

/***/ }),

/***/ "./redux-templates/src/custom-css/style.scss":
/*!***************************************************!*\
  !*** ./redux-templates/src/custom-css/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/custom-css/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/editor.scss":
/*!*****************************************!*\
  !*** ./redux-templates/src/editor.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/editor.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/icons/images/acf-blocks.svg":
/*!*********************************************************!*\
  !*** ./redux-templates/src/icons/images/acf-blocks.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/acf-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/advanced-custom-fields.svg":
/*!*********************************************************************!*\
  !*** ./redux-templates/src/icons/images/advanced-custom-fields.svg ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/advanced-custom-fields.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/advanced-gutenberg-blocks.svg":
/*!************************************************************************!*\
  !*** ./redux-templates/src/icons/images/advanced-gutenberg-blocks.svg ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/advanced-gutenberg-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/atomic-blocks.svg":
/*!************************************************************!*\
  !*** ./redux-templates/src/icons/images/atomic-blocks.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/atomic-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/block-options.svg":
/*!************************************************************!*\
  !*** ./redux-templates/src/icons/images/block-options.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/block-options.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/block-slider.svg":
/*!***********************************************************!*\
  !*** ./redux-templates/src/icons/images/block-slider.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/block-slider.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/coblocks.svg":
/*!*******************************************************!*\
  !*** ./redux-templates/src/icons/images/coblocks.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/coblocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/creative-blocks.svg":
/*!**************************************************************!*\
  !*** ./redux-templates/src/icons/images/creative-blocks.svg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/creative-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/editorplus.svg":
/*!*********************************************************!*\
  !*** ./redux-templates/src/icons/images/editorplus.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/editorplus.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/elegant-blocks.svg":
/*!*************************************************************!*\
  !*** ./redux-templates/src/icons/images/elegant-blocks.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/elegant-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/enhanced-blocks.svg":
/*!**************************************************************!*\
  !*** ./redux-templates/src/icons/images/enhanced-blocks.svg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/enhanced-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/essential-blocks.svg":
/*!***************************************************************!*\
  !*** ./redux-templates/src/icons/images/essential-blocks.svg ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/essential-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/forms-gutenberg.svg":
/*!**************************************************************!*\
  !*** ./redux-templates/src/icons/images/forms-gutenberg.svg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/forms-gutenberg.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/getwid.svg":
/*!*****************************************************!*\
  !*** ./redux-templates/src/icons/images/getwid.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/getwid.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/ghostkit.svg":
/*!*******************************************************!*\
  !*** ./redux-templates/src/icons/images/ghostkit.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/ghostkit.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/guteblock.svg":
/*!********************************************************!*\
  !*** ./redux-templates/src/icons/images/guteblock.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/guteblock.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/gutentor.svg":
/*!*******************************************************!*\
  !*** ./redux-templates/src/icons/images/gutentor.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/gutentor.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/kadence-blocks.svg":
/*!*************************************************************!*\
  !*** ./redux-templates/src/icons/images/kadence-blocks.svg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/kadence-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/kioken-blocks.svg":
/*!************************************************************!*\
  !*** ./redux-templates/src/icons/images/kioken-blocks.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/kioken-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/otter-blocks.svg":
/*!***********************************************************!*\
  !*** ./redux-templates/src/icons/images/otter-blocks.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/otter-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/qodeblock.svg":
/*!********************************************************!*\
  !*** ./redux-templates/src/icons/images/qodeblock.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/qodeblock.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/qubely.svg":
/*!*****************************************************!*\
  !*** ./redux-templates/src/icons/images/qubely.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/qubely.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/snow-monkey-blocks.svg":
/*!*****************************************************************!*\
  !*** ./redux-templates/src/icons/images/snow-monkey-blocks.svg ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/snow-monkey-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/stackable-ultimate-gutenberg-blocks.svg":
/*!**********************************************************************************!*\
  !*** ./redux-templates/src/icons/images/stackable-ultimate-gutenberg-blocks.svg ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/stackable-ultimate-gutenberg-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/ultimate-addons-for-gutenberg.svg":
/*!****************************************************************************!*\
  !*** ./redux-templates/src/icons/images/ultimate-addons-for-gutenberg.svg ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/ultimate-addons-for-gutenberg.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/ultimate-blocks.svg":
/*!**************************************************************!*\
  !*** ./redux-templates/src/icons/images/ultimate-blocks.svg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/ultimate-blocks.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/ultimate-post.svg":
/*!************************************************************!*\
  !*** ./redux-templates/src/icons/images/ultimate-post.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/ultimate-post.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/images/wordpress.svg":
/*!********************************************************!*\
  !*** ./redux-templates/src/icons/images/wordpress.svg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/imagemin-webpack/src/imagemin-loader.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/icons/images/wordpress.svg'");

/***/ }),

/***/ "./redux-templates/src/icons/index.js":
/*!********************************************!*\
  !*** ./redux-templates/src/icons/index.js ***!
  \********************************************/
/*! exports provided: redux, acfblocks, atomicblocks, advancedcustomfields, advancedgutenbergblocks, blockoptions, blockslider, coblocks, creativeblocks, editorplus, elegantblocks, enhancedblocks, essentialblocks, formsgutenberg, getwid, ghostkit, guteblock, gutenbergblock, gutentor, kadenceblocks, kiokenblocks, otterblocks, qodeblock, qubely, snowmonkeyblocks, stackableultimategutenbergblocks, ultimateaddonsforgutenberg, ultimateblocks, ultimatepost, wordpress, colorizeIcon, thirdPartyIcon, ReduxTemplatesIcon, ReduxTemplatesIconColor, ReduxTemplatesIconColorize, core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redux", function() { return redux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acfblocks", function() { return acfblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atomicblocks", function() { return atomicblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedcustomfields", function() { return advancedcustomfields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedgutenbergblocks", function() { return advancedgutenbergblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockoptions", function() { return blockoptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockslider", function() { return blockslider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coblocks", function() { return coblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creativeblocks", function() { return creativeblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorplus", function() { return editorplus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elegantblocks", function() { return elegantblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enhancedblocks", function() { return enhancedblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "essentialblocks", function() { return essentialblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formsgutenberg", function() { return formsgutenberg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getwid", function() { return getwid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ghostkit", function() { return ghostkit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guteblock", function() { return guteblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gutenbergblock", function() { return gutenbergblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gutentor", function() { return gutentor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kadenceblocks", function() { return kadenceblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kiokenblocks", function() { return kiokenblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otterblocks", function() { return otterblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qodeblock", function() { return qodeblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qubely", function() { return qubely; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snowmonkeyblocks", function() { return snowmonkeyblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackableultimategutenbergblocks", function() { return stackableultimategutenbergblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ultimateaddonsforgutenberg", function() { return ultimateaddonsforgutenberg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ultimateblocks", function() { return ultimateblocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ultimatepost", function() { return ultimatepost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordpress", function() { return wordpress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorizeIcon", function() { return colorizeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thirdPartyIcon", function() { return thirdPartyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxTemplatesIcon", function() { return ReduxTemplatesIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxTemplatesIconColor", function() { return ReduxTemplatesIconColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxTemplatesIconColorize", function() { return ReduxTemplatesIconColorize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core", function() { return core; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/img/icon.svg */ "./redux-templates/assets/img/icon.svg");
/* harmony import */ var _images_acf_blocks_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/acf-blocks.svg */ "./redux-templates/src/icons/images/acf-blocks.svg");
/* harmony import */ var _images_atomic_blocks_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/atomic-blocks.svg */ "./redux-templates/src/icons/images/atomic-blocks.svg");
/* harmony import */ var _images_advanced_custom_fields_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/advanced-custom-fields.svg */ "./redux-templates/src/icons/images/advanced-custom-fields.svg");
/* harmony import */ var _images_advanced_gutenberg_blocks_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/advanced-gutenberg-blocks.svg */ "./redux-templates/src/icons/images/advanced-gutenberg-blocks.svg");
/* harmony import */ var _images_block_options_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/block-options.svg */ "./redux-templates/src/icons/images/block-options.svg");
/* harmony import */ var _images_block_slider_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/block-slider.svg */ "./redux-templates/src/icons/images/block-slider.svg");
/* harmony import */ var _images_coblocks_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/coblocks.svg */ "./redux-templates/src/icons/images/coblocks.svg");
/* harmony import */ var _images_creative_blocks_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/creative-blocks.svg */ "./redux-templates/src/icons/images/creative-blocks.svg");
/* harmony import */ var _images_editorplus_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/editorplus.svg */ "./redux-templates/src/icons/images/editorplus.svg");
/* harmony import */ var _images_elegant_blocks_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/elegant-blocks.svg */ "./redux-templates/src/icons/images/elegant-blocks.svg");
/* harmony import */ var _images_enhanced_blocks_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/enhanced-blocks.svg */ "./redux-templates/src/icons/images/enhanced-blocks.svg");
/* harmony import */ var _images_essential_blocks_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/essential-blocks.svg */ "./redux-templates/src/icons/images/essential-blocks.svg");
/* harmony import */ var _images_forms_gutenberg_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/forms-gutenberg.svg */ "./redux-templates/src/icons/images/forms-gutenberg.svg");
/* harmony import */ var _images_getwid_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/getwid.svg */ "./redux-templates/src/icons/images/getwid.svg");
/* harmony import */ var _images_ghostkit_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/ghostkit.svg */ "./redux-templates/src/icons/images/ghostkit.svg");
/* harmony import */ var _images_guteblock_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/guteblock.svg */ "./redux-templates/src/icons/images/guteblock.svg");
/* harmony import */ var _images_gutentor_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/gutentor.svg */ "./redux-templates/src/icons/images/gutentor.svg");
/* harmony import */ var _images_kadence_blocks_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/kadence-blocks.svg */ "./redux-templates/src/icons/images/kadence-blocks.svg");
/* harmony import */ var _images_kioken_blocks_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/kioken-blocks.svg */ "./redux-templates/src/icons/images/kioken-blocks.svg");
/* harmony import */ var _images_otter_blocks_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/otter-blocks.svg */ "./redux-templates/src/icons/images/otter-blocks.svg");
/* harmony import */ var _images_qodeblock_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/qodeblock.svg */ "./redux-templates/src/icons/images/qodeblock.svg");
/* harmony import */ var _images_qubely_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/qubely.svg */ "./redux-templates/src/icons/images/qubely.svg");
/* harmony import */ var _images_snow_monkey_blocks_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/snow-monkey-blocks.svg */ "./redux-templates/src/icons/images/snow-monkey-blocks.svg");
/* harmony import */ var _images_stackable_ultimate_gutenberg_blocks_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/stackable-ultimate-gutenberg-blocks.svg */ "./redux-templates/src/icons/images/stackable-ultimate-gutenberg-blocks.svg");
/* harmony import */ var _images_ultimate_addons_for_gutenberg_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/ultimate-addons-for-gutenberg.svg */ "./redux-templates/src/icons/images/ultimate-addons-for-gutenberg.svg");
/* harmony import */ var _images_ultimate_blocks_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/ultimate-blocks.svg */ "./redux-templates/src/icons/images/ultimate-blocks.svg");
/* harmony import */ var _images_ultimate_post_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/ultimate-post.svg */ "./redux-templates/src/icons/images/ultimate-post.svg");
/* harmony import */ var _images_wordpress_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/wordpress.svg */ "./redux-templates/src/icons/images/wordpress.svg");
/* harmony import */ var _assets_img_icon_color_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/img/icon-color.svg */ "./redux-templates/assets/img/icon-color.svg");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_33__);
/**
 * External dependencies
 */

















 // import SVGGutenbergBlock from './images/gutenberg-blocks.png'












 // export const gutentor = () => {
// 	return <SVGGutentorIcon width="20" height="20"/>
// }

const redux = () => {
  return wp.element.createElement(_assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "20",
    height: "20"
  });
};
const acfblocks = () => {
  return wp.element.createElement(_images_acf_blocks_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: "20",
    height: "20"
  });
};
const atomicblocks = () => {
  return wp.element.createElement(_images_atomic_blocks_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "20",
    height: "20"
  });
};
const advancedcustomfields = () => {
  return wp.element.createElement(_images_advanced_custom_fields_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "20",
    height: "20"
  });
};
const advancedgutenbergblocks = () => {
  return wp.element.createElement(_images_advanced_gutenberg_blocks_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "20",
    height: "20"
  });
};
const blockoptions = () => {
  return wp.element.createElement(_images_block_options_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: "20",
    height: "20"
  });
};
const blockslider = () => {
  return wp.element.createElement(_images_block_slider_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "20",
    height: "20"
  });
};
const coblocks = () => {
  return wp.element.createElement(_images_coblocks_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    width: "20",
    height: "20"
  });
};
const creativeblocks = () => {
  return wp.element.createElement(_images_creative_blocks_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
    width: "20",
    height: "20"
  });
};
const editorplus = () => {
  return wp.element.createElement(_images_editorplus_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    width: "20",
    height: "20"
  });
};
const elegantblocks = () => {
  return wp.element.createElement(_images_elegant_blocks_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
    width: "20",
    height: "20"
  });
};
const enhancedblocks = () => {
  return wp.element.createElement(_images_enhanced_blocks_svg__WEBPACK_IMPORTED_MODULE_12__["default"], {
    width: "20",
    height: "20"
  });
};
const essentialblocks = () => {
  return wp.element.createElement(_images_essential_blocks_svg__WEBPACK_IMPORTED_MODULE_13__["default"], {
    width: "20",
    height: "20"
  });
};
const formsgutenberg = () => {
  return wp.element.createElement(_images_forms_gutenberg_svg__WEBPACK_IMPORTED_MODULE_14__["default"], {
    width: "20",
    height: "20"
  });
};
const getwid = () => {
  return wp.element.createElement(_images_getwid_svg__WEBPACK_IMPORTED_MODULE_15__["default"], {
    width: "20",
    height: "20"
  });
};
const ghostkit = () => {
  return wp.element.createElement(_images_ghostkit_svg__WEBPACK_IMPORTED_MODULE_16__["default"], {
    width: "20",
    height: "20"
  });
};
const guteblock = () => {
  return wp.element.createElement(_images_guteblock_svg__WEBPACK_IMPORTED_MODULE_17__["default"], {
    width: "20",
    height: "20"
  });
};
const gutenbergblock = () => {
  return wp.element.createElement(SVGGutenbergBlock, {
    width: "20",
    height: "20"
  });
};
const gutentor = () => {
  return wp.element.createElement(_images_gutentor_svg__WEBPACK_IMPORTED_MODULE_18__["default"], {
    width: "20",
    height: "20"
  });
};
const kadenceblocks = () => {
  return wp.element.createElement(_images_kadence_blocks_svg__WEBPACK_IMPORTED_MODULE_19__["default"], {
    width: "20",
    height: "20"
  });
};
const kiokenblocks = () => {
  return wp.element.createElement(_images_kioken_blocks_svg__WEBPACK_IMPORTED_MODULE_20__["default"], {
    width: "20",
    height: "20"
  });
};
const otterblocks = () => {
  return wp.element.createElement(_images_otter_blocks_svg__WEBPACK_IMPORTED_MODULE_21__["default"], {
    width: "20",
    height: "20"
  });
};
const qodeblock = () => {
  return wp.element.createElement(_images_qodeblock_svg__WEBPACK_IMPORTED_MODULE_22__["default"], {
    width: "20",
    height: "20"
  });
};
const qubely = () => {
  return wp.element.createElement(_images_qubely_svg__WEBPACK_IMPORTED_MODULE_23__["default"], {
    width: "20",
    height: "20"
  });
};
const snowmonkeyblocks = () => {
  return wp.element.createElement(_images_snow_monkey_blocks_svg__WEBPACK_IMPORTED_MODULE_24__["default"], {
    width: "20",
    height: "20"
  });
};
const stackableultimategutenbergblocks = () => {
  return wp.element.createElement(_images_stackable_ultimate_gutenberg_blocks_svg__WEBPACK_IMPORTED_MODULE_25__["default"], {
    width: "20",
    height: "20"
  });
};
const ultimateaddonsforgutenberg = () => {
  return wp.element.createElement(_images_ultimate_addons_for_gutenberg_svg__WEBPACK_IMPORTED_MODULE_26__["default"], {
    width: "20",
    height: "20"
  });
};
const ultimateblocks = () => {
  return wp.element.createElement(_images_ultimate_blocks_svg__WEBPACK_IMPORTED_MODULE_27__["default"], {
    width: "20",
    height: "20"
  });
};
const ultimatepost = () => {
  return wp.element.createElement(_images_ultimate_post_svg__WEBPACK_IMPORTED_MODULE_28__["default"], {
    width: "20",
    height: "20"
  });
};
const wordpress = () => {
  return wp.element.createElement(_images_wordpress_svg__WEBPACK_IMPORTED_MODULE_29__["default"], {
    width: "20",
    height: "20"
  });
};

 //
//
// export const reqSvgs = require.context ( './images/third-party', true, /\.svg$/ )
//
// export const reqSvgsKeys = reqSvgs.keys()
//
// const iconLoader = (path) => import(path);
//
// export const icons = {
// 	'redux': iconLoader('../../assets/img/icon.svg'),
// 	'forms-gutenberg': iconLoader('./images/forms-gutenberg.svg')
// }
//
// export const svgs = reqSvgs
// 	.keys ()
// 	.reduce ( ( images, path ) => {
// 		images[path.replace('./', '').replace('.svg', '')] = reqSvgs ( path )
// 		return images
// 	}, {} )
//
// function importAll(r) {
// 	let images = {};
// 	r.keys().map((item, index) => { images[item.replace('./', '').replace('.svg', '')] = r(item); });
// 	return images;
// }
// export const images = importAll(require.context( './images/third-party', false, /\.(svg)$/));

/**
 * WordPress dependencies
 */




const colorizeIcon = SvgIcon => {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_31__["cloneElement"])(SvgIcon, {
    fill: 'url(#redux-gradient)',
    className: 'redux-icon-gradient'
  });
};
const thirdPartyIcon = icon => {
  if (icon) {
    return wp.element.createElement("icon", {
      width: "20",
      height: "20"
    });
  }
}; // Add an icon to our block category.

if (typeof window.wp.blocks !== 'undefined' && typeof window.wp.blocks.updateCategory !== 'undefined') {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_33__["updateCategory"])(redux_templates.i18n, {
    icon: colorizeIcon(wp.element.createElement(_assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "components-panel__icon",
      width: "20",
      height: "20"
    }))
  });
} // Add our SVG gradient placeholder definition that we'll reuse.


Object(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_32__["default"])(() => {
  const redux_templatesGradient = document.createElement('DIV');
  document.querySelector('body').appendChild(redux_templatesGradient);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_31__["render"])(wp.element.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "redux-gradient",
    height: "0",
    width: "0",
    style: {
      opacity: 0
    }
  }, wp.element.createElement("defs", null, wp.element.createElement("linearGradient", {
    id: "redux-gradient"
  }, wp.element.createElement("stop", {
    offset: "0%",
    stopColor: "#8c33da",
    stopOpacity: "1"
  }), wp.element.createElement("stop", {
    offset: "100%",
    stopColor: "#f34957",
    stopOpacity: "1"
  })))), redux_templatesGradient);
});
const ReduxTemplatesIcon = () => {
  return wp.element.createElement(_assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "20",
    height: "20"
  });
};
const ReduxTemplatesIconColor = () => {
  return wp.element.createElement(_assets_img_icon_color_svg__WEBPACK_IMPORTED_MODULE_30__["default"], {
    width: "20",
    height: "20"
  });
};
const ReduxTemplatesIconColorize = () => {
  return colorizeIcon(wp.element.createElement(_assets_img_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "20",
    height: "20"
  }));
};
const core = () => {
  return wp.element.createElement(_images_wordpress_svg__WEBPACK_IMPORTED_MODULE_29__["default"], {
    width: "20",
    height: "20"
  });
}; //
// export const AdvancedGutenbergBlocks = () => {
// 	return <SVGAdvancedGutenbergBlocksIcon width="20" height="20"/>
// }
// export const advancedgutenbergblocks = () => <AdvancedGutenbergBlocks/>
//
// export const AdvancedGutenberg = () => {
// 	return <SVGAdvancedGutenbergIcon width="20" height="20"/>
// }
// export const advancedgutenbergIcon = () => <AdvancedGutenberg/>
//
// export const AtomicBlocks = () => {
// 	return <SVGAtomicBlocksIcon width="20" height="20"/>
// }
// export const atomicblocks = () => <AtomicBlocks/>
//
// export const CoBlocks = () => {
// 	return <SVGCoBlocksIcon width="20" height="20"/>
// }
// export const Coblocks = () => <CoBlocks/>
// export const coblocks = () => <CoBlocks/>
//
// export const Stackable = () => {
// 	return <SVGStackableIcon width="20" height="20"/>
// }
// export const stackable = () => <Stackable/>
// export const stackableultimategutenbergblocks = () => <Stackable/>
//
// export const Qubely = () => {
// 	return <SVGQubelyIcon width="20" height="20"/>
// }
// export const qubely = () => <Qubely/>
//
// export const Kioken = () => {
//     return <SVGKiokenIcon width="20" height="20"/>
// }
// export const kioken = () => <Kioken/>
// export const kiokenblocks = () => <Kioken/>
//
// export const kadenceblocks = () => {
// 	return <SVGKadenceIcon width="20" height="20"/>
// }
//
// export const CreativeBlocks = () => {
// 	return <SVGCreativeBlocksIcon width="20" height="20"/>
// }
// export const creativeblocks = () => <CreativeBlocks/>
// export const qb = () => <CreativeBlocks/>
//
// export const EssentialBlocks = () => {
// 	return <SVGEssentialBlocksIcon width="20" height="20"/>
// }
// export const essentialblocks = () => <EssentialBlocks/>
// export const eb = () => <EssentialBlocks/>
//
// export const UltimateAddonsForGutenberg = () => {
// 	return <SVGUltimateAddonsForGutenbergIcon width="20" height="20"/>
// }
// export const ultimateaddonsforgutenberg = () => <UltimateAddonsForGutenberg/>
//
//
// export const UltimateBlocks = () => {
// 	return <SVGUltimateBlocksIcon width="20" height="20"/>
// }
// export const ultimateblocks = () => <UltimateBlocks/>
//
// export const gutentor = () => {
// 	return <SVGGutentorIcon width="20" height="20"/>
// }
//
//
// export const GutenbergForms = () => {
// 	return <SVGGutenbergFormsIcon width="20" height="20"/>
// }
// export const gutenbergforms = () => <GutenbergForms/>
// export const formsgutenberg = () => <GutenbergForms/>
//

/***/ }),

/***/ "./redux-templates/src/index.js":
/*!**************************************!*\
  !*** ./redux-templates/src/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "./node_modules/@wordpress/dom-ready/build-module/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./redux-templates/src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/blocks */ "./redux-templates/src/blocks/blocks.js");
/* harmony import */ var _plugins_sidebar_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/sidebar-share */ "./redux-templates/src/plugins/sidebar-share/index.js");
/* harmony import */ var _plugins_share_block_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/share-block-btn */ "./redux-templates/src/plugins/share-block-btn/index.js");
/* harmony import */ var _plugins_export__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/export */ "./redux-templates/src/plugins/export/index.js");
/* harmony import */ var _plugins_export_page_menu_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/export-page-menu-item */ "./redux-templates/src/plugins/export-page-menu-item/index.js");
/* harmony import */ var _plugins_library_context_menu_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/library-context-menu-item */ "./redux-templates/src/plugins/library-context-menu-item/index.js");
/* harmony import */ var _challenge_tooltip_TooltipBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./challenge/tooltip/TooltipBox */ "./redux-templates/src/challenge/tooltip/TooltipBox.js");
/* harmony import */ var _stores_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stores/helper */ "./redux-templates/src/stores/helper.js");
/* harmony import */ var _challenge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./challenge */ "./redux-templates/src/challenge/index.js");
/* harmony import */ var _modal_manager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _modal_library__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal-library */ "./redux-templates/src/modal-library/index.js");
/* harmony import */ var _components_welcome_guide__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/welcome-guide */ "./redux-templates/src/components/welcome-guide/index.js");
/* harmony import */ var _components_template_change__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/template-change */ "./redux-templates/src/components/template-change/index.js");
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-css */ "./redux-templates/src/custom-css/index.js");
/**
 * Library Button
 */

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */
















Object(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  setTimeout(() => {
    const challengeDiv = document.createElement('div');
    challengeDiv.className = 'challenge-tooltip-holder';
    document.body.appendChild(challengeDiv);
    const challengeWrapperDiv = document.createElement('div');
    challengeWrapperDiv.className = 'challenge-wrapper';
    document.body.appendChild(challengeWrapperDiv);

    if (window.location.hash == '#redux_challenge=1') {
      window.location.hash = '';
      _modal_manager__WEBPACK_IMPORTED_MODULE_12__["ModalManager"].open(wp.element.createElement(_modal_library__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    }

    if (window.location.hash == '#redux_templates=1') {
      window.location.hash = '';
      _modal_manager__WEBPACK_IMPORTED_MODULE_12__["ModalManager"].open(wp.element.createElement(_modal_library__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    } // For frontenberg, we open the dialog automatically.


    if (document.body.classList.contains('wp-admin') === false) {
      _modal_manager__WEBPACK_IMPORTED_MODULE_12__["ModalManager"].open(wp.element.createElement(_modal_library__WEBPACK_IMPORTED_MODULE_13__["default"], null));
    }

    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["render"])(wp.element.createElement(_challenge__WEBPACK_IMPORTED_MODULE_11__["default"], null), challengeWrapperDiv);
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["render"])(wp.element.createElement(_challenge_tooltip_TooltipBox__WEBPACK_IMPORTED_MODULE_9__["default"], null), challengeDiv);
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["render"])(wp.element.createElement(_components_welcome_guide__WEBPACK_IMPORTED_MODULE_14__["default"], null), challengeDiv);
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["render"])(wp.element.createElement(_components_template_change__WEBPACK_IMPORTED_MODULE_15__["default"], null), challengeDiv);
    Object(_stores_helper__WEBPACK_IMPORTED_MODULE_10__["handlingLocalStorageData"])();
  }, 500);
});

/***/ }),

/***/ "./redux-templates/src/modal-feedback/index.js":
/*!*****************************************************!*\
  !*** ./redux-templates/src/modal-feedback/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-feedback/index.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/ImportingStep.js":
/*!******************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/ImportingStep.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/ImportingStep.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/InstallPluginStep.js":
/*!**********************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/InstallPluginStep.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/InstallPluginStep.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/OptionStep.js":
/*!***************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/OptionStep.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/OptionStep.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/ProPluginsStep.js":
/*!*******************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/ProPluginsStep.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/ProPluginsStep.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/ReduxTemplatesActivateBox.js":
/*!******************************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/ReduxTemplatesActivateBox.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/ReduxTemplatesActivateBox.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumActivate.js":
/*!**********************************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumActivate.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumActivate.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumBox.js":
/*!*****************************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumBox.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumBox.js'");

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/index.js":
/*!**********************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InstallPluginStep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InstallPluginStep */ "./redux-templates/src/modal-import-wizard/InstallPluginStep.js");
/* harmony import */ var _ProPluginsStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProPluginsStep */ "./redux-templates/src/modal-import-wizard/ProPluginsStep.js");
/* harmony import */ var _OptionStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionStep */ "./redux-templates/src/modal-import-wizard/OptionStep.js");
/* harmony import */ var _ImportingStep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImportingStep */ "./redux-templates/src/modal-import-wizard/ImportingStep.js");
/* harmony import */ var _ReduxTemplatesPremiumBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReduxTemplatesPremiumBox */ "./redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumBox.js");
/* harmony import */ var _ReduxTemplatesPremiumActivate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReduxTemplatesPremiumActivate */ "./redux-templates/src/modal-import-wizard/ReduxTemplatesPremiumActivate.js");
/* harmony import */ var _ReduxTemplatesActivateBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReduxTemplatesActivateBox */ "./redux-templates/src/modal-import-wizard/ReduxTemplatesActivateBox.js");
/* harmony import */ var _redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~redux-templates/stores/dependencyHelper */ "./redux-templates/src/stores/dependencyHelper.js");
/* harmony import */ var _modals_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals.scss */ "./redux-templates/src/modals.scss");
/* harmony import */ var _modals_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modals_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/modal-import-wizard/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const __ = wp.i18n.__;
const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;
const _wp = wp,
      apiFetch = _wp.apiFetch;










const PRO_STEP = 0;
const PLUGIN_STEP = 1;
const OPTION_STEP = 2;
const IMPORT_STEP = 3;
const REDUX_PRO_STEP = -10;
const REDUX_PRO_ACTIVATE_STEP = -9;
const REDUX_ACTIVATE_STEP = 999;
const tourPlugins = ['qubely', 'kioken-blocks'];

function ImportWizard(props) {
  const startImportTemplate = props.startImportTemplate,
        setImportingTemplate = props.setImportingTemplate,
        setActivateDialogDisplay = props.setActivateDialogDisplay,
        appendErrorMessage = props.appendErrorMessage;
  const isChallengeOpen = props.isChallengeOpen,
        importingTemplate = props.importingTemplate,
        activateDialogDisplay = props.activateDialogDisplay,
        isPostEmpty = props.isPostEmpty,
        isInstalledDependencies = props.isInstalledDependencies;

  const _useState = useState(PRO_STEP),
        _useState2 = _slicedToArray(_useState, 2),
        currentStep = _useState2[0],
        setCurrentStep = _useState2[1];

  const _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        importing = _useState4[0],
        setImporting = _useState4[1];

  const _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        activating = _useState6[0],
        setActivating = _useState6[1];

  const _useState7 = useState([]),
        _useState8 = _slicedToArray(_useState7, 2),
        missingPlugins = _useState8[0],
        setMissingPlugins = _useState8[1];

  useEffect(() => {
    if (importingTemplate) {
      if (!importingTemplate.proDependenciesMissing) {
        importingTemplate.proDependenciesMissing = [];
      }

      if (!importingTemplate.installDependenciesMissing) {
        importingTemplate.installDependenciesMissing = [];
      } // IMPORTANT First check: can you use redux pro?


      const leftTry = isNaN(redux_templates.left) === false ? parseInt(redux_templates.left) : 0;

      if (!!redux_templates.mokama === false && leftTry < 1 && currentStep !== REDUX_PRO_ACTIVATE_STEP) {
        if (currentStep !== REDUX_ACTIVATE_STEP) {
          setCurrentStep(REDUX_PRO_STEP);
          return;
        }
      }
      /* Redux pro check */


      if (Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_7__["requiresReduxPro"])(importingTemplate)) {
        if (currentStep !== REDUX_PRO_ACTIVATE_STEP) setCurrentStep(REDUX_PRO_STEP);
        return;
      } // Start with Pro step
      // When all OK with Pro Step, move to Plugin Step, on the way, prepare reduxProMergedPlugins.


      if (importingTemplate && currentStep === PRO_STEP && Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_7__["requiresPro"])(importingTemplate) === false) {
        setCurrentStep(PLUGIN_STEP);

        if (Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_7__["isReduxProInstalled"])()) {
          setMissingPlugins([].concat(importingTemplate.proDependenciesMissing, importingTemplate.installDependenciesMissing).filter(plugin => plugin));
        } else {
          setMissingPlugins(importingTemplate.installDependenciesMissing.filter(plugin => plugin));
        }
      }

      if (importingTemplate && currentStep === PLUGIN_STEP && Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_7__["requiresInstall"])(importingTemplate) === false) if (isPostEmpty === false) setCurrentStep(OPTION_STEP);else setCurrentStep(IMPORT_STEP);
      if (importingTemplate && currentStep === OPTION_STEP && isPostEmpty === true) setCurrentStep(IMPORT_STEP);

      if (importingTemplate && currentStep === IMPORT_STEP && importing === false) {
        setImporting(true);

        try {
          startImportTemplate();
        } catch (e) {
          console.log('importing exception', e);
          setImporting(false);
          setCurrentStep(PLUGIN_STEP);
          setImportingTemplate(null);
        }
      }
    }
  }, [importingTemplate, currentStep, activateDialogDisplay]); // Activate dialog display

  useEffect(() => {
    if (activateDialogDisplay === true) {
      // Activate dialog hard reset case
      setCurrentStep(REDUX_ACTIVATE_STEP);
      setActivateDialogDisplay(false);
    }
  }, [activateDialogDisplay]); // On the initial loading

  useEffect(() => {
    setActivateDialogDisplay(false);
  }, []);

  const toNextStep = () => {
    if (isChallengeOpen) return;
    setCurrentStep(currentStep + 1);
  };

  const toPluginStep = () => {
    setCurrentStep(PRO_STEP);
  };

  const toProActivateStep = () => {
    setCurrentStep(REDUX_PRO_ACTIVATE_STEP);
  };

  const onCloseWizard = () => {
    if (isChallengeOpen) return; // When in tour mode, we don't accept mouse event.

    if (importing) return;
    setCurrentStep(PLUGIN_STEP);
    setImportingTemplate(null);
  };

  const activateReduxTracking = () => {
    setActivating(true);
    apiFetch({
      path: 'redux/v1/templates/activate'
    }).then(response => {
      if (response.success) {
        redux_templates.left = response.data.left;
      }

      setCurrentStep(PRO_STEP);
      setActivating(false);
    }).catch(error => {
      appendErrorMessage(error.code + ' : ' + error.message);
      setCurrentStep(PRO_STEP);
      setActivating(false);
    });
  };

  if (isChallengeOpen) {
    // exception handling for tour mode
    if (currentStep !== PLUGIN_STEP) setCurrentStep(PLUGIN_STEP);
  }

  if (!importingTemplate) return null;
  return wp.element.createElement("div", {
    className: "redux-templates-modal-overlay"
  }, wp.element.createElement("div", {
    className: "redux-templates-modal-wrapper",
    "data-tut": "tour__import_wizard"
  }, wp.element.createElement("div", {
    className: "redux-templates-modal-header"
  }, wp.element.createElement("h3", null, __('Import Wizard', redux_templates.i18n)), wp.element.createElement("button", {
    className: "redux-templates-modal-close",
    onClick: onCloseWizard
  }, wp.element.createElement("i", {
    className: 'fas fa-times'
  }))), wp.element.createElement("div", {
    className: "redux-templates-importmodal-content"
  }, currentStep === PRO_STEP && Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_7__["requiresPro"])(importingTemplate) && wp.element.createElement(_ProPluginsStep__WEBPACK_IMPORTED_MODULE_1__["default"], {
    missingPros: importingTemplate.proDependenciesMissing,
    onCloseWizard: onCloseWizard
  }), currentStep === PLUGIN_STEP && wp.element.createElement(_InstallPluginStep__WEBPACK_IMPORTED_MODULE_0__["default"], {
    missingPlugins: isChallengeOpen ? tourPlugins : missingPlugins,
    toNextStep: toNextStep,
    onCloseWizard: onCloseWizard
  }), currentStep === OPTION_STEP && wp.element.createElement(_OptionStep__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toNextStep: toNextStep,
    onCloseWizard: onCloseWizard
  }), currentStep === IMPORT_STEP && wp.element.createElement(_ImportingStep__WEBPACK_IMPORTED_MODULE_3__["default"], null), currentStep === REDUX_ACTIVATE_STEP && wp.element.createElement(_ReduxTemplatesActivateBox__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onActivateRedux: activateReduxTracking,
    activating: activating
  }), currentStep === REDUX_PRO_ACTIVATE_STEP && wp.element.createElement(_ReduxTemplatesPremiumActivate__WEBPACK_IMPORTED_MODULE_5__["default"], {
    toPluginStep: toPluginStep
  }), currentStep === REDUX_PRO_STEP && wp.element.createElement(_ReduxTemplatesPremiumBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toProActivateStep: toProActivateStep
  }), isInstalledDependencies && wp.element.createElement("iframe", {
    src: "./",
    width: "0",
    height: "0"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setImportingTemplate = _dispatch.setImportingTemplate,
        setActivateDialogDisplay = _dispatch.setActivateDialogDisplay,
        appendErrorMessage = _dispatch.appendErrorMessage;

  return {
    setImportingTemplate,
    setActivateDialogDisplay,
    appendErrorMessage
  };
}), withSelect((select, props) => {
  const _select = select('redux-templates/sectionslist'),
        getChallengeOpen = _select.getChallengeOpen,
        getImportingTemplate = _select.getImportingTemplate,
        getActivateDialogDisplay = _select.getActivateDialogDisplay,
        getInstalledDependencies = _select.getInstalledDependencies;

  const _select2 = select('core/editor'),
        isEditedPostEmpty = _select2.isEditedPostEmpty;

  return {
    isChallengeOpen: getChallengeOpen(),
    importingTemplate: getImportingTemplate(),
    activateDialogDisplay: getActivateDialogDisplay(),
    isPostEmpty: isEditedPostEmpty(),
    isInstalledDependencies: getInstalledDependencies()
  };
})])(ImportWizard));

/***/ }),

/***/ "./redux-templates/src/modal-import-wizard/style.scss":
/*!************************************************************!*\
  !*** ./redux-templates/src/modal-import-wizard/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-import-wizard/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/modal-library/index.js":
/*!****************************************************!*\
  !*** ./redux-templates/src/modal-library/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stores */ "./redux-templates/src/stores/index.js");
/* harmony import */ var _modal_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _components_tab_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tab-header */ "./redux-templates/src/components/tab-header/index.js");
/* harmony import */ var _layout_with_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-with-sidebar */ "./redux-templates/src/modal-library/layout-with-sidebar/index.js");
/* harmony import */ var _view_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-collection */ "./redux-templates/src/modal-library/view-collection/index.js");
/* harmony import */ var _view_saved__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-saved */ "./redux-templates/src/modal-library/view-saved/index.js");
/* harmony import */ var _modal_import_wizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-import-wizard */ "./redux-templates/src/modal-import-wizard/index.js");
/* harmony import */ var _modal_promotor_score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-promotor-score */ "./redux-templates/src/modal-promotor-score/index.js");
/* harmony import */ var _components_error_notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/error-notice */ "./redux-templates/src/components/error-notice/index.js");
/* harmony import */ var _redux_templates_challenge_final_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~redux-templates/challenge/final-templates */ "./redux-templates/src/challenge/final-templates/index.js");
/* harmony import */ var _components_fab_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/fab-wrapper */ "./redux-templates/src/components/fab-wrapper/index.js");
/* harmony import */ var _redux_templates_stores_actionHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~redux-templates/stores/actionHelper */ "./redux-templates/src/stores/actionHelper.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/modal-library/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_12__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;














function LibraryModal(props) {
  const fetchLibraryFromAPI = props.fetchLibraryFromAPI,
        activeCollection = props.activeCollection,
        activeItemType = props.activeItemType,
        errorMessages = props.errorMessages,
        importingTemplate = props.importingTemplate,
        challengeFinalStatus = props.challengeFinalStatus,
        isChallengeOpen = props.isChallengeOpen,
        setLoading = props.setLoading,
        setImportingTemplate = props.setImportingTemplate,
        clearSearch = props.clearSearch,
        clearState = props.clearState;

  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        loaded = _useState2[0],
        setLoaded = _useState2[1];

  const _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        escKeyPressed = _useState4[0],
        setEscKeyPressed = _useState4[1];

  const _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isPSModalVisible = _useState6[0],
        setPSModalVisible = _useState6[1];

  let stateLibrary = null;
  useEffect(() => {
    clearState();
    stateLibrary = fetchLibraryFromAPI();

    if (stateLibrary === null && loaded === false) {
      // One to be called at first.
      setLoading(true);
      setLoaded(true);
    }

    setPSModalVisible(!!redux_templates.nps);

    const handleKeyUp = ({
      keyCode
    }) => {
      if (keyCode === 27) {
        setEscKeyPressed(true);
      }
    };

    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  useEffect(() => {
    if (escKeyPressed) {
      setEscKeyPressed(false);

      if (_modal_manager__WEBPACK_IMPORTED_MODULE_1__["ModalManager"].isCustomizerOpened()) {
        _modal_manager__WEBPACK_IMPORTED_MODULE_1__["ModalManager"].closeCustomizer();
      } else {
        if (importingTemplate) setImportingTemplate(null);else {
          _modal_manager__WEBPACK_IMPORTED_MODULE_1__["ModalManager"].close();
        }
      }
    }
  }, [escKeyPressed]);

  const hasSidebar = () => {
    return (activeItemType !== 'collection' || activeCollection === null) && activeItemType !== 'saved';
  }; // read block data to import and give the control to actual import


  const processImport = () => {
    if (importingTemplate) Object(_redux_templates_stores_actionHelper__WEBPACK_IMPORTED_MODULE_11__["processImportHelper"])();
  };

  return wp.element.createElement(_modal_manager__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    className: "redux-templates-builder-modal-pages-list",
    customClass: "redux-templates-builder-modal-template-list",
    openTimeoutMS: 0,
    closeTimeoutMS: 0
  }, wp.element.createElement(_components_tab_header__WEBPACK_IMPORTED_MODULE_2__["default"], null), errorMessages && errorMessages.length > 0 && wp.element.createElement(_components_error_notice__WEBPACK_IMPORTED_MODULE_8__["default"], {
    errorMessages: errorMessages
  }), wp.element.createElement("div", {
    className: "redux-templates-collections-modal-body"
  }, hasSidebar() && wp.element.createElement(_layout_with_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], null), hasSidebar() === false && activeItemType === 'collection' && wp.element.createElement(_view_collection__WEBPACK_IMPORTED_MODULE_4__["default"], null), hasSidebar() === false && activeItemType !== 'collection' && wp.element.createElement(_view_saved__WEBPACK_IMPORTED_MODULE_5__["default"], null)), importingTemplate && wp.element.createElement(_modal_import_wizard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    startImportTemplate: processImport
  }), isPSModalVisible && wp.element.createElement(_modal_promotor_score__WEBPACK_IMPORTED_MODULE_7__["default"], {
    propOnClose: () => setPSModalVisible(false)
  }), challengeFinalStatus !== '' && wp.element.createElement(_redux_templates_challenge_final_templates__WEBPACK_IMPORTED_MODULE_9__["default"], {
    finalStatus: challengeFinalStatus
  }), !isChallengeOpen && wp.element.createElement(_components_fab_wrapper__WEBPACK_IMPORTED_MODULE_10__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setLoading = _dispatch.setLoading,
        setLibrary = _dispatch.setLibrary,
        setImportingTemplate = _dispatch.setImportingTemplate,
        clearSearch = _dispatch.clearSearch,
        clearState = _dispatch.clearState;

  return {
    setLoading,
    setLibrary,
    setImportingTemplate,
    clearSearch,
    clearState
  };
}), withSelect(select => {
  const _select = select('redux-templates/sectionslist'),
        fetchLibraryFromAPI = _select.fetchLibraryFromAPI,
        getActiveCollection = _select.getActiveCollection,
        getActiveItemType = _select.getActiveItemType,
        getErrorMessages = _select.getErrorMessages,
        getImportingTemplate = _select.getImportingTemplate,
        getChallengeOpen = _select.getChallengeOpen,
        getChallengeFinalStatus = _select.getChallengeFinalStatus;

  return {
    fetchLibraryFromAPI,
    activeCollection: getActiveCollection(),
    activeItemType: getActiveItemType(),
    errorMessages: getErrorMessages(),
    importingTemplate: getImportingTemplate(),
    challengeFinalStatus: getChallengeFinalStatus(),
    isChallengeOpen: getChallengeOpen()
  };
})])(LibraryModal));

/***/ }),

/***/ "./redux-templates/src/modal-library/layout-with-sidebar/index.js":
/*!************************************************************************!*\
  !*** ./redux-templates/src/modal-library/layout-with-sidebar/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithSidebarCollection; });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar */ "./redux-templates/src/modal-library/sidebar/index.js");
/* harmony import */ var _redux_templates_components_template_list_subheader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~redux-templates/components/template-list-subheader */ "./redux-templates/src/components/template-list-subheader/index.js");
/* harmony import */ var _view_template_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-template-list */ "./redux-templates/src/modal-library/view-template-list/index.js");
const Fragment = wp.element.Fragment;



function WithSidebarCollection(props) {
  return wp.element.createElement(Fragment, null, wp.element.createElement("div", {
    id: "redux-templates-collection-modal-sidebar",
    className: "redux-templates-collection-modal-sidebar"
  }, wp.element.createElement(_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"], null)), wp.element.createElement("div", {
    className: "redux-templates-collection-modal-content-area",
    "data-tut": "tour__main_body",
    id: "modalContent"
  }, wp.element.createElement(_redux_templates_components_template_list_subheader__WEBPACK_IMPORTED_MODULE_1__["default"], null), wp.element.createElement(_view_template_list__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/***/ }),

/***/ "./redux-templates/src/modal-library/sidebar/index.js":
/*!************************************************************!*\
  !*** ./redux-templates/src/modal-library/sidebar/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-library/sidebar/index.js'");

/***/ }),

/***/ "./redux-templates/src/modal-library/style.scss":
/*!******************************************************!*\
  !*** ./redux-templates/src/modal-library/style.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/modal-library/view-collection/index.js":
/*!********************************************************************!*\
  !*** ./redux-templates/src/modal-library/view-collection/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/modal-library/view-collection/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_templates_components_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~redux-templates/components/button-group */ "./redux-templates/src/components/button-group/index.js");
/* harmony import */ var _redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~redux-templates/stores/dependencyHelper */ "./redux-templates/src/stores/dependencyHelper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect;
const compose = wp.compose.compose;
const _wp$data = wp.data,
      withDispatch = _wp$data.withDispatch,
      withSelect = _wp$data.withSelect;
const __ = wp.i18n.__;



const DURATION_UNIT = 500;
const PREVIEW_PANEL_HEIGHT = 515; // Collection Detail view: preview, item list and import

function CollectionView(props) {
  const pageData = props.pageData,
        activeCollectionData = props.activeCollectionData;
  const setActiveCollection = props.setActiveCollection;

  const _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        previewData = _useState2[0],
        setPreviewData = _useState2[1];

  const _useState3 = useState(0),
        _useState4 = _slicedToArray(_useState3, 2),
        previewDataIndex = _useState4[0],
        setPreviewDataIndex = _useState4[1];

  const _useState5 = useState('1.5s'),
        _useState6 = _slicedToArray(_useState5, 2),
        transitionDuration = _useState6[0],
        setTransitionDuration = _useState6[1];

  const dataLength = pageData.length; // To be called when switching over

  useEffect(() => {
    if (pageData && pageData[previewDataIndex]) {
      const itemData = pageData[previewDataIndex];
      const backgroundImage = new Image();

      if (itemData.image_full) {
        setPreviewData(_objectSpread(_objectSpread({}, itemData), {}, {
          backgroundImage: itemData.image_full,
          previewImageClassname: 'details-preview has_full'
        }));
        backgroundImage.src = itemData.image_full;
      } else {
        setPreviewData(_objectSpread(_objectSpread({}, itemData), {}, {
          backgroundImage: itemData.image,
          previewImageClassname: 'details-preview has_full'
        }));
        backgroundImage.src = itemData.image;
      }

      backgroundImage.onload = function () {
        setTransitionDuration((backgroundImage.height - PREVIEW_PANEL_HEIGHT) / DURATION_UNIT + 's');
      };
    }
  }, [pageData, previewDataIndex]);
  if (previewData) return wp.element.createElement("div", {
    className: "redux-templates-collection-details-view"
  }, wp.element.createElement("div", {
    className: "redux-templates-collection-details-left"
  }, wp.element.createElement("div", {
    className: "details-back",
    onClick: () => setActiveCollection(null)
  }, wp.element.createElement("span", {
    className: "dashicons dashicons-arrow-left-alt"
  }), "\xA0", __('Back to Template Kits', redux_templates.i18n)), wp.element.createElement("div", {
    className: previewData.previewImageClassname,
    style: {
      backgroundImage: `url('${previewData.backgroundImage}')`,
      transitionDuration
    }
  })), wp.element.createElement("div", {
    className: "redux-templates-collection-details-right"
  }, wp.element.createElement("div", {
    className: "details-title"
  }, wp.element.createElement("h3", null, activeCollectionData.name), wp.element.createElement("span", null, dataLength, " ", __('pages', redux_templates.i18n))), wp.element.createElement("div", {
    className: "details-list"
  }, wp.element.createElement("div", {
    className: "details-inner"
  }, pageData.map((detail, index) => {
    let className = previewData.ID === detail.ID ? 'detail-select detail-select-active' : 'detail-select';
    let divStyle = {
      backgroundImage: 'url(' + detail.image + ')'
    };
    return wp.element.createElement("div", {
      className: className,
      onClick: () => setPreviewDataIndex(index),
      key: index
    }, wp.element.createElement("div", {
      className: "detail-image",
      style: divStyle
    }, Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_2__["requiresPro"])(detail) && wp.element.createElement("span", {
      className: "pro"
    }, __('Premium', redux_templates.i18n)), !Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_2__["requiresPro"])(detail) && Object(_redux_templates_stores_dependencyHelper__WEBPACK_IMPORTED_MODULE_2__["requiresInstall"])(detail) && wp.element.createElement("span", {
      className: "install"
    }, wp.element.createElement("i", {
      className: "fas fa-exclamation-triangle"
    })), wp.element.createElement("div", {
      className: "detail-label"
    }, detail.name)));
  })))), wp.element.createElement("div", {
    className: "redux-templates-collection-details-footer"
  }, wp.element.createElement("div", {
    className: "footer-grid"
  }, wp.element.createElement(_redux_templates_components_button_group__WEBPACK_IMPORTED_MODULE_1__["default"], {
    index: previewDataIndex,
    showDependencyBlock: false,
    data: previewData,
    pageData: pageData
  }))));
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('redux-templates/sectionslist'),
        setActiveCollection = _dispatch.setActiveCollection;

  return {
    setActiveCollection
  };
}), withSelect((select, props) => {
  const _select = select('redux-templates/sectionslist'),
        getPageData = _select.getPageData,
        getLoading = _select.getLoading,
        getActiveCollectionData = _select.getActiveCollectionData,
        getActiveItemType = _select.getActiveItemType;

  return {
    pageData: getPageData(),
    loading: getLoading(),
    activeItemType: getActiveItemType(),
    activeCollectionData: getActiveCollectionData()
  };
})])(CollectionView));

/***/ }),

/***/ "./redux-templates/src/modal-library/view-collection/style.scss":
/*!**********************************************************************!*\
  !*** ./redux-templates/src/modal-library/view-collection/style.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/view-collection/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/modal-library/view-saved/index.js":
/*!***************************************************************!*\
  !*** ./redux-templates/src/modal-library/view-saved/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/modal-library/view-saved/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var lodash_reject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/reject */ "./node_modules/lodash/reject.js");
/* harmony import */ var lodash_reject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_reject__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const _wp = wp,
      apiFetch = _wp.apiFetch;
const useState = wp.element.useState;
const compose = wp.compose.compose;
const withDispatch = wp.data.withDispatch;
const Spinner = wp.components.Spinner;
const parse = wp.blocks.parse;
const __ = wp.i18n.__;





function SavedView(props) {
  const insertBlocks = props.insertBlocks,
        discardAllErrorMessages = props.discardAllErrorMessages,
        appendErrorMessage = props.appendErrorMessage,
        clearSearch = props.clearSearch;

  const _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        savedSections = _useState2[0],
        setSavedSections = _useState2[1];

  const _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        dataLoaded = _useState4[0],
        setDataLoaded = _useState4[1];

  if (dataLoaded === false) {
    // Initial fetch
    apiFetch({
      path: 'redux/v1/templates/get_saved_blocks'
    }).then(response => {
      if (response.success) {
        setSavedSections(response.data);
      } else {
        appendErrorMessage(response.data.error);
      }

      setDataLoaded(true);
    }).catch(error => {
      appendErrorMessage(error.code + ' : ' + error.message);
      setDataLoaded(true);
    });
  } // To display into columns, map data into column-friendly data


  const mapToColumnData = (data, n = 4, balanced = true) => {
    let out = [],
        i;

    for (i = 0; i < n; i++) out[i] = [];

    data.forEach((section, i) => {
      out[i % n].push(section);
    });
    return out;
  }; // saved block import is special


  const importSections = rawData => {
    let pageData = parse(rawData);
    insertBlocks(pageData);
    _modal_manager__WEBPACK_IMPORTED_MODULE_2__["ModalManager"].close(); //close modal
  };

  const deleteSavedSection = (event, sectionID) => {
    event.stopPropagation();
    discardAllErrorMessages();
    const options = {
      method: 'POST',
      path: 'redux/v1/templates/delete_saved_block/?block_id=' + sectionID
    };
    apiFetch(options).then(response => {
      if (response.success) {
        // on successful remove, we will update the blocks as well.
        setSavedSections(lodash_reject__WEBPACK_IMPORTED_MODULE_3___default()(savedSections, {
          'ID': sectionID
        }));
      } else {
        appendErrorMessage(response.data.error);
      }
    }).catch(error => {
      appendErrorMessage(error.code + ' : ' + error.message);
    });
  };

  if (dataLoaded === true) return wp.element.createElement("div", {
    className: "redux-templates-two-sections__grid"
  }, savedSections && savedSections.length > 0 ? mapToColumnData(savedSections).map((column, key) => {
    let sections = column.map((section, i) => {
      let blocks = parse(section.post_content);
      return wp.element.createElement("div", {
        className: "redux-templates-two-section",
        key: i,
        onClick: () => importSections(section.post_content)
      }, wp.element.createElement("div", {
        className: "preview-image-wrapper"
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__["BlockPreview"], {
        blocks: blocks
      })), wp.element.createElement("div", {
        className: "saved-section-title"
      }, section.post_title), wp.element.createElement("div", {
        className: "redux-templates-two-section-remove",
        onClick: e => deleteSavedSection(e, section.ID)
      }, wp.element.createElement("i", {
        className: "fas fa-trash"
      })));
    });
    return wp.element.createElement("div", {
      className: "redux-templates-two-sections__grid__column",
      key: key,
      style: {
        width: '25%',
        flexBasis: '25%'
      }
    }, sections);
  }) : wp.element.createElement("div", {
    className: "no-section"
  }, "Nothing here yet, make a reusuable block first."));else return wp.element.createElement("div", null, wp.element.createElement("div", {
    style: {
      height: '600px'
    }
  }, wp.element.createElement("div", {
    className: "redux-templates-modal-loader"
  }, wp.element.createElement(Spinner, null))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withDispatch(dispatch => {
  const _dispatch = dispatch('core/block-editor'),
        insertBlocks = _dispatch.insertBlocks;

  const _dispatch2 = dispatch('redux-templates/sectionslist'),
        appendErrorMessage = _dispatch2.appendErrorMessage,
        discardAllErrorMessages = _dispatch2.discardAllErrorMessages;

  return {
    insertBlocks,
    appendErrorMessage,
    discardAllErrorMessages
  };
})])(SavedView));

/***/ }),

/***/ "./redux-templates/src/modal-library/view-saved/style.scss":
/*!*****************************************************************!*\
  !*** ./redux-templates/src/modal-library/view-saved/style.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-library/view-saved/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/modal-library/view-template-list/index.js":
/*!***********************************************************************!*\
  !*** ./redux-templates/src/modal-library/view-template-list/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-library/view-template-list/index.js'");

/***/ }),

/***/ "./redux-templates/src/modal-manager/index.js":
/*!****************************************************!*\
  !*** ./redux-templates/src/modal-manager/index.js ***!
  \****************************************************/
/*! exports provided: Modal, ModalManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalManager", function() { return ModalManager; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var onClose,
    node,
    customizerNode,
    feedbackNode = null;
class Modal extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      afterOpen: false,
      beforeClose: false
    };
  }

  close() {
    if (!this.props.onRequestClose || this.props.onRequestClose()) {
      if (customizerNode) ModalManager.closeCustomizer();else ModalManager.close();
    }
  }

  componentDidMount() {
    const _this$props = this.props,
          openTimeoutMS = _this$props.openTimeoutMS,
          closeTimeoutMS = _this$props.closeTimeoutMS;
    setTimeout(() => this.setState({
      afterOpen: true
    }), openTimeoutMS ? openTimeoutMS : 150);

    onClose = callback => {
      this.setState({
        beforeClose: true
      }, () => {
        this.closeTimer = setTimeout(callback, closeTimeoutMS ? closeTimeoutMS : 150);
      });
    };
  }

  componentWillUnmount() {
    onClose = null;
    clearTimeout(this.closeTimer);
  }

  render() {
    return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, wp.element.createElement("span", {
      onClick: e => {
        this.close();
      },
      className: 'redux-templates-pagelist-modal-overlay'
    }, "\xA0"), wp.element.createElement("div", {
      className: this.props.compactMode ? 'redux-templates-modal-inner' : 'redux-templates-pagelist-modal-inner',
      onClick: e => e.stopPropagation()
    }, this.props.children));
  }

}
const ModalManager = {
  open(component) {
    if (onClose) {
      this.close(); // throw __('There is already one modal.It must be closed before one new modal will be opened');
    }

    if (!node) {
      node = document.createElement('div');
      node.className = 'redux-templates-builder-modal';
      document.body.appendChild(node);
    }

    wp.element.render(component, node);
    document.body.classList.add('redux-templates-builder-modal-open');
  },

  close() {
    onClose && onClose(() => {
      wp.element.unmountComponentAtNode(node);
      document.body.classList.remove('redux-templates-builder-modal-open');
    });
  },

  openCustomizer(component) {
    if (!customizerNode) {
      customizerNode = document.createElement('div');
      document.body.appendChild(customizerNode);
    }

    wp.element.render(component, customizerNode);
  },

  closeCustomizer() {
    if (customizerNode) {
      wp.element.unmountComponentAtNode(customizerNode);
      customizerNode = false;
    }
  },

  openFeedback(component) {
    feedbackNode = document.getElementsByClassName('feedback-wrapper');

    if (!feedbackNode || feedbackNode.length < 1) {
      feedbackNode = document.createElement('div');
      feedbackNode.className = 'feedback-wrapper';
      document.body.appendChild(feedbackNode);
    } else {
      feedbackNode = feedbackNode[0];
    }

    wp.element.render(component, feedbackNode);
  },

  closeFeedback() {
    if (feedbackNode) {
      wp.element.unmountComponentAtNode(feedbackNode);
      feedbackNode = false;
    }
  },

  isCustomizerOpened() {
    return customizerNode ? true : false;
  },

  hide() {
    document.body.classList.remove('redux-templates-builder-modal-open');
    node.classList.add('hidden');
  },

  show() {
    document.body.classList.add('redux-templates-builder-modal-open');
    if (node) node.classList.remove('hidden');
  }

};

/***/ }),

/***/ "./redux-templates/src/modal-preview/index.js":
/*!****************************************************!*\
  !*** ./redux-templates/src/modal-preview/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/modal-preview/index.js'");

/***/ }),

/***/ "./redux-templates/src/modal-promotor-score/index.js":
/*!***********************************************************!*\
  !*** ./redux-templates/src/modal-promotor-score/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PromotorScoreModal; });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modals_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals.scss */ "./redux-templates/src/modals.scss");
/* harmony import */ var _modals_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modals_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./redux-templates/src/modal-promotor-score/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const __ = wp.i18n.__;
const _wp = wp,
      apiFetch = _wp.apiFetch;
const dispatch = wp.data.dispatch;
const useState = wp.element.useState;

const _dispatch = dispatch('core/notices'),
      createSuccessNotice = _dispatch.createSuccessNotice,
      createErrorNotice = _dispatch.createErrorNotice;





function PromotorScoreModal(props) {
  const propOnClose = props.propOnClose; // from parent

  const _useState = useState(-1),
        _useState2 = _slicedToArray(_useState, 2),
        score = _useState2[0],
        setScore = _useState2[1];

  const message = useState('');

  const afterPost = response => {
    if (response.success) {
      createSuccessNotice(__('Thanks for your feedback, your input is very much valued.'), {
        type: 'snackbar'
      });
    } else {// createErrorNotice(response.data.message || __('Error'), { type: 'snackbar' });
    }

    delete redux_templates.nps;
  };

  const onCloseWizard = () => {
    apiFetch({
      path: 'redux/v1/templates/nps',
      method: 'POST',
      data: {
        nps: 'no-thanks'
      }
    }).then(afterPost).catch(afterPost);
    propOnClose();
  };

  const submitScore = () => {
    apiFetch({
      path: 'redux/v1/templates/nps',
      method: 'POST',
      data: {
        nps: score + 1
      }
    }).then(afterPost).catch(afterPost);
    propOnClose();
  };

  return wp.element.createElement("div", {
    className: "redux-templates-modal-overlay"
  }, wp.element.createElement("div", {
    className: "redux-templates-modal-wrapper"
  }, wp.element.createElement("div", {
    className: "redux-templates-modal-header"
  }, wp.element.createElement("h3", null, __('Can we ask you a question?', redux_templates.i18n)), wp.element.createElement("button", {
    className: "redux-templates-modal-close",
    onClick: onCloseWizard
  }, wp.element.createElement("i", {
    className: 'fas fa-times'
  }))), wp.element.createElement("div", {
    className: "redux-templates-psmodal-content"
  }, wp.element.createElement("h3", null, redux_templates.nps), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], null, [...Array(10).keys()].map(i => wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    key: i,
    isPrimary: score === i,
    onClick: () => setScore(i)
  }, i + 1))), -1 !== score && score < 5 && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["TextareaControl"] // label="Could you tell us more?"
  , {
    help: "Could you give us more details?",
    value: message // onChange={() => setState( { message } ) }

  })), wp.element.createElement("div", {
    className: "redux-templates-modal-footer nps-footer"
  }, wp.element.createElement("button", {
    className: "button button-primary",
    disabled: -1 === score,
    onClick: () => submitScore()
  }, __('Submit', redux_templates.i18n)), wp.element.createElement("a", {
    href: "#",
    onClick: onCloseWizard
  }, __('Close', redux_templates.i18n)))));
}
;

/***/ }),

/***/ "./redux-templates/src/modal-promotor-score/style.scss":
/*!*************************************************************!*\
  !*** ./redux-templates/src/modal-promotor-score/style.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modal-promotor-score/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/modals.scss":
/*!*****************************************!*\
  !*** ./redux-templates/src/modals.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./modals.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./redux-templates/src/modals.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./redux-templates/src/plugins/export-page-menu-item/index.js":
/*!********************************************************************!*\
  !*** ./redux-templates/src/plugins/export-page-menu-item/index.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _export_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../export/file */ "./redux-templates/src/plugins/export/file.js");
/* harmony import */ var _redux_templates_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~redux-templates/icons */ "./redux-templates/src/icons/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */




const Fragment = wp.element.Fragment;



function ExportPageContentMenuItem({
  createNotice,
  editedPostContent
}) {
  if (!wp.plugins) return null;
  const PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;

  const exportFullpage = () => {
    const fileContent = JSON.stringify({
      __file: 'core_block',
      content: editedPostContent
    }, null, 2);
    const fileName = 'page-template-export.json';
    Object(_export_file__WEBPACK_IMPORTED_MODULE_3__["download"])(fileName, fileContent, 'application/json');
  };

  return wp.element.createElement(Fragment, null, wp.element.createElement(PluginMoreMenuItem, {
    icon: Object(_redux_templates_icons__WEBPACK_IMPORTED_MODULE_4__["colorizeIcon"])(wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Dashicon"], {
      icon: "migrate"
    })),
    role: "menuitemcheckbox",
    onClick: exportFullpage
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Export Page', redux_templates.i18n)));
}

const ExportPageContentMenu = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(select => ({
  editedPostContent: select('core/editor').getEditedPostAttribute('content')
})), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withDispatch"])(dispatch => {
  const _dispatch = dispatch('core/notices'),
        createNotice = _dispatch.createNotice;

  return {
    createNotice
  };
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["ifCondition"])(({
  editedPostContent
}) => editedPostContent.length > 0))(ExportPageContentMenuItem);

if (wp.plugins) {
  const registerPlugin = wp.plugins.registerPlugin;
  registerPlugin('redux-templates-export-page', {
    render: ExportPageContentMenu
  });
}

/***/ }),

/***/ "./redux-templates/src/plugins/export/export-block-menu-item.js":
/*!**********************************************************************!*\
  !*** ./redux-templates/src/plugins/export/export-block-menu-item.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reusable */ "./redux-templates/src/plugins/export/reusable.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ "./redux-templates/src/plugins/export/file.js");
/* harmony import */ var _redux_templates_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~redux-templates/icons */ "./redux-templates/src/icons/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




/**
 * WordPress dependencies
 */

const __ = wp.i18n.__;
const _wp$data = wp.data,
      withSelect = _wp$data.withSelect,
      select = _wp$data.select;
const compose = wp.compose.compose;
const Fragment = wp.element.Fragment;
const withSpokenMessages = wp.components.withSpokenMessages;
const serialize = wp.blocks.serialize;

/**
 * Render plugin
 */

function ExportManager(props) {
  const selectedBlockCount = props.selectedBlockCount,
        selectedBlock = props.selectedBlock,
        selectedBlocks = props.selectedBlocks;
  if (!wp.editPost) return null;
  const PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;

  const saveAsJSON = () => {
    if (selectedBlockCount < 1) {
      return;
    }

    let blocks;
    let title = 'redux_templates/export';

    if (selectedBlockCount === 1) {
      //export as reusable when reusable is selected
      if (selectedBlock.name === 'core/block') {
        Object(_reusable__WEBPACK_IMPORTED_MODULE_1__["default"])(selectedBlock.attributes.ref);
        return;
      }

      blocks = serialize(selectedBlock);
      title = selectedBlock.name;
    }

    if (selectedBlockCount > 1) {
      blocks = serialize(selectedBlocks);
    } //do export magic


    const fileContent = JSON.stringify({
      __file: 'core_block',
      content: blocks
    }, null, 2);
    const fileName = 'block-template-' + Object(lodash__WEBPACK_IMPORTED_MODULE_0__["kebabCase"])(title) + '.json';
    Object(_file__WEBPACK_IMPORTED_MODULE_2__["download"])(fileName, fileContent, 'application/json');
  };

  return wp.element.createElement(Fragment, null, wp.element.createElement(PluginBlockSettingsMenuItem, {
    icon: Object(_redux_templates_icons__WEBPACK_IMPORTED_MODULE_3__["colorizeIcon"])(wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dashicon"], {
      icon: "migrate"
    })),
    label: __('Export Block', redux_templates.i18n),
    onClick: saveAsJSON
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(() => {
  const _select = select('core/block-editor'),
        getSelectedBlockCount = _select.getSelectedBlockCount,
        getSelectedBlock = _select.getSelectedBlock,
        getMultiSelectedBlocks = _select.getMultiSelectedBlocks;

  const _select2 = select('core/block-editor'),
        getBlock = _select2.getBlock;

  return {
    selectedBlockCount: getSelectedBlockCount(),
    selectedBlock: getSelectedBlock(),
    selectedBlocks: getMultiSelectedBlocks(),
    getBlock
  };
}), withSpokenMessages])(ExportManager));

/***/ }),

/***/ "./redux-templates/src/plugins/export/file.js":
/*!****************************************************!*\
  !*** ./redux-templates/src/plugins/export/file.js ***!
  \****************************************************/
/*! exports provided: download */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "download", function() { return download; });
const block_export_json = function (el, type) {
  if (!el) {
    return;
  }

  if (el) {
    t ? t += '.json' : t = 'block.json', 'object' === ('undefined' === typeof e ? 'undefined' : u(e)) && (el = 1 === a.count ? JSON.stringify(e.shift(), void 0, 4) : JSON.stringify(e, void 0, 4));
    var n = new Blob([el], {
      type: 'text/json'
    }),
        o = document.createEvent('MouseEvents'),
        l = document.createElement('a');
    l.download = t, l.href = window.URL.createObjectURL(n), l.dataset.downloadurl = ['text/json', l.download, l.href].join(':'), o.initMouseEvent('click', !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(o);
  }
};

const block_export_html = function (el, type) {
  if (!el) {
    return;
  }

  if (el) {
    t ? t += '.json' : t = 'block.json', 'object' === ('undefined' === typeof e ? 'undefined' : u(e)) && (el = 1 === a.count ? JSON.stringify(e.shift(), void 0, 4) : JSON.stringify(e, void 0, 4));
    var n = new Blob([el], {
      type: 'text/json'
    }),
        o = document.createEvent('MouseEvents'),
        l = document.createElement('a');
    l.download = t, l.href = window.URL.createObjectURL(n), l.dataset.downloadurl = ['text/json', l.download, l.href].join(':'), o.initMouseEvent('click', !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(o);
  }
};

const block_export_page = function (el, type) {
  if (!el) {
    return;
  }

  if (el) {
    t ? t += '.json' : t = 'block.json', 'object' === ('undefined' === typeof e ? 'undefined' : u(e)) && (el = 1 === a.count ? JSON.stringify(e.shift(), void 0, 4) : JSON.stringify(e, void 0, 4));
    var n = new Blob([el], {
      type: 'text/json'
    }),
        o = document.createEvent('MouseEvents'),
        l = document.createElement('a');
    l.download = t, l.href = window.URL.createObjectURL(n), l.dataset.downloadurl = ['text/json', l.download, l.href].join(':'), o.initMouseEvent('click', !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), l.dispatchEvent(o);
  }
};
/**
 * Downloads a file.
 *
 * @param {string} fileName    File Name.
 * @param {string} content     File Content.
 * @param {string} contentType File mime type.
 */


function download(fileName, content, contentType) {
  const file = new window.Blob([content], {
    type: contentType
  }); // IE11 can't use the click to download technique
  // we use a specific IE11 technique instead.

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, fileName);
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

/***/ }),

/***/ "./redux-templates/src/plugins/export/index.js":
/*!*****************************************************!*\
  !*** ./redux-templates/src/plugins/export/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _export_block_menu_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export-block-menu-item */ "./redux-templates/src/plugins/export/export-block-menu-item.js");


if (wp.plugins) {
  const registerPlugin = wp.plugins.registerPlugin;
  registerPlugin('redux-templates-export', {
    render: _export_block_menu_item__WEBPACK_IMPORTED_MODULE_0__["default"]
  });
}

/***/ }),

/***/ "./redux-templates/src/plugins/export/reusable.js":
/*!********************************************************!*\
  !*** ./redux-templates/src/plugins/export/reusable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/plugins/export/reusable.js'");

/***/ }),

/***/ "./redux-templates/src/plugins/library-context-menu-item/index.js":
/*!************************************************************************!*\
  !*** ./redux-templates/src/plugins/library-context-menu-item/index.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _modal_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal-library */ "./redux-templates/src/modal-library/index.js");
/* harmony import */ var _redux_templates_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~redux-templates/icons */ "./redux-templates/src/icons/index.js");
/**
 * WordPress dependencies
 */






const Fragment = wp.element.Fragment;

function OpenLibraryContentMenuItem() {
  if (!wp.plugins) return null;
  const PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
  return wp.element.createElement(Fragment, null, wp.element.createElement(PluginMoreMenuItem, {
    icon: Object(_redux_templates_icons__WEBPACK_IMPORTED_MODULE_5__["ReduxTemplatesIconColor"])(),
    role: "menuitemcheckbox",
    onClick: () => {
      _modal_manager__WEBPACK_IMPORTED_MODULE_3__["ModalManager"].open(wp.element.createElement(_modal_library__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Template Library', redux_templates.i18n)));
}

const OpenLibraryContentMenu = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(select => ({})), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withDispatch"])(dispatch => {}))(OpenLibraryContentMenuItem);

if (wp.plugins) {
  const registerPlugin = wp.plugins.registerPlugin;
  registerPlugin('redux-open-library-context', {
    render: OpenLibraryContentMenu
  });
}

/***/ }),

/***/ "./redux-templates/src/plugins/share-block-btn/buttons.js":
/*!****************************************************************!*\
  !*** ./redux-templates/src/plugins/share-block-btn/buttons.js ***!
  \****************************************************************/
/*! exports provided: ShareBlockButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareBlockButton", function() { return ShareBlockButton; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons */ "./redux-templates/src/icons/index.js");
/* harmony import */ var _modal_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal-manager */ "./redux-templates/src/modal-manager/index.js");
/* harmony import */ var _redux_templates_modal_feedback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~redux-templates/modal-feedback */ "./redux-templates/src/modal-feedback/index.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _stores_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../stores/helper */ "./redux-templates/src/stores/helper.js");












/**
 * Based on: https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/convert-to-group-buttons/convert-button.js
 */

/**
 * Internal dependencies
 */

const options = lodash_sortBy__WEBPACK_IMPORTED_MODULE_9___default()(Object(_stores_helper__WEBPACK_IMPORTED_MODULE_11__["getWithExpiry"])('page_categories_list'), 'label');
const schema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      title: 'Block Title'
    },
    category: {
      type: 'string',
      title: 'Category',
      enum: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(options, 'value'),
      enumNames: lodash_map__WEBPACK_IMPORTED_MODULE_10___default()(options, 'label')
    },
    description: {
      type: 'string',
      title: 'Description'
    }
  }
};
const uiSchema = {
  title: {
    classNames: 'fixed-control'
  },
  category: {
    classNames: 'fixed-control'
  },
  description: {
    'ui:widget': 'textarea'
  }
};
function ShareBlockButton({
  clientIds
}) {
  // Only supported by WP >= 5.3.
  if (!clientIds) {
    return null;
  }

  const onShareBlock = () => {
    const data = {
      postID: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/editor').getCurrentPostId(),
      editor_blocks: Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getBlocksByClientId(clientIds),
      type: 'block'
    };
    _modal_manager__WEBPACK_IMPORTED_MODULE_7__["ModalManager"].openFeedback(wp.element.createElement(_redux_templates_modal_feedback__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Redux Shares', redux_templates.i18n),
      width: 700,
      description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Share this design', redux_templates.i18n),
      schema: schema,
      uiSchema: uiSchema,
      data: data,
      headerImage: wp.element.createElement("i", {
        className: "fas fa-share header-icon"
      }),
      endpoint: "share",
      onSuccess: data => window.open(data.data.url, '_blank'),
      buttonLabel: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Submit Template', redux_templates.i18n)
    }));
  };

  return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, wp.element.createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__["PluginBlockSettingsMenuItem"], {
    icon: _icons__WEBPACK_IMPORTED_MODULE_6__["ReduxTemplatesIcon"],
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Share Block', redux_templates.i18n),
    onClick: onShareBlock
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])((dispatch, {
  clientIds,
  onToggle = lodash__WEBPACK_IMPORTED_MODULE_0__["noop"],
  blocksSelection = []
}) => {
  const _dispatch = dispatch('core/block-editor'),
        replaceBlocks = _dispatch.replaceBlocks;

  return {
    onExportBlock() {
      if (!blocksSelection.length) {
        return;
      }

      console.log(blocksSelection);
      let blocks = wp.data.select('core/block-editor').getBlocks();
      let fileName = 'blocks.json';
      const title = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getSelectedBlockName();
      const content = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["select"])('core/block-editor').getSelectedBlockClientId(); // const content = post.content.raw;

      const fileContent = JSON.stringify({
        __file: 'wp_block',
        title,
        content
      }, null, 2);
      console.log(fileContent); // const theFileName = kebabCase( title ) + '.json';
      //
      // download( theFileName, fileContent, 'application/json' );
      //
      //
      //
      // if (blocksSelection.length == 1) {
      //     fileName = blocksSelection[0].name.replace('/', '_') + '.json'
      // }
      //
      // saveData(blocksSelection, fileName, 'json');

      onToggle();
    }

  };
})])(ShareBlockButton));

/***/ }),

/***/ "./redux-templates/src/plugins/share-block-btn/index.js":
/*!**************************************************************!*\
  !*** ./redux-templates/src/plugins/share-block-btn/index.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./redux-templates/src/plugins/share-block-btn/buttons.js");
/* harmony import */ var _redux_templates_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~redux-templates/icons */ "./redux-templates/src/icons/index.js");




if (wp.plugins) {
  const registerPlugin = wp.plugins.registerPlugin;
  const Buttons = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["withSelect"])(select => {
    const _select = select('core/block-editor'),
          getSelectedBlockClientIds = _select.getSelectedBlockClientIds; // Only supported by WP >= 5.3.


    if (!getSelectedBlockClientIds) {
      return {};
    }

    return {
      clientIds: getSelectedBlockClientIds()
    };
  })(_buttons__WEBPACK_IMPORTED_MODULE_1__["default"]); // TODO - Finish this off and show to users.
  // registerPlugin( 'redux-templates-share-block-btn', {
  //     icon: ReduxTemplatesIcon,
  //     render: Buttons,
  // } );
}

/***/ }),

/***/ "./redux-templates/src/plugins/sidebar-share/index.js":
/*!************************************************************!*\
  !*** ./redux-templates/src/plugins/sidebar-share/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/plugins/sidebar-share/index.js'");

/***/ }),

/***/ "./redux-templates/src/stores/actionHelper.js":
/*!****************************************************!*\
  !*** ./redux-templates/src/stores/actionHelper.js ***!
  \****************************************************/
/*! exports provided: handleBlock, processImportHelper, afterImportHandling, reloadLibrary, installedBlocks, installedBlocksTypes, openSitePreviewModal */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/stores/actionHelper.js'");

/***/ }),

/***/ "./redux-templates/src/stores/dependencyHelper.js":
/*!********************************************************!*\
  !*** ./redux-templates/src/stores/dependencyHelper.js ***!
  \********************************************************/
/*! exports provided: getPluginInstance, needsPluginInstall, needsPluginPro, pluginInfo, processPlugin, requiresPro, requiresInstall, requiresReduxPro, isPluginReduxProMerged, isTemplateReadyToInstall, isTemplatePremium, isReduxProInstalled */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/stores/dependencyHelper.js'");

/***/ }),

/***/ "./redux-templates/src/stores/helper.js":
/*!**********************************************!*\
  !*** ./redux-templates/src/stores/helper.js ***!
  \**********************************************/
/*! exports provided: REDUXTEMPLATES_PRO_KEY, NONE_KEY, getCurrentState, categorizeData, parseSectionData, parsePageData, parseCollectionData, getCollectionChildrenData, isBlockPro, missingPro, missingRequirement, setWithExpiry, getWithExpiry, handlingLocalStorageData, columnMap, pageSizeMap, getOnlySelectedDependencyFilters, getDefaultDependencies, getInstalledDependencies, missingPluginsArray, loadChallengeStep, saveChallengeStep */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/stores/helper.js'");

/***/ }),

/***/ "./redux-templates/src/stores/index.js":
/*!*********************************************!*\
  !*** ./redux-templates/src/stores/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/kevin/code/extendify/wordpress/web/app/plugins/redux/redux-templates/src/stores/index.js'");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),

/***/ "@wordpress/blocks":
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),

/***/ "@wordpress/compose":
/*!*****************************!*\
  !*** external "wp.compose" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.compose;

/***/ }),

/***/ "@wordpress/data":
/*!**************************!*\
  !*** external "wp.data" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),

/***/ "@wordpress/edit-post":
/*!******************************!*\
  !*** external "wp.editPost" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.editPost;

/***/ }),

/***/ "@wordpress/element":
/*!*****************************!*\
  !*** external "wp.element" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.element;

/***/ }),

/***/ "@wordpress/i18n":
/*!**************************!*\
  !*** external "wp.i18n" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=redux-templates.js.map
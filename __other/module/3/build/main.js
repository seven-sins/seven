/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module){

	    var a = __webpack_require__(1);
	    var b = __webpack_require__(2);

	    var oInput = document.getElementById('input1');
	    var oDiv1 = document.getElementById('div1');
	    var oDiv2 = document.getElementById('div2');
	    var oDiv3 = document.getElementById('div3');

	    a.drag(oDiv3);

	    b.scale(oDiv1, oDiv2);

	    oInput.onclick = function(){
	        oDiv1.style.display = 'block';

	    };

	    function show(){
	        alert(1);
	    }

	    exports.show = show;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module){

	    function drag(obj){
	        var disX = 0;
	        var disY = 0;

	        obj.onmousedown = function(ev){
	            var ev = ev || window.event;
	            disX = ev.clientX - obj.offsetLeft;
	            disY = ev.clientY - obj.offsetTop;

	            document.onmousemove = function(ev){
	                var ev = ev || window.event;
	                obj.style.left = ev.clientX - disX + 'px';
	                obj.style.top = ev.clientY - disY + 'px';
	            };

	            document.onmouseup = function(){
	                document.onmousemove = null;
	                document.onmouseup = null;
	            };

	            return false;
	        }
	    }

	    exports.drag = drag;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module){

	    function scale(obj1, obj2){
	        var downX = 0;
	        var downY = 0;
	        var downW = 0;
	        var downH = 0;

	        obj2.onmousedown = function(e){
	            var e = e || window.event;

	            downX = e.clientX;
	            downY = e.clientY;
	            downW = obj1.offsetWidth;
	            downH = obj1.offsetHeight;

	            document.onmousemove = function(e){
	                var e = e || window.event;
	                obj1.style.width = e.clientX - downX + downW + 'px';
	                obj1.style.height = e.clientY - downY + downH + 'px';
	            };

	            document.onmouseup = function(){
	                document.onmousemove = null;
	                document.onmouseup = null;
	            };

	            return false;
	        }
	    }

	    exports.scale = scale;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);
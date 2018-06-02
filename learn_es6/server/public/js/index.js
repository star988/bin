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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	{
		/*Promise*/

		var timeout = function timeout(ms) {
			return new Promise(function (resolve, reject) {
				setTimeout(resolve, ms, 'done');
			});
		};

		timeout(3000).then(function (res) {
			console.log(res);
		});
	}

	{
		var p1 = new Promise(function (resolve, reject) {
			setTimeout(function () {
				return reject(new Error('fails'));
			}, 3000);
		});

		var p2 = new Promise(function (resolve, reject) {
			setTimeout(function () {
				return resolve(p1);
			}, 1000);
		});

		p2.then(function (res) {
			console.log('res');
		}).catch(function (err) {
			console.log('err');
		});
	}

	{
		var getJson = function getJson(obj) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					if (Reflect.get(obj, 'age') > 18) {
						return resolve(obj);
					} else {
						return reject(new Error('年龄不满足条件'));
					}
				}, 1000);
			});
		};

		getJson({ name: 'simba', age: 30 }).then(function (res) {
			console.log(res);
			return getJson({ name: 'simba988', age: 10 });
		}).then(function (res) {
			console.log(res);
		}).catch(function (err) {
			console.log(err);
		});
	}

	{
		var loadImgs = function loadImgs(src) {
			return new Promise(function (resolve, reject) {
				var img = document.createElement('img');
				img.src = src;
				img.onload = function () {
					return resolve(img);
				};
				img.noerror = function () {
					return reject(new Error('加载失败'));
				};
			});
		};

		var showImgs = function showImgs(imgs) {
			Array.from(imgs).forEach(function (item) {
				var p = document.createElement('p');
				p.appendChild(item);
				document.body.appendChild(p);
			});
		};

		var showImg = function showImg(img) {
			var p = document.createElement('p');
			p.appendChild(img);
			document.body.appendChild(p);
		};

		Promise.all([loadImgs('http://www.imooc.com/static/img/common/logo.png'), loadImgs('http://www.imooc.com/static/img/common/logo.png'), loadImgs('http://img.mukewang.com/user/54584cb50001e5b302200220-100-100.jpg')]).then(function (res) {
			showImgs(res);
		}).catch(function (err) {
			throw err;
		});

		Promise.race([loadImgs('http://www.imooc.com/static/img/common/logo.png'), loadImgs('http://www.imooc.com/static/img/common/logo.png'), loadImgs('http://img.mukewang.com/user/54584cb50001e5b302200220-100-100.jpg')]).then(function (res) {
			showImg(res);
		}).catch(function (err) {
			console.log(err);
		});

		console.info('完成了所有需要的配置以及git版本管理，简直666');
	}

/***/ })
/******/ ]);
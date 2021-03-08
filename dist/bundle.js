/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class/Circle.js":
/*!*****************************!*\
  !*** ./src/class/Circle.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _require = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\"),\n    getDistance = _require.getDistance,\n    generateSpeed = _require.generateSpeed,\n    resolveCollision = _require.resolveCollision;\n\nvar Circle = function Circle(x, y, dx, dy, radius, color, pen, canvasWidth, canvasHeight, mouse) {\n  var _this = this;\n\n  _classCallCheck(this, Circle);\n\n  this.setup = function () {\n    _this.pen.beginPath();\n\n    _this.pen.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2, false);\n\n    _this.pen.strokeStyle = _this.color;\n\n    _this.pen.stroke();\n  };\n\n  this.update = function (circles) {\n    _this.setup();\n\n    for (var i = 0; i < circles.length; i++) {\n      if (_this !== circles[i]) {\n        var space = getDistance(_this.x, _this.y, circles[i].x, circles[i].y) - _this.radius * 2;\n\n        if (space < 0) {\n          resolveCollision(_this, circles[i]);\n        }\n      }\n    }\n\n    if (_this.x + _this.radius > _this.canvasWidth || _this.x - _this.radius < 0) {\n      _this.dx = -_this.dx;\n    }\n\n    if (_this.y + _this.radius > _this.canvasHeight || _this.y - _this.radius < 0) {\n      _this.dy = -_this.dy;\n    }\n\n    _this.x += _this.dx;\n    _this.y += _this.dy;\n  };\n\n  this.x = x;\n  this.y = y;\n  this.dx = generateSpeed(dx);\n  this.dy = generateSpeed(dy);\n  this.radius = radius;\n  this.color = color;\n  this.pen = pen;\n  this.canvasWidth = canvasWidth;\n  this.canvasHeight = canvasHeight;\n  this.mouse = mouse;\n  this.mass = 1;\n};\n\nmodule.exports = Circle;\n\n//# sourceURL=webpack://collision/./src/class/Circle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Circle = __webpack_require__(/*! ./class/Circle */ \"./src/class/Circle.js\");\n\nvar _require = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.js\"),\n    getDistance = _require.getDistance;\n\nvar canvas = document.querySelector('canvas');\ncanvas.width = document.body.clientWidth;\ncanvas.height = document.body.clientHeight;\nvar pen = canvas.getContext('2d');\nvar circleArrays = [];\nvar mouse = {\n  x: undefined,\n  y: undefined\n};\nvar colors = ['#11faa4', '#55ffaa', '#fcba03', '#fcba03', '#66ffee', '#22ffaa', '#11ffaa', '#99ffaa', '#44ffaa', '#ff22cc', '#cc77ff'];\nwindow.addEventListener('mousemove', function (e) {\n  mouse.x = e.x;\n  mouse.y = e.y;\n});\n\ninit = function init() {\n  var x = Math.random() * canvas.width;\n  var y = Math.random() * canvas.height;\n  var dx = 1;\n  var dy = 1;\n  var radius = 50;\n\n  for (var i = 0; i < 5; i++) {\n    if (i !== 0) {\n      for (var j = 0; j < circleArrays.length; j++) {\n        if (getDistance(x, y, circleArrays[j].x, circleArrays[j].y) < radius * 2) {\n          x = Math.random() * canvas.width;\n          y = Math.random() * canvas.height;\n          j = -1;\n        }\n      }\n    }\n\n    circleArrays.push(new Circle(x, y, dx, dy, radius, colors[Math.ceil(Math.random() * colors.length)], pen, canvas.width, canvas.height, mouse));\n  }\n};\n\nfunction animate() {\n  pen.clearRect(0, 0, canvas.width, canvas.height);\n  requestAnimationFrame(animate);\n  circleArrays.map(function (circle) {\n    circle.update(circleArrays);\n  });\n}\n\ninit();\nanimate();\n\n//# sourceURL=webpack://collision/./src/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = {\n  getDistance: function getDistance(x1, y1, x2, y2) {\n    return Math.sqrt(Math.pow(x2 - x1, 2), Math.pow(y2 - y1, 2));\n  },\n  generateSpeed: function generateSpeed(speed) {\n    return speed * Math.random();\n  },\n  rotate: function rotate(velocity, angle) {\n    var rotatedVelocities = {\n      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),\n      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)\n    };\n    return rotatedVelocities;\n  },\n  resolveCollision: function resolveCollision(particle, otherParticle) {\n    var xVelocityDiff = particle.dx - otherParticle.dx;\n    var yVelocityDiff = particle.dy - otherParticle.dy;\n    var xDist = otherParticle.x - particle.x;\n    var yDist = otherParticle.y - particle.y; // Prevent accidental overlap of particles\n\n    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {\n      // Grab angle between the two colliding particles\n      var angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x); // Store mass in var for better readability in collision equation\n\n      var m1 = particle.mass;\n      var m2 = otherParticle.mass; // Velocity before equation\n\n      var u1 = rotate(particle.velocity, angle);\n      var u2 = rotate(otherParticle.velocity, angle); // Velocity after 1d collision equation\n\n      var v1 = {\n        x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),\n        y: u1.y\n      };\n      var v2 = {\n        x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),\n        y: u2.y\n      }; // Final velocity after rotating axis back to original location\n\n      var vFinal1 = rotate(v1, -angle);\n      var vFinal2 = rotate(v2, -angle); // Swap particle velocities for realistic bounce effect\n\n      particle.dx = vFinal1.x;\n      particle.dy = vFinal1.y;\n      otherParticle.dx = vFinal2.x;\n      otherParticle.dy = vFinal2.y;\n    }\n  }\n};\n\n//# sourceURL=webpack://collision/./src/utils/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
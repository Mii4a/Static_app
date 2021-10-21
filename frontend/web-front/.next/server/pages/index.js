"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/app/frontend/src/pages/index.tsx\";\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    0: users,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  const getAPIData = async () => {\n    let instance;\n    instance = axios__WEBPACK_IMPORTED_MODULE_1___default().create({\n      baseURL: 'http://localhost:8080'\n    });\n\n    try {\n      const response = await instance.get('/api/');\n      console.log(response === null || response === void 0 ? void 0 : response.data);\n      const userdata = response === null || response === void 0 ? void 0 : response.data;\n      setUser(userdata);\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [\"hello world\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      onClick: getAPIData,\n      children: \"click\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined), users.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n        children: item.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: item.email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }, undefined)]\n    }, item.id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, undefined))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, undefined);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFRQSxpRUFBZSxNQUFNO0FBQ25CLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFtQkgsK0NBQVEsQ0FBUyxFQUFULENBQWpDOztBQUVBLFFBQU1JLFVBQVUsR0FBRyxZQUFZO0FBQzdCLFFBQUlDLFFBQUo7QUFFQUEsSUFBQUEsUUFBUSxHQUFHSixtREFBQSxDQUFhO0FBQ3RCTSxNQUFBQSxPQUFPLEVBQUU7QUFEYSxLQUFiLENBQVg7O0FBSUEsUUFBSTtBQUNGLFlBQU1DLFFBQVEsR0FBRyxNQUFNSCxRQUFRLENBQUNJLEdBQVQsQ0FBYSxPQUFiLENBQXZCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaLGFBQVlBLFFBQVosdUJBQVlBLFFBQVEsQ0FBRUksSUFBdEI7QUFDQSxZQUFNQyxRQUFRLEdBQUdMLFFBQUgsYUFBR0EsUUFBSCx1QkFBR0EsUUFBUSxDQUFFSSxJQUEzQjtBQUNBVCxNQUFBQSxPQUFPLENBQUNVLFFBQUQsQ0FBUDtBQUNELEtBTEQsQ0FLRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEosTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLEtBQVo7QUFDRDtBQUNGLEdBZkQ7O0FBaUJBLHNCQUNFO0FBQUEsMkNBRUU7QUFBUSxhQUFPLEVBQUVWLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0dGLEtBQUssQ0FBQ2EsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLGtCQUFJRCxJQUFJLENBQUNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLE9BQVVGLElBQUksQ0FBQ0csRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQWhDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcblxudHlwZSBVc2VyID0ge1xuICBpZDogc3RyaW5nLFxuICB1c2VybmFtZTogU3RyaW5nLFxuICBlbWFpbDogU3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCgoKSA9PiB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKVxuXG4gIGNvbnN0IGdldEFQSURhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGluc3RhbmNlOiBBeGlvc0luc3RhbmNlXG5cbiAgICBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaW5zdGFuY2UuZ2V0KCcvYXBpLycpXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZT8uZGF0YSlcbiAgICAgIGNvbnN0IHVzZXJkYXRhID0gcmVzcG9uc2U/LmRhdGEgYXMgVXNlcltdXG4gICAgICBzZXRVc2VyKHVzZXJkYXRhKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBoZWxsbyB3b3JsZFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRBUElEYXRhfT5jbGljazwvYnV0dG9uPlxuICAgICAge3VzZXJzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgPGgxPntpdGVtLnVzZXJuYW1lfTwvaDE+XG4gICAgICAgICAgPHA+e2l0ZW0uZW1haWx9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59KSBhcyBGQ1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZXJzIiwic2V0VXNlciIsImdldEFQSURhdGEiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJyZXNwb25zZSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlcmRhdGEiLCJlcnJvciIsIm1hcCIsIml0ZW0iLCJ1c2VybmFtZSIsImVtYWlsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
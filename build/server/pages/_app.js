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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/_App/GoTop.js":
/*!**********************************!*\
  !*** ./components/_App/GoTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GoTop = ({ scrollStepInPx , delayInMs  })=>{\n    const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const timeoutRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        document.addEventListener(\"scroll\", ()=>{\n            if (window.scrollY > 170) {\n                setThePosition(true);\n            } else {\n                setThePosition(false);\n            }\n        });\n    }, []);\n    const onScrollStep = ()=>{\n        if (window.pageYOffset === 0) {\n            clearInterval(timeoutRef.current);\n        }\n        window.scroll(0, window.pageYOffset - scrollStepInPx);\n    };\n    const scrollToTop = ()=>{\n        timeoutRef.current = setInterval(onScrollStep, delayInMs);\n    };\n    const renderGoTopIcon = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: `go-top ${thePosition ? \"active\" : \"\"}`,\n            onClick: scrollToTop,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"bx bx-chevrons-up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\components\\\\_App\\\\GoTop.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    className: \"bx bx-chevrons-up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\components\\\\_App\\\\GoTop.js\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\components\\\\_App\\\\GoTop.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: renderGoTopIcon()\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoTop);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvR29Ub3AuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUUxQixNQUFNQyxLQUFLLEdBQUcsQ0FBQyxFQUFDQyxjQUFjLEdBQUVDLFNBQVMsR0FBQyxHQUFLO0lBRTNDLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR0wscURBQWMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsTUFBTU8sVUFBVSxHQUFHUCxtREFBWSxDQUFDLElBQUksQ0FBQztJQUVyQ0Esc0RBQWUsQ0FBQyxJQUFNO1FBQ2xCVSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFNO1lBQ3RDLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsRUFBRTtnQkFDdEJSLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsT0FBTztnQkFDSEEsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNUyxZQUFZLEdBQUcsSUFBTTtRQUN2QixJQUFJRixNQUFNLENBQUNHLFdBQVcsS0FBSyxDQUFDLEVBQUM7WUFDekJDLGFBQWEsQ0FBQ1QsVUFBVSxDQUFDVSxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0RMLE1BQU0sQ0FBQ00sTUFBTSxDQUFDLENBQUMsRUFBRU4sTUFBTSxDQUFDRyxXQUFXLEdBQUdiLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxNQUFNaUIsV0FBVyxHQUFHLElBQU07UUFDdEJaLFVBQVUsQ0FBQ1UsT0FBTyxHQUFHRyxXQUFXLENBQUNOLFlBQVksRUFBRVgsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELE1BQU1rQixlQUFlLEdBQUcsSUFBTTtRQUMxQixxQkFDSSw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUVuQixXQUFXLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQUVvQixPQUFPLEVBQUVMLFdBQVc7OzhCQUN6RSw4REFBQ00sR0FBQztvQkFBQ0YsU0FBUyxFQUFDLG1CQUFtQjs7Ozs7NkJBQUs7OEJBQ3JDLDhEQUFDRSxHQUFDO29CQUFDRixTQUFTLEVBQUMsbUJBQW1COzs7Ozs2QkFBSzs7Ozs7O3FCQUNuQyxDQUNUO0lBQ0wsQ0FBQztJQUVELHFCQUNJO2tCQUNLRixlQUFlLEVBQUU7cUJBQ25CLENBQ047QUFDTCxDQUFDO0FBRUQsaUVBQWVwQixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4YS8uL2NvbXBvbmVudHMvX0FwcC9Hb1RvcC5qcz83ZTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHb1RvcCA9ICh7c2Nyb2xsU3RlcEluUHgsIGRlbGF5SW5Nc30pID0+IHtcclxuXHJcbiAgICBjb25zdCBbdGhlUG9zaXRpb24sIHNldFRoZVBvc2l0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRpbWVvdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbih0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VGhlUG9zaXRpb24oZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gICAgY29uc3Qgb25TY3JvbGxTdGVwID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgd2luZG93LnBhZ2VZT2Zmc2V0IC0gc2Nyb2xsU3RlcEluUHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldEludGVydmFsKG9uU2Nyb2xsU3RlcCwgZGVsYXlJbk1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJHb1RvcEljb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bnby10b3AgJHt0aGVQb3NpdGlvbiA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9ucy11cCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1jaGV2cm9ucy11cCc+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cmVuZGVyR29Ub3BJY29uKCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvVG9wOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkdvVG9wIiwic2Nyb2xsU3RlcEluUHgiLCJkZWxheUluTXMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwidXNlU3RhdGUiLCJ0aW1lb3V0UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsIm9uU2Nyb2xsU3RlcCIsInBhZ2VZT2Zmc2V0IiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJzY3JvbGxUb1RvcCIsInNldEludGVydmFsIiwicmVuZGVyR29Ub3BJY29uIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/_App/GoTop.js\n");

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GoTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GoTop */ \"./components/_App/GoTop.js\");\n\n\n\n\nconst Layout = ({ children  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Flexa - Insurance & Banking Finance Company React Template\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\components\\\\_App\\\\Layout.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, undefined),\n            children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GoTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                scrollStepInPx: \"100\",\n                delayInMs: \"10.50\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\components\\\\_App\\\\Layout.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDRztBQUNEO0FBRTNCLE1BQU1HLE1BQU0sR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzdCLHFCQUNJOzswQkFDSSw4REFBQ0gsa0RBQUk7O2tDQUNELDhEQUFDSSxPQUFLO2tDQUFDLDREQUEwRDs7Ozs7aUNBQVE7a0NBQ3pFLDhEQUFDQyxNQUFJO3dCQUNEQyxJQUFJLEVBQUMsVUFBVTt3QkFDZkMsT0FBTyxFQUFDLHVEQUF1RDs7Ozs7aUNBQ2pFOzs7Ozs7eUJBQ0M7WUFFTkosUUFBUTswQkFFVCw4REFBQ0YsOENBQUs7Z0JBQ0ZPLGNBQWMsRUFBQyxLQUFLO2dCQUNwQkMsU0FBUyxFQUFDLE9BQU87Ozs7O3lCQUNuQjs7b0JBQ0gsQ0FDTDtBQUNOLENBQUM7QUFFRCxpRUFBZVAsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxleGEvLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzPzBmOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IEdvVG9wIGZyb20gJy4vR29Ub3AnXHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RmxleGEgLSBJbnN1cmFuY2UgJiBCYW5raW5nIEZpbmFuY2UgQ29tcGFueSBSZWFjdCBUZW1wbGF0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIiBcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgIDxHb1RvcCBcclxuICAgICAgICAgICAgICAgIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgXHJcbiAgICAgICAgICAgICAgICBkZWxheUluTXM9XCIxMC41MFwiIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJHb1RvcCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJzY3JvbGxTdGVwSW5QeCIsImRlbGF5SW5NcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/_App/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/bootstrap.min.css */ \"./styles/bootstrap.min.css\");\n/* harmony import */ var _styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_animate_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/animate.css */ \"./styles/animate.css\");\n/* harmony import */ var _styles_animate_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_animate_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/boxicons.min.css */ \"./styles/boxicons.min.css\");\n/* harmony import */ var _styles_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_boxicons_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/flaticon.css */ \"./styles/flaticon.css\");\n/* harmony import */ var _styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_flaticon_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_meanmenu_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/meanmenu.css */ \"./styles/meanmenu.css\");\n/* harmony import */ var _styles_meanmenu_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_meanmenu_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css/bundle */ \"./node_modules/swiper/swiper-bundle.min.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css_bundle__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/responsive.css */ \"./styles/responsive.css\");\n/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/_App/Layout */ \"./components/_App/Layout.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n// Global Style\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_2___default().init();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Layout__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\20109\\\\Documents\\\\GitHub\\\\ninja_landing\\\\pages\\\\_app.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ0o7QUFDb0I7QUFDTDtBQUNOO0FBQ0s7QUFDSjtBQUNBO0FBQzJCO0FBQ3ZDO0FBQ087QUFFM0IsZUFBZTtBQUNjO0FBQ0s7QUFFYTtBQUUvQyxNQUFNRyxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxHQUFLO0lBQzFDTCxzREFBZSxDQUFDLElBQU07UUFDcEJDLCtDQUFRLEVBQUUsQ0FBQztJQUNiLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDQywrREFBTTtrQkFDTCw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O3FCQUFJOzs7OztpQkFDckIsQ0FDVDtBQUNKLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxleGEvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9hbmltYXRlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvYm94aWNvbnMubWluLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZmxhdGljb24uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9tZWFubWVudS5jc3NcIjtcclxuaW1wb3J0IFwicmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvYnVuZGxlXCI7XHJcblxyXG4vLyBHbG9iYWwgU3R5bGVcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIjtcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvX0FwcC9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBT1MiLCJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZUVmZmVjdCIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.min.css":
/*!***************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.min.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/animate.css":
/*!****************************!*\
  !*** ./styles/animate.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/bootstrap.min.css":
/*!**********************************!*\
  !*** ./styles/bootstrap.min.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/boxicons.min.css":
/*!*********************************!*\
  !*** ./styles/boxicons.min.css ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/flaticon.css":
/*!*****************************!*\
  !*** ./styles/flaticon.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/meanmenu.css":
/*!*****************************!*\
  !*** ./styles/meanmenu.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/responsive.css":
/*!*******************************!*\
  !*** ./styles/responsive.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("aos");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pix/[wallet]/[amount]",{

/***/ "./pages/pix/[wallet]/[amount].tsx":
/*!*****************************************!*\
  !*** ./pages/pix/[wallet]/[amount].tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PixPage\": function() { return /* binding */ PixPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_01_atoms_the_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/01-atoms/the-header */ \"./components/01-atoms/the-header.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PixPage = ()=>{\n    _s();\n    const pixData = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.rampInfo.pixData);\n    const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const copyToClipboard = ()=>{\n    // PIX API: integration needed\n    // navigator.clipboard.writeText(pixData.qr_code);\n    // setShowMessage(true);\n    // setTimeout(() => {\n    //   setShowMessage(false);\n    // }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md m-auto pb-10 min-h-[800px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"StableBridge - Buy tokens with Pix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Buy tokens with Pix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_01_atoms_the_header__WEBPACK_IMPORTED_MODULE_3__.TheHeader, {}, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative bg-white px-4 py-6 rounded-[40px] shadow-custom\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-gray-800 text-center text-lg\",\n                        children: \"It's in your hands now!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-600 text-center mt-2\",\n                        children: [\n                            \"Once you finish PIX payment, \",\n                            router.query.amount,\n                            \" SBRLs will be added to your wallet\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-800 m-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/blockful-qrcode.png\",\n                            alt: \"QR code\"\n                        }, void 0, false, {\n                            fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        title: \"Clique para copiar\",\n                        onClick: copyToClipboard,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: pixData.qr_code\n                        }, void 0, false, {\n                            fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PixPage, \"p7EV3wYmsTk/0zFqJ+wv5nA+FV4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = PixPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PixPage);\nvar _c;\n$RefreshReg$(_c, \"PixPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9waXgvW3dhbGxldF0vW2Ftb3VudF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBRUk7QUFDbUM7QUFDMUI7QUFDRjtBQUVqQyxNQUFNSyxVQUFvQixJQUFNOztJQUNyQyxNQUFNQyxVQUFVSCx3REFBV0EsQ0FBQyxDQUFDSSxRQUFlQSxNQUFNQyxRQUFRLENBQUNGLE9BQU87SUFDbEUsTUFBTSxDQUFDRyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTVUsU0FBU1Asc0RBQVNBO0lBRXhCLE1BQU1RLGtCQUFrQixJQUFNO0lBQzVCLDhCQUE4QjtJQUM5QixrREFBa0Q7SUFDbEQsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZCxrREFBSUE7O2tDQUNILDhEQUFDZTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNuQixzRUFBU0E7Ozs7OzBCQUVWLDhEQUFDb0I7Z0JBQUtSLFdBQVU7O2tDQUNkLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FBb0M7Ozs7OztrQ0FHbEQsOERBQUNVO3dCQUFFVixXQUFVOzs0QkFBeUM7NEJBQ3RCSCxPQUFPYyxLQUFLLENBQUNDLE1BQU07NEJBQUM7Ozs7Ozs7a0NBR3BELDhEQUFDYjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2E7NEJBQUlDLEtBQUk7NEJBQXVCQyxLQUFJOzs7Ozs7Ozs7OztrQ0FHdEMsOERBQUNDO3dCQUFPZixPQUFNO3dCQUFxQmdCLFNBQVNuQjtrQ0FDMUMsNEVBQUNZO3NDQUFHbEIsUUFBUTBCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCLEVBQUU7R0EzQ1czQjs7UUFDS0Ysb0RBQVdBO1FBRVpDLGtEQUFTQTs7O0tBSGJDO0FBNkNiLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BpeC9bd2FsbGV0XS9bYW1vdW50XS50c3g/YWRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlSGVhZGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvMDEtYXRvbXMvdGhlLWhlYWRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgY29uc3QgUGl4UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHBpeERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucmFtcEluZm8ucGl4RGF0YSk7XG4gIGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0U2hvd01lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoKSA9PiB7XG4gICAgLy8gUElYIEFQSTogaW50ZWdyYXRpb24gbmVlZGVkXG4gICAgLy8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocGl4RGF0YS5xcl9jb2RlKTtcbiAgICAvLyBzZXRTaG93TWVzc2FnZSh0cnVlKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHNldFNob3dNZXNzYWdlKGZhbHNlKTtcbiAgICAvLyB9LCAyMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbS1hdXRvIHBiLTEwIG1pbi1oLVs4MDBweF1cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3RhYmxlQnJpZGdlIC0gQnV5IHRva2VucyB3aXRoIFBpeDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCdXkgdG9rZW5zIHdpdGggUGl4XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5zdmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGhlSGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHB4LTQgcHktNiByb3VuZGVkLVs0MHB4XSBzaGFkb3ctY3VzdG9tXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIHRleHQtY2VudGVyIHRleHQtbGdcIj5cbiAgICAgICAgICBJdCdzIGluIHlvdXIgaGFuZHMgbm93IVxuICAgICAgICA8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXIgbXQtMlwiPlxuICAgICAgICAgIE9uY2UgeW91IGZpbmlzaCBQSVggcGF5bWVudCwge3JvdXRlci5xdWVyeS5hbW91bnR9IFNCUkxzIHdpbGwgYmUgYWRkZWRcbiAgICAgICAgICB0byB5b3VyIHdhbGxldFxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgbS02XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYmxvY2tmdWwtcXJjb2RlLnBuZ1wiIGFsdD1cIlFSIGNvZGVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxpbWcgc3JjPXtgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7cGl4RGF0YS5xcl9jb2RlfWB9IGFsdD1cIlFSIGNvZGVcIiAvPiAqL31cbiAgICAgICAgPGJ1dHRvbiB0aXRsZT1cIkNsaXF1ZSBwYXJhIGNvcGlhclwiIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+XG4gICAgICAgICAgPHA+e3BpeERhdGEucXJfY29kZX08L3A+XG4gICAgICAgICAgey8qIHtzaG93TWVzc2FnZSAmJiA8c3Bhbj5Db3BpZWQgdG8gY2xpcGJvYXJkITwvc3Bhbj59ICovfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBpeFBhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwiVGhlSGVhZGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VSb3V0ZXIiLCJQaXhQYWdlIiwicGl4RGF0YSIsInN0YXRlIiwicmFtcEluZm8iLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwicm91dGVyIiwiY29weVRvQ2xpcGJvYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInAiLCJxdWVyeSIsImFtb3VudCIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJxcl9jb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pix/[wallet]/[amount].tsx\n"));

/***/ })

});
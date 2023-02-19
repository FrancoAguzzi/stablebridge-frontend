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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PixPage\": function() { return /* binding */ PixPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_01_atoms_the_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/01-atoms/the-header */ \"./components/01-atoms/the-header.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PixPage = ()=>{\n    _s();\n    const pixData = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.rampInfo.pixData);\n    const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const copyToClipboard = ()=>{\n    // PIX API: integration needed\n    // navigator.clipboard.writeText(pixData.qr_code);\n    // setShowMessage(true);\n    // setTimeout(() => {\n    //   setShowMessage(false);\n    // }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md m-auto pb-10 min-h-[800px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"StableBridge - Buy tokens with Pix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Buy tokens with Pix\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_01_atoms_the_header__WEBPACK_IMPORTED_MODULE_3__.TheHeader, {}, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative bg-white px-4 py-6 rounded-[40px] shadow-custom\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-gray-800 text-center text-lg\",\n                        children: \"It's in your hands now!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-800 m-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/blockful-qrcode.png\",\n                            alt: \"QR code\"\n                        }, void 0, false, {\n                            fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        title: \"Clique para copiar\",\n                        onClick: copyToClipboard,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: pixData.qr_code\n                        }, void 0, false, {\n                            fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/pix/[wallet]/[amount].tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PixPage, \"lBnwEi/Xujz1pWbGkwQocUyYmco=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = PixPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PixPage);\nvar _c;\n$RefreshReg$(_c, \"PixPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9waXgvW3dhbGxldF0vW2Ftb3VudF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUE2QjtBQUVJO0FBQ21DO0FBQzFCO0FBRW5DLE1BQU1JLFVBQW9CLElBQU07O0lBQ3JDLE1BQU1DLFVBQVVGLHdEQUFXQSxDQUFDLENBQUNHLFFBQWVBLE1BQU1DLFFBQVEsQ0FBQ0YsT0FBTztJQUNsRSxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUVwRCxNQUFNUyxrQkFBa0IsSUFBTTtJQUM1Qiw4QkFBOEI7SUFDOUIsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1osa0RBQUlBOztrQ0FDSCw4REFBQ2E7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDakIsc0VBQVNBOzs7OzswQkFFViw4REFBQ2tCO2dCQUFLUixXQUFVOztrQ0FDZCw4REFBQ1M7d0JBQUdULFdBQVU7a0NBQW9DOzs7Ozs7a0NBR2xELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ1U7NEJBQUlDLEtBQUk7NEJBQXVCQyxLQUFJOzs7Ozs7Ozs7OztrQ0FHdEMsOERBQUNDO3dCQUFPWixPQUFNO3dCQUFxQmEsU0FBU2hCO2tDQUMxQyw0RUFBQ2lCO3NDQUFHdEIsUUFBUXVCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCLEVBQUU7R0F0Q1d4Qjs7UUFDS0Qsb0RBQVdBOzs7S0FEaEJDO0FBd0NiLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BpeC9bd2FsbGV0XS9bYW1vdW50XS50c3g/YWRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlSGVhZGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvMDEtYXRvbXMvdGhlLWhlYWRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuZXhwb3J0IGNvbnN0IFBpeFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBwaXhEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnJhbXBJbmZvLnBpeERhdGEpO1xuICBjb25zdCBbc2hvd01lc3NhZ2UsIHNldFNob3dNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoKSA9PiB7XG4gICAgLy8gUElYIEFQSTogaW50ZWdyYXRpb24gbmVlZGVkXG4gICAgLy8gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocGl4RGF0YS5xcl9jb2RlKTtcbiAgICAvLyBzZXRTaG93TWVzc2FnZSh0cnVlKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHNldFNob3dNZXNzYWdlKGZhbHNlKTtcbiAgICAvLyB9LCAyMDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbS1hdXRvIHBiLTEwIG1pbi1oLVs4MDBweF1cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3RhYmxlQnJpZGdlIC0gQnV5IHRva2VucyB3aXRoIFBpeDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJCdXkgdG9rZW5zIHdpdGggUGl4XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5zdmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGhlSGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHB4LTQgcHktNiByb3VuZGVkLVs0MHB4XSBzaGFkb3ctY3VzdG9tXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIHRleHQtY2VudGVyIHRleHQtbGdcIj5cbiAgICAgICAgICBJdCdzIGluIHlvdXIgaGFuZHMgbm93IVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIG0tNlwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Jsb2NrZnVsLXFyY29kZS5wbmdcIiBhbHQ9XCJRUiBjb2RlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8aW1nIHNyYz17YGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke3BpeERhdGEucXJfY29kZX1gfSBhbHQ9XCJRUiBjb2RlXCIgLz4gKi99XG4gICAgICAgIDxidXR0b24gdGl0bGU9XCJDbGlxdWUgcGFyYSBjb3BpYXJcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PlxuICAgICAgICAgIDxwPntwaXhEYXRhLnFyX2NvZGV9PC9wPlxuICAgICAgICAgIHsvKiB7c2hvd01lc3NhZ2UgJiYgPHNwYW4+Q29waWVkIHRvIGNsaXBib2FyZCE8L3NwYW4+fSAqL31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaXhQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsIlRoZUhlYWRlciIsInVzZVNlbGVjdG9yIiwiUGl4UGFnZSIsInBpeERhdGEiLCJzdGF0ZSIsInJhbXBJbmZvIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsImNvcHlUb0NsaXBib2FyZCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbWciLCJzcmMiLCJhbHQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInFyX2NvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pix/[wallet]/[amount].tsx\n"));

/***/ })

});
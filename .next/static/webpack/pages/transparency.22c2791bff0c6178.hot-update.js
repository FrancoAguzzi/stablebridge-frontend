"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/transparency",{

/***/ "./pages/transparency.tsx":
/*!********************************!*\
  !*** ./pages/transparency.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OnRampPage\": function() { return /* binding */ OnRampPage; },\n/* harmony export */   \"data\": function() { return /* binding */ data; },\n/* harmony export */   \"options\": function() { return /* binding */ options; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_01_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/01-atoms */ \"./components/01-atoms/index.ts\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nconst options = {\n    responsive: true,\n    plugins: {\n        legend: {\n            position: \"top\"\n        },\n        title: {\n            display: true,\n            text: \"Chart.js Bar Chart\"\n        }\n    }\n};\nconst labels = [\n    \"January\",\n    \"February\",\n    \"March\",\n    \"April\",\n    \"May\",\n    \"June\",\n    \"July\"\n];\nconst data = {\n    labels,\n    datasets: [\n        {\n            label: \"Dataset 1\",\n            data: [\n                1,\n                2,\n                4\n            ],\n            backgroundColor: \"rgba(255, 99, 132, 0.5)\"\n        },\n        {\n            label: \"Dataset 2\",\n            data: [\n                5,\n                7,\n                9\n            ],\n            backgroundColor: \"rgba(53, 162, 235, 0.5)\"\n        }\n    ]\n};\nconst TIMEOUT_SECONDS = 10;\nconst OnRampPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md m-auto pb-32 min-h-[800px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"StableBridge - Bridge tokens between blockchains\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Bridge tokens between blockchains\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_01_atoms__WEBPACK_IMPORTED_MODULE_2__.TheHeader, {}, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"relative bg-white px-10 py-6 rounded-[40px] shadow-custom\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-medium text-2xl text-left mb-8\",\n                        children: \"Transparency\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full text-center grid grid-cols-2 items-center justify-center border border-gray-800 rounded-xl bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"px-2 border-r border-gray-800\",\n                                children: \"Proof of Reserve\"\n                            }, void 0, false, {\n                                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-4 text-gray-800 font-bold\",\n                                children: \"$50M\"\n                            }, void 0, false, {\n                                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n                        options: options,\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franco/blockful/stablebridge-frontend/pages/transparency.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_c = OnRampPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OnRampPage);\nvar _c;\n$RefreshReg$(_c, \"OnRampPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFuc3BhcmVuY3kudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUNzQjtBQVNqQztBQUNvQjtBQUV0Q0csb0RBQWdCLENBQ2RDLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsZ0RBQVVBLEVBQ1ZDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BO0FBR0QsTUFBTUcsVUFBVTtJQUNyQkMsWUFBWSxJQUFJO0lBQ2hCQyxTQUFTO1FBQ1BDLFFBQVE7WUFDTkMsVUFBVTtRQUNaO1FBQ0FDLE9BQU87WUFDTEMsU0FBUyxJQUFJO1lBQ2JDLE1BQU07UUFDUjtJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLFNBQVM7SUFBQztJQUFXO0lBQVk7SUFBUztJQUFTO0lBQU87SUFBUTtDQUFPO0FBRXhFLE1BQU1DLE9BQU87SUFDbEJEO0lBQ0FFLFVBQVU7UUFDUjtZQUNFQyxPQUFPO1lBQ1BGLE1BQU07Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRTtZQUNmRyxpQkFBaUI7UUFDbkI7UUFDQTtZQUNFRCxPQUFPO1lBQ1BGLE1BQU07Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRTtZQUNmRyxpQkFBaUI7UUFDbkI7S0FDRDtBQUNILEVBQUU7QUFFRixNQUFNQyxrQkFBa0I7QUFFakIsTUFBTUMsYUFBdUIsSUFBTTtJQUN4QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUM1QixrREFBSUE7O2tDQUNILDhEQUFDaUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ1k7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDakMsMkRBQVNBOzs7OzswQkFFViw4REFBQ2tDO2dCQUFLUCxXQUFVOztrQ0FDZCw4REFBQ1E7d0JBQUdSLFdBQVU7a0NBQXNDOzs7Ozs7a0NBRXBELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFHVCxXQUFVOzBDQUFnQzs7Ozs7OzBDQUM5Qyw4REFBQ1U7Z0NBQUVWLFdBQVU7MENBQThCOzs7Ozs7Ozs7Ozs7a0NBSTdDLDhEQUFDbEIsZ0RBQUdBO3dCQUFDRSxTQUFTQTt3QkFBU1MsTUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQyxFQUFFO0tBeEJXSztBQTBCYiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90cmFuc3BhcmVuY3kudHN4P2EyMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVGhlSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvMDEtYXRvbXNcIjtcbmltcG9ydCB7XG4gIENoYXJ0IGFzIENoYXJ0SlMsXG4gIENhdGVnb3J5U2NhbGUsXG4gIExpbmVhclNjYWxlLFxuICBCYXJFbGVtZW50LFxuICBUaXRsZSxcbiAgVG9vbHRpcCxcbiAgTGVnZW5kLFxufSBmcm9tIFwiY2hhcnQuanNcIjtcbmltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcblxuQ2hhcnRKUy5yZWdpc3RlcihcbiAgQ2F0ZWdvcnlTY2FsZSxcbiAgTGluZWFyU2NhbGUsXG4gIEJhckVsZW1lbnQsXG4gIFRpdGxlLFxuICBUb29sdGlwLFxuICBMZWdlbmRcbik7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xuICByZXNwb25zaXZlOiB0cnVlLFxuICBwbHVnaW5zOiB7XG4gICAgbGVnZW5kOiB7XG4gICAgICBwb3NpdGlvbjogXCJ0b3BcIiBhcyBjb25zdCxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgdGV4dDogXCJDaGFydC5qcyBCYXIgQ2hhcnRcIixcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgbGFiZWxzID0gW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCJdO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgbGFiZWxzLFxuICBkYXRhc2V0czogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkRhdGFzZXQgMVwiLFxuICAgICAgZGF0YTogWzEsIDIsIDRdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjUpXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJEYXRhc2V0IDJcIixcbiAgICAgIGRhdGE6IFs1LCA3LCA5XSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDUzLCAxNjIsIDIzNSwgMC41KVwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBUSU1FT1VUX1NFQ09ORFMgPSAxMDtcblxuZXhwb3J0IGNvbnN0IE9uUmFtcFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbS1hdXRvIHBiLTMyIG1pbi1oLVs4MDBweF1cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U3RhYmxlQnJpZGdlIC0gQnJpZGdlIHRva2VucyBiZXR3ZWVuIGJsb2NrY2hhaW5zPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkJyaWRnZSB0b2tlbnMgYmV0d2VlbiBibG9ja2NoYWluc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uc3ZnXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRoZUhlYWRlciAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBweC0xMCBweS02IHJvdW5kZWQtWzQwcHhdIHNoYWRvdy1jdXN0b21cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtMnhsIHRleHQtbGVmdCBtYi04XCI+VHJhbnNwYXJlbmN5PC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBncmlkIGdyaWQtY29scy0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXIgYm9yZGVyLWdyYXktODAwIHJvdW5kZWQteGwgYmctd2hpdGVcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBib3JkZXItciBib3JkZXItZ3JheS04MDBcIj5Qcm9vZiBvZiBSZXNlcnZlPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTQgdGV4dC1ncmF5LTgwMCBmb250LWJvbGRcIj4kNTBNPC9wPlxuICAgICAgICAgIHsvKiBQT1IgQVBJOiBpbnRlZ3JhdGlvbiBuZWVkZWQgKi99XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxCYXIgb3B0aW9ucz17b3B0aW9uc30gZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9uUmFtcFBhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlRoZUhlYWRlciIsIkNoYXJ0IiwiQ2hhcnRKUyIsIkNhdGVnb3J5U2NhbGUiLCJMaW5lYXJTY2FsZSIsIkJhckVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJCYXIiLCJyZWdpc3RlciIsIm9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInBvc2l0aW9uIiwidGl0bGUiLCJkaXNwbGF5IiwidGV4dCIsImxhYmVscyIsImRhdGEiLCJkYXRhc2V0cyIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiVElNRU9VVF9TRUNPTkRTIiwiT25SYW1wUGFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/transparency.tsx\n"));

/***/ })

});
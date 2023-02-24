"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/01-atoms/connect-wallet-cta.tsx":
/*!****************************************************!*\
  !*** ./components/01-atoms/connect-wallet-cta.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectWalletCta\": function() { return /* binding */ ConnectWalletCta; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/originTransactionInfo */ \"./store/originTransactionInfo.ts\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ConnectWalletCta = ()=>{\n    _s();\n    const { chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const originChainId = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.originTransactionInfo.chain);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_4__.setOriginChain)(chainId));\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        chainId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-center fixed left-0 bottom-0 bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-4 p-3 px-4 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.ConnectButton.Custom, {\n                children: (param)=>{\n                    let { account , chain , openAccountModal , openChainModal , openConnectModal , authenticationStatus , mounted  } = param;\n                    // Note: If your app doesn't use authentication, you\n                    // can remove all 'authenticationStatus' checks\n                    const ready = mounted && authenticationStatus !== \"loading\";\n                    const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === \"authenticated\");\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ...!ready && {\n                            \"aria-hidden\": true,\n                            style: {\n                                opacity: 0,\n                                pointerEvents: \"none\",\n                                userSelect: \"none\"\n                            }\n                        },\n                        children: (()=>{\n                            if (!connected) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: openConnectModal,\n                                    type: \"button\",\n                                    className: \"bg-white p-6 py-3 rounded-full font-bold hover:bg-gray-50 transition\",\n                                    children: \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 23\n                                }, undefined);\n                            }\n                            if (chain.unsupported) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: openChainModal,\n                                    type: \"button\",\n                                    children: \"Wrong network\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 23\n                                }, undefined);\n                            }\n                            var _name;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: openChainModal,\n                                        className: \"text-white flex items-center\",\n                                        type: \"button\",\n                                        children: [\n                                            chain.hasIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                style: {\n                                                    background: chain.iconBackground,\n                                                    width: 12,\n                                                    height: 12,\n                                                    borderRadius: 999,\n                                                    overflow: \"hidden\",\n                                                    marginRight: 4\n                                                },\n                                                children: chain.iconUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    alt: (_name = chain.name) !== null && _name !== void 0 ? _name : \"Chain icon\",\n                                                    src: chain.iconUrl,\n                                                    style: {\n                                                        width: 12,\n                                                        height: 12\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 31\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 27\n                                            }, undefined),\n                                            chain.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: openAccountModal,\n                                        type: \"button\",\n                                        children: [\n                                            account.displayName,\n                                            account.displayBalance ? \" (\".concat(account.displayBalance, \")\") : \"\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, undefined);\n                        })()\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 15\n                    }, undefined);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConnectWalletCta, \"lUKk5+7+wDYLZgZ3cJo6AKUOu1k=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = ConnectWalletCta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectWalletCta);\nvar _c;\n$RefreshReg$(_c, \"ConnectWalletCta\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzAxLWF0b21zL2Nvbm5lY3Qtd2FsbGV0LWN0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdEO0FBQ0o7QUFDVztBQUVZO0FBUVo7QUFFaEQsTUFBTU0sbUJBQW1CLElBQU07O0lBQ3BDLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdQLDhEQUFZQTtJQUNoQyxNQUFNUSxnQkFBZ0JMLHdEQUFXQSxDQUMvQixDQUFDTSxRQUFlQSxNQUFNQyxxQkFBcUIsQ0FBQ0MsS0FBSztJQUVuRCxNQUFNQyxXQUFXVix3REFBV0E7SUFFNUJELGdEQUFTQSxDQUFDLElBQU07UUFDZFcsU0FBU1IsNEVBQWNBLENBQUNHO0lBQ3hCLHVEQUF1RDtJQUN6RCxHQUFHO1FBQUNBO0tBQVE7SUFFWixxQkFDRSw4REFBQ007UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ1Qsd0VBQW9COzBCQUNsQixTQVFLO3dCQVJKLEVBQ0FXLFFBQU8sRUFDUEwsTUFBSyxFQUNMTSxpQkFBZ0IsRUFDaEJDLGVBQWMsRUFDZEMsaUJBQWdCLEVBQ2hCQyxxQkFBb0IsRUFDcEJDLFFBQU8sRUFDUjtvQkFDQyxvREFBb0Q7b0JBQ3BELCtDQUErQztvQkFDL0MsTUFBTUMsUUFBUUQsV0FBV0QseUJBQXlCO29CQUNsRCxNQUFNRyxZQUNKRCxTQUNBTixXQUNBTCxTQUNDLEVBQUNTLHdCQUNBQSx5QkFBeUIsZUFBYztvQkFFM0MscUJBQ0UsOERBQUNQO3dCQUNFLEdBQUksQ0FBQ1MsU0FBUzs0QkFDYixlQUFlLElBQUk7NEJBQ25CRSxPQUFPO2dDQUNMQyxTQUFTO2dDQUNUQyxlQUFlO2dDQUNmQyxZQUFZOzRCQUNkO3dCQUNGLENBQUM7a0NBRUEsQ0FBQyxJQUFNOzRCQUNOLElBQUksQ0FBQ0osV0FBVztnQ0FDZCxxQkFDRSw4REFBQ0s7b0NBQ0NDLFNBQVNWO29DQUNUVyxNQUFLO29DQUNMaEIsV0FBVTs4Q0FDWDs7Ozs7OzRCQUlMLENBQUM7NEJBRUQsSUFBSUgsTUFBTW9CLFdBQVcsRUFBRTtnQ0FDckIscUJBQ0UsOERBQUNIO29DQUFPQyxTQUFTWDtvQ0FBZ0JZLE1BQUs7OENBQVM7Ozs7Ozs0QkFJbkQsQ0FBQztnQ0FzQmtCbkI7NEJBcEJuQixxQkFDRSw4REFBQ0U7O2tEQUNDLDhEQUFDZTt3Q0FDQ0MsU0FBU1g7d0NBQ1RKLFdBQVU7d0NBQ1ZnQixNQUFLOzs0Q0FFSm5CLE1BQU1xQixPQUFPLGtCQUNaLDhEQUFDbkI7Z0RBQ0NXLE9BQU87b0RBQ0xTLFlBQVl0QixNQUFNdUIsY0FBYztvREFDaENDLE9BQU87b0RBQ1BDLFFBQVE7b0RBQ1JDLGNBQWM7b0RBQ2RDLFVBQVU7b0RBQ1ZDLGFBQWE7Z0RBQ2Y7MERBRUM1QixNQUFNNkIsT0FBTyxrQkFDWiw4REFBQ0M7b0RBQ0NDLEtBQUsvQixDQUFBQSxRQUFBQSxNQUFNZ0MsSUFBSSxjQUFWaEMsbUJBQUFBLFFBQWMsWUFBWTtvREFDL0JpQyxLQUFLakMsTUFBTTZCLE9BQU87b0RBQ2xCaEIsT0FBTzt3REFBRVcsT0FBTzt3REFBSUMsUUFBUTtvREFBRzs7Ozs7Ozs7Ozs7NENBS3RDekIsTUFBTWdDLElBQUk7Ozs7Ozs7a0RBRWIsOERBQUNmO3dDQUFPQyxTQUFTWjt3Q0FBa0JhLE1BQUs7OzRDQUNyQ2QsUUFBUTZCLFdBQVc7NENBQ25CN0IsUUFBUThCLGNBQWMsR0FDbkIsS0FBNEIsT0FBdkI5QixRQUFROEIsY0FBYyxFQUFDLE9BQzVCLEVBQUU7Ozs7Ozs7Ozs7Ozs7d0JBSWQ7Ozs7OztnQkFHTjs7Ozs7Ozs7Ozs7Ozs7OztBQUtWLEVBQUU7R0FoSFd4Qzs7UUFDU04sMERBQVlBO1FBQ1ZHLG9EQUFXQTtRQUdoQkQsb0RBQVdBOzs7S0FMakJJO0FBa0hiLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy8wMS1hdG9tcy9jb25uZWN0LXdhbGxldC1jdGEudHN4PzVhZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWRkcmVzcywgc2V0QmFsYW5jZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY2NvdW50U2xpY2VcIjtcbmltcG9ydCB7IHNldE9yaWdpbkNoYWluIH0gZnJvbSBcIi4uLy4uL3N0b3JlL29yaWdpblRyYW5zYWN0aW9uSW5mb1wiO1xuaW1wb3J0IHtcbiAgSW5qZWN0ZWRDb25uZWN0LFxuICBmb3JtYXRBZGRyZXNzLFxuICBzd2l0Y2hOZXR3b3JrLFxuICBnZXRTQlJMQW1vdW50LFxufSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5cbmV4cG9ydCBjb25zdCBDb25uZWN0V2FsbGV0Q3RhID0gKCkgPT4ge1xuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICBjb25zdCBvcmlnaW5DaGFpbklkID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLm9yaWdpblRyYW5zYWN0aW9uSW5mby5jaGFpblxuICApO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRPcmlnaW5DaGFpbihjaGFpbklkKSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbY2hhaW5JZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBmaXhlZCBsZWZ0LTAgYm90dG9tLTAgYmctZ3JheS05MDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBwLTMgcHgtNCBcIj5cbiAgICAgICAgPENvbm5lY3RCdXR0b24uQ3VzdG9tPlxuICAgICAgICAgIHsoe1xuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgb3BlbkFjY291bnRNb2RhbCxcbiAgICAgICAgICAgIG9wZW5DaGFpbk1vZGFsLFxuICAgICAgICAgICAgb3BlbkNvbm5lY3RNb2RhbCxcbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzLFxuICAgICAgICAgICAgbW91bnRlZCxcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAvLyBOb3RlOiBJZiB5b3VyIGFwcCBkb2Vzbid0IHVzZSBhdXRoZW50aWNhdGlvbiwgeW91XG4gICAgICAgICAgICAvLyBjYW4gcmVtb3ZlIGFsbCAnYXV0aGVudGljYXRpb25TdGF0dXMnIGNoZWNrc1xuICAgICAgICAgICAgY29uc3QgcmVhZHkgPSBtb3VudGVkICYmIGF1dGhlbnRpY2F0aW9uU3RhdHVzICE9PSBcImxvYWRpbmdcIjtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9XG4gICAgICAgICAgICAgIHJlYWR5ICYmXG4gICAgICAgICAgICAgIGFjY291bnQgJiZcbiAgICAgICAgICAgICAgY2hhaW4gJiZcbiAgICAgICAgICAgICAgKCFhdXRoZW50aWNhdGlvblN0YXR1cyB8fFxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIik7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICB7Li4uKCFyZWFkeSAmJiB7XG4gICAgICAgICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5Db25uZWN0TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNiBweS0zIHJvdW5kZWQtZnVsbCBmb250LWJvbGQgaG92ZXI6YmctZ3JheS01MCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoY2hhaW4udW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5DaGFpbk1vZGFsfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBXcm9uZyBuZXR3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbkNoYWluTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbi5oYXNJY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjaGFpbi5pY29uQmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbi5pY29uVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtjaGFpbi5uYW1lID8/IFwiQ2hhaW4gaWNvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYWluLmljb25Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMiwgaGVpZ2h0OiAxMiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5BY2NvdW50TW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGlzcGxheUJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgICgke2FjY291bnQuZGlzcGxheUJhbGFuY2V9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvQ29ubmVjdEJ1dHRvbi5DdXN0b20+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RXYWxsZXRDdGE7XG4iXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldE9yaWdpbkNoYWluIiwiQ29ubmVjdEJ1dHRvbiIsIkNvbm5lY3RXYWxsZXRDdGEiLCJjaGFpbklkIiwib3JpZ2luQ2hhaW5JZCIsInN0YXRlIiwib3JpZ2luVHJhbnNhY3Rpb25JbmZvIiwiY2hhaW4iLCJkaXNwYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsIkN1c3RvbSIsImFjY291bnQiLCJvcGVuQWNjb3VudE1vZGFsIiwib3BlbkNoYWluTW9kYWwiLCJvcGVuQ29ubmVjdE1vZGFsIiwiYXV0aGVudGljYXRpb25TdGF0dXMiLCJtb3VudGVkIiwicmVhZHkiLCJjb25uZWN0ZWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwidW5zdXBwb3J0ZWQiLCJoYXNJY29uIiwiYmFja2dyb3VuZCIsImljb25CYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsIm1hcmdpblJpZ2h0IiwiaWNvblVybCIsImltZyIsImFsdCIsIm5hbWUiLCJzcmMiLCJkaXNwbGF5TmFtZSIsImRpc3BsYXlCYWxhbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/01-atoms/connect-wallet-cta.tsx\n"));

/***/ })

});
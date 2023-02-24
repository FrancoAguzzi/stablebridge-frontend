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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectWalletCta\": function() { return /* binding */ ConnectWalletCta; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_accountSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/accountSlice */ \"./store/accountSlice.ts\");\n/* harmony import */ var _store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/originTransactionInfo */ \"./store/originTransactionInfo.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ \"./utils/index.ts\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DEFAULT_NETWORK_ID = 250;\nconst ConnectWalletCta = ()=>{\n    _s();\n    const { chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const { activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const [showAccountDropdown, setShowAccountDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const balance = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.account.balance);\n    const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.account.address);\n    const originChainId = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.originTransactionInfo.chain);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    // const fetchAvatar = () => {\n    //   fetch(`https://metadata.ens.domains/mainnet/avatar/${account}`).then(\n    //     (res) => console.log(res)\n    //   );\n    // };\n    const handleLogin = ()=>{\n        if (account) {\n            setShowAccountDropdown(!showAccountDropdown);\n        } else {\n            activate(_utils__WEBPACK_IMPORTED_MODULE_6__.InjectedConnect).then(()=>{\n                window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                }).then(async (res)=>{\n                    dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setAddress)(res[0]));\n                    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getSBRLAmount)(DEFAULT_NETWORK_ID).then((res)=>{\n                        dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(res));\n                    });\n                // fetchAvatar();\n                });\n            });\n        }\n    };\n    const handleLogout = ()=>{\n        deactivate();\n        dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__.setOriginChain)(null));\n        dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setAddress)(\"\"));\n        setShowAccountDropdown(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (chainId !== originChainId && chainId) {\n            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.switchNetwork)(chainId).then((res)=>{\n                const newChain = (res === null || res === void 0 ? void 0 : res.error) ? null : chainId;\n                dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__.setOriginChain)(newChain));\n            });\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        chainId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-center fixed left-0 bottom-0 bg-gray-900\",\n        children: [\n            !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-4 p-3 px-4 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.ConnectButton, {}, void 0, false, {\n                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-white rounded-full border mt-4 mb-3.5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white py-3 px-4\",\n                    children: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.formatAddress)(account)\n                }, void 0, false, {\n                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined),\n            showAccountDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 shadow-custom fixed right-8 top-20 rounded-3xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConnectWalletCta, \"7svnFQGG56WdfOJ6AhioBedrt0s=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = ConnectWalletCta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectWalletCta);\nvar _c;\n$RefreshReg$(_c, \"ConnectWalletCta\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzAxLWF0b21zL2Nvbm5lY3Qtd2FsbGV0LWN0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFDSjtBQUNXO0FBQ1c7QUFDQztBQU05QztBQUVrQztBQUV2RCxNQUFNYSxxQkFBcUI7QUFFcEIsTUFBTUMsbUJBQW1CLElBQU07O0lBQ3BDLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdmLDhEQUFZQTtJQUNoQyxNQUFNLEVBQUVnQixTQUFRLEVBQUVDLFdBQVUsRUFBRSxHQUFHakIsOERBQVlBO0lBQzdDLE1BQU0sQ0FBQ2tCLHFCQUFxQkMsdUJBQXVCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BFLE1BQU1rQixVQUFVaEIsd0RBQVdBLENBQUMsQ0FBQ2lCLFFBQWVBLE1BQU1DLE9BQU8sQ0FBQ0YsT0FBTztJQUNqRSxNQUFNRSxVQUFVbEIsd0RBQVdBLENBQUMsQ0FBQ2lCLFFBQWVBLE1BQU1DLE9BQU8sQ0FBQ0MsT0FBTztJQUNqRSxNQUFNQyxnQkFBZ0JwQix3REFBV0EsQ0FDL0IsQ0FBQ2lCLFFBQWVBLE1BQU1JLHFCQUFxQixDQUFDQyxLQUFLO0lBRW5ELE1BQU1DLFdBQVd4Qix3REFBV0E7SUFFNUIsOEJBQThCO0lBQzlCLDBFQUEwRTtJQUMxRSxnQ0FBZ0M7SUFDaEMsT0FBTztJQUNQLEtBQUs7SUFFTCxNQUFNeUIsY0FBYyxJQUFNO1FBQ3hCLElBQUlOLFNBQVM7WUFDWEgsdUJBQXVCLENBQUNEO1FBQzFCLE9BQU87WUFDTEYsU0FBU1IsbURBQWVBLEVBQUVxQixJQUFJLENBQUMsSUFBTTtnQkFDbkNDLE9BQU9DLFFBQVEsQ0FDWkMsT0FBTyxDQUFDO29CQUNQQyxRQUFRO2dCQUNWLEdBQ0NKLElBQUksQ0FBQyxPQUFPSyxNQUFhO29CQUN4QlAsU0FBU3RCLCtEQUFVQSxDQUFDNkIsR0FBRyxDQUFDLEVBQUU7b0JBQzFCdkIscURBQWFBLENBQUNFLG9CQUFvQmdCLElBQUksQ0FBQyxDQUFDSyxNQUFRO3dCQUM5Q1AsU0FBU3JCLCtEQUFVQSxDQUFDNEI7b0JBQ3RCO2dCQUVBLGlCQUFpQjtnQkFDbkI7WUFDSjtRQUNGLENBQUM7SUFDSDtJQUVBLE1BQU1DLGVBQWUsSUFBTTtRQUN6QmxCO1FBQ0FVLFNBQVNwQiw0RUFBY0EsQ0FBQyxJQUFJO1FBQzVCb0IsU0FBU3RCLCtEQUFVQSxDQUFDO1FBQ3BCYyx1QkFBdUIsS0FBSztJQUM5QjtJQUVBbEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUljLFlBQVlTLGlCQUFpQlQsU0FBUztZQUN4Q0wscURBQWFBLENBQUNLLFNBQVNjLElBQUksQ0FBQyxDQUFDSyxNQUFRO2dCQUNuQyxNQUFNRSxXQUFXRixDQUFBQSxnQkFBQUEsaUJBQUFBLEtBQUFBLElBQUFBLElBQUtHLEtBQUssSUFBRyxJQUFJLEdBQUd0QixPQUFPO2dCQUU1Q1ksU0FBU3BCLDRFQUFjQSxDQUFDNkI7WUFDMUI7UUFDRixDQUFDO0lBQ0QsdURBQXVEO0lBQ3pELEdBQUc7UUFBQ3JCO0tBQVE7SUFFWixxQkFDRSw4REFBQ3VCO1FBQUlDLFdBQVU7O1lBQ1osQ0FBQ2pCLHdCQUNBLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUMzQixpRUFBYUE7Ozs7Ozs7OzswQ0FHaEIsOERBQUMwQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUVELFdBQVU7OEJBQXdCOUIscURBQWFBLENBQUNhOzs7Ozs7Ozs7O3lCQUV0RDtZQUNBSixxQ0FDQyw4REFBQ29CO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRTtvQkFBT0MsU0FBU1A7OEJBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDLEVBQUU7R0ExRVdyQjs7UUFDU2QsMERBQVlBO1FBQ0NBLDBEQUFZQTtRQUU3Qkksb0RBQVdBO1FBQ1hBLG9EQUFXQTtRQUNMQSxvREFBV0E7UUFHaEJELG9EQUFXQTs7O0tBVGpCVztBQTRFYiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvMDEtYXRvbXMvY29ubmVjdC13YWxsZXQtY3RhLnRzeD81YWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEFkZHJlc3MsIHNldEJhbGFuY2UgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWNjb3VudFNsaWNlXCI7XG5pbXBvcnQgeyBzZXRPcmlnaW5DaGFpbiB9IGZyb20gXCIuLi8uLi9zdG9yZS9vcmlnaW5UcmFuc2FjdGlvbkluZm9cIjtcbmltcG9ydCB7XG4gIEluamVjdGVkQ29ubmVjdCxcbiAgZm9ybWF0QWRkcmVzcyxcbiAgc3dpdGNoTmV0d29yayxcbiAgZ2V0U0JSTEFtb3VudCxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcbmltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuXG5jb25zdCBERUZBVUxUX05FVFdPUktfSUQgPSAyNTA7XG5cbmV4cG9ydCBjb25zdCBDb25uZWN0V2FsbGV0Q3RhID0gKCkgPT4ge1xuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICBjb25zdCB7IGFjdGl2YXRlLCBkZWFjdGl2YXRlIH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgY29uc3QgW3Nob3dBY2NvdW50RHJvcGRvd24sIHNldFNob3dBY2NvdW50RHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBiYWxhbmNlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmFjY291bnQuYmFsYW5jZSk7XG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYWNjb3VudC5hZGRyZXNzKTtcbiAgY29uc3Qgb3JpZ2luQ2hhaW5JZCA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogYW55KSA9PiBzdGF0ZS5vcmlnaW5UcmFuc2FjdGlvbkluZm8uY2hhaW5cbiAgKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vIGNvbnN0IGZldGNoQXZhdGFyID0gKCkgPT4ge1xuICAvLyAgIGZldGNoKGBodHRwczovL21ldGFkYXRhLmVucy5kb21haW5zL21haW5uZXQvYXZhdGFyLyR7YWNjb3VudH1gKS50aGVuKFxuICAvLyAgICAgKHJlcykgPT4gY29uc29sZS5sb2cocmVzKVxuICAvLyAgICk7XG4gIC8vIH07XG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgaWYgKGFjY291bnQpIHtcbiAgICAgIHNldFNob3dBY2NvdW50RHJvcGRvd24oIXNob3dBY2NvdW50RHJvcGRvd24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmF0ZShJbmplY3RlZENvbm5lY3QpLnRoZW4oKCkgPT4ge1xuICAgICAgICB3aW5kb3cuZXRoZXJldW1cbiAgICAgICAgICAucmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oYXN5bmMgKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRBZGRyZXNzKHJlc1swXSkpO1xuICAgICAgICAgICAgZ2V0U0JSTEFtb3VudChERUZBVUxUX05FVFdPUktfSUQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRCYWxhbmNlKHJlcykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGZldGNoQXZhdGFyKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIGRlYWN0aXZhdGUoKTtcbiAgICBkaXNwYXRjaChzZXRPcmlnaW5DaGFpbihudWxsKSk7XG4gICAgZGlzcGF0Y2goc2V0QWRkcmVzcyhcIlwiKSk7XG4gICAgc2V0U2hvd0FjY291bnREcm9wZG93bihmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2hhaW5JZCAhPT0gb3JpZ2luQ2hhaW5JZCAmJiBjaGFpbklkKSB7XG4gICAgICBzd2l0Y2hOZXR3b3JrKGNoYWluSWQpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdDaGFpbiA9IHJlcz8uZXJyb3IgPyBudWxsIDogY2hhaW5JZDtcblxuICAgICAgICBkaXNwYXRjaChzZXRPcmlnaW5DaGFpbihuZXdDaGFpbikpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2NoYWluSWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgZml4ZWQgbGVmdC0wIGJvdHRvbS0wIGJnLWdyYXktOTAwXCI+XG4gICAgICB7IWFjY291bnQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBwLTMgcHgtNCBcIj5cbiAgICAgICAgICA8Q29ubmVjdEJ1dHRvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXdoaXRlIHJvdW5kZWQtZnVsbCBib3JkZXIgbXQtNCBtYi0zLjVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHB5LTMgcHgtNFwiPntmb3JtYXRBZGRyZXNzKGFjY291bnQpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3Nob3dBY2NvdW50RHJvcGRvd24gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzaGFkb3ctY3VzdG9tIGZpeGVkIHJpZ2h0LTggdG9wLTIwIHJvdW5kZWQtM3hsXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RXYWxsZXRDdGE7XG4iXSwibmFtZXMiOlsidXNlV2ViM1JlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0QWRkcmVzcyIsInNldEJhbGFuY2UiLCJzZXRPcmlnaW5DaGFpbiIsIkluamVjdGVkQ29ubmVjdCIsImZvcm1hdEFkZHJlc3MiLCJzd2l0Y2hOZXR3b3JrIiwiZ2V0U0JSTEFtb3VudCIsIkNvbm5lY3RCdXR0b24iLCJERUZBVUxUX05FVFdPUktfSUQiLCJDb25uZWN0V2FsbGV0Q3RhIiwiY2hhaW5JZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsInNob3dBY2NvdW50RHJvcGRvd24iLCJzZXRTaG93QWNjb3VudERyb3Bkb3duIiwiYmFsYW5jZSIsInN0YXRlIiwiYWNjb3VudCIsImFkZHJlc3MiLCJvcmlnaW5DaGFpbklkIiwib3JpZ2luVHJhbnNhY3Rpb25JbmZvIiwiY2hhaW4iLCJkaXNwYXRjaCIsImhhbmRsZUxvZ2luIiwidGhlbiIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlcyIsImhhbmRsZUxvZ291dCIsIm5ld0NoYWluIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/01-atoms/connect-wallet-cta.tsx\n"));

/***/ })

});
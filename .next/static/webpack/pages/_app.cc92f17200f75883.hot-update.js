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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectWalletCta\": function() { return /* binding */ ConnectWalletCta; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_accountSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/accountSlice */ \"./store/accountSlice.ts\");\n/* harmony import */ var _store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/originTransactionInfo */ \"./store/originTransactionInfo.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ \"./utils/index.ts\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"./node_modules/@heroicons/react/24/solid/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DEFAULT_NETWORK_ID = 250;\nconst ConnectWalletCta = ()=>{\n    _s();\n    const { chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const { activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const [showAccountDropdown, setShowAccountDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const balance = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.account.balance);\n    const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.account.address);\n    const originChainId = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.originTransactionInfo.chain);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    // const fetchAvatar = () => {\n    //   fetch(`https://metadata.ens.domains/mainnet/avatar/${account}`).then(\n    //     (res) => console.log(res)\n    //   );\n    // };\n    const handleLogin = ()=>{\n        if (account) {\n            setShowAccountDropdown(!showAccountDropdown);\n        } else {\n            activate(_utils__WEBPACK_IMPORTED_MODULE_6__.InjectedConnect).then(()=>{\n                window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                }).then(async (res)=>{\n                    dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setAddress)(res[0]));\n                    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getSBRLAmount)(DEFAULT_NETWORK_ID).then((res)=>{\n                        console.log(res);\n                        dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(res));\n                    });\n                // fetchAvatar();\n                });\n            });\n        }\n    };\n    const handleLogout = ()=>{\n        deactivate();\n        dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__.setOriginChain)(null));\n        dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setAddress)(\"\"));\n        setShowAccountDropdown(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (chainId !== originChainId && chainId) {\n            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.switchNetwork)(chainId).then((res)=>{\n                const newChain = (res === null || res === void 0 ? void 0 : res.error) ? null : chainId;\n                dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__.setOriginChain)(newChain));\n            });\n        }\n    }, [\n        chainId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-center fixed left-0 bottom-0 bg-gray-900\",\n        children: [\n            !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                className: \"bg-white inline-flex text-black my-4 p-3 px-4 rounded-full transition \".concat(account ? \"bg-gray-1 border-[1px]\" : \"hover:animate-pulse\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__.WalletIcon, {\n                        className: \"w-6 mr-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: (0,_utils__WEBPACK_IMPORTED_MODULE_6__.formatAddress)(account)\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-white py-6\",\n                children: \"\".concat(balance ? balance + \" SBRL | \" : \"\", \" \").concat((0,_utils__WEBPACK_IMPORTED_MODULE_6__.formatAddress)(account))\n            }, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, undefined),\n            showAccountDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 shadow-custom fixed right-8 top-20 rounded-3xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleLogout,\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConnectWalletCta, \"7svnFQGG56WdfOJ6AhioBedrt0s=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = ConnectWalletCta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectWalletCta);\nvar _c;\n$RefreshReg$(_c, \"ConnectWalletCta\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzAxLWF0b21zL2Nvbm5lY3Qtd2FsbGV0LWN0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFDSjtBQUNXO0FBQ1c7QUFDQztBQU05QztBQUNrQztBQUV2RCxNQUFNYSxxQkFBcUI7QUFFcEIsTUFBTUMsbUJBQW1CLElBQU07O0lBQ3BDLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdmLDhEQUFZQTtJQUNoQyxNQUFNLEVBQUVnQixTQUFRLEVBQUVDLFdBQVUsRUFBRSxHQUFHakIsOERBQVlBO0lBQzdDLE1BQU0sQ0FBQ2tCLHFCQUFxQkMsdUJBQXVCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BFLE1BQU1rQixVQUFVaEIsd0RBQVdBLENBQUMsQ0FBQ2lCLFFBQWVBLE1BQU1DLE9BQU8sQ0FBQ0YsT0FBTztJQUNqRSxNQUFNRSxVQUFVbEIsd0RBQVdBLENBQUMsQ0FBQ2lCLFFBQWVBLE1BQU1DLE9BQU8sQ0FBQ0MsT0FBTztJQUNqRSxNQUFNQyxnQkFBZ0JwQix3REFBV0EsQ0FDL0IsQ0FBQ2lCLFFBQWVBLE1BQU1JLHFCQUFxQixDQUFDQyxLQUFLO0lBRW5ELE1BQU1DLFdBQVd4Qix3REFBV0E7SUFFNUIsOEJBQThCO0lBQzlCLDBFQUEwRTtJQUMxRSxnQ0FBZ0M7SUFDaEMsT0FBTztJQUNQLEtBQUs7SUFFTCxNQUFNeUIsY0FBYyxJQUFNO1FBQ3hCLElBQUlOLFNBQVM7WUFDWEgsdUJBQXVCLENBQUNEO1FBQzFCLE9BQU87WUFDTEYsU0FBU1IsbURBQWVBLEVBQUVxQixJQUFJLENBQUMsSUFBTTtnQkFDbkNDLE9BQU9DLFFBQVEsQ0FDWkMsT0FBTyxDQUFDO29CQUNQQyxRQUFRO2dCQUNWLEdBQ0NKLElBQUksQ0FBQyxPQUFPSyxNQUFhO29CQUN4QlAsU0FBU3RCLCtEQUFVQSxDQUFDNkIsR0FBRyxDQUFDLEVBQUU7b0JBQzFCdkIscURBQWFBLENBQUNFLG9CQUFvQmdCLElBQUksQ0FBQyxDQUFDSyxNQUFRO3dCQUM5Q0MsUUFBUUMsR0FBRyxDQUFDRjt3QkFDWlAsU0FBU3JCLCtEQUFVQSxDQUFDNEI7b0JBQ3RCO2dCQUVBLGlCQUFpQjtnQkFDbkI7WUFDSjtRQUNGLENBQUM7SUFDSDtJQUVBLE1BQU1HLGVBQWUsSUFBTTtRQUN6QnBCO1FBQ0FVLFNBQVNwQiw0RUFBY0EsQ0FBQyxJQUFJO1FBQzVCb0IsU0FBU3RCLCtEQUFVQSxDQUFDO1FBQ3BCYyx1QkFBdUIsS0FBSztJQUM5QjtJQUVBbEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUljLFlBQVlTLGlCQUFpQlQsU0FBUztZQUN4Q0wscURBQWFBLENBQUNLLFNBQVNjLElBQUksQ0FBQyxDQUFDSyxNQUFRO2dCQUNuQyxNQUFNSSxXQUFXSixDQUFBQSxnQkFBQUEsaUJBQUFBLEtBQUFBLElBQUFBLElBQUtLLEtBQUssSUFBRyxJQUFJLEdBQUd4QixPQUFPO2dCQUU1Q1ksU0FBU3BCLDRFQUFjQSxDQUFDK0I7WUFDMUI7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDdkI7S0FBUTtJQUVaLHFCQUNFLDhEQUFDeUI7UUFBSUMsV0FBVTs7WUFDWixDQUFDbkIsd0JBQ0EsOERBQUNvQjtnQkFDQ0MsU0FBU2Y7Z0JBQ1RhLFdBQVcseUVBRVYsT0FEQ25CLFVBQVUsMkJBQTJCLHFCQUFxQjs7a0NBRzVELDhEQUFDVixpRUFBVUE7d0JBQUM2QixXQUFVOzs7Ozs7a0NBQ3RCLDhEQUFDRztrQ0FBR25DLHFEQUFhQSxDQUFDYTs7Ozs7Ozs7Ozs7MENBR3BCLDhEQUFDc0I7Z0JBQUVILFdBQVU7MEJBQ1YsR0FBMENoQyxPQUF2Q1csVUFBVUEsVUFBVSxhQUFhLEVBQUUsRUFBQyxLQUEwQixPQUF2QlgscURBQWFBLENBQUNhOzs7Ozt5QkFFNUQ7WUFDQUoscUNBQ0MsOERBQUNzQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQU9DLFNBQVNOOzhCQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QyxFQUFFO0dBaEZXdkI7O1FBQ1NkLDBEQUFZQTtRQUNDQSwwREFBWUE7UUFFN0JJLG9EQUFXQTtRQUNYQSxvREFBV0E7UUFDTEEsb0RBQVdBO1FBR2hCRCxvREFBV0E7OztLQVRqQlc7QUFrRmIsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzLzAxLWF0b21zL2Nvbm5lY3Qtd2FsbGV0LWN0YS50c3g/NWFmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRBZGRyZXNzLCBzZXRCYWxhbmNlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjY291bnRTbGljZVwiO1xuaW1wb3J0IHsgc2V0T3JpZ2luQ2hhaW4gfSBmcm9tIFwiLi4vLi4vc3RvcmUvb3JpZ2luVHJhbnNhY3Rpb25JbmZvXCI7XG5pbXBvcnQge1xuICBJbmplY3RlZENvbm5lY3QsXG4gIGZvcm1hdEFkZHJlc3MsXG4gIHN3aXRjaE5ldHdvcmssXG4gIGdldFNCUkxBbW91bnQsXG59IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5cbmNvbnN0IERFRkFVTFRfTkVUV09SS19JRCA9IDI1MDtcblxuZXhwb3J0IGNvbnN0IENvbm5lY3RXYWxsZXRDdGEgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gIGNvbnN0IHsgYWN0aXZhdGUsIGRlYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpO1xuICBjb25zdCBbc2hvd0FjY291bnREcm9wZG93biwgc2V0U2hvd0FjY291bnREcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGJhbGFuY2UgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUuYWNjb3VudC5iYWxhbmNlKTtcbiAgY29uc3QgYWNjb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hY2NvdW50LmFkZHJlc3MpO1xuICBjb25zdCBvcmlnaW5DaGFpbklkID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLm9yaWdpblRyYW5zYWN0aW9uSW5mby5jaGFpblxuICApO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy8gY29uc3QgZmV0Y2hBdmF0YXIgPSAoKSA9PiB7XG4gIC8vICAgZmV0Y2goYGh0dHBzOi8vbWV0YWRhdGEuZW5zLmRvbWFpbnMvbWFpbm5ldC9hdmF0YXIvJHthY2NvdW50fWApLnRoZW4oXG4gIC8vICAgICAocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpXG4gIC8vICAgKTtcbiAgLy8gfTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICBpZiAoYWNjb3VudCkge1xuICAgICAgc2V0U2hvd0FjY291bnREcm9wZG93bighc2hvd0FjY291bnREcm9wZG93bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2YXRlKEluamVjdGVkQ29ubmVjdCkudGhlbigoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bVxuICAgICAgICAgIC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbihhc3luYyAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEFkZHJlc3MocmVzWzBdKSk7XG4gICAgICAgICAgICBnZXRTQlJMQW1vdW50KERFRkFVTFRfTkVUV09SS19JRCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHNldEJhbGFuY2UocmVzKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gZmV0Y2hBdmF0YXIoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgZGVhY3RpdmF0ZSgpO1xuICAgIGRpc3BhdGNoKHNldE9yaWdpbkNoYWluKG51bGwpKTtcbiAgICBkaXNwYXRjaChzZXRBZGRyZXNzKFwiXCIpKTtcbiAgICBzZXRTaG93QWNjb3VudERyb3Bkb3duKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjaGFpbklkICE9PSBvcmlnaW5DaGFpbklkICYmIGNoYWluSWQpIHtcbiAgICAgIHN3aXRjaE5ldHdvcmsoY2hhaW5JZCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NoYWluID0gcmVzPy5lcnJvciA/IG51bGwgOiBjaGFpbklkO1xuXG4gICAgICAgIGRpc3BhdGNoKHNldE9yaWdpbkNoYWluKG5ld0NoYWluKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjaGFpbklkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGZpeGVkIGxlZnQtMCBib3R0b20tMCBiZy1ncmF5LTkwMFwiPlxuICAgICAgeyFhY2NvdW50ID8gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYmctd2hpdGUgaW5saW5lLWZsZXggdGV4dC1ibGFjayBteS00IHAtMyBweC00IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uICR7XG4gICAgICAgICAgICBhY2NvdW50ID8gXCJiZy1ncmF5LTEgYm9yZGVyLVsxcHhdXCIgOiBcImhvdmVyOmFuaW1hdGUtcHVsc2VcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPFdhbGxldEljb24gY2xhc3NOYW1lPVwidy02IG1yLTJcIiAvPlxuICAgICAgICAgIDxwPntmb3JtYXRBZGRyZXNzKGFjY291bnQpfTwvcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHB5LTZcIj5cbiAgICAgICAgICB7YCR7YmFsYW5jZSA/IGJhbGFuY2UgKyBcIiBTQlJMIHwgXCIgOiBcIlwifSAke2Zvcm1hdEFkZHJlc3MoYWNjb3VudCl9YH1cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICAgIHtzaG93QWNjb3VudERyb3Bkb3duICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc2hhZG93LWN1c3RvbSBmaXhlZCByaWdodC04IHRvcC0yMCByb3VuZGVkLTN4bFwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0V2FsbGV0Q3RhO1xuIl0sIm5hbWVzIjpbInVzZVdlYjNSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEFkZHJlc3MiLCJzZXRCYWxhbmNlIiwic2V0T3JpZ2luQ2hhaW4iLCJJbmplY3RlZENvbm5lY3QiLCJmb3JtYXRBZGRyZXNzIiwic3dpdGNoTmV0d29yayIsImdldFNCUkxBbW91bnQiLCJXYWxsZXRJY29uIiwiREVGQVVMVF9ORVRXT1JLX0lEIiwiQ29ubmVjdFdhbGxldEN0YSIsImNoYWluSWQiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJzaG93QWNjb3VudERyb3Bkb3duIiwic2V0U2hvd0FjY291bnREcm9wZG93biIsImJhbGFuY2UiLCJzdGF0ZSIsImFjY291bnQiLCJhZGRyZXNzIiwib3JpZ2luQ2hhaW5JZCIsIm9yaWdpblRyYW5zYWN0aW9uSW5mbyIsImNoYWluIiwiZGlzcGF0Y2giLCJoYW5kbGVMb2dpbiIsInRoZW4iLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9nb3V0IiwibmV3Q2hhaW4iLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/01-atoms/connect-wallet-cta.tsx\n"));

/***/ })

});
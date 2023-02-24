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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ConnectWalletCta\": function() { return /* binding */ ConnectWalletCta; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_accountSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/accountSlice */ \"./store/accountSlice.ts\");\n/* harmony import */ var _store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/originTransactionInfo */ \"./store/originTransactionInfo.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ \"./utils/index.ts\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst DEFAULT_NETWORK_ID = 250;\nconst ConnectWalletCta = ()=>{\n    _s();\n    const { chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const { activate , deactivate  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();\n    const [showAccountDropdown, setShowAccountDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const balance = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.account.balance);\n    const account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.account.address);\n    const originChainId = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.originTransactionInfo.chain);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    // const fetchAvatar = () => {\n    //   fetch(`https://metadata.ens.domains/mainnet/avatar/${account}`).then(\n    //     (res) => console.log(res)\n    //   );\n    // };\n    const handleLogin = ()=>{\n        if (account) {\n            setShowAccountDropdown(!showAccountDropdown);\n        } else {\n            activate(_utils__WEBPACK_IMPORTED_MODULE_6__.InjectedConnect).then(()=>{\n                window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                }).then(async (res)=>{\n                    dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setAddress)(res[0]));\n                    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.getSBRLAmount)(DEFAULT_NETWORK_ID).then((res)=>{\n                        dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setBalance)(res));\n                    });\n                // fetchAvatar();\n                });\n            });\n        }\n    };\n    const handleLogout = ()=>{\n        deactivate();\n        dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__.setOriginChain)(null));\n        dispatch((0,_store_accountSlice__WEBPACK_IMPORTED_MODULE_4__.setAddress)(\"\"));\n        setShowAccountDropdown(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (chainId !== originChainId && chainId) {\n            (0,_utils__WEBPACK_IMPORTED_MODULE_6__.switchNetwork)(chainId).then((res)=>{\n                const newChain = (res === null || res === void 0 ? void 0 : res.error) ? null : chainId;\n                dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_5__.setOriginChain)(newChain));\n            });\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        chainId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-center fixed left-0 bottom-0 bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-4 p-3 px-4 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.ConnectButton.Custom, {\n                children: (param)=>{\n                    let { account , chain , openAccountModal , openChainModal , openConnectModal , authenticationStatus , mounted  } = param;\n                    // Note: If your app doesn't use authentication, you\n                    // can remove all 'authenticationStatus' checks\n                    const ready = mounted && authenticationStatus !== \"loading\";\n                    const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === \"authenticated\");\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ...!ready && {\n                            \"aria-hidden\": true,\n                            style: {\n                                opacity: 0,\n                                pointerEvents: \"none\",\n                                userSelect: \"none\"\n                            }\n                        },\n                        children: (()=>{\n                            if (!connected) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: openConnectModal,\n                                    type: \"button\",\n                                    className: \"bg-white p-4 py-2 rounded-full\",\n                                    children: \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 23\n                                }, undefined);\n                            }\n                            if (chain.unsupported) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: openChainModal,\n                                    type: \"button\",\n                                    children: \"Wrong network\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 23\n                                }, undefined);\n                            }\n                            var _name;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    gap: 12\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: openChainModal,\n                                        style: {\n                                            display: \"flex\",\n                                            alignItems: \"center\"\n                                        },\n                                        type: \"button\",\n                                        children: [\n                                            chain.hasIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                style: {\n                                                    background: chain.iconBackground,\n                                                    width: 12,\n                                                    height: 12,\n                                                    borderRadius: 999,\n                                                    overflow: \"hidden\",\n                                                    marginRight: 4\n                                                },\n                                                children: chain.iconUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    alt: (_name = chain.name) !== null && _name !== void 0 ? _name : \"Chain icon\",\n                                                    src: chain.iconUrl,\n                                                    style: {\n                                                        width: 12,\n                                                        height: 12\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                                    lineNumber: 147,\n                                                    columnNumber: 31\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 27\n                                            }, undefined),\n                                            chain.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: openAccountModal,\n                                        type: \"button\",\n                                        children: [\n                                            account.displayName,\n                                            account.displayBalance ? \" (\".concat(account.displayBalance, \")\") : \"\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                        lineNumber: 158,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 21\n                            }, undefined);\n                        })()\n                    }, void 0, false, {\n                        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 15\n                    }, undefined);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/franco/blockful/stablebridge-frontend/components/01-atoms/connect-wallet-cta.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ConnectWalletCta, \"7svnFQGG56WdfOJ6AhioBedrt0s=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = ConnectWalletCta;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectWalletCta);\nvar _c;\n$RefreshReg$(_c, \"ConnectWalletCta\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzLzAxLWF0b21zL2Nvbm5lY3Qtd2FsbGV0LWN0YS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFDSjtBQUNXO0FBQ1c7QUFDQztBQU05QztBQUVrQztBQUV2RCxNQUFNWSxxQkFBcUI7QUFFcEIsTUFBTUMsbUJBQW1CLElBQU07O0lBQ3BDLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdkLDhEQUFZQTtJQUNoQyxNQUFNLEVBQUVlLFNBQVEsRUFBRUMsV0FBVSxFQUFFLEdBQUdoQiw4REFBWUE7SUFDN0MsTUFBTSxDQUFDaUIscUJBQXFCQyx1QkFBdUIsR0FBR2hCLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEUsTUFBTWlCLFVBQVVmLHdEQUFXQSxDQUFDLENBQUNnQixRQUFlQSxNQUFNQyxPQUFPLENBQUNGLE9BQU87SUFDakUsTUFBTUUsVUFBVWpCLHdEQUFXQSxDQUFDLENBQUNnQixRQUFlQSxNQUFNQyxPQUFPLENBQUNDLE9BQU87SUFDakUsTUFBTUMsZ0JBQWdCbkIsd0RBQVdBLENBQy9CLENBQUNnQixRQUFlQSxNQUFNSSxxQkFBcUIsQ0FBQ0MsS0FBSztJQUVuRCxNQUFNQyxXQUFXdkIsd0RBQVdBO0lBRTVCLDhCQUE4QjtJQUM5QiwwRUFBMEU7SUFDMUUsZ0NBQWdDO0lBQ2hDLE9BQU87SUFDUCxLQUFLO0lBRUwsTUFBTXdCLGNBQWMsSUFBTTtRQUN4QixJQUFJTixTQUFTO1lBQ1hILHVCQUF1QixDQUFDRDtRQUMxQixPQUFPO1lBQ0xGLFNBQVNQLG1EQUFlQSxFQUFFb0IsSUFBSSxDQUFDLElBQU07Z0JBQ25DQyxPQUFPQyxRQUFRLENBQ1pDLE9BQU8sQ0FBQztvQkFDUEMsUUFBUTtnQkFDVixHQUNDSixJQUFJLENBQUMsT0FBT0ssTUFBYTtvQkFDeEJQLFNBQVNyQiwrREFBVUEsQ0FBQzRCLEdBQUcsQ0FBQyxFQUFFO29CQUMxQnZCLHFEQUFhQSxDQUFDRSxvQkFBb0JnQixJQUFJLENBQUMsQ0FB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Q1NiLDBEQUFZQTtRQUNDQSwwREFBWUE7UUFFN0JJLG9EQUFXQTtRQUNYQSxvREFBV0E7UUFDTEEsb0RBQVdBO1FBR2hCRCxvREFBV0E7OztLQVRqQlU7QUErSmIsK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzLzAxLWF0b21zL2Nvbm5lY3Qtd2FsbGV0LWN0YS50c3g/NWFmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRBZGRyZXNzLCBzZXRCYWxhbmNlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjY291bnRTbGljZVwiO1xuaW1wb3J0IHsgc2V0T3JpZ2luQ2hhaW4gfSBmcm9tIFwiLi4vLi4vc3RvcmUvb3JpZ2luVHJhbnNhY3Rpb25JbmZvXCI7XG5pbXBvcnQge1xuICBJbmplY3RlZENvbm5lY3QsXG4gIGZvcm1hdEFkZHJlc3MsXG4gIHN3aXRjaE5ldHdvcmssXG4gIGdldFNCUkxBbW91bnQsXG59IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgeyBDb25uZWN0QnV0dG9uIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcblxuY29uc3QgREVGQVVMVF9ORVRXT1JLX0lEID0gMjUwO1xuXG5leHBvcnQgY29uc3QgQ29ubmVjdFdhbGxldEN0YSA9ICgpID0+IHtcbiAgY29uc3QgeyBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKTtcbiAgY29uc3QgeyBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0KCk7XG4gIGNvbnN0IFtzaG93QWNjb3VudERyb3Bkb3duLCBzZXRTaG93QWNjb3VudERyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYmFsYW5jZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZS5hY2NvdW50LmJhbGFuY2UpO1xuICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmFjY291bnQuYWRkcmVzcyk7XG4gIGNvbnN0IG9yaWdpbkNoYWluSWQgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IGFueSkgPT4gc3RhdGUub3JpZ2luVHJhbnNhY3Rpb25JbmZvLmNoYWluXG4gICk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvLyBjb25zdCBmZXRjaEF2YXRhciA9ICgpID0+IHtcbiAgLy8gICBmZXRjaChgaHR0cHM6Ly9tZXRhZGF0YS5lbnMuZG9tYWlucy9tYWlubmV0L2F2YXRhci8ke2FjY291bnR9YCkudGhlbihcbiAgLy8gICAgIChyZXMpID0+IGNvbnNvbGUubG9nKHJlcylcbiAgLy8gICApO1xuICAvLyB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgIGlmIChhY2NvdW50KSB7XG4gICAgICBzZXRTaG93QWNjb3VudERyb3Bkb3duKCFzaG93QWNjb3VudERyb3Bkb3duKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZhdGUoSW5qZWN0ZWRDb25uZWN0KS50aGVuKCgpID0+IHtcbiAgICAgICAgd2luZG93LmV0aGVyZXVtXG4gICAgICAgICAgLnJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcImV0aF9yZXF1ZXN0QWNjb3VudHNcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGFzeW5jIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0QWRkcmVzcyhyZXNbMF0pKTtcbiAgICAgICAgICAgIGdldFNCUkxBbW91bnQoREVGQVVMVF9ORVRXT1JLX0lEKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0QmFsYW5jZShyZXMpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBmZXRjaEF2YXRhcigpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBkZWFjdGl2YXRlKCk7XG4gICAgZGlzcGF0Y2goc2V0T3JpZ2luQ2hhaW4obnVsbCkpO1xuICAgIGRpc3BhdGNoKHNldEFkZHJlc3MoXCJcIikpO1xuICAgIHNldFNob3dBY2NvdW50RHJvcGRvd24oZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNoYWluSWQgIT09IG9yaWdpbkNoYWluSWQgJiYgY2hhaW5JZCkge1xuICAgICAgc3dpdGNoTmV0d29yayhjaGFpbklkKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q2hhaW4gPSByZXM/LmVycm9yID8gbnVsbCA6IGNoYWluSWQ7XG5cbiAgICAgICAgZGlzcGF0Y2goc2V0T3JpZ2luQ2hhaW4obmV3Q2hhaW4pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtjaGFpbklkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGZpeGVkIGxlZnQtMCBib3R0b20tMCBiZy1ncmF5LTkwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IHAtMyBweC00IFwiPlxuICAgICAgICA8Q29ubmVjdEJ1dHRvbi5DdXN0b20+XG4gICAgICAgICAgeyh7XG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICBvcGVuQWNjb3VudE1vZGFsLFxuICAgICAgICAgICAgb3BlbkNoYWluTW9kYWwsXG4gICAgICAgICAgICBvcGVuQ29ubmVjdE1vZGFsLFxuICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMsXG4gICAgICAgICAgICBtb3VudGVkLFxuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIC8vIE5vdGU6IElmIHlvdXIgYXBwIGRvZXNuJ3QgdXNlIGF1dGhlbnRpY2F0aW9uLCB5b3VcbiAgICAgICAgICAgIC8vIGNhbiByZW1vdmUgYWxsICdhdXRoZW50aWNhdGlvblN0YXR1cycgY2hlY2tzXG4gICAgICAgICAgICBjb25zdCByZWFkeSA9IG1vdW50ZWQgJiYgYXV0aGVudGljYXRpb25TdGF0dXMgIT09IFwibG9hZGluZ1wiO1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdGVkID1cbiAgICAgICAgICAgICAgcmVhZHkgJiZcbiAgICAgICAgICAgICAgYWNjb3VudCAmJlxuICAgICAgICAgICAgICBjaGFpbiAmJlxuICAgICAgICAgICAgICAoIWF1dGhlbnRpY2F0aW9uU3RhdHVzIHx8XG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHsuLi4oIXJlYWR5ICYmIHtcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbkNvbm5lY3RNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHB5LTIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoY2hhaW4udW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5DaGFpbk1vZGFsfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBXcm9uZyBuZXR3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogMTIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3BlbkNoYWluTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluLmhhc0ljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNoYWluLmljb25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluLmljb25VcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NoYWluLm5hbWUgPz8gXCJDaGFpbiBpY29uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2hhaW4uaWNvblVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyLCBoZWlnaHQ6IDEyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuQWNjb3VudE1vZGFsfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LmRpc3BsYXlCYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gYCAoJHthY2NvdW50LmRpc3BsYXlCYWxhbmNlfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L0Nvbm5lY3RCdXR0b24uQ3VzdG9tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0V2FsbGV0Q3RhO1xuIl0sIm5hbWVzIjpbInVzZVdlYjNSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldEFkZHJlc3MiLCJzZXRCYWxhbmNlIiwic2V0T3JpZ2luQ2hhaW4iLCJJbmplY3RlZENvbm5lY3QiLCJzd2l0Y2hOZXR3b3JrIiwiZ2V0U0JSTEFtb3VudCIsIkNvbm5lY3RCdXR0b24iLCJERUZBVUxUX05FVFdPUktfSUQiLCJDb25uZWN0V2FsbGV0Q3RhIiwiY2hhaW5JZCIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsInNob3dBY2NvdW50RHJvcGRvd24iLCJzZXRTaG93QWNjb3VudERyb3Bkb3duIiwiYmFsYW5jZSIsInN0YXRlIiwiYWNjb3VudCIsImFkZHJlc3MiLCJvcmlnaW5DaGFpbklkIiwib3JpZ2luVHJhbnNhY3Rpb25JbmZvIiwiY2hhaW4iLCJkaXNwYXRjaCIsImhhbmRsZUxvZ2luIiwidGhlbiIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsInJlcyIsImhhbmRsZUxvZ291dCIsIm5ld0NoYWluIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJDdXN0b20iLCJvcGVuQWNjb3VudE1vZGFsIiwib3BlbkNoYWluTW9kYWwiLCJvcGVuQ29ubmVjdE1vZGFsIiwiYXV0aGVudGljYXRpb25TdGF0dXMiLCJtb3VudGVkIiwicmVhZHkiLCJjb25uZWN0ZWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwidW5zdXBwb3J0ZWQiLCJkaXNwbGF5IiwiZ2FwIiwiYWxpZ25JdGVtcyIsImhhc0ljb24iLCJiYWNrZ3JvdW5kIiwiaWNvbkJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwibWFyZ2luUmlnaHQiLCJpY29uVXJsIiwiaW1nIiwiYWx0IiwibmFtZSIsInNyYyIsImRpc3BsYXlOYW1lIiwiZGlzcGxheUJhbGFuY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/01-atoms/connect-wallet-cta.tsx\n"));

/***/ })

});
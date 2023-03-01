(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ConnectWalletCta */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8080);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ConnectWalletCta = ()=>{
    const { chainId  } = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_1__.useWeb3React)();
    const originChainId = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.originTransactionInfo.chain);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        dispatch((0,_store_originTransactionInfo__WEBPACK_IMPORTED_MODULE_4__/* .setOriginChain */ .vQ)(chainId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        chainId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full flex justify-center fixed left-0 bottom-0 bg-gray-900",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "my-4 p-3 px-4 ",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_5__.ConnectButton.Custom, {
                children: ({ account , chain , openAccountModal , openChainModal , openConnectModal , mounted  })=>{
                    const connected = mounted && account && chain;
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ...!mounted && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none"
                            }
                        },
                        children: (()=>{
                            if (!connected) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: openConnectModal,
                                    type: "button",
                                    className: "bg-white p-6 py-3 rounded-full font-bold hover:bg-gray-50 transition",
                                    children: "Connect Wallet"
                                });
                            }
                            if (chain.unsupported) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: openChainModal,
                                    type: "button",
                                    children: "Wrong network"
                                });
                            }
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: openAccountModal,
                                    type: "button",
                                    className: "gap-3 flex bg-white p-6 py-3 rounded-full flex-wrap justify-center",
                                    children: [
                                        account.displayName,
                                        account.displayBalance ? ` (${account.displayBalance})` : ""
                                    ]
                                })
                            });
                        })()
                    });
                }
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWalletCta);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8407);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8054);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(399);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_01_atoms_connect_wallet_cta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1337);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8998);
/* harmony import */ var _utils_wallet_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7258);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _components_01_atoms_connect_wallet_cta__WEBPACK_IMPORTED_MODULE_7__, wagmi__WEBPACK_IMPORTED_MODULE_8__, _utils_wallet_config__WEBPACK_IMPORTED_MODULE_9__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _components_01_atoms_connect_wallet_cta__WEBPACK_IMPORTED_MODULE_7__, wagmi__WEBPACK_IMPORTED_MODULE_8__, _utils_wallet_config__WEBPACK_IMPORTED_MODULE_9__, _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function getLibrary(provider) {
    return new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_6__.Web3Provider(provider);
}
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiConfig, {
        client: _utils_wallet_config__WEBPACK_IMPORTED_MODULE_9__/* .wagmiClient */ .kQ,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_10__.RainbowKitProvider, {
            chains: _utils_wallet_config__WEBPACK_IMPORTED_MODULE_9__/* .chains */ .p5,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_5__.Web3ReactProvider, {
                getLibrary: getLibrary,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
                    store: _store_store__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_01_atoms_connect_wallet_cta__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {
                            position: "bottom-center"
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _originTransactionInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8080);
/* harmony import */ var _destinyTransactionInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6253);
/* harmony import */ var _panelSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8628);
/* harmony import */ var _accountSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5193);
/* harmony import */ var _testnetsSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3749);
/* harmony import */ var _rampInfoSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7551);
/* harmony import */ var _vaultInfoSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1784);








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        // Bridge
        originTransactionInfo: _originTransactionInfo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
        destinyTransactionInfo: _destinyTransactionInfo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        panel: _panelSelector__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        account: _accountSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        testnets: _testnetsSlice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
        // On Ramp
        rampInfo: _rampInfoSlice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
        // Profit
        vaultInfo: _vaultInfoSlice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP
    }
}));


/***/ }),

/***/ 7258:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kQ": () => (/* binding */ wagmiClient),
/* harmony export */   "p5": () => (/* binding */ chains)
/* harmony export */ });
/* unused harmony export provider */
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8998);
/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7697);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7502);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_2__, wagmi_chains__WEBPACK_IMPORTED_MODULE_3__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.configureChains)([
    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.mainnet,
    wagmi_chains__WEBPACK_IMPORTED_MODULE_3__.fantom
], [
    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({
        apiKey: "FkBxn-xQEpQ3r5rsWGxA-lJr78X2VjKx"
    }),
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()
]);
const { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.getDefaultWallets)({
    appName: "My RainbowKit App",
    chains
});
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createClient)({
    autoConnect: true,
    connectors,
    provider
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 204:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8054:
/***/ ((module) => {

"use strict";
module.exports = require("@web3-react/core");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6921:
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ 8998:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ 7697:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ 7502:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ 8577:
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [99,605], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();
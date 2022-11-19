(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/originTransactionInfo.ts
var originTransactionInfo = __webpack_require__(8080);
// EXTERNAL MODULE: ./store/destinyTransactionInfo.ts
var destinyTransactionInfo = __webpack_require__(6253);
// EXTERNAL MODULE: ./store/panelSelector.ts
var panelSelector = __webpack_require__(8628);
;// CONCATENATED MODULE: ./store/accountSlice.ts

const accountSlice = (0,toolkit_.createSlice)({
    name: "account",
    initialState: {
        address: "0x",
        balance: null
    },
    reducers: {
        setBalance: (state, action)=>{
            state.balance = action.payload;
        },
        setAddress: (state, action)=>{
            state.address = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setBalance , setAddress  } = accountSlice.actions;
/* harmony default export */ const store_accountSlice = (accountSlice.reducer);

// EXTERNAL MODULE: ./store/testnetsSlice.ts
var testnetsSlice = __webpack_require__(3749);
// EXTERNAL MODULE: ./store/rampInfoSlice.ts
var rampInfoSlice = __webpack_require__(7551);
;// CONCATENATED MODULE: ./store/store.ts







/* harmony default export */ const store = ((0,toolkit_.configureStore)({
    reducer: {
        // Bridge related
        originTransactionInfo: originTransactionInfo/* default */.ZP,
        destinyTransactionInfo: destinyTransactionInfo/* default */.ZP,
        panel: panelSelector/* default */.ZP,
        account: store_accountSlice,
        testnets: testnetsSlice/* default */.ZP,
        // On Ramp related
        rampInfo: rampInfoSlice/* default */.ZP
    }
}));

// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
;// CONCATENATED MODULE: external "@ethersproject/providers"
const providers_namespaceObject = require("@ethersproject/providers");
;// CONCATENATED MODULE: ./pages/_app.tsx






// import ConnectWalletCta from "../components/01-atoms/connect-wallet-cta";
function getLibrary(provider) {
    return new providers_namespaceObject.Web3Provider(provider);
}
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Web3ReactProvider, {
        getLibrary: getLibrary,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [103,605], () => (__webpack_exec__(7288)));
module.exports = __webpack_exports__;

})();
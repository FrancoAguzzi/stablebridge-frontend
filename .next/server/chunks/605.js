"use strict";
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 6253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tj": () => (/* binding */ setDestinyChain),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "uK": () => (/* binding */ setDestinyToken)
/* harmony export */ });
/* unused harmony export destinyTransactionInfo */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const destinyTransactionInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "destinyTransactionInfo",
    initialState: {
        chain: "",
        token: 1
    },
    reducers: {
        setDestinyChain: (state, action)=>{
            state.chain = action.payload;
        },
        setDestinyToken: (state, action)=>{
            state.token = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setDestinyChain , setDestinyToken  } = destinyTransactionInfo.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (destinyTransactionInfo.reducer);


/***/ }),

/***/ 8080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jp": () => (/* binding */ setOriginToken),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vQ": () => (/* binding */ setOriginChain)
/* harmony export */ });
/* unused harmony export originTransactionInfo */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const originTransactionInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "originTransactionInfo",
    initialState: {
        chain: "",
        token: 1
    },
    reducers: {
        setOriginChain: (state, action)=>{
            state.chain = action.payload;
        },
        setOriginToken: (state, action)=>{
            state.token = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setOriginChain , setOriginToken  } = originTransactionInfo.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (originTransactionInfo.reducer);


/***/ }),

/***/ 3749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "an": () => (/* binding */ setShowOnly)
/* harmony export */ });
/* unused harmony export testnetsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const testnetsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "testnets",
    initialState: {
        showOnly: false
    },
    reducers: {
        setShowOnly: (state, action)=>{
            state.showOnly = !!action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setShowOnly  } = testnetsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testnetsSlice.reducer);


/***/ })

};
;
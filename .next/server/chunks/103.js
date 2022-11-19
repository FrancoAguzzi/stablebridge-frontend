"use strict";
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 8628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$S": () => (/* binding */ setShow),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "nj": () => (/* binding */ setStep)
/* harmony export */ });
/* unused harmony export panelSelector */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const panelSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "panelSelector",
    initialState: {
        show: false,
        step: 1
    },
    reducers: {
        setShow: (state, action)=>{
            state.show = !!action.payload;
        },
        setStep: (state, action)=>{
            state.step = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setShow , setStep  } = panelSelector.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (panelSelector.reducer);


/***/ }),

/***/ 7551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JN": () => (/* binding */ setPixData),
/* harmony export */   "T1": () => (/* binding */ setAmount),
/* harmony export */   "TR": () => (/* binding */ setChain),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export rampInfoSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const rampInfoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "rampInfo",
    initialState: {
        token: "SBRL",
        chain: "",
        amount: null,
        pixData: {}
    },
    reducers: {
        setChain: (state, action)=>{
            state.chain = action.payload;
        },
        setAmount: (state, action)=>{
            state.amount = action.payload;
        },
        setPixData: (state, action)=>{
            state.pixData = action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { setChain , setAmount , setPixData  } = rampInfoSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rampInfoSlice.reducer);


/***/ })

};
;
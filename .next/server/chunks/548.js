"use strict";
exports.id = 548;
exports.ids = [548];
exports.modules = {

/***/ 2548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NK": () => (/* reexport */ BridgeTokensCta),
  "f0": () => (/* reexport */ ChainsSelector),
  "_8": () => (/* reexport */ DestinyChainSelector),
  "C_": () => (/* reexport */ DestinyTokenSelector),
  "gZ": () => (/* reexport */ OriginChainSelector),
  "IO": () => (/* reexport */ OriginTokenSelector),
  "x1": () => (/* reexport */ RedirectToCta),
  "Od": () => (/* reexport */ Skeleton),
  "Jb": () => (/* reexport */ TheHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/01-atoms/the-header.tsx


const TheHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "w-full inline-flex items-center justify-between py-6 px-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "font-semibold text-xl",
                children: [
                    "stable",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-light",
                        children: "bridge"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-regular text-xs opacity-30",
                children: "by Blockful"
            })
        ]
    });
};
/* harmony default export */ const the_header = ((/* unused pure expression or super */ null && (TheHeader)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./constants/chainInfo.ts + 4 modules
var chainInfo = __webpack_require__(3453);
// EXTERNAL MODULE: ./constants/supportedChains.ts
var supportedChains = __webpack_require__(4781);
// EXTERNAL MODULE: ./store/rampInfoSlice.ts
var rampInfoSlice = __webpack_require__(7551);
;// CONCATENATED MODULE: ./components/01-atoms/chains-selector.tsx






const ChainsSelector = ({ onSelection  })=>{
    const [chainsList, setChainsList] = (0,external_react_.useState)([]);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const getChainsList = ()=>{
        const list = [];
        supportedChains/* supportedChains.forEach */.df.forEach((chain)=>{
            list.push((0,chainInfo/* getChainInfo */.b)(chain.chainId));
        });
        if (list.length) setChainsList([
            ...list
        ]);
    };
    const handleChainSelection = (chainId)=>{
        dispatch((0,rampInfoSlice/* setChain */.TR)(chainId));
        if (onSelection) onSelection();
    };
    (0,external_react_.useEffect)(()=>{
        getChainsList();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute top-12 right-0 bg-white z-50 flex flex-col w-full border-[1px] rounded-b-xl border-t-0 py-4",
        children: chainsList.length && chainsList?.map((chain, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                value: chain.chainId,
                onClick: ()=>handleChainSelection(chain.chainId),
                className: "py-4 px-10 inline-flex items-center justify-between hover:bg-cream transition",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: chain.logoUrl.src,
                        alt: `${chain.label} icon`,
                        className: "w-8 mr-4"
                    }),
                    chain.label
                ]
            }, index);
        })
    });
};
/* harmony default export */ const chains_selector = ((/* unused pure expression or super */ null && (ChainsSelector)));

// EXTERNAL MODULE: ./store/panelSelector.ts
var panelSelector = __webpack_require__(8628);
;// CONCATENATED MODULE: ./components/01-atoms/destiny-chain-selector.tsx





const DestinyChainSelector = ()=>{
    const selectedDestinyChainId = (0,external_react_redux_.useSelector)((state)=>state.destinyTransactionInfo.chain);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [selectedDestinyChainInfo, setSelectedDestinyChainInfo] = (0,external_react_.useState)({
        chainId: null,
        label: "",
        logoUrl: "",
        nativeCurrency: {
            name: "",
            symbol: "",
            decimals: null
        }
    });
    const handleClick = ()=>{
        dispatch((0,panelSelector/* setShow */.$S)(true));
        dispatch((0,panelSelector/* setStep */.nj)(4));
    };
    const getSelectedChainInfo = ()=>{
        const chainInfo = supportedChains/* supportedChains.find */.df.find((chain)=>chain.chainId === selectedDestinyChainId);
        setSelectedDestinyChainInfo(chainInfo);
    };
    (0,external_react_.useEffect)(()=>{
        getSelectedChainInfo();
    }, [
        selectedDestinyChainId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedChainInfo();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: handleClick,
        className: "bg-white rounded-2xl p-4 shadow-custom mr-2 flex-1 text-left h-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs opacity-50",
                children: "Chain"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "inline-flex mt-2 h-6",
                children: selectedDestinyChainInfo?.chainId ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: selectedDestinyChainInfo.logoUrl,
                            alt: `${selectedDestinyChainInfo.label} icon`,
                            className: "w-6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-medium text-base ml-2",
                            children: selectedDestinyChainInfo.label
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-semibold text-gray-300",
                    children: "-"
                })
            })
        ]
    });
};
/* harmony default export */ const destiny_chain_selector = ((/* unused pure expression or super */ null && (DestinyChainSelector)));

// EXTERNAL MODULE: ./constants/supportedTokens.ts
var supportedTokens = __webpack_require__(8821);
;// CONCATENATED MODULE: ./components/01-atoms/destiny-token-selector.tsx





const DestinyTokenSelector = ()=>{
    const selectedDestinyTokenId = (0,external_react_redux_.useSelector)((state)=>state.destinyTransactionInfo.token);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [selectedDestinyTokenInfo, setSelectedDestinyTokenInfo] = (0,external_react_.useState)({
        id: null,
        label: "",
        logoUrl: ""
    });
    const handleClick = ()=>{
        dispatch((0,panelSelector/* setShow */.$S)(true));
        dispatch((0,panelSelector/* setStep */.nj)(3));
    };
    const getSelectedTokenInfo = ()=>{
        const tokenInfo = supportedTokens/* supportedTokens.find */.i.find((token)=>token.id === selectedDestinyTokenId);
        setSelectedDestinyTokenInfo(tokenInfo);
    };
    (0,external_react_.useEffect)(()=>{
        getSelectedTokenInfo();
    }, [
        selectedDestinyTokenId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedTokenInfo();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: handleClick,
        className: "bg-white rounded-2xl p-4 pb-2 shadow-custom mr-2 flex-1 text-left h-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs opacity-50",
                children: "Token"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "inline-flex mt-2 h-6",
                children: selectedDestinyTokenInfo?.id ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: selectedDestinyTokenInfo.logoUrl,
                            alt: `${selectedDestinyTokenInfo.label} icon`,
                            className: "w-6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-medium text-base ml-2",
                            children: selectedDestinyTokenInfo.label
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-semibold text-gray-300",
                    children: "-"
                })
            })
        ]
    });
};
/* harmony default export */ const destiny_token_selector = ((/* unused pure expression or super */ null && (DestinyTokenSelector)));

;// CONCATENATED MODULE: ./components/01-atoms/origin-chain-selector.tsx





const OriginChainSelector = ()=>{
    const selectedOriginChainId = (0,external_react_redux_.useSelector)((state)=>state.originTransactionInfo.chain);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [selectedOriginChainInfo, setSelectedOriginChainInfo] = (0,external_react_.useState)({
        chainId: null,
        label: "",
        logoUrl: "",
        nativeCurrency: {
            name: "",
            symbol: "",
            decimals: null
        }
    });
    const handleClick = ()=>{
        dispatch((0,panelSelector/* setShow */.$S)(true));
        dispatch((0,panelSelector/* setStep */.nj)(2));
    };
    const getSelectedChainInfo = ()=>{
        const chainInfo = supportedChains/* supportedChains.find */.df.find((chain)=>chain.chainId === selectedOriginChainId);
        setSelectedOriginChainInfo(chainInfo);
    };
    (0,external_react_.useEffect)(()=>{
        getSelectedChainInfo();
    }, [
        selectedOriginChainId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedChainInfo();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: handleClick,
        className: "bg-white rounded-2xl p-4 shadow-custom mr-2 flex-1 text-left h-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs opacity-50",
                children: "Chain"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "inline-flex mt-2 h-6",
                children: selectedOriginChainInfo?.chainId ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: selectedOriginChainInfo.logoUrl,
                            alt: `${selectedOriginChainInfo.label} icon`,
                            className: "w-6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-medium text-base ml-2",
                            children: selectedOriginChainInfo.label
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-semibold text-gray-300",
                    children: "-"
                })
            })
        ]
    });
};
/* harmony default export */ const origin_chain_selector = ((/* unused pure expression or super */ null && (OriginChainSelector)));

;// CONCATENATED MODULE: ./components/01-atoms/origin-token-selector.tsx





const OriginTokenSelector = ()=>{
    const selectedOriginTokenId = (0,external_react_redux_.useSelector)((state)=>state.originTransactionInfo.token);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [selectedOriginTokenInfo, setSelectedOriginTokenInfo] = (0,external_react_.useState)({
        id: null,
        label: "",
        logoUrl: ""
    });
    const handleClick = ()=>{
        dispatch((0,panelSelector/* setShow */.$S)(true));
        dispatch((0,panelSelector/* setStep */.nj)(1));
    };
    const getSelectedTokenInfo = ()=>{
        const tokenInfo = supportedTokens/* supportedTokens.find */.i.find((token)=>token.id === selectedOriginTokenId);
        setSelectedOriginTokenInfo(tokenInfo);
    };
    (0,external_react_.useEffect)(()=>{
        getSelectedTokenInfo();
    }, [
        selectedOriginTokenId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedTokenInfo();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: handleClick,
        className: "bg-white rounded-2xl p-4 pb-2 shadow-custom mr-2 flex-1 text-left h-20",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-xs opacity-50",
                children: "Token"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "inline-flex mt-2 h-6",
                children: selectedOriginTokenInfo?.id ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: selectedOriginTokenInfo.logoUrl,
                            alt: `${selectedOriginTokenInfo.label} icon`,
                            className: "w-6"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-medium text-base ml-2",
                            children: selectedOriginTokenInfo.label
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "font-semibold text-gray-300",
                    children: "-"
                })
            })
        ]
    });
};
/* harmony default export */ const origin_token_selector = ((/* unused pure expression or super */ null && (OriginTokenSelector)));

;// CONCATENATED MODULE: ./components/01-atoms/redirect-to-cta.tsx


const RedirectToCta = ({ destiny , label  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: destiny,
        className: "flex bg-cream border-[1px] rounded-2xl p-4 justify-center items-center h-40 w-80 text-xl hover:bg-gray-1 transition",
        children: label
    });
};
/* harmony default export */ const redirect_to_cta = ((/* unused pure expression or super */ null && (RedirectToCta)));

;// CONCATENATED MODULE: ./components/01-atoms/bridge-tokens-cta.tsx



const BridgeTokensCta = ()=>{
    const originToken = (0,external_react_redux_.useSelector)((state)=>state.originTransactionInfo.token);
    const originChain = (0,external_react_redux_.useSelector)((state)=>state.originTransactionInfo.chain);
    const destinyToken = (0,external_react_redux_.useSelector)((state)=>state.destinyTransactionInfo.token);
    const destinyChain = (0,external_react_redux_.useSelector)((state)=>state.destinyTransactionInfo.chain);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const continueBridgeProcess = ()=>{
        if (!originToken) {
            dispatch((0,panelSelector/* setStep */.nj)(1));
            dispatch((0,panelSelector/* setShow */.$S)(true));
            return;
        } else if (!originChain) {
            dispatch((0,panelSelector/* setStep */.nj)(2));
            dispatch((0,panelSelector/* setShow */.$S)(true));
            return;
        } else if (!destinyToken) {
            dispatch((0,panelSelector/* setStep */.nj)(3));
            dispatch((0,panelSelector/* setShow */.$S)(true));
            return;
        } else if (!destinyChain) {
            dispatch((0,panelSelector/* setStep */.nj)(4));
            dispatch((0,panelSelector/* setShow */.$S)(true));
            return;
        } else {
        // TODO: Confirmation screen
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: continueBridgeProcess,
        className: "w-full bg-black text-white font-semibold text-base p-6 rounded-3xl hover:animate-pulse transition",
        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Proceed to transaction information"
        })
    });
};
/* harmony default export */ const bridge_tokens_cta = ((/* unused pure expression or super */ null && (BridgeTokensCta)));

;// CONCATENATED MODULE: ./components/01-atoms/skeleton.tsx

const Skeleton = ({ width =20 , height =4  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `flex animate-pulse items-center space-x-4 py-4 ${width && `w-[${width}px]`} ${height && `w-[${height}px]`}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-12 w-12 flex-shrink-0 rounded-md bg-gray-200"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center space-x-2 text-gray-200",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-3 w-28 rounded-md bg-gray-200"
                    })
                })
            ]
        })
    });
/* harmony default export */ const skeleton = ((/* unused pure expression or super */ null && (Skeleton)));

;// CONCATENATED MODULE: ./components/01-atoms/index.ts











/***/ }),

/***/ 3453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ getChainInfo)
});

;// CONCATENATED MODULE: ./public/chains/ethereum-logo.png
/* harmony default export */ const ethereum_logo = ({"src":"/_next/static/media/ethereum-logo.4367cb2e.png","height":128,"width":128,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42mMAgfiaVxop9a8ORFa8/BVT9fJXMpCdUPtKgwEEQIy0hldvfQpe/F+47sP/KUve/Q8sfvE/FSiWCFIE0gnU9b+g/dXPz1///D96/tt/oAk/E2pe/k+ue3WAAajyl1/hi//7j3/5/+j5r//Ltn76P3Hx+//RlS9BCn8xgIgoIGfVto//1+z6/L9q0tv/TdPf/geZkFT36hfIhANhZS//9859+/Ph05//N+3//L+87/XP2CqwCQfgjnTPe/F/055P/+ev/fDfrxDhSLg3QSYFl7z8FVWB6k0AxHumi70SRQ4AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/chains/polygon-matic-logo.svg
/* harmony default export */ const polygon_matic_logo = ({"src":"/_next/static/media/polygon-matic-logo.4de125e3.svg","height":34,"width":38});
;// CONCATENATED MODULE: ./public/chains/arbitrum-logo.svg
/* harmony default export */ const arbitrum_logo = ({"src":"/_next/static/media/arbitrum-logo.58693b6a.svg","height":514,"width":470});
;// CONCATENATED MODULE: ./public/chains/fantom-logo.webp
/* harmony default export */ const fantom_logo = ({"src":"/_next/static/media/fantom-logo.f5226ac8.webp","height":28,"width":28,"blurDataURL":"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAABwAgCdASoIAAgAAkA4JagCdLoB+AARD5OSD4lAAP3D0/9Y1BwyXFFOPnJshzM5UQtwJ/cafjdZD7f/Vo8/jJtXpWPoPFb+PL/5BrV0mb7k4WXloAA=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./constants/supportedChains.ts
var supportedChains = __webpack_require__(4781);
;// CONCATENATED MODULE: ./constants/chainInfo.ts





const CHAIN_INFO = {
    [supportedChains/* SupportedChainId.ARBITRUM_ONE */.HL.ARBITRUM_ONE]: {
        chainId: 42161,
        label: "Arbitrum",
        logoUrl: arbitrum_logo,
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        },
        stableBridgeContractAddress: ""
    },
    [supportedChains/* SupportedChainId.FANTOM */.HL.FANTOM]: {
        chainId: 250,
        label: "Fantom",
        logoUrl: fantom_logo,
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18
        },
        stableBridgeContractAddress: ""
    },
    [supportedChains/* SupportedChainId.GOERLI */.HL.GOERLI]: {
        chainId: 5,
        label: "Goerli",
        logoUrl: ethereum_logo,
        nativeCurrency: {
            name: "Goerli Ether",
            symbol: "gETH",
            decimals: 18
        },
        stableBridgeContractAddress: ""
    },
    [supportedChains/* SupportedChainId.POLYGON */.HL.POLYGON]: {
        chainId: 137,
        bridge: "https://wallet.polygon.technology/bridge",
        label: "Polygon",
        logoUrl: polygon_matic_logo,
        nativeCurrency: {
            name: "Polygon Matic",
            symbol: "MATIC",
            decimals: 18
        },
        stableBridgeContractAddress: "0x0DFcd028b5AD0E789AcB8d1C5bE1218FA59bC62A"
    },
    [supportedChains/* SupportedChainId.POLYGON_MUMBAI */.HL.POLYGON_MUMBAI]: {
        chainId: 80001,
        infoLink: "https://info.uniswap.org/#/polygon/",
        label: "Polygon Mumbai",
        logoUrl: polygon_matic_logo,
        nativeCurrency: {
            name: "Polygon Mumbai Matic",
            symbol: "mMATIC",
            decimals: 18
        },
        stableBridgeContractAddress: ""
    }
};
function getChainInfo(chainId) {
    if (chainId) {
        return CHAIN_INFO[chainId] ?? undefined;
    } else {
        return undefined;
    }
}


/***/ }),

/***/ 4781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HL": () => (/* binding */ SupportedChainId),
/* harmony export */   "NH": () => (/* binding */ testnetChainIds),
/* harmony export */   "Y6": () => (/* binding */ mainnetChainIds),
/* harmony export */   "df": () => (/* binding */ supportedChains)
/* harmony export */ });
/* unused harmony export isSupportedChain */
var SupportedChainId;
(function(SupportedChainId) {
    SupportedChainId[SupportedChainId["ARBITRUM_ONE"] = 42161] = "ARBITRUM_ONE";
    SupportedChainId[SupportedChainId["GOERLI"] = 5] = "GOERLI";
    SupportedChainId[SupportedChainId["FANTOM"] = 250] = "FANTOM";
    SupportedChainId[SupportedChainId["POLYGON"] = 137] = "POLYGON";
    SupportedChainId[SupportedChainId["POLYGON_MUMBAI"] = 80001] = "POLYGON_MUMBAI";
})(SupportedChainId || (SupportedChainId = {}));
const testnetChainIds = [
    80001,
    5
];
const mainnetChainIds = [
    42161,
    250,
    137
];
const supportedChains = [
    {
        chainId: 42161,
        label: "Arbitrum",
        logoUrl: "/chains/arbitrum-logo.svg",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18
        }
    },
    {
        chainId: 137,
        label: "Polygon",
        logoUrl: "/tokens/polygon-logo.png",
        nativeCurrency: {
            name: "Polygon Matic",
            symbol: "MATIC",
            decimals: 18
        }
    },
    {
        chainId: 250,
        label: "Fantom",
        logoUrl: "/chains/fantom-logo.webp",
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
            decimals: 18
        }
    },
    {
        chainId: 5,
        label: "Goerli",
        logoUrl: "/tokens/ethereum-logo.png",
        nativeCurrency: {
            name: "Goerli Ether",
            symbol: "gETH",
            decimals: 18
        }
    },
    {
        chainId: 80001,
        label: "Polygon Mumbai",
        logoUrl: "/tokens/polygon-logo.png",
        nativeCurrency: {
            name: "Polygon Mumbai Matic",
            symbol: "mMATIC",
            decimals: 18
        }
    }
];
function isSupportedChain(chainId) {
    return !!chainId && !!SupportedChainId[chainId];
}


/***/ }),

/***/ 8821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ supportedTokens)
/* harmony export */ });
const supportedTokens = [
    {
        id: 1,
        label: "SBRL",
        logoUrl: "/tokens/SBRL.svg"
    }
];


/***/ })

};
;
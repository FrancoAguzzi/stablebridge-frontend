"use strict";
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 70:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NK": () => (/* reexport */ BridgeTokensCta),
  "aR": () => (/* reexport */ ChainSelectorOptions),
  "f0": () => (/* reexport */ ChainsSelector),
  "_8": () => (/* reexport */ DestinyChainSelector),
  "C_": () => (/* reexport */ DestinyTokenSelector),
  "gZ": () => (/* reexport */ OriginChainSelector),
  "IO": () => (/* reexport */ OriginTokenSelector),
  "x1": () => (/* reexport */ RedirectToCta),
  "Od": () => (/* reexport */ Skeleton),
  "Jb": () => (/* reexport */ the_header/* TheHeader */.J)
});

// UNUSED EXPORTS: BlockieAvatar

// EXTERNAL MODULE: ./components/01-atoms/the-header.tsx
var the_header = __webpack_require__(534);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@web3-react/core"
var core_ = __webpack_require__(8054);
// EXTERNAL MODULE: ./store/accountSlice.ts
var accountSlice = __webpack_require__(5193);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./constants/chainInfo.ts + 4 modules
var chainInfo = __webpack_require__(3453);
// EXTERNAL MODULE: ./constants/supportedChains.ts
var supportedChains = __webpack_require__(4781);
// EXTERNAL MODULE: ./store/rampInfoSlice.ts
var rampInfoSlice = __webpack_require__(7551);
// EXTERNAL MODULE: ./store/vaultInfoSlice.ts
var vaultInfoSlice = __webpack_require__(1784);
// EXTERNAL MODULE: ./utils/index.ts + 2 modules
var utils = __webpack_require__(137);
;// CONCATENATED MODULE: ./components/01-atoms/chains-selector.tsx










var ChainSelectorOptions;
(function(ChainSelectorOptions) {
    ChainSelectorOptions["VAULT"] = "vault";
    ChainSelectorOptions["ONRAMP"] = "onramp";
})(ChainSelectorOptions || (ChainSelectorOptions = {}));
const ChainsSelector = ({ onSelection , parent  })=>{
    const { activate  } = (0,core_.useWeb3React)();
    const account = (0,external_react_redux_.useSelector)((state)=>state.account.address);
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
    const handleChainSelection = async (chainId)=>{
        if (!account) {
            try {
                await activate(utils/* InjectedConnect */.Ev);
            } catch (e) {
                return e;
            }
        }
        try {
            (0,utils/* switchNetwork */.If)(chainId);
            if (parent === ChainSelectorOptions.ONRAMP) {
                dispatch((0,rampInfoSlice/* setChain */.TR)(chainId));
            } else if (parent === ChainSelectorOptions.VAULT) {
                dispatch((0,vaultInfoSlice/* setChain */.TR)(chainId));
            }
            const balance = await (0,utils/* getSBRLAmount */.dT)(chainId);
            dispatch((0,accountSlice/* setBalance */.Lu)(balance));
            if (onSelection) onSelection();
        } catch (e1) {
            if (parent === ChainSelectorOptions.ONRAMP) {
                dispatch((0,rampInfoSlice/* setChain */.TR)(""));
            } else if (parent === ChainSelectorOptions.VAULT) {
                dispatch((0,vaultInfoSlice/* setChain */.TR)(""));
            }
            return e1;
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedDestinyChainId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedChainInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedDestinyTokenId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedTokenInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedOriginChainId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedChainInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        selectedOriginTokenId
    ]);
    (0,external_react_.useEffect)(()=>{
        getSelectedTokenInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

// EXTERNAL MODULE: external "@heroicons/react/24/solid"
var solid_ = __webpack_require__(8802);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./pages/index.tsx
var pages = __webpack_require__(4186);
;// CONCATENATED MODULE: ./components/01-atoms/redirect-to-cta.tsx




const RedirectToCta = ({ destiny , label , type  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: destiny,
        className: "w-full flex-col mx-auto my-0 flex bg-cream border-[1px] rounded-2xl p-4 justify-center items-center text-base hover:bg-gray-1 transition",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-16 mb-4",
                children: type === pages.RedirectionCTAType.ONRAMP ? /*#__PURE__*/ jsx_runtime_.jsx(solid_.CircleStackIcon, {}) : type === pages.RedirectionCTAType.VAULT ? /*#__PURE__*/ jsx_runtime_.jsx(solid_.ShieldCheckIcon, {}) : type === pages.RedirectionCTAType.TRANSPARENCY ? /*#__PURE__*/ jsx_runtime_.jsx(solid_.CubeTransparentIcon, {}) : null
            }),
            label
        ]
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

// EXTERNAL MODULE: external "blockies-ts"
var external_blockies_ts_ = __webpack_require__(1966);
// EXTERNAL MODULE: ./node_modules/next/legacy/image.js
var legacy_image = __webpack_require__(9755);
;// CONCATENATED MODULE: ./components/01-atoms/blockie-avatar.tsx




const BlockieAvatar = ({ name =""  })=>{
    const [src, setSrc] = useState(null);
    useEffect(()=>setSrc(blockies.create({
            seed: name
        }).toDataURL()), [
        name
    ]);
    return src && /*#__PURE__*/ _jsx(Image, {
        src: src,
        layout: "fill",
        alt: name,
        unoptimized: true
    });
};

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
        stableBridgeContractAddress: "0x6Cec7A87c83a18a197155ef6A5D43998B391B66D"
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
        stableBridgeContractAddress: "0x40eFfEaB1A6f68E42c462cEc77f35b8525528345"
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
const testnetChainIds = [];
// export const testnetChainIds = [80001, 5];
// export const mainnetChainIds = [42161, 250, 137];
const mainnetChainIds = [
    250
];
const supportedChains = [
    // {
    //   chainId: 42161,
    //   label: "Arbitrum",
    //   logoUrl: "/chains/arbitrum-logo.svg",
    //   nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    // },
    // {
    //   chainId: 137,
    //   label: "Polygon",
    //   logoUrl: "/tokens/polygon-logo.png",
    //   nativeCurrency: { name: "Polygon Matic", symbol: "MATIC", decimals: 18 },
    // },
    {
        chainId: 250,
        label: "Fantom",
        logoUrl: "/chains/fantom-logo.webp",
        nativeCurrency: {
            name: "Fantom",
            symbol: "FTM",
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


/***/ }),

/***/ 4186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home": () => (/* binding */ Home),
/* harmony export */   "RedirectionCTAType": () => (/* binding */ RedirectionCTAType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_01_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);




var RedirectionCTAType;
(function(RedirectionCTAType) {
    RedirectionCTAType["ONRAMP"] = "onramp";
    RedirectionCTAType["VAULT"] = "vault";
    RedirectionCTAType["TRANSPARENCY"] = "transparency";
})(RedirectionCTAType || (RedirectionCTAType = {}));
const Home = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "StableBridge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "StableBridge"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.svg"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "bg-white max-w-md m-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_01_atoms__WEBPACK_IMPORTED_MODULE_1__/* .TheHeader */ .Jb, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full px-10 grid grid-cols-1 items-center mt-6 gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-medium w-full",
                                children: "Secure,"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-3xl font-medium w-full leading-3",
                                children: "Profitable,"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "mb-2 text-3xl w-full font-medium",
                                children: "Transparent"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-800 text-sm mb-2",
                                children: "StableBridge is the most compliant stablecoin on the market, combining proof of reserve, proof of issuance and on-chain yields"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid gap-4 grid-cols-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_01_atoms__WEBPACK_IMPORTED_MODULE_1__/* .RedirectToCta */ .x1, {
                                        destiny: "/onramp",
                                        label: "On-ramp",
                                        type: RedirectionCTAType.ONRAMP
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_01_atoms__WEBPACK_IMPORTED_MODULE_1__/* .RedirectToCta */ .x1, {
                                        destiny: "/vault",
                                        label: "Vault",
                                        type: RedirectionCTAType.VAULT
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_01_atoms__WEBPACK_IMPORTED_MODULE_1__/* .RedirectToCta */ .x1, {
                                            destiny: "/transparency",
                                            label: "Transparency & Analytics",
                                            type: RedirectionCTAType.TRANSPARENCY
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ev": () => (/* binding */ InjectedConnect),
  "Tg": () => (/* binding */ formatAddress),
  "$V": () => (/* binding */ getEstimatedGasFee),
  "dT": () => (/* binding */ getSBRLAmount),
  "If": () => (/* binding */ switchNetwork)
});

// UNUSED EXPORTS: approveSbrl, getRpcUrl, stakeAmount

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./utils/abi.ts
const abi_stakeContractAbi = [
    {
        inputs: [
            {
                internalType: "contract IERC20",
                name: "token",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [],
        name: "AAAA",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "addReward",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getCurrentIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "index",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "resetIndex",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "stake",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "shares",
                type: "uint256"
            }
        ],
        name: "unstake",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const abi_sbrlAbi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "mint",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "minter",
                type: "address"
            },
            {
                internalType: "bool",
                name: "enableMinting",
                type: "bool"
            }
        ],
        name: "setMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];

// EXTERNAL MODULE: ./constants/supportedChains.ts
var supportedChains = __webpack_require__(4781);
;// CONCATENATED MODULE: ./constants/networks.ts

const INFURA_KEY = "eb629d0bc0144aa2abb2ff1593e12155";
if (typeof INFURA_KEY === "undefined") {
    throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`);
}
const FALLBACK_URLS = {
    [supportedChains/* SupportedChainId.ARBITRUM_ONE */.HL.ARBITRUM_ONE]: [
        // "Safe" URLs
        "https://arb1.arbitrum.io/rpc",
        // "Fallback" URLs
        "https://arbitrum.public-rpc.com"
    ],
    [supportedChains/* SupportedChainId.GOERLI */.HL.GOERLI]: [
        // "Safe" URLs
        "https://rpc.goerli.mudit.blog/",
        // "Fallback" URLs
        "https://rpc.ankr.com/eth_goerli"
    ],
    [supportedChains/* SupportedChainId.FANTOM */.HL.FANTOM]: [
        "https://rpc.ftm.tools"
    ],
    [supportedChains/* SupportedChainId.POLYGON */.HL.POLYGON]: [
        "https://polygon-rpc.com/",
        "https://rpc-mainnet.matic.network",
        "https://matic-mainnet.chainstacklabs.com",
        "https://rpc-mainnet.maticvigil.com",
        "https://rpc-mainnet.matic.quiknode.pro",
        "https://matic-mainnet-full-rpc.bwarelabs.com"
    ],
    [supportedChains/* SupportedChainId.POLYGON_MUMBAI */.HL.POLYGON_MUMBAI]: [
        "https://matic-mumbai.chainstacklabs.com",
        "https://rpc-mumbai.maticvigil.com",
        "https://matic-testnet-archive-rpc.bwarelabs.com"
    ]
};
const RPC_URLS = {
    [supportedChains/* SupportedChainId.ARBITRUM_ONE */.HL.ARBITRUM_ONE]: [
        ...FALLBACK_URLS[supportedChains/* SupportedChainId.ARBITRUM_ONE */.HL.ARBITRUM_ONE]
    ],
    [supportedChains/* SupportedChainId.FANTOM */.HL.FANTOM]: [
        ...FALLBACK_URLS[supportedChains/* SupportedChainId.FANTOM */.HL.FANTOM]
    ],
    [supportedChains/* SupportedChainId.GOERLI */.HL.GOERLI]: [
        `https://goerli.infura.io/v3/${INFURA_KEY}`,
        ...FALLBACK_URLS[supportedChains/* SupportedChainId.GOERLI */.HL.GOERLI]
    ],
    [supportedChains/* SupportedChainId.POLYGON */.HL.POLYGON]: [
        `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
        ...FALLBACK_URLS[supportedChains/* SupportedChainId.POLYGON */.HL.POLYGON]
    ],
    [supportedChains/* SupportedChainId.POLYGON_MUMBAI */.HL.POLYGON_MUMBAI]: [
        `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
        ...FALLBACK_URLS[supportedChains/* SupportedChainId.POLYGON_MUMBAI */.HL.POLYGON_MUMBAI]
    ]
};

// EXTERNAL MODULE: external "@web3-react/injected-connector"
var injected_connector_ = __webpack_require__(6590);
// EXTERNAL MODULE: ./constants/chainInfo.ts + 4 modules
var chainInfo = __webpack_require__(3453);
;// CONCATENATED MODULE: ./utils/index.ts






const STAKE_CONTRACT_ADDRESS = "0xb5eE0C18eEB5745aa84a593b247bb627f147fc0a";
const InjectedConnect = new injected_connector_.InjectedConnector({
    supportedChainIds: [
        1,
        3,
        137,
        80001
    ]
});
const formatAddress = (str)=>{
    const initialDigits = str.substring(0, 6);
    const middleDigits = "....";
    const lastDigits = str.substring(str.length - 5, str.length - 1);
    return initialDigits + middleDigits + lastDigits;
};
const switchNetwork = async (chainId)=>{
    if (chainId) {
        const chainIdInHex = external_ethers_.ethers.utils.hexValue(chainId);
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: chainIdInHex
                    }
                ]
            });
        } catch (e) {
            // This error code indicates the chain was not added to the wallet yet
            if (e.code === 4902) {
                try {
                    const chainInfo = supportedChains/* supportedChains.find */.df.find((chain)=>{
                        return chain.chainId === chainId;
                    });
                    if (chainInfo) {
                        await window.ethereum.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: chainIdInHex,
                                    chainName: chainInfo.nativeCurrency.name,
                                    rpcUrls: [
                                        getRpcUrl(chainId)
                                    ]
                                }
                            ]
                        });
                    } else {
                        return {
                            error: "Not supported chain"
                        };
                    }
                } catch (error) {
                    return {
                        error
                    };
                }
            }
        }
    }
};
// export const connectWallet = async () => {
//   const { activate, deactivate } = useWeb3React();
//   activate(Injected);
//   // await window.ethereum.enable();
//   // const provider = new ethers.providers.Web3Provider(window.ethereum);
//   // let accounts = await provider.send("eth_requestAccounts", []);
//   // let account = accounts[0];
//   // provider.on("accountsChanged", function (accounts) {
//   //   account = accounts[0];
//   // });
//   changeNetwork(SupportedChainId.MAINNET);
// };
const stakeAmount = async (amount)=>{
    try {
        const ethereum = window.ethereum;
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        const walletAddress = accounts[0];
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner(walletAddress);
        const contract = new Contract(STAKE_CONTRACT_ADDRESS, stakeContractAbi, signer);
        approveSbrl(250, amount);
        const result = await contract.stake(amount * 10e18);
        return result;
    } catch (e) {
        return e;
    }
};
const approveSbrl = async (chainId, amount)=>{
    if (chainId) {
        const ethereum = window.ethereum;
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        try {
            const walletAddress = accounts[0];
            const address = getChainInfo(chainId)?.stableBridgeContractAddress;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner(walletAddress);
            const contract = new Contract(address, sbrlAbi, signer);
            const approve = await contract.approve(STAKE_CONTRACT_ADDRESS, amount);
            return approve;
        } catch (e) {
            console.error(e);
            return "Failed to approve";
        }
    }
};
const getSBRLAmount = async (chainId)=>{
    if (chainId) {
        const ethereum = window.ethereum;
        const accounts = await ethereum.request({
            method: "eth_requestAccounts"
        });
        try {
            const walletAddress = accounts[0];
            const address = (0,chainInfo/* getChainInfo */.b)(chainId)?.stableBridgeContractAddress;
            const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner(walletAddress);
            const contract = new external_ethers_.Contract(address, abi_sbrlAbi, signer);
            const balance = await contract.balanceOf(walletAddress);
            const balanceFormatted = external_ethers_.ethers.utils.formatUnits(balance, 6);
            return balanceFormatted;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
};
// export const listenToPayment = async () => {
//   setInterval(async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//     const res = await fetch(`${import.meta.env.VITE_PIX_API}/verify-pix`, {
//       method: "POST",
//       headers: myHeaders,
//       body: JSON.stringify({
//         id: store.getters.getPixData.id,
//       }),
//     });
//     const data = await res.json();
//     if (data.approved) {
//       clearInterval;
//       router.push({
//         path: "/",
//         query: {
//           message: `Successfully added SBRL via PIX to your wallet.`,
//         },
//       });
//     }
//   }, 5000);
// };
// export const listenBalance = () => {
//   setInterval(() => {
//     updateBalance();
//   }, 10000);
// };
const getRpcUrl = (chainId)=>{
    switch(chainId){
        case supportedChains/* SupportedChainId.ARBITRUM_ONE */.HL.ARBITRUM_ONE:
        case supportedChains/* SupportedChainId.FANTOM */.HL.FANTOM:
        case supportedChains/* SupportedChainId.GOERLI */.HL.GOERLI:
        case supportedChains/* SupportedChainId.POLYGON */.HL.POLYGON:
        case supportedChains/* SupportedChainId.POLYGON_MUMBAI */.HL.POLYGON_MUMBAI:
            return RPC_URLS[chainId][0];
        default:
            return FALLBACK_URLS[chainId][0];
    }
};
const getEstimatedGasFee = async (chainId, tokenId, amount)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const res = await fetch(`${""}/estimated-gas`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            networkId: chainId,
            token: tokenId,
            amount: amount
        })
    });
    const data = await res.json();
    return data;
}; // export const doBridge = async (
 //   toAddress: string,
 //   amount: string,
 //   chainId: number
 // ) => {
 //   const ethereum = (window as any).ethereum;
 //   const accounts = await ethereum.request({
 //     method: "eth_requestAccounts",
 //   });
 //   const contractAddress = store.getters.getContractAddress;
 //   const provider = new ethers.providers.Web3Provider(ethereum);
 //   const walletAddress = accounts[0]; // first account in MetaMask
 //   const signer = provider.getSigner(walletAddress);
 //   const contract = new ethers.Contract(contractAddress, sbrlAbi, signer);
 //   const numberOfDecimals = 6;
 //   const numberOfTokens = ethers.utils.parseUnits(amount, numberOfDecimals);
 //   const tx = await contract.burnToBridge(numberOfTokens, toAddress, chainId, {
 //     gasLimit: 3000000,
 //     gasPrice: ethers.utils.parseUnits("50", "gwei"),
 //   });
 //   console.log(tx);
 // };


/***/ })

};
;
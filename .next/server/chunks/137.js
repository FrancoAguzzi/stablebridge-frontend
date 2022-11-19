"use strict";
exports.id = 137;
exports.ids = [137];
exports.modules = {

/***/ 137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ev": () => (/* binding */ InjectedConnect),
  "$V": () => (/* binding */ getEstimatedGasFee),
  "If": () => (/* binding */ switchNetwork)
});

// UNUSED EXPORTS: formatAddress, getRpcUrl, getSBRLAmount

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./utils/abi.ts
const abi_abi = [
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
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
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
                name: "network",
                type: "uint256"
            }
        ],
        name: "BurnToBridge",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "string",
                name: "pixKey",
                type: "string"
            }
        ],
        name: "Withdraw",
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
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "network",
                type: "uint256"
            }
        ],
        name: "burnToBridge",
        outputs: [],
        stateMutability: "nonpayable",
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
        stateMutability: "pure",
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
        outputs: [],
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
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "networks",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
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
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "network",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "accepted",
                type: "bool"
            }
        ],
        name: "setNetworks",
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
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "pixKey",
                type: "string"
            }
        ],
        name: "withdraw",
        outputs: [],
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
const getSBRLAmount = async (chainId)=>{
    const ethereum = window.ethereum;
    const accounts = await ethereum.request({
        method: "eth_requestAccounts"
    });
    const walletAddress = accounts[0];
    const address = getChainInfo(chainId).stableBridgeContractAddress;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner(walletAddress);
    const contract = new Contract(address, abi, signer);
    const balance = await contract.balanceOf(walletAddress);
    const balanceFormatted = ethers.utils.formatUnits(balance, 6);
    alert(balanceFormatted.toString());
    return balanceFormatted;
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/estimated-gas`, {
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
 //   const contract = new ethers.Contract(contractAddress, abi, signer);
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
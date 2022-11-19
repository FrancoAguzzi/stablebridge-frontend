import { SupportedChainId } from "./supportedChains";

const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY;
if (typeof INFURA_KEY === "undefined") {
  throw new Error(
    `REACT_APP_INFURA_KEY must be a defined environment variable`
  );
}

export const FALLBACK_URLS: { [key in SupportedChainId]: string[] } = {
  [SupportedChainId.ARBITRUM_ONE]: [
    // "Safe" URLs
    "https://arb1.arbitrum.io/rpc",
    // "Fallback" URLs
    "https://arbitrum.public-rpc.com",
  ],
  [SupportedChainId.GOERLI]: [
    // "Safe" URLs
    "https://rpc.goerli.mudit.blog/",
    // "Fallback" URLs
    "https://rpc.ankr.com/eth_goerli",
  ],
  [SupportedChainId.FANTOM]: ["https://rpc.ftm.tools"],
  [SupportedChainId.POLYGON]: [
    "https://polygon-rpc.com/",
    "https://rpc-mainnet.matic.network",
    "https://matic-mainnet.chainstacklabs.com",
    "https://rpc-mainnet.maticvigil.com",
    "https://rpc-mainnet.matic.quiknode.pro",
    "https://matic-mainnet-full-rpc.bwarelabs.com",
  ],
  [SupportedChainId.POLYGON_MUMBAI]: [
    "https://matic-mumbai.chainstacklabs.com",
    "https://rpc-mumbai.maticvigil.com",
    "https://matic-testnet-archive-rpc.bwarelabs.com",
  ],
};

export const RPC_URLS: { [key in SupportedChainId]: string[] } = {
  [SupportedChainId.ARBITRUM_ONE]: [
    ...FALLBACK_URLS[SupportedChainId.ARBITRUM_ONE],
  ],
  [SupportedChainId.FANTOM]: [...FALLBACK_URLS[SupportedChainId.FANTOM]],
  [SupportedChainId.GOERLI]: [
    `https://goerli.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.GOERLI],
  ],
  [SupportedChainId.POLYGON]: [
    `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.POLYGON],
  ],
  [SupportedChainId.POLYGON_MUMBAI]: [
    `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
    ...FALLBACK_URLS[SupportedChainId.POLYGON_MUMBAI],
  ],
};

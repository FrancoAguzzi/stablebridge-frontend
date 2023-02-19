import ethereumLogoUrl from "../public/chains/ethereum-logo.png";
import polygonMaticLogo from "../public/chains/polygon-matic-logo.svg";
import arbitrumLogo from "../public/chains/arbitrum-logo.svg";
import fantomLogo from "../public/chains/fantom-logo.webp";
import { SupportedChainId } from "./supportedChains";

const CHAIN_INFO: any = {
  [SupportedChainId.ARBITRUM_ONE]: {
    chainId: 42161,
    label: "Arbitrum",
    logoUrl: arbitrumLogo,
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    stableBridgeContractAddress: "",
  },
  [SupportedChainId.FANTOM]: {
    chainId: 250,
    label: "Fantom",
    logoUrl: fantomLogo,
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
    stableBridgeContractAddress: "0x6Cec7A87c83a18a197155ef6A5D43998B391B66D",
  },
  [SupportedChainId.GOERLI]: {
    chainId: 5,
    label: "Goerli",
    logoUrl: ethereumLogoUrl,
    nativeCurrency: { name: "Goerli Ether", symbol: "gETH", decimals: 18 },
    stableBridgeContractAddress: "0x40eFfEaB1A6f68E42c462cEc77f35b8525528345",
  },
  [SupportedChainId.POLYGON]: {
    chainId: 137,
    bridge: "https://wallet.polygon.technology/bridge",
    label: "Polygon",
    logoUrl: polygonMaticLogo,
    nativeCurrency: { name: "Polygon Matic", symbol: "MATIC", decimals: 18 },
    stableBridgeContractAddress: "0x0DFcd028b5AD0E789AcB8d1C5bE1218FA59bC62A",
  },
  [SupportedChainId.POLYGON_MUMBAI]: {
    chainId: 80001,
    infoLink: "https://info.uniswap.org/#/polygon/",
    label: "Polygon Mumbai",
    logoUrl: polygonMaticLogo,
    nativeCurrency: {
      name: "Polygon Mumbai Matic",
      symbol: "mMATIC",
      decimals: 18,
    },
    stableBridgeContractAddress: "",
  },
};

export function getChainInfo(chainId: number | null | undefined): any {
  if (chainId) {
    return CHAIN_INFO[chainId] ?? undefined;
  } else {
    return undefined;
  }
}

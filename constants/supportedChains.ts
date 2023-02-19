export enum SupportedChainId {
  ARBITRUM_ONE = 42161,
  GOERLI = 5,

  FANTOM = 250,

  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
}

export const testnetChainIds = [];
// export const testnetChainIds = [80001, 5];
// export const mainnetChainIds = [42161, 250, 137];
export const mainnetChainIds = [250];

export const supportedChains: ChainType[] = [
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
    nativeCurrency: { name: "Fantom", symbol: "FTM", decimals: 18 },
  },
  // {
  //   chainId: 5,
  //   label: "Goerli",
  //   logoUrl: "/tokens/ethereum-logo.png",
  //   nativeCurrency: { name: "Goerli Ether", symbol: "gETH", decimals: 18 },
  // },
  // {
  //   chainId: 80001,
  //   label: "Polygon Mumbai",
  //   logoUrl: "/tokens/polygon-logo.png",
  //   nativeCurrency: {
  //     name: "Polygon Mumbai Matic",
  //     symbol: "mMATIC",
  //     decimals: 18,
  //   },
  // },
];

export interface ChainType {
  chainId: number;
  label: string;
  logoUrl: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

export function isSupportedChain(
  chainId: number | null | undefined
): chainId is SupportedChainId {
  return !!chainId && !!SupportedChainId[chainId];
}

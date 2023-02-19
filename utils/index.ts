import { Contract, ethers, Signer } from "ethers";
import { sbrlAbi, stakeContractAbi } from "./abi";
import {
  ChainType,
  SupportedChainId,
  supportedChains,
} from "../constants/supportedChains";
import { FALLBACK_URLS, RPC_URLS } from "../constants/networks";
import { InjectedConnector } from "@web3-react/injected-connector";
import { getChainInfo } from "../constants/chainInfo";

const STAKE_CONTRACT_ADDRESS = "0xb5eE0C18eEB5745aa84a593b247bb627f147fc0a";
declare global {
  interface Window {
    ethereum?: any;
  }
}

export const InjectedConnect = new InjectedConnector({
  supportedChainIds: [1, 3, 137, 80001],
});

export const formatAddress = (str: string) => {
  const initialDigits = str.substring(0, 6);
  const middleDigits = "....";
  const lastDigits = str.substring(str.length - 5, str.length - 1);
  return initialDigits + middleDigits + lastDigits;
};

export const switchNetwork = async (chainId: number) => {
  if (chainId) {
    const chainIdInHex = ethers.utils.hexValue(chainId);

    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainIdInHex }],
      });
    } catch (e: any) {
      // This error code indicates the chain was not added to the wallet yet
      if (e.code === 4902) {
        try {
          const chainInfo = supportedChains.find((chain: ChainType) => {
            return chain.chainId === chainId;
          });

          if (chainInfo) {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: chainIdInHex,
                  chainName: chainInfo.nativeCurrency.name,
                  rpcUrls: [getRpcUrl(chainId)],
                },
              ],
            });
          } else {
            return { error: "Not supported chain" };
          }
        } catch (error) {
          return { error };
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

export const stakeAmount = async (amount: number) => {
  try {
    const ethereum = (window as any).ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    const walletAddress = accounts[0];

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner(walletAddress);

    const contract = new Contract(
      STAKE_CONTRACT_ADDRESS,
      stakeContractAbi,
      signer
    );

    approveSbrl(250, amount);

    const result = await contract.stake(amount * 10e18);

    return result;
  } catch (e) {
    return e;
  }
};

export const approveSbrl = async (
  chainId: number | undefined,
  amount: number
) => {
  if (chainId) {
    const ethereum = (window as any).ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
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

export const getSBRLAmount = async (chainId: number | undefined) => {
  if (chainId) {
    const ethereum = (window as any).ethereum;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    try {
      const walletAddress = accounts[0];
      const address = getChainInfo(chainId)?.stableBridgeContractAddress;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner(walletAddress);
      const contract = new Contract(address, sbrlAbi, signer);

      const balance = await contract.balanceOf(walletAddress);
      const balanceFormatted = ethers.utils.formatUnits(balance, 6);

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

export const getRpcUrl = (chainId: SupportedChainId): string => {
  switch (chainId) {
    case SupportedChainId.ARBITRUM_ONE:
    case SupportedChainId.FANTOM:
    case SupportedChainId.GOERLI:
    case SupportedChainId.POLYGON:
    case SupportedChainId.POLYGON_MUMBAI:
      return RPC_URLS[chainId][0];
    default:
      return FALLBACK_URLS[chainId][0];
  }
};

export const getEstimatedGasFee = async (
  chainId: number,
  tokenId: number,
  amount: number
) => {
  const myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/estimated-gas`,
    {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        networkId: chainId,
        token: tokenId,
        amount: amount,
      }),
    }
  );
  const data = await res.json();

  return data;
};
// export const doBridge = async (
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

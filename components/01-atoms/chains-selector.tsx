import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { setBalance } from "../../store/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { getChainInfo } from "../../constants/chainInfo";
import { supportedChains } from "../../constants/supportedChains";
import { setChain as setRampChain } from "../../store/rampInfoSlice";
import { setChain as setVaultChain } from "../../store/vaultInfoSlice";
import { getSBRLAmount, InjectedConnect, switchNetwork } from "../../utils";

interface ChainsSelector {
  onSelection?: () => void;
  parent: ChainSelectorOptions;
}

export enum ChainSelectorOptions {
  VAULT = "vault",
  ONRAMP = "onramp",
}

export const ChainsSelector = ({ onSelection, parent }: ChainsSelector) => {
  const { activate } = useWeb3React();
  const account = useSelector((state: any) => state.account.address);

  const [chainsList, setChainsList] = useState<any[]>([]);
  const dispatch = useDispatch();

  const getChainsList = () => {
    const list: any[] = [];

    supportedChains.forEach((chain: any) => {
      list.push(getChainInfo(chain.chainId));
    });

    if (list.length) setChainsList([...list]);
  };

  const handleChainSelection = async (chainId: number) => {
    if (!account) {
      try {
        await activate(InjectedConnect);
      } catch (e) {
        return e;
      }
    }

    try {
      switchNetwork(chainId);

      if (parent === ChainSelectorOptions.ONRAMP) {
        dispatch(setRampChain(chainId));
      } else if (parent === ChainSelectorOptions.VAULT) {
        dispatch(setVaultChain(chainId));
      }
      const balance = await getSBRLAmount(chainId);
      dispatch(setBalance(balance));

      if (onSelection) onSelection();
    } catch (e) {
      if (parent === ChainSelectorOptions.ONRAMP) {
        dispatch(setRampChain(""));
      } else if (parent === ChainSelectorOptions.VAULT) {
        dispatch(setVaultChain(""));
      }
      return e;
    }
  };

  useEffect(() => {
    getChainsList();
  }, []);

  return (
    <div className="absolute top-12 right-0 bg-white z-50 flex flex-col w-full border-[1px] rounded-b-xl border-t-0 py-4">
      {chainsList.length &&
        chainsList?.map((chain: any, index: number) => {
          return (
            <button
              key={index}
              value={chain.chainId}
              onClick={() => handleChainSelection(chain.chainId)}
              className="py-4 px-10 inline-flex items-center justify-between hover:bg-cream transition"
            >
              <img
                src={chain.logoUrl.src}
                alt={`${chain.label} icon`}
                className="w-8 mr-4"
              />
              {chain.label}
            </button>
          );
        })}
    </div>
  );
};

export default ChainsSelector;

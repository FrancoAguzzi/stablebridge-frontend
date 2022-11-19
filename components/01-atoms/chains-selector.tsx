import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChainInfo } from "../../constants/chainInfo";
import { supportedChains } from "../../constants/supportedChains";
import { setChain } from "../../store/rampInfoSlice";

interface ChainsSelector {
  onSelection?: () => void;
}

export const ChainsSelector = ({ onSelection }: ChainsSelector) => {
  const [chainsList, setChainsList] = useState<any[]>([]);
  const dispatch = useDispatch();

  const getChainsList = () => {
    const list: any[] = [];

    supportedChains.forEach((chain: any) => {
      list.push(getChainInfo(chain.chainId));
    });

    if (list.length) setChainsList([...list]);
  };

  const handleChainSelection = (chainId: number) => {
    dispatch(setChain(chainId));
    if (onSelection) onSelection();
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

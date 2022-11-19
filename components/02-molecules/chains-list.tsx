import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  supportedChains,
  ChainType,
  testnetChainIds,
  mainnetChainIds,
} from "../../constants/supportedChains";
import { setDestinyChain } from "../../store/destinyTransactionInfo";
import { setOriginChain } from "../../store/originTransactionInfo";
import { setShowOnly } from "../../store/testnetsSlice";
import { switchNetwork } from "../../utils";

interface ChainsListProps {
  isOrigin: boolean;
}

export const ChainsList = ({ isOrigin = false }: ChainsListProps) => {
  const originChain = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const destinyChain = useSelector(
    (state: any) => state.destinyTransactionInfo.chain
  );
  const showOnlyTestnets = useSelector((state: any) => state.testnets.showOnly);
  const [chainsList, setChainsList] = useState<any[]>([]);
  const dispatch = useDispatch();

  const handleChainSelection = async (chainId: number) => {
    if (isOrigin) {
      if (originChain !== chainId) {
        switchNetwork(chainId);
        dispatch(setOriginChain(chainId));
      }
    } else {
      if (destinyChain !== chainId) {
        dispatch(setDestinyChain(chainId));
      }
    }
  };

  const handleTestnetsToggle = (showOnlyTestnets: boolean) => {
    dispatch(setShowOnly(showOnlyTestnets));
  };

  const isSelectedChain = (chainId: number) => {
    if (isOrigin) {
      return originChain === chainId;
    } else {
      return destinyChain === chainId;
    }
  };

  const updateShownChains = () => {
    let list;

    if (showOnlyTestnets) {
      list = supportedChains.filter((chain: any) =>
        testnetChainIds.includes(chain.chainId)
      );
    } else {
      list = supportedChains.filter((chain: any) =>
        mainnetChainIds.includes(chain.chainId)
      );
    }
    setChainsList(list);
  };

  useEffect(() => {
    updateShownChains();
  }, []);

  useEffect(() => {
    updateShownChains();
  }, [showOnlyTestnets]);

  return (
    <>
      <div className="inline-flex ml-4">
        <input
          checked={showOnlyTestnets}
          onChange={(e) => handleTestnetsToggle(e.target.checked)}
          type="checkbox"
          name=""
          id="toggleShowOnlyTestnets"
          className="mr-4"
        />
        <label htmlFor="toggleShowOnlyTestnets">Show only testnets</label>
      </div>
      <ul className="mt-3">
        {chainsList.map((chain: ChainType) => {
          return (
            <li key={chain.chainId} className="w-full mb-2">
              <button
                onClick={() => handleChainSelection(chain.chainId)}
                className={`w-full inline-flex justify-start items-center  p-4 border-[1px] rounded-2xl hover:bg-gray-1 transition ${
                  isSelectedChain(chain.chainId) &&
                  "bg-slate-100 hover:bg-slate-100"
                }`}
              >
                <img
                  src={chain.logoUrl}
                  alt={`${chain.label} icon`}
                  className="w-10 mr-4"
                />
                <p className="text-xl font-medium p-0 m-0">{chain.label}</p>
                {isSelectedChain(chain.chainId) && (
                  <img
                    src="/icons/checked.png"
                    alt="Checked icon"
                    className="ml-auto"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ChainsList;

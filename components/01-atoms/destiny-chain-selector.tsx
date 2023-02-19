import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChainType, supportedChains } from "../../constants/supportedChains";
import { setShow, setStep } from "../../store/panelSelector";

export const DestinyChainSelector = () => {
  const selectedDestinyChainId = useSelector(
    (state: any) => state.destinyTransactionInfo.chain
  );
  const dispatch = useDispatch();
  const [selectedDestinyChainInfo, setSelectedDestinyChainInfo] = useState<any>(
    {
      chainId: null,
      label: "",
      logoUrl: "",
      nativeCurrency: {
        name: "",
        symbol: "",
        decimals: null,
      },
    }
  );

  const handleClick = () => {
    dispatch(setShow(true));
    dispatch(setStep(4));
  };

  const getSelectedChainInfo = () => {
    const chainInfo = supportedChains.find(
      (chain: ChainType) => chain.chainId === selectedDestinyChainId
    );

    setSelectedDestinyChainInfo(chainInfo);
  };

  useEffect(() => {
    getSelectedChainInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDestinyChainId]);

  useEffect(() => {
    getSelectedChainInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-2xl p-4 shadow-custom mr-2 flex-1 text-left h-20"
    >
      <p className="text-xs opacity-50">Chain</p>
      <div className="inline-flex mt-2 h-6">
        {selectedDestinyChainInfo?.chainId ? (
          <>
            <img
              src={selectedDestinyChainInfo.logoUrl}
              alt={`${selectedDestinyChainInfo.label} icon`}
              className="w-6"
            />
            <p className="font-medium text-base ml-2">
              {selectedDestinyChainInfo.label}
            </p>
          </>
        ) : (
          <span className="font-semibold text-gray-300">-</span>
        )}
      </div>
    </button>
  );
};

export default DestinyChainSelector;

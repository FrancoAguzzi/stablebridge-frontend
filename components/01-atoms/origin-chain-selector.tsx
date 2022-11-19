import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChainType, supportedChains } from "../../constants/supportedChains";
import { setShow, setStep } from "../../store/panelSelector";

export const OriginChainSelector = () => {
  const selectedOriginChainId = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const dispatch = useDispatch();
  const [selectedOriginChainInfo, setSelectedOriginChainInfo] = useState<any>({
    chainId: null,
    label: "",
    logoUrl: "",
    nativeCurrency: {
      name: "",
      symbol: "",
      decimals: null,
    },
  });

  const handleClick = () => {
    dispatch(setShow(true));
    dispatch(setStep(2));
  };

  const getSelectedChainInfo = () => {
    const chainInfo = supportedChains.find(
      (chain: ChainType) => chain.chainId === selectedOriginChainId
    );

    setSelectedOriginChainInfo(chainInfo);
  };

  useEffect(() => {
    getSelectedChainInfo();
  }, [selectedOriginChainId]);

  useEffect(() => {
    getSelectedChainInfo();
  }, []);

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-2xl p-4 shadow-custom mr-2 flex-1 text-left h-20"
    >
      <p className="text-xs opacity-50">Chain</p>
      <div className="inline-flex mt-2 h-6">
        {selectedOriginChainInfo?.chainId ? (
          <>
            <img
              src={selectedOriginChainInfo.logoUrl}
              alt={`${selectedOriginChainInfo.label} icon`}
              className="w-6"
            />
            <p className="font-medium text-base ml-2">
              {selectedOriginChainInfo.label}
            </p>
          </>
        ) : (
          <span className="font-semibold text-gray-300">-</span>
        )}
      </div>
    </button>
  );
};

export default OriginChainSelector;

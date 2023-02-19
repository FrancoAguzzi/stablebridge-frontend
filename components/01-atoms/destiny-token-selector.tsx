import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supportedTokens } from "../../constants/supportedTokens";
import { setShow, setStep } from "../../store/panelSelector";
import { TokenType } from "../../constants/supportedTokens";

export const DestinyTokenSelector = () => {
  const selectedDestinyTokenId = useSelector(
    (state: any) => state.destinyTransactionInfo.token
  );
  const dispatch = useDispatch();
  const [selectedDestinyTokenInfo, setSelectedDestinyTokenInfo] = useState<any>(
    {
      id: null,
      label: "",
      logoUrl: "",
    }
  );

  const handleClick = () => {
    dispatch(setShow(true));
    dispatch(setStep(3));
  };

  const getSelectedTokenInfo = () => {
    const tokenInfo = supportedTokens.find(
      (token: TokenType) => token.id === selectedDestinyTokenId
    );

    setSelectedDestinyTokenInfo(tokenInfo);
  };

  useEffect(() => {
    getSelectedTokenInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDestinyTokenId]);

  useEffect(() => {
    getSelectedTokenInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-2xl p-4 pb-2 shadow-custom mr-2 flex-1 text-left h-20"
    >
      <p className="text-xs opacity-50">Token</p>
      <div className="inline-flex mt-2 h-6">
        {selectedDestinyTokenInfo?.id ? (
          <>
            <img
              src={selectedDestinyTokenInfo.logoUrl}
              alt={`${selectedDestinyTokenInfo.label} icon`}
              className="w-6"
            />
            <p className="font-medium text-base ml-2">
              {selectedDestinyTokenInfo.label}
            </p>
          </>
        ) : (
          <span className="font-semibold text-gray-300">-</span>
        )}
      </div>
    </button>
  );
};

export default DestinyTokenSelector;

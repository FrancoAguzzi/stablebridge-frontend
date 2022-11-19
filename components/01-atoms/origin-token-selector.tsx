import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supportedTokens } from "../../constants/supportedTokens";
import { setShow, setStep } from "../../store/panelSelector";
import { TokenType } from "../../constants/supportedTokens";

export const OriginTokenSelector = () => {
  const selectedOriginTokenId = useSelector(
    (state: any) => state.originTransactionInfo.token
  );
  const dispatch = useDispatch();
  const [selectedOriginTokenInfo, setSelectedOriginTokenInfo] = useState<any>({
    id: null,
    label: "",
    logoUrl: "",
  });

  const handleClick = () => {
    dispatch(setShow(true));
    dispatch(setStep(1));
  };

  const getSelectedTokenInfo = () => {
    const tokenInfo = supportedTokens.find(
      (token: TokenType) => token.id === selectedOriginTokenId
    );

    setSelectedOriginTokenInfo(tokenInfo);
  };

  useEffect(() => {
    getSelectedTokenInfo();
  }, [selectedOriginTokenId]);

  useEffect(() => {
    getSelectedTokenInfo();
  }, []);

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-2xl p-4 pb-2 shadow-custom mr-2 flex-1 text-left h-20"
    >
      <p className="text-xs opacity-50">Token</p>
      <div className="inline-flex mt-2 h-6">
        {selectedOriginTokenInfo?.id ? (
          <>
            <img
              src={selectedOriginTokenInfo.logoUrl}
              alt={`${selectedOriginTokenInfo.label} icon`}
              className="w-6"
            />
            <p className="font-medium text-base ml-2">
              {selectedOriginTokenInfo.label}
            </p>
          </>
        ) : (
          <span className="font-semibold text-gray-300">-</span>
        )}
      </div>
    </button>
  );
};

export default OriginTokenSelector;

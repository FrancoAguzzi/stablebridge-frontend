import { useDispatch, useSelector } from "react-redux";
import { supportedTokens, TokenType } from "../../constants/supportedTokens";
import { setDestinyToken } from "../../store/destinyTransactionInfo";
import { setOriginToken } from "../../store/originTransactionInfo";

interface TokensListProps {
  isOrigin: boolean;
}

export const TokensList = ({ isOrigin = false }: TokensListProps) => {
  const originToken = useSelector(
    (state: any) => state.originTransactionInfo.token
  );
  const destinyToken = useSelector(
    (state: any) => state.destinyTransactionInfo.token
  );
  const dispatch = useDispatch();

  const handleTokenSelection = (tokenId: number) => {
    if (isOrigin) {
      if (originToken !== tokenId) dispatch(setOriginToken(tokenId));
    } else {
      if (destinyToken !== tokenId) dispatch(setDestinyToken(tokenId));
    }
  };

  const isSelectedToken = (tokenId: number) => {
    if (isOrigin) {
      return originToken === tokenId;
    } else {
      return destinyToken === tokenId;
    }
  };

  return (
    <ul className="mt-4">
      {supportedTokens.map((token: TokenType) => {
        return (
          <li key={token.id} className="w-full mb-2">
            <button
              onClick={() => handleTokenSelection(token.id)}
              className={`w-full inline-flex justify-start items-center  p-4 border-[1px] rounded-2xl hover:bg-gray-1 transition ${
                isSelectedToken(token.id) && "bg-slate-100 hover:bg-slate-100"
              }`}
            >
              <img
                src={token.logoUrl}
                alt={`${token.label} icon`}
                className="w-10 mr-4"
              />
              <p className="text-xl font-medium p-0 m-0">{token.label}</p>
              {isSelectedToken(token.id) && (
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
  );
};

export default TokensList;

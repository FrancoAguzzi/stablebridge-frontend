import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOriginChain } from "../../store/originTransactionInfo";
import { InjectedConnect, formatAddress, switchNetwork } from "../../utils";

export const ConnectWalletCta = () => {
  const { account, chainId } = useWeb3React();
  const { activate, deactivate } = useWeb3React();
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const originChainId = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (account) {
      setShowAccountDropdown(!showAccountDropdown);
    } else {
      activate(InjectedConnect);
    }
  };

  const handleLogout = () => {
    deactivate();
    dispatch(setOriginChain(null));
    setShowAccountDropdown(false);
  };

  useEffect(() => {
    if (chainId !== originChainId && chainId) {
      switchNetwork(chainId).then((res) => {
        const newChain = res?.error ? null : chainId;

        dispatch(setOriginChain(newChain));
      });
    }
  }, [chainId]);

  return (
    <>
      <button
        onClick={handleLogin}
        className={`fixed right-8 top-6 bg-black text-white p-4 rounded-full transition ${
          account
            ? "bg-gray-1 border-[1px] text-slate-700"
            : "hover:animate-pulse"
        }`}
      >
        {account ? formatAddress(account) : "Connect wallet"}
      </button>
      {showAccountDropdown && (
        <div className="p-4 shadow-custom fixed right-8 top-20 rounded-3xl">
          <button onClick={handleLogout}>Sign out</button>
        </div>
      )}
    </>
  );
};

export default ConnectWalletCta;

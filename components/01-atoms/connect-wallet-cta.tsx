import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddress, setBalance } from "../../store/accountSlice";
import { setOriginChain } from "../../store/originTransactionInfo";
import {
  InjectedConnect,
  formatAddress,
  switchNetwork,
  getSBRLAmount,
} from "../../utils";
import { WalletIcon } from "@heroicons/react/24/solid";

const DEFAULT_NETWORK_ID = 250;

export const ConnectWalletCta = () => {
  const { chainId } = useWeb3React();
  const { activate, deactivate } = useWeb3React();
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const balance = useSelector((state: any) => state.account.balance);
  const account = useSelector((state: any) => state.account.address);
  const originChainId = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const dispatch = useDispatch();

  // const fetchAvatar = () => {
  //   fetch(`https://metadata.ens.domains/mainnet/avatar/${account}`).then(
  //     (res) => console.log(res)
  //   );
  // };

  const handleLogin = () => {
    if (account) {
      setShowAccountDropdown(!showAccountDropdown);
    } else {
      activate(InjectedConnect).then(() => {
        window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then(async (res: any) => {
            dispatch(setAddress(res[0]));
            getSBRLAmount(DEFAULT_NETWORK_ID).then((res) => {
              dispatch(setBalance(res));
            });

            // fetchAvatar();
          });
      });
    }
  };

  const handleLogout = () => {
    deactivate();
    dispatch(setOriginChain(null));
    dispatch(setAddress(""));
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
    <div className="w-full flex justify-center fixed left-0 bottom-0 bg-gray-900">
      {!account ? (
        <button
          onClick={handleLogin}
          className={`bg-white inline-flex text-black my-4 p-3 px-4 rounded-full transition ${
            account ? "bg-gray-1 border-[1px]" : "hover:animate-pulse"
          }`}
        >
          <WalletIcon className="w-6 mr-2" />
          <p>Connect wallet</p>
        </button>
      ) : (
        <div className="border-white rounded-full border mt-4 mb-3.5">
          <p className="text-white py-3 px-4">{formatAddress(account)}</p>
        </div>
      )}
      {showAccountDropdown && (
        <div className="p-4 shadow-custom fixed right-8 top-20 rounded-3xl">
          <button onClick={handleLogout}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default ConnectWalletCta;

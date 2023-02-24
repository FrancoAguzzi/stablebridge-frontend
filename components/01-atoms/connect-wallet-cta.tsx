import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOriginChain } from "../../store/originTransactionInfo";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWalletCta = () => {
  const { chainId } = useWeb3React();
  const originChainId = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOriginChain(chainId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);

  return (
    <div className="w-full flex justify-center fixed left-0 bottom-0 bg-gray-900">
      <div className="my-4 p-3 px-4 ">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            const connected = mounted && account && chain;

            return (
              <div
                {...(!mounted && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="bg-white p-6 py-3 rounded-full font-bold hover:bg-gray-50 transition"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button onClick={openChainModal} type="button">
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div>
                      <button
                        onClick={openAccountModal}
                        type="button"
                        className="gap-3 flex bg-white p-6 py-3 rounded-full flex-wrap justify-center"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  );
};

export default ConnectWalletCta;

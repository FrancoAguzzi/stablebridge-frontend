import Head from "next/head";
import { NextPage } from "next";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ChainSelectorOptions,
  ChainsSelector,
  Skeleton,
  TheHeader,
} from "../components/01-atoms";
import { setAmount } from "../store/vaultInfoSlice";
import { getChainInfo } from "../constants/chainInfo";
import { setAddress } from "../store/accountSlice";
import { useAccount } from "wagmi";

export const OnRampPage: NextPage = () => {
  const vaultAmount = useSelector((state: any) => state.vaultInfo.amount);
  const vaultChain = useSelector((state: any) => state.vaultInfo.chain);
  const vaultToken = useSelector((state: any) => state.vaultInfo.token);
  const balance = useSelector((state: any) => state.account.balance);

  const router = useRouter();
  const dispatch = useDispatch();

  const { address } = useAccount();
  const [networkGas, setNetworkGas] = useState(0);
  const [stakedAmount, setStakedAmount] = useState();
  const [processingFee, setProcessingFee] = useState(0);
  const [doStakeAction, setDoStakeAction] = useState(true);
  const [showChainSelector, setShowChainSelector] = useState(false);
  const [isLoadingEstimates, setIsLoadingEstimates] = useState(false);

  useEffect(() => {
    dispatch(setAddress(address));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    // VAULT API: integration needed
    // fetch staked amount and setStakedAmount()
  }, []);

  const handleSubmit = () => {
    if (!address) {
      toast.error("Connect your wallet first");
      return;
    }

    if (!vaultChain) {
      toast.error("Please fill in all fields to submit");
      return;
    }

    if (doStakeAction) {
      validateStake();
    } else {
      validateUnstake();
    }
  };

  const validateStake = async () => {
    // if (!!vaultAmount && vaultChain && vaultToken) {
    // VAULT API: integration needed
    // Stake vaultAmount
    // stakeAmount(vaultAmount);
    router.push({ pathname: "/" });
    toast.success(`You've staked ${vaultAmount} SBRLs`);
    // }
  };

  const validateUnstake = async () => {
    // if (!!vaultAmount && vaultChain && vaultToken) {
    // VAULT API: integration needed
    // Unstake vaultAmount
    router.push({ pathname: "/" });
    toast.success(`You've unstaked ${vaultAmount} SBRLs`);
    // }
  };

  const setMaxAmount = () => {
    if (doStakeAction) {
      dispatch(setAmount(balance));
    } else {
      dispatch(setAmount(stakedAmount));
    }
  };

  return (
    <div className="max-w-md m-auto pb-32 min-h-[800px]">
      <Head>
        <title>StableBridge - Bridge tokens between blockchains</title>
        <meta name="description" content="Bridge tokens between blockchains" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <TheHeader />

      <main className="relative bg-white px-4 py-6 rounded-[40px] shadow-custom">
        <div className="w-full inline-flex text-center rounded-3xl py-1.5 px-2">
          <p className="flex-1 text-left rounded-3xl text-gray-800 text-lg py-1.5 px-2 select-none">
            Invest your SBRLs and earn:
          </p>
        </div>
        <div className="w-full inline-flex justify-center items-end bg-cream border-[1px] rounded-3xl p-6 py-4 mt-4 mb-4 space-x-2">
          <p className="mb-2 text-4xl font-medium text-gray-800">13,65%</p>
          <p className="text-xl font-medium pb-2">APY</p>
        </div>

        <div className="w-full grid grid-cols-2">
          <button
            onClick={() => setDoStakeAction(true)}
            className={`${
              doStakeAction
                ? "bg-gray-800 border-white text-white"
                : "bg-white border-gray-800 text-gray-800"
            } border flex grow justify-center rounded-2xl py-3 mr-2 hover:animate-pulse`}
          >
            Stake
          </button>
          <button
            onClick={() => setDoStakeAction(false)}
            className={`${
              !doStakeAction
                ? "bg-gray-800 border-white text-white"
                : "bg-white border-gray-800 text-gray-800"
            } border flex grow justify-center rounded-2xl py-3 mr-2 hover:animate-pulse`}
          >
            Unstake
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowChainSelector(!showChainSelector)}
            className="w-full bg-white border-[1px] rounded-3xl p-6 mt-4 mb-4 flex justify-between text-sm hover:bg-cream transition"
          >
            <p className="text-gray-400">Network</p>
            <p>
              {getChainInfo(vaultChain)?.label
                ? getChainInfo(vaultChain)?.label
                : "Select destiny network"}
            </p>
          </button>

          {showChainSelector && (
            <ChainsSelector
              parent={ChainSelectorOptions.VAULT}
              onSelection={() => setShowChainSelector(!showChainSelector)}
            />
          )}
        </div>

        <div className="w-full flex flex-col relative border-[1px] rounded-3xl px-6 pb-4 pt-6">
          <label htmlFor="fromAmount" className="mb-4 text-sm font-medium">
            How Much SBRL to stake on Vault?
          </label>
          <div className="w-full grid grid-cols-12 grid-rows-1">
            <input
              type="number"
              name="fromAmount"
              id="fromAmount"
              placeholder="0.00"
              value={vaultAmount}
              className="col-start-1 col-end-8 font-medium text-2xl bg-transparent focus:outline-none"
              onChange={(e) => dispatch(setAmount(e.target.value))}
            />
            <button
              onClick={setMaxAmount}
              className="mr-2 col-start-8 col-end-11 md:col-start-9 text-xs text-center text-gray-400 rounded-lg px-2 py-1 border border-gray-400 hover:border-gray-800 hover:text-gray-800 transition"
            >
              MAX
            </button>
            <p className="col-start-11 col-end-12 font-medium text-2xl">
              &nbsp;SBRL
            </p>
          </div>
        </div>
        {Number(vaultAmount) ? (
          <div className="rounded-3xl border-[1px] bg-gray-1 p-6 mt-4">
            <div className="w-full inline-flex justify-between border-b-[1px]">
              <p className="text-sm font-medium mb-4">
                You are {doStakeAction ? "staking" : "unstaking"}
              </p>
              <div className="inline-flex items-center mb-6">
                {isLoadingEstimates ? (
                  <Skeleton width={40} height={8} />
                ) : (
                  <p className="font-medium text-2xl">
                    {vaultAmount - networkGas - processingFee} {vaultToken}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap justify-between mb-2 mt-6">
                <p className="text-sm text-slate-400">
                  Your money will earn 100% of CDI
                </p>
                <a
                  className="text-sm text-blue underline mb-4"
                  href="https://warren.com.br/magazine/cdi/"
                >
                  Learn more
                </a>
              </div>
              {!!processingFee && (
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-slate-400">Processing fee</p>
                  <p className="text-sm text-slate-400">R$ TODO</p>
                </div>
              )}
              {!!networkGas && (
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-slate-400">Network Gas</p>
                  <p className="text-sm text-slate-400">R$ TODO</p>
                </div>
              )}
              <button
                onClick={handleSubmit}
                className="w-full border-2 border-gray-800 bg-white rounded-2xl text-gray-800 p-4 mt-8 hover:animate-pulse hover:bg-gray-800 hover:text-white hover:border-white transition"
              >
                {doStakeAction ? "Stake" : "Unstake"}
              </button>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default OnRampPage;

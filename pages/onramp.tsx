import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ChainsSelector, Skeleton, TheHeader } from "../components/01-atoms";
import { getChainInfo } from "../constants/chainInfo";
import { setAmount, setPixData } from "../store/rampInfoSlice";
import { getEstimatedGasFee } from "../utils";

import { useRouter } from "next/router";

const TIMEOUT_SECONDS = 10;

export const OnRampPage: NextPage = () => {
  const originChain = useSelector(
    (state: any) => state.originTransactionInfo.chain
  );
  const amountValue = useSelector((state: any) => state.rampInfo.amount);
  const rampChain = useSelector((state: any) => state.rampInfo.chain);
  const rampToken = useSelector((state: any) => state.rampInfo.token);
  const dispatch = useDispatch();

  const [processingFee, setProcessingFee] = useState(0);
  const [networkGas, setNetworkGas] = useState(0);
  const [showChainSelector, setShowChainSelector] = useState(false);
  const [hideTransactionDetails, setHideTransactionDetails] = useState(false);
  const [seconds, setSeconds] = useState<number | null>(null);
  const [timerWasntSet, setTimerWasntSet] = useState(true);
  const [isLoadingEstimates, setIsLoadingEstimates] = useState(false);

  const router = useRouter();

  const getTokenPrice = () => {
    if (rampToken === "SBRL") return "1";
  };

  const validateOnRamp = async () => {
    if (!!amountValue && rampChain && rampToken) {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/pix`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          networkId: rampChain,
          token: rampToken,
          amount: amountValue,
        }),
      });
      const data = await res.json();

      if (data["qr_code_base64"]) {
        router.push(`/pix/${data["qr_code_base64"]}`);

        dispatch(setPixData(data));
      }
    }
  };

  useEffect(() => {
    if (amountValue && timerWasntSet) {
      setTimerWasntSet(false);
      setSeconds(TIMEOUT_SECONDS);
    }
  }, [amountValue, timerWasntSet]);

  useEffect(() => {
    if (seconds === 0) {
      setSeconds(null);
      getEstimatedGasFee(rampChain, rampToken, amountValue)
        .then(() => {
          setIsLoadingEstimates(true);
        })
        .finally(() => {
          setIsLoadingEstimates(false);
          setSeconds(10);
        });
    }

    if (!seconds) return;

    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div className="max-w-md m-auto pb-10 min-h-[800px]">
      <Head>
        <title>StableBridge - Bridge tokens between blockchains</title>
        <meta name="description" content="Bridge tokens between blockchains" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <TheHeader />

      <main className="relative bg-white px-4 py-6 rounded-[40px] shadow-custom">
        <div className="w-full inline-flex text-center bg-cream rounded-3xl py-1.5 px-2 border-[1px]">
          <p className="flex-1 bg-blue rounded-3xl text-white text-base py-1.5 select-none">
            BUY
          </p>
          <p className="flex-1 py-1.5 select-none">SELL</p>
        </div>
        <div className="bg-cream border-[1px] rounded-3xl p-6 py-4 mt-4 mb-4">
          <p className="mb-2 text-sm font-medium">Token</p>
          <div className="inline-flex items-center">
            <img
              src="/tokens/SBRL.svg"
              alt="Stablebridge token icon"
              className="mr-2 w-6"
            />
            <p className="text-xl font-medium">{rampToken}</p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowChainSelector(!showChainSelector)}
            className="w-full bg-white border-[1px] rounded-3xl p-6 mt-4 mb-4 flex justify-between text-sm hover:bg-cream transition"
          >
            <p className="text-gray-400">Network</p>
            <p>
              {getChainInfo(rampChain)?.label
                ? getChainInfo(rampChain)?.label
                : "Select destiny network"}
            </p>
          </button>

          {showChainSelector && (
            <ChainsSelector
              onSelection={() => setShowChainSelector(!showChainSelector)}
            />
          )}
        </div>

        <div className="w-full flex flex-col relative border-[1px] rounded-3xl px-6 pb-4 pt-6">
          <label htmlFor="fromAmount" className="mb-4 text-sm font-medium">
            How Much
          </label>
          <div className="inline-flex">
            {amountValue ? (
              <p className="font-medium text-2xl">R$&nbsp;</p>
            ) : (
              <></>
            )}
            <input
              type="number"
              name="fromAmount"
              id="fromAmount"
              placeholder="R$ 0.00"
              className="flex flex-1 font-medium text-2xl bg-transparent focus:outline-none"
              onChange={(e) => dispatch(setAmount(e.target.value))}
            />
          </div>
        </div>
        {amountValue && (
          <div className="rounded-3xl border-[1px] bg-gray-1 p-6 mt-4">
            <div className="border-b-[1px]">
              <p className="text-sm font-medium mb-4">
                You will receive approximately
              </p>
              <div className="inline-flex items-center mb-6">
                {isLoadingEstimates ? (
                  <Skeleton width={40} height={8} />
                ) : (
                  <p className="font-medium text-2xl">
                    {rampToken} {amountValue - networkGas - processingFee}
                  </p>
                )}
              </div>
            </div>
            {!hideTransactionDetails && (
              <div>
                <div className="flex justify-between mb-2 mt-6">
                  <p className="text-sm text-slate-400">{rampToken} Price</p>
                  <p className="text-sm text-slate-400">R$ {getTokenPrice()}</p>
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
                <div className="flex justify-between mb-2 mb-6">
                  <p className="text-sm text-black">Total</p>
                  <p className="text-sm text-black">R$ {amountValue}</p>
                </div>
              </div>
            )}
            <div className="flex justify-between border-t-[1px] pt-6">
              <p className="text-sm text-slate-400">Valid for {seconds}s</p>
              <button
                onClick={() =>
                  setHideTransactionDetails(!hideTransactionDetails)
                }
                className="text-blue text-sm"
              >
                {hideTransactionDetails ? "Show" : "Hide"} details{" "}
              </button>
            </div>
            <button
              onClick={validateOnRamp}
              className="w-full bg-black rounded-2xl text-white p-4 mt-8 hover:animate-pulse"
            >
              Submit order
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default OnRampPage;

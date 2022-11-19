import {
  TheHeader,
  OriginChainSelector,
  OriginTokenSelector,
  DestinyChainSelector,
  DestinyTokenSelector,
  BridgeTokensCta,
} from "../components/01-atoms";
import { Panel } from "../components/03-organisms";

import Head from "next/head";
import { NextPage } from "next";

import { useWeb3React } from "@web3-react/core";
import { InjectedConnect } from "../utils";

export const BridgePage: NextPage = () => {
  const { account, active } = useWeb3React();
  const { activate, deactivate } = useWeb3React();

  const getMaxSBRLAmount = () => {
    activate(InjectedConnect, () => alert("error"));
  };

  return (
    <div className="max-w-md m-auto pb-20">
      <Head>
        <title>StableBridge - Bridge tokens between blockchains</title>
        <meta name="description" content="Bridge tokens between blockchains" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <TheHeader />

      <main className="relative bg-white px-4 py-10 rounded-[40px] shadow-custom">
        {/* Origin */}
        <div className="flex-col z-40">
          <p className="font-semibold text-base mb-2 ml-6">Origin</p>
          <div className="bg-slate-50 border-[1px] border-gray-3 rounded-3xl p-2">
            <div className="w-full flex mb-2">
              <OriginTokenSelector />
              <OriginChainSelector />
            </div>
            <div className="inline-flex w-full">
              <input
                type="text"
                name="originVal"
                id="originVal"
                placeholder="0.00000"
                className="text-2xl font-medium flex-1 bg-transparent mx-4 md:mr-8 placeholder:opacity-40 focus:opacity-100 focus:outline-none"
              />
              <button
                onClick={getMaxSBRLAmount}
                className="text-sm py-2 px-2.5 border-[1px] rounded-3xl mt-4 mb-2 mr-2 -ml-4 hover:bg-gray-2 transition"
              >
                Max
              </button>
            </div>
          </div>
        </div>

        {/* Destiny */}
        <div className="flex-col mt-6 z-40">
          <p className="font-semibold text-base mb-2 ml-6">Destiny</p>
          <div className="bg-slate-50 border-[1px] border-gray-3 rounded-3xl p-2">
            <div className="w-full flex mb-2">
              <DestinyTokenSelector />
              <DestinyChainSelector />
            </div>
            <div className="inline-flex w-full">
              <input
                type="text"
                name="originVal"
                id="originVal"
                placeholder="0.00000"
                className="text-2xl font-medium flex-1 bg-transparent mx-4 md:mr-8 placeholder:opacity-40 focus:opacity-100 focus:outline-none"
              />
              <button
                onClick={getMaxSBRLAmount}
                className="text-sm py-2 px-2.5 border-[1px] rounded-3xl mt-4 mb-2 mr-2 -ml-4 hover:bg-gray-2 transition"
              >
                Max
              </button>
            </div>
          </div>
        </div>

        <section className="w-full mt-7 pt-7 border-t-[1px]">
          <BridgeTokensCta />
        </section>

        <Panel />
      </main>
    </div>
  );
};

export default BridgePage;

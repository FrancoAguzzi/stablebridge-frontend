import { TheHeader } from "../components/01-atoms";
import { RedirectToCta } from "../components/01-atoms";

import Head from "next/head";
import { NextPage } from "next";

export enum RedirectionCTAType {
  ONRAMP = "onramp",
  VAULT = "vault",
  TRANSPARENCY = "transparency",
}

export const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>StableBridge</title>
        <meta name="description" content="StableBridge" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="bg-white max-w-md m-auto">
        <TheHeader />

        <div className="w-full px-10 grid grid-cols-1 items-center mt-6 gap-4">
          <h1 className="text-3xl font-medium w-full">Secure,</h1>
          <h1 className="text-3xl font-medium w-full leading-3">Profitable,</h1>
          <h1 className="mb-2 text-3xl w-full font-medium">Transparent</h1>
          <p className="text-gray-800 text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem
            quasi sed minus magnam aut?
          </p>
          <div className="grid gap-4 grid-cols-2">
            <RedirectToCta
              destiny="/onramp"
              label="On-ramp"
              type={RedirectionCTAType.ONRAMP}
            />
            {/* <RedirectToCta destiny="/offramp" label="Sell Crypto" /> */}
            {/* <RedirectToCta destiny="/payment" label="Pay with Crypto" /> */}
            <RedirectToCta
              destiny="/vault"
              label="Vault"
              type={RedirectionCTAType.VAULT}
            />
            <div className="col-span-2">
              <RedirectToCta
                destiny="/transparency"
                label="Transparency & Analytics"
                type={RedirectionCTAType.TRANSPARENCY}
              />
            </div>
            {/* <RedirectToCta destiny="/bridge" label="Bridge" /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

import { TheHeader } from "../components/01-atoms";
import { RedirectToCta } from "../components/01-atoms";

import Head from "next/head";
import { NextPage } from "next";

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

        <div className="w-full flex flex-col items-center mt-20">
          <div className="mb-10">
            <RedirectToCta destiny="/bridge" label="Bridge" />
          </div>
          <RedirectToCta destiny="/onramp" label="On Ramp" />
        </div>
      </main>
    </div>
  );
};

export default Home;

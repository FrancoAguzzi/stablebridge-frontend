import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../store/store";

import { Toaster } from "react-hot-toast";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import ConnectWalletCta from "../components/01-atoms/connect-wallet-cta";

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <Component {...pageProps} />

        <ConnectWalletCta />
        <Toaster position="bottom-center" />
      </Provider>
    </Web3ReactProvider>
  );
}

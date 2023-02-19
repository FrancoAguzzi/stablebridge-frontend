import Head from "next/head";
import { NextPage } from "next";
import { useState } from "react";
import { TheHeader } from "../../../components/01-atoms/the-header";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

export const PixPage: NextPage = () => {
  const pixData = useSelector((state: any) => state.rampInfo.pixData);
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();

  const copyToClipboard = () => {
    // PIX API: integration needed
    // navigator.clipboard.writeText(pixData.qr_code);
    // setShowMessage(true);
    // setTimeout(() => {
    //   setShowMessage(false);
    // }, 2000);
  };

  const mintSBRLs = () => {
    // Contract ABI: integration needed

    router.push({ pathname: "/" });
    toast.success(`You've successfully buyed ${router.query.amount} SBRLs!`);
  };

  return (
    <div className="max-w-md m-auto pb-10 min-h-[800px]">
      <Head>
        <title>StableBridge - Buy tokens with Pix</title>
        <meta name="description" content="Buy tokens with Pix" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <TheHeader />

      <main className="relative bg-white px-4 py-6 rounded-[40px] shadow-custom">
        <h1 className="text-gray-800 text-center text-lg">
          It's in your hands now!
        </h1>
        <p className="text-sm text-gray-600 text-center mt-2 mx-8">
          Once you finish PIX payment, {router.query.amount} SBRLs will be added
          to your wallet.
        </p>
        <div className="bg-gray-800 m-6">
          <img src="/blockful-qrcode.png" alt="QR code" />
        </div>
        {/* <img src={`data:image/png;base64,${pixData.qr_code}`} alt="QR code" /> */}
        {/* <button title="Clique para copiar" onClick={copyToClipboard}>
          <p>{pixData.qr_code}</p>
          {showMessage && <span>Copied to clipboard!</span>}
        </button> */}
        <div className="mx-6">
          <button
            onClick={mintSBRLs}
            className="w-full border-2 border-gray-800 bg-white rounded-2xl text-gray-800 p-4 mt-8 hover:animate-pulse hover:bg-gray-800 hover:text-white hover:border-white transition"
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default PixPage;

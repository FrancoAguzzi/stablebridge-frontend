import Head from "next/head";
import { NextPage } from "next";
import { useState } from "react";
import { TheHeader } from "../../components/01-atoms";
import { useSelector } from "react-redux";

export const PixPage: NextPage = () => {
  const pixData = useSelector((state: any) => state.rampInfo.pixData);
  const [showMessage, setShowMessage] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixData.qr_code);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
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
        <img src={`data:image/png;base64,${pixData.qr_code}`} alt="QR code" />
        <button title="Clique para copiar" onClick={copyToClipboard}>
          <p>{pixData.qr_code}</p>
          {/* <img v-if="!showMessage" src="/copy.svg" alt="Copy icon" /> */}
          {showMessage && <span>Copied to clipboard!</span>}
        </button>
      </main>
    </div>
  );
};

export default PixPage;

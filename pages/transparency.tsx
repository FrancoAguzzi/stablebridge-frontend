import { NextPage } from "next";
import Head from "next/head";
import { TheHeader } from "../components/01-atoms";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { formatAddress } from "../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Proof of Assets",
    },
  },
};

const labels = [""];

export const data = {
  labels,
  datasets: [
    {
      label: "Cash",
      data: [10000000],
      backgroundColor: "rgba(84, 161, 213, 0.804)",
    },
    {
      label: "Staked in CDI",
      data: [40000000],
      backgroundColor: "rgba(54, 207, 131, 0.865)",
    },
    {
      label: "Total amount",
      data: [50000000],
      backgroundColor: "rgba(13, 207, 58, 0.876)",
    },
  ],
};

export const OnRampPage: NextPage = () => {
  return (
    <div className="max-w-md m-auto pb-32 min-h-[800px]">
      <Head>
        <title>StableBridge - Bridge tokens between blockchains</title>
        <meta name="description" content="Bridge tokens between blockchains" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <TheHeader />

      <main className="relative bg-white px-10 py-6 rounded-[40px] shadow-custom">
        <h1 className="font-medium text-2xl text-left">Transparency</h1>
        <h1 className="font-medium text-2xl text-left mb-8">& Analytics</h1>

        <div className="w-full text-center grid grid-cols-2 items-center justify-center border border-gray-800 rounded-xl bg-white">
          <h2 className="px-2 border-r border-gray-800">Proof of Reserve</h2>
          <p className="p-4 text-gray-800 font-bold">$50M</p>
          {/* POR API: integration needed */}
        </div>

        <div className="mt-12 mb-12">
          <Bar options={options} data={data} />
        </div>

        <div className="mt-8">
          <table>
            <thead className="bg-gray-100">
              <tr className="grid grid-cols-3 px-4 py-2 font-medium border border-gray-800 rounded-lg">
                <th>Name</th>
                <th>Address</th>
                <th>Network</th>
              </tr>
            </thead>
            <tbody>
              <tr className="grid grid-cols-3 text-center items-center justify-center px-4 py-2 border-gray-800 border-b border-r border-l rounded-r-lg rounded-b-lg rounded-l-lg">
                <td>Vault</td>
                <td className="truncate">
                  {formatAddress("0xFD9eE68000Dc92aa6c67F8f6EB5d9d1a24086fAd")}
                </td>
                <td className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="32px"
                    height="32px"
                  >
                    <path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z" />
                    <path fill="#5c64c7" d="M25,2l14,22l-14,8V2z" />
                    <path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z" />
                    <path
                      fill="#5c64c7"
                      d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"
                    />
                    <path fill="#2a3192" d="M25,18l14,6l-14,8V18z" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default OnRampPage;

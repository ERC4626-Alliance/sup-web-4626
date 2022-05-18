import React from "react";

const axios = require("axios");

const vaults = [
  {
    vault: "STG+USDC",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "13.7%",
    tvl: "$54M",
    sharpe: "3.1",
  },
  {
    vault: "DAI+USDC+USDT",
    protocol: "Curve",
    chain: "Binance Smart Chain",
    apy: "12.5%",
    tvl: "$541M",
    sharpe: "2.1",
  },
  {
    vault: "DAI+USDC+USDT+sUSD",
    protocol: "Curve",
    chain: "Binance Smart Chain",
    apy: "41.4%",
    tvl: "$435M",
    sharpe: "2.4",
  },
  {
    vault: "USDC+USDT+UST+FRAX",
    protocol: "Curve",
    chain: "Avalanche",
    apy: "63.2%",
    tvl: "$432M",
    sharpe: "3.1",
  },
  {
    vault: "ADAI+AUSDC+AUSDT",
    protocol: "Curve",
    chain: "Geist",
    apy: "12.1%",
    tvl: "$62M",
    sharpe: "1.4",
  },
  {
    vault: "USDC+EURS",
    protocol: "Curve",
    chain: "Cosmos",
    apy: "32.2%",
    tvl: "$678M",
    sharpe: "3.1",
  },
  {
    vault: "CADC+USDC",
    protocol: "Curve",
    chain: "Fantom",
    apy: "32.2%",
    tvl: "$543M",
    sharpe: "1.6",
  },
  {
    vault: "CDAI+CUSDC+USDT",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "54.1%",
    tvl: "$324M",
    sharpe: "1.7",
  },
  {
    vault: "PAR+USDC",
    protocol: "Curve",
    chain: "Binance Smart Chain",
    apy: "31.2%",
    tvl: "$23M",
    sharpe: "1.7",
  },
  {
    vault: "USDC+CXD",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "45.7%",
    tvl: "$783M",
    sharpe: "2.7",
  },
  {
    vault: "USDC+CXD",
    protocol: "Curve",
    chain: "Ethereum",
    apy: "45.7%",
    tvl: "$782M",
    sharpe: "2.7",
  },
  // More vaults...
];

export default class Table extends React.Component {
  componentDidMount() {
    let config = {
      headers: {
        "access-token": "stargate",
      },
    };
    axios
      .get("https://superform-api.herokuapp.com/authentication", config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 ">
            <h2 className="text-center  text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC4626 VAULTS{" "}
              </span>{" "}
            </h2>{" "}
          </div>{" "}
        </div>{" "}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                  <table
                    className="min-w-full border-separate"
                    style={{ borderSpacing: 0 }}
                  >
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                        >
                          Vault{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Protocol{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                          Chain{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                          APY{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                          TVL{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                          Sharpe{" "}
                        </th>{" "}
                      </tr>{" "}
                    </thead>{" "}
                    <tbody className="bg-white">
                      {" "}
                      {vaults.map((vault, vaultIdx) => (
                        <tr key={vault.email}>
                          <td
                            className={
                              (vaultIdx !== vaults.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8")
                            }
                          >
                            {vault.vault}{" "}
                          </td>{" "}
                          <td
                            className={
                              (vaultIdx !== vaults.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell")
                            }
                          >
                            {vault.protocol}{" "}
                          </td>{" "}
                          <td
                            className={
                              (vaultIdx !== vaults.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell")
                            }
                          >
                            {vault.chain}{" "}
                          </td>{" "}
                          <td
                            className={
                              (vaultIdx !== vaults.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap px-3 py-4 text-sm text-gray-500")
                            }
                          >
                            {vault.apy}{" "}
                          </td>{" "}
                          <td
                            className={
                              (vaultIdx !== vaults.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap px-3 py-4 text-sm text-gray-500")
                            }
                          >
                            {vault.tvl}{" "}
                          </td>{" "}
                          <td
                            className={
                              (vaultIdx !== vaults.length - 1
                                ? "border-b border-gray-200"
                                : "",
                              "whitespace-nowrap px-3 py-4 text-sm text-gray-500")
                            }
                          >
                            {vault.sharpe}{" "}
                          </td>{" "}
                        </tr>
                      ))}{" "}
                    </tbody>{" "}
                  </table>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    );
  }
}

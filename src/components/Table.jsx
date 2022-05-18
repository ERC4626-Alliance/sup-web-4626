import React from "react";

const axios = require("axios");

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vaults: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let config = {
      headers: {
        "access-token": "stargate",
      },
    };
    axios
      .get("https://superform-api.herokuapp.com/explore/", config)
      .then((res) => {
        this.setState({
          vaults: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { vaults } = this.state;
    return vaults === null ? null : (
      <div>
        <div className="bg-white font-worksans">
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
                          Chain{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                        >
                          Contract Address{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                        >
                          Name{" "}
                        </th>{" "}
                        <th
                          scope="col"
                          className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                        >
                          Protocol{" "}
                        </th>{" "}
                      </tr>{" "}
                    </thead>{" "}
                    <tbody className="bg-white">
                      {" "}
                      {vaults.timestamp.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td
                              className={
                                (index !== vaults.length - 1
                                  ? "border-b border-gray-200"
                                  : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8")
                              }
                            >
                              {vaults.chain[index]}{" "}
                            </td>{" "}
                            <td
                              className={
                                (index !== vaults.length - 1
                                  ? "border-b border-gray-200"
                                  : "",
                                "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell")
                              }
                            >
                              {vaults.contract_address[index]}{" "}
                            </td>{" "}
                            <td
                              className={
                                (index !== vaults.length - 1
                                  ? "border-b border-gray-200"
                                  : "",
                                "whitespace-nowrap px-3 py-4 text-sm text-gray-500")
                              }
                            >
                              {vaults.name[index]}{" "}
                            </td>{" "}
                            <td
                              className={
                                (index !== vaults.length - 1
                                  ? "border-b border-gray-200"
                                  : "",
                                "whitespace-nowrap px-3 py-4 text-sm text-gray-500")
                              }
                            >
                              {vaults.protocol[index]}{" "}
                            </td>{" "}
                          </tr>
                        );
                      })}{" "}
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

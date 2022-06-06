import axios from "axios";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import ReactPaginate from "react-paginate";

function mapIcon(chain: string) {
  let icon = "";
  if (chain.toLowerCase().search("bnb") !== -1) {
    icon = "images/icons/bnb.svg";
  } else {
    switch (chain.toLowerCase()) {
      case "polygon":
        icon = "images/icons/polygon.svg";
        break;
      case "fantom":
        icon = "images/icons/fantom.svg";
        break;
      case "ethereum":
        icon = "images/icons/ethereum.svg";
        break;
      case "avalanche":
        icon = "images/icons/avalanche.svg";
        break;
    }
  }
  return (
    <>
      <ExportedImage layout="raw" width="20" height="20" src={icon} alt={chain} className="w-auto h-6 mr-1 inline-flex"/>
      {chain[0].toUpperCase() + chain.slice(1)}
    </>
  );
}

function mapAddressWithScan(address: string, chain: string) {
  let href = undefined;
  if (chain.toLowerCase().search("bnb") !== -1) {
    href = `https://explorer.binance.org/address/${address}`;
  } else {
    switch (chain.toLowerCase()) {
      case "polygon":
        href = `https://polygonscan.com/address/${address}#code`;
        break;
      case "fantom":
        href = `https://ftmscan.com/address/${address}`;
        break;
      case "ethereum":
        href = `https://etherscan.io/address/${address}#code`;
        break;
      case "avalanche":
        href = `https://avascan.info/blockchain/c/address/${address}/contract`;
        break;
    }
  }
  return href !== undefined ? (<a href={href} target="_blank" className="link-cta" rel="noopener noreferrer">{address}</a>) : address;
}

interface VaultType {
  timestamp: string[],
  chain: string[],
  contract_address: string[],
  name: string[],
  protocol: string[]
}

const defaultState: VaultType = {
  timestamp: [],
  chain: [],
  name: [],
  contract_address: [],
  protocol: []
};

const VaultExplorer= () => {
  const [vaults, setVaults] = useState(defaultState);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    let config = {
      headers: {
        "access-token": "stargate"
      }
    };
    axios
    .get("https://superform-api.herokuapp.com/explore/", config)
    .then((res: any) => {
      console.log(res.data);
      setVaults(res.data);
      setPageCount(res.data.timestamp.length / 10);
    })
    .catch((err: any) => {
      console.log(err);
    });
  }, []);

  const handlePageClick = (event: { selected: any; }) => {
    setCurrentPage(event.selected + 1);
    console.log(currentPage);
  };

  return (
    vaults === null ? null :
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="shadow-sm ring-1 ring-black ring-opacity-5">
                <a id="vaultscan"/>
                <table
                  className="min-w-full border-separate"
                  style={{ borderSpacing: 0 }}
                >
                  <thead className="bg-gray-50 rounded-lg overflow-hidden">
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Chain
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Protocol
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Contract Address
                    </th>
                  </tr>
                  </thead>
                  <tbody className="bg-white">
                  {vaults.timestamp
                  .slice((currentPage - 1) * 10, (currentPage * 10) - 1)
                  .map((vault, vaultIdx, pagedVault) => (
                    <tr key={`${vault}-${vaultIdx}`}>
                      <td
                        className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium" +
                          " text-gray-900 sm:pl-6 lg:pl-8")}
                      >
                        {vaults.name[vaultIdx + (currentPage - 1) * 10]}
                      </td>
                      <td
                        className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium" +
                          " text-gray-900 sm:pl-2 lg:pl-2 select-none")}>
                        {mapIcon(vaults.chain[vaultIdx + (currentPage - 1) * 10])}
                      </td>
                      <td
                        className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500" +
                          " hidden sm:table-cell")}
                      >
                        {vaults.protocol[vaultIdx + (currentPage - 1) * 10]}
                      </td>
                      <td
                        className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm" +
                          " text-pink-700" +
                          " hidden lg:table-cell")}
                      >
                        {mapAddressWithScan(vaults.contract_address[vaultIdx + (currentPage - 1) * 10], vaults.chain[vaultIdx + (currentPage - 1) * 10])}
                      </td>
                    </tr>))}
                  </tbody>
                </table>
                <nav className="w-full mx-auto -mt-1 border-t border-gray-200">
                  <ReactPaginate
                    previousLinkClassName="border-t-2 border-transparent py-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    className="px-4 w-fit mx-auto flex items-center h-auto justify-between sm:px-0"
                    breakLabel="..."
                    pageClassName=""
                    pageLinkClassName="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                    activeLinkClassName="border-pink-500 text-pink-600 border-t-2 py-4 px-4 inline-flex items-center text-sm font-medium"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    nextLinkClassName="border-t-2 border-transparent py-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    nextClassName="-mt-px w-0 flex-1 flex"
                    nextLabel={
                      <>
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                      </>
                    }
                    previousLabel={
                      <svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                           aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"></path>
                      </svg>
                    }
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>);
};
export default VaultExplorer;

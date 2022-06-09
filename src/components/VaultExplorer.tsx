import { mapAddressWithScan, mapIcon } from "@/helpers/formatters";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface VaultType {
  is_vault: boolean[];
  vault_id: number[];
  timestamp: string[],
  chain: string[],
  contract_address: string[],
  name: string[],
  protocol: string[]
}

const defaultState: VaultType = {
  timestamp: [], chain: [], name: [], contract_address: [], protocol: [], is_vault: [], vault_id: []
};

const VaultExplorer = () => {
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
    .get("https://api.superform.xyz/explore/", config)
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

  return (vaults === null ? null : <section className="px-4 sm:px-6 lg:px-8 pb-16" id="vaultscan">
    <div className="mt-8 flex flex-col">
      <div className="-my-1 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow md:rounded-lg">
            <table
              className="min-w-full divide-y divide-gray-300 border-separate"
              style={{ borderSpacing: 0 }}
            >
              <thead className="bg-gray-50 overflow-hidden">
              <tr>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter table-cell"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="pl-4 pr-3 sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter table-cell"
                >
                  Chain
                </th>
                <th
                  scope="col"
                  className="pl-4 pr-3 sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter table-cell"
                >
                  Protocol
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter table-cell"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="md:pl-6 sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter table-cell"
                >
                  Contract Address
                </th>
                <th
                  scope="col"
                  className="md:pl-6 sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter table-cell"
                >
                  Added at
                </th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
              {vaults.timestamp
              .slice((currentPage - 1) * 10, (currentPage * 10) - 1)
              .map((vault, vaultIdx, pagedVault) => (<tr key={`${vault}-${vaultIdx}`}>
                <td
                  className={classNames(
                    vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "",
                    "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium" + " text-gray-900 sm:pl-6 lg:pl-8")}
                >
                  {vaults.name[vaultIdx + (currentPage - 1) * 10]}
                </td>
                <td
                  className={classNames(
                    vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "",
                    "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium min-w-[120px] text-gray-900 sm:pl-2 lg:pl-2 select-none")}>
                  {mapIcon(vaults.chain[vaultIdx + (currentPage - 1) * 10])}
                </td>
                <td
                  className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500 min-w-[50px]")}
                >
                  {vaults.protocol[vaultIdx + (currentPage - 1) * 10]}
                </td>
                <td
                  className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500")}
                >
                  {vaults.is_vault[vaultIdx + (currentPage - 1) * 10] ? "Vault" : "Non-Vault"}
                </td>
                <td
                  className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6")}
                >
                  {mapAddressWithScan(vaults.contract_address[vaultIdx + (currentPage - 1) * 10], vaults.chain[vaultIdx + (currentPage - 1) * 10])}
                </td>
                <td
                  className={classNames(vaultIdx !== pagedVault.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6")}
                >
                  {vaults.timestamp[vaultIdx + (currentPage - 1) * 10].toLocaleString()}
                </td>
              </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <nav className="w-full mx-auto -mt-1">
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
          nextLabel={<>
            <span className="sr-only">Next</span>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"></path>
            </svg>
          </>}
          previousLabel={<svg className="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              aria-hidden="true">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
          </svg>}
        />
      </nav>
    </div>
  </section>);
};
export default VaultExplorer;

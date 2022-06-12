import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { mapAddressWithScan, mapIcon } from "@/helpers/formatters";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSafe2Fill } from "react-icons/bs";
import { FaFileContract } from "react-icons/fa";
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
  useEffect(() => {
    let config = {
      headers: {
        "access-token": "stargate"
      }
    };
    axios
    .get("https://api.superform.xyz/explore/", config)
    .then((res: any) => {
      setVaults(res.data);
      setPageCount(Math.ceil(res.data.timestamp.length / 10));
    })
    .catch((_err: any) => {
//      console.log(_err);
    });
  }, []);

  const handlePageClick = (event: { selected: any; }) => {
    setCurrentPage(event.selected + 1);
  };

  return (vaults === null ? null : <div className="pt-8 pb-16 bg-gradient-to-b from-pink-50" id="vaultscan">
    <Container className="mt-8 flex flex-col">
      <AtomTitle alignText="center" subtitle="More features and vault metadata coming soon">ERC-4626 VAULTS</AtomTitle>
      <div className="mt-8 flex flex-col">
        <div className="-my-1 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full table-fixed divide-y divide-gray-200"
                     style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="min-w-[12rem] pl-6 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="pl-4 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Chain
                  </th>
                  <th
                    scope="col"
                    className="pl-4 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Protocol
                  </th>
                  <th
                    scope="col"
                    className="pl-4 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="pl-4 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Added at
                  </th>
                  <th
                    scope="col"
                    className="pr-8 pl-3 py-3.5 text-left text-sm font-semibold text-gray-900 text-right"
                  >
                    Contract Address
                  </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {vaults.timestamp
                .slice((currentPage - 1) * 10, (currentPage * 10) - 1)
                .map((vault, vaultIdx) => (<tr key={`${vault}-${vaultIdx}`} className="bg-white">
                  <td
                    className="whitespace-nowrap font-extrabold tracking-tight py-2 pl-6 pr-3"
                  >
                    <span className=" -mb-1 pb-1 bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent relative inline-flex"
                    >{vaults.name[vaultIdx + (currentPage - 1) * 10]}</span>
                  </td>
                  <td
                    className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-2 lg:pl-2 select-none"
                  >
                    {mapIcon(vaults.chain[vaultIdx + (currentPage - 1) * 10])}
                  </td>
                  <td
                    className="whitespace-nowrap pl-5 pr-3 py-4 text-sm text-gray-900 min-w-[50px]"
                  >
                    {vaults.protocol[vaultIdx + (currentPage - 1) * 10]}
                  </td>
                  <td
                    className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >
                    {vaults.is_vault[vaultIdx + (currentPage - 1) * 10] ?
                     (<div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-600 border border-pink-400/25">
                       <BsSafe2Fill className="-ml-1 mr-1 h-3 w-3 text-pink-400" />
                       Vault
                     </div>) :
                     (<div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 border border-yellow-400/25 text-yellow-700">
                       <FaFileContract className="-ml-1 mr-1 h-3 w-3 text-yellow-400" />
                       Protocol
                     </div>)}
                  </td>
                  <td
                    className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500"
                  >
                    {vaults.timestamp[vaultIdx + (currentPage - 1) * 10].toLocaleString()}
                  </td>
                  <td
                    className="whitespace-nowrap py-2 pr-8 pl-3 text-sm text-gray-500 text-right"
                  >
                    {mapAddressWithScan(vaults.contract_address[vaultIdx + (currentPage - 1) * 10], vaults.chain[vaultIdx + (currentPage - 1) * 10])}
                  </td>
                </tr>))}
                </tbody>
              </table>
            </div>
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
    </Container>
  </div>);
};
export default VaultExplorer;

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
  timestamp: string[];
  chain: string[];
  contract_address: string[];
  name: string[];
  protocol: string[];
}

const defaultState: VaultType = {
  timestamp: [],
  chain: [],
  name: [],
  contract_address: [],
  protocol: [],
  is_vault: [],
  vault_id: [],
};

const VaultExplorer = () => {
  const [vaults, setVaults] = useState(defaultState);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    let config = {
      headers: {
        "access-token": "stargate",
      },
    };
    axios
      .get("//api.superform.xyz/explore/", config)
      .then((res: any) => {
        setVaults(res.data);
        setPageCount(Math.ceil(res.data.timestamp.length / perPage));
      })
      .catch((_err: any) => {
        //      console.log(_err);
      });
  }, []);

  const handlePageClick = (event: { selected: any }) => {
    setCurrentPage(event.selected + 1);
  };
  const perPage = 30;

  return vaults === null ? null : (
    <div
      className="overflow-x-hidden bg-gradient-to-b from-pink-50 py-16 md:overflow-x-auto"
      id="vaultscan"
    >
      <Container>
        <AtomTitle
          alignText="center"
          subtitle="More features and vault metadata coming soon"
        >
          ERC-4626 VAULTS
        </AtomTitle>
        <div className="-my-1 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table
                className="min-w-full table-fixed divide-y divide-gray-200"
                style={{ borderSpacing: 0 }}
              >
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 table-cell border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Chain
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 table-cell border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Protocol
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 table-cell border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Added at
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pr-8 pl-3 text-left text-right text-sm font-semibold text-gray-900"
                    >
                      Contract Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {vaults.timestamp
                    .slice(
                      (currentPage - 1) * perPage,
                      currentPage * perPage - 1
                    )
                    .map((vault, vaultIdx) => (
                      <tr key={`${vault}-${vaultIdx}`} className="bg-white">
                        <td className="whitespace-nowrap py-2 pl-6 pr-3 font-extrabold tracking-tight">
                          <span className=" relative -mb-1 inline-flex bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text pb-1 text-transparent">
                            {
                              vaults.name[
                                vaultIdx + (currentPage - 1) * perPage
                              ]
                            }
                          </span>
                        </td>
                        <td className="select-none whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-2 lg:pl-2">
                          {mapIcon(
                            vaults.chain[vaultIdx + (currentPage - 1) * perPage]
                          )}
                        </td>
                        <td className="min-w-[50px] whitespace-nowrap py-4 pl-5 pr-3 text-sm text-gray-900">
                          {
                            vaults.protocol[
                              vaultIdx + (currentPage - 1) * perPage
                            ]
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {vaults.is_vault[
                            vaultIdx + (currentPage - 1) * perPage
                          ] ? (
                            <div className="inline-flex items-center rounded-full border border-pink-400/25 bg-pink-100 px-3 py-1 text-xs font-bold text-pink-600">
                              <BsSafe2Fill className="-ml-1 mr-1 h-3 w-3 text-pink-400" />
                              Vault
                            </div>
                          ) : (
                            <div className="inline-flex items-center rounded-full border border-yellow-400/25 bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
                              <FaFileContract className="-ml-1 mr-1 h-3 w-3 text-yellow-400" />
                              Protocol
                            </div>
                          )}
                        </td>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500">
                          {vaults.timestamp[
                            vaultIdx + (currentPage - 1) * perPage
                          ].toLocaleString()}
                        </td>
                        <td className="whitespace-nowrap py-2 pr-8 pl-3 text-right text-sm text-gray-500">
                          {mapAddressWithScan(
                            vaults.contract_address[
                              vaultIdx + (currentPage - 1) * perPage
                            ],
                            vaults.chain[vaultIdx + (currentPage - 1) * perPage]
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <nav className="relative mx-auto -mt-2 w-full overflow-x-hidden md:overflow-x-auto">
          <ReactPaginate
            previousLinkClassName="border-t-2 border-transparent py-4 pr-1 inline-flex justify-center items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            className="mx-auto flex h-auto w-fit max-w-[100vw] items-center justify-center px-0 md:px-4"
            breakLabel="..."
            pageClassName=""
            pageLinkClassName="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 py-4 px-2 md:px-4 inline-flex items-center text-sm font-medium"
            activeLinkClassName="border-pink-500 text-pink-600 border-t-2 py-4 px-2 md:px-4 inline-flex items-center text-sm font-medium"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            nextLinkClassName="border-t-2 border-transparent py-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            nextLabel={
              <>
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </>
            }
            previousLabel={
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
          />
        </nav>
      </Container>
    </div>
  );
};
export default VaultExplorer;

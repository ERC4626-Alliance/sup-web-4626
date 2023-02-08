import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { scroller } from "react-scroll";
import { mapAddressWithScan, mapIcon } from "@/helpers/formatters";
import axios from "axios";
import { useMemo, useState } from "react";
import { BsSafe2Fill, BsChevronRight, BsChevronLeft } from "react-icons/bs";
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

export default function VaultExplorer() {
  const [vaults, setVaults] = useState(defaultState);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useMemo(() => {
    let config = {
      headers: {
        "access-token": "superapi-testing",
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

  /**
   * Set specific page & scroll to the top of the vaultscan block
   * @param event
   */
  const handlePageClick = (event: { selected: any }) => {
    setCurrentPage(event.selected + 1);
    scroller.scrollTo("vaultscan", {
      duration: 200,
      delay: 50,
      smooth: true,
      offset: 60,
    });
  };
  const perPage = 15;

  return vaults === null ? null : (
    <div
      className="mt-16 overflow-x-hidden bg-gradient-to-b from-pink-50 py-16 md:overflow-x-auto"
      id="vaultscan"
    >
      <Container>
        <AtomTitle
          alignText="center"
          subtitle="More features and vault metadata coming soon"
        >
          ERC-4626 VAULTS
        </AtomTitle>
        <div className="-my-1 -mx-5 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden overflow-hidden shadow-sm ring-1 ring-gray-500 ring-opacity-25 ring-offset-1 md:rounded-lg">
              <table
                className="min-w-full divide-y divide-gray-200 overflow-x-hidden overscroll-y-contain bg-transparent md:rounded-t-2xl"
                style={{ borderSpacing: 0 }}
              >
                <thead className="-mt-1 overflow-hidden border-b border-gray-400/50 bg-gray-50 md:rounded-t-xl">
                  <tr className="overflow-hidden bg-transparent text-left text-sm font-semibold text-gray-900 md:rounded-t-xl">
                    <th scope="col" className="w-[20%] p-4">
                      Name
                    </th>
                    <th scope="col" className="min-w-[8rem] p-4">
                      Chain
                    </th>
                    <th scope="col" className="min-w-[5rem] p-4">
                      Protocol
                    </th>
                    <th scope="col" className="table-cell p-4">
                      Type
                    </th>
                    <th scope="col" className="table-cell p-4">
                      Added at
                    </th>
                    <th
                      scope="col"
                      className="table-cell p-4 text-left md:pl-[119px]"
                    >
                      Contract Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/50 bg-white">
                  {vaults.timestamp
                    .slice(
                      (currentPage - 1) * perPage,
                      currentPage * perPage - 1
                    )
                    .map((vault, vaultIdx) => (
                      <tr
                        key={`${vault}-${vaultIdx}`}
                        className="... cursor-default select-none truncate whitespace-nowrap bg-white text-sm tracking-tight text-gray-900"
                      >
                        <td className="w-[256px] min-w-[256px] max-w-[256px] p-4">
                          <span className="-mb-1 inline-block bg-gradient-to-b from-pink-500 to-pink-900 bg-clip-text pb-1 font-extrabold tracking-tight text-transparent">
                            {
                              vaults.name[
                                vaultIdx + (currentPage - 1) * perPage
                              ]
                            }
                          </span>
                        </td>
                        <td className="p-4">
                          {mapIcon(
                            vaults.chain[vaultIdx + (currentPage - 1) * perPage]
                          )}
                        </td>
                        <td className="p-4 font-semibold">
                          {
                            vaults.protocol[
                              vaultIdx + (currentPage - 1) * perPage
                            ]
                          }
                        </td>
                        <td className="font-base cursor-default p-4 text-xs uppercase italic tracking-tight">
                          {vaults.is_vault[
                            vaultIdx + (currentPage - 1) * perPage
                          ] ? (
                            <div className="inline-flex items-center rounded-full border  border-pink-400/50 bg-pink-100 px-3 py-1 text-pink-600 shadow-sm">
                              <BsSafe2Fill className="-ml-1 mr-1 h-3 w-3 text-pink-600" />
                              Vault
                            </div>
                          ) : (
                            <div className="inline-flex items-center rounded-full border border-yellow-400/50 bg-yellow-100 px-3 py-1 uppercase italic text-yellow-700 shadow-sm">
                              <FaFileContract className="-ml-1 mr-1 h-3 w-3 text-yellow-600" />
                              Protocol
                            </div>
                          )}
                        </td>
                        <td className="p-4">
                          {vaults.timestamp[
                            vaultIdx + (currentPage - 1) * perPage
                          ].toLocaleString()}
                        </td>
                        <td className="p-4 text-right text-pink-900 md:text-sm md:text-gray-900">
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
            previousLinkClassName="border-t-2 border-transparent py-4 pr-1 inline-flex justify-center items-center md:hover:text-pink-500"
            className="mx-auto flex h-auto w-fit max-w-[100vw] items-center justify-center px-0 md:px-4"
            breakLabel="..."
            pageClassName="text-lg font-medium md:text-sm text-gray-500 md:hover:text-pink-500 inline-flex items-center"
            pageLinkClassName="border-transparent group:text-pink-500 group:border-pink-700 py-4 px-2 md:px-4 md:hover:border-pink-500 border-t-2"
            activeLinkClassName="group text-pink-500 border-pink-500"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            nextLinkClassName="border-t-2 border-transparent py-4 pl-1 inline-flex items-center md:hover:text-pink-500 md:hover:border-pink-500"
            nextLabel={<BsChevronRight className="h-7  md:h-5" />}
            previousLabel={<BsChevronLeft className="h-7 md:h-5" />}
          />
        </nav>
      </Container>
    </div>
  );
}
import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { scroller } from "react-scroll";
import { mapAddressWithScan, mapIcon } from "@/helpers/formatters";
import { useMemo, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import vaultData from "@json/vaults.json";

interface VaultType {
  chain: string;
  description: string;
  creator: string;
  contract_address: string;
  name: string;
  protocol: string;
  link: string;
}

export default function VaultExplorer() {
  const [vaults, setVaults] = useState<VaultType[]>([] as VaultType[]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 15;

  useMemo(() => {
    setVaults(vaultData.sort((a, b) => (a.name > b.name ? 1 : -1)));
    setPageCount(Math.ceil(vaultData.length / perPage));
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

  return vaults === null ? null : (
    <div className="uiBlock lightBackground mt-16 overflow-x-hidden md:overflow-x-auto" id="vaultscan">
      <Container>
        <AtomTitle alignText="center" subtitle="A repository of live ERC 4626 vaults across chains. More features and vault metadata coming soon">
          ERC-4626 VAULTS
        </AtomTitle>
        <div className="-my-1 -mx-5 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden overflow-hidden shadow-sm ring-1 ring-gray-500 ring-opacity-25 ring-offset-1 dark:ring-pink-900 md:rounded-lg">
              <table
                className="min-w-full divide-y divide-gray-200 overflow-x-hidden overscroll-y-contain bg-transparent dark:divide-pink-900 md:rounded-t-2xl"
                style={{ borderSpacing: 0 }}
              >
                <thead className="-mt-1 overflow-hidden border-b border-gray-400/50 bg-gray-50 dark:border-pink-900/90 dark:bg-pink-700 md:rounded-t-xl">
                  <tr className="overflow-hidden bg-transparent text-left text-sm font-semibold md:rounded-t-xl">
                    <th scope="col" className="w-[20%] p-4">
                      Name
                    </th>
                    <th scope="col" className="min-w-[8rem] p-4 text-center">
                      Chain
                    </th>
                    <th scope="col" className="min-w-[5rem] p-4 text-center">
                      Protocol
                    </th>
                    <th scope="col" className="table-cell min-w-[60vw] whitespace-normal p-4 lg:min-w-[150px]">
                      Description
                    </th>
                    <th scope="col" className="table-cell p-4 text-center">
                      Creator
                    </th>
                    <th scope="col" className="table-cell p-4 text-right md:pl-[119px]">
                      Contract Address
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200/50 dark:divide-pink-900/50">
                  {vaults.slice((currentPage - 1) * perPage, currentPage * perPage - 1).map((vault, vaultIdx) => (
                    <tr key={`${vault}-${vaultIdx}`} className="... cursor-default select-none truncate whitespace-nowrap bg-white text-sm tracking-tight dark:bg-zinc-900">
                      <td className="w-[20%] max-w-[256px] p-4 text-left">
                        <a
                          className="-mb-1 inline-block whitespace-pre-wrap bg-gradient-to-r from-pink-500 to-pink-800 bg-clip-text pb-1 font-extrabold tracking-tight text-transparent dark:from-pink-200 dark:to-pink-400 lg:hover:from-pink-700 lg:hover:to-pink-900 lg:hover:dark:from-pink-400 lg:hover:dark:to-pink-600 lg:hover:transition-all duration-200"
                          target="_blank"
                          href={vault.link}
                          rel="noreferrer nofollow"
                        >
                          {vault.name}
                        </a>
                      </td>
                      <td className="p-4">{mapIcon(vault.chain)}</td>
                      <td className="p-4 font-semibold">{vault.protocol}</td>
                      <td className="font-base max-w-[60vw] cursor-default whitespace-normal p-4 text-left text-xs italic tracking-tight md:max-w-[300px]">{vault.description}</td>
                      <td className="p-4">{vault.creator}</td>
                      <td className="p-4 text-right text-pink-900 md:text-sm md:text-gray-900">{mapAddressWithScan(vault.contract_address, vault.chain)}</td>
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
            pageClassName="text-lg font-medium md:text-sm md:hover:text-pink-500 inline-flex items-center"
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
        <div className="w-full text-center">
          <a
            href="https://forms.gle/xzmLT7hQhMMeKeVY7"
            target="_blank"
            rel="nofollow noreferrer"
            className="mx-auto mt-16 inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-pink-700 bg-white bg-pink-700 px-8 py-5 text-xl font-medium text-white shadow-sm hover:transition-all md:hover:bg-white md:hover:text-pink-700 md:hover:shadow-md"
          >
            Submit your vault
          </a>
        </div>
      </Container>
    </div>
  );
}
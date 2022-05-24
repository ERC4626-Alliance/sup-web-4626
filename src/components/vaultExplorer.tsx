import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

interface VaultType {
  timestamp: String[],
  chain: String[],
  contract_address: String[],
  name: String[],
  protocol: String[]
}

const defaultState: VaultType = {
  timestamp: [],
  chain: [],
  name: [],
  contract_address: [],
  protocol: []
}

const VaultExplorer: FunctionComponent = () => {
  const [vaults, setVaults] =  useState(defaultState)
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() =>  {
    let config = {
      headers: {
        "access-token": "stargate",
      },
    };
    axios
      .get("https://superform-api.herokuapp.com/explore/", config)
      .then((res:any) => {
        setVaults(res.data);
        setPageCount(res.data.timestamp.length / 10)
      })
      .catch((err:any) => {
        console.log(err);
      });
  }, [])

  const handlePageClick = (event: { selected: any; }) => {
    setCurrentPage(event.selected + 1)
    console.log(currentPage)
  }

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
                <thead className="bg-gray-50">
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
                .map((vault, vaultIdx) => (<tr key={`${vault}-${vaultIdx}`}>
                <td
                    className={classNames(vaultIdx !== vaults.timestamp.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8")}
                  >
                    {vaults.name[vaultIdx + ((currentPage - 1) * 10)]}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.timestamp.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8")}
                  >
                    {vaults.chain[vaultIdx + ((currentPage - 1) * 10)]}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.timestamp.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell")}
                  >
                    {vaults.protocol[vaultIdx + ((currentPage - 1) * 10)]}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.timestamp.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell")}
                  >
                    {vaults.contract_address[vaultIdx + ((currentPage - 1) * 10)]}
                  </td>
                </tr>))}
                </tbody>
              </table>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
              />
            </div>
          </div>
        </div>
      </div>
    </section>);
};
export default VaultExplorer;

import { FunctionComponent } from "react";
import { vaults } from "../lib/data";

const VaultExplorer: FunctionComponent = () => {

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
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
                    Vault
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Protocol
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Chain
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    APY
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    TVL
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Sharpe
                  </th>
                </tr>
                </thead>
                <tbody className="bg-white">
                {vaults.map((vault, vaultIdx) => (<tr key={`${vault.vault}-${vaultIdx}`}>
                  <td
                    className={classNames(vaultIdx !== vaults.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8")}
                  >
                    {vault.vault}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell")}
                  >
                    {vault.protocol}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell")}
                  >
                    {vault.chain}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500")}
                  >
                    {vault.apy}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500")}
                  >
                    {vault.tvl}
                  </td>
                  <td
                    className={classNames(vaultIdx !== vaults.length - 1 ? "border-b border-gray-200" : "", "whitespace-nowrap px-3 py-4 text-sm text-gray-500")}
                  >
                    {vault.sharpe}
                  </td>
                </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
export default VaultExplorer;

import { FunctionComponent } from "react";

const TableSection: FunctionComponent = () => {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 ">
        <h2 className="text-center  text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                ERC-4626 VAULTS
              </span>
        </h2>
        <p className="text-center mt-4 text-lg text-slate-700">
          Aggregated and constantly updated list of ERC-4626 vaults deployed on EVM chains <span className="inline-block text-sm text-slate-400">(more data about each vault coming
              soon).</span>
        </p>
      </section>
    </div>);
};
export default TableSection;

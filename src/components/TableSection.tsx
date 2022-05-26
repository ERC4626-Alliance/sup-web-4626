import { FunctionComponent } from "react";
import Title from "components/Atom/Title";

const TableSection: FunctionComponent = () => {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:px-8 text-center">
        <Title>ERC-4626 VAULTS</Title>
        <p className="text-center mt-4 text-lg text-slate-700">
          Aggregated and constantly updated list of ERC-4626 vaults deployed on EVM chains <span className="inline-block text-sm text-slate-400">(more data about each vault coming
              soon).</span>
        </p>
      </section>
    </div>);
};
export default TableSection;

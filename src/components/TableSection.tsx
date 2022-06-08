import AtomTitle from "@/components/Atom/Title";
import { ClockIcon } from "@heroicons/react/outline";

const TableSection= () => {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto text-center">
        <AtomTitle>ERC-4626 VAULTS</AtomTitle>
        <h3 className="text-center mt-2 text-lg text-slate-700">
          Aggregated and constantly updated list of ERC-4626 vaults deployed on EVM chains
        </h3>
        <div className="inline-flex items-center text-sm font-normal text-slate-400 shadow-sm mt-3 px-3 border rounded-xl border-gray-200 py-1.5"><ClockIcon className="h-4 w-4 mr-1 text-gray-500 animate-pulse" />More data about each vault coming
              soon</div>
      </section>
    </div>);
};
export default TableSection;

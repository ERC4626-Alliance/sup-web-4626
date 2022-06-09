import AtomTitle from "@/components/Atom/Title";
import { HiOutlineCalendar } from "react-icons/hi";

const TableSection = () => {

  return <div className="bg-white">
    <section className="max-w-4xl mx-auto text-center">
      <AtomTitle>ERC-4626 VAULTS</AtomTitle>
      <h3 className="text-center mt-2 text-lg text-slate-700">
        Aggregated and constantly updated list of ERC-4626 vaults deployed on EVM chains
      </h3>
      <div className="flex items-center text-sm font-normal text-gray-800/75 shadow-sm my-3 px-2 w-fit mx-auto justify-between border rounded-xl border-gray-400/50 py-1.5">
        <HiOutlineCalendar className="h-4 w-4 mr-1" />
        List of the vaults is updated weekly
      </div>
    </section>
  </div>;
};
export default TableSection;

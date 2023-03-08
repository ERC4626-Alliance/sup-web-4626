import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { GiTrumpetFlag } from "react-icons/gi";

export default function BlockBounties() {
  return (
    <div className="bg-gradient-to-t from-pink-50 py-16 text-center" id="bounties">
      <Container>
        <AtomTitle alignText="center">Bounties</AtomTitle>
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-xl leading-relaxed text-slate-700">Check out our live bounties. Alliance members can post bounties for ERC-4626 related development.</p>
        </div>
        <ul className="mt-16 space-y-2 space-y-8 text-left text-slate-700">
          <li className="flex flex-col justify-between space-y-8 rounded-lg bg-pink-100 p-8 shadow-lg lg:flex-row lg:items-center lg:space-y-0 select-none">
            <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
              <div className="flex items-center space-x-4 lg:space-x-8">
                <div className="flex items-center">
                  <div className="h-14 w-14">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-full">
                      <img className="object-scale-down" src="/images/logos/gearbox.svg" alt="Balancer" width="70" height="70" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-[100px]">
                  <div className="flex items-center">
                    <div className="font-medium">Gearbox</div>
                  </div>
                  <div className="text-sm text-gray-400">Organizer</div>
                </div>
              </div>
              <div className="lg:w-[124px]">
                <div className="font-mono font-medium font-extrabold tracking-tight">$1,000</div>
                <div className="text-sm text-gray-400">Rewards up to</div>
              </div>
              <div>
                <div className="font-medium tracking-tight text-sm">To make <a href="https://app.gearbox.fi/pools" className="inline-flex text-pink-700 underline decoration-from-font underline-offset-4 md:no-underline md:hover:text-pink-900 md:hover:underline" target="_blank" rel="noreferrer nofollow">existing passive pools on Gearbox</a> compliant with ERC-4626 and create a path forward to
                  easily support additional passive pools in the future</div>
                <div className="text-sm text-gray-400">Description</div>
              </div>
              <div>
                <div className="flex text-green-700 items-center space-x-[2px] uppercase font-extrabold">
                  <GiTrumpetFlag /> <span>Opened</span>
                </div>
                <div className="text-sm text-gray-400">Status</div>
              </div>
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md  bg-white px-5 py-3 text-base font-medium text-pink-700 shadow-sm hover:transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
                target="_blank"
                href="https://superform.notion.site/Gearbox-4626-Spec-0de0a498b171417e805759c896137bec"
                rel="noreferrer nofollow"
              >
                View bounty
              </a>
            </div>
          </li>
        </ul>
        <a
          href="https://forms.gle/A1RGtfAwFxnfTD5x8"
          target="_blank"
          rel="nofollow noreferrer"
          className="mt-16 inline-flex items-center justify-center whitespace-nowrap rounded-md px-8 py-5 text-xl font-medium text-pink-700 border-2 border-pink-700 shadow-sm transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
        >
          Submit a bounty
        </a>
      </Container>
    </div>
  );
}
import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import Link from "next/link";

export default function BlockBounties() {
  return (
    <div className="bg-gradient-to-t from-pink-50 py-16 text-center" id="authors">
      <Container>
        <AtomTitle alignText="center">Bounties</AtomTitle>
        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-xl leading-relaxed text-slate-700">Check out our live bounties</p>
        </div>
        <ul className="mt-16 space-y-2 space-y-8 text-left text-slate-700">
          <li className="flex flex-col justify-between space-y-8 rounded-lg bg-pink-100 p-8 shadow-lg lg:flex-row lg:items-center lg:space-y-0">
            <div className="flex flex-col space-y-10 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
              <div className="flex items-center space-x-4 lg:space-x-8">
                <div className="flex items-center">
                  <div className="h-14 w-14">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-full">
                      <img className="object-cover" src="/images/logos/balancer.png" alt="Balancer" width="70" height="70" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-[100px]">
                  <div className="flex items-center">
                    <div className="font-medium">Balancer</div>
                  </div>
                  <div className="text-sm text-gray-400">Name</div>
                </div>
              </div>
              <div className="lg:w-[124px]">
                <div className="font-mono font-medium font-extrabold tracking-tight">$1,000</div>
                <div className="text-sm text-gray-400">Rewards up to</div>
              </div>
              <div>
                <div className="font-medium">Smart Contract, Websites and Applications</div>
                <div className="text-sm text-gray-400">Description</div>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md  bg-white px-5 py-3 text-base font-medium text-pink-700 shadow-sm hover:transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
              href="/bounty/makerdao/"
            >
              View bounty
            </a>
          </li>
          <li className="flex flex-col justify-between space-y-8 rounded-lg bg-pink-100 p-8 shadow-lg lg:flex-row lg:items-center lg:space-y-0">
            <div className="flex flex-col space-y-10 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
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
                  <div className="text-sm text-gray-400">Name</div>
                </div>
              </div>
              <div className="lg:w-[124px]">
                <div className="font-mono font-medium font-extrabold tracking-tight">$1,000</div>
                <div className="text-sm text-gray-400">Rewards up to</div>
              </div>
              <div>
                <div className="font-medium">Smart Contract, Websites and Applications</div>
                <div className="text-sm text-gray-400">Description</div>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md  bg-white px-5 py-3 text-base font-medium text-pink-700 shadow-sm hover:transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md"
              href="/bounty/makerdao/"
            >
              View bounty
            </a>
          </li>
        </ul>
        <Link href="/bounties" prefetch>
          <a className="mt-16 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white px-8 py-5 text-xl font-medium text-pink-700 shadow-sm hover:transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md">
            Explore bounties
          </a>
        </Link>
      </Container>
    </div>
  );
}
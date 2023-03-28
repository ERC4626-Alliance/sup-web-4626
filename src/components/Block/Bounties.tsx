import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { GiTrumpetFlag } from "react-icons/gi";
import { CgSandClock } from "react-icons/cg";
import bounties from "@/content/bounties.json";

export default function BlockBounties() {
  return (
    <div className="uiBlock lightBackground" id="bounties">
      <Container>
        <AtomTitle alignText="center">Bounties</AtomTitle>
        <div className="mx-auto max-w-3xl">
          <p className="text-xl leading-relaxed text-slate-700 dark:text-zinc-100">
            Check out our live bounties. Alliance members can post bounties for ERC-4626 related development.
          </p>
        </div>
        <ul className="mt-16 space-y-2 space-y-8 text-left text-slate-700 dark:text-zinc-100">
          {bounties.map((bounty, index) => (
            <li
              key={`bounty-${index}`}
              className="my-8 flex select-none flex-col justify-between space-y-8 rounded-lg bg-pink-100 p-8 shadow-lg dark:bg-pink-900 lg:flex-row lg:items-center lg:space-y-0"
            >
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10">
                <div className="flex items-center space-x-4 lg:space-x-8">
                  <div className="flex items-center">
                    <div className="h-14 w-14">
                      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-full">
                        <img className="object-scale-down" src={bounty.icon} alt="Balancer" width="70" height="70" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[100px]">
                    <div className="flex items-center">
                      <div className="font-medium">{bounty.organizer}</div>
                    </div>
                    <div className="text-sm text-slate-400 dark:text-zinc-400">Organizer</div>
                  </div>
                </div>
                <div className="lg:w-[124px]">
                  <div className="font-mono font-medium font-extrabold tracking-tight">{bounty.rewards}</div>
                  <div className="whitespace-nowrap text-sm text-slate-400 dark:text-zinc-400">Rewards up to</div>
                </div>
                <div>
                  <div className="text-sm font-medium tracking-tight" dangerouslySetInnerHTML={{ __html: bounty.description }} />
                  <div className="text-sm text-slate-400 dark:text-zinc-400">Description</div>
                </div>
                <div>
                  <div className="flex items-center space-x-[2px] font-extrabold uppercase text-green-700 dark:text-green-300">
                    {bounty.status === "open" && (
                      <>
                        <GiTrumpetFlag />
                        <span>Opened</span>
                      </>
                    )}
                    {bounty.status === "pending" && (
                      <>
                        <CgSandClock />
                        <span>Pending</span>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-slate-400 dark:text-zinc-400">Status</div>
                </div>
                <div className="flex space-x-2">
                  <a
                    className="featuredLink inline-flex items-center justify-center whitespace-nowrap"
                    target="_blank"
                    href={bounty.link}
                    rel="noreferrer nofollow"
                  >
                    View bounty
                  </a>
                  <a
                    className="featuredLink inline-flex items-center justify-center whitespace-nowrap"
                    target="_blank"
                    href={bounty.submit}
                    rel="noreferrer nofollow"
                  >
                    Submit bounty
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { GiTrumpetFlag } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import bounties from "@/content/bounties.json";
import rawFeatures from "@/content/features.json";
import { classNames } from "../../helpers/formatters";
import { MouseEvent, useState } from "react";

declare type singleFeature = {
  id: number;
  title: string;
  textSize: "base" | "lg" | "xl" | "sm" | "xs";
  description: string;
  features: string[];
};

export default function BlockBounties() {
  const features = rawFeatures as singleFeature[];
  const [currentFeature, setCurrentFeature] = useState<singleFeature>(features[0]);

  const useOpen = (event: MouseEvent) => {
    const currentTarget = event.target as HTMLElement;
    // @ts-ignore
    !currentTarget.closest("a") && window.open(currentTarget.closest("li")?.dataset.url, "_blank");
  };

  return (
    <div className="uiBlock lightBackground" id="bounties">
      <Container>
        <AtomTitle alignText="center">Bounties</AtomTitle>
        <div className="mx-auto max-w-3xl">
          <p className="text-xl leading-relaxed text-slate-700 dark:text-zinc-100">
            Check out our live bounties. Alliance members can post bounties for ERC-4626 related development.
          </p>
        </div>
        <h4 className="mt-16 bg-gradient-to-r from-pink-500 to-pink-800 bg-clip-text text-center text-lg font-extrabold capitalize tracking-tight text-transparent dark:from-pink-200 dark:to-pink-400 md:my-4 md:text-left">
          Bounty Program Overview
        </h4>
        <div className="grid grid-cols-1 items-center gap-y-2 sm:gap-y-6 lg:grid-cols-12 lg:pt-0">
          <div className="-mx-4 flex overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-2">
            <ul className="relative z-10 flex w-full justify-center gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
              {features.map((feature: singleFeature, featureIndex) => (
                <li
                  onClick={() => setCurrentFeature(feature)}
                  key={feature.title}
                  className={classNames(
                    "my-4 cursor-pointer select-none justify-between space-y-8 text-left shadow-lg lg:flex-row lg:items-center" + " lg:space-y-0",
                    "group relative rounded-lg p-2 lg:rounded-l-lg lg:rounded-r-none lg:p-6",
                    currentFeature.id === featureIndex
                      ? "bg-white text-dark dark:bg-pink-700 dark:text-white"
                      : "opacity-50 hover:opacity-100 border-pink-700 text-pink-700" + " dark:bg-pink-900" + " bg-pink-100",
                    "border-pink-700 text-pink-700 dark:border-pink-500 dark:text-pink-300 lg:hover:bg-white dark:lg:hover:bg-pink-700" + " dark:lg:hover:text-white",
                  )}
                >
                  <h3>
                    <div className={classNames("font-display text-[12px] lg:text-lg [&:not(:focus-visible)]:focus:outline-none")}>
                      <span className="absolute inset-0 rounded-full lg:rounded-l-lg lg:rounded-r-none" />
                      {feature.title}
                    </div>
                  </h3>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full lg:col-span-10 z-10">
            <div className="mx-auto flex h-full flex-col items-start justify-start overflow-hidden rounded-lg bg-white px-4 py-3 shadow-lg dark:bg-pink-700 md:w-full md:px-6 md:py-4">
              {currentFeature.features.map((feature, featIndex) => (
                <div
                  className={classNames(
                    "relative flex items-center pl-8 font-normal",
                    currentFeature.features.length > 5 ? "lg:mt-2" : currentFeature.features.length < 4 ? "lg:mt-8" : "lg:mt-6",
                  )}
                  key={`feat-index-${featIndex}`}
                >
                  <svg className="absolute left-0 top-1 h-5 w-5 text-pink-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={classNames("text-left text-base leading-relaxed text-pink-900 dark:text-white", `lg:text-${currentFeature.textSize}`)}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-16 space-y-8 text-left text-slate-700 dark:text-zinc-100">
          {bounties.map((bounty, index) => (
            <li
              onClick={useOpen}
              data-url={bounty.link}
              key={`bounty-${index}`}
              className="my-8 flex cursor-pointer select-none flex-col justify-between space-y-8 rounded-lg bg-white p-8 shadow-xl shadow-slate-900/10 transition-colors delay-75 ease-linear dark:bg-zinc-800 md:hover:bg-pink-100 dark:md:hover:bg-zinc-800/40 lg:flex-row lg:items-center lg:space-y-0"
            >
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0">
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
                    <div className="text-sm text-pink-700 dark:text-pink-300">Organizer</div>
                  </div>
                </div>
                <div className="lg:w-[124px]">
                  <div className="font-mono font-extrabold tracking-tight">{bounty.rewards}</div>
                  <div className="whitespace-nowrap text-sm text-pink-700 dark:text-pink-300">Rewards up to</div>
                </div>
                <div>
                  <div className="text-sm font-medium tracking-tight" dangerouslySetInnerHTML={{ __html: bounty.description }} />
                  <div className="text-sm text-pink-700 dark:text-pink-300">Description</div>
                </div>
                <div>
                  <div
                    className={classNames(
                      "flex items-center space-x-[2px] font-extrabold uppercase",
                      ["open", "complete"].includes(bounty.status) && "text-green-700 dark:text-green-300",
                      bounty.status === "pending" && "text-orange-700 dark:text-orange-300",
                    )}
                  >
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
                    {bounty.status === "complete" && (
                      <>
                        <AiOutlineFileDone />
                        <span>Complete</span>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-pink-700 dark:text-pink-300">Status</div>
                </div>
                <div className="flex space-x-2">
                  <a className="featuredLink inline-flex items-center justify-center whitespace-nowrap" target="_blank" href={bounty.link} rel="noreferrer nofollow">
                    View bounty
                  </a>
                  <a
                    className="featuredLink inline-flex items-center justify-center whitespace-nowrap"
                    target="_blank"
                    href={bounty.status !== "complete" ? bounty.submit : bounty.finalSubmission}
                    rel="noreferrer nofollow"
                  >
                    {bounty.status !== "complete" ? "Submit bounty" : "Final submission"}
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
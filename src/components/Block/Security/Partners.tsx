import React, { MouseEvent } from "react";
import { IoLogoTwitter } from "react-icons/io";
import alliance from "@json/security/partners.json";
import AtomQuoteIcon from "@/components/Atom/QuoteIcon";

export default function BlockSecurityPartners() {
  const useOpen = (event: MouseEvent) => {
    const currentTarget = event.target as HTMLElement;
    if (!currentTarget.closest("a")) {
      window.open(currentTarget.closest("li")?.dataset.url, "_blank");
    }
  };

  return (
    <ul role="list" className="mx-auto my-16 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
      {alliance
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
        .map((singleAllie, singleAllieIndex) => (
          <li
            data-url={singleAllie.website}
            key={singleAllieIndex}
            className="relative flex cursor-pointer select-none rounded-lg bg-white p-6 shadow-xl shadow-slate-900/10 transition-colors delay-75 ease-linear dark:bg-zinc-700 md:hover:bg-white/60 dark:md:hover:bg-zinc-700/50"
            onClick={useOpen}
          >
            <figure className="flex flex-col items-stretch">
              <AtomQuoteIcon className="absolute left-6 top-6 fill-pink-100/40 group-hover:fill-white/70 dark:fill-pink-50/5" />
              <blockquote className="relative mb-6 pl-[50px] pt-[25px]">
                <p className="text-right text-lg text-slate-700 dark:text-zinc-100">{singleAllie.content}</p>
              </blockquote>
              <figcaption className="relative mt-auto flex items-center justify-between border-t-[0.5px] border-pink-200 pt-6 text-left">
                <div>
                  <a
                    rel="noreferrer"
                    href={singleAllie.website}
                    target="_blank"
                    className="mt-3 flex items-center whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-xl font-extrabold uppercase tracking-tight text-transparent transition-all delay-75 ease-linear dark:from-pink-50 dark:to-pink-300 lg:hover:from-pink-700 lg:hover:to-pink-900 lg:hover:dark:from-pink-400 lg:hover:dark:to-pink-600"
                  >
                    {singleAllie.name}
                  </a>
                  <a
                    href={`https://twitter.com/${singleAllie.twitter}`}
                    target="_blank"
                    className="group inline-flex items-center space-x-1.5 font-semibold text-pink-700 underline decoration-from-font underline-offset-4 dark:text-pink-100 md:space-x-2 md:no-underline md:hover:text-pink-700 md:hover:underline"
                    rel="noreferrer"
                  >
                    <small className="font-mono lowercase tracking-tight">follow on</small> <IoLogoTwitter className="h-[20px] w-auto md:opacity-25 md:group-hover:opacity-100" />
                  </a>
                </div>
                <a
                  rel="noreferrer"
                  href={singleAllie.website}
                  target="_blank"
                  className="inline-flex overflow-hidden rounded-full bg-slate-50/40 p-[5px] shadow-md shadow-slate-900/20 dark:bg-slate-100"
                >
                  <img className="h-14 w-14 rounded-full object-contain" src={`/content/images/security-partners/${singleAllie.logo}`} alt={singleAllie.name} width={70} height={70} />
                </a>
              </figcaption>
            </figure>
          </li>
        ))}
    </ul>
  );
}
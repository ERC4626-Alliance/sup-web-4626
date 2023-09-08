import React, { MouseEvent } from "react";

import Container from "@/components/Container";
import AtomQuoteIcon from "@/components/Atom/QuoteIcon";

import { IoLogoTwitter } from "react-icons/io";
import alliance from "@json/alliance.json";

export default function BlockAlliance() {
  const useOpen = (event: MouseEvent) => {
    const currentTarget = event.target as HTMLElement;
    // @ts-ignore
    !currentTarget.closest("a") && window.open(currentTarget.closest("li")?.dataset.url, "_blank");
  };

  return (
    <section id="alliance" className="mt-8 bg-gradient-to-r from-pink-100 to-pink-300 py-16 pb-1 text-center dark:from-pink-600 dark:to-pink-900">
      <Container>
        <div className="mx-auto max-w-5xl text-slate-700 dark:text-zinc-100 md:text-center">
          <div className="mb-8 w-auto justify-center space-y-3 text-center" data-aos="fade-up" data-aos-delay="100">
            <h2 className="aos-init aos-animate text-center text-2xl font-extrabold tracking-tight md:max-w-full md:text-3xl" data-aos="slide-up">
              <span className="relative -mb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text pb-1 text-transparent dark:from-pink-100 dark:to-pink-300">
                4626 Alliance
              </span>
            </h2>
          </div>
          <p className="mu-4 text-xl leading-relaxed">
            <strong>The 4626 Alliance</strong> is a group of leading protocols and applications that share the mission of supporting the development and deployment of
            <code className="mx-[2px]  select-none rounded-lg bg-pink-100 px-2 py-1 dark:bg-pink-900">ERC-4626</code> vaults.
            <code className="mx-[2px] select-none rounded-lg bg-pink-100 px-2 py-1 dark:bg-pink-900">ERC-4626</code>
            drastically simplifies the process of building cool and useful applications by decreasing the complexity of integration while improving UX and security.
          </p>
        </div>
        <ul role="list" className="mx-auto my-16 grid grid-cols-1 gap-6 sm:gap-8 xl:mt-20 xl:max-w-none xl:grid-cols-4">
          {alliance
            .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
            .map((singleAllie, singleAllieIndex) => (
              <li
                data-url={singleAllie.website}
                key={singleAllieIndex}
                className="relative flex cursor-pointer select-none rounded-lg bg-white p-6 shadow-xl shadow-slate-900/10  transition-colors delay-75 ease-linear dark:bg-zinc-700 md:hover:bg-white/60 dark:md:hover:bg-zinc-700/50"
                onClick={useOpen}
              >
                <figure className="flex flex-col items-stretch">
                  <AtomQuoteIcon className="absolute left-6 top-6 fill-pink-100/40 group-hover:fill-white/70 dark:fill-pink-50/5" />
                  <blockquote className="relative mb-6">
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
                        <small className="font-mono lowercase tracking-tight">follow on</small>{" "}
                        <IoLogoTwitter className="h-[20px] w-auto md:opacity-25 md:group-hover:opacity-100" />
                      </a>
                    </div>
                    <a
                      rel="noreferrer"
                      href={singleAllie.website}
                      target="_blank"
                      className="inline-flex overflow-hidden rounded-full bg-slate-50/40 p-[5px] shadow-md shadow-slate-900/20 dark:bg-slate-100"
                    >
                      <img className="h-14 w-14 rounded-full object-contain" src={`/content/images/alliance/${singleAllie.logo}`} alt={singleAllie.name} width={70} height={70} />
                    </a>
                  </figcaption>
                </figure>
              </li>
            ))}
        </ul>
        <div className="flex flex-col items-center pb-8 md:mt-8">
          <div className="py-16">
            <div className="justify-center text-center mb-8 w-auto space-y-3" data-aos="fade-up" data-aos-delay="100">
              <h2 className="aos-init aos-animate text-center text-2xl font-extrabold tracking-tight md:max-w-full md:text-3xl" data-aos="slide-up">
                <span className="relative -mb-1 block bg-gradient-to-r dark:from-pink-100 dark:to-pink-300 from-pink-500 to-pink-900 bg-clip-text pb-1 text-transparent">
                  Funds Raised
                </span>
              </h2>
            </div>
            <div className="text-xl leading-relaxed text-slate-700 dark:text-zinc-100">The alliance contributes capital to advance the development of the ERC-4626 ecosystem</div>
            <div className="mt-8 flex items-center justify-center whitespace-nowrap bg-gradient-to-bl from-pink-500 to-pink-900 bg-clip-text text-4xl font-black text-transparent dark:from-pink-100 dark:to-pink-300">
              $37,000
            </div>
          </div>

          <a
            target="_blank"
            href="https://forms.gle/DsCsttsxBUYQTB9r6"
            rel="nofollow noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border-2 border-pink-700 px-8 py-5 text-xl font-medium text-pink-700 shadow-sm transition-all dark:border-pink-300 dark:text-pink-300 md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md dark:md:hover:bg-pink-600"
          >
            Join the Alliance
          </a>
        </div>
      </Container>
    </section>
  );
}
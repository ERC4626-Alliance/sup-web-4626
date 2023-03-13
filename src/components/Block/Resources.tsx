import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import React from "react";
import Link from "next/link";
import { IoLogoGithub, IoLogoYoutube, IoMdChatbubbles } from "react-icons/io";

export default function BlockResources() {
  return (
    <div className="uiBlock darkBackground">
      <Container>
        <AtomTitle alignText="center" inverted ignoreDarkMode>
          ERC-4626 Resources
        </AtomTitle>
        <div className="mx-auto max-w-5xl text-pink-100 md:text-center">
          <p className="mt-4 text-xl leading-relaxed">
            Browse a collection of resources on <code className="mx-1 select-none rounded-lg bg-pink-100 px-2 py-1 text-pink-900">ERC-4626</code> including useful GitHub repos,
            live vaults, unit tests, videos, tweets and more to help you get started with deploying your first vault.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 mt-16 mb-8 grid max-w-2xl cursor-default select-none grid-cols-1 gap-6 text-left text-sm text-pink-700 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          <li className="rounded-lg p-8 bg-white dark:bg-zinc-700 shadow-xl shadow-slate-900/10 lg:hover:bg-white/70 dark:lg:hover:bg-zinc-700/70">
            <IoLogoGithub className="h-8 w-8" />
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-400 dark:from-pink-100 to-pink-900 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent">
              GitHub Repos
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-pink-900 dark:text-white">Extensions, wrappers, utilities, examples helping to adopt the ERC-4626 standard.</p>
          </li>
          <li className="rounded-lg p-8 bg-white dark:bg-zinc-700 shadow-xl shadow-slate-900/10 lg:hover:bg-white/70 dark:lg:hover:bg-zinc-700/70">
            <IoLogoYoutube className="h-8 w-8" />
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-400 dark:from-pink-100 to-pink-900 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent">
              Videos
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-pink-900 dark:text-white">Guides, tutorials, keynotes and reviews helping to dive into the standard</p>
          </li>
          <li className="rounded-lg p-8 bg-white dark:bg-zinc-700 shadow-xl shadow-slate-900/10 lg:hover:bg-white/70 dark:lg:hover:bg-zinc-700/70">
            <IoMdChatbubbles className="h-8 w-8" />
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-400 dark:from-pink-100 to-pink-900 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent">
              Tweets & stories
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-pink-900 dark:text-white">Relevant social media posts, articles, tweets and highlights about the ERC-4626 standard</p>
          </li>
        </ul>
        <Link href="/resources">
          <a
            className="mt-16 inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-sm featuredLink text-pink-300 px-8 py-5 text-xl font-medium hover:transition-all">
            Explore resources
          </a>
        </Link>
      </Container>
    </div>
  );
}
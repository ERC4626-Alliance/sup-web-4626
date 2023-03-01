import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import React from "react";
import Link from "next/link";
import { IoLogoGithub, IoLogoYoutube, IoMdChatbubbles } from "react-icons/io";

export default function BlockResources() {
  return (
    <div className="w-full bg-gradient-to-r from-pink-700 to-pink-900 py-16 text-center">
      <Container>
        <AtomTitle alignText="center" inverted={true}>
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
          <li className="rounded-lg bg-pink-100 shadow-lg p-8">
            <IoLogoGithub className="h-8 w-8" />
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent">
              GitHub Repos
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-pink-900">Extensions, wrappers, utilities, examples helping to adopt the ERC-4626 standard.</p>
          </li>
          <li className="rounded-lg bg-pink-100 shadow-lg p-8">
            <IoLogoYoutube className="h-8 w-8" />
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent">
              Videos
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-pink-900">Guides, tutorials, keynotes and reviews helping to dive into the standard</p>
          </li>
          <li className="rounded-lg bg-pink-100 shadow-lg p-8">
            <IoMdChatbubbles className="h-8 w-8" />
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent">
              Tweets & stories
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-pink-900">Relevant social media posts, articles, tweets and highlights about the ERC-4626 standard</p>
          </li>
        </ul>
        <Link href="/resources">
          <a
            className="mt-16 inline-flex items-center justify-center whitespace-nowrap rounded-md shadow-sm bg-white px-8 py-5 text-xl font-medium text-pink-700 hover:transition-all md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md">
            Explore resources
          </a>
        </Link>
      </Container>
    </div>
  );
}
import Container from "../Container";
import { IoLogoGithub } from "react-icons/io";
import React from "react";
import resources from "@/content/pinned-repositories.json";


export default function PinnedResources() {
  return (
    <Container>
      <ul
        role="list"
        className="mx-auto mb-8 grid max-w-2xl cursor-default select-none grid-cols-1 gap-6 text-left text-sm text-pink-700 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
      >
        {resources.map((resource, index) => (
          <a
            key={`pinned-resource-${index}`}
            href={resource.href}
            target="_blank"
            rel="nofollow noreferrer"
            className="rounded-lg bg-white p-8 shadow-xl shadow-slate-900/10 dark:bg-pink-700 dark:text-white lg:hover:bg-white/70 dark:lg:hover:bg-pink-700/70"
          >
            <div className="flex flex-nowrap justify-between">
              <IoLogoGithub className="h-8 w-8" />
              <small>Created by {resource.creator}</small>
            </div>
            <h3 className="mt-3 whitespace-nowrap bg-gradient-to-r from-pink-400 to-pink-900 dark:from-pink-50 dark:to-pink-300 bg-clip-text text-lg font-extrabold capitalize tracking-tight text-transparent">
              {resource.title}
            </h3>
            <p className="mt-2 leading-relaxed dark:text-white">{resource.description}</p>
          </a>
        ))}
      </ul>
    </Container>
  );
}